//
//  AppExtension.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 31/05/24.
//  Copyright © 2024 geckos.ink. All rights reserved.
//

import Foundation

class AppExtensionManager {
    var apps : [AppExtension] = []
    
    func httpRequest(url: String, dataReq: String?){
        
    }
}

class AppExtension {
    let app : Display.AppWindows
    
    init(app : Display.AppWindows){
        self.app = app
    }
}
