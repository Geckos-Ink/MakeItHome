//
//  AppExtensionView.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 29/05/24.
//  Copyright © 2024 geckos.ink. All rights reserved.
//

import SwiftUI
import WebKit

struct AppExtensionView: View {
    var body: some View {
        AppExtensionWebView()
    }
}

#Preview {
    AppExtensionView()
}

public struct AppExtensionWebView: NSViewRepresentable {
    // Single shared instance: SwiftUI re-creates this struct on parent body
    // re-evaluations, and each WKWebView allocation spawns a WebContent process
    private static let sharedWKWV = AppExtensionWKWV()
    public var wkwv : AppExtensionWKWV { AppExtensionWebView.sharedWKWV }
    public var lastMsg : String?
    
    
    // 2
    public func makeNSView(context: Context) -> WKWebView {
        //Static.topBarWebViewRepresentable = self
        
        if false {
            wkwv.setValue(true, forKey: "drawsBackground")
            wkwv.underPageBackgroundColor = NSColor(red: 0.1, green: 0.1, blue: 0.1, alpha: 1)
        }
        else { // transparent background (desktop)
            wkwv.setValue(false, forKey: "drawsBackground")
            wkwv.underPageBackgroundColor = NSColor.clear
        }
        
        wkwv.registerForDraggedTypes([.fileURL, .png, .string])
        wkwv.uiDelegate = context.coordinator
        wkwv.navigationDelegate = context.coordinator
        let controller = wkwv.configuration.userContentController
        controller.removeScriptMessageHandler(forName: "appExtensionMessage")
        controller.add(WeakAppExtensionMessageHandler(context.coordinator), name: "appExtensionMessage")
        
        //wkwv.configuration.setValue(true, forKey: "_allowUniversalAccessFromFileURLs")
        wkwv.configuration.userInterfaceDirectionPolicy = .system
     
        //wkwv.configuration.preferences.setValue(true, forKey: "developerExtrasEnabled")
        
        if #available(macOS 13.3, *) {
            wkwv.isInspectable = true;
        }
        
        var fuck = self
        fuck.delegate = context.coordinator
        
        Static.AppExtensionWebView = wkwv
        Static.appExtensionWebViewRepresentable = self
        
        return wkwv
    }
    
    // 3
    public func updateNSView(_ webView: WKWebView, context: Context) {
        wkwv.load()
    }
    
    public func makeCoordinator() -> AppExtensionWebViewCoordinator {
       return AppExtensionWebViewCoordinator(parent: self)
    }
    
    var delegate: DragDropDelegate? // to remove
}

private final class WeakAppExtensionMessageHandler: NSObject, WKScriptMessageHandler {
    private weak var target: AppExtensionWebViewCoordinator?
    init(_ target: AppExtensionWebViewCoordinator) { self.target = target }
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        target?.userContentController(userContentController, didReceive: message)
    }
}

public class AppExtensionWebViewCoordinator: NSObject, WKNavigationDelegate, DragDropDelegate, WKUIDelegate, WKScriptMessageHandler {
    
    public func didDrop(files: [URL]) {
        //...
    }
    
    var parent: AppExtensionWebView

    var firstLoad = true

    init(parent: AppExtensionWebView) {
        self.parent = parent
    }

    public func webViewWebContentProcessDidTerminate(_ webView: WKWebView) {
        (webView as? AppExtensionWKWV)?.forceReload()
    }

    public func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        guard webView === Static.AppExtensionWebView else { return }

        Static.appExtensionManager?.webViewDidFinishLoading()
        (webView as? AppExtensionWKWV)?.sendCurrentVersion()
        // A new document resets the host's visibility, orientation and show
        // handlers. Restore the live presentation so its ready report requests
        // cached previews even if the pointer never leaves the extension zone.
        if Static.OnAppExtensionZone,
           let extensionView = webView as? AppExtensionWKWV,
           let owner = extensionView.curApp, let displayed = owner.appExtension,
           let current = Static.appExtensionManager?.apps[displayed.bundleId],
           current.identity == displayed.identity {
            extensionView.setCurrentApp(app: owner)
        }
    }

    public func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        guard message.webView === parent.wkwv, message.frameInfo.isMainFrame,
              JSONSerialization.isValidJSONObject(message.body),
              let data = try? JSONSerialization.data(withJSONObject: message.body) else { return }
        handleMessageData(data)
    }

    private func handleMessageData(_ data: Data) {
        guard data.count <= AppExtensionStatusMailbox.maxMessageBytes,
              let json = try? JSONDecoder().decode(JSMessage.self, from: data),
              let owner = parent.wkwv.curApp, let displayed = owner.appExtension,
              let current = Static.appExtensionManager?.apps[displayed.bundleId],
              current.identity == displayed.identity else { return }
        if let source = json.strId,
           source != displayed.bundleId.replacingOccurrences(of: ".", with: "-") { return }

        if json.type == "status", let value = json.value {
            current.addMessage(msg: value)
        } else if json.type == "closeOverscreen" {
            owner.display.activateNewApp = true
            owner.display.aboveBy = 0
            owner.display.ignoreMousePositionForAboveBy = 10
        } else if json.type == "focusOnMe" {
            // Pin the displayed process; re-resolve the approved connection after
            // animation so a reconnect cannot strand a click in an old instance.
            let identity = current.identity
            let bundleId = current.bundleId
            Task { @MainActor in
                owner.display.focusAppExtension(app: owner) {
                    guard let live = Static.appExtensionManager?.apps[bundleId],
                          live.identity == identity else { return }
                    if let status = json.value { live.addMessage(msg: status) }
                }
            }
        }
    }

    // Implement WKNavigationDelegate method to allow navigation for dropped items
    public func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        
        guard let url = navigationAction.request.url else {
            decisionHandler(.cancel)
            return
        }
        
        
        if(url.scheme == "file"){
            //print("AppExtension file lastPathComponent", url.lastPathComponent)
            if(url.lastPathComponent == "appExtensionView.html"){
                decisionHandler(.allow)
                return
            }
        }
        else if let url = navigationAction.request.url, // is a message
           url.scheme == "myapp",
           url.host == "message",
           let message = url.queryParameters?["text"] {
            if navigationAction.targetFrame?.isMainFrame == true {
                handleMessageData(Data(message.utf8))
            }
            decisionHandler(.cancel)
            return
        }
        
        if url.host == "127.0.0.1"{
            decisionHandler(.allow)
        }
        else {
            decisionHandler(.cancel)
        }
        
        return
    }
}

public class AppExtensionWKWV : WKWebView{
    
    ///
    /// Send message
    ///
    
    public func sendMessage(str: String){
        // Call the injected JavaScript function from Swift
        let callScript = "receiveMessage('\(str)');"
        self.evaluateJavaScript(callScript, completionHandler: nil)
    }
    
    public func sendMessage(obj: JSMessage){
        do {
            let jsonData = try JSONEncoder().encode(obj)
            let msg = String(data: jsonData, encoding: String.Encoding.utf8)
            
            if msg != nil{
                let callScript = "receiveMessage("+msg!+");"
                //print(callScript)
                self.evaluateJavaScript(callScript, completionHandler: nil)
            }
        }
        catch {
            print("EEEEERRROOORRR")
        }
    }
    
    ///
    ///
    ///
    
    private var didLoad = false

    func forceReload(){
        didLoad = false
        load()
    }

    func load(){
        // Reloading wipes the app-extension content injected via evaluateJavaScript
        // and forces the browser extension to resend everything, so load only once
        if didLoad {
            return
        }

        if let url = Bundle.main.url(forResource: "assets/appExtensionView", withExtension: "html") {
            didLoad = true
            self.loadFileURL(url, allowingReadAccessTo: url.deletingLastPathComponent())

            delay(ms: 100){
                // for some reasons, that seems to not work
                self.sendCurrentVersion()
            }
        }
    }
    
    ///
    /// Current App Extension management
    ///
    
    public override var acceptsFirstResponder: Bool { return true }
    
    var curApp : Display.AppWindows?
    func setCurrentApp(app: Display.AppWindows){
        self.curApp = app
        
        let bundleId = app.appExtension!.bundleId
        let isHorizontal = Static.curDisplay?.side ?? 0 <= 1 ? "false" : "true"
        
        let callScript = "showAppExtension('\(bundleId)', \(isHorizontal));"
        self.evaluateJavaScript(callScript, completionHandler: nil)
        
        // repeat every time, this is the mantra
        self.sendCurrentVersion()
        
        app.appExtension?.flushJSMessage()
    }
    
    func sendCurrentVersion(){
        let version = (Bundle.main.infoDictionary!["CFBundleShortVersionString"] as! String)
        self.genericEvaluateJavascript(script: "setVersion('\(version)');")
    }
    
    func exiting() {
        self.evaluateJavaScript("exitingAppExtension()", completionHandler: nil)
    }
    
    func genericEvaluateJavascript(script: String){
        self.evaluateJavaScript(script)
    }
}
