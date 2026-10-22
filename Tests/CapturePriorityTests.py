#!/usr/bin/env python3
"""Exercise production preference observation/configuration with an inert capture engine."""
from pathlib import Path
import subprocess
import tempfile

root = Path(__file__).resolve().parents[1]
recorder = (root / 'MakeItHome/Managers/Capture/ScreenRecorder.swift').read_text()
settings = (root / 'MakeItHome/Static.swift').read_text()


def between(source, start, end):
    return source[source.index(start):source.index(end, source.index(start))]


fixture = r'''
import Foundation
import Combine

@MainActor final class Defaults {
    var values: [String: Any] = [:]
    func object(forKey key: String) -> Any? { values[key] }
    func set(_ value: Any, forKey key: String) { values[key] = value }
}
@MainActor enum Static {
    static let User = Defaults()
    PRODUCTION_SETTINGS
}
struct Display { let width = 800; let height = 600 }
struct Frame { let width = 400; let height = 300 }
struct Window { let frame = Frame() }
typealias CMTimeScale = Int32
struct CMTime { let value: Int64; let timescale: CMTimeScale }
@MainActor final class SCStreamConfiguration {
    static var constructions = 0
    init() { Self.constructions += 1 }
    var showsCursor = true
    var width = 0
    var height = 0
    var scalesToFit = false
    var minimumFrameInterval = CMTime(value: 0, timescale: 1)
    var queueDepth = 0
}
@MainActor final class CaptureEngine {
    var depths: [Int] = []
    func update(configuration: SCStreamConfiguration, filter: Int) async {
        depths.append(configuration.queueDepth)
    }
}
@MainActor final class ScreenRecorder {
    enum CaptureType { case display, window }
    var captureType = CaptureType.display
    var selectedDisplay: Display? = Display()
    var selectedWindow: Window? = nil
    let scaleFactor = 2
    var priorityScale = 1
    var priorityFrameRate = 10
    var isLowPriority = true
    let lowProfileDepth = 4
    var isRunning = false
    var contentFilter: Int? = 1
    var captureRunID: UInt = 0
    var captureUpdateTask: Task<Void, Never>?
    let captureEngine = CaptureEngine()
    private var subscriptions = Set<AnyCancellable>()
    PRODUCTION_OBSERVATION
    PRODUCTION_UPDATE
    PRODUCTION_CONFIGURATION
    func depth() -> Int { streamConfiguration.queueDepth }
    func refreshThenStop() {
        updateEngine()
        isRunning = false
        captureRunID &+= 1
    }
}
@main struct CapturePriorityTests {
    @MainActor static func drain(_ recorder: ScreenRecorder) async {
        await withCheckedContinuation { continuation in
            DispatchQueue.main.async { continuation.resume() }
        }
        await recorder.captureUpdateTask?.value
    }
    @MainActor static func main() async throws {
        let first = ScreenRecorder()
        precondition(first.depth() == 4, "Fresh installs default to normal priority")
        // No global StoreView: each recorder must observe the preference itself.
        let running = ScreenRecorder()
        running.isRunning = true
        Static.IsCaptureHigherPriority = true
        let before = SCStreamConfiguration.constructions
        await drain(running)
        precondition(Static.User.object(forKey: "IsCaptureHigherPriority") as? Bool == true)
        precondition(SCStreamConfiguration.constructions >= before + 2,
                     "Rebuild configurations for running and stopped recorders")
        precondition(first.captureEngine.depths.isEmpty, "Do not start a stopped stream")
        precondition(running.captureEngine.depths.last == 5, "Update the running low profile")
        let restarted = ScreenRecorder()
        precondition(restarted.depth() == 5, "New recorder reads saved priority at startup")
        restarted.isLowPriority = false
        precondition(restarted.depth() == 8, "Saved priority applies to the high profile")
        running.isLowPriority = false
        Static.IsCaptureHigherPriority = false
        await drain(running)
        precondition(running.captureEngine.depths.last == 7, "Disabling updates the high profile")
        precondition(ScreenRecorder().depth() == 4, "Saved false survives recorder replacement")
        Static.IsCaptureHigherPriority = true
        Static.IsCaptureHigherPriority = false
        Static.IsCaptureHigherPriority = true
        await drain(running)
        precondition(running.captureEngine.depths.last == 8, "Rapid changes converge to latest")
        let count = running.captureEngine.depths.count
        running.refreshThenStop()
        await drain(running)
        precondition(running.captureEngine.depths.count == count, "Retired runs reject updates")
        weak var released: ScreenRecorder?
        do {
            let temporary = ScreenRecorder()
            released = temporary
        }
        precondition(released == nil, "Preference observation must not retain the recorder")
        print("CapturePriorityTests: PASS (startup, live/stopped streams, rapid changes, lifetime)")
    }
}
'''
fixture = fixture.replace('PRODUCTION_SETTINGS', between(
    settings, '    static let capturePriorityDidChange', '    public static let ClickMaximumDifference'))
fixture = fixture.replace('PRODUCTION_OBSERVATION', between(
    recorder, '    private var captureHigherPriority', '    private var permissionRequestGate'))
fixture = fixture.replace('PRODUCTION_UPDATE', between(
    recorder, '    private func updateEngine()', '    /// - Tag: UpdateFilter'))
fixture = fixture.replace('PRODUCTION_CONFIGURATION', between(
    recorder, '    private var streamConfiguration:', '    /// - Tag: GetAvailableContent'))

with tempfile.TemporaryDirectory(prefix='mih-capture-priority-') as directory:
    source = Path(directory) / 'CapturePriorityTests.swift'
    binary = Path(directory) / 'capture-priority-tests'
    source.write_text(fixture)
    subprocess.run(['swiftc', '-parse-as-library', str(source), '-o', str(binary)], check=True)
    subprocess.run([str(binary)], check=True)
