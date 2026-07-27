#if DEBUG

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
    @Published private(set) var peakResidentMB = 0.0
    @Published private(set) var peakThreads = 0
    @Published private(set) var lastError: String?

    let configuration: StressLaunchConfiguration
    let recorder = ScreenRecorder()

    private let clipboard = Clipboard(automaticallyPolls: false)
    private let pasteboard = NSPasteboard.general
    private var originalPasteboard: RuntimeLifecyclePasteboardSnapshot?
    private var lastStressPasteboardChangeCount: Int?
    private var videoDirectory: URL?
    private var videoSource: URL?
    private var deadline = Date.distantPast
    private var isFinishing = false
    private var didObserveRecording = false
    private var didObserveRecorderStop = false

    private var runTask: Task<Void, Never>?
    private var recorderLoopTask: Task<Void, Never>?
    private var sceneLoopTask: Task<Void, Never>?
    private var clipboardLoopTask: Task<Void, Never>?
    private var metricsTask: Task<Void, Never>?
    private var recorderRequestTasks: [Task<Void, Never>] = []

    init(configuration: StressLaunchConfiguration) {
        self.configuration = configuration
    }

    var capturePreview: CapturePreview { recorder.capturePreview }

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
        guard await requestScreenRecordingAccess() else {
            fail("Screen Recording permission is required for runtime-lifecycle stress.")
            await finish(completed: false)
            return
        }

        await recorder.refreshAvailableContent()
        guard recorder.selectedDisplay != nil else {
            fail("No capturable display was available.")
            await finish(completed: false)
            return
        }

        guard prepareClipboardFixtures() else {
            await finish(completed: false)
            return
        }

        Static.clipboard = clipboard
        originalPasteboard = RuntimeLifecyclePasteboardSnapshot(pasteboard: pasteboard)
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
            await self?.wait(seconds: min(0.5, self?.configuration.intervalSeconds ?? 0.5))
            guard let self, !self.isFinishing else { return }
            self.didObserveRecording = self.didObserveRecording || self.recorder.isRunning
        }
    }

    private func cycleSceneKitSleep() async {
        let sleepSeconds = max(0.25, configuration.intervalSeconds / 2)

        while shouldContinue {
            recorder.capturePreview.captureView.stopRendering()
            sceneSleepTransitions += 1
            await wait(seconds: sleepSeconds)

            guard shouldContinue else { break }
            recorder.capturePreview.captureView.restartRendering()
            sceneRestartTransitions += 1
            await wait(seconds: sleepSeconds)
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
        let size = NSSize(width: 96, height: 96)
        let image = NSImage(size: size)
        image.lockFocus()
        let hue = CGFloat((sequence * 37) % 360) / 360
        NSColor(calibratedHue: hue, saturation: 0.76, brightness: 0.85, alpha: 1).setFill()
        NSBezierPath(rect: NSRect(origin: .zero, size: size)).fill()
        NSColor.white.withAlphaComponent(0.45).setFill()
        NSBezierPath(ovalIn: NSRect(x: 18, y: 18, width: 60, height: 60)).fill()
        image.unlockFocus()
        return image.tiffRepresentation ?? Data()
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
        sampleProcess()

        let failed = !completed || lastError != nil || !didObserveRecording || !didObserveRecorderStop ||
            recorderTransitions < 3 || sceneSleepTransitions == 0 || sceneRestartTransitions == 0 ||
            textWrites == 0 || imageWrites == 0 || videoWrites == 0
        status = failed ? "Failed" : "Completed"
        print(
            "[RuntimeLifecycleStress] \(failed ? "FAILED" : "COMPLETED") recorderTransitions=\(recorderTransitions) " +
            "sceneSleeps=\(sceneSleepTransitions) sceneRestarts=\(sceneRestartTransitions) clipboardWrites=\(clipboardWrites) " +
            "text=\(textWrites) images=\(imageWrites) videos=\(videoWrites) peakMemoryMB=\(String(format: "%.1f", peakResidentMB)) peakThreads=\(peakThreads)"
        )
        if let lastError {
            print("[RuntimeLifecycleStress] firstError=\(lastError)")
        }
        finishStressRun(autoExit: configuration.autoExit, failed: failed)
    }

    private var shouldContinue: Bool {
        !Task.isCancelled && !isFinishing && Date() < deadline
    }

    private func waitForInterval() async {
        await wait(seconds: configuration.intervalSeconds)
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
        clipboard.stopPolling()
        if Static.clipboard === clipboard {
            Static.clipboard = nil
        }
        var message = JSMessage()
        message.type = "clearClipboardItems"
        Static.topBarWebViewRepresentable?.sendMessage(obj: message)
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
    @StateObject private var coordinator: RuntimeLifecycleStressCoordinator

    init(configuration: StressLaunchConfiguration) {
        _coordinator = StateObject(wrappedValue: RuntimeLifecycleStressCoordinator(configuration: configuration))
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 14) {
            HStack {
                VStack(alignment: .leading, spacing: 3) {
                    Text("Runtime lifecycle stress")
                        .font(.title2.weight(.bold))
                    Text("ScreenCaptureKit profiles, CaptureView sleep/wake, and real Clipboard-to-Widgets Zone traffic")
                        .foregroundStyle(.secondary)
                }
                Spacer()
                Text(coordinator.status)
                    .font(.headline)
                    .foregroundStyle(coordinator.status == "Completed" ? .green : coordinator.status == "Failed" ? .red : .primary)
            }

            HStack(spacing: 10) {
                StressMetricCard(title: "Recorder changes", value: "\(coordinator.recorderTransitions)")
                StressMetricCard(title: "Scene sleeps", value: "\(coordinator.sceneSleepTransitions)")
                StressMetricCard(title: "Scene restarts", value: "\(coordinator.sceneRestartTransitions)")
                StressMetricCard(title: "Clipboard writes", value: "\(coordinator.clipboardWrites)")
                StressMetricCard(title: "Peak memory", value: String(format: "%.0f MB", coordinator.peakResidentMB))
                StressMetricCard(title: "Peak threads", value: "\(coordinator.peakThreads)")
            }

            HStack(spacing: 14) {
                VStack(alignment: .leading, spacing: 8) {
                    Text("Live capture / SceneKit")
                        .font(.headline)
                    coordinator.capturePreview
                        .frame(minWidth: 500, minHeight: 320)
                        .background(Color.black)
                        .clipShape(RoundedRectangle(cornerRadius: 10))
                }

                VStack(alignment: .leading, spacing: 8) {
                    Text("Widgets Zone clipboard")
                        .font(.headline)
                    TopWebView()
                        .frame(minWidth: 500, minHeight: 320)
                        .clipShape(RoundedRectangle(cornerRadius: 10))
                }
            }

            HStack {
                Text("Interval: \(String(format: "%.1fs", coordinator.configuration.intervalSeconds)) · Duration: \(String(format: "%.0fs", coordinator.configuration.durationSeconds)) · Clipboard: \(coordinator.textWrites) text, \(coordinator.imageWrites) image, \(coordinator.videoWrites) video")
                    .foregroundStyle(.secondary)
                Spacer()
                Button("Stop") { coordinator.stop() }
            }

            if let lastError = coordinator.lastError {
                Text(lastError)
                    .foregroundStyle(.red)
                    .textSelection(.enabled)
            }
        }
        .padding(18)
        .frame(minWidth: 1_100, minHeight: 620)
        .task { coordinator.start() }
    }
}

#endif
