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
