#!/usr/bin/env python3
"""Compile production permission handling with inert capture, pointer and timer doubles."""
from pathlib import Path
import subprocess
import tempfile

root = Path(__file__).resolve().parents[1]
source = (root / 'MakeItHome/Managers/Capture/ScreenRecorder.swift').read_text()
start = source.index('    private var permissionRequestGate =')
end = source.index('    func monitorAvailableContent()', start)
methods = source[start:end]

fixture = r'''
import Foundation

@MainActor enum Static {
    static let User = Defaults()
}
final class Defaults {
    var values: [String: String] = [:]
    func string(forKey key: String) -> String? { values[key] }
    func set(_ value: String, forKey key: String) { values[key] = value }
}
@MainActor enum Capture {
    static var granted = false
    static var fail = false
    static var queries = 0
}
@MainActor func CGPreflightScreenCaptureAccess() -> Bool { Capture.granted }
enum CaptureError: Error { case denied }
@MainActor final class SCShareableContent {
    static func excludingDesktopWindows(_ excluding: Bool, onScreenWindowsOnly: Bool) async throws -> SCShareableContent {
        Capture.queries += 1
        if Capture.fail { throw CaptureError.denied }
        Capture.granted = true
        return SCShareableContent()
    }
}
@MainActor final class DispatchQueue {
    static let main = DispatchQueue()
    var pending: [() -> Void] = []
    var delays: [Double] = []
    func asyncAfter(deadline: DispatchTime, execute: @escaping () -> Void) {
        delays.append(Double(deadline.uptimeNanoseconds - DispatchTime.now().uptimeNanoseconds) / 1e9)
        pending.append(execute)
    }
    func fire() { pending.removeFirst()() }
}
enum MouseType { case mouseMoved }
enum MouseButton { case left }
enum EventTap { case cghidEventTap }
@MainActor final class CGEvent {
    static var pointer = CGPoint(x: -900, y: 1200)
    static var posted: [CGPoint] = []
    static var created: [CGPoint] = []
    static var canCreate = true
    let location: CGPoint
    init?(source: Int?) {
        guard Self.canCreate else { return nil }
        location = Self.pointer
    }
    init?(mouseEventSource: Int?, mouseType: MouseType, mouseCursorPosition: CGPoint, mouseButton: MouseButton) {
        location = mouseCursorPosition
        Self.created.append(location)
    }
    func post(tap: EventTap) { Self.posted.append(location) }
}
@MainActor final class ScreenRecorder {
PRODUCTION_METHODS
}

@main struct PermissionOnboardingTests {
    @MainActor static func main() async {
        let key = "ScreenRecordingPermissionOnboarding"
        Capture.granted = true
        let existing = await ScreenRecorder().canRecord
        precondition(existing && DispatchQueue.main.pending.isEmpty,
                     "Existing grants must not start onboarding")

        Capture.granted = false
        Capture.fail = true
        let denied = await ScreenRecorder().canRecord
        precondition(!denied && DispatchQueue.main.pending.isEmpty)
        precondition(Static.User.string(forKey: key) == "awaitingApproval",
                     "Persist pending onboarding before querying ScreenCaptureKit")

        // A fresh recorder models a relaunch after approval in System Settings.
        Capture.granted = true
        Capture.fail = false
        let relaunched = await ScreenRecorder().canRecord
        let concurrent = await ScreenRecorder().canRecord
        precondition(relaunched && concurrent && DispatchQueue.main.pending.count == 1,
                     "All recorder instances share one delayed request")
        precondition(DispatchQueue.main.delays.allSatisfy { $0 > 0.95 && $0 <= 1 },
                     "Request must be scheduled one second after observed approval")
        precondition(CGEvent.created.isEmpty && CGEvent.posted.isEmpty)
        CGEvent.pointer = CGPoint(x: 2400, y: -500)
        DispatchQueue.main.fire()
        precondition(CGEvent.posted.count == 1 && CGEvent.created.count == 1 &&
                     CGEvent.posted[0].x == CGEvent.pointer.x && CGEvent.posted[0].y == CGEvent.pointer.y &&
                     CGEvent.created[0].x == CGEvent.pointer.x && CGEvent.created[0].y == CGEvent.pointer.y,
                     "Read current Quartz position after the delay; never reuse the old position")
        precondition(Static.User.string(forKey: key) == "completed")

        Capture.granted = false
        let reapproved = await ScreenRecorder().canRecord
        precondition(reapproved && DispatchQueue.main.pending.isEmpty && CGEvent.posted.count == 1,
                     "Completed onboarding must never repeat")

        // Approval can also arrive during the original async capture query.
        Static.User.values.removeAll()
        Capture.granted = false
        let immediate = await ScreenRecorder().canRecord
        precondition(immediate && DispatchQueue.main.pending.count == 1)
        Capture.granted = false
        DispatchQueue.main.fire()
        precondition(CGEvent.posted.count == 1 && Static.User.string(forKey: key) == "awaitingApproval",
                     "Revocation during the delay cancels the event without losing pending onboarding")
        Capture.granted = true
        _ = await ScreenRecorder().canRecord
        CGEvent.canCreate = false
        DispatchQueue.main.fire()
        precondition(Static.User.string(forKey: key) == "awaitingApproval",
                     "Failed event creation must leave onboarding recoverable")
        CGEvent.canCreate = true
        _ = await ScreenRecorder().canRecord
        DispatchQueue.main.fire()
        precondition(CGEvent.posted.count == 2 && Static.User.string(forKey: key) == "completed")
        print("ScreenRecordingPermissionOnboardingTests: PASS")
    }
}
'''.replace('PRODUCTION_METHODS', methods)

with tempfile.TemporaryDirectory(prefix='makeithome-permission-tests-') as directory:
    path = Path(directory)
    (path / 'Fixture.swift').write_text(fixture)
    subprocess.run([
        'swiftc', '-swift-version', '5', '-parse-as-library',
        str(root / 'MakeItHome/Helpers/ScreenRecordingPermissionGate.swift'),
        str(path / 'Fixture.swift'), '-o', str(path / 'tests'),
    ], check=True)
    subprocess.run([str(path / 'tests')], check=True)
