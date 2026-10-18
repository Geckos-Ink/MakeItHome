#!/usr/bin/env python3
"""Exercise the production loopback server and authenticated waiting response.

Uses synthetic status commands and dependency doubles for UI/trust storage.
Never launches Safari, captures the screen, or changes approval preferences.
Run separately: python3 Tests/AppExtensionTransportTests.py
"""
from pathlib import Path
import socket
import subprocess
import sys
import tempfile
sys.dont_write_bytecode = True
from AppExtensionDeliveryTests import fixture, root

server = (root / 'MakeItHome/Managers/SimpleHttpServer.swift').read_text()
server = server[server.index('class MimeManager {'):]
support = fixture[:fixture.index('@main struct DeliveryTests')]
with socket.socket() as reservation:
    reservation.bind(('127.0.0.1', 0))
    port = reservation.getsockname()[1]

test = r'''
import AppKit
import Network
typealias AppExtensionManager = Manager
func getAssetsUrl() -> URL? { nil }
SERVER
@main struct TransportTests {
    static let port = PORT
    @MainActor static func pause(_ seconds: Double) async {
        try! await Task.sleep(nanoseconds: UInt64(seconds * 1_000_000_000))
    }
    static func request(_ route: String = "/checkStatus", waitMs: Int = 0,
                        ids: [String] = [], secret: String = "fixture-secret") -> URLRequest {
        let token = Data("\(secret):\(Int64(Date().timeIntervalSince1970))".utf8).sha256Hexa
        var components = URLComponents(string: "http://127.0.0.1:\(port)/appExtension\(route)")!
        components.queryItems = [URLQueryItem(name: "bundleId", value: "com.apple.Safari"),
            URLQueryItem(name: "secret", value: secret), URLQueryItem(name: "token", value: token),
            URLQueryItem(name: "reliableStatus", value: "1"), URLQueryItem(name: "waitMs", value: String(waitMs))]
        var req = URLRequest(url: components.url!, timeoutInterval: 5)
        req.httpMethod = "POST"
        req.setValue("application/json", forHTTPHeaderField: "Content-Type")
        req.httpBody = try! JSONSerialization.data(withJSONObject: [route == "/ackStatusMessages" ? "ids" : "receivedIds": ids])
        return req
    }
    static func send(_ req: URLRequest) async throws -> AppExtensionMsg {
        let (data, response) = try await URLSession.shared.data(for: req)
        precondition((response as! HTTPURLResponse).statusCode == 200)
        return try JSONDecoder().decode(AppExtensionMsg.self, from: data)
    }
    @MainActor static func main() async throws {
        let server = SimpleHTTPServer(port: UInt16(port))
        let manager = server.appExtensionManager, ext = AppExtension()
        manager.apps[ext.bundleId] = ext
        _ = try await server.start()
        await pause(0.1)

        // A command wakes a parked HTTP response immediately. ACK traffic uses
        // the same production server while a second response remains parked.
        let pending = Task { try await send(request(waitMs: 2000)) }
        await pause(0.05)
        let started = ProcessInfo.processInfo.systemUptime
        ext.addMessage(msg: "synthetic command")
        let first = try await pending.value
        let latency = ProcessInfo.processInfo.systemUptime - started
        precondition(latency < 0.5, "Command waited for a polling interval")
        precondition(first.statusWaitSupported == true && first.statusEvents?.count == 1)
        let id = first.statusEvents![0].id

        let next = Task { try await send(request(waitMs: 2000, ids: [id])) }
        await pause(0.05)
        let ackStart = ProcessInfo.processInfo.systemUptime
        let ack = try await send(request("/ackStatusMessages", ids: [id]))
        precondition(ack.status == "ok" && ProcessInfo.processInfo.systemUptime - ackStart < 0.5,
                     "A parked poll blocked other server requests")
        ext.addMessage(msg: "newer command")
        let second = try await next.value
        precondition(second.statusEvents?.map(\.value) == ["newer command"])
        let secondID = second.statusEvents![0].id
        // Simulate a lost poll response and a lost ACK response. Reading never
        // consumes a command; exact-ID acknowledgement is safe to repeat.
        let replay = try await send(request(waitMs: 2000))
        precondition(replay.statusEvents == second.statusEvents)
        _ = try await send(request("/ackStatusMessages", ids: [secondID]))
        _ = try await send(request("/ackStatusMessages", ids: [secondID]))
        precondition(ext.pendingStatusEvents().isEmpty)

        let denied = try await send(request(waitMs: 2000, secret: "wrong"))
        precondition(denied.status == "error" && denied.statusEvents == nil)
        var malformed = request(waitMs: 2000)
        malformed.httpBody = Data("{\"receivedIds\":[1]}".utf8)
        let malformedReply = try await send(malformed)
        precondition(malformedReply.description == "invalidReceivedIds" && malformedReply.statusEvents == nil)
        var invalidToken = request(waitMs: 2000)
        invalidToken.url = URL(string: invalidToken.url!.absoluteString.replacingOccurrences(of: "token=", with: "token=invalid"))!
        let invalidTokenReply = try await send(invalidToken)
        precondition(invalidTokenReply.description == "invalidToken" && invalidTokenReply.statusEvents == nil)
        // Waited requests expire once and can be superseded or cancelled.
        let timed = try await send(request(waitMs: 30))
        precondition(timed.statusEvents?.isEmpty == true)
        var calls = 0
        let cancel = ext.waitForStatus(excluding: [], timeout: 0.03) { calls += 1 }
        cancel()
        await pause(0.05)
        precondition(calls == 0)
        let old = ext.waitForStatus(excluding: [], timeout: 1) { calls += 1 }
        let current = ext.waitForStatus(excluding: [], timeout: 1) { calls += 1 }
        precondition(calls == 1, "Replacing a parked response must finish the old response")
        old() // Old cancellation must not cancel the replacement.
        ext.addMessage(msg: "replacement waiter")
        precondition(calls == 2)
        current()
        ext.acknowledgeStatusEvents(ids: ext.pendingStatusEvents().map(\.id))

        // The token was valid on arrival but ages out while its authenticated
        // response is waiting. A wait must not spuriously demand reconnection.
        var agingRequest = request(waitMs: 4000)
        var agingURL = URLComponents(url: agingRequest.url!, resolvingAgainstBaseURL: false)!
        let agingToken = Data("fixture-secret:\(Int64(Date().timeIntervalSince1970) - 3)".utf8).sha256Hexa
        agingURL.queryItems = agingURL.queryItems!.map { $0.name == "token" ? URLQueryItem(name: "token", value: agingToken) : $0 }
        agingRequest.url = agingURL.url
        let aging = Task { try await send(agingRequest) }
        await pause(1.1)
        ext.addMessage(msg: "after token ages out")
        let agingReply = try await aging.value
        precondition(agingReply.statusEvents?.map(\.value) == ["after token ages out"])
        _ = try await send(request("/ackStatusMessages", ids: agingReply.statusEvents!.map(\.id)))

        let disconnected = Task { try await send(request(waitMs: 2000)) }
        await pause(0.03)
        disconnected.cancel()
        _ = try? await disconnected.value
        ext.addMessage(msg: "after receiver disconnect")
        let reconnectReply = try await send(request(waitMs: 2000))
        precondition(reconnectReply.statusEvents?.map(\.value) == ["after receiver disconnect"])
        _ = try await send(request("/ackStatusMessages", ids: reconnectReply.statusEvents!.map(\.id)))

        let revoked = Task { try await send(request(waitMs: 2000)) }
        await pause(0.05)
        ext.teardown()
        manager.apps.removeAll()
        let revokedReply = try await revoked.value
        precondition(revokedReply.status == "error" && revokedReply.statusEvents == nil)
        let retired = AppExtension()
        manager.apps[retired.bundleId] = retired
        let replaced = Task { try await send(request(waitMs: 2000)) }
        await pause(0.03)
        manager.apps[retired.bundleId] = AppExtension() // Same identity, different connection.
        retired.addMessage(msg: "retired connection data")
        let replacedReply = try await replaced.value
        precondition(replacedReply.status == "error" && replacedReply.statusEvents == nil)
        retired.teardown()
        // Many wake/ACK cycles must preserve exact IDs with no queue growth.
        let fresh = AppExtension()
        manager.apps[fresh.bundleId] = fresh
        for number in 0..<30 {
            let waiting = Task { try await send(request(waitMs: 1000)) }
            await pause(0.005)
            fresh.addMessage(msg: "synthetic \(number)")
            let reply = try await waiting.value
            precondition(reply.statusEvents?.map(\.value) == ["synthetic \(number)"])
            _ = try await send(request("/ackStatusMessages", ids: reply.statusEvents!.map(\.id)))
        }
        precondition(fresh.pendingStatusEvents().isEmpty)
        server.stop()
        print("AppExtensionTransportTests: PASS (real loopback HTTP, command wake \(Int(latency * 1000)) ms, concurrent ACK, loss/redelivery/disconnect, auth/token aging, expiry/cancellation/replacement, revocation, 30 cycles)")
    }
}
'''.replace('SERVER', server).replace('PORT', str(port))
with tempfile.TemporaryDirectory(prefix='mih-extension-transport-') as temp:
    source = Path(temp) / 'TransportTests.swift'
    binary = Path(temp) / 'TransportTests'
    source.write_text(support + test)
    subprocess.run(['swiftc', '-parse-as-library', str(root / 'MakeItHome/Helpers/AppExtensionStatusMailbox.swift'),
                    str(source), '-o', str(binary)], check=True)
    subprocess.run([str(binary)], check=True, timeout=25)
