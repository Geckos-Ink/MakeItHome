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
    private var timer: Timer?
    private var observers: [(NotificationCenter, NSObjectProtocol)] = []
    private var policy = FocusedWindowPointerPolicy<Focus>()
    private var generation: UInt64 = 0
    private var queryInFlight = false
    private var systemAsleep = false
    private var sessionInactive = false
    private var resumeAfter: TimeInterval = 0

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
        timer?.invalidate()
        for (center, observer) in observers { center.removeObserver(observer) }
    }

    private func observe(_ name: Notification.Name, center: NotificationCenter) {
        let observer = center.addObserver(forName: name, object: nil, queue: .main) { [weak self] notification in
            guard let self else { return }
            switch notification.name {
            case NSWorkspace.willSleepNotification: self.systemAsleep = true
            case NSWorkspace.didWakeNotification: self.systemAsleep = false
            case NSWorkspace.sessionDidResignActiveNotification: self.sessionInactive = true
            case NSWorkspace.sessionDidBecomeActiveNotification: self.sessionInactive = false
            default: break
            }
            self.reset()
            self.resumeAfter = ProcessInfo.processInfo.systemUptime + 2
        }
        observers.append((center, observer))
    }

    private func reset() {
        generation &+= 1
        policy.reset()
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
        if app.processIdentifier == ProcessInfo.processInfo.processIdentifier {
            _ = policy.observe(nil)
            return
        }
        guard !queryInFlight else { return }
        queryInFlight = true
        let pid = app.processIdentifier
        let requestGeneration = generation
        let startedAt = ProcessInfo.processInfo.systemUptime
        let previousFocus = policy.previousFocus
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
                guard changed, !self.isInteractionActive(), NSEvent.pressedMouseButtons == 0,
                      let frame = snapshot.frame, let event = CGEvent(source: nil),
                      let destination = FocusedWindowPointerGeometry.destination(
                        window: frame, pointer: event.location, displays: self.displayFrames),
                      CGWarpMouseCursorPosition(destination) == .success else { return }
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
              AXValueGetValue(sizeValue as! AXValue, .cgSize, &size) else {
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
        return Snapshot(focus: focus, frame: CGRect(origin: position, size: size))
    }
}
