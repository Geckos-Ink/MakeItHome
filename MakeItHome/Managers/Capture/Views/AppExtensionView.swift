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
    public let wkwv = AppExtensionWKWV()
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
        
        wkwv.configuration.setValue(true, forKey: "_allowUniversalAccessFromFileURLs")
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

public class AppExtensionWebViewCoordinator: NSObject, WKNavigationDelegate, DragDropDelegate, WKUIDelegate {
    
    public func didDrop(files: [URL]) {
        //...
    }
    
    var parent: AppExtensionWebView

    var firstLoad = true
    
    init(parent: AppExtensionWebView) {
        self.parent = parent
    }

    // Implement WKNavigationDelegate method to allow navigation for dropped items
    public func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        
        guard let url = navigationAction.request.url else {
            decisionHandler(.cancel)
            return
        }
        
        print("AppExtension received url ", url)
        
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
            // Handle the message from JavaScript
            print("Message from JavaScript: \(message)")
            
            //pasteFile(filePath: "file:///Users/riccardo/Sources/GitHub/Extension-Twitch-LowLatency/stuff/forward.png")
            
            var isJson = false
            var json : JSMessage?
            
            do {
                let jsonDecoder = JSONDecoder()
                json = try jsonDecoder.decode(JSMessage.self, from: message.data(using: .utf8)!)
                isJson = true
            }
            catch{
                let err = error.localizedDescription
                print(error, err)
                isJson = false
            }
            
            if isJson {
                if json?.type == "jsError"{
                    print(json?.value);
                }
                
                if json?.type == "status" && json?.value != nil {
                    let curApp = Static.AppExtensionWebView?.curApp
                    
                    if curApp?.appExtension != nil {
                        let ext = curApp?.appExtension
                        ext?.addMessage(msg: json!.value!)
                    }
                }
                
                if json?.type == "closeOverscreen" {
                    print("close overscreen")
                    Static.curDisplay?.activateNewApp = true
                    Static.curDisplay?.aboveBy = 0
                    Static.curDisplay?.ignoreMousePositionForAboveBy = 10
                }
                
                //...
                
                decisionHandler(.cancel)
                return
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
    
    func load(){
        if let url = Bundle.main.url(forResource: "assets/appExtensionView", withExtension: "html") {
            self.loadFileURL(url, allowingReadAccessTo: url.deletingLastPathComponent())
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
        
        let callScript = "showAppExtension('\(bundleId)', \(isHorizontal);"
        self.evaluateJavaScript(callScript, completionHandler: nil)
        
        app.appExtension?.flushJSMessage()
    }
    
    func genericEvaluateJavascript(script: String){
        self.evaluateJavaScript(script)
    }
}
