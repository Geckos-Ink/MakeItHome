//
//  AppExtension.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 31/05/24.
//  Copyright © 2024 geckos.ink. All rights reserved.
//

import Foundation

class AppExtensionManager {
    var apps : [String: AppExtension] = [:]
    
    func closedApp(bundleId: String){
        guard let app = apps[bundleId] else { return }
        app.addMessage(msg: "appExtensionRemoved")
        app.teardown()
        apps.removeValue(forKey: bundleId)
    }
    
    func httpRequest(url: String, dataReq: String?) -> AppExtensionMsg {
        var reply = AppExtensionMsg()
        guard let query = parseURLQueryItems(from: url),
              let bundleId = query["bundleId"] else {
            reply.status = "error"
            reply.description = "invalidRequest"
            return reply
        }
        
        let path = url.components(separatedBy: "?").first ?? url
        let req = path.replacingOccurrences(of: "/appExtension", with: "")
        //print("AppExtension request from bundleId", bundleId) // DEBUG
        
        var app = apps[bundleId]
        
        if req.hasPrefix("/connect"){
            if app == nil {
                app = AppExtension(bundleId: bundleId)
                apps[bundleId] = app
                
                reply.secret = app?.secret
                reply.description = "appConnected"
            }
            else {
                apps[bundleId] = app
                reply.secret = app?.secret
                
                reply.description = "appAlreadyConnected" // fantastic. A typo in release.
            }
            
            app?.syncIfNeeded(force: true)
            app?.scheduleHealthCheckIfNeeded(force: true)
            reply.status = "ok"
            return reply
        }
        else {
            if app == nil {
                reply.status = "error"
                reply.description = "appNotConnected"
                return reply
            }
            
            let secret = query["secret"]
            
            if secret == nil || secret != app?.secret {
                reply.status = "error"
                reply.description = "invalidSecret"
                return reply
            }
        }
        
        if req.hasPrefix("/setHtmlContent"){
            if dataReq == nil {
                reply.status = "error"
                reply.description = "POST body missing"
                return reply
            }
            
            var body = jsonStringToDictionary(jsonString: dataReq!)
            
            if body == nil {
                reply.status = "error"
                reply.description = "invalidJsonBody"
                return reply
            }
            
            let content = body!["content"] as? String
            
            if content == nil {
                reply.status = "error"
                reply.description = "Missing 'content' in body"
                return reply
            }
             
            app?.setHTMLContent(content: content!)
            
            reply.status = "ok"
            return reply
        }
        
        if req.hasPrefix("/sendJSMessage"){
            
            if dataReq == nil {
                reply.status = "error"
                reply.description = "POST body missing"
                return reply
            }
            
            var body = jsonStringToDictionary(jsonString: dataReq!)
            
            if body == nil {
                reply.status = "error"
                reply.description = "invalidJsonBody"
                return reply
            }
            
            let jsMessage = body!["jsMessage"] as? String
            
            if jsMessage == nil {
                reply.status = "error"
                reply.description = "Missing 'jsMessage' in body"
                return reply
            }
            
            app?.sendJSMessage(msg: jsMessage!)
            
            reply.status = "ok"
            return reply
        }
        
        if req.hasPrefix("/checkStatus"){
            let isShowing = app!.imShowing()
            
            reply.appExtensionIsShowing = isShowing
            reply.statusMessages = app!.consumeStatusMessages()
            
            reply.appLinked = app?.app != nil
            
            reply.status = "ok"
            
            app!.syncIfNeeded()
            if isShowing {
                app!.scheduleHealthCheckIfNeeded()
            }
            
            return reply
        }
        
        if req.hasPrefix("/waitForStatus"){ // deprecate it (due to crashes), or redesign it
            reply = httpRequest(url: url.replacingOccurrences(of: "/waitForStatus", with: "/checkStatus"),
                                dataReq: dataReq)
            return reply
        }
        
        reply.status = "nothing"
        return reply
    }
}

struct AppExtensionMsg : Codable {
    var status: String?
    var description: String?
    
    var secret: String?
    
    var appExtensionIsShowing : Bool?
    var statusMessages : [String]?
    
    var appLinked : Bool?
}

class AppExtension {
    let bundleId : String
    let secret : String
    var app : Display.AppWindows?
    private var htmlContent : String = ""
    private var hasReceivedContent = false
    private var contentRevision = 0
    private var lastAppliedContentRevision = 0
    private var needsContainer = true
    private var syncInFlight = false
    private var healthCheckInFlight = false
    private var lastSyncAttemptAt: TimeInterval = 0
    private var lastHealthCheckAt: TimeInterval = 0
    private var lastWebViewIdentity: ObjectIdentifier?
    private let syncThrottle: TimeInterval = 0.25
    private let healthCheckInterval: TimeInterval = 1.0
    private let maxQueuedMessages = 200
    
    var hasStatusUpdate : Bool = false
    var statusMessages : [String] = []
    
    var jsMessages : [String] = []
    
    init(bundleId : String){
        self.bundleId = bundleId
        self.secret = generateRandomString(length: 64)
        
        markNeedsContainer()
        syncIfNeeded(force: true)
    }
    
    func setHTMLContent(content: String){
        if htmlContent != content {
            htmlContent = content
            contentRevision += 1
        }
        
        hasReceivedContent = true
        syncIfNeeded(force: true)
    }
    
    var sendJsMessageWhenShowing = false
    func sendJSMessage(msg: String){
        if sendJsMessageWhenShowing && !self.imShowing() {
            enqueueJSMessage(msg: msg)
            return
        }
        
        if canRunJS() {
            flushJSMessage()
            evaluateJavascript(msg) { _, _ in }
        }
        else {
            enqueueJSMessage(msg: msg)
            syncIfNeeded()
        }
    }
    
    func flushJSMessage(){
        guard !jsMessages.isEmpty else {
            return
        }
        
        guard canRunJS() else {
            return
        }
        
        guard !sendJsMessageWhenShowing || self.imShowing() else {
            return
        }
        
        let messages = jsMessages
        jsMessages = []
        for msg in messages {
            evaluateJavascript(msg) { _, _ in }
        }
    }
    
    func imShowing() -> Bool {
        if Static.OnAppExtensionZone && Static.AppExtensionWebView?.curApp?.bundleId == app?.bundleId {
            return true
        }
        
        return false
    }
    
    func link(app : Display.AppWindows){
        self.app = app
    }
    
    func addMessage(msg: String){
        statusMessages.append(msg)
        hasStatusUpdate = true
    }
    
    func consumeStatusMessages() -> [String]? {
        guard !statusMessages.isEmpty else {
            hasStatusUpdate = false
            return nil
        }
        
        let messages = statusMessages
        statusMessages = []
        hasStatusUpdate = false
        return messages
    }
    
    func teardown() {
        jsMessages = []
        statusMessages = []
        hasStatusUpdate = false
    }
    
    func syncIfNeeded(force: Bool = false) {
        updateWebViewIdentityIfNeeded()
        
        guard !syncInFlight else { return }
        guard let webView = Static.AppExtensionWebView, !webView.isLoading else { return }
        
        let now = Date.now.timeIntervalSince1970
        if !force && (now - lastSyncAttemptAt) < syncThrottle {
            return
        }
        
        let shouldCreate = needsContainer
        let targetRevision = contentRevision
        let shouldSetContent = hasReceivedContent && lastAppliedContentRevision != targetRevision
        
        if !shouldCreate && !shouldSetContent {
            return
        }
        
        lastSyncAttemptAt = now
        syncInFlight = true
        
        let bundleIdLiteral = jsStringLiteral(bundleId)
        var scriptParts: [String] = []
        
        if shouldCreate {
            scriptParts.append("createAppExtension(\(bundleIdLiteral));")
        }
        
        if shouldSetContent {
            let contentLiteral = jsStringLiteral(htmlContent)
            scriptParts.append("setContent(\(bundleIdLiteral), \(contentLiteral));")
        }
        
        let script = scriptParts.joined()
        
        evaluateJavascript(script) { _, error in
            self.syncInFlight = false
            
            if error == nil {
                if shouldCreate {
                    self.needsContainer = false
                }
                
                if shouldSetContent && self.contentRevision == targetRevision {
                    self.lastAppliedContentRevision = targetRevision
                }
            }
            
            let needsRetry = self.needsContainer || (self.hasReceivedContent && self.lastAppliedContentRevision != self.contentRevision)
            if needsRetry {
                self.syncIfNeeded(force: error == nil)
            } else if self.canFlushMessages() {
                self.flushJSMessage()
            }
        }
    }
    
    func scheduleHealthCheckIfNeeded(force: Bool = false) {
        guard self.imShowing() else { return }
        guard !healthCheckInFlight else { return }
        guard let webView = Static.AppExtensionWebView, !webView.isLoading else { return }
        
        let now = Date.now.timeIntervalSince1970
        if !force && (now - lastHealthCheckAt) < healthCheckInterval {
            return
        }
        
        lastHealthCheckAt = now
        healthCheckInFlight = true
        
        let elementId = bundleId.replacingOccurrences(of: ".", with: "-")
        let elementLiteral = jsStringLiteral(elementId)
        let script = "Boolean(document.getElementById(\(elementLiteral)))"
        
        evaluateJavascript(script) { result, error in
            self.healthCheckInFlight = false
            
            let isReady = (result as? Bool) == true && error == nil
            if !isReady {
                self.markNeedsContainer()
                self.syncIfNeeded(force: true)
            }
        }
    }
    
    private func canFlushMessages() -> Bool {
        return !sendJsMessageWhenShowing || self.imShowing()
    }
    
    private func canRunJS() -> Bool {
        if needsContainer { return false }
        if Static.AppExtensionWebView?.isLoading == true { return false }
        if hasReceivedContent && lastAppliedContentRevision != contentRevision { return false }
        return true
    }
    
    private func enqueueJSMessage(msg: String) {
        if jsMessages.count >= maxQueuedMessages {
            jsMessages.removeFirst()
        }
        jsMessages.append(msg)
    }
    
    private func markNeedsContainer() {
        needsContainer = true
        lastAppliedContentRevision = -1
    }
    
    private func updateWebViewIdentityIfNeeded() {
        let currentIdentity = Static.AppExtensionWebView.map { ObjectIdentifier($0) }
        if currentIdentity != lastWebViewIdentity {
            lastWebViewIdentity = currentIdentity
            markNeedsContainer()
        }
    }
    
    private func evaluateJavascript(_ script: String, completion: @escaping (Any?, Error?) -> Void) {
        guard let webView = Static.AppExtensionWebView else {
            completion(nil, NSError(domain: "AppExtensionWebView", code: 1, userInfo: nil))
            return
        }
        
        let run = {
            webView.evaluateJavaScript(script) { result, error in
                DispatchQueue.main.async {
                    completion(result, error)
                }
            }
        }
        
        if Thread.isMainThread {
            run()
        } else {
            DispatchQueue.main.async {
                run()
            }
        }
    }
    
    private func jsStringLiteral(_ value: String) -> String {
        guard let data = try? JSONEncoder().encode(value),
              let string = String(data: data, encoding: .utf8) else {
            return "\"\""
        }
        
        return string
    }
}
