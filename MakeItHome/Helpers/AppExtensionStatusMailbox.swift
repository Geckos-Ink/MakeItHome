import Foundation
import Darwin

/// Runtime-only delivery queue. Reading a reliable poll never consumes a request.
struct AppExtensionStatusEvent: Codable, Equatable {
    let id: String
    let value: String
}

struct AppExtensionStatusMailbox {
    // Unlike systemUptime, continuous Mach time also advances during sleep.
    // A preview click queued before sleep must not switch tabs after waking.
    private static let secondsPerTick: Double = {
        var info = mach_timebase_info_data_t()
        mach_timebase_info(&info)
        return Double(info.numer) / Double(info.denom) / 1_000_000_000
    }()
    static var now: TimeInterval { Double(mach_continuous_time()) * secondsPerTick }

    private struct Entry {
        let event: AppExtensionStatusEvent
        let replacementKey: String?
        let expiresAt: TimeInterval?
    }
    private var entries: [Entry] = []
    private let session = UUID().uuidString
    private var sequence: UInt64 = 0
    static let maxCount = 128
    static let maxBytes = 256 * 1024
    static let maxMessageBytes = 64 * 1024

    mutating func append(_ value: String, replacementKey: String? = nil,
                         lifetime: TimeInterval? = nil, now: TimeInterval) {
        prune(now: now)
        guard value.utf8.count <= Self.maxMessageBytes else { return }
        if let key = replacementKey { entries.removeAll { $0.replacementKey == key } }
        sequence += 1
        entries.append(Entry(event: AppExtensionStatusEvent(id: "\(session):\(sequence)", value: value),
                             replacementKey: replacementKey, expiresAt: lifetime.map { now + $0 }))
        while entries.count > Self.maxCount || entries.reduce(0, { $0 + $1.event.value.utf8.count }) > Self.maxBytes {
            entries.removeFirst()
        }
    }

    mutating func pending(now: TimeInterval) -> [AppExtensionStatusEvent] {
        prune(now: now)
        return entries.map(\.event)
    }

    mutating func acknowledge(_ ids: [String], now: TimeInterval) {
        prune(now: now)
        let acknowledged = Set(ids)
        entries.removeAll { acknowledged.contains($0.event.id) }
    }

    mutating func consumeLegacy(now: TimeInterval) -> [String]? {
        let messages = pending(now: now).map(\.value)
        clear()
        return messages.isEmpty ? nil : messages
    }

    mutating func clear() { entries.removeAll() }

    private mutating func prune(now: TimeInterval) {
        entries.removeAll { $0.expiresAt.map { now >= $0 } ?? false }
    }
}
