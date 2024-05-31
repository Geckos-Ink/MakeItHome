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
                
                reply.description = "appConnected"
            }
            else {
                reply.description = "appAlredyConnected"
            }
            
            reply.status = "ok"
            return reply
        }
        
        if req.hasPrefix("/setHtmlContent"){
            print("set html content")
            
            if app == nil {
                reply.status = "error"
                reply.description = "App not connected"
                return reply
            }
            
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
             
            app?.htmlContent = content!
        }
        
        if req.hasPrefix("/sendJSMessage"){
            if app == nil {
                reply.status = "error"
                reply.description = "App not connected"
                return reply
            }
            
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
            
            Static.AppExtensionWebView?.genericEvaluateJavascript(script: jsMessage!)
        }
        
        if req.hasPrefix("/checkStatus"){
            var isShowing = false
            if Static.OnAppExtensionZone && Static.AppExtensionWebView?.curApp?.bundleId == app?.app?.bundleId {
                isShowing = true
            }
            reply.appExtensionIsShowing = isShowing
            
            reply.status = "ok"
            app!.hasStatusUpdate = false
        }
        
        if req.hasPrefix("/waitForStatus"){
            ///#TODO
            var isShowing = false
            
            isShowing = false
            if Static.OnAppExtensionZone && Static.AppExtensionWebView?.curApp?.bundleId == app?.app?.bundleId {
                isShowing = true
            }
            
            while !isShowing && !app!.hasStatusUpdate{
                isShowing = false
                if Static.OnAppExtensionZone && Static.AppExtensionWebView?.curApp?.bundleId == app?.app?.bundleId {
                    isShowing = true
                }
            }
            
            reply.appExtensionIsShowing = isShowing
            
            reply.status = "ok"
            app!.hasStatusUpdate = false
        }
        
        reply.status = "nothing"
        return reply
    }
}

struct AppExtensionMsg : Codable {
    var status: String?
    var description: String?
    
    var appExtensionIsShowing : Bool?
}

class AppExtension {
    let bundleId : String
    var app : Display.AppWindows?
    var htmlContent : String = ""
    
    var hasStatusUpdate : Bool = false
    
    init(bundleId : String){
        self.bundleId = bundleId
    }
    
    func link(app : Display.AppWindows){
        self.app = app
    }
}
