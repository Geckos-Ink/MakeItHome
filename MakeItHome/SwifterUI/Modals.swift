//
//  Modals.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 05/06/24.
//  Copyright © 2024 geckos.ink. All rights reserved.
//

import Foundation
import Cocoa

// Function to display the alert
func showStartAtLoginAlert() {
    // Create an instance of NSAlert
    let alert = NSAlert()
    
    // Set the message text and informative text
    alert.messageText = "Do you want to start MakeItHome at login?"
    
    // Add buttons to the alert
    alert.addButton(withTitle: "Yes")
    alert.addButton(withTitle: "No")
    
    // Set the alert style
    alert.alertStyle = .informational
    
    // Set the default button (Yes) to be the first button, and the other button to be the second button
    if let yesButton = alert.buttons.first {
        yesButton.keyEquivalent = "\r" // Return key triggers this button
        yesButton.hasDestructiveAction = false // Make sure it doesn't get the red destructive style
    }
    
    if let noButton = alert.buttons.last {
        noButton.keyEquivalent = "\u{1b}" // Escape key triggers this button
        noButton.hasDestructiveAction = false // Ensure it doesn't get the red destructive style
    }
    
    // Show the alert and handle the response
    let response = alert.runModal()
    switch response {
    case .alertFirstButtonReturn:
        print("User chose Yes")
        Static.OpenAtStartup = true
        
    case .alertSecondButtonReturn:
        print("User chose No")
        Static.OpenAtStartup = false
        
    default:
        break
    }
}
