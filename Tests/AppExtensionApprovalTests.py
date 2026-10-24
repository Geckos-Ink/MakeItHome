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
class NSButton: NSObject {
    weak var target: AnyObject?
    var action: Selector?
    func performClick(_ sender: Any?) {
        if let target = target as? NSObject, let action { _ = target.perform(action, with: self) }
    }
}
class NSWindow {
    enum Level { case modalPanel }
    var level = Level.modalPanel
    var buttons: [NSButton] = []
    var isVisible = false
    func center() {}
    func makeKeyAndOrderFront(_ sender: Any?) {
        precondition(NSApp.sessions.isEmpty, "Approval panels must be serialized")
        NSApp.started += 1
        NSApp.sessions[NSApp.started] = self
        NSApp.keyWindow = self
        isVisible = true
    }
    func orderOut(_ sender: Any?) {
        precondition(isVisible, "Panel must close exactly once")
        isVisible = false
        NSApp.sessions.removeAll()
        NSApp.keyWindow = nil
        NSApp.ended += 1
    }
}
class NSAlert {
    enum Style { case warning }
    var alertStyle = Style.warning
    var messageText = "", informativeText = ""
    let window = NSWindow()
    var buttons: [NSButton] { window.buttons }
    func addButton(withTitle: String) { window.buttons.append(NSButton()) }
    func layout() {}
    func runModal() -> NSApplication.ModalResponse {
        fatalError("Approval must never block an HTTP/main-dispatch callback")
    }
}
class NSApplication {
    typealias ModalSession = Int
    enum ModalResponse { case `continue`, alertFirstButtonReturn, alertSecondButtonReturn, abort }
    var sessions: [Int: NSWindow] = [:]
    var started = 0, ended = 0
    var modalWindow: NSWindow?
    var keyWindow: NSWindow?
    func activate(ignoringOtherApps: Bool) {}
    func beginModalSession(for window: NSWindow) -> Int {
        fatalError("Approval must use the normal application event loop")
    }
    func runModalSession(_ session: Int) -> ModalResponse {
        fatalError("Approval must not poll a modal session for button input")
    }
    func respond(_ response: ModalResponse) {
        // Only the actual button action delivers the decision.
        switch response {
        case .alertFirstButtonReturn: sessions[started]!.buttons[0].performClick(nil)
        case .alertSecondButtonReturn: sessions[started]!.buttons[1].performClick(nil)
        default: fatalError("Unexpected synthetic response")
        }
    }
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
        let retiredButton = NSApp.sessions[NSApp.started]!.buttons[0]
        NSApp.respond(.alertFirstButtonReturn)
        NSApp.respond(.alertSecondButtonReturn) // The first response wins.
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
        retiredButton.performClick(nil)
        precondition(retiredButton.target == nil && retiredButton.action == nil)
        precondition(permission("second")?.trusted == false, "Retired buttons must not approve another request")
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
        pump(0.02)
        precondition(!Static.isExtensionApprovalPromptShowing, "Button action must close without waiting for the timeout timer")
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
    @MainActor static func waitFor(_ message: String, timeout: Double = 0.5,
                                   condition: () -> Bool) async {
        let deadline = ProcessInfo.processInfo.systemUptime + timeout
        while !condition() {
            if ProcessInfo.processInfo.systemUptime >= deadline {
                fputs("NativeApprovalTests: FAIL (\(message))\n", stderr)
                exit(1)
            }
            try! await Task.sleep(nanoseconds: 5_000_000)
        }
    }
    @MainActor static func run() async {
        let manager = AppExtensionManager()
        func connect(_ name: String) -> AppExtensionMsg {
            manager.httpRequest(url: "/appExtension/connect?bundleId=ink.makeithome.approval-fixture&clientId=\(name)&extensionName=Native%20approval%20fixture", dataReq: nil)
        }
        func buttons(_ view: NSView) -> [NSButton] {
            (view as? NSButton).map { [$0] } ?? view.subviews.flatMap { buttons($0) }
        }
        func postClick(_ title: String) {
            let window = NSApp.keyWindow!
            let button = buttons(window.contentView!).first { $0.title == title }!
            let point = button.convert(NSPoint(x: button.bounds.midX, y: button.bounds.midY), to: nil)
            let windowNumber = window.windowNumber
            // Queue actual AppKit mouse events through NSApplication.run().
            // performClick alone bypasses the event-dispatch path that lost
            // the original NSAlert response between modal-session passes.
            func post(_ type: NSEvent.EventType) {
                NSApp.postEvent(NSEvent.mouseEvent(with: type, location: point, modifierFlags: [],
                    timestamp: ProcessInfo.processInfo.systemUptime, windowNumber: windowNumber,
                    context: nil, eventNumber: 0, clickCount: 1, pressure: 1)!, atStart: false)
            }
            post(.leftMouseDown)
            post(.leftMouseUp)
        }
        var peakLatency: Double = 0
        for index in 0..<3 {
            for title in ["Allow", "Deny"] {
                let client = "\(title)-\(index)"
                precondition(connect(client).description == "connectionDeferred")
                await waitFor("Approval did not become visible") {
                    NSApp.keyWindow != nil && Static.isExtensionApprovalPromptShowing
                }
                var heartbeat = false
                DispatchQueue.main.async { heartbeat = true }
                await waitFor("Main queue blocked during approval") { heartbeat }
                let started = ProcessInfo.processInfo.systemUptime
                postClick(title)
                await waitFor("\(client) click failed to dismiss promptly", timeout: 0.4) {
                    !Static.isExtensionApprovalPromptShowing && NSApp.keyWindow == nil
                }
                peakLatency = max(peakLatency, ProcessInfo.processInfo.systemUptime - started)
                let trusted = manager.extensionPermissionsStatus().first { $0.clientId == client }?.trusted
                precondition(trusted == (title == "Allow"), "Button decision must survive normal event dispatch")
                if title == "Allow" { precondition(connect(client).status == "ok") }
            }
        }
        precondition(connect("timeout").description == "connectionDeferred")
        await waitFor("Timeout approval did not become visible") { Static.isExtensionApprovalPromptShowing }
        await waitFor("Approval did not expire", timeout: 2) { !Static.isExtensionApprovalPromptShowing }
        precondition(connect("timeout").description == "connectionIgnored")
        print("NativeApprovalTests: PASS (6 queued mouse clicks through NSApplication.run; peak dismissal \(Int(peakLatency * 1000)) ms; Allow/Deny, timeout, cleanup, main-queue heartbeat)")
    }
    static func main() {
        _ = NSApplication.shared
        NSApp.setActivationPolicy(.accessory)
        Task { @MainActor in await run(); exit(0) }
        NSApp.run()
    }
}
'''

if __name__ == '__main__':
    with tempfile.TemporaryDirectory(prefix='mih-extension-approval-') as temp:
        path = Path(temp)
        native_manager = manager.replace('private let approvalTimeoutSeconds: TimeInterval = 0.25',
                                         'private let approvalTimeoutSeconds: TimeInterval = 1')
        program = support + '\nimport AppKit\n' + native_manager + native_test if '--native' in sys.argv else fixture + test
        (path / 'ApprovalTests.swift').write_text(program)
        subprocess.run(['swiftc', '-parse-as-library', str(root / 'MakeItHome/Helpers/AppExtensionStatusMailbox.swift'),
                        str(path / 'ApprovalTests.swift'), '-o', str(path / 'tests')], check=True)
        subprocess.run([str(path / 'tests')], check=True, timeout=15)
