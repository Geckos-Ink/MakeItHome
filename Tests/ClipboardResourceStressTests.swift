//
//  ClipboardResourceStressTests.swift
//  MakeItHome
//
//  Dependency-free stress regression for the production clipboard/WebKit
//  collection bounds. Run through Tests/run.sh.
//

private enum Check {
    static var total = 0
    static var failed = 0

    static func expect(_ condition: Bool, _ message: String, line: UInt = #line) {
        total += 1
        if condition {
            print("  ✓ \(message)")
        } else {
            failed += 1
            print("  ✗ FAIL (line \(line)): \(message)")
        }
    }
}

@main
enum ClipboardResourceStressTests {
    static func main() {
        print("▶ Clipboard history remains bounded")

        var history: [Int] = []
        var evictedCount = 0
        for value in 0..<100_000 {
            history.insert(value, at: 0)
            evictedCount += trimNewestFirstHistory(&history, maximumCount: 30).count
        }

        Check.expect(history.count == 30, "100,000 inserts retain exactly the newest 30 items")
        Check.expect(history.first == 99_999, "the newest clipboard item remains first")
        Check.expect(history.last == 99_970, "the retained tail is the 30th-newest item")
        Check.expect(evictedCount == 99_970, "every older item is released")

        print("\n▶ WebKit message queue remains bounded")

        var queue = BoundedFIFOQueue<Int>(capacity: 128)
        var overflowCount = 0
        for value in 0..<100_000 {
            if queue.append(value) != nil {
                overflowCount += 1
            }
        }

        Check.expect(queue.count == 128, "100,000 queued messages retain at most 128 values")
        Check.expect(overflowCount == 99_872, "overflow evicts exactly one oldest value per append")
        Check.expect(queue.first == 99_872, "the oldest retained message is the capacity boundary")

        var drained: [Int] = []
        while let value = queue.popFirst() {
            drained.append(value)
        }
        Check.expect(drained == Array(99_872..<100_000), "retained messages drain in FIFO order")
        Check.expect(queue.count == 0 && queue.first == nil, "the queue returns to an empty state")

        print("\n\(Check.total) checks, \(Check.failed) failures")
        if Check.failed > 0 {
            fatalError("Clipboard resource stress regression failed")
        }
    }
}
