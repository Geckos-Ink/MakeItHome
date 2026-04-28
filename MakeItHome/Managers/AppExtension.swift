//
//  AppExtension.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 31/05/24.
//  Copyright © 2024 geckos.ink. All rights reserved.
//

import Foundation
import AppKit

class AppExtensionManager {
    var apps : [String: AppExtension] = [:]
    private let trustPrefix = "TrustedAppExtension_"
    private let trustNamePrefix = "TrustedAppExtensionName_"
    private let trustSecretPrefix = "TrustedAppExtensionSecret_"
    private let tokenClockSkewSeconds: Int64 = 3
    private let pollWhenShowingMs = 700
    private let pollWhenHiddenMs = 2800
    private let pollWhenMessagePendingMs = 160
    
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
        let extensionName = query["extensionName"]
        let extensionVersion = query["extensionVersion"]
        let clientId = query["clientId"]
        let identity = extensionIdentity(bundleId: bundleId, clientId: clientId)
        let providedSecret = query["secret"]
        let providedToken = query["token"]
        
        let path = url.components(separatedBy: "?").first ?? url
        let req = path.replacingOccurrences(of: "/appExtension", with: "")
        //print("AppExtension request from bundleId", bundleId) // DEBUG
        
        var app = apps[bundleId]
        
        if req.hasPrefix("/connect"){
            if let app = app {
                if hasValidToken(secret: app.secret, token: providedToken) {
                    reply.secret = app.secret
                    reply.description = "appAlreadyConnected" // fantastic. A typo in release.
                    reply.status = "ok"

                    saveTrustedExtension(identity: identity, extensionName: extensionName, secret: app.secret)
                    markInstallCompletedIfNeeded(bundleId: bundleId, extensionName: extensionName)

                    app.syncIfNeeded(force: true)
                    app.scheduleHealthCheckIfNeeded(force: true)
                    return reply
                }

                let isMissingToken = providedToken?.isEmpty ?? true
                let isAllowed = requestConnectionApproval(
                    bundleId: bundleId,
                    clientId: clientId,
                    extensionName: extensionName,
                    extensionVersion: extensionVersion,
                    isReplacingConnection: true,
                    reason: isMissingToken ? "Missing security token." : "Invalid security token."
                )

                if !isAllowed {
                    reply.status = "error"
                    reply.description = "connectionDenied"
                    return reply
                }

                let newApp = AppExtension(bundleId: bundleId)
                apps[bundleId] = newApp
                saveTrustedExtension(identity: identity, extensionName: extensionName, secret: newApp.secret)
                markInstallCompletedIfNeeded(bundleId: bundleId, extensionName: extensionName)

                reply.secret = newApp.secret
                reply.description = "appConnected"
                reply.status = "ok"

                newApp.syncIfNeeded(force: true)
                newApp.scheduleHealthCheckIfNeeded(force: true)
                return reply
            } else {
                let trustedSecret = getTrustedSecret(identity: identity)
                let isTrusted = isTrustedExtension(identity: identity)
                let missingClientIdentity = bundleId == "com.apple.Safari" && normalizedClientId(clientId) == nil
                let tokenIsValidForTrustedSecret: Bool

                if let trustedSecret = trustedSecret,
                   let providedSecret = providedSecret,
                   providedSecret == trustedSecret {
                    tokenIsValidForTrustedSecret = hasValidToken(secret: trustedSecret, token: providedToken)
                } else {
                    tokenIsValidForTrustedSecret = false
                }

                if !isTrusted || !tokenIsValidForTrustedSecret || missingClientIdentity {
                    let reason: String
                    if missingClientIdentity {
                        reason = "Missing extension identity."
                    } else if !isTrusted {
                        reason = "First connection request."
                    } else if providedToken?.isEmpty ?? true {
                        reason = "Missing security token."
                    } else {
                        reason = "Invalid security token."
                    }

                    let isAllowed = requestConnectionApproval(
                        bundleId: bundleId,
                        clientId: clientId,
                        extensionName: extensionName,
                        extensionVersion: extensionVersion,
                        isReplacingConnection: isTrusted,
                        reason: reason
                    )

                    if !isAllowed {
                        reply.status = "error"
                        reply.description = "connectionDenied"
                        return reply
                    }
                }

                app = AppExtension(bundleId: bundleId)
                apps[bundleId] = app
                saveTrustedExtension(identity: identity, extensionName: extensionName, secret: app?.secret)
                markInstallCompletedIfNeeded(bundleId: bundleId, extensionName: extensionName)

                reply.secret = app?.secret
                reply.description = "appConnected"
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
            
            let secret = providedSecret
            
            if secret == nil || secret != app?.secret {
                reply.status = "error"
                reply.description = "invalidSecret"
                return reply
            }

            if providedToken?.isEmpty ?? true {
                reply.status = "error"
                reply.description = "missingToken"
                return reply
            }

            if !hasValidToken(secret: app?.secret ?? "", token: providedToken) {
                reply.status = "error"
                reply.description = "invalidToken"
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
            let forceReload = body!["forceReload"] as? Bool ?? false
            
            if content == nil {
                reply.status = "error"
                reply.description = "Missing 'content' in body"
                return reply
            }
             
            app?.setHTMLContent(content: content!, forceReload: forceReload)
            
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
            let statusMessages = app!.consumeStatusMessages()
            
            reply.appExtensionIsShowing = isShowing
            reply.statusMessages = statusMessages
            
            reply.appLinked = app?.app != nil
            reply.nextPollInMs = nextPollIntervalMs(isShowing: isShowing, hasMessages: statusMessages?.isEmpty == false)
            
            reply.status = "ok"
            
            if isShowing || (statusMessages?.isEmpty == false) {
                app!.syncIfNeeded()
            }
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

    private func normalizedClientId(_ clientId: String?) -> String? {
        guard let value = clientId?.trimmingCharacters(in: .whitespacesAndNewlines),
              !value.isEmpty else {
            return nil
        }
        
        return value
    }

    private func extensionIdentity(bundleId: String, clientId: String?) -> String {
        guard let clientId = normalizedClientId(clientId) else {
            return bundleId
        }
        
        return "\(bundleId)#\(clientId)"
    }

    private func trustKey(identity: String) -> String {
        return trustPrefix + identity
    }

    private func trustNameKey(identity: String) -> String {
        return trustNamePrefix + identity
    }

    private func trustSecretKey(identity: String) -> String {
        return trustSecretPrefix + identity
    }

    private func isTrustedExtension(identity: String) -> Bool {
        return UserDefaults.standard.bool(forKey: trustKey(identity: identity))
    }

    private func getTrustedSecret(identity: String) -> String? {
        return UserDefaults.standard.object(forKey: trustSecretKey(identity: identity)) as? String
    }

    private func saveTrustedExtension(identity: String, extensionName: String?, secret: String?) {
        let user = UserDefaults.standard
        user.set(true, forKey: trustKey(identity: identity))
        if let extensionName = extensionName, !extensionName.isEmpty {
            user.set(extensionName, forKey: trustNameKey(identity: identity))
        }

        if let secret = secret {
            user.set(secret, forKey: trustSecretKey(identity: identity))
        }
    }

    private func extensionDisplayName(bundleId: String, clientId: String?, extensionName: String?) -> String {
        if let extensionName = extensionName?.trimmingCharacters(in: .whitespacesAndNewlines), !extensionName.isEmpty {
            return extensionName
        }

        let identity = extensionIdentity(bundleId: bundleId, clientId: clientId)
        if let savedName = UserDefaults.standard.object(forKey: trustNameKey(identity: identity)) as? String, !savedName.isEmpty {
            return savedName
        }

        return bundleId
    }

    private func tokenHash(secret: String, second: Int64) -> String {
        let raw = "\(secret):\(second)"
        guard let data = raw.data(using: .utf8) else {
            return ""
        }

        return data.sha256Hexa
    }

    private func hasValidToken(secret: String, token: String?) -> Bool {
        guard let token = token, !token.isEmpty else {
            return false
        }

        let now = Int64(Date().timeIntervalSince1970)
        for offset in -tokenClockSkewSeconds...tokenClockSkewSeconds {
            let candidateSecond = now + offset
            if tokenHash(secret: secret, second: candidateSecond) == token {
                return true
            }
        }

        return false
    }

    private func nextPollIntervalMs(isShowing: Bool, hasMessages: Bool) -> Int {
        if hasMessages {
            return pollWhenMessagePendingMs
        }

        return isShowing ? pollWhenShowingMs : pollWhenHiddenMs
    }

    private func requestConnectionApproval(bundleId: String, clientId: String?, extensionName: String?, extensionVersion: String?, isReplacingConnection: Bool, reason: String) -> Bool {
        let action = {
            let extensionDisplayName = self.extensionDisplayName(bundleId: bundleId, clientId: clientId, extensionName: extensionName)
            let alert = NSAlert()
            alert.alertStyle = .warning
            alert.messageText = "Allow \(extensionDisplayName) extension?"

            var informativeText = "\(extensionDisplayName) (\(bundleId)) requested a connection to MakeItHome.\n\nReason: \(reason)"
            if let clientId = self.normalizedClientId(clientId) {
                informativeText += "\nClient ID: \(clientId)"
            }
            if let extensionVersion = extensionVersion, !extensionVersion.isEmpty {
                informativeText += "\nVersion: \(extensionVersion)"
            }
            if isReplacingConnection {
                informativeText += "\n\nThis will replace the previously confirmed connection."
            }

            informativeText += "\n\nAllow only if you trust this extension."
            alert.informativeText = informativeText
            alert.addButton(withTitle: "Allow")
            alert.addButton(withTitle: "Deny")

            NSApp.activate(ignoringOtherApps: true)
            return alert.runModal() == .alertFirstButtonReturn
        }

        if Thread.isMainThread {
            return action()
        }

        return DispatchQueue.main.sync {
            action()
        }
    }

    private func markInstallCompletedIfNeeded(bundleId: String, extensionName: String?) {
        if bundleId == "com.apple.Safari", extensionName == "MakeItHome Web" {
            Static.markWebExtensionInstalled()
        }
    }
}

struct AppExtensionMsg : Codable {
    var status: String?
    var description: String?
    
    var secret: String?
    
    var appExtensionIsShowing : Bool?
    var statusMessages : [String]?
    
    var appLinked : Bool?
    var nextPollInMs : Int?
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
    private let healthCheckInterval: TimeInterval = 2.0
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
    
    func setHTMLContent(content: String, forceReload: Bool = false){
        if forceReload {
            markNeedsContainer()
        }

        if forceReload || htmlContent != content {
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
        guard Static.AppExtensionWebView != nil else { return }
        
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
        guard Static.AppExtensionWebView != nil else { return }
        
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
