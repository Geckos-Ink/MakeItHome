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
        
        if req.hasPrefix("/connect"){
            if query != nil {
                if query!["bundleId"] == nil {
                    reply.status = "error"
                    return reply
                }
                
                let bundleId = query!["bundleId"]!
                print("requested connection by bundleId", bundleId)
                
                var app = apps[bundleId]
                
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
            else {
                reply.status = "error"
                return reply
            }
        }
        
        reply.status = "nothing"
        return reply
    }
}

struct AppExtensionMsg : Codable {
    var status: String?
    var description: String?
}

class AppExtension {
    let bundleId : String
    var app : Display.AppWindows?
    
    init(bundleId : String){
        self.bundleId = bundleId
    }
    
    func link(app : Display.AppWindows){
        self.app = app
    }
}
