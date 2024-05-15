//
//  SwifterWindow.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 04/11/22.
//

import Foundation
import Cocoa
import SwiftUI

public struct VisualEffectBackground: NSViewRepresentable {
    private let material: NSVisualEffectView.Material
    private let blendingMode: NSVisualEffectView.BlendingMode
    private let isEmphasized: Bool
    
    public init(
        material: NSVisualEffectView.Material,
        blendingMode: NSVisualEffectView.BlendingMode,
        emphasized: Bool) {
        self.material = material
        self.blendingMode = blendingMode
        self.isEmphasized = emphasized
    }
    
    public func makeNSView(context: Context) -> NSVisualEffectView {
        let view = NSVisualEffectView()
        
        // Not certain how necessary this is
        view.autoresizingMask = [.width, .height]
        
        return view
    }
    
    public func updateNSView(_ nsView: NSVisualEffectView, context: Context) {
        nsView.material = material
        nsView.blendingMode = blendingMode
        nsView.isEmphasized = isEmphasized
    }
}

public class SwifterPanel<Content: View> : NSPanel {

    init(view: Content){
        super.init(contentRect: NSRect(x: 100, y: 100, width: 200, height: 200), styleMask: [.utilityWindow, .closable, .titled], backing: .buffered, defer: true)
         
        /// Allow the panel to be on top of other windows
        level = .floating
        
        isFloatingPanel = true
 
        /// Allow the pannel to be overlaid in a fullscreen space
        collectionBehavior.insert(.fullScreenAuxiliary)
 
        /// Don't show a window title, even if it's set
        title = "MakeItHome"
        titleVisibility = .visible
        titlebarAppearsTransparent = false
 
        /// Since there is no title bar make the window moveable by dragging on the background
        isMovableByWindowBackground = false
 
        /// Hide when unfocused
        hidesOnDeactivate = true
 
        /// Hide all traffic light buttons
        standardWindowButton(.closeButton)?.isHidden = false
        standardWindowButton(.miniaturizeButton)?.isHidden = true
        standardWindowButton(.zoomButton)?.isHidden = true
 
        /// Sets animations accordingly
        animationBehavior = .utilityWindow
                
        /// Set the content view.
        /// The safe area is ignored because the title bar still interferes with the geometry
        contentView = NSHostingView(rootView: view
            .padding(10)
            .cornerRadius(10)
            .ignoresSafeArea()
            .environment(\.floatingPanel, self)
            .background(VisualEffectBackground(material: NSVisualEffectView.Material.hudWindow, blendingMode: .behindWindow, emphasized: true))
        )

        isOpaque = false
        
        let color = CIColor(color: NSColor.windowBackgroundColor)
        backgroundColor = NSColor(red: color!.red, green: color!.green, blue: color!.blue, alpha: 0.85)
        
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
        close()
    }
     
    /// Close and toggle presentation, so that it matches the current state of the panel
    override public func close() {
        super.close()
    }
    
    func show(originOnClick: Bool = false) {        
        if(originOnClick){
            ///# Set menu below mouseclick
            var origin = NSEvent.mouseLocation
            origin.x -= Static.MenuBarPopupWidth / 2
            self.setFrameOrigin(origin)
        }
        
        NSApplication.shared.activate(ignoringOtherApps: true)
        self.orderFront(nil)
        self.makeKey()
        
    }
}

