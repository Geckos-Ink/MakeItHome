import Foundation

/// Limits permission-triggering requests using monotonic time supplied by the caller.
/// The owner must serialize access and finish each accepted request, including failures.
struct ScreenRecordingPermissionGate {
    static let retryInterval: TimeInterval = 15

    private var lastRequestTime: TimeInterval?
    private var requestInFlight = false

    mutating func beginRequest(now: TimeInterval) -> Bool {
        guard !requestInFlight else { return false }
        if let lastRequestTime, now - lastRequestTime < Self.retryInterval {
            return false
        }
        lastRequestTime = now
        requestInFlight = true
        return true
    }

    mutating func finishRequest() {
        requestInFlight = false
    }
}

/// Persisted onboarding progress, so approval can resume after a macOS-required relaunch.
enum ScreenRecordingPermissionOnboarding: String {
    case notRequested
    case awaitingApproval
    case completed

    mutating func noteScreenRecordingRequest() {
        if self == .notRequested {
            self = .awaitingApproval
        }
    }

    func shouldRequestCursorControl(screenRecordingGranted: Bool) -> Bool {
        self == .awaitingApproval && screenRecordingGranted
    }
}
