//
//  SwifterWindow.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 04/11/22.
//

import Foundation
import Cocoa
import SwiftUI

//WARNING: experimental
public class SwifterWindow<Content: View> : NSWindow {

    init(view: Content){
        super.init(contentRect: NSRect(x: 100, y: 100, width: 200, height: 200), styleMask: [.closable, .titled, .utilityWindow], backing: .buffered, defer: true)
         
        /// Allow the panel to be on top of other windows
        level = .modalPanel
 
        /// Allow the pannel to be overlaid in a fullscreen space
        //collectionBehavior.insert(.fullScreenAuxiliary)
 
        /// Don't show a window title, even if it's set
        title = "MakeItHome"
        titleVisibility = .visible
        titlebarAppearsTransparent = false
 
        /// Since there is no title bar make the window moveable by dragging on the background
        isMovableByWindowBackground = true
 
        /// Hide when unfocused
        hidesOnDeactivate = false
 
        /// Hide all traffic light buttons
        standardWindowButton(.closeButton)?.isHidden = false
        standardWindowButton(.miniaturizeButton)?.isHidden = true
        standardWindowButton(.zoomButton)?.isHidden = true
 
        /// Sets animations accordingly
        animationBehavior = .alertPanel

        /// Set the content view.
        /// The safe area is ignored because the title bar still interferes with the geometry
        contentView = NSHostingView(rootView: view
            .padding(10)
            .cornerRadius(20)
            //.frame(width:100, height: 100, alignment: .center)
        )
        
        isOpaque = true
        center()
        
        /// Set the content view.
        /// The safe area is ignored because the title bar still interferes with the geometry
        contentView = NSHostingView(rootView: view
            .padding(10)
            .cornerRadius(10)
            .ignoresSafeArea()
            .background(VisualEffectBackground(material: NSVisualEffectView.Material.hudWindow, blendingMode: .behindWindow, emphasized: true))
        )
        
        isReleasedWhenClosed = false

        //setFrameAutosaveName("Main Window")
        //autorecalculatesKeyViewLoop = true
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
        self.makeKey()
    }
}

