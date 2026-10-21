#!/usr/bin/env python3
"""Compile the full production approval/connect path with isolated UI/storage.

No Safari, real permission prompts, saved trust, or captured data are involved.
The fixture is also used by the loopback approval/descriptor regression.
"""
from pathlib import Path
import subprocess
import sys
import tempfile

root = Path(__file__).resolve().parents[1]
source = (root / 'MakeItHome/Managers/AppExtension.swift').read_text()
manager = source[:source.index('class AppExtension {')].replace('import AppKit', '')
assert 'private let approvalTimeoutSeconds: TimeInterval = 30' in manager
manager = manager.replace('private let approvalTimeoutSeconds: TimeInterval = 30',
                          'private let approvalTimeoutSeconds: TimeInterval = 0.25')

ui = r'''
class NSWindow { func orderOut(_ sender: Any?) {} }
class NSAlert {
    enum Style { case warning }
    var alertStyle = Style.warning
    var messageText = "", informativeText = ""
    let window = NSWindow()
    func addButton(withTitle: String) {}
    func layout() {}
    func runModal() -> NSApplication.ModalResponse {
        fatalError("Approval must never block an HTTP/main-dispatch callback")
    }
}
class NSApplication {
    typealias ModalSession = Int
    enum ModalResponse { case `continue`, alertFirstButtonReturn, alertSecondButtonReturn, abort }
    var sessions: [Int: NSWindow] = [:]
    var responses: [Int: ModalResponse] = [:]
    var started = 0, ended = 0
    var modalWindow: NSWindow? { sessions.values.first }
    func activate(ignoringOtherApps: Bool) {}
    func beginModalSession(for window: NSWindow) -> Int {
        precondition(sessions.isEmpty, "Approval prompts must be serialized")
        started += 1
        sessions[started] = window
        return started
    }
    func runModalSession(_ session: Int) -> ModalResponse { responses[session] ?? .continue }
    func endModalSession(_ session: Int) {
        precondition(sessions.removeValue(forKey: session) != nil, "Session must end exactly once")
        responses.removeValue(forKey: session)
        ended += 1
    }
    func respond(_ response: ModalResponse) { responses[started] = response }
}
let NSApp = NSApplication()
'''

support = r'''
import Foundation
import CryptoKit
class UserDefaults {
    static let standard = UserDefaults()
    private var values: [String: Any] = [:]
    func set(_ value: Any?, forKey key: String) { values[key] = value }
    func object(forKey key: String) -> Any? { values[key] }
    func bool(forKey key: String) -> Bool { values[key] as? Bool ?? false }
    func double(forKey key: String) -> Double { values[key] as? Double ?? 0 }
    func stringArray(forKey key: String) -> [String]? { values[key] as? [String] }
    func removeObject(forKey key: String) { values.removeValue(forKey: key) }
    func dictionaryRepresentation() -> [String: Any] { values }
}
func parseURLQueryItems(from url: String) -> [String: String]? {
    guard let components = URLComponents(string: url) else { return nil }
    return Dictionary((components.queryItems ?? []).map { ($0.name, $0.value ?? "") }, uniquingKeysWith: { _, last in last })
}
func jsonStringToDictionary(jsonString: String) -> [String: Any]? {
    (try? JSONSerialization.jsonObject(with: Data(jsonString.utf8))) as? [String: Any]
}
extension Data { var sha256Hexa: String { SHA256.hash(data: self).map { String(format: "%02x", $0) }.joined() } }
class Display { var isOverscreenPresentationInProgress = false }
enum Static {
    static var mainWindowInUsing = false, isExtensionApprovalPromptShowing = false
    static var curDisplay: Display?
    static var appExtensionManager: AppExtensionManager?
    static func markWebExtensionInstalled() {}
}
class AppExtension {
    let bundleId: String, identity: String, secret = UUID().uuidString
    var app: Int? = 1
    var isTornDown = false
    init(bundleId: String, identity: String) { self.bundleId = bundleId; self.identity = identity }
    func addMessage(msg: String) {}
    func teardown() { isTornDown = true }
    func webViewDidFinishLoading() {}
    func syncIfNeeded(force: Bool = false) {}
    func scheduleHealthCheckIfNeeded(force: Bool = false) {}
    func setHTMLContent(content: String, forceReload: Bool) {}
    func sendJSMessage(msg: String) {}
    func acknowledgeStatusEvents(ids: [String]) {}
    func pendingStatusEvents() -> [AppExtensionStatusEvent] { [] }
    func consumeStatusMessages() -> [String]? { nil }
    func imShowing() -> Bool { false }
    func waitForStatus(excluding: Set<String>, timeout: Double, completion: @escaping () -> Void) -> () -> Void { {} }
}
func pump(_ seconds: Double) {
    let deadline = Date().addingTimeInterval(seconds)
    while Date() < deadline { RunLoop.main.run(until: min(deadline, Date().addingTimeInterval(0.005))) }
}
'''
fixture = support + ui + manager

test = r'''
@main struct ApprovalTests {
    static func main() {
        let manager = AppExtensionManager()
        func connect(_ client: String = "first", token: String? = nil) -> AppExtensionMsg {
            manager.httpRequest(url: "/appExtension/connect?bundleId=com.apple.Safari&clientId=\(client)" +
                (token.map { "&token=\($0)" } ?? ""), dataReq: nil)
        }
        func permission(_ client: String) -> AppExtensionPermissionStatus? {
            manager.extensionPermissionsStatus().first { $0.identity == "com.apple.Safari#\(client)" }
        }

        Static.mainWindowInUsing = true
        precondition(connect().description == "connectionDeferred")
        pump(0.12)
        precondition(NSApp.started == 0 && manager.apps.isEmpty)
        Static.mainWindowInUsing = false
        pump(0.12)
        precondition(NSApp.started == 1 && Static.isExtensionApprovalPromptShowing)
        let started = ProcessInfo.processInfo.systemUptime
        for _ in 0..<200 {
            let reply = connect()
            precondition(reply.description == "connectionDeferred" && reply.secret == nil)
        }
        precondition(ProcessInfo.processInfo.systemUptime - started < 0.2)
        precondition(permission("first")?.trusted == false, "Pending is not approval")
        var heartbeat = false
        DispatchQueue.main.async { heartbeat = true }
        pump(0.06)
        precondition(heartbeat && NSApp.started == 1, "Approval must yield to the main queue")
        NSApp.respond(.alertFirstButtonReturn)
        pump(0.06)
        precondition(!Static.isExtensionApprovalPromptShowing && NSApp.ended == 1)
        let approved = connect()
        precondition(approved.status == "ok" && approved.secret != nil)
        precondition(connect().secret == approved.secret, "Racing reconnect must reuse the approved secret")
        pump(0.12)
        precondition(NSApp.started == 1, "In-flight retries must not enqueue another prompt")

        // A second identity must be approved separately, even if it knows a
        // token for the current connection or falls inside its grace window.
        let old = manager.apps["com.apple.Safari"]!
        let token = Data("\(old.secret):\(Int64(Date().timeIntervalSince1970))".utf8).sha256Hexa
        precondition(connect("second", token: token).description == "connectionDeferred")
        pump(0.12)
        NSApp.respond(.alertFirstButtonReturn)
        pump(0.06)
        let replaced = connect("second")
        precondition(replaced.status == "ok" && replaced.secret != old.secret && old.isTornDown)
        precondition(manager.apps["com.apple.Safari"]?.identity == "com.apple.Safari#second")

        precondition(connect("timeout").description == "connectionDeferred")
        pump(0.4)
        precondition(!Static.isExtensionApprovalPromptShowing)
        precondition(permission("timeout")?.trusted == false && permission("timeout")?.ignoredUntil != nil)
        precondition(connect("timeout").description == "connectionIgnored")

        precondition(connect("denied").description == "connectionDeferred")
        pump(0.12)
        NSApp.respond(.alertSecondButtonReturn)
        pump(0.06)
        precondition(permission("denied")?.trusted == false)

        precondition(connect("revoked").description == "connectionDeferred")
        pump(0.12)
        manager.revokeExtensionPermission(identity: "com.apple.Safari#revoked")
        pump(0.3)
        precondition(permission("revoked")?.trusted == false && !Static.isExtensionApprovalPromptShowing)
        let before = NSApp.started
        Static.mainWindowInUsing = true
        precondition(connect("queued").description == "connectionDeferred")
        manager.revokeExtensionPermission(identity: "com.apple.Safari#queued")
        Static.mainWindowInUsing = false
        pump(0.15)
        precondition(NSApp.started == before, "Revocation must cancel queued approvals")

        // Two clients may both queue their first request before either has a
        // connection. Approving the second must replace the now-live first
        // connection once, even though its original request was not replacing.
        let multi = AppExtensionManager()
        func multiConnect(_ client: String) -> AppExtensionMsg {
            multi.httpRequest(url: "/appExtension/connect?bundleId=com.apple.Safari&clientId=\(client)", dataReq: nil)
        }
        Static.mainWindowInUsing = true
        precondition(multiConnect("alpha").description == "connectionDeferred")
        precondition(multiConnect("beta").description == "connectionDeferred")
        Static.mainWindowInUsing = false
        pump(0.12)
        NSApp.respond(.alertFirstButtonReturn)
        pump(0.06)
        let firstClient = multi.extensionPermissionsStatus().first {
            $0.trusted && ($0.clientId == "alpha" || $0.clientId == "beta")
        }!.clientId!
        let secondClient = firstClient == "alpha" ? "beta" : "alpha"
        precondition(multiConnect(firstClient).status == "ok")
        let firstConnection = multi.apps["com.apple.Safari"]!
        pump(0.12)
        NSApp.respond(.alertFirstButtonReturn)
        pump(0.06)
        precondition(multiConnect(secondClient).status == "ok" && firstConnection.isTornDown)
        precondition(multi.apps["com.apple.Safari"]?.identity == "com.apple.Safari#\(secondClient)")
        precondition(NSApp.started == NSApp.ended)
        print("AppExtensionApprovalTests: PASS (nonblocking approval, retry deduplication, identity, allow/deny/timeout/revoke)")
    }
}
'''

native_test = r'''
import AppKit
@main struct NativeApprovalTests {
    static func main() {
        _ = NSApplication.shared
        NSApp.setActivationPolicy(.accessory)
        NSApp.finishLaunching()
        let manager = AppExtensionManager()
        func connect(_ name: String) -> AppExtensionMsg {
            manager.httpRequest(url: "/appExtension/connect?bundleId=ink.makeithome.approval-fixture&clientId=\(name)&extensionName=Native%20approval%20fixture", dataReq: nil)
        }
        func buttons(_ view: NSView) -> [NSButton] {
            (view as? NSButton).map { [$0] } ?? view.subviews.flatMap { buttons($0) }
        }
        func press(_ title: String) {
            buttons(NSApp.modalWindow!.contentView!).first { $0.title == title }!.performClick(nil)
            pump(0.08)
            precondition(!Static.isExtensionApprovalPromptShowing && NSApp.modalWindow == nil)
        }
        precondition(connect("allow").description == "connectionDeferred")
        pump(0.13)
        precondition(NSApp.modalWindow != nil && Static.isExtensionApprovalPromptShowing)
        var heartbeat = false
        DispatchQueue.main.async { heartbeat = true }
        pump(0.03)
        precondition(heartbeat)
        press("Allow")
        precondition(connect("allow").status == "ok")
        precondition(connect("deny").description == "connectionDeferred")
        pump(0.13)
        press("Deny")
        precondition(manager.extensionPermissionsStatus().first { $0.clientId == "deny" }?.trusted == false)
        precondition(connect("timeout").description == "connectionDeferred")
        pump(0.45)
        precondition(NSApp.modalWindow == nil && !Static.isExtensionApprovalPromptShowing)
        precondition(connect("timeout").description == "connectionIgnored")
        print("NativeApprovalTests: PASS (real NSAlert Allow/Deny, timeout, modal cleanup, main-queue heartbeat)")
    }
}
'''

if __name__ == '__main__':
    with tempfile.TemporaryDirectory(prefix='mih-extension-approval-') as temp:
        path = Path(temp)
        program = support + '\nimport AppKit\n' + manager + native_test if '--native' in sys.argv else fixture + test
        (path / 'ApprovalTests.swift').write_text(program)
        subprocess.run(['swiftc', '-parse-as-library', str(root / 'MakeItHome/Helpers/AppExtensionStatusMailbox.swift'),
                        str(path / 'ApprovalTests.swift'), '-o', str(path / 'tests')], check=True)
        subprocess.run([str(path / 'tests')], check=True, timeout=15)
