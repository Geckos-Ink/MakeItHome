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
        apps.removeValue(forKey: bundleId)
    }
    
    func httpRequest(url: String, dataReq: String?) -> AppExtensionMsg {
        var reply = AppExtensionMsg()
        
        let query = parseURLQueryItems(from: url)
        var req = url.replacingOccurrences(of: "/appExtension", with: "")
        
        if query == nil {
            reply.status = "error"
            return reply
        }
        
        if query!["bundleId"] == nil {
            reply.status = "error"
            return reply
        }
        
        let bundleId = query!["bundleId"]!
        print("AppExtension request from bundleId", bundleId)
        
        var app = apps[bundleId]
        
        if req.hasPrefix("/connect"){
            if app == nil {
                app = AppExtension(bundleId: bundleId)
                apps[bundleId] = app
                
                reply.secret = app?.secret
                reply.description = "appConnected"
            }
            else {
                reply.description = "appAlredyConnected"
            }
            
            reply.status = "ok"
            return reply
        }
        else {
            if app == nil {
                reply.status = "error"
                reply.description = "appNotConnected"
                return reply
            }
            
            let secret = query!["secret"]
            
            if secret == nil || secret != app?.secret {
                reply.status = "error"
                reply.description = "invalidSecret"
                return reply
            }
        }
        
        if req.hasPrefix("/setHtmlContent"){
            print("set html content")

            if dataReq == nil {
                reply.status = "error"
                reply.description = "POST body missing"
                return reply
            }
            
            var body = jsonStringToDictionary(jsonString: dataReq!)
            
            if body == nil {
                reply.status = "error"
                reply.description = "Invalid body JSON"
                return reply
            }
            
            let content = body!["content"] as? String
            
            if content == nil {
                reply.status = "error"
                reply.description = "Missing 'content' in body"
                return reply
            }
             
            app?.setHTMLContent(content: content!)
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
                reply.description = "Invalid body JSON"
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
            var isShowing = app!.imShowing()
            
            reply.appExtensionIsShowing = isShowing
            reply.statusMessages = app!.statusMessages
            
            reply.status = "ok"
            
            app!.hasStatusUpdate = false
            app!.statusMessages = []
            
            return reply
        }
        
        if req.hasPrefix("/waitForStatus"){
            ///#TODO
            let wasShowing = app!.imShowing()
            var isShowing = app!.imShowing()
            
            while wasShowing == isShowing && !app!.hasStatusUpdate{
                isShowing = app!.imShowing()
            }
            
            reply.appExtensionIsShowing = isShowing
            reply.statusMessages = app!.statusMessages
            
            reply.status = "ok"
            
            app!.hasStatusUpdate = false
            app!.statusMessages = []
            
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
}

class AppExtension {
    let bundleId : String
    let secret : String
    var app : Display.AppWindows?
    var htmlContent : String = ""
    
    var hasStatusUpdate : Bool = false
    var statusMessages : [String] = []
    
    var jsMessages : [String] = []
    
    init(bundleId : String){
        self.bundleId = bundleId
        self.secret = generateRandomString(length: 64)
        
        Static.AppExtensionWebView?.genericEvaluateJavascript(script: "createAppExtension('\(bundleId)');")
    }
    
    func setHTMLContent(content: String){
        htmlContent = content
        
        var escapedContent = content.replacingOccurrences(of: "'", with: "\\'")
        Static.AppExtensionWebView?.genericEvaluateJavascript(script: "setContent('\(bundleId)', '\(escapedContent)');")
    }
    
    var sendJsMessageWhenShowing = false
    func sendJSMessage(msg: String){
        if !sendJsMessageWhenShowing || self.imShowing(){
            flushJSMessage()
            Static.AppExtensionWebView?.genericEvaluateJavascript(script: msg)
        }
        else {
            jsMessages.append(msg)            
        }
    }
    
    func flushJSMessage(){
        if jsMessages.count == 0 {
            return
        }
        
        for msg in jsMessages {
            Static.AppExtensionWebView?.genericEvaluateJavascript(script: msg)
        }
        
        jsMessages = []
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
}
