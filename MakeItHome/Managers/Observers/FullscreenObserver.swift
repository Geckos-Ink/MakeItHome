//
//  FullscreenObserver.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 22/04/25.
//  Copyright © 2025 geckos.ink. All rights reserved.
//


import Cocoa

class FullscreenObserver: NSObject {
    private var observers: [NSObjectProtocol] = []
    
    public var inFullscreenMode = false
    
    func startObserving() {
        // Osserva quando una finestra inizia la transizione verso fullscreen
        let willEnterFullscreen = NotificationCenter.default.addObserver(
            forName: NSWindow.willEnterFullScreenNotification,
            object: nil,
            queue: .main
        ) { [weak self] notification in
            if let window = notification.object as? NSWindow {
                //self?.sendNotification(title: "Fullscreen mode", body: "\(window.title) is entering in fullscreen mode")
                print("\(window.title) is entering in fullscreen mode")
            }
            
            self?.inFullscreenMode = true
        }
        
        let willExitFullscreen = NotificationCenter.default.addObserver(
            forName: NSWindow.willExitFullScreenNotification,
            object: nil,
            queue: .main
        ) { [weak self] notification in
            if let window = notification.object as? NSWindow {
                //self?.sendNotification(title: "Fullscreen mode", body: "\(window.title) is exiting in fullscreen mode")
                print("\(window.title) is exiting in fullscreen mode")
            }
            
            self?.inFullscreenMode = true
        }
        
        observers.append(willEnterFullscreen)
    }
    
    func stopObserving() {
        // Rimuovi tutti gli observer quando non sono più necessari
        observers.forEach { NotificationCenter.default.removeObserver($0) }
        observers.removeAll()
    }
    
    private func sendNotification(title: String, body: String) {
        let notification = NSUserNotification()
        notification.title = title
        notification.informativeText = body
        notification.soundName = NSUserNotificationDefaultSoundName
        
        NSUserNotificationCenter.default.deliver(notification)
    }
    
    deinit {
        stopObserving()
    }
}

