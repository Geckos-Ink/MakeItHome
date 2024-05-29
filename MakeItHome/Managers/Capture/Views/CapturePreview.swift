//
//  ContentView.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 30/09/22.
//

import SwiftUI
//import MetalKit
import Foundation
import SceneKit

import OrderedCollections

@available(macOS 12.3, *) public struct CapturePreview: NSViewRepresentable {
    // A layer that renders the video contents.
    @State var contentLayer : CALayer? = nil
    internal var screenRecorder : ScreenRecorder
    public let device = MTLCreateSystemDefaultDevice()

    public let captureView : CaptureView
    
    public var view : ContentView?
    
    init(screenRecorder: ScreenRecorder) {
        self.screenRecorder = screenRecorder        
        contentLayer = CALayer()
        
        captureView = CaptureView()
        Static.captureView = captureView
        
        captureView.capturePreview = self
    }
    
    @State var curDisplay : Display?
    func currentDisplay(display: Display){
        self.curDisplay = display
        self.captureView.curDisplay = display
        
        self.aspectRatio(display.frame.size, contentMode: .fit)
        
        print("CaptureMetalPreview: current display updated")
        DispatchQueue.main.async {
            contentLayer = CALayer()
            contentLayer!.contentsGravity = .resizeAspect
            contentLayer!.frame = NSRect(x: 0, y: 0, width: display.frame.width*display.scale, height: display.frame.height*display.scale)
            
            captureView.frame = display.sizeFrame
            
            captureView.prepareScene()
            captureView.setLayer(layer: contentLayer!)
            
            print("display setted")
        }
    }
    
    //MARK: onMouseUpdate
    func onMouseShouldUpdate(display: Display){
        captureView.mouseMove(display: display)
    }
    
    func forgiveAndForget(){
        captureView.forget()
    }
        
    class Store {
        public var lastSide = -1
        public var lastAboveBy : CGFloat = 0
    }
    
    private var store = Store()
    
    //TODO: remove display when you're ready
    func setCurrentAbove(side: Int, aboveBy: CGFloat, display: Display){
        
        /*if(store.lastSide != -1 && store.lastSide != side){
         setCurrentAbove(side: store.lastSide, aboveBy: 0)
         }*/
        
        if store.lastSide == side && aboveBy == store.lastAboveBy {
            return;
        }
                
        store.lastSide = side
        
        let closing = store.lastAboveBy > aboveBy
        store.lastAboveBy = aboveBy
        
        //print("setCurrentAbove", side, aboveBy)
        
        let sideVertical = side < 2
        let sideSign = side % 2
        
        let invert = sideSign == 1
        
        var moveBy = captureView.pixelsToScene(pixels: aboveBy, vertical: sideVertical)
        if(invert){
            moveBy *= -1
        }
        
        if(sideVertical){
            self.captureView.pointOfView?.position.x = -moveBy
            self.captureView.pointOfView?.position.y = 0
        }
        else{
            self.captureView.pointOfView?.position.y = -moveBy
            self.captureView.pointOfView?.position.x = 0
        }
        
        if(aboveBy == 0){
            self.captureView.stopRendering()
        }
        else {
            self.captureView.restartRendering()
        }
        
        if(side == 3){
            DispatchQueue.main.async {
                
                /*if(aboveBy == 0){ // restart rendering only when effectively in over screen (moved directly in Display class)
                    Static.TopBarWebView?.stopRendering()
                }
                else {
                    Static.TopBarWebView?.restartRendering()
                }*/
                
                let offYMul : CGFloat = 1
                
                let abpDiff = display.aboveByPixels-display.prevAboveByPixels
                if abpDiff < 0 && closing{
                    self.view!.vars.overlayOpacity = (aboveBy / Static.OverscreenSize) * 0.8
                }
                else {
                    self.view!.vars.overlayOpacity = 1
                }
                
                self.view!.vars.navOverlayOpacity = self.view!.vars.overlayOpacity
            
                self.view!.vars.overlaySizeX = display.frame.width
                self.view!.vars.overlaySizeY = Static.OverscreenSize
                
                self.view!.vars.overlayOffsetX = 0
                self.view!.vars.overlayOffsetY = ((offYMul * aboveBy) - (display.frame.height))/2
                
                if(aboveBy < 0.2){
                    self.view!.vars.overlayOffsetY = 10000
                    self.view!.vars.navOverlayOffsetY = 10000
                }
            }
        }
        else {
            DispatchQueue.main.async {
                self.view!.vars.overlayOffsetY = 10000
                
                if Static.OnAppExtensionZone {
                                    
                    var position : CGFloat = (Static.OverscreenSize - (aboveBy-Static.OverscreenSize))
                    print("AppExtension position", position, display.side, aboveBy)
                    
                    self.view!.vars.appExtOverlayOpacity = (aboveBy-Static.OverscreenSize) / Static.OverscreenSize
                    
                    if display.side == 2 {
                        self.view!.vars.appExtOverlayOffsetX = 0
                        self.view!.vars.appExtOverlayOffsetY = position + (display.frame.height / 2) - (Static.OverscreenSize/2)
                        
                        self.view!.vars.appExtOverlaySizeX = display.frame.width
                        self.view!.vars.appExtOverlaySizeY = Static.OverscreenSize
                    }
                    else {
                        if display.side == 1 {
                            position = display.frame.width + position
                        }
                        else {
                            position = Static.OverscreenSize - position
                        }
                        
                        self.view!.vars.appExtOverlayOffsetX = position - (display.frame.width / 2) - (Static.OverscreenSize/2)
                        self.view!.vars.appExtOverlayOffsetY = 0
                        
                        self.view!.vars.appExtOverlaySizeX = Static.OverscreenSize
                        self.view!.vars.appExtOverlaySizeY = display.frame.height
                    }
                }
                else {
                    self.view!.vars.appExtOverlayOffsetX = -10000
                    self.view!.vars.appExtOverlayOffsetY = -10000
                    self.view!.vars.appExtOverlayOpacity = 0
                }
            }
        }
    }
    
    public func makeNSView(context: Context) -> CaptureView {
        return captureView //?? CaptureVideoPreview(layer: contentLayer, device: device!)
    }
    
    @State var curFrame : CapturedFrame? = nil
    
    // Called by ScreenRecorder as it receives new video frames.
    func updateFrame(_ frame: CapturedFrame) {
        
        if(Static.disableScreenUpdate){
            return
        }
                
        DispatchQueue.main.async{
            
            // Don't update if window is not showed
            /*if(curDisplay?.side == -1 && self.updateFrameCycle % 3 != 0){
                return
            }*/
            
            contentLayer!.contents = frame.surface
            
            self.curFrame?.surface?.removeAllAttachments()
            
            self.curFrame = frame
        }
    }
    
    // The view isn't updatable. Updates to the layer's content are done in outputFrame(frame:).
    public func updateNSView(_ nsView: CaptureView, context: Context) {
        //nsView.frame.size = curDisplay?.frame.size ?? NSSize(width: 16, height: 9)
    }
    
    //MARK: CaptureView
    public class CaptureView: SCNView {
        
        public override func draggingEntered(_ sender: NSDraggingInfo) -> NSDragOperation {
            print("is dragging in")
            Static.isDraggingInside = true
            Static.topBarWebViewRepresentable?.sendMessage(str: "dragging")
            return super.draggingEntered(sender)
        }
        
        ///
        /// Rendering management
        ///
        var isRendering = false
        
        // Function to stop rendering
        func stopRendering() {
            if isRendering{
                print("stop SCNScene rendering")
                
                hidden()
                
                isRendering = false
            }
        }
        
        // Function to restart rendering
        func restartRendering() {
            if(!isRendering){
                print("start SCNScene rendering")
                
                showed()
                
                isRendering = true
            }
        }
        
        
        // Create the preview with the video layer as the backing layer.
        
        public var curDisplay : Display? = nil
        internal var capturePreview : CapturePreview? = nil
        internal var captureLayer : CALayer?
        
        init() {
            //Thread.sleep(forTimeInterval: Static.WaitBeforeStarting) // try to prevent crash on x86
            
            super.init(frame: NSRect(x: 0, y: 0, width: 100, height: 100),
                       //, device:  device
                       options: ["preferredRenderingAPI":SCNRenderingAPI.metal]
                       //options: [:]
            )
            
            self.registerForDraggedTypes([.fileURL])
            
            rendersContinuously = false
            
            //antialiasingMode = .multisampling2X
            antialiasingMode = .none
            
            self.drawableResizesAsynchronously = true
            self.isJitteringEnabled = false
            self.alphaValue = 1
            self.isPlaying = false
            
            self.layerContentsRedrawPolicy = .onSetNeedsDisplay
            
            preferredFramesPerSecond = Static.SceneKitPreferredFPS
            
            // Make this a layer-hosting view. First set the layer, then set wantsLayer to true.
            //self.layer = layer
            //wantsLayer = true
            
            prepareScene()
            
            // Try to hard reset after some time
            if(true){
                Timer.scheduledTimer(withTimeInterval: Static.ResetCapturePreviewSceneEvery, repeats: true) { timer in
                    if self.curDisplay != nil && self.curDisplay?.aboveByPixels == 0 {
                        self.prepareScene()
                        self.setLayer(layer: self.captureLayer!)
                    }
                }
            }
            
            Timer.scheduledTimer(withTimeInterval: Static.ResetCapturePreviewSceneEvery, repeats: true) { timer in
                if self.curDisplay != nil && self.curDisplay?.aboveByPixels == 0 && self.curDisplay?.recordingPaused ?? false {
                    // Desperate attempt
                    SCNTransaction.flush() // Ensures all pending transactions are completed
                    SCNTransaction.begin()
                    SCNTransaction.commit()
                }
            }
            
            // Observe for screen wakeup
            NSWorkspace.shared.notificationCenter.addObserver(self, selector: #selector(self.screenWake), name: NSWorkspace.screensDidWakeNotification, object: nil)
            
            // Observe sleeping
            NSWorkspace.shared.notificationCenter.addObserver(self, selector: #selector(self.goodNight), name: NSWorkspace.screensDidSleepNotification, object: nil)
            NSWorkspace.shared.notificationCenter.addObserver(self, selector: #selector(self.goodNight), name: NSWorkspace.willSleepNotification, object: nil)
        }
        
        @objc func screenWake() {
            print("screen wake up")
            
            self.prepareScene()
            self.setLayer(layer: self.captureLayer!)
            
            Static.screenWake = true
        }
        
        @objc func goodNight() {
            ///#todo: Handle screen/computer sleep
        }
        
        public var isShowing = false
        
        public func showed(){
            self.isPlaying = true
            self.isShowing = true
            self.preferredFramesPerSecond = Static.SceneKitPreferredFPS
        }
        
        public func hidden(){
            self.isPlaying = false
            self.isShowing = false
            self.preferredFramesPerSecond = Static.SceneKitSleepPreferredFPS
        }
        
        public func forget(){
            if(listApp != nil){
                for app in listApp! {
                    for win in app.value.windows {
                        win.geometry.firstMaterial?.diffuse.contents = NSColor.black
                    }
                }
            }
        }
        
        let windowsZ = 0.001
        
        //MARK: Click recognition
        var clickStartTime = NSDate()
        var clickStartedHere = NSPoint.zero
        var clickedOnApp : AppNode? = nil
        var draggedClickedApp : Bool = false
        
        var leftMouse = true
        
        public override func mouseDown(with evt: NSEvent) {
            DispatchQueue.global(qos: .userInitiated).async {
                if self.curDisplay == nil || self.curDisplay?.aboveBy == 0 {
                    return
                }
                
                self.leftMouse = true
                
                let cursor = NSEvent.mouseLocation
                let point = self.unprojectPoint(SCNVector3(x: cursor.x-self.curDisplay!.frame.minX, y: cursor.y-self.curDisplay!.frame.minY, z: self.projectPoint(SCNVector3Zero).z+self.windowsZ))
                
                self.leftMouse = true
                
                if self.curDisplay == nil || self.listApp == nil {
                    return
                }
                
                for app in self.listApp! {
                    if(app.value.isInPoint(point: point)){
                        print("clicked on app!", NSDate().timeIntervalSince1970)
                        
                        if self.clickStartedHere == NSPoint.zero {
                            self.clickedOnApp = app.value
                        }
                    }
                }
                
                self.draggedClickedApp = false
                self.clickStartedHere = NSEvent.mouseLocation
                self.clickStartTime = NSDate()
            }
        }
        
        override public func mouseUp(with event: NSEvent) {
            DispatchQueue.global(qos: .userInitiated).async {
                let diff = NSDate().timeIntervalSince(self.clickStartTime as Date)
                if(!self.draggedClickedApp && diff < Static.ClickMaximumDifference){
                    //Static.curDisplay?.activateNewApp = true
                    
                    if self.clickedOnApp?.lastClickedWindow != nil {
                        self.clickedOnApp?.app.activate(win: self.clickedOnApp!.lastClickedWindow!.win)
                    }
                }
                
                self.clickStartedHere = CGPoint.zero
                self.clickedOnApp = nil
            }
        }
        
        override public func rightMouseDown(with event: NSEvent) {
            DispatchQueue.global(qos: .userInitiated).async {
                self.leftMouse = false
                
                // Handle right mouse down event here
                super.rightMouseDown(with: event)
                
                let cursor = NSEvent.mouseLocation
                let point = self.unprojectPoint(SCNVector3(x: cursor.x-self.curDisplay!.frame.minX, y: cursor.y-self.curDisplay!.frame.minY, z: self.projectPoint(SCNVector3Zero).z+self.windowsZ))
                
                // Lock app
                var appToLock : AppNode?
                
                for app in self.listApp! {
                    if(app.value.isInPoint(point: point)){
                        print("clicked on app!", NSDate().timeIntervalSince1970)
                        
                        appToLock = app.value
                    }
                }
                
                if appToLock != nil {
                    let win = appToLock!.lastClickedWindow!
                    if win.win.lockedBy == -1 {
                        if !win.app!.asIcon {
                            win.win.lockedBy = Static.curDisplay!.side
                            win.selection.show()
                            NSSound(contentsOf: Bundle.main.url(forResource: "lock", withExtension: "mov")!, byReference: true)?.play()
                        }
                    }
                    else {
                        win.win.lockedBy = -1
                        win.selection.hide()
                        NSSound(contentsOf: Bundle.main.url(forResource: "release", withExtension: "mov")!, byReference: true)?.play()
                    }
                }
            }
        }
        
        override public func rightMouseUp(with event: NSEvent) {
            DispatchQueue.global(qos: .userInitiated).async {
                // Handle right mouse up event here
                super.rightMouseUp(with: event)
            }
        }
        
        /*override func rightMouseDragged(with event: NSEvent) {
         // Handle right mouse dragged event here
         super.rightMouseDragged(with: event)
         }*/
        
        //MARK: Mouse move
        var mouseOnApp : AppNode?
        func mouseMove(display: Display){
            DispatchQueue.global(qos: .userInitiated).async {
                
                if self.listApp != nil && self.curDisplay != nil {
                    
                    // First check preview update
                    if self.curDisplay!.previewUpdated {
                        for app in self.listApp! {
                            for win in app.value.windows{
                                win.setMaterial()
                            }
                        }
                        
                        self.curDisplay!.previewUpdated = false
                    }
                    
                    // Check mouse event
                    let cursor = NSEvent.mouseLocation
                    
                    let point = self.unprojectPoint(SCNVector3(x: cursor.x-self.curDisplay!.frame.minX, y: cursor.y-self.curDisplay!.frame.minY, z: self.projectPoint(SCNVector3Zero).z+self.windowsZ))
                    
                    var onApp : AppNode? = self.clickedOnApp
                    var mouseOnApp : AppNode? = nil
                    for app in self.listApp! {
                        if(app.value.isInPoint(point: point)){ //old: app.value.isInPoint(point: point)
                            //print("mouse on app", NSDate().timeIntervalSince1970)
                            app.value.moveEmissionAlpha(to: 1)
                            //onApp = app.value
                            
                            mouseOnApp = app.value
                        }
                        else {
                            app.value.moveEmissionAlpha(to: 0)
                        }
                    }
                    
                    if mouseOnApp != self.mouseOnApp {
                        NSHapticFeedbackManager.defaultPerformer.perform(
                            NSHapticFeedbackManager.FeedbackPattern.generic,
                            performanceTime: NSHapticFeedbackManager.PerformanceTime.now
                        )
                    }
                    
                    self.mouseOnApp = mouseOnApp
                    
                    
                    // Set offset to default
                    for app in self.listApp!{
                        if app.value.app.runningApp != self.clickedOnApp?.app.runningApp {
                            app.value.setOffset()
                        }
                    }
                    
                    //MARK: App dragging
                    if self.clickedOnApp != nil {
                        if self.leftMouse {
                            if onApp?.app.runningApp == self.clickedOnApp?.app.runningApp {
                                var offset = cursor.y - self.clickStartedHere.y
                                if self.sideVertical {
                                    offset = cursor.x - self.clickStartedHere.x
                                }
                                
                                if(abs(offset) > 5){
                                    self.draggedClickedApp = true
                                }
                                
                                var mul : CGFloat = 1
                                if self.sidePair == 1 {
                                    mul *= -1
                                }
                                
                                if offset * mul < 0 {
                                    if(abs(offset) > Static.OverscreenSize / 2){
                                        // Close application
                                        onApp?.goToOffset = -self.pixelsToScene(pixels: Static.OverscreenSize) * mul
                                    }
                                    else {
                                        onApp?.goToOffset = 0
                                    }
                                    
                                    //MARK: TODO check if really depends on scale
                                    let goTo = self.pixelsToScene(pixels: offset)
                                    onApp?.setOffset(lOffset: goTo)
                                }
                            }
                        }
                    }
                    
                    // Update app
                    for app in self.listApp!{
                        app.value.update()
                    }
                    
                    // Update windows position
                    self.setWindowsPosition(animation: true)
                }
            }
        }
        
        //MARK: General functions
        
        // vertical: it has sense?
        func pixelsToScene(pixels: CGFloat, vertical: Bool = false) -> CGFloat{
            return pixels * (1/(curDisplay?.frame.height ?? NSScreen.main?.frame.height ?? 1000))
        }
        
        //MARK: 3D Functions
        public class Plane {
            public var geometry : SCNPlane
            public var node : SCNNode
            
            init(width: CGFloat, height: CGFloat){
                self.geometry = SCNPlane(width: width, height: height)
                self.node = SCNNode(geometry: self.geometry)
            }
        }
        
        public var planeScreen : Plane?
        public var nodeApps : SCNNode?
        
        func setLayer(layer: CALayer){
            //prepareScene()
            
            planeScreen!.geometry.width = (layer.frame.width / layer.frame.height) * planeScreen!.geometry.height
            planeScreen!.geometry.firstMaterial?.diffuse.contents = captureLayer
            
            if captureLayer != nil{
                captureLayer?.removeFromSuperlayer()
            }
            
            captureLayer = layer
        }
        
        func prepareScene(){
            self.scene = SCNScene()
            
            ///
            /// Main plane
            ///
            planeScreen = Plane(width: 1, height: 1)
            planeScreen!.node.geometry?.firstMaterial?.diffuse.contents = captureLayer
            planeScreen!.node.position = SCNVector3(0,0,0)
            
            // Add the node to the scene
            scene!.rootNode.addChildNode(planeScreen!.node)
            
            ///
            /// Camera
            ///
            let pow = SCNNode()
            pow.position = SCNVector3(0,0,7.15)
            pow.rotation = SCNVector4(0, 0, 0, 0)
            pow.camera = SCNCamera()
            pow.camera?.fieldOfView = 8
            pow.camera?.zFar = 2100000
            pow.camera?.fStop = 1/50; // 15 (less is less focus)
            pow.camera?.wantsDepthOfField = false
            
            //TODO: Thread 1: EXC_BREAKPOINT (code=1, subcode=0x105195380)
            self.pointOfView = pow
            
            nodeApps = SCNNode()
            scene!.rootNode.addChildNode(nodeApps!)
            
            self.curDisplay?.setCurDesktopImage()
        }
        
        required init(coder: NSCoder) {
            fatalError("Not supported")
            //super.init(coder: coder)
        }
        
        //MARK: AppNode
        public class AppNode : Equatable {
            
            static public func ==(lhs: AppNode, rhs: AppNode) -> Bool {
                return lhs.app.runningApp == rhs.app.runningApp
            }
            
            let parentView : CaptureView
            let app : Display.AppWindows
            var asIcon : Bool
            
            public var windows = [WindowPlane]()
            public var node = SCNNode()
            
            public var orderValue = 0.0
            
            init(view : CaptureView, app: Display.AppWindows, asIcon: Bool){
                self.parentView = view
                self.app = app
                self.asIcon = asIcon
            }
            
            public var spacing : CGFloat = 0
            public var isHorizontal : Bool = false
            public var requestedSize : CGFloat = 0
            public var large : CGFloat = 0
            
            public var inUsing = false
            
            public func remove(){
                for win in windows {
                    win.geometry.firstMaterial?.diffuse.contents = nil
                    win.geometry.firstMaterial?.multiply.contents = nil
                    win.geometry.firstMaterial = nil
                    win.app = nil
                    win.node.removeFromParentNode()
                    
                    win.win.winPlane = nil
                    win.selection.myWin = nil
                }
                
                windows.removeAll()
                lastClickedWindow = nil
                
                node.removeFromParentNode()
            }
            
            
            //MARK: Set Icon
            var _iconNode : SCNNode?
            public func setIcon(){
                // try to create a parameter which represent from 0 to 1 the order priority of the app
                orderValue = Double(app.index) / Double(Static.MaxApps*2)
                
                ///
                let size = parentView.pixelsToScene(pixels: 96)
                let iconPlane = Plane(width: size, height: size)
                
                let iconImgSize = 128
                let iconImg = self.app.runningApp.icon
                iconImg?.size = NSSize(width: iconImgSize, height: iconImgSize)
                
                if false && app.iconAvgColor == NSColor.white { // don't calculate avg icon color...
                    let ciIcon = iconImg?.ciImage()
                    if ciIcon != nil {
                        var bitmap = [UInt8](repeating: 0, count: 4)
                        Static.curDisplay?.contextAvgColor.render(ciIcon!, toBitmap: &bitmap, rowBytes: 4, bounds: CGRect(x: 0, y: 0, width: 1, height: 1), format: .RGBA8, colorSpace: self.app.display.screen.colorSpace?.cgColorSpace)
                        
                        app.iconAvgColor = NSColor(red: CGFloat(bitmap[0]) / 255, green: CGFloat(bitmap[1]) / 255, blue: CGFloat(bitmap[2]) / 255, alpha: CGFloat(bitmap[3]) / 255)
                    }
                }
                
                iconPlane.geometry.firstMaterial?.diffuse.contents = iconImg
                iconPlane.geometry.firstMaterial?.transparency = 0.85
                
                // Add node
                _iconNode?.removeFromParentNode()
                _iconNode = SCNNode()
                _iconNode?.position.z = parentView.windowsZ * 2
                
                if isHorizontal{
                    _iconNode?.position.y = requestedSize / 2
                }
                else {
                    _iconNode?.position.x = requestedSize / 2
                }
                
                _iconNode?.addChildNode(iconPlane.node)
                
                node.addChildNode(_iconNode!)
                
                if self.asIcon && iconImg != nil && windows.count == 0 {
                    let fakeWin = Display.AppWindows.Window(app: self.app, winId: -1, winDict: nil)
                    fakeWin.isFakeWin = true
                    
                    // Create a bitmap graphics context of the given size
                    //
                    let imageRect = CGRect(x: 0, y: 0, width: iconImgSize * 2, height: iconImgSize * 2)
                    
                    if Static._cacheAsIconPreview == nil {
                        Static._cacheAsIconPreview = drawMyImage(width: imageRect.width, height: imageRect.height)
                    }
                    
                    let winPlane = WindowPlane(app: self, win: fakeWin, view: parentView)
                    winPlane.win.lastPreview = Static._cacheAsIconPreview
                    winPlane.win.lastRect = imageRect
                    
                    windows.append(winPlane)
                    winPlane.addToNode(node: self.node)
                }
                
                // Check particle system
                self.addAuroraBorealis()
            }
            
            var auroraBorealisNode : SCNNode?
            var auroraBorealisParticleSystem : SCNParticleSystem?
            
            func addAuroraBorealis() {
                if auroraBorealisNode != nil {
                    auroraBorealisNode?.removeFromParentNode()
                }
                
                // Create a node for the aurora
                let auroraNode = SCNNode()
                auroraBorealisNode = auroraNode
                
                node.addChildNode(auroraNode)
                auroraNode.position.z = self.parentView.windowsZ*2
                
                // Set up a particle system for the aurora
                let particleSystem = SCNParticleSystem()
                auroraBorealisParticleSystem = particleSystem
                
                let duration : CGFloat = 4
                
                particleSystem.birthRate = 50
                particleSystem.particleLifeSpan = duration
                particleSystem.particleLifeSpanVariation = 0
                particleSystem.emissionDuration = duration
                particleSystem.loops = true
                particleSystem.blendMode = .additive
                particleSystem.isAffectedByGravity = false
                
                if isHorizontal{
                    particleSystem.emitterShape = SCNPlane(width: requestedSize, height: parentView.onePixel)
                }
                else {
                    particleSystem.emitterShape = SCNPlane(width: parentView.onePixel, height: requestedSize)
                }
                
                // Color the particles to mimic the Aurora Borealis
                //particleSystem.particleColor = NSColor.green
                particleSystem.particleColor = app.iconAvgColor
                particleSystem.particleColorVariation = SCNVector4(0.2, 0.5, 0.5, 0.5)
                particleSystem.particleSize = self.parentView.onePixel * 50
                particleSystem.acceleration.y = self.parentView.onePixel * 2
                particleSystem.particleSizeVariation = self.parentView.onePixel * 10
     
                particleSystem.particleImage = NSImage(named: "AuroraBorealis")
                particleSystem.imageSequenceColumnCount = 4
                particleSystem.imageSequenceRowCount = 8
                particleSystem.imageSequenceAnimationMode = .autoReverse
                particleSystem.imageSequenceFrameRate = 8
                
                // Create a custom shader for the particle system
                /*particleSystem.shaderModifiers = [.particle: """
                    #pragma arguments
                    float time;
                    float intensity;
                    #pragma body
                    vec2 pos = vec2(sin(_particle_position.x + time), cos(_particle_position.y + time));
                    _output.color.rgb = vec3(pos * intensity, pos.y * intensity, intensity);
                    """]*/
                
                if false { // it doesn't works
                    let opacityAnimation = CABasicAnimation(keyPath: "particleColor")
                    opacityAnimation.fromValue = CGColor(gray: 1, alpha: 1)
                    opacityAnimation.toValue = CGColor(gray: 1, alpha: 0)
                    opacityAnimation.duration = duration*2 // Match particle life span
                    //opacityAnimation.autoreverses = true
                    opacityAnimation.repeatCount = .infinity
                    
                    particleSystem.addAnimation(opacityAnimation, forKey: "opacityAnimation")
                }
                
                auroraNode.addParticleSystem(particleSystem)
                
                // Animate the custom shader properties
                let timeAnimation = CABasicAnimation(keyPath: "time")
                timeAnimation.fromValue = 0.0
                timeAnimation.toValue = Float.pi * 2
                timeAnimation.duration = duration
                timeAnimation.repeatCount = .infinity
                
                let intensityAnimation = CABasicAnimation(keyPath: "intensity")
                intensityAnimation.fromValue = 0.5
                intensityAnimation.toValue = 1.5
                intensityAnimation.duration = duration
                intensityAnimation.autoreverses = true
                intensityAnimation.repeatCount = .infinity
                
                auroraNode.addAnimation(timeAnimation, forKey: "timeAnimation")
                auroraNode.addAnimation(intensityAnimation, forKey: "intensityAnimation")
            }
            
            
            public func setWidth(width: CGFloat, display: Display){
                isHorizontal = false
                
                requestedSize = width
                self.setIcon()
                
                let disRapp = display.frame.height / display.frame.width
                spacing = 0
                
                for win in windows {
                    var w = width
                    let maxW = parentView.pixelsToScene(pixels: win.win.lastRect!.size.width)/2.5
                    
                    if(width > maxW){
                        w = maxW
                    }
                    
                    large = w
                    
                    win.geometry.width = w
                    win.geometry.height = self.asIcon ? w : w / win.win.widthHeightRatio
                    
                    let disSpacing = win.geometry.height // width * dim * disRapp
                    if(disSpacing > spacing){
                        spacing = disSpacing
                    }
                    
                    win.setMaterial()
                    
                    win.node.position = SCNVector3(width/2, 0,0)
                    
                    win.setTitle()
                    
                    win.checkSizeChange()
                }
                
            }
            
            public func setHeight(height: CGFloat, display: Display){
                isHorizontal = true
                
                requestedSize = height
                self.setIcon()
                
                let disRapp = display.frame.width / display.frame.height
                spacing = 0
                
                for win in windows {
                    var h = height
                    let maxH = parentView.pixelsToScene(pixels: win.win.lastRect!.size.height)/2.5
                    
                    if(height > maxH){
                        h = maxH
                    }
                    
                    large = h
                    
                    win.geometry.width = self.asIcon ? h : h * win.win.widthHeightRatio
                    win.geometry.height = h
                    
                    let disSpacing = win.geometry.width // height * dim * disRapp
                    if(disSpacing > spacing){
                        spacing = disSpacing
                    }
                    
                    win.setMaterial()
                    
                    win.node.position = SCNVector3(0,height/2,0)
                    
                    win.setTitle()
                    
                    win.checkSizeChange()
                }
            }
            
            //MARK: AppNode update
            
            public var goToOffset : CGFloat = 0
            
            public func update(){
                //TODO: to use fo animations
            }
            
            //MARK: AppNode settings
            public var defaultOffset : CGFloat = -2003
            public var curOffset : CGFloat = 0
            
            public func setOffset(lOffset: CGFloat = 0){
                var offset = lOffset
                if offset == 0{
                    offset = goToOffset
                }
                
                if lOffset == 0 && defaultOffset == -2003{
                    if isHorizontal {
                        defaultOffset = self.node.position.y
                    }
                    else {
                        defaultOffset = self.node.position.x
                    }
                }
                else {
                    if(lOffset == 0){
                        curOffset = (offset + curOffset)/2
                        
                        if(abs(curOffset - offset) < parentView.onePixel){
                            curOffset = offset
                            
                            if(goToOffset != 0){
                                //MARK: User deletes app
                                print("pls delete me")
                                parentView.removeAppNode(app: self, force: true)
                                app.destroyWindows()
                            }
                        }
                    }
                    else {
                        curOffset = offset
                    }
                    
                    if isHorizontal {
                        self.node.position.y = defaultOffset + curOffset
                    }
                    else {
                        self.node.position.x = defaultOffset + curOffset
                    }
                }
            }
            
            public func addToNode(node: SCNNode){
                node.addChildNode(self.node)
            }
            
            var lastClickedWindow : WindowPlane? = nil
            public func isInPoint(point: SCNVector3) -> Bool{
                let cgPoint = CGPoint(x: point.x, y: point.y)
                
                for win in windows {
                    var winFrame = win.getFrame()
                    
                    //print(cgPoint.x, "vs", winFrame.origin.x, " == ", cgPoint.y, "vs", winFrame.origin.y)
                    
                    if NSMouseInRect(cgPoint, winFrame, false){
                        lastClickedWindow = win
                        return true
                    }
                }
                
                return false
            }
            
            public func moveEmissionAlpha(to: CGFloat = 0){
                for win in windows{
                    win.setEmissionAlpha(to: to)
                }
            }
        }
        
        //MARK: WindowPlane
        public class WindowPlane : Plane {
            var app: AppNode?
            let win: Display.AppWindows.Window
            let view : CaptureView
            
            let selection = Selection()
            
            init(app: AppNode, win: Display.AppWindows.Window, view: CaptureView){
                self.app = app
                self.win = win
                self.view = view
                
                super.init(width: 1, height: 1)
                
                if !app.asIcon {
                    win.winPlane = self
                }
                
                selection.config(win: self)
                self.geometry.cornerRadius = view.pixelsToScene(pixels: 5)
                self.geometry.firstMaterial?.emission.contents = NSColor.white
                
                if win.lockedBy > -1 {
                    selection.show()
                }
                else {
                    selection.hide()
                }
            }
            
            var _textNode : SCNNode?
            
            var numLines = 0
            
            var minAlpha : CGFloat = 0
            let maxEmissionIntensity = 0.2
            var emissionAlpha : CGFloat = 0
            
            func setEmissionAlpha(to: CGFloat){
                var tto = to
                if tto == 0 {
                    tto = minAlpha
                }
                
                emissionAlpha = (tto+emissionAlpha) / 2
                let alpha = emissionAlpha * maxEmissionIntensity * (win.avgLight+0.1)
                
                geometry.firstMaterial?.emission.intensity = alpha
                geometry.firstMaterial?.transparency = (1 - alpha)
            }
            
            public class Selection : Plane {
                init(){
                    super.init(width: 1, height: 1)
                }
                
                var myWin : WindowPlane?
                
                func config(win : WindowPlane){
                    myWin = win
                    
                    self.geometry.firstMaterial?.diffuse.contents = NSColor.yellow
                    
                    self.node.position.z = (win.app?.parentView.windowsZ ?? 0) * -2
                    
                    win.node.addChildNode(self.node)
                }
                
                public func hide(){
                    self.geometry.firstMaterial?.transparency = 0
                }
                
                public func show(){
                    self.setSize()
                    self.geometry.firstMaterial?.transparency = 0.5
                }
                
                public func setSize(){
                    self.geometry.width = self.myWin!.geometry.width + (self.myWin!.app?.parentView.pixelsToScene(pixels: 4) ?? 0)
                    self.geometry.height = self.myWin!.geometry.height + (self.myWin!.app?.parentView.pixelsToScene(pixels: 4) ?? 0)
                    self.geometry.cornerRadius = self.myWin!.geometry.cornerRadius
                }
            }
            
            var lastWidth : CGFloat = 1
            var lastHegiht : CGFloat = 1
            func checkSizeChange(){
                if lastWidth != self.geometry.width || lastHegiht != self.geometry.height {
                    selection.setSize()
                    
                    lastWidth = self.geometry.width
                    lastHegiht = self.geometry.height
                }
            }
            
            
            func setTitle() {
                _textNode?.removeFromParentNode()
                let val = win.isFakeWin ? "\(win.appTitle) " : win.appTitle + ": " + win.winTitle
                
                if(val.count == 0){
                    return
                }
                
                func newLineAfterTot(str: String, newLineAfter: Int) -> NSAttributedString{
                    var ret = ""
                    var newLineAsap = false
                    var c = 0
                    
                    for i in  0 ... (str.count - 1) { //MARK: BUG HERE IF str is empty
                        let m = (c % newLineAfter)+1
                        if(m == newLineAfter){
                            newLineAsap = true
                        }
                        
                        var ch = str[i]
                        
                        ret += String(ch)
                        
                        if(newLineAsap){
                            // Force new line
                            if c > newLineAfter + 5 {
                                ch = " "
                            }
                            
                            switch(ch){
                            case " ", "-", "|", ":", "/":
                                ret += "\n"
                                newLineAsap = false
                                numLines += 1
                                c = -1
                                
                                break;
                                
                            default:
                                break;
                            }
                        }
                        
                        c += 1
                    }
                    
                    return NSAttributedString(string: ret, attributes: [.foregroundColor : NSColor.clear, .font: NSFont(name: "ArialRoundedMTBold", size: 1) ?? NSFont(name: "Arial", size: 1)!])
                }
                
                //MARK: Set text
                // Calculated size 40 characters every 280px
                let maxCharsPerLine = Int((self.geometry.width / (view.pixelsToScene(pixels: 280)))*35)
                
                let attrStr = newLineAfterTot(str: val, newLineAfter: maxCharsPerLine)
                
                let newText = SCNText(string: attrStr, extrusionDepth:view.windowsZ)
                //newText.font = .menuBarFont(ofSize: 1)
                newText.firstMaterial!.diffuse.contents = NSColor.white
                
                let scaleNode = 0.010 * (win.isFakeWin ? 0.75 : 1)
                
                let padding = view.pixelsToScene(pixels: 10)
                let margin = view.pixelsToScene(pixels: 5)
                
                _textNode = SCNNode(geometry: newText)
                _textNode!.position = SCNVector3(-geometry.width/2 + padding + margin, -(geometry.height/2)+(padding), view.windowsZ*3)
                _textNode!.scale = SCNVector3(scaleNode, scaleNode, scaleNode)
                //_textNode!.castsShadow = true
                
                let contrastPadding = view.pixelsToScene(pixels: 5) * 100 * self.view.curDisplay!.scaleCapture
                let textWidth = newText.textSize.width
                let textHeight = newText.textSize.height
                
                let contrastPlane = Plane(width: textWidth + (contrastPadding*2),
                                          height: textHeight + (contrastPadding*2)
                )
                
                contrastPlane.geometry.cornerRadius = 1
                
                let yellowness : CGFloat = app!.orderValue * 1.5
                contrastPlane.geometry.firstMaterial?.diffuse.contents = NSColor(red: yellowness + 0.1, green: 0.9 - yellowness, blue: 0, alpha: 1)
                
                contrastPlane.geometry.firstMaterial?.transparency = 0.75
                contrastPlane.node.position =
                SCNVector3(
                    (contrastPlane.geometry.width/2)-contrastPadding,
                    (contrastPadding + (textHeight/2))
                    ,0)
                
                _textNode?.addChildNode(contrastPlane.node)
                
                node.addChildNode(_textNode!)
            }
            
            public func getFrame() -> NSRect{
                var x = node.position.x
                var y = node.position.y
                
                var pNode : SCNNode? = node
                while true {
                    pNode = pNode?.parent
                    
                    if(pNode == nil){
                        break
                    }
                    
                    x += pNode!.position.x
                    y += pNode!.position.y
                }
                
                x -= geometry.width/2
                y -= geometry.height/2
                
                return NSRect(x: x, y: y, width: geometry.width, height: geometry.height)
            }
            
            public func setMaterial (){
                
                func addBloom() -> [CIFilter]? {
                    let bloomFilter = CIFilter(name:"CIBloom")!
                    bloomFilter.setValue(1, forKey: "inputIntensity")
                    bloomFilter.setValue(5, forKey: "inputRadius")
                    
                    return [bloomFilter]
                }
                
                if win.lastPreview?.width ?? 16384  < 16384 {
                    
                    self.geometry.firstMaterial?.writesToDepthBuffer = false
                    
                    self.geometry.firstMaterial?.diffuse.contents = win.lastPreview
                    
                    self.geometry.firstMaterial?.multiply.contents = win.lastPreview
                    self.geometry.firstMaterial?.multiply.intensity = 0.6
                    
                    if win.inUsing {
                        self.minAlpha = 1
                        self.app?.inUsing = true
                        
                        //self.node.filters = addBloom() // is too much performance consuming
                    }
                }
                else {
                    //TODO: remove window from previews
                }
                
                //self.geometry.firstMaterial?.lightingModel = .constant
                
                // is it useful?
                //self.geometry.firstMaterial?.ambient.contents = win.lastPreview
            }
            
            public func addToNode(node: SCNNode){
                node.addChildNode(self.node)
            }
        }
        
        //MARK: setScreenApps
        public func setWindowsPosition(animation: Bool = false) -> CGFloat{
            let spaceBetweenApps = pixelsToScene(pixels: 5)
            var totalSpace : CGFloat = 0
            var maxSpacing : CGFloat = 0
            var lastSpacing : CGFloat = 0
            
            var maxLarge : CGFloat = 0
            
            for kvApp in listApp! {
                let app = kvApp.value
                
                let goTo = totalSpace + (app.spacing/2)
                
                if(sideVertical){
                    if(animation){
                        app.node.position.y = (app.node.position.y + goTo)/2
                    }
                    else {
                        app.node.position.y = goTo
                    }
                    
                    if Static.PutAsideInUsingApp && app.inUsing {
                        if sidePair == 1 {
                            app.node.position.x = -pixelsToScene(pixels: Static.PutAsideInUsingAppBy)
                        }
                        else {
                            app.node.position.x = pixelsToScene(pixels: Static.PutAsideInUsingAppBy)
                        }
                    }
                }
                else {
                    if(animation){
                        app.node.position.x = (app.node.position.x + goTo)/2
                    }
                    else {
                        app.node.position.x = goTo
                    }
                    
                    if Static.PutAsideInUsingApp && app.inUsing {
                        app.node.position.y = pixelsToScene(pixels: Static.PutAsideInUsingAppBy)
                    }
                }
                
                lastSpacing = app.spacing / 2
                
                if(app.spacing > maxSpacing){
                    maxSpacing = app.spacing
                }
                
                if(app.large > maxLarge){
                    maxLarge = app.large
                }
                
                totalSpace += spaceBetweenApps + app.spacing
            }
            
            let oppositeSpacing = -totalSpace / 2
            
            // Set nodeWindow position
            if(sideVertical){
                //let rapp = display.frame.width / display.frame.height
                
                var x = self.pixelsToScene(pixels: (-curDisplay!.frame.width/2) - Static.OverscreenSize) + (pixelsToScene(pixels:Static.OverscreenSize) - maxLarge)/2
                
                if(sidePair == 1){
                    x = self.pixelsToScene(pixels: curDisplay!.frame.width/2)
                    x += pixelsToScene(pixels: Static.OverscreenAboveLimit*2)
                }
                
                nodeApps?.position = SCNVector3(x: x, y: oppositeSpacing, z: windowsZ)
            }
            else {
                var y = pixelsToScene(pixels: (-curDisplay!.frame.height/2) - Static.OverscreenSize) + (pixelsToScene(pixels:Static.OverscreenSize) - maxLarge)/2
                
                //y = self.pixelsToScene(pixels: display.frame.height) + (self.pixelsToScene(pixels: display.overscreenAboveLimit*display.scale*6))
                
                nodeApps?.position = SCNVector3(x: oppositeSpacing, y: y, z: windowsZ)
            }
            
            return totalSpace
        }
        
        public func removeAppNode(app: AppNode, force: Bool){
            listApp?.removeValue(forKey: app.app.title) //ugly way, but temporary
            
            let id = app.app.runningApp.processIdentifier;
            curDisplay?.apps[id]?.destroyWindows()
            
            if(force){
                curDisplay?.apps.removeValue(forKey: id)
            }
        }
        
        func freeListApp(){
            if listApp != nil{
                for app in listApp! {
                    app.value.remove()
                }
                
                listApp!.removeAll()
            }
        }
        
        var orderedApps : OrderedDictionary<Double, Display.AppWindows>?
        var listApp : OrderedDictionary<String, AppNode>?
        
        var side : Int = 0
        var sideVertical : Bool = false
        var sidePair : Int = 0
        
        var onePixel : CGFloat = 0
        var relOverscreen : CGFloat = 0
        
        public func setScreenApps(display: Display){
            onePixel = pixelsToScene(pixels: 1)
            relOverscreen = pixelsToScene(pixels: Static.OverscreenSize)
            
            curDisplay = display
            self.orderedApps = display.getOrderedApps()
            
            side = display.side
            sideVertical = side < 2
            sidePair = side % 2
            
            var maxSize : CGFloat = pixelsToScene(pixels: (Static.OverscreenSize) - (Static.OverscreenAboveLimit*4))
            
            //print("maxSize: ", maxSize)
            //print("maxSizePixels", (display.overscreenSize) - (Static.OverscreenAboveLimit*4) / dim) //=> 280px
            
            // Init windows
            nodeApps?.removeFromParentNode()
            nodeApps = SCNNode()
            scene?.rootNode.addChildNode(nodeApps!)
            
            if(false){ //reference green plane
                let testPlane = Plane(width: 0.1, height: 0.1)
                testPlane.geometry.firstMaterial?.diffuse.contents = NSColor.green
                testPlane.node.position = SCNVector3(0,0,0)
                nodeApps?.addChildNode(testPlane.node)
            }
            
            //self.freeListApp() // unset()
            listApp = OrderedDictionary<String, AppNode>()
            
            if orderedApps!.count == 0 {
                return
            }
            
            let maxPreviews = Int(Double(Static.MaxApps)*0.75)
            
            var lastTitle : String = ""
            
            var showAppsWin : [AppNode] = []
            var showAppsIcon : [AppNode] = []
            
            for a in 0 ... orderedApps!.count - 1 {
                let app = orderedApps?.elements[a]
                
                app?.value.index = a
                
                let hasLockedBy = app!.value.hasLockedBy()
                if showAppsWin.count <  Static.MaxApps || hasLockedBy {
                    
                    let appNode = AppNode(view: self, app: app!.value, asIcon: false)
                    
                    let wins = app!.value.getOrderedWindows()
                    if(!wins.isEmpty){
                        var lastEl = wins.elements[wins.count-1].value
                        
                        print("wins per app:",wins.count)
                        if lastEl.inUsing && lastEl.spaceId != -1 && wins.count > 1{
                            let penultimo = wins.elements[wins.count-2].value
                            
                            let isOnSameSpace = penultimo.spaceId == curDisplay?.currentSpaceId && penultimo.spaceId != lastEl.spaceId
                            
                            if penultimo.spaceId != -1 && (penultimo.spaceId != lastEl.spaceId || isOnSameSpace) && (penultimo.lockedBy == -1 || penultimo.lockedBy == Static.curDisplay?.side) {
                                lastEl = penultimo
                            }
                        }
                        
                        if(lastEl.lastPreview != nil && (lastEl.lockedBy == -1 || lastEl.lockedBy == Static.curDisplay?.side)){
                            let winPlane = WindowPlane(app: appNode, win: lastEl, view: self)
                            appNode.windows.insert(winPlane, at: appNode.windows.count)
                            winPlane.addToNode(node: appNode.node)
                            
                            showAppsWin.append(appNode)
                            
                            lastTitle = app!.value.title
                            
                            app?.value.considered = true
                            app?.value.appeared = true
                        }
                        else {
                            app?.value.considered = false
                        }
                    }
                    
                    if hasLockedBy {
                        if !app!.value.considered {
                            if showAppsWin.count > Static.MaxApps {
                                for i in stride(from: showAppsWin.count-1, through: 0, by: -1) {
                                    let rem = showAppsWin[i]
                                    if !rem.app.hasLockedBy(){
                                        showAppsWin.remove(at: i)
                                        
                                        rem.asIcon = true
                                        showAppsIcon.insert(rem, at: 0)
                                        if showAppsIcon.count < maxPreviews {
                                            showAppsIcon.remove(at: showAppsIcon.count-1)
                                        }
                                        
                                        break;
                                    }
                                }
                            }
                            
                            let wins = app!.value.getOrderedWindows()
                            var winner : Display.AppWindows.Window?
                            
                            for w in stride(from: wins.count-1, through: 0, by: -1){
                                let win = wins[wins.keys[w]]!
                                if win.lockedBy == Static.curDisplay!.side{
                                    winner = win
                                    break
                                }
                            }
                            
                            if winner != nil {
                                let winPlane = WindowPlane(app: appNode, win: winner!, view: self)
                                appNode.windows.insert(winPlane, at: appNode.windows.count)
                                winPlane.addToNode(node: appNode.node)
                                showAppsWin.append(appNode)
                                
                                app!.value.appeared = true
                                app!.value.considered = true
                            }
                            else {
                                print("windows doesn't exists... DEBUG")
                            }
                        }
                    }
                    
                    app!.value.clearUnusedWindows()
                }
                else {
                    app?.value.considered = false
                }
                
                if !(app?.value.considered ?? true) {
                    if showAppsIcon.count < maxPreviews {
                        // Add empty node
                        let appNode = AppNode(view: self, app: app!.value, asIcon: true)
                        let title = app!.value.title
                        
                        if(!title.isEmpty){
                            showAppsIcon.append(appNode)
                        }
                        
                        app?.value.appeared = true
                    }
                    else {
                        app?.value.appeared = false
                    }
                    
                    app?.value.considered = false
                    
                    // remove immediately previews (?)
                    for win in app!.value.windows {
                        if win.value.lockedBy == -1 {
                            win.value.lastPreview = nil
                        }
                    }
                }
                
                if !(app?.value.considered ?? true){
                    //MARK: Clear unused app
                    if !(app?.value.appeared ?? true){
                        app?.value.destroyWindows() //just destroy windows saves (move outside if for doing always)
                    }
                }
            }
            
            for appNode in showAppsWin {
                appNode.addToNode(node: nodeApps!)
                listApp![appNode.app.title] = appNode
            }
            
            for appNode in showAppsIcon {
                appNode.addToNode(node: nodeApps!)
                
                let title = appNode.app.title
                listApp![Static.GroupMiniPreviews ? "ZZZZZZZZZZ\(title)" : title] = appNode
            }
            
            listApp!.sort(by: { $0.key < $1.key })
            
            //MARK: Elaborate windows size
            func setWinsSize(size: CGFloat) -> CGFloat {
                for app in listApp! {
                    if(sideVertical){
                        app.value.setWidth(width: size, display: display)
                    }
                    else {
                        app.value.setHeight(height: size, display: display)
                    }
                }
                
                return setWindowsPosition()
            }
            
            
            var maxSpace = pixelsToScene(pixels: curDisplay!.frame.height)
            if(!sideVertical){
                maxSpace = pixelsToScene(pixels: curDisplay!.frame.width)
            }
            
            while setWinsSize(size: maxSize) > maxSpace{
                maxSize -= pixelsToScene(pixels: 15)
            }
        }
        
        public func unset(){
            nodeApps?.removeFromParentNode()
            nodeApps = nil
            self.freeListApp()
        }
    }
}
