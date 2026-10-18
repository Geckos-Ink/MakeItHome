import Foundation

private final class FrameProbe {
    static var liveCount = 0
    let sequence: Int
    init(_ sequence: Int) {
        self.sequence = sequence
        Self.liveCount += 1
    }
    deinit { Self.liveCount -= 1 }
}

private actor OperationCounter {
    var active = 0
    var peak = 0
    var completed = 0
    func enter() {
        active += 1
        peak = max(peak, active)
    }
    func leave() {
        active -= 1
        completed += 1
    }
}

@main
struct CaptureLifecycleTests {
    private static var failures = 0
    private static func expect(_ value: Bool, _ message: String) {
        if !value {
            failures += 1
            print("FAIL: \(message)")
        }
    }

    static func main() async throws {
        // A paused UI must not retain the entire capture backlog or replay stale frames.
        let frames = LatestCaptureFrames<FrameProbe>()
        for sequence in 0..<100_000 {
            frames.continuation.yield(FrameProbe(sequence))
        }
        expect(FrameProbe.liveCount == 1, "100,000 frames retain only the newest buffer")
        frames.continuation.finish()
        var iterator = frames.stream.makeAsyncIterator()
        var newest = try await iterator.next()
        expect(newest?.sequence == 99_999, "a stalled consumer resumes with the latest frame")
        newest = nil
        expect(try await iterator.next() == nil, "finish drains only the latest frame")
        expect(FrameProbe.liveCount == 0, "drained screen buffers are released")

        // Canceling the consuming task terminates its channel. Late callbacks must
        // never reach a replacement stream or keep the old iterator suspended.
        let oldFrames = LatestCaptureFrames<Int>()
        let ready = LatestCaptureFrames<Bool>()
        let consumer = Task {
            ready.continuation.yield(true)
            for try await _ in oldFrames.stream {}
        }
        var readyIterator = ready.stream.makeAsyncIterator()
        _ = try await readyIterator.next()
        consumer.cancel()
        _ = try? await consumer.value
        if case .terminated = oldFrames.continuation.yield(1) {} else {
            expect(false, "canceling a consumer terminates its original channel")
        }
        let newFrames = LatestCaptureFrames<Int>()
        oldFrames.continuation.yield(2)
        newFrames.continuation.yield(3)
        newFrames.continuation.finish()
        var newIterator = newFrames.stream.makeAsyncIterator()
        expect(try await newIterator.next() == 3, "late old-stream output cannot enter a replacement channel")
        expect(try await newIterator.next() == nil, "replacement channel has no stale frames")

        // Suspension within an actor must not allow SCStream mutations to overlap.
        // Canceled waiters still acquire/release the gate without stranding successors.
        let gate = CaptureEngineOperationGate()
        let counter = OperationCounter()
        let operations = (0..<1_000).map { _ in
            Task {
                await gate.acquire()
                await counter.enter()
                await Task.yield()
                await counter.leave()
                await gate.release()
            }
        }
        for index in stride(from: 0, to: operations.count, by: 3) {
            operations[index].cancel()
        }
        for operation in operations { await operation.value }
        expect(await counter.peak == 1, "suspending capture mutations never overlap")
        expect(await counter.completed == 1_000, "canceled waiters do not wedge the operation gate")

        guard failures == 0 else { exit(1) }
        print("CaptureLifecycleTests: PASS (100,000 frames, cancellation, 1,000 operations)")
    }
}
