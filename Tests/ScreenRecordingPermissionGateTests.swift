import Foundation

@main
struct ScreenRecordingPermissionGateTests {
    private static var failures = 0

    private static func expect(_ condition: Bool, _ message: String) {
        if !condition {
            failures += 1
            print("FAIL: \(message)")
        }
    }

    static func main() {
        var gate = ScreenRecordingPermissionGate()
        expect(gate.beginRequest(now: 100), "The first startup request is immediate.")
        expect(!gate.beginRequest(now: 100), "Concurrent startup callers cannot request twice.")
        expect(!gate.beginRequest(now: 160), "A slow permission request blocks retries even after 15 seconds.")
        gate.finishRequest()
        expect(gate.beginRequest(now: 160), "A completed slow request can retry after the interval.")
        gate.finishRequest()

        for offset in [0.0, 1, 4, 10, 14.999] {
            expect(!gate.beginRequest(now: 160 + offset), "Denied checks and refreshes must wait 15 seconds (\(offset)).")
        }
        expect(gate.beginRequest(now: 175), "Retry is allowed at exactly 15 seconds.")
        gate.finishRequest()
        expect(!gate.beginRequest(now: 175), "Completion does not reset the retry interval.")
        expect(!gate.beginRequest(now: 174), "An earlier timestamp cannot bypass the interval.")
        expect(gate.beginRequest(now: 190), "Further retries use the same 15-second interval.")
        gate.finishRequest()

        var onboarding = ScreenRecordingPermissionOnboarding.notRequested
        expect(!onboarding.shouldRequestCursorControl(screenRecordingGranted: true),
               "Existing Screen Recording grants do not trigger new onboarding.")
        onboarding.noteScreenRecordingRequest()
        expect(!onboarding.shouldRequestCursorControl(screenRecordingGranted: false),
               "Denial cannot trigger cursor control.")
        onboarding.noteScreenRecordingRequest()
        expect(onboarding == .awaitingApproval, "Retries preserve pending onboarding.")
        var restored = ScreenRecordingPermissionOnboarding(rawValue: onboarding.rawValue)!
        expect(restored.shouldRequestCursorControl(screenRecordingGranted: true),
               "Approval after a relaunch resumes pending cursor control.")
        restored = .completed
        restored.noteScreenRecordingRequest()
        expect(!restored.shouldRequestCursorControl(screenRecordingGranted: true),
               "A later revocation and approval must not repeat cursor onboarding.")
        expect(ScreenRecordingPermissionOnboarding(rawValue: restored.rawValue) == .completed,
               "Completed onboarding survives relaunch.")

        if failures == 0 {
            print("ScreenRecordingPermissionGateTests: PASS")
        } else {
            print("ScreenRecordingPermissionGateTests: FAIL (\(failures) failures)")
            exit(1)
        }
    }
}
