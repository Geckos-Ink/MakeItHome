import AppKit
import ApplicationServices

/// Main-thread owned. Only bounded Accessibility reads run on the worker;
/// settings, focus history, screen topology and cursor movement stay on main.
final class FocusedWindowPointerMonitor {
    private struct Focus: Equatable {
        let pid: pid_t
        let window: AXUIElement

        static func == (lhs: Focus, rhs: Focus) -> Bool {
            lhs.pid == rhs.pid && CFEqual(lhs.window, rhs.window)
        }
    }

    private struct Snapshot {
        let focus: Focus
        let frame: CGRect?
    }

    private let isEnabled: () -> Bool
    private let isInteractionActive: () -> Bool
    private let didMove: (CGPoint) -> Void
    private let queryQueue = DispatchQueue(label: "ink.makeithome.focusedWindowPointer", qos: .userInitiated)
    private let selectionQueue = DispatchQueue(label: "ink.makeithome.previewWindowSelection", qos: .userInitiated)
    private final class SelectionToken {
        private let lock = NSLock()
        private var cancelled = false
        func cancel() { lock.lock(); cancelled = true; lock.unlock() }
        var isCancelled: Bool { lock.lock(); defer { lock.unlock() }; return cancelled }
    }
    private var selectionToken: SelectionToken?
    private var timer: Timer?
    private var observers: [(NotificationCenter, NSObjectProtocol)] = []
    private var policy = FocusedWindowPointerPolicy<Focus>()
    private var generation: UInt64 = 0
    private var queryInFlight = false
    private var systemAsleep = false
    private var sessionInactive = false
    private var resumeAfter: TimeInterval = 0
    private var windowSelectionGeneration: UInt64 = 0
    private var pendingPointerSelection: (pid: pid_t, window: AXUIElement?, deadline: TimeInterval)?
    private struct ScreenGeometry: Equatable {
        let id: CGDirectDisplayID
        let frame: CGRect
        let scale: CGFloat
    }
    private var screenGeometry: [ScreenGeometry] = []
    private var currentScreenGeometry: [ScreenGeometry] {
        NSScreen.screens.map { ScreenGeometry(id: $0.displayID, frame: $0.frame, scale: $0.backingScaleFactor) }.sorted { $0.id < $1.id }
    }

    init(isEnabled: @escaping () -> Bool,
         isInteractionActive: @escaping () -> Bool,
         didMove: @escaping (CGPoint) -> Void) {
        self.isEnabled = isEnabled
        self.isInteractionActive = isInteractionActive
        self.didMove = didMove
    }

    func start() {
        dispatchPrecondition(condition: .onQueue(.main))
        guard timer == nil else { return }
        screenGeometry = currentScreenGeometry
        let workspace = NSWorkspace.shared.notificationCenter
        for name in [NSWorkspace.willSleepNotification, NSWorkspace.didWakeNotification,
                     NSWorkspace.screensDidSleepNotification, NSWorkspace.screensDidWakeNotification,
                     NSWorkspace.sessionDidResignActiveNotification, NSWorkspace.sessionDidBecomeActiveNotification] {
            observe(name, center: workspace)
        }
        observe(NSApplication.didChangeScreenParametersNotification, center: .default)
        observe(Static.focusedWindowPointerDidChange, center: .default)
        let timer = Timer(timeInterval: 0.25, repeats: true) { [weak self] _ in self?.sample() }
        self.timer = timer
        RunLoop.main.add(timer, forMode: .common)
    }

    deinit {
        selectionToken?.cancel()
        timer?.invalidate()
        for (center, observer) in observers { center.removeObserver(observer) }
    }

    private func observe(_ name: Notification.Name, center: NotificationCenter) {
        let observer = center.addObserver(forName: name, object: nil, queue: .main) { [weak self] notification in
            guard let self else { return }
            if notification.name == NSApplication.didChangeScreenParametersNotification {
                let geometry = self.currentScreenGeometry
                guard geometry != self.screenGeometry else { return }
                self.screenGeometry = geometry
            }
            switch notification.name {
            case NSWorkspace.willSleepNotification: self.systemAsleep = true
            case NSWorkspace.didWakeNotification: self.systemAsleep = false
            case NSWorkspace.sessionDidResignActiveNotification: self.sessionInactive = true
            case NSWorkspace.sessionDidBecomeActiveNotification: self.sessionInactive = false
            default: break
            }
            self.reset()
            self.windowSelectionGeneration &+= 1
            self.selectionToken?.cancel()
            self.resumeAfter = ProcessInfo.processInfo.systemUptime + 2
        }
        observers.append((center, observer))
    }

    private func reset() {
        generation &+= 1
        policy.reset()
        pendingPointerSelection = nil
    }

    /// Called after the presenting overscreen has closed and yielded activation.
    /// Resolve a real window through its current WindowServer geometry. Public
    /// AX geometry/title matching must be unique; ambiguous matches never raise a peer.
    func focusWindow(pid: pid_t, bundleID: String?, windowID: Int?) {
        dispatchPrecondition(condition: .onQueue(.main))
        windowSelectionGeneration &+= 1
        let selection = windowSelectionGeneration
        selectionToken?.cancel()
        let token = SelectionToken()
        selectionToken = token
        pendingPointerSelection = nil
        guard AXIsProcessTrusted() else { return }
        let deadline = ProcessInfo.processInfo.systemUptime + 1.5
        selectionQueue.asyncAfter(deadline: .now() + 0.15) { [weak self] in
            guard !token.isCancelled else { return }
            let window = windowID.flatMap { Self.resolveWindow(pid: pid, windowID: $0, deadline: deadline, token: token) }
            DispatchQueue.main.async { [weak self] in
                guard let self, !token.isCancelled, self.windowSelectionGeneration == selection,
                      AXIsProcessTrusted(),
                      ProcessInfo.processInfo.systemUptime < deadline,
                      NSWorkspace.shared.frontmostApplication?.processIdentifier == pid,
                      let app = NSRunningApplication(processIdentifier: pid), !app.isTerminated,
                      app.bundleIdentifier == bundleID else { return }
                if windowID != nil && window == nil { return }
                if let window {
                    AXUIElementSetMessagingTimeout(window, 0.05)
                    AXUIElementSetAttributeValue(window, kAXMinimizedAttribute as CFString, kCFBooleanFalse)
                    AXUIElementPerformAction(window, kAXRaiseAction as CFString)
                    AXUIElementSetAttributeValue(window, kAXMainAttribute as CFString, kCFBooleanTrue)
                    AXUIElementSetAttributeValue(window, kAXFocusedAttribute as CFString, kCFBooleanTrue)
                }
                guard self.isEnabled() else { return }
                self.pendingPointerSelection = (pid, window, deadline)
                self.sample()
            }
        }
    }

    private static func resolveWindow(pid: pid_t, windowID: Int, deadline: TimeInterval, token: SelectionToken) -> AXUIElement? {
        guard !token.isCancelled, ProcessInfo.processInfo.systemUptime < deadline,
              windowID >= 0, windowID <= Int(UInt32.max), AXIsProcessTrusted(),
              let records = CGWindowListCopyWindowInfo(.optionIncludingWindow, CGWindowID(windowID)) as? [[String: Any]],
              let record = records.first(where: { ($0[kCGWindowNumber as String] as? NSNumber)?.intValue == windowID }),
              (record[kCGWindowOwnerPID as String] as? NSNumber)?.int32Value == pid,
              let bounds = record[kCGWindowBounds as String] as? NSDictionary,
              let frame = CGRect(dictionaryRepresentation: bounds as CFDictionary), frame.width > 0, frame.height > 0 else { return nil }
        let title = (record[kCGWindowName as String] as? String).flatMap { $0.isEmpty ? nil : $0 }
        func sameFrame(_ candidate: CGRect) -> Bool {
            abs(candidate.minX - frame.minX) <= 2 && abs(candidate.minY - frame.minY) <= 2 &&
            abs(candidate.width - frame.width) <= 2 && abs(candidate.height - frame.height) <= 2
        }
        // AX does not expose a public WindowServer ID mapping. Require
        // uniqueness in both inventories, including overlapping windows that
        // an app may omit from its Accessibility list.
        guard !token.isCancelled, ProcessInfo.processInfo.systemUptime < deadline,
              let peers = CGWindowListCopyWindowInfo(.optionAll, kCGNullWindowID) as? [[String: Any]] else { return nil }
        let matchingIDs = peers.compactMap { peer -> Int? in
            guard (peer[kCGWindowOwnerPID as String] as? NSNumber)?.int32Value == pid,
                  (peer[kCGWindowLayer as String] as? NSNumber)?.intValue == 0,
                  let bounds = peer[kCGWindowBounds as String] as? NSDictionary,
                  let candidate = CGRect(dictionaryRepresentation: bounds as CFDictionary), sameFrame(candidate) else { return nil }
            if let title, let peerTitle = peer[kCGWindowName as String] as? String,
               !peerTitle.isEmpty, peerTitle != title { return nil }
            return (peer[kCGWindowNumber as String] as? NSNumber)?.intValue
        }
        guard Set(matchingIDs) == [windowID] else { return nil }
        let app = AXUIElementCreateApplication(pid)
        AXUIElementSetMessagingTimeout(app, 0.05)
        var value: CFTypeRef?
        guard AXUIElementCopyAttributeValue(app, kAXWindowsAttribute as CFString, &value) == .success,
              let windows = value as? [AXUIElement], windows.count <= 128 else { return nil }
        var match: AXUIElement?
        for window in windows {
            guard !token.isCancelled, ProcessInfo.processInfo.systemUptime < deadline else { return nil }
            AXUIElementSetMessagingTimeout(window, 0.05)
            guard let candidate = windowFrame(window) else { continue }
            if sameFrame(candidate) {
                if let title {
                    var titleValue: CFTypeRef?
                    guard AXUIElementCopyAttributeValue(window, kAXTitleAttribute as CFString, &titleValue) == .success,
                          let candidateTitle = titleValue as? String else { return nil }
                    if candidateTitle != title { continue }
                }
                if match != nil { return nil }
                match = window
            }
        }
        return match
    }

    private static func windowFrame(_ window: AXUIElement) -> CGRect? {
        var positionValue: CFTypeRef?
        var sizeValue: CFTypeRef?
        var position = CGPoint.zero
        var size = CGSize.zero
        guard AXUIElementCopyAttributeValue(window, kAXPositionAttribute as CFString, &positionValue) == .success,
              AXUIElementCopyAttributeValue(window, kAXSizeAttribute as CFString, &sizeValue) == .success,
              let positionValue, CFGetTypeID(positionValue) == AXValueGetTypeID(),
              let sizeValue, CFGetTypeID(sizeValue) == AXValueGetTypeID(),
              AXValueGetType(positionValue as! AXValue) == .cgPoint,
              AXValueGetType(sizeValue as! AXValue) == .cgSize,
              AXValueGetValue(positionValue as! AXValue, .cgPoint, &position),
              AXValueGetValue(sizeValue as! AXValue, .cgSize, &size) else { return nil }
        return CGRect(origin: position, size: size)
    }

    private var displayFrames: [CGRect] {
        NSScreen.screens.map { CGDisplayBounds($0.displayID) }
    }

    private var canSample: Bool {
        isEnabled() && !systemAsleep && !sessionInactive && AXIsProcessTrusted() &&
        ProcessInfo.processInfo.systemUptime >= resumeAfter && NSScreen.screens.count > 1 &&
        NSScreen.screens.contains { CGDisplayIsAsleep($0.displayID) == 0 }
    }

    private func sample() {
        guard canSample else { reset(); return }
        guard let app = NSWorkspace.shared.frontmostApplication else { return }
        if let request = pendingPointerSelection,
           request.pid != app.processIdentifier || ProcessInfo.processInfo.systemUptime >= request.deadline {
            pendingPointerSelection = nil
        }
        if app.processIdentifier == ProcessInfo.processInfo.processIdentifier {
            _ = policy.observe(nil)
            return
        }
        guard !queryInFlight else { return }
        queryInFlight = true
        let pid = app.processIdentifier
        let requestGeneration = generation
        let startedAt = ProcessInfo.processInfo.systemUptime
        let previousFocus = pendingPointerSelection == nil ? policy.previousFocus : nil
        queryQueue.async { [weak self] in
            let snapshot = Self.readFocusedWindow(pid: pid, previousFocus: previousFocus)
            DispatchQueue.main.async { [weak self] in
                guard let self else { return }
                self.queryInFlight = false
                guard self.generation == requestGeneration, self.canSample,
                      ProcessInfo.processInfo.systemUptime - startedAt < 0.5,
                      NSWorkspace.shared.frontmostApplication?.processIdentifier == pid,
                      let snapshot else { return }
                let changed = self.policy.observe(snapshot.focus)
                let explicit = self.pendingPointerSelection.map {
                    $0.pid == pid && ProcessInfo.processInfo.systemUptime < $0.deadline &&
                    ($0.window == nil || CFEqual($0.window!, snapshot.focus.window))
                } ?? false
                // An explicit click may select an already-focused app/window,
                // or its focus event may have occurred while the surface closed.
                guard changed || explicit, !self.isInteractionActive(), NSEvent.pressedMouseButtons == 0,
                      let frame = snapshot.frame, let event = CGEvent(source: nil) else { return }
                if self.pendingPointerSelection != nil && !explicit { return }
                guard let destination = FocusedWindowPointerGeometry.destination(
                    window: frame, pointer: event.location, displays: self.displayFrames) else {
                    if explicit { self.pendingPointerSelection = nil }
                    return
                }
                guard CGWarpMouseCursorPosition(destination) == .success else { return }
                self.pendingPointerSelection = nil
                if let point = CGEvent(source: nil)?.unflippedLocation { self.didMove(point) }
            }
        }
    }

    private static func readFocusedWindow(pid: pid_t, previousFocus: Focus?) -> Snapshot? {
        let app = AXUIElementCreateApplication(pid)
        AXUIElementSetMessagingTimeout(app, 0.05)
        var value: CFTypeRef?
        guard AXUIElementCopyAttributeValue(app, kAXFocusedWindowAttribute as CFString, &value) == .success,
              let value, CFGetTypeID(value) == AXUIElementGetTypeID() else { return nil }
        let window = value as! AXUIElement
        let focus = Focus(pid: pid, window: window)
        // An unchanged focus needs no geometry query and can never move the pointer.
        guard focus != previousFocus else { return Snapshot(focus: focus, frame: nil) }
        AXUIElementSetMessagingTimeout(window, 0.05)

        guard let frame = windowFrame(window) else {
            return Snapshot(focus: focus, frame: nil)
        }
        // Geometry queries can outlive another window switch in the same app.
        // Drop that result rather than moving to the window that just lost focus.
        var currentValue: CFTypeRef?
        guard AXUIElementCopyAttributeValue(app, kAXFocusedWindowAttribute as CFString, &currentValue) == .success,
              let currentValue, CFEqual(window, currentValue) else { return nil }
        var minimizedValue: CFTypeRef?
        if AXUIElementCopyAttributeValue(window, kAXMinimizedAttribute as CFString, &minimizedValue) == .success,
           (minimizedValue as? Bool) == true {
            return Snapshot(focus: focus, frame: nil)
        }
        return Snapshot(focus: focus, frame: frame)
    }
}
