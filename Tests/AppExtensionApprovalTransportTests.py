#!/usr/bin/env python3
"""Reconnect during approval and check real loopback connection/FD bounds.

Uses the full production manager/server with synthetic UI, trust and clients.
Requires a local listener; does not open Safari or a permission dialog.
"""
from pathlib import Path
import socket
import subprocess
import sys
import tempfile
sys.dont_write_bytecode = True
from AppExtensionApprovalTests import fixture, root

server = (root / 'MakeItHome/Managers/SimpleHttpServer.swift').read_text()
server = server[server.index('class MimeManager {'):]
assert 'private let connectionLifetimeSeconds: TimeInterval = 30' in server
server = server.replace('private let connectionLifetimeSeconds: TimeInterval = 30',
                        'private let connectionLifetimeSeconds: TimeInterval = 0.8')
with socket.socket() as reservation:
    reservation.bind(('127.0.0.1', 0))
    port = reservation.getsockname()[1]

test = r'''
import AppKit
import Network
import Darwin
func getAssetsUrl() -> URL? { nil }
SERVER
extension SimpleHTTPServer {
    func connectionCount() async -> Int {
        await withCheckedContinuation { continuation in
            requestQueue.async { continuation.resume(returning: self.activeConnections.count) }
        }
    }
}
@main struct ApprovalTransportTests {
    static func pause(_ seconds: Double) async { try! await Task.sleep(nanoseconds: UInt64(seconds * 1_000_000_000)) }
    static func descriptors() -> Int { (0..<1024).filter { fcntl(Int32($0), F_GETFD) != -1 }.count }
    static func request() async throws -> AppExtensionMsg {
        let request = URLRequest(url: URL(string: "http://127.0.0.1:PORT/appExtension/connect?bundleId=com.apple.Safari&clientId=transport")!, timeoutInterval: 2)
        let (body, response) = try await URLSession.shared.data(for: request)
        precondition((response as! HTTPURLResponse).statusCode == 200)
        return try JSONDecoder().decode(AppExtensionMsg.self, from: body)
    }
    @MainActor static func run() async throws {
        let server = SimpleHTTPServer(port: PORT)
        _ = try await server.start()
        _ = try await request()
        await pause(0.15)
        precondition(NSApp.started == 1 && Static.isExtensionApprovalPromptShowing)
        let baseline = descriptors()
        let start = ProcessInfo.processInfo.systemUptime
        try await withThrowingTaskGroup(of: Void.self) { group in
            for _ in 0..<4 {
                group.addTask {
                    for _ in 0..<50 {
                        let reply = try await request()
                        precondition(reply.description == "connectionDeferred" && reply.secret == nil)
                    }
                }
            }
            try await group.waitForAll()
        }
        let elapsed = ProcessInfo.processInfo.systemUptime - start
        await pause(0.1)
        let afterReconnect = descriptors()
        precondition(afterReconnect <= baseline + 16, "Reconnects leaked open descriptors")
        precondition(NSApp.started == 1 && Static.isExtensionApprovalPromptShowing)
        NSApp.respond(.alertFirstButtonReturn)
        await pause(0.1)
        let connected = try await request()
        precondition(connected.status == "ok" && connected.secret != nil)

        // Slow/abandoned clients cannot consume all process descriptors.
        let queue = DispatchQueue(label: "fixture.clients")
        let clients = (0..<80).map { _ -> NWConnection in
            let client = NWConnection(host: "127.0.0.1", port: PORT, using: .tcp)
            client.start(queue: queue)
            return client
        }
        await pause(0.25)
        let peak = await server.connectionCount()
        precondition(peak == 64, "Server must cap accepted connections at 64")
        await pause(0.8)
        let expired = await server.connectionCount()
        precondition(expired == 0, "Incomplete requests must expire")
        for client in clients { client.cancel() }
        await pause(0.1)
        let final = descriptors()
        precondition(final <= baseline + 16, "Expired connections leaked descriptors")
        let last = NWConnection(host: "127.0.0.1", port: PORT, using: .tcp)
        last.start(queue: queue)
        await pause(0.1)
        server.stop()
        await pause(0.1)
        let stopped = await server.connectionCount()
        precondition(stopped == 0, "Stopping the server must cancel active clients")
        last.cancel()
        print("AppExtensionApprovalTransportTests: PASS (200 reconnects in \(String(format: "%.2f", elapsed))s during approval; FDs \(baseline)->\(afterReconnect)->\(final); cap=\(peak); expiry/stop cleanup)")
    }
    static func main() {
        Task { @MainActor in
            do { try await run(); exit(0) }
            catch { print("Approval transport failed: \(error)"); exit(1) }
        }
        RunLoop.main.run()
    }
}
'''

with tempfile.TemporaryDirectory(prefix='mih-approval-transport-') as temp:
    path = Path(temp)
    program = fixture.replace('private let approvalTimeoutSeconds: TimeInterval = 0.25',
                              'private let approvalTimeoutSeconds: TimeInterval = 10')
    program += test.replace('SERVER', server).replace('PORT', str(port))
    (path / 'Transport.swift').write_text(program)
    subprocess.run(['swiftc', '-parse-as-library', str(root / 'MakeItHome/Helpers/AppExtensionStatusMailbox.swift'),
                    str(path / 'Transport.swift'), '-o', str(path / 'tests')], check=True)
    subprocess.run([str(path / 'tests')], check=True, timeout=20)
