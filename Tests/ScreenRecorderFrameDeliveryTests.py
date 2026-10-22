#!/usr/bin/env python3
"""Feed untagged frames through production recorder start/stop and preview delivery."""
from pathlib import Path
import subprocess
import tempfile

root = Path(__file__).resolve().parents[1]
recorder = (root / 'MakeItHome/Managers/Capture/ScreenRecorder.swift').read_text()
preview = (root / 'MakeItHome/Managers/Capture/Views/CapturePreview.swift').read_text()


def between(source, start, end):
    return source[source.index(start):source.index(end, source.index(start))]


fixture = r'''
import Foundation
import CoreGraphics

struct SCDisplay { let displayID: UInt32 }
struct Screen { let displayID: UInt32 }
final class Surface { func removeAllAttachments() {} }
struct CapturedFrame {
    let surface: Surface?
    let size = CGSize(width: 800, height: 600)
    var displayID: UInt32? = nil
    let captureTime = Date().timeIntervalSince1970
}
final class Layer { var contents: Surface? }
@MainActor final class Display {
    let screen: Screen
    var lastRecorderUpdate: Double = 0
    init(_ id: UInt32) { screen = Screen(displayID: id) }
}
@MainActor final class CaptureView { var curDisplay: Display? }
@MainActor final class CapturePreview {
    let captureView = CaptureView()
    let contentLayer: Layer? = Layer()
    var curFrame: CapturedFrame?
    PRODUCTION_PREVIEW
}
@MainActor enum Static {
    static let EnableRecordingHalfInLowPriority = false
    static let ScreenRecorderHighPriorityFPS = 25
    static var isRecordingScreen = false
    static let debugLastFrame = false
    static var disableScreenUpdate = false
    static var curDisplay: Display?
}
struct Logger { func error(_ message: String) { fatalError(message) } }
@MainActor final class CaptureEngine {
    var frames: [CapturedFrame] = []
    func startCapture(configuration: Int, filter: Int) async -> AsyncThrowingStream<CapturedFrame, Error> {
        AsyncThrowingStream { continuation in
            for frame in frames { continuation.yield(frame) }
            continuation.finish()
        }
    }
    func update(configuration: Int, filter: Int) async {}
    func stopCapture() async {}
}
@MainActor final class ScreenRecorder {
    var selectedDisplay: SCDisplay?
    var isLowPriority = true
    var priorityScale: CGFloat = 1
    var priorityFrameRate = 10
    let lowProfileFPS = 10
    var lastFrame: CapturedFrame?
    var lastFrameTime: Double = 0
    var recordingOnDisplay: UInt32 = 0
    var contentSize = CGSize.zero
    var isRunning = false
    var isStarting = false
    var isSetup = true
    var isAudioCaptureEnabled = false
    var captureIntentID: UInt = 0
    var captureRunID: UInt = 0
    var stopOperationID: UInt = 0
    var captureStopTask: Task<Void, Never>?
    var captureUpdateTask: Task<Void, Never>?
    let captureEngine = CaptureEngine()
    let capturePreview = CapturePreview()
    let logger = Logger()
    var streamConfiguration: Int { 1 }
    var contentFilter: Int? { 1 }
    func monitorAvailableContent() async {}
    func startAudioMetering() {}
    func stopAudioMetering() {}
    PRODUCTION_START_STOP
}
@main struct ScreenRecorderFrameDeliveryTests {
    @MainActor static func main() async {
        let recorder = ScreenRecorder()
        let a = Display(11)
        let b = Display(22)
        let first = Surface()
        let second = Surface()

        Static.curDisplay = a
        recorder.capturePreview.captureView.curDisplay = a
        let engineFrame = CapturedFrame(surface: first)
        precondition(engineFrame.displayID == nil, "Production CaptureEngine frames begin without a display ID")
        recorder.captureEngine.frames = [engineFrame]
        await recorder.start(lowProfile: true, display: SCDisplay(displayID: 11))
        precondition(recorder.capturePreview.curFrame?.displayID == 11,
                     "The actual frame delivered to the renderer must carry its capture-run display ID")
        precondition(recorder.capturePreview.contentLayer?.contents === first,
                     "An untagged engine frame must reach the visible layer")
        precondition(engineFrame.displayID == nil, "Tag the recorder's frame value, not shared engine state")

        Static.curDisplay = b
        recorder.capturePreview.captureView.curDisplay = b
        recorder.captureEngine.frames = [CapturedFrame(surface: second)]
        await recorder.start(lowProfile: false, display: SCDisplay(displayID: 22))
        precondition(recorder.capturePreview.curFrame?.displayID == 22 &&
                     recorder.capturePreview.contentLayer?.contents === second,
                     "Frame delivery must also work after switching displays and capture profiles")

        // The pointer/render target can move while an old engine start is awaiting.
        // Its frame must retain A's capture identity and be rejected by B's renderer.
        let retired = Surface()
        recorder.captureEngine.frames = [CapturedFrame(surface: retired)]
        await recorder.start(lowProfile: true, display: SCDisplay(displayID: 11))
        precondition(recorder.capturePreview.contentLayer?.contents === second,
                     "Do not relabel an old stream using the pointer's current display")
        precondition(recorder.capturePreview.curFrame?.displayID == 22,
                     "Keep rejecting frames from a retired display")
        print("ScreenRecorderFrameDeliveryTests: PASS (untagged engine frames, production recorder-to-preview delivery, display/profile switches, retired-frame rejection)")
    }
}
'''
fixture = fixture.replace('PRODUCTION_START_STOP', between(
    recorder, '    func start(lowProfile:', '    private func startAudioMetering()'))
fixture = fixture.replace('PRODUCTION_PREVIEW', between(
    preview, '    func updateFrame(_ frame:', '    // The view isn\'t updatable.'))

with tempfile.TemporaryDirectory(prefix='mih-frame-delivery-') as directory:
    path = Path(directory)
    source = path / 'ScreenRecorderFrameDeliveryTests.swift'
    binary = path / 'frame-delivery-tests'
    source.write_text(fixture)
    subprocess.run(['swiftc', '-swift-version', '5', '-parse-as-library', str(source), '-o', str(binary)], check=True)
    subprocess.run([str(binary)], check=True)
