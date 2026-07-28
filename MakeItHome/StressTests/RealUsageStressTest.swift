#if STRESS_TEST_APP

import AppKit
import ApplicationServices
import CoreGraphics
import SceneKit
import SwiftUI

private struct RealUsageStressRandomNumberGenerator: RandomNumberGenerator {
    private var state: UInt64

    init(seed: UInt64) {
        state = seed
    }

    mutating func next() -> UInt64 {
        state &+= 0x9E3779B97F4A7C15
        var value = state
        value = (value ^ (value >> 30)) &* 0xBF58476D1CE4E5B9
        value = (value ^ (value >> 27)) &* 0x94D049BB133111EB
        return value ^ (value >> 31)
    }
}

private struct RealUsageStressPasteboardSnapshot {
    private struct Item {
        let representations: [(NSPasteboard.PasteboardType, Data)]
    }

    private let items: [Item]

    init(pasteboard: NSPasteboard) {
        items = (pasteboard.pasteboardItems ?? []).map { item in
            Item(representations: item.types.compactMap { type in
                item.data(forType: type).map { (type, $0) }
            })
        }
    }

    func restore(to pasteboard: NSPasteboard) {
        pasteboard.clearContents()
        let restoredItems = items.map { snapshotItem -> NSPasteboardItem in
            let item = NSPasteboardItem()
            for (type, data) in snapshotItem.representations {
                item.setData(data, forType: type)
            }
            return item
        }
        if !restoredItems.isEmpty {
            pasteboard.writeObjects(restoredItems)
        }
    }
}

private struct RealUsageStressFixture {
    let url: URL
    let isImage: Bool
}

@MainActor
final class RealUsageStressCoordinator: ObservableObject {
    @Published private(set) var status = "Preparing"
    @Published private(set) var actions = 0
    @Published private(set) var topShortcutEvents = 0
    @Published private(set) var bottomShortcutEvents = 0
    @Published private(set) var observedTopActivations = 0
    @Published private(set) var observedBottomActivations = 0
    @Published private(set) var selectionClicks = 0
    @Published private(set) var previewSelectionClicks = 0
    @Published private(set) var clipboardWrites = 0
    @Published private(set) var clipboardFiles = 0
    @Published private(set) var imageFiles = 0
    @Published private(set) var peakResidentMB = 0.0
    @Published private(set) var peakThreads = 0
    @Published private(set) var lastError: String?

    let configuration: StressLaunchConfiguration

    private let displaysManager: DisplaysManager
    private let pasteboard = NSPasteboard.general
    private var random: RealUsageStressRandomNumberGenerator
    private var runTask: Task<Void, Never>?
    private var selectionTask: Task<Void, Never>?
    private var samplingTask: Task<Void, Never>?
    private var deadline = Date.distantPast
    private var isFinishing = false
    private var didSaveRuntimeState = false
    private var originalShortcutsEnabled = false
    private var originalClipboardCaptureEnabled = true
    private var originalPasteboard: RealUsageStressPasteboardSnapshot?
    private var originalCursorPosition: CGPoint?
    private var lastStressPasteboardChangeCount: Int?
    private var fixtureDirectory: URL?
    private var eventDirectory: URL?
    private var imageFixtures: [RealUsageStressFixture] = []
    private var otherFixtures: [RealUsageStressFixture] = []
    private var fileSequence = 0
    private var lastObservedSide = -1

    init(configuration: StressLaunchConfiguration, displaysManager: DisplaysManager) {
        self.configuration = configuration
        self.displaysManager = displaysManager
        random = RealUsageStressRandomNumberGenerator(seed: configuration.seed)
    }

    func start() {
        guard runTask == nil else { return }
        runTask = Task { [weak self] in
            await self?.run()
        }
    }

    func stop() {
        guard !isFinishing else { return }
        runTask?.cancel()
        Task { [weak self] in
            await self?.finish(completed: false)
        }
    }

    private func run() async {
        saveRuntimeState()
        Static.Init()

        guard await waitForRequiredPermissions() else {
            fail("Screen Recording and Accessibility permissions are required for real-usage stress.")
            await finish(completed: false)
            return
        }

        guard await waitForApplicationRuntime() else {
            fail("The normal display, capture, and window runtime did not become ready.")
            await finish(completed: false)
            return
        }

        do {
            try prepareFixtures()
        } catch {
            fail("Unable to prepare clipboard fixtures: \(error.localizedDescription)")
            await finish(completed: false)
            return
        }

        originalPasteboard = RealUsageStressPasteboardSnapshot(pasteboard: pasteboard)
        originalCursorPosition = CGEvent(source: nil)?.location
        GlobalShortcutManager.shared.setEnabled(true)
        Static.clipboard?.setCaptureEnabled(true)
        deadline = Date().addingTimeInterval(configuration.durationSeconds)
        status = "Running"
        sampleRuntime()
        startSampling()

        let startedSummary =
            "[RealUsageStress] STARTED seed=\(configuration.seed) " +
            "duration=\(String(format: "%.1f", configuration.durationSeconds)) " +
            "cycleRange=\(String(format: "%.2f", configuration.cycleMinimumSeconds))..." +
            "\(String(format: "%.2f", configuration.cycleMaximumSeconds))"
        print(startedSummary)
        writeStressResult(startedSummary, configuration: configuration)

        while shouldContinue {
            performRandomAction()
            actions += 1
            await wait(seconds: nextActionDelay())
        }

        guard !Task.isCancelled else { return }
        await finish(completed: true)
    }

    private func saveRuntimeState() {
        guard !didSaveRuntimeState else { return }
        didSaveRuntimeState = true
        originalShortcutsEnabled = Static.EnableShortcuts
        originalClipboardCaptureEnabled = Static.EnableClipboardCapture
    }

    private func waitForRequiredPermissions() async -> Bool {
        status = "Awaiting permissions"

        if !CGPreflightScreenCaptureAccess() {
            _ = CGRequestScreenCaptureAccess()
        }
        if !AXIsProcessTrusted() {
            let options = [
                kAXTrustedCheckOptionPrompt.takeUnretainedValue() as String: true
            ] as CFDictionary
            _ = AXIsProcessTrustedWithOptions(options)
        }

        let permissionDeadline = Date().addingTimeInterval(90)
        while Date() < permissionDeadline {
            if CGPreflightScreenCaptureAccess(), AXIsProcessTrusted() {
                return true
            }
            await wait(seconds: 0.25)
        }
        return false
    }

    private func waitForApplicationRuntime() async -> Bool {
        status = "Waiting for real app runtime"
        let runtimeDeadline = Date().addingTimeInterval(30)

        while Date() < runtimeDeadline {
            if currentDisplay != nil,
               displaysManager.capturePreview is CapturePreview,
               Static.mainWindow != nil,
               Static.clipboard != nil {
                return true
            }
            await wait(seconds: 0.1)
        }
        return false
    }

    private var currentDisplay: Display? {
        displaysManager.curDisplay ?? Static.mouseInDisplay ?? Static.curDisplay
    }

    private func performRandomAction() {
        let roll = randomInt(upperBound: 100)

        switch roll {
        case 0..<27:
            copyRandomFiles(imageOnly: true)
        case 27..<36:
            copyRandomFiles(imageOnly: false)
        case 36..<59:
            postShortcut(side: 3)
        case 59..<82:
            postShortcut(side: 2)
        default:
            scheduleRandomWindowSelection()
        }
    }

    private func postShortcut(side: Int) {
        switch side {
        case 2:
            bottomShortcutEvents += 1
        case 3:
            topShortcutEvents += 1
        default:
            return
        }

        guard let display = currentDisplay else {
            fail("Unable to resolve the display for shortcut activation.")
            return
        }

        // This is the exact endpoint reached by GlobalShortcutManager after a
        // Carbon hot-key event. macOS intentionally does not feed a process's
        // own synthetic keyboard chord back through RegisterEventHotKey, so the
        // harness invokes the production endpoint directly and leaves the UI
        // automation to real pointer movement/click events.
        display.openSideFromShortcut(side: side)
    }

    private func scheduleRandomWindowSelection() {
        guard selectionTask == nil else { return }

        selectionTask = Task { @MainActor [weak self] in
            guard let self else { return }

            self.postShortcut(side: 2)
            await self.wait(seconds: self.nextCycleDelay())
            guard self.shouldContinue, !Task.isCancelled else {
                self.selectionTask = nil
                return
            }

            if let point = self.randomPreviewWindowPoint() {
                await self.postMouseClick(atQuartzPoint: self.quartzPoint(fromAppKitScreenPoint: point))
                self.previewSelectionClicks += 1
                self.selectionClicks += 1
            } else if let point = self.randomVisibleWindowTitleBarPoint() {
                await self.postMouseClick(atQuartzPoint: point)
                self.selectionClicks += 1
            }

            self.selectionTask = nil
        }
    }

    private func randomPreviewWindowPoint() -> CGPoint? {
        guard let display = currentDisplay,
              display.side == 2,
              display.aboveByPixels >= max(1, Static.OverscreenSize * 0.7),
              let capturePreview = displaysManager.capturePreview as? CapturePreview else {
            return nil
        }

        let points = capturePreview.captureView.realUsageStressWindowScreenPoints()
        guard !points.isEmpty else { return nil }
        return points[randomInt(upperBound: points.count)]
    }

    private func randomVisibleWindowTitleBarPoint() -> CGPoint? {
        guard let windowInfo = CGWindowListCopyWindowInfo(
            [.optionOnScreenOnly, .excludeDesktopElements],
            kCGNullWindowID
        ) as? [[String: Any]] else {
            return nil
        }

        let currentPID = Int(ProcessInfo.processInfo.processIdentifier)
        let maximumScreenHeight = NSScreen.screens.map(\.frame.height).max() ?? 0
        let points = windowInfo.compactMap { info -> CGPoint? in
            guard (info[kCGWindowLayer as String] as? Int) == 0,
                  (info[kCGWindowOwnerPID as String] as? Int) != currentPID,
                  (info[kCGWindowAlpha as String] as? Double ?? 1) > 0,
                  let title = info[kCGWindowName as String] as? String,
                  !title.isEmpty,
                  let boundsDictionary = info[kCGWindowBounds as String] as? [String: Any],
                  let bounds = CGRect(dictionaryRepresentation: boundsDictionary as CFDictionary),
                  bounds.width >= 240,
                  bounds.height >= 100,
                  maximumScreenHeight == 0 || bounds.height < maximumScreenHeight * 0.92 else {
                return nil
            }

            // The middle of a standard title bar switches windows without clicking
            // document content or a traffic-light control.
            return CGPoint(x: bounds.midX, y: bounds.minY + min(14, bounds.height * 0.1))
        }

        guard !points.isEmpty else { return nil }
        return points[randomInt(upperBound: points.count)]
    }

    private func postMouseClick(atQuartzPoint point: CGPoint) async {
        guard let source = CGEventSource(stateID: .hidSystemState),
              let move = CGEvent(
                mouseEventSource: source,
                mouseType: .mouseMoved,
                mouseCursorPosition: point,
                mouseButton: .left
              ),
              let down = CGEvent(
                mouseEventSource: source,
                mouseType: .leftMouseDown,
                mouseCursorPosition: point,
                mouseButton: .left
              ),
              let up = CGEvent(
                mouseEventSource: source,
                mouseType: .leftMouseUp,
                mouseCursorPosition: point,
                mouseButton: .left
              ) else {
            fail("Unable to create a mouse-selection event.")
            return
        }

        source.localEventsSuppressionInterval = 0
        down.setIntegerValueField(.mouseEventClickState, value: 1)
        up.setIntegerValueField(.mouseEventClickState, value: 1)
        move.post(tap: .cghidEventTap)
        down.post(tap: .cghidEventTap)
        await wait(seconds: 0.015)
        up.post(tap: .cghidEventTap)
    }

    private func quartzPoint(fromAppKitScreenPoint point: CGPoint) -> CGPoint {
        if let event = CGEvent(source: nil) {
            let quartzCursor = event.location
            let appKitCursor = NSEvent.mouseLocation
            return CGPoint(
                x: point.x + (quartzCursor.x - appKitCursor.x),
                y: (quartzCursor.y + appKitCursor.y) - point.y
            )
        }

        let mainScreenHeight = NSScreen.screens.first?.frame.maxY ?? point.y
        return CGPoint(x: point.x, y: mainScreenHeight - point.y)
    }

    private func copyRandomFiles(imageOnly: Bool) {
        guard let eventDirectory else { return }

        let batchCount = randomInt(upperBound: 100) < 18 ? randomInt(in: 2...5) : 1
        var copiedURLs: [URL] = []
        var copiedImageCount = 0

        for _ in 0..<batchCount {
            let useImage = imageOnly || otherFixtures.isEmpty || randomInt(upperBound: 100) < 72
            let candidates = useImage ? imageFixtures : otherFixtures
            guard !candidates.isEmpty else { continue }
            let source = candidates[randomInt(upperBound: candidates.count)]

            fileSequence += 1
            let fileExtension = source.url.pathExtension
            let destination = eventDirectory
                .appendingPathComponent("copy-\(fileSequence)-\(UUID().uuidString)")
                .appendingPathExtension(fileExtension)

            do {
                do {
                    try FileManager.default.linkItem(at: source.url, to: destination)
                } catch {
                    try FileManager.default.copyItem(at: source.url, to: destination)
                }
                copiedURLs.append(destination)
                if source.isImage {
                    copiedImageCount += 1
                }
            } catch {
                fail("Unable to create a clipboard file: \(error.localizedDescription)")
                return
            }
        }

        guard !copiedURLs.isEmpty else { return }
        pasteboard.clearContents()
        guard pasteboard.writeObjects(copiedURLs.map { $0 as NSURL }) else {
            fail("Unable to write file URLs to the system clipboard.")
            return
        }

        lastStressPasteboardChangeCount = pasteboard.changeCount
        clipboardWrites += 1
        clipboardFiles += copiedURLs.count
        imageFiles += copiedImageCount
        Static.clipboard?.checkClipboard()
    }

    private func prepareFixtures() throws {
        let root = FileManager.default.temporaryDirectory
            .appendingPathComponent("MakeItHomeRealUsageStress-\(UUID().uuidString)", isDirectory: true)
        let sources = root.appendingPathComponent("sources", isDirectory: true)
        let events = root.appendingPathComponent("events", isDirectory: true)
        try FileManager.default.createDirectory(at: sources, withIntermediateDirectories: true)
        try FileManager.default.createDirectory(at: events, withIntermediateDirectories: true)
        fixtureDirectory = root
        eventDirectory = events

        loadCopySourceFixtures()

        if imageFixtures.isEmpty {
            let sizes = [256, 384, 512, 768, 1024, 1536, 2048]
            let extensions = ["png", "jpg", "tiff"]
            for index in 0..<18 {
                let size = sizes[index % sizes.count]
                let fileExtension = extensions[index % extensions.count]
                let destination = sources
                    .appendingPathComponent("image-\(index)-\(size)")
                    .appendingPathExtension(fileExtension)
                guard let data = makeImageData(index: index, size: size, fileExtension: fileExtension) else {
                    throw NSError(
                        domain: "MakeItHome.RealUsageStress",
                        code: 1,
                        userInfo: [NSLocalizedDescriptionKey: "Could not encode \(destination.lastPathComponent)."]
                    )
                }
                try data.write(to: destination, options: .atomic)
                imageFixtures.append(RealUsageStressFixture(url: destination, isImage: true))
            }
        }

        if let bundledWallpaper = Bundle.main.url(forResource: "wallpaper", withExtension: "jpeg") {
            imageFixtures.append(RealUsageStressFixture(url: bundledWallpaper, isImage: true))
        }

        for index in 0..<4 {
            let destination = sources.appendingPathComponent("document-\(index).txt")
            let content = (0..<256)
                .map { "MakeItHome real usage stress \(index)-\($0)-\(configuration.seed)" }
                .joined(separator: "\n")
            try Data(content.utf8).write(to: destination, options: .atomic)
            otherFixtures.append(RealUsageStressFixture(url: destination, isImage: false))
        }

        if let bundledVideo = Bundle.main.url(forResource: "release", withExtension: "mov") {
            otherFixtures.append(RealUsageStressFixture(url: bundledVideo, isImage: false))
        }
    }

    private func loadCopySourceFixtures() {
        guard let sourcePath = configuration.copySourcePath, !sourcePath.isEmpty else {
            return
        }

        let sourceDirectory = URL(fileURLWithPath: sourcePath, isDirectory: true)
        let imageExtensions = Set(["avif", "bmp", "gif", "heic", "heif", "jpeg", "jpg", "png", "tif", "tiff", "webp"])
        let otherExtensions = Set(["json", "mov", "mp4", "pdf", "rtf", "txt"])
        let keys: [URLResourceKey] = [.isRegularFileKey, .isReadableKey]

        guard let enumerator = FileManager.default.enumerator(
            at: sourceDirectory,
            includingPropertiesForKeys: keys,
            options: [.skipsHiddenFiles, .skipsPackageDescendants]
        ) else {
            print("[RealUsageStress] copy source unavailable; using generated fixtures: \(sourcePath)")
            return
        }

        for case let url as URL in enumerator {
            guard let values = try? url.resourceValues(forKeys: Set(keys)),
                  values.isRegularFile == true,
                  values.isReadable == true else {
                continue
            }

            let fileExtension = url.pathExtension.lowercased()
            if imageExtensions.contains(fileExtension) {
                imageFixtures.append(RealUsageStressFixture(url: url, isImage: true))
            } else if otherExtensions.contains(fileExtension) {
                otherFixtures.append(RealUsageStressFixture(url: url, isImage: false))
            }
        }

        print(
            "[RealUsageStress] loaded copy source path=\(sourcePath) " +
            "images=\(imageFixtures.count) otherFiles=\(otherFixtures.count)"
        )
    }

    private func makeImageData(index: Int, size: Int, fileExtension: String) -> Data? {
        let imageSize = NSSize(width: size, height: size)
        let image = NSImage(size: imageSize)
        image.lockFocus()

        let hue = CGFloat((index * 47) % 360) / 360
        NSColor(calibratedHue: hue, saturation: 0.78, brightness: 0.82, alpha: 1).setFill()
        NSBezierPath(rect: NSRect(origin: .zero, size: imageSize)).fill()

        for shape in 0..<12 {
            let fraction = CGFloat(shape + 1) / 13
            let diameter = CGFloat(size) * (0.08 + fraction * 0.55)
            let x = CGFloat((shape * 193 + index * 71) % max(1, size)) - diameter / 2
            let y = CGFloat((shape * 137 + index * 109) % max(1, size)) - diameter / 2
            NSColor(
                calibratedHue: (hue + fraction).truncatingRemainder(dividingBy: 1),
                saturation: 0.55,
                brightness: 1,
                alpha: 0.28
            ).setFill()
            NSBezierPath(ovalIn: NSRect(x: x, y: y, width: diameter, height: diameter)).fill()
        }

        NSColor.white.withAlphaComponent(0.72).setStroke()
        let line = NSBezierPath()
        line.lineWidth = max(2, CGFloat(size) * 0.012)
        line.move(to: NSPoint(x: 0, y: CGFloat(size) * 0.2))
        line.line(to: NSPoint(x: CGFloat(size), y: CGFloat(size) * 0.8))
        line.stroke()
        image.unlockFocus()

        guard let tiff = image.tiffRepresentation else { return nil }
        if fileExtension == "tiff" {
            return tiff
        }
        guard let bitmap = NSBitmapImageRep(data: tiff) else { return nil }
        if fileExtension == "jpg" {
            return bitmap.representation(using: .jpeg, properties: [.compressionFactor: 0.86])
        }
        return bitmap.representation(using: .png, properties: [:])
    }

    private func startSampling() {
        samplingTask = Task { @MainActor [weak self] in
            guard let self else { return }
            while self.shouldContinue {
                self.sampleRuntime()
                await self.wait(seconds: 0.1)
            }
        }
    }

    private func sampleRuntime() {
        let sample = StressProcessSample.capture()
        peakResidentMB = max(peakResidentMB, sample.residentMegabytes)
        peakThreads = max(peakThreads, sample.threadCount)

        guard let display = currentDisplay else { return }
        let visibleSide = display.aboveByPixels > 1 ? display.side : -1
        if visibleSide != lastObservedSide {
            if visibleSide == 2 {
                observedBottomActivations += 1
            } else if visibleSide == 3 {
                observedTopActivations += 1
            }
            lastObservedSide = visibleSide
        }
    }

    private func finish(completed: Bool) async {
        guard !isFinishing else { return }
        isFinishing = true
        selectionTask?.cancel()
        samplingTask?.cancel()
        await selectionTask?.value
        await samplingTask?.value
        sampleRuntime()

        restorePasteboardIfUntouched()
        if let clipboard = Static.clipboard {
            clipboard.setCaptureEnabled(false)
            clipboard.setCaptureEnabled(originalClipboardCaptureEnabled)
        }
        GlobalShortcutManager.shared.setEnabled(originalShortcutsEnabled)
        restoreCursor()
        removeFixtures()

        let failed = !completed ||
            lastError != nil ||
            topShortcutEvents == 0 ||
            bottomShortcutEvents == 0 ||
            observedTopActivations == 0 ||
            observedBottomActivations == 0 ||
            selectionClicks == 0 ||
            clipboardWrites == 0 ||
            imageFiles == 0

        status = failed ? "Failed" : "Completed"
        let finalSummary =
            "[RealUsageStress] \(failed ? "FAILED" : "COMPLETED") seed=\(configuration.seed) " +
            "actions=\(actions) topKeys=\(topShortcutEvents) bottomKeys=\(bottomShortcutEvents) " +
            "topActivations=\(observedTopActivations) bottomActivations=\(observedBottomActivations) " +
            "selectionClicks=\(selectionClicks) previewClicks=\(previewSelectionClicks) " +
            "clipboardWrites=\(clipboardWrites) files=\(clipboardFiles) images=\(imageFiles) " +
            "peakMemoryMB=\(String(format: "%.1f", peakResidentMB)) peakThreads=\(peakThreads)"
        print(finalSummary)
        if let lastError {
            print("[RealUsageStress] firstError=\(lastError)")
        }
        writeStressResult(finalSummary, configuration: configuration)
        finishStressRun(autoExit: configuration.autoExit, failed: failed)
    }

    private func restorePasteboardIfUntouched() {
        guard let originalPasteboard,
              let lastStressPasteboardChangeCount,
              pasteboard.changeCount == lastStressPasteboardChangeCount else {
            return
        }
        originalPasteboard.restore(to: pasteboard)
    }

    private func restoreCursor() {
        guard let originalCursorPosition,
              let source = CGEventSource(stateID: .hidSystemState),
              let move = CGEvent(
                mouseEventSource: source,
                mouseType: .mouseMoved,
                mouseCursorPosition: originalCursorPosition,
                mouseButton: .left
              ) else {
            return
        }
        source.localEventsSuppressionInterval = 0
        move.post(tap: .cghidEventTap)
    }

    private func removeFixtures() {
        guard let fixtureDirectory else { return }
        try? FileManager.default.removeItem(at: fixtureDirectory)
        self.fixtureDirectory = nil
        eventDirectory = nil
        imageFixtures.removeAll()
        otherFixtures.removeAll()
    }

    private var shouldContinue: Bool {
        !Task.isCancelled && !isFinishing && Date() < deadline
    }

    private func nextActionDelay() -> TimeInterval {
        nextCycleDelay()
    }

    private func nextCycleDelay() -> TimeInterval {
        let range = configuration.cycleMaximumSeconds - configuration.cycleMinimumSeconds
        return configuration.cycleMinimumSeconds + (randomUnitInterval() * range)
    }

    private func randomInt(upperBound: Int) -> Int {
        guard upperBound > 1 else { return 0 }
        return Int(random.next() % UInt64(upperBound))
    }

    private func randomInt(in range: ClosedRange<Int>) -> Int {
        range.lowerBound + randomInt(upperBound: range.count)
    }

    private func randomUnitInterval() -> Double {
        Double(random.next() >> 11) / Double(1 << 53)
    }

    private func wait(seconds: TimeInterval) async {
        try? await Task.sleep(nanoseconds: UInt64(max(0, seconds) * 1_000_000_000))
    }

    private func fail(_ message: String) {
        if lastError == nil {
            lastError = message
        }
    }
}

private extension CapturePreview.CaptureView {
    @MainActor
    func realUsageStressWindowScreenPoints() -> [CGPoint] {
        guard let window, let listApp else { return [] }

        return listApp.values.flatMap(\.windows).compactMap { windowPlane in
            guard windowPlane.win.id >= 0,
                  windowPlane.win.app?.runningApp != NSRunningApplication.current else {
                return nil
            }

            let worldCenter = windowPlane.node.presentation.convertPosition(SCNVector3Zero, to: nil)
            let projected = projectPoint(worldCenter)
            let localPoint = CGPoint(x: CGFloat(projected.x), y: CGFloat(projected.y))
            guard visibleRect.insetBy(dx: 6, dy: 6).contains(localPoint) else {
                return nil
            }

            let windowPoint = convert(localPoint, to: nil)
            return window.convertPoint(toScreen: windowPoint)
        }
    }
}

@MainActor
struct RealUsageStressView: View {
    private let contentView: ContentView
    @StateObject private var coordinator: RealUsageStressCoordinator

    init(configuration: StressLaunchConfiguration) {
        let contentView = ContentView()
        let coordinator = RealUsageStressCoordinator(
            configuration: configuration,
            displaysManager: contentView.Displays
        )
        self.contentView = contentView
        _coordinator = StateObject(wrappedValue: coordinator)

        // The production ContentView intentionally closes its initial SwiftUI
        // window until an overscreen is presented, so its onAppear lifecycle can
        // be delayed indefinitely. Start from the root's construction as well;
        // start() is idempotent and the readiness gate waits for the real window.
        Task { @MainActor in
            coordinator.start()
        }
    }

    var body: some View {
        contentView
            .overlay(alignment: .topLeading) {
                VStack(alignment: .leading, spacing: 3) {
                    Text("Real usage chaos · \(coordinator.status)")
                        .font(.caption.weight(.bold))
                    Text(
                        "Actions \(coordinator.actions) · ↑ \(coordinator.topShortcutEvents) · " +
                        "↓ \(coordinator.bottomShortcutEvents) · clicks \(coordinator.selectionClicks) · " +
                        "images \(coordinator.imageFiles)"
                    )
                    .font(.caption2.monospacedDigit())
                    Text("Seed \(coordinator.configuration.seed)")
                        .font(.caption2.monospacedDigit())
                    if let lastError = coordinator.lastError {
                        Text(lastError)
                            .font(.caption2)
                            .foregroundStyle(.red)
                    }
                }
                .padding(7)
                .background(.ultraThinMaterial, in: RoundedRectangle(cornerRadius: 7))
                .padding(8)
                .allowsHitTesting(false)
            }
            .onAppear {
                coordinator.start()
            }
    }
}

#endif
