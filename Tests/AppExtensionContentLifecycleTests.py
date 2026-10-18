#!/usr/bin/env python3
"""Compile the entire production AppExtension with a controllable WebKit double.
Checks content sync, health-check errors, reload generations and explicit reset.
"""
from pathlib import Path
import subprocess
import tempfile

root = Path(__file__).resolve().parents[1]
source = (root / 'MakeItHome/Managers/AppExtension.swift').read_text()
implementation = source[source.index('class AppExtension {'):]
fixture = r'''
import Foundation
func generateRandomString(length: Int) -> String { String(repeating: "x", count: length) }
func jsonStringToDictionary(jsonString: String) -> [String: Any]? {
    (try? JSONSerialization.jsonObject(with: Data(jsonString.utf8))) as? [String: Any]
}
class Display { class AppWindows { let bundleId: String? = "com.apple.Safari" } }
class WebView {
    struct Operation { let script: String; let completion: (Any?, Error?) -> Void }
    var pending: [Operation] = []
    var isLoading = false
    var curApp: Display.AppWindows? = Display.AppWindows()
    func evaluateJavaScript(_ script: String, completionHandler: @escaping (Any?, Error?) -> Void) {
        pending.append(Operation(script: script, completion: completionHandler))
    }
}
enum Static { static var OnAppExtensionZone = true; static var AppExtensionWebView: WebView? }
IMPLEMENTATION
@main struct ContentLifecycleTests {
    @MainActor static func drain() async { try! await Task.sleep(nanoseconds: 20_000_000) }
    @MainActor static func complete(_ view: WebView, result: Any? = nil, error: Error? = nil) async {
        precondition(!view.pending.isEmpty)
        view.pending.removeFirst().completion(result, error)
        await drain()
    }
    @MainActor static func main() async {
        let view = WebView()
        Static.AppExtensionWebView = view
        let ext = AppExtension(bundleId: "com.apple.Safari", identity: "fixture")
        ext.link(app: view.curApp!)
        ext.setHTMLContent(content: "fixture-content")
        precondition(view.pending.count == 1 && view.pending[0].script.contains("createAppExtension"))
        await complete(view)
        precondition(view.pending.count == 1 && view.pending[0].script.contains("setContent"))
        await complete(view)
        ext.setHTMLContent(content: "fixture-content")
        precondition(view.pending.isEmpty, "Identical HTML must not re-run content")
        ext.scheduleHealthCheckIfNeeded(force: true)
        await complete(view, error: NSError(domain: "fixture", code: 1))
        precondition(view.pending.isEmpty, "JS execution errors must not rebuild a healthy view")
        ext.scheduleHealthCheckIfNeeded(force: true)
        await complete(view, result: "unknown")
        precondition(view.pending.isEmpty, "Unknown health result cannot force reinjection")
        ext.scheduleHealthCheckIfNeeded(force: true)
        await complete(view, result: true)
        precondition(view.pending.isEmpty)

        ext.scheduleHealthCheckIfNeeded(force: true)
        let staleHealth = view.pending.removeFirst()
        ext.webViewDidFinishLoading()
        precondition(view.pending.count == 1)
        await complete(view)
        staleHealth.completion(false, nil)
        await drain()
        precondition(view.pending.isEmpty, "Old document health results must not wipe the new document")

        ext.webViewDidFinishLoading()
        let staleSync = view.pending.removeFirst()
        ext.webViewDidFinishLoading()
        staleSync.completion(nil, nil)
        await drain()
        precondition(view.pending.count == 1)
        ext.sendJSMessage(msg: "fixtureMessage()")
        precondition(view.pending.count == 1, "Old sync callback cannot publish readiness for a newer sync")
        await complete(view)
        precondition(view.pending.count == 1 && view.pending[0].script == "fixtureMessage()")
        await complete(view)

        ext.scheduleHealthCheckIfNeeded(force: true)
        await complete(view, result: false)
        precondition(view.pending.count == 1 && view.pending[0].script.contains("createAppExtension"))
        precondition(view.pending[0].script.contains(", false)"), "Automatic recovery must be idempotent")
        await complete(view)
        ext.setHTMLContent(content: "fixture-content", forceReload: true)
        precondition(view.pending.count == 1 && view.pending[0].script.contains(", true)"), "Explicit reset must still force content replacement")
        await complete(view)

        ext.webViewDidFinishLoading()
        let oldViewSync = view.pending.removeFirst()
        let replacement = WebView()
        Static.AppExtensionWebView = replacement
        ext.syncIfNeeded(force: true)
        oldViewSync.completion(nil, nil)
        await drain()
        precondition(replacement.pending.count == 1)
        await complete(replacement)
        precondition(replacement.pending.isEmpty)
        ext.link(app: replacement.curApp!)
        ext.scheduleHealthCheckIfNeeded(force: true)
        let retiredHealth = replacement.pending.removeFirst()
        ext.teardown()
        retiredHealth.completion(false, nil)
        await drain()
        precondition(replacement.pending.isEmpty, "Retired connection callbacks cannot reinject content")
        print("AppExtensionContentLifecycleTests: PASS (identical content, transient health errors, missing DOM, reset, stale sync/health/view generations)")
    }
}
'''.replace('IMPLEMENTATION', implementation)
with tempfile.TemporaryDirectory(prefix='mih-content-lifecycle-') as temp:
    path = Path(temp) / 'ContentLifecycleTests.swift'
    binary = Path(temp) / 'ContentLifecycleTests'
    path.write_text(fixture)
    subprocess.run(['swiftc', '-parse-as-library', str(root / 'MakeItHome/Helpers/AppExtensionStatusMailbox.swift'), str(path), '-o', str(binary)], check=True)
    subprocess.run([str(binary)], check=True, timeout=30)
