//
//  LoginItems.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 22/11/22.
//

import Foundation
import AppKit

public class LoginItems {
    // https://gist.github.com/kaloprominat/6111584
    
    static func executeAppleScript(script: String){
        
        if(false) {
            
            Task {                
                if(false){
                    let res = try? shell("osascript -e '" + script + "'")
                    print("AppleScript shell res is ", res, "\nScript:", script)
                }
                else{
                    let myAppleScript = script
                    var error: NSDictionary?
                    if let scriptObject = NSAppleScript(source: myAppleScript) {
                        let output: NSAppleEventDescriptor = scriptObject.executeAndReturnError(&error)
                        
                        if (error != nil) {
                            print("AppleScript error: \(error)", "\nscript:", script)
                        }
                        else {
                            print("executed applescript",script,"with result:",output.stringValue)
                        }
                    }
                }
            }
            
        }
    }
        
    @discardableResult // Add to suppress warnings when you don't want/need a result
    static func shell(_ command: String) throws -> String {
        let task = Process()
        let pipe = Pipe()
        
        task.standardOutput = pipe
        task.standardError = pipe
        task.arguments = ["-c", command]
        task.executableURL = URL(fileURLWithPath: "/bin/zsh") //<--updated
        task.standardInput = nil

        try task.run() //<--updated
        
        let data = pipe.fileHandleForReading.readDataToEndOfFile()
        let output = String(data: data, encoding: .utf8)!
        
        return output
    }
    
    static func appPath() -> String {
        var cfurl = NSURL.fileURL(withPath: Bundle.main.bundlePath) as CFURL;
        var res = CFURLGetString(cfurl) as String
        return String(res.suffix(from: res.index(res.startIndex, offsetBy: 7)).prefix(res.count - 8))
    }
    
    public static func AddToLogin() -> String{
        let ap = appPath()
        let script = "tell application \"System Events\" to make login item at end with properties {name: \"MakeItHome\",path:\"" + ap + "\", hidden:false}"
        
        executeAppleScript(script: script)
        
        return script
    }
    
    public static func RemoveFromLogin(){
        executeAppleScript(script: "tell application \"System Events\" to delete login item \"MakeItHome\"")
    }
    
    public static func openTerminal(){
        guard let appUrl = NSWorkspace.shared.urlForApplication(withBundleIdentifier: "com.apple.Terminal")
        else { return }
        
        NSWorkspace.shared.open([], withApplicationAt: appUrl, configuration: NSWorkspace.OpenConfiguration() )
    }
}
