//
//  GeneralFuncs.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 18/11/22.
//

import Foundation
import IOKit.ps
import AppKit

public class GeneralFuncs {
    public static func ComputerIsConnectedToAdapter() -> Bool{
        //TODO: Currently disabled for debug purposes
        return true
        
        #if arch(arm64)
        let isPowerAdapterConnected = IOPSCopyExternalPowerAdapterDetails()?.takeRetainedValue() != nil
        return isPowerAdapterConnected
        
        #else
        return true
        #endif
    }
    
    func warnAboutInputMonitoringPermission() {
        // Permission denied
        let alert = NSAlert()
        alert.messageText = "Input Monitoring Permission Required"
        alert.informativeText = "This app requires Input Monitoring permission to function properly. Please enable it in System Preferences -> Security & Privacy -> Input Monitoring."
        alert.addButton(withTitle: "OK")
        alert.runModal()
    }
}

func calculateDistance(point1: NSPoint, point2: NSPoint) -> CGFloat {
    let distance = hypot(point2.x - point1.x, point2.y - point1.y)
    return distance
}

func delay(ms: Int, closure: @escaping () -> Void) {
    DispatchQueue.global().asyncAfter(deadline: .now() + .milliseconds(ms)) {
        DispatchQueue.main.async {
            closure()
        }
    }
}

func performHaptic(){
    print("haptic")
    
    for var i in 0...4{
        delay(ms: 5*i){
            NSHapticFeedbackManager.defaultPerformer.perform(
                NSHapticFeedbackManager.FeedbackPattern.generic,
                performanceTime: NSHapticFeedbackManager.PerformanceTime.now
            )
        }
    }
}

func generateRandomString(length: Int) -> String {
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let charactersArray = Array(characters)
    var randomString = ""

    for _ in 0..<length {
        let randomIndex = Int.random(in: 0..<charactersArray.count)
        randomString.append(charactersArray[randomIndex])
    }

    return randomString
}

final class PermissionsService: ObservableObject {
    // Store the active trust state of the app.
    @Published var isTrusted: Bool = AXIsProcessTrusted()

    // Poll the accessibility state every 1 second to check
    //  and update the trust status.
    func pollAccessibilityPrivileges() {
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.0) {
            self.isTrusted = AXIsProcessTrusted()

            if !self.isTrusted {
                self.pollAccessibilityPrivileges()
            }
        }
    }

    // Request accessibility permissions, this should prompt
    //  macOS to open and present the required dialogue open
    //  to the correct page for the user to just hit the add
    //  button.
    static func acquireAccessibilityPrivileges() {
        let options: NSDictionary = [kAXTrustedCheckOptionPrompt.takeRetainedValue() as NSString: true]
        let enabled = AXIsProcessTrustedWithOptions(options)
    }
    
    static func checkAccessibilityPrivileges(){
        if !AXIsProcessTrustedWithOptions([kAXTrustedCheckOptionPrompt.takeRetainedValue() as NSString: true] as CFDictionary) {
            // Require accessibility permissions
            PermissionsService.acquireAccessibilityPrivileges()
        }
    }
}
