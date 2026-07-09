//
//  AppExtension.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 31/05/24.
//  Copyright © 2024 geckos.ink. All rights reserved.
//

import Foundation
import AppKit

enum ConnectionApprovalDecision: String {
    case allow
    case deny
    case ignored
}

struct AppExtensionPermissionStatus: Codable {
    var identity: String
    var bundleId: String
    var clientId: String?
    var extensionName: String
    var extensionVersion: String?
    var trusted: Bool
    var hasSecret: Bool
    var connected: Bool
    var lastSeenAt: TimeInterval?
    var ignoredUntil: TimeInterval?
}

class AppExtensionManager {
    var apps : [String: AppExtension] = [:]
    private let trustPrefix = "TrustedAppExtension_"
    private let trustNamePrefix = "TrustedAppExtensionName_"
    private let trustSecretPrefix = "TrustedAppExtensionSecret_"
    private let trustIgnoreUntilPrefix = "TrustedAppExtensionIgnoreUntil_"
    private let knownExtensionsKey = "KnownAppExtensions"
    private let knownBundlePrefix = "KnownAppExtensionBundle_"
    private let knownClientPrefix = "KnownAppExtensionClient_"
    private let knownVersionPrefix = "KnownAppExtensionVersion_"
    private let knownNamePrefix = "KnownAppExtensionName_"
    private let knownLastSeenPrefix = "KnownAppExtensionLastSeen_"
    private let tokenClockSkewSeconds: Int64 = 3
    private let pollWhenShowingMs = 700
    private let pollWhenHiddenMs = 2800
    private let pollWhenMessagePendingMs = 160
    private let approvalIgnoreCooldownSeconds: TimeInterval = 30
    private let approvalTimeoutSeconds: TimeInterval = 30
    // After a connection is approved/established we keep a short grace window per identity.
    // The browser extension fires several concurrent /connect requests (initial timer,
    // screenshot loop, toolbar click, extensionStart message) before it has received the
    // secret. Without this window those racing empty-token reconnects would each re-open an
    // approval prompt and rotate the secret, so the user could click "Allow" forever without
    // ever converging. During the window we reuse the existing connection's secret instead.
    private let approvalGraceSeconds: TimeInterval = 10
    private var recentlyApprovedUntil: [String: TimeInterval] = [:]
    
    func closedApp(bundleId: String){
        guard let app = apps[bundleId] else { return }
        app.addMessage(msg: "appExtensionRemoved")
        app.teardown()
        apps.removeValue(forKey: bundleId)
    }

    func extensionPermissionsStatus() -> [AppExtensionPermissionStatus] {
        let now = Date().timeIntervalSince1970
        var identities = knownExtensionIdentities()

        // Keep backward compatibility with trust records saved before known-extension tracking.
        for (key, value) in UserDefaults.standard.dictionaryRepresentation() where key.hasPrefix(trustPrefix) {
            guard (value as? Bool) == true else { continue }
            let identity = String(key.dropFirst(trustPrefix.count))
            if !identity.isEmpty && !identities.contains(identity) {
                identities.append(identity)
            }
        }

        var items: [AppExtensionPermissionStatus] = []
        for identity in identities {
            let bundleId = knownBundleId(identity: identity) ?? bundleIdFromIdentity(identity)
            let clientId = knownClientId(identity: identity) ?? clientIdFromIdentity(identity)
            let extensionName = knownExtensionName(identity: identity) ?? extensionDisplayName(bundleId: bundleId, clientId: clientId, extensionName: nil)
            let connected = apps[bundleId]?.identity == identity
            let ignoredUntil = getIgnoredUntil(identity: identity)

            items.append(AppExtensionPermissionStatus(
                identity: identity,
                bundleId: bundleId,
                clientId: clientId,
                extensionName: extensionName,
                extensionVersion: knownExtensionVersion(identity: identity),
                trusted: isTrustedExtension(identity: identity),
                hasSecret: getTrustedSecret(identity: identity) != nil,
                connected: connected,
                lastSeenAt: knownLastSeen(identity: identity),
                ignoredUntil: (ignoredUntil ?? 0) > now ? ignoredUntil : nil
            ))
        }

        items.sort {
            let leftSeen = $0.lastSeenAt ?? 0
            let rightSeen = $1.lastSeenAt ?? 0
            if leftSeen == rightSeen {
                return $0.extensionName.localizedCaseInsensitiveCompare($1.extensionName) == .orderedAscending
            }
            return leftSeen > rightSeen
        }

        return items
    }

    func revokeExtensionPermission(identity: String) {
        setTrustedExtension(identity: identity, trusted: false)
        clearIgnoredUntil(identity: identity)

        let bundleId = knownBundleId(identity: identity) ?? bundleIdFromIdentity(identity)
        if apps[bundleId]?.identity == identity {
            closedApp(bundleId: bundleId)
        }
    }

    @discardableResult
    func requestExtensionPermission(identity: String) -> ConnectionApprovalDecision {
        let bundleId = knownBundleId(identity: identity) ?? bundleIdFromIdentity(identity)
        let clientId = knownClientId(identity: identity) ?? clientIdFromIdentity(identity)
        let extensionName = knownExtensionName(identity: identity)
        let extensionVersion = knownExtensionVersion(identity: identity)
        let isReplacingConnection = isTrustedExtension(identity: identity)

        let decision = requestConnectionApproval(
            bundleId: bundleId,
            clientId: clientId,
            extensionName: extensionName,
            extensionVersion: extensionVersion,
            isReplacingConnection: isReplacingConnection,
            reason: "Permission requested from Settings."
        )

        switch decision {
        case .allow:
            let currentSecret = (apps[bundleId]?.identity == identity) ? apps[bundleId]?.secret : nil
            saveTrustedExtension(identity: identity, extensionName: extensionName, secret: currentSecret)
            clearIgnoredUntil(identity: identity)
        case .deny:
            setTrustedExtension(identity: identity, trusted: false)
            clearIgnoredUntil(identity: identity)
        case .ignored:
            setIgnoredUntil(identity: identity, value: Date().timeIntervalSince1970 + approvalIgnoreCooldownSeconds)
        }

        return decision
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
            rememberKnownExtension(
                identity: identity,
                bundleId: bundleId,
                clientId: clientId,
                extensionName: extensionName,
                extensionVersion: extensionVersion
            )

            if let app = app {
                if hasValidToken(secret: app.secret, token: providedToken) {
                    reply.secret = app.secret
                    reply.description = "appAlreadyConnected" // fantastic. A typo in release.
                    reply.status = "ok"

                    saveTrustedExtension(identity: identity, extensionName: extensionName, secret: app.secret)
                    clearIgnoredUntil(identity: identity)
                    markRecentlyApproved(identity: identity)
                    markInstallCompletedIfNeeded(bundleId: bundleId, extensionName: extensionName)

                    app.syncIfNeeded(force: true)
                    app.scheduleHealthCheckIfNeeded(force: true)
                    return reply
                }

                // A connection was just approved for this identity: converge the extension's
                // racing reconnects onto the existing secret instead of prompting again and
                // rotating it (which is what caused the endless "Allow" loop).
                if isTrustedExtension(identity: identity) && isRecentlyApproved(identity: identity) {
                    reply.secret = app.secret
                    reply.description = "appConnected"
                    reply.status = "ok"

                    saveTrustedExtension(identity: identity, extensionName: extensionName, secret: app.secret)
                    clearIgnoredUntil(identity: identity)
                    markRecentlyApproved(identity: identity)
                    markInstallCompletedIfNeeded(bundleId: bundleId, extensionName: extensionName)

                    app.syncIfNeeded(force: true)
                    app.scheduleHealthCheckIfNeeded(force: true)
                    return reply
                }

                if shouldDelayApprovalPrompt(identity: identity) {
                    reply.status = "error"
                    reply.description = "connectionIgnored"
                    return reply
                }

                let isMissingToken = providedToken?.isEmpty ?? true
                let decision = requestConnectionApproval(
                    bundleId: bundleId,
                    clientId: clientId,
                    extensionName: extensionName,
                    extensionVersion: extensionVersion,
                    isReplacingConnection: true,
                    reason: isMissingToken ? "Missing security token." : "Invalid security token."
                )

                switch decision {
                case .allow:
                    clearIgnoredUntil(identity: identity)
                    markRecentlyApproved(identity: identity)
                case .deny:
                    clearIgnoredUntil(identity: identity)
                    reply.status = "error"
                    reply.description = "connectionDenied"
                    return reply
                case .ignored:
                    setIgnoredUntil(identity: identity, value: Date().timeIntervalSince1970 + approvalIgnoreCooldownSeconds)
                    reply.status = "error"
                    reply.description = "connectionIgnored"
                    return reply
                }

                let newApp = AppExtension(bundleId: bundleId, identity: identity)
                apps[bundleId] = newApp
                saveTrustedExtension(identity: identity, extensionName: extensionName, secret: newApp.secret)
                markRecentlyApproved(identity: identity)
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

                let canRestoreTrustedSessionWithoutSecret = isTrusted && trustedSecret == nil
                // A racing reconnect that lands here within the grace window (identity trusted
                // and just approved) must not re-open a prompt.
                let withinApprovalGrace = isTrusted && isRecentlyApproved(identity: identity)

                if (!isTrusted || (!tokenIsValidForTrustedSecret && !canRestoreTrustedSessionWithoutSecret) || missingClientIdentity) && !withinApprovalGrace {
                    if shouldDelayApprovalPrompt(identity: identity) {
                        reply.status = "error"
                        reply.description = "connectionIgnored"
                        return reply
                    }

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

                    let decision = requestConnectionApproval(
                        bundleId: bundleId,
                        clientId: clientId,
                        extensionName: extensionName,
                        extensionVersion: extensionVersion,
                        isReplacingConnection: isTrusted,
                        reason: reason
                    )

                    switch decision {
                    case .allow:
                        clearIgnoredUntil(identity: identity)
                        markRecentlyApproved(identity: identity)
                    case .deny:
                        clearIgnoredUntil(identity: identity)
                        reply.status = "error"
                        reply.description = "connectionDenied"
                        return reply
                    case .ignored:
                        setIgnoredUntil(identity: identity, value: Date().timeIntervalSince1970 + approvalIgnoreCooldownSeconds)
                        reply.status = "error"
                        reply.description = "connectionIgnored"
                        return reply
                    }
                }

                app = AppExtension(bundleId: bundleId, identity: identity)
                apps[bundleId] = app
                saveTrustedExtension(identity: identity, extensionName: extensionName, secret: app?.secret)
                clearIgnoredUntil(identity: identity)
                markRecentlyApproved(identity: identity)
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

    private func trustIgnoreUntilKey(identity: String) -> String {
        return trustIgnoreUntilPrefix + identity
    }

    private func trustNameKey(identity: String) -> String {
        return trustNamePrefix + identity
    }

    private func trustSecretKey(identity: String) -> String {
        return trustSecretPrefix + identity
    }

    private func knownBundleKey(identity: String) -> String {
        return knownBundlePrefix + identity
    }

    private func knownClientKey(identity: String) -> String {
        return knownClientPrefix + identity
    }

    private func knownVersionKey(identity: String) -> String {
        return knownVersionPrefix + identity
    }

    private func knownNameKey(identity: String) -> String {
        return knownNamePrefix + identity
    }

    private func knownLastSeenKey(identity: String) -> String {
        return knownLastSeenPrefix + identity
    }

    private func knownExtensionIdentities() -> [String] {
        return UserDefaults.standard.stringArray(forKey: knownExtensionsKey) ?? []
    }

    private func knownBundleId(identity: String) -> String? {
        return UserDefaults.standard.object(forKey: knownBundleKey(identity: identity)) as? String
    }

    private func knownClientId(identity: String) -> String? {
        return UserDefaults.standard.object(forKey: knownClientKey(identity: identity)) as? String
    }

    private func knownExtensionVersion(identity: String) -> String? {
        return UserDefaults.standard.object(forKey: knownVersionKey(identity: identity)) as? String
    }

    private func knownExtensionName(identity: String) -> String? {
        let defaults = UserDefaults.standard
        if let name = defaults.object(forKey: knownNameKey(identity: identity)) as? String, !name.isEmpty {
            return name
        }
        if let trustedName = defaults.object(forKey: trustNameKey(identity: identity)) as? String, !trustedName.isEmpty {
            return trustedName
        }
        return nil
    }

    private func knownLastSeen(identity: String) -> TimeInterval? {
        guard UserDefaults.standard.object(forKey: knownLastSeenKey(identity: identity)) != nil else {
            return nil
        }
        return UserDefaults.standard.double(forKey: knownLastSeenKey(identity: identity))
    }

    private func bundleIdFromIdentity(_ identity: String) -> String {
        if let hashIndex = identity.firstIndex(of: "#") {
            return String(identity[..<hashIndex])
        }
        return identity
    }

    private func clientIdFromIdentity(_ identity: String) -> String? {
        guard let hashIndex = identity.firstIndex(of: "#") else {
            return nil
        }

        let nextIndex = identity.index(after: hashIndex)
        let value = String(identity[nextIndex...])
        return value.isEmpty ? nil : value
    }

    private func rememberKnownExtension(identity: String, bundleId: String, clientId: String?, extensionName: String?, extensionVersion: String?) {
        let defaults = UserDefaults.standard
        var identities = knownExtensionIdentities()
        if !identities.contains(identity) {
            identities.append(identity)
            defaults.set(identities, forKey: knownExtensionsKey)
        }

        defaults.set(bundleId, forKey: knownBundleKey(identity: identity))
        if let clientId = normalizedClientId(clientId) {
            defaults.set(clientId, forKey: knownClientKey(identity: identity))
        }

        if let extensionVersion = extensionVersion, !extensionVersion.isEmpty {
            defaults.set(extensionVersion, forKey: knownVersionKey(identity: identity))
        }

        if let extensionName = extensionName?.trimmingCharacters(in: .whitespacesAndNewlines), !extensionName.isEmpty {
            defaults.set(extensionName, forKey: knownNameKey(identity: identity))
            defaults.set(extensionName, forKey: trustNameKey(identity: identity))
        }

        defaults.set(Date().timeIntervalSince1970, forKey: knownLastSeenKey(identity: identity))
    }

    private func isTrustedExtension(identity: String) -> Bool {
        return UserDefaults.standard.bool(forKey: trustKey(identity: identity))
    }

    private func setTrustedExtension(identity: String, trusted: Bool) {
        let defaults = UserDefaults.standard
        if trusted {
            defaults.set(true, forKey: trustKey(identity: identity))
        } else {
            defaults.removeObject(forKey: trustKey(identity: identity))
            defaults.removeObject(forKey: trustSecretKey(identity: identity))
        }
    }

    private func getTrustedSecret(identity: String) -> String? {
        return UserDefaults.standard.object(forKey: trustSecretKey(identity: identity)) as? String
    }

    private func setIgnoredUntil(identity: String, value: TimeInterval) {
        UserDefaults.standard.set(value, forKey: trustIgnoreUntilKey(identity: identity))
    }

    private func clearIgnoredUntil(identity: String) {
        UserDefaults.standard.removeObject(forKey: trustIgnoreUntilKey(identity: identity))
    }

    private func getIgnoredUntil(identity: String) -> TimeInterval? {
        guard UserDefaults.standard.object(forKey: trustIgnoreUntilKey(identity: identity)) != nil else {
            return nil
        }
        return UserDefaults.standard.double(forKey: trustIgnoreUntilKey(identity: identity))
    }

    // Only ever touched from httpRequest / requestExtensionPermission, both of which run
    // serialized on the main thread (see SimpleHTTPServer.handleRequest), so no locking needed.
    private func markRecentlyApproved(identity: String) {
        recentlyApprovedUntil[identity] = Date().timeIntervalSince1970 + approvalGraceSeconds
    }

    private func isRecentlyApproved(identity: String) -> Bool {
        guard let until = recentlyApprovedUntil[identity] else {
            return false
        }

        if until > Date().timeIntervalSince1970 {
            return true
        }

        recentlyApprovedUntil.removeValue(forKey: identity)
        return false
    }

    private func shouldDelayApprovalPrompt(identity: String) -> Bool {
        guard let ignoredUntil = getIgnoredUntil(identity: identity) else {
            return false
        }

        if ignoredUntil > Date().timeIntervalSince1970 {
            return true
        }

        clearIgnoredUntil(identity: identity)
        return false
    }

    private func saveTrustedExtension(identity: String, extensionName: String?, secret: String?) {
        let user = UserDefaults.standard
        var identities = knownExtensionIdentities()
        if !identities.contains(identity) {
            identities.append(identity)
            user.set(identities, forKey: knownExtensionsKey)
        }

        setTrustedExtension(identity: identity, trusted: true)
        if let extensionName = extensionName, !extensionName.isEmpty {
            user.set(extensionName, forKey: trustNameKey(identity: identity))
            user.set(extensionName, forKey: knownNameKey(identity: identity))
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

    private func requestConnectionApproval(bundleId: String, clientId: String?, extensionName: String?, extensionVersion: String?, isReplacingConnection: Bool, reason: String) -> ConnectionApprovalDecision {
        let action: () -> ConnectionApprovalDecision = {
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
            informativeText += "\nThis confirmation expires in \(Int(self.approvalTimeoutSeconds)) seconds."
            alert.informativeText = informativeText
            alert.addButton(withTitle: "Allow")
            alert.addButton(withTitle: "Deny")

            let timeoutWork = DispatchWorkItem {
                NSApp.abortModal()
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + self.approvalTimeoutSeconds, execute: timeoutWork)

            NSApp.activate(ignoringOtherApps: true)
            let response = alert.runModal()
            timeoutWork.cancel()
            alert.window.orderOut(nil)

            switch response {
            case .alertFirstButtonReturn:
                return .allow
            case .alertSecondButtonReturn:
                return .deny
            default:
                return .ignored
            }
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
    let identity : String
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
    
    init(bundleId : String, identity: String){
        self.bundleId = bundleId
        self.identity = identity
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
