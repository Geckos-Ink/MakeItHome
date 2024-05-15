//
//  SwifterPlaceholder.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 05/12/22.
//

import Foundation
import Cocoa
import SwiftUI

public class SwifterPlaceholder : NSWindow {
    
    public var numWindows = -1
    public var id = -1
    
    init(){
        super.init(contentRect: NSRect(x: 100, y: 100, width: 0, height: 0), styleMask: [.utilityWindow, .closable, .titled], backing: .buffered, defer: true)
        
        /// Allow the panel to be on top of other windows
        level = .normal
        
        //isFloatingPanel = true
 
        /// Allow the pannel to be overlaid in a fullscreen space
        collectionBehavior.insert(.fullScreenAuxiliary)
 
        /// Don't show a window title, even if it's set
        title = "makeithome"
        titleVisibility = .hidden
        titlebarAppearsTransparent = true
 
        /// Since there is no title bar make the window moveable by dragging on the background
        isMovableByWindowBackground = false
        
        /// Hide when unfocused
        hidesOnDeactivate = false
 
        /// Hide all traffic light buttons
        standardWindowButton(.closeButton)?.isHidden = true
        standardWindowButton(.miniaturizeButton)?.isHidden = true
        standardWindowButton(.zoomButton)?.isHidden = true
 
        /// Sets animations accordingly
        animationBehavior = .utilityWindow
                
        /// Set the content view.
        /// The safe area is ignored because the title bar still interferes with the geometry
        let view = EmptyView()
        
        contentView = NSHostingView(rootView: view
            .padding(10)
            .ignoresSafeArea()
            //.environment(\.floatingPanel, self)
        )

        isOpaque = false
        
        let color = CIColor(color: NSColor.windowBackgroundColor)
        backgroundColor = NSColor(red: color!.red, green: color!.green, blue: color!.blue, alpha: 0)
        
        center()
    }
    
    /// `canBecomeKey` and `canBecomeMain` are both required so that text inputs inside the panel can receive focus
    override public var canBecomeKey: Bool {
        return true
    }
     
    override public var canBecomeMain: Bool {
        return true
    }
    
    /// Close automatically when out of focus, e.g. outside click
    override public func resignMain() {
        super.resignMain()
        //close()
    }
     
    /// Close and toggle presentation, so that it matches the current state of the panel
    override public func close() {
        super.close()
    }
    
    func show() {
        self.orderFront(nil)
    }
    
    func activate(){
        NSApplication.shared.activate(ignoringOtherApps: true)
        self.makeKeyAndOrderFront(self)
    }
}


