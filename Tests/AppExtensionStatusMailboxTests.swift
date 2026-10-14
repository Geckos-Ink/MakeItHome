import Foundation

@main
struct AppExtensionStatusMailboxTests {
    static func main() throws {
        let now = AppExtensionStatusMailbox.now
        precondition(AppExtensionStatusMailbox.now >= now && now > 0)
        var queue = AppExtensionStatusMailbox()
        queue.append("click 1", replacementKey: "clickedOn", lifetime: 15, now: 100)
        let first = queue.pending(now: 100)
        precondition(first.count == 1)
        precondition(queue.pending(now: 101) == first, "Lost poll response must retain the same request ID")
        let wire = try JSONEncoder().encode(first)
        let decoded = try JSONDecoder().decode([AppExtensionStatusEvent].self, from: wire)
        precondition(decoded == first)
        queue.append("position", replacementKey: "tabPosition", now: 101)
        queue.append("click 2", replacementKey: "clickedOn", lifetime: 15, now: 101)
        queue.acknowledge([first[0].id], now: 102)
        let replacement = queue.pending(now: 102)
        precondition(replacement.map(\.value) == ["position", "click 2"], "Old ACK cannot delete newer click")
        queue.acknowledge([replacement[0].id], now: 103)
        precondition(queue.pending(now: 115.999).count == 1)
        precondition(queue.pending(now: 116).isEmpty, "Do not replay clicks after sleep/reconnect")
        queue.append("legacy", now: 200)
        precondition(queue.consumeLegacy(now: 200) == ["legacy"])
        precondition(queue.consumeLegacy(now: 200) == nil)
        queue.append("legacy", now: 200)
        let newerID = queue.pending(now: 200)[0].id
        precondition(newerID != first[0].id, "No request ID reuse after clear")
        queue.clear()
        for i in 0..<1000 { queue.append(String(i), now: 200) }
        precondition(queue.pending(now: 200).count == 128)
        precondition(queue.pending(now: 200).first?.value == "872")
        queue.clear()
        for _ in 0..<1000 { queue.append(String(repeating: "é", count: 32768), now: 200) }
        precondition(queue.pending(now: 200).count == 4, "Byte budget must count UTF-8, not characters")
        queue.append(String(repeating: "x", count: 65537), now: 200)
        precondition(queue.pending(now: 200).count == 4, "Oversized message must be rejected")
        let ids = queue.pending(now: 200).map(\.id)
        queue.acknowledge(ids, now: 200)
        precondition(queue.pending(now: 200).isEmpty)
        queue.acknowledge(ids, now: 200)
        precondition(queue.pending(now: 200).isEmpty, "Repeated ACK is harmless")
        var other = AppExtensionStatusMailbox()
        other.append("click", now: 200)
        precondition(!ids.contains(other.pending(now: 200)[0].id), "IDs differ between connection instances")
        print("AppExtensionStatusMailboxTests: PASS (loss, redelivery, ACK, replacement, expiry, compatibility, bounds)")
    }
}
