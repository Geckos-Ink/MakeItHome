//
//  AppleEvents.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 13/01/24.
//  Copyright © 2024 geckos.ink. All rights reserved.
//

import Foundation
import AppKit

// Currently UNUSED class
// Better to not use AppleScript

class MyAppleEvents {
    
    static func requestAppleEventsPermission() {
            let scriptSource = """
                tell application "Finder"
                    count windows
                end tell
            """

            var error: NSDictionary?
            if let script = NSAppleScript(source: scriptSource) {
                script.executeAndReturnError(&error)
                if let error = error {
                    print("AppleScript Error: \(error)")
                }
            }
        }
    
    static func requestPermission(){
        DispatchQueue.main.async {
            if Static.curRequestAutomationPermission == nil {
                
                let swifterWin = SwifterWindow<RequestAutomationPermissions>(view: RequestAutomationPermissions())
                Static.curRequestAutomationPermission = swifterWin
                
                swifterWin.show()
                
                NotificationCenter.default.addObserver(forName: NSWindow.willCloseNotification, object: swifterWin, queue: .main) { [weak swifterWin] _ in
                    Static.curRequestAutomationPermission = nil
                }
            }
        }
    }
    
    static func getCurrentWallpaperURL() -> URL? {
        let script = """
                tell application "System Events"
                    tell every desktop
                        get picture
                    end tell
                end tell
                """
        
        var error: NSDictionary?
        if let scriptObject = NSAppleScript(source: script) {
            
            let output: NSAppleEventDescriptor? = scriptObject.executeAndReturnError(&error)
            
            if error != nil {
                print("Error: \(error)")
                requestPermission()
                return nil
            }
            
            let wallpaperPath = output!.stringValue
            return URL(fileURLWithPath: wallpaperPath ?? "")
        }
        return nil
    }
    
}
