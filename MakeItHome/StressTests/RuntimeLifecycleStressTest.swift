#if STRESS_TEST_APP

import AppKit
import CoreGraphics
import Foundation
import SwiftUI

private enum RuntimeLifecycleClipboardKind: String, CaseIterable {
    case text
    case image
    case video
}

private struct RuntimeLifecyclePasteboardSnapshot {
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

@MainActor
final class RuntimeLifecycleStressCoordinator: ObservableObject {
    @Published private(set) var status = "Preparing"
    @Published private(set) var recorderTransitions = 0
    @Published private(set) var sceneSleepTransitions = 0
    @Published private(set) var sceneRestartTransitions = 0
    @Published private(set) var clipboardWrites = 0
    @Published private(set) var textWrites = 0
    @Published private(set) var imageWrites = 0
    @Published private(set) var videoWrites = 0
    @Published private(set) var peakSceneApps = 0
    @Published private(set) var peakSceneWindows = 0
    @Published private(set) var peakResidentMB = 0.0
    @Published private(set) var peakThreads = 0
    @Published private(set) var lastError: String?

    let configuration: StressLaunchConfiguration
    let recorder: ScreenRecorder

    private let displaysManager: DisplaysManager
    private let clipboard: Clipboard
    private let pasteboard = NSPasteboard.general
    private var originalPasteboard: RuntimeLifecyclePasteboardSnapshot?
    private var lastStressPasteboardChangeCount: Int?
    private var videoDirectory: URL?
    private var videoSource: URL?
    private var deadline = Date.distantPast
    private var isFinishing = false
    private var didObserveRecording = false
    private var didObserveRecorderStop = false
    private var originalClipboardCaptureEnabled = true
    private var originalFrontmostApplication: NSRunningApplication?
    private var randomState: UInt64

    private var runTask: Task<Void, Never>?
    private var recorderLoopTask: Task<Void, Never>?
    private var sceneLoopTask: Task<Void, Never>?
    private var clipboardLoopTask: Task<Void, Never>?
    private var metricsTask: Task<Void, Never>?
    private var recorderRequestTasks: [Task<Void, Never>] = []

    init(
        configuration: StressLaunchConfiguration,
        displaysManager: DisplaysManager,
        recorder: ScreenRecorder
    ) {
        self.configuration = configuration
        self.displaysManager = displaysManager
        self.recorder = recorder
        clipboard = displaysManager.clipboard
        randomState = configuration.seed
    }

    func start() {
        guard runTask == nil else { return }
        writeStressResult(
            "[RuntimeLifecycleStress] STARTED duration=\(configuration.durationSeconds)",
            configuration: configuration
        )
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
        originalClipboardCaptureEnabled = Static.EnableClipboardCapture
        originalFrontmostApplication = NSWorkspace.shared.frontmostApplication
        Static.Init()

        guard await requestScreenRecordingAccess() else {
            fail("Screen Recording permission is required for runtime-lifecycle stress.")
            await finish(completed: false)
            return
        }

        guard await waitForProductionRuntime() else {
            fail("The production display, recorder, SceneKit, window, and Widgets Zone runtime did not become ready.")
            await finish(completed: false)
            return
        }

        guard prepareClipboardFixtures() else {
            await finish(completed: false)
            return
        }

        originalPasteboard = RuntimeLifecyclePasteboardSnapshot(pasteboard: pasteboard)
        clipboard.setCaptureEnabled(true)
        deadline = Date().addingTimeInterval(configuration.durationSeconds)
        status = "Running"
        sampleProcess()

        recorderLoopTask = Task { [weak self] in
            await self?.cycleRecorderProfiles()
        }
        sceneLoopTask = Task { [weak self] in
            await self?.cycleSceneKitSleep()
        }
        clipboardLoopTask = Task { [weak self] in
            await self?.cycleClipboardItems()
        }
        startMetricsSampling()

        do {
            try await Task.sleep(nanoseconds: nanoseconds(configuration.durationSeconds))
        } catch {
            return
        }

        await finish(completed: true)
    }

    private func requestScreenRecordingAccess() async -> Bool {
        guard !CGPreflightScreenCaptureAccess() else {
            return await recorder.canRecord
        }

        status = "Awaiting Screen Recording permission"
        _ = CGRequestScreenCaptureAccess()
        let permissionDeadline = Date().addingTimeInterval(60)
        while Date() < permissionDeadline {
            if CGPreflightScreenCaptureAccess(), await recorder.canRecord {
                return true
            }
            await wait(seconds: 0.5)
        }
        return false
    }

    private func waitForProductionRuntime() async -> Bool {
        status = "Waiting for complete app runtime"
        let runtimeDeadline = Date().addingTimeInterval(30)
        var populatedProductionScene = false

        while Date() < runtimeDeadline {
            let display = displaysManager.curDisplay ?? Static.mouseInDisplay ?? Static.curDisplay
            let preview = displaysManager.capturePreview as? CapturePreview

            if let display,
               let preview,
               Static.mainWindow != nil,
               Static.topBarWebViewRepresentable != nil {
                if recorder.selectedDisplay == nil {
                    displaysManager.screenRecorderSelectDisplay()
                }

                if recorder.isRunning, !populatedProductionScene {
                    status = "Capturing production SceneKit windows"
                    await captureProductionWindows(on: display)
                    display.openSideFromShortcut(side: 2)
                    await wait(seconds: 0.5)
                    populatedProductionScene = true
                }

                _ = display.checkForScreenshot(forceShot: true)
                preview.captureView.setScreenApps(display: display)
                preview.captureView.restartRendering()
                sampleSceneGraph(preview.captureView)

                if preview.captureView.scene != nil,
                   preview.captureView.planeScreen != nil,
                   recorder.selectedDisplay != nil,
                   peakSceneApps > 0,
                   peakSceneWindows > 0 {
                    return true
                }
            }
            await wait(seconds: 0.25)
        }
        return false
    }

    private func captureProductionWindows(on display: Display) async {
        display.mouseIn = true

        for application in visibleExternalApplications().prefix(max(3, Static.MaxApps)) {
            guard !application.isTerminated else { continue }
            application.activate(options: [.activateIgnoringOtherApps])
            await wait(seconds: 0.3)
            displaysManager.updateFrontmostApp(onFrontMost: application)

            // The first pass requests an asynchronous WindowServer snapshot; later
            // passes crop the current SCStream frame and update the real Display model.
            for _ in 0..<5 {
                _ = display.checkForScreenshot(forceShot: true)
                await wait(seconds: 0.12)
            }
        }
    }

    private func visibleExternalApplications() -> [NSRunningApplication] {
        guard let windowInfo = CGWindowListCopyWindowInfo(
            [.optionOnScreenOnly, .excludeDesktopElements],
            kCGNullWindowID
        ) as? [[String: Any]] else {
            return []
        }

        let currentPID = ProcessInfo.processInfo.processIdentifier
        var orderedPIDs: [pid_t] = []
        for info in windowInfo {
            guard let pid = info[kCGWindowOwnerPID as String] as? pid_t,
                  pid != currentPID,
                  (info[kCGWindowLayer as String] as? Int) == 0,
                  (info[kCGWindowAlpha as String] as? Double ?? 1) > 0,
                  let boundsDictionary = info[kCGWindowBounds as String] as? [String: Any],
                  let bounds = CGRect(dictionaryRepresentation: boundsDictionary as CFDictionary),
                  bounds.width >= 240,
                  bounds.height >= 140,
                  !orderedPIDs.contains(pid) else {
                continue
            }
            orderedPIDs.append(pid)
        }

        return orderedPIDs.compactMap(NSRunningApplication.init(processIdentifier:))
    }

    private func cycleRecorderProfiles() async {
        while shouldContinue {
            requestRecording(lowProfile: true)
            recorderTransitions += 1
            await waitForInterval()

            guard shouldContinue else { break }
            requestRecording(lowProfile: false)
            recorderTransitions += 1
            await waitForInterval()

            guard shouldContinue else { break }
            await recorder.stop()
            await waitForRecorderRequests()
            recorderTransitions += 1
            didObserveRecorderStop = !recorder.isRunning
            await waitForInterval()
        }
    }

    private func requestRecording(lowProfile: Bool) {
        let task = Task { [recorder] in
            await recorder.start(lowProfile: lowProfile)
        }
        recorderRequestTasks.append(task)

        // ScreenRecorder owns serialization. Sampling after each request makes a
        // missing permission or a stuck start fail the final run instead of only
        // relying on console output from ScreenCaptureKit.
        Task { [weak self] in
            await self?.wait(seconds: 0.5)
            guard let self, !self.isFinishing else { return }
            self.didObserveRecording = self.didObserveRecording || self.recorder.isRunning
        }
    }

    private func cycleSceneKitSleep() async {
        while shouldContinue {
            recorder.capturePreview.captureView.stopRendering()
            sceneSleepTransitions += 1
            await waitForInterval()

            guard shouldContinue else { break }
            let captureView = recorder.capturePreview.captureView
            if let display = displaysManager.curDisplay ?? Static.mouseInDisplay ?? Static.curDisplay {
                _ = display.checkForScreenshot(forceShot: true)
                captureView.setScreenApps(display: display)
            }
            captureView.restartRendering()
            sampleSceneGraph(captureView)
            sceneRestartTransitions += 1
            await waitForInterval()
        }
    }

    private func cycleClipboardItems() async {
        var sequence = 0

        while shouldContinue {
            let kind = RuntimeLifecycleClipboardKind.allCases[
                sequence % RuntimeLifecycleClipboardKind.allCases.count
            ]
            writeClipboardItem(kind: kind, sequence: sequence)
            sequence += 1
            await waitForInterval()
        }
    }

    private func writeClipboardItem(kind: RuntimeLifecycleClipboardKind, sequence: Int) {
        let wrote: Bool

        switch kind {
        case .text:
            let item = NSPasteboardItem()
            item.setString("MakeItHome runtime stress text \(sequence)", forType: .string)
            pasteboard.clearContents()
            wrote = pasteboard.writeObjects([item])
            textWrites += 1

        case .image:
            let item = NSPasteboardItem()
            item.setData(makeImageData(sequence: sequence), forType: .tiff)
            pasteboard.clearContents()
            wrote = pasteboard.writeObjects([item])
            imageWrites += 1

        case .video:
            guard let url = makeVideoLink(sequence: sequence) else { return }
            pasteboard.clearContents()
            wrote = pasteboard.writeObjects([url as NSURL])
            videoWrites += 1
        }

        guard wrote else {
            fail("Unable to write a synthetic \(kind.rawValue) clipboard item.")
            return
        }

        lastStressPasteboardChangeCount = pasteboard.changeCount
        clipboard.checkClipboard()
        clipboardWrites += 1
    }

    private func prepareClipboardFixtures() -> Bool {
        guard let bundledVideo = Bundle.main.url(forResource: "release", withExtension: "mov") else {
            fail("The bundled release.mov fixture is unavailable.")
            return false
        }

        let directory = FileManager.default.temporaryDirectory
            .appendingPathComponent("MakeItHomeRuntimeStress-\(UUID().uuidString)", isDirectory: true)
        do {
            try FileManager.default.createDirectory(at: directory, withIntermediateDirectories: true)
            videoDirectory = directory
            videoSource = bundledVideo
            return true
        } catch {
            fail("Unable to create the temporary video-fixture directory: \(error.localizedDescription)")
            return false
        }
    }

    private func makeVideoLink(sequence: Int) -> URL? {
        guard let directory = videoDirectory, let source = videoSource else { return nil }
        let destination = directory.appendingPathComponent("video-\(sequence).mov")

        do {
            try FileManager.default.linkItem(at: source, to: destination)
        } catch {
            do {
                try FileManager.default.createSymbolicLink(at: destination, withDestinationURL: source)
            } catch {
                fail("Unable to create a temporary video fixture: \(error.localizedDescription)")
                return nil
            }
        }
        return destination
    }

    private func makeImageData(sequence: Int) -> Data {
        let dimensions = [320, 384, 448]
        let dimension = CGFloat(dimensions[sequence % dimensions.count])
        return autoreleasepool {
            let size = NSSize(width: dimension, height: dimension)
            let image = NSImage(size: size)
            image.lockFocus()
            let hue = CGFloat((sequence * 37) % 360) / 360
            NSColor(calibratedHue: hue, saturation: 0.76, brightness: 0.85, alpha: 1).setFill()
            NSBezierPath(rect: NSRect(origin: .zero, size: size)).fill()
            NSColor.white.withAlphaComponent(0.45).setFill()
            let inset = dimension * 0.18
            NSBezierPath(
                ovalIn: NSRect(
                    x: inset,
                    y: inset,
                    width: dimension - (inset * 2),
                    height: dimension - (inset * 2)
                )
            ).fill()
            image.unlockFocus()
            return image.tiffRepresentation ?? Data()
        }
    }

    private func startMetricsSampling() {
        metricsTask = Task { [weak self] in
            guard let self else { return }
            while !Task.isCancelled && !self.isFinishing {
                self.sampleProcess()
                await self.wait(seconds: 0.5)
            }
        }
    }

    private func finish(completed: Bool) async {
        guard !isFinishing else { return }
        isFinishing = true
        recorderLoopTask?.cancel()
        sceneLoopTask?.cancel()
        clipboardLoopTask?.cancel()
        metricsTask?.cancel()

        await recorder.stop()
        await recorderLoopTask?.value
        await sceneLoopTask?.value
        await clipboardLoopTask?.value
        await waitForRecorderRequests()
        recorder.capturePreview.captureView.stopRendering()
        restorePasteboardIfUntouched()
        clearStressClipboardState()
        removeVideoFixtures()
        originalFrontmostApplication?.activate(options: [.activateIgnoringOtherApps])
        sampleProcess()

        let failed = !completed || lastError != nil || !didObserveRecording || !didObserveRecorderStop ||
            recorderTransitions < 3 || sceneSleepTransitions == 0 || sceneRestartTransitions == 0 ||
            textWrites == 0 || imageWrites == 0 || videoWrites == 0 ||
            recorder.capturePreview.captureView.scene == nil
        status = failed ? "Failed" : "Completed"
        let summary =
            "[RuntimeLifecycleStress] \(failed ? "FAILED" : "COMPLETED") recorderTransitions=\(recorderTransitions) " +
            "sceneSleeps=\(sceneSleepTransitions) sceneRestarts=\(sceneRestartTransitions) clipboardWrites=\(clipboardWrites) " +
            "text=\(textWrites) images=\(imageWrites) videos=\(videoWrites) peakMemoryMB=\(String(format: "%.1f", peakResidentMB)) peakThreads=\(peakThreads)"
            + " sceneApps=\(peakSceneApps) sceneWindows=\(peakSceneWindows)"
        print(summary)
        if let lastError {
            print("[RuntimeLifecycleStress] firstError=\(lastError)")
        }
        writeStressResult(summary, configuration: configuration)
        finishStressRun(autoExit: configuration.autoExit, failed: failed)
    }

    private var shouldContinue: Bool {
        !Task.isCancelled && !isFinishing && Date() < deadline
    }

    private func waitForInterval() async {
        await wait(seconds: nextCycleDelay())
    }

    private func nextCycleDelay() -> TimeInterval {
        randomState = randomState &* 6_364_136_223_846_793_005 &+ 1
        let unit = Double(randomState >> 11) / Double(1 << 53)
        let range = configuration.cycleMaximumSeconds - configuration.cycleMinimumSeconds
        return configuration.cycleMinimumSeconds + (unit * range)
    }

    private func wait(seconds: TimeInterval) async {
        try? await Task.sleep(nanoseconds: nanoseconds(seconds))
    }

    private func waitForRecorderRequests() async {
        let requests = recorderRequestTasks
        recorderRequestTasks.removeAll(keepingCapacity: true)
        for request in requests {
            await request.value
        }
    }

    private func restorePasteboardIfUntouched() {
        guard let lastStressPasteboardChangeCount,
              pasteboard.changeCount == lastStressPasteboardChangeCount else {
            return
        }
        originalPasteboard?.restore(to: pasteboard)
    }

    private func clearStressClipboardState() {
        clipboard.setCaptureEnabled(false)
        clipboard.setCaptureEnabled(originalClipboardCaptureEnabled)
    }

    private func removeVideoFixtures() {
        guard let directory = videoDirectory else { return }
        try? FileManager.default.removeItem(at: directory)
        videoDirectory = nil
        videoSource = nil
    }

    private func sampleProcess() {
        let sample = StressProcessSample.capture()
        peakResidentMB = max(peakResidentMB, sample.residentMegabytes)
        peakThreads = max(peakThreads, sample.threadCount)
        sampleSceneGraph(recorder.capturePreview.captureView)
    }

    private func sampleSceneGraph(_ captureView: CapturePreview.CaptureView) {
        guard let apps = captureView.listApp else { return }
        peakSceneApps = max(peakSceneApps, apps.count)
        peakSceneWindows = max(
            peakSceneWindows,
            apps.values.reduce(into: 0) { count, app in
                count += app.windows.count
            }
        )
    }

    private func fail(_ message: String) {
        if lastError == nil {
            lastError = message
        }
    }
}

private func nanoseconds(_ seconds: TimeInterval) -> UInt64 {
    UInt64(max(0, seconds) * 1_000_000_000)
}

struct RuntimeLifecycleStressView: View {
    private let contentView: ContentView
    @StateObject private var coordinator: RuntimeLifecycleStressCoordinator

    init(configuration: StressLaunchConfiguration) {
        let contentView = ContentView()
        let recorder = contentView.store.screenRecorder as! ScreenRecorder
        let coordinator = RuntimeLifecycleStressCoordinator(
            configuration: configuration,
            displaysManager: contentView.Displays,
            recorder: recorder
        )
        self.contentView = contentView
        _coordinator = StateObject(wrappedValue: coordinator)

        Task { @MainActor in
            coordinator.start()
        }
    }

    var body: some View {
        contentView
            .overlay(alignment: .topLeading) {
                VStack(alignment: .leading, spacing: 4) {
                    HStack {
                        Text("Full production runtime lifecycle · \(coordinator.status)")
                            .font(.caption.weight(.bold))
                        Button("Stop") { coordinator.stop() }
                            .controlSize(.small)
                    }
                    Text(
                        "recorder \(coordinator.recorderTransitions) · sleep/restart " +
                        "\(coordinator.sceneSleepTransitions)/\(coordinator.sceneRestartTransitions) · " +
                        "clipboard \(coordinator.clipboardWrites)"
                    )
                    Text(
                        "SceneKit apps/windows \(coordinator.peakSceneApps)/\(coordinator.peakSceneWindows) · " +
                        "peak \(String(format: "%.0f MB", coordinator.peakResidentMB)) · " +
                        "cycles \(String(format: "%.2f", coordinator.configuration.cycleMinimumSeconds))–" +
                        "\(String(format: "%.2f", coordinator.configuration.cycleMaximumSeconds))s"
                    )
                    if let lastError = coordinator.lastError {
                        Text(lastError)
                            .foregroundStyle(.red)
                            .textSelection(.enabled)
                    }
                }
                .font(.caption2.monospacedDigit())
                .padding(8)
                .background(.ultraThinMaterial, in: RoundedRectangle(cornerRadius: 8))
                .padding(10)
            }
            .task { coordinator.start() }
    }
}

#endif
