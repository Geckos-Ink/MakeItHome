import Foundation

#if STRESS_TEST_APP
enum CaptureStressContext {
    @TaskLocal static var consumerID: UUID?
}
#endif

/// Serializes suspending mutations; actor isolation alone allows reentrancy.
actor CaptureEngineOperationGate {
    private var isLocked = false
    private var waiters: [CheckedContinuation<Void, Never>] = []

    func acquire() async {
        guard isLocked else {
            isLocked = true
            return
        }
        await withCheckedContinuation { waiters.append($0) }
    }

    func release() {
        guard !waiters.isEmpty else {
            isLocked = false
            return
        }
        waiters.removeFirst().resume()
    }
}

/// Previews need the latest frame, even when the UI cannot consume at capture FPS.
/// Each channel belongs to one SCStream, including callbacks arriving after stop.
struct LatestCaptureFrames<Frame> {
    let stream: AsyncThrowingStream<Frame, Error>
    let continuation: AsyncThrowingStream<Frame, Error>.Continuation

    init() {
        var continuation: AsyncThrowingStream<Frame, Error>.Continuation!
        stream = AsyncThrowingStream(bufferingPolicy: .bufferingNewest(1)) {
            continuation = $0
        }
        self.continuation = continuation
    }
}
