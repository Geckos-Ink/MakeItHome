#!/usr/bin/env python3
"""Compile production non-connect auth, delivery routes and coordinator dispatch.

Uses state/process/WebKit doubles, without opening the app or accessing Safari.
The real WebKit delegate interfaces are also checked by the normal Xcode build.
"""
from pathlib import Path
import subprocess
import tempfile

root = Path(__file__).resolve().parents[1]
manager = (root / 'MakeItHome/Managers/AppExtension.swift').read_text()
view = (root / 'MakeItHome/Managers/Capture/Views/AppExtensionView.swift').read_text()
a = manager.index('            if app == nil {', manager.index('func httpRequest('))
b = manager.index('        if req.hasPrefix("/setHtmlContent")', a)
auth = manager[a:b].rsplit('        }', 1)[0]
a = manager.index('        // This route shares the secret/token checks')
b = manager.index('        if req.hasPrefix("/waitForStatus")', a)
routes = manager[a:b]
a = manager.index('    private func tokenHash(')
b = manager.index('    private func requestConnectionApproval(', a)
tokens = manager[a:b]
a = manager.index('struct AppExtensionMsg : Codable')
b = manager.index('class AppExtension {', a)
reply = manager[a:b]
a = manager.index('    func addMessage(msg: String)')
b = manager.index('    func webViewDidFinishLoading()', a)
mailbox_methods = manager[a:b]
a = view.index('private final class WeakAppExtensionMessageHandler')
b = view.index('public class AppExtensionWebViewCoordinator', a)
weak_handler = view[a:b]
a = view.index('    public func userContentController(', b)
b = view.index('    // Implement WKNavigationDelegate', a)
handler = view[a:b]
a = view.index('    public func webView(_ webView: WKWebView, didFinish')
b = view.index('    public func userContentController(', a)
navigation_finished = view[a:b]
fixture = r'''
import Foundation
import CryptoKit
extension Data { var sha256Hexa: String { SHA256.hash(data: self).map { String(format: "%02x", $0) }.joined() } }
func jsonStringToDictionary(jsonString: String) -> [String: Any]? {
    (try? JSONSerialization.jsonObject(with: Data(jsonString.utf8))) as? [String: Any]
}
class AppExtension {
    let bundleId = "com.apple.Safari"
    let identity: String
    let secret = "fixture-secret"
    var app: Int? = 1
    var jsMessages: [String] = []
    private var statusMailbox = AppExtensionStatusMailbox()
    private var contentSyncGeneration = 0
    private var syncInFlight = false
    private var healthCheckInFlight = false
    init(_ identity: String = "Safari#fixture") { self.identity = identity }
    func imShowing() -> Bool { false }
    func syncIfNeeded() {}
    func scheduleHealthCheckIfNeeded() {}
    MAILBOX_METHODS
}
class Manager {
    var apps: [String: AppExtension] = [:]
    var documentLoads = 0
    func webViewDidFinishLoading() { documentLoads += 1 }
    private let tokenClockSkewSeconds: Int64 = 3
    private let pollWhenMessagePendingMs = 160, pollWhenShowingMs = 700, pollWhenHiddenMs = 3200
    TOKENS
    func request(_ req: String, secret providedSecret: String?, token providedToken: String?,
                 query: [String: String] = [:], dataReq: String? = nil) -> AppExtensionMsg {
        var reply = AppExtensionMsg()
        let app = apps["com.apple.Safari"]
        AUTH
        ROUTES
        reply.status = "nothing"
        return reply
    }
}
REPLY
class Display {
    class AppWindows {
        var appExtension: AppExtension?
        let display: Display
        init(_ ext: AppExtension, _ display: Display) { appExtension = ext; self.display = display }
    }
    var activateNewApp = false
    var aboveBy = 1
    var ignoreMousePositionForAboveBy = 0
    var completion: (() -> Void)?
    @MainActor func focusAppExtension(app: AppWindows, completion: @escaping () -> Void) {
        self.completion = completion
    }
}
class WKWebView { var curApp: Display.AppWindows? }
class WKNavigation {}
class AppExtensionWKWV: WKWebView {
    var presentations = 0
    func setCurrentApp(app: Display.AppWindows) { presentations += 1; curApp = app }
    func sendCurrentVersion() {}
}
class WKUserContentController {}
protocol WKScriptMessageHandler: AnyObject {
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage)
}
struct Frame { var isMainFrame: Bool }
struct WKScriptMessage { let webView: WKWebView?; let frameInfo: Frame; let body: Any }
struct AppExtensionWebView { let wkwv: WKWebView }
struct JSMessage: Decodable { let type: String; let value: String?; let strId: String? }
enum Static {
    static var appExtensionManager: Manager?
    static var AppExtensionWebView: WKWebView?
    static var OnAppExtensionZone = false
}
WEAK_HANDLER
class AppExtensionWebViewCoordinator: NSObject {
    let parent: AppExtensionWebView
    init(parent: AppExtensionWebView) { self.parent = parent }
    HANDLER
    NAVIGATION_FINISHED
}
@main struct DeliveryTests {
    @MainActor static func main() async {
        let readyQueue = AppExtension()
        readyQueue.addMessage(msg: "{\"type\":\"safariViewReady\",\"previewIds\":[1]}")
        readyQueue.addMessage(msg: "{\"type\":\"safariViewReady\",\"previewIds\":[2]}")
        precondition(readyQueue.pendingStatusEvents().count == 1, "Repeated view readiness must coalesce")
        precondition(readyQueue.pendingStatusEvents()[0].value.contains("[2]"))
        let manager = Manager(), ext = AppExtension()
        Static.appExtensionManager = manager
        manager.apps[ext.bundleId] = ext
        ext.addMessage(msg: "selection")
        let token = Data("fixture-secret:\(Int64(Date().timeIntervalSince1970))".utf8).sha256Hexa
        func request(_ route: String, _ secret: String? = "fixture-secret", _ tokenValue: String? = token,
                     query: [String:String] = [:], body: String? = nil) -> AppExtensionMsg {
            manager.request(route, secret: secret, token: tokenValue, query: query, dataReq: body)
        }
        let first = request("/checkStatus", query: ["reliableStatus":"1"])
        precondition(first.status == "ok" && first.statusEvents?.count == 1)
        let second = request("/checkStatus", query: ["reliableStatus":"1"])
        precondition(second.statusEvents == first.statusEvents, "Lost response must redeliver exact ID")
        let id = first.statusEvents![0].id
        let ack = "{\"ids\":[\"\(id)\"]}"
        for credentials: (String?, String?, String) in [(nil, token, "invalidSecret"),
            ("wrong", token, "invalidSecret"), ("fixture-secret", nil, "missingToken"),
            ("fixture-secret", "wrong", "invalidToken")] {
            precondition(request("/ackStatusMessages", credentials.0, credentials.1, body:ack).description == credentials.2)
            precondition(ext.pendingStatusEvents().count == 1, "Unauthorized ACK cannot consume a request")
        }
        precondition(request("/ackStatusMessages", body:"{\"ids\":[4]}").description == "invalidAcknowledgement")
        precondition(request("/ackStatusMessages", body:"{}").description == "invalidAcknowledgement")
        let tooMany = String(data: try! JSONSerialization.data(withJSONObject:["ids":Array(repeating:id,count:129)]), encoding:.utf8)!
        precondition(request("/ackStatusMessages", body:tooMany).description == "invalidAcknowledgement")
        precondition(request("/ackStatusMessages", body:ack).status == "ok")
        precondition(ext.pendingStatusEvents().isEmpty)
        precondition(request("/ackStatusMessages", body:ack).status == "ok")
        ext.addMessage(msg:"legacy")
        precondition(request("/checkStatus").statusMessages == ["legacy"])
        precondition(ext.pendingStatusEvents().isEmpty)
        manager.apps.removeAll()
        precondition(request("/ackStatusMessages", body:ack).description == "appNotConnected")

        manager.apps[ext.bundleId] = ext
        let display = Display(), webView = AppExtensionWKWV(), controller = WKUserContentController()
        let owner = Display.AppWindows(ext, display)
        webView.curApp = owner
        var coordinator: AppExtensionWebViewCoordinator? = AppExtensionWebViewCoordinator(parent:AppExtensionWebView(wkwv:webView))
        Static.AppExtensionWebView = webView
        Static.OnAppExtensionZone = true
        coordinator!.webView(webView, didFinish: WKNavigation())
        precondition(webView.presentations == 1, "A replaced document must restore the currently visible extension")
        Static.OnAppExtensionZone = false
        coordinator!.webView(webView, didFinish: WKNavigation())
        precondition(webView.presentations == 1, "Hidden extensions must not reopen on navigation")
        Static.OnAppExtensionZone = true
        manager.apps[ext.bundleId] = AppExtension("other identity")
        coordinator!.webView(webView, didFinish: WKNavigation())
        precondition(webView.presentations == 1, "A different approved identity must not regain the retired presentation")
        manager.apps[ext.bundleId] = ext
        coordinator!.webView(WKWebView(), didFinish: WKNavigation())
        precondition(manager.documentLoads == 3, "Retired views must not reset the live document")
        func send(_ body: Any, main: Bool = true, source: WKWebView? = webView) {
            coordinator!.userContentController(controller, didReceive:WKScriptMessage(webView:source, frameInfo:Frame(isMainFrame:main), body:body))
        }
        let status = ["type":"status", "value":"bridge", "strId":"com-apple-Safari"]
        send(status,main:false); send(status,source:WKWebView()); send("scalar")
        send(["type":"status", "value":"wrong owner", "strId":"other"])
        precondition(ext.pendingStatusEvents().isEmpty)
        send(status); send(status)
        precondition(ext.pendingStatusEvents().count == 2, "Repeated messages cannot coalesce")
        ext.teardown()
        send(["type":"focusOnMe", "value":"after reconnect", "strId":"com-apple-Safari"])
        while display.completion == nil { await Task.yield() }
        let replacement = AppExtension()
        manager.apps[ext.bundleId] = replacement
        display.completion?(); display.completion = nil
        precondition(ext.pendingStatusEvents().isEmpty)
        precondition(replacement.pendingStatusEvents().map(\.value) == ["after reconnect"])
        send(["type":"focusOnMe", "value":"revoked", "strId":"com-apple-Safari"])
        while display.completion == nil { await Task.yield() }
        manager.apps.removeAll()
        display.completion?(); display.completion = nil
        precondition(replacement.pendingStatusEvents().count == 1, "Revocation blocks deferred delivery")
        manager.apps[ext.bundleId] = AppExtension("different identity")
        send(status)
        precondition(manager.apps[ext.bundleId]!.pendingStatusEvents().isEmpty)
        weak var weakCoordinator = coordinator
        let weakProxy = WeakAppExtensionMessageHandler(coordinator!)
        coordinator = nil
        precondition(weakCoordinator == nil, "WK handler proxy must not retain the coordinator/web view cycle")
        weakProxy.userContentController(controller, didReceive:WKScriptMessage(webView:webView,frameInfo:Frame(isMainFrame:true),body:status))
        print("AppExtensionDeliveryTests: PASS (production auth, polling/ACK routes, bridge ownership, reconnect/revoke, weak lifetime)")
    }
}
'''
for key, value in [('MAILBOX_METHODS', mailbox_methods), ('TOKENS', tokens), ('AUTH', auth),
                   ('ROUTES', routes), ('REPLY', reply), ('WEAK_HANDLER', weak_handler), ('HANDLER', handler),
                   ('NAVIGATION_FINISHED', navigation_finished)]:
    fixture = fixture.replace(key, value)
with tempfile.TemporaryDirectory(prefix='mih-extension-delivery-') as temp:
    source = Path(temp) / 'DeliveryTests.swift'
    binary = Path(temp) / 'DeliveryTests'
    source.write_text(fixture)
    subprocess.run(['swiftc', '-parse-as-library', str(root / 'MakeItHome/Helpers/AppExtensionStatusMailbox.swift'),
                    str(source), '-o', str(binary)], check=True)
    subprocess.run([str(binary)], check=True, timeout=30)
