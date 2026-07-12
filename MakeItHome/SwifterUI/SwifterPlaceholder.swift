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
    public var id : Int = -1
    
    init(){
        // Keep a real 1×1 WindowServer surface so the holder remains discoverable, but do not
        // give it utility/titled chrome: a focused zero-sized titled window is rendered by AppKit
        // as the small square users could see after changing Spaces.
        super.init(contentRect: NSRect(x: 100, y: 100, width: 1, height: 1), styleMask: [.borderless], backing: .buffered, defer: true)
        
        /// Allow the panel to be on top of other windows
        level = .normal
        
        //isFloatingPanel = true
 
        /// Allow the pannel to be overlaid in a fullscreen space
        collectionBehavior.insert(.fullScreenAuxiliary)
 
        /// The WindowServer name is how Displays.swift identifies the current Space holder.
        title = "makeithome"
 
        /// Since there is no title bar make the window moveable by dragging on the background
        isMovableByWindowBackground = false
        
        /// Hide when unfocused
        hidesOnDeactivate = false
 
        hasShadow = false
        ignoresMouseEvents = true
        animationBehavior = .none
                
        /// Set the content view.
        /// The safe area is ignored because the title bar still interferes with the geometry
        let view = EmptyView()
        
        contentView = NSHostingView(rootView: view
            .padding(10)
            .ignoresSafeArea()
            //.environment(\.floatingPanel, self)
        )

        isOpaque = false
        
        backgroundColor = .clear
        
        center()
    }
    
    /// `canBecomeKey` and `canBecomeMain` are both required so that text inputs inside the panel can receive focus
    override public var canBecomeKey: Bool {
        return true
    }
     
    override public var canBecomeMain: Bool {
        return true
    }
    
    public var closed = false
    
    /// Close automatically when out of focus, e.g. outside click
    override public func resignMain() {
        DispatchQueue.main.async {
            super.resignMain()
            //close()
        }
    }
     
    /// Close and toggle presentation, so that it matches the current state of the panel
    override public func close() {
        DispatchQueue.main.async {
            if !self.closed && self.isVisible && !(self.contentView?.isInFullScreenMode ?? false) {
                super.close()
                self.closed = true
            }
        }
    }
    
    func stillValid() -> Bool {
        return self.isVisible && !(self.contentView?.isInFullScreenMode ?? false)
    }
    
    func show() {
        if !self.closed {
            DispatchQueue.main.async {
                self.orderFront(nil)
            }
        }
    }
    
    func activate(){
        if !self.closed {
            DispatchQueue.main.async {
                NSApplication.shared.activate(ignoringOtherApps: true)
                self.makeKeyAndOrderFront(self)
            }
        }
    }

    /// A placeholder may briefly become key solely to ask macOS to reveal its Space. Once the
    /// destination application is activated it must remain as an unfocused, invisible anchor.
    func releaseFocus() {
        DispatchQueue.main.async {
            if self.isKeyWindow {
                self.resignKey()
            }
            if self.isMainWindow {
                self.resignMain()
            }
        }
    }
}

