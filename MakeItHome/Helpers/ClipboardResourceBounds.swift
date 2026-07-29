//
//  ClipboardResourceBounds.swift
//  MakeItHome
//
//  Small, dependency-free collection primitives used to keep clipboard and
//  Widgets Zone state bounded under sustained input.
//

/// Trims a newest-first history in one operation and returns the evicted tail.
///
/// Keeping this separate from `Clipboard` makes the memory-bound invariant easy
/// to stress without AppKit, a pasteboard, or a WebKit process.
@discardableResult
func trimNewestFirstHistory<Element>(
    _ history: inout [Element],
    maximumCount: Int
) -> [Element] {
    let limit = max(0, maximumCount)
    guard history.count > limit else { return [] }

    let removed = Array(history.dropFirst(limit))
    history.removeLast(history.count - limit)
    return removed
}

/// A fixed-capacity FIFO. Appending when full evicts exactly one oldest value.
///
/// The ring buffer avoids `Array.removeFirst()`'s repeated shifting cost while
/// the WebKit page drains a burst of native messages.
struct BoundedFIFOQueue<Element> {
    let capacity: Int

    private var storage: [Element?]
    private var head = 0
    private(set) var count = 0

    init(capacity: Int) {
        precondition(capacity > 0, "A bounded queue needs positive capacity")
        self.capacity = capacity
        storage = Array(repeating: nil, count: capacity)
    }

    var first: Element? {
        guard count > 0 else { return nil }
        return storage[head]
    }

    /// Appends a value and returns the oldest value when capacity was exceeded.
    @discardableResult
    mutating func append(_ element: Element) -> Element? {
        if count == capacity {
            let evicted = storage[head]
            storage[head] = element
            head = (head + 1) % capacity
            return evicted
        }

        let tail = (head + count) % capacity
        storage[tail] = element
        count += 1
        return nil
    }

    @discardableResult
    mutating func popFirst() -> Element? {
        guard count > 0 else { return nil }

        let element = storage[head]
        storage[head] = nil
        head = (head + 1) % capacity
        count -= 1

        if count == 0 {
            head = 0
        }
        return element
    }

    mutating func removeAll() {
        storage = Array(repeating: nil, count: capacity)
        head = 0
        count = 0
    }
}
