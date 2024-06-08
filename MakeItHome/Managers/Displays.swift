//
//  Displays.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 07/10/22.
//

import CoreGraphics
import AppKit
import ScreenCaptureKit
import CoreImage
import AVFoundation

import OrderedCollections
import SceneKit

import IOKit
import IOKit.hid

public class DisplaysManager {
    var timerMouse : Timer? = nil;
    var curMouseLoc : NSPoint = NSPoint(x:0,y:0);
    var curDisplay : Display?
    
    public var curDekstop : CIImage?
    
    var mainBarHeight : CGFloat = 24
    var mainScale : CGFloat = 2
    
    var contentView : ContentView?
    public var window : NSWindow?
    
    var displays : [Display] = []
    
    public let updateHertz : Double = Static.MouseHertz
    var capturePreview : AnyObject? = nil // CapturePreview
    
    let enableMouseEvent = false
    
    public let clipboard = Clipboard()
    
    init(){
        Static.clipboard = clipboard
        
        if(enableMouseEvent){
            Timer.scheduledTimer(withTimeInterval: 1, repeats: false) { timer in
                self.startMouseEvent()
            }
        }
        
        ///# Displays init
        self.initCurrentDisplays()
        
        Timer.scheduledTimer(withTimeInterval: Static.BackgroundUpdateSeconds_NewDisplay, repeats: true) { timer in
            self.initCurrentDisplays()
        }
                
        self.curDisplay?.hideWindow()
        
        // Update desktop image
        Timer.scheduledTimer(withTimeInterval: 1, repeats: false) { timer in
            Task {
                self.curDisplay?.updatDesktopImage()
                self.screenRecorderSelectDisplay()
            }
        }
                
        Timer.scheduledTimer(withTimeInterval: Static.UpdateWallpaperEvery, repeats: true) { timer in
            Task {
                if self.curDekstop == nil || self.curDisplay?.isMain ?? false || true{
                    self.curDisplay?.updatDesktopImage()
                }
                
                // Try to solve "screen blocking" bug
                if Static.ReloadScreenRecorderDisplay{
                    if self.curDisplay?.side == -1 && self.curDisplay?.aboveByPixels == 0 {
                        self.screenRecorderSelectDisplay()
                    }
                }
            }
        }
        
        // Retrieve CapturePreview view
        DispatchQueue.main.async {
            if #available(macOS 12.3, *){
                Task {
                    self.capturePreview = (self.contentView!.store.screenRecorder as! ScreenRecorder).capturePreview as AnyObject
                }
            }
        }
                    
        if(Static.BackgroundUpdate_SetWindowsProperties){ 
            Timer.scheduledTimer(withTimeInterval: Static.BackgroundUpdateSeconds_SetWindowsProperties, repeats: false) { timer in
                self.contentView?.store.setWindowsProperties()
            }
        }
        
        //MARK: Timer: Update mouse position
        let interval : Double = 1/self.updateHertz; // 1/x hertz
        self.timerMouse = Timer.scheduledTimer(withTimeInterval: interval, repeats: true) { timer in
            DispatchQueue.main.async {
                self.updateMousePosition(from: 2)
            }
        }
        
        ///# Set mouse position (DEPRECATED?)
        /*let intervalMouseSet : Double = 1/(self.updateHertz/3); // 1/(x/3) hertz
        self.timerMouse = Timer.scheduledTimer(withTimeInterval: intervalMouseSet, repeats: true) { timer in
            DispatchQueue.main.async {
                self.curDisplay?.forcePosition()
            }
        }*/
                
        // Space changed event
        NSWorkspace.shared.notificationCenter.addObserver(self, selector: #selector(self.spaceChange), name: NSWorkspace.activeSpaceDidChangeNotification, object: nil) 
        
        // Update screen settings
        NotificationCenter.default.addObserver(self, selector: #selector(displayConfigurationChanged(_:)), name: NSApplication.didChangeScreenParametersNotification, object: nil)
    }
    
    @objc func displayConfigurationChanged(_ notification: Notification) {
        // pay attention, this is called also in opening/closing of an app (probably also fullscreen on/off etc)
        print("Display resolution changed.")
        
        //let app = notification.object as? AppKit.NSApplication
        //self.curDisplay?.isFullscreen = app?.presentationOptions.contains([.fullScreen]) ?? false
        
        //notification.object // self.isFullscreen
        
        for dis in displays{
            dis.loadScreenInfo()
        }
    }
    
    @objc func spaceChange() {
        print("space did change")
        
        updateFrontmostApp()
        //screenRecorderSelectDisplay()
        
        curDisplay?.spaceDidChange()
        
        // force to false (this could glitch the overscreen activation in the short term(?))
        curDisplay?.spaceIsChanging = false
    }
    
    func getDisplayFromNSScreen(screen : NSScreen) -> Display? {
        for display in self.displays {
            if display.screen == screen {
                return display
            }
        }
        
        return nil
    }
    
    var screens : [NSScreen] = []
    
    public func initCurrentDisplays(load: Bool = false){
        
        screens = NSScreen.screens
        
        var foundSomething = false
        
        for display in displays {
            display.found = false
        }
        
        for screen in screens {
            var display = self.getDisplayFromNSScreen(screen: screen)
            
            if display == nil {
                display = Display(manager: self, screen: screen)
                displays.append(display!)
                foundSomething = true
            }
            else {
                //TODO: add more checker, like in case of resolution changing
                if screen.displayID != display!.screen.displayID{
                    display?.screen = screen
                    foundSomething = true
                }
            }
            
            display?.found = true
        }
        
        var removeDisplays : [Display] = []
        
        for display in self.displays {
            if(!display.found){
                removeDisplays.append(display)
                foundSomething = true
            }
        }
        
        if foundSomething {
            for display in self.displays {
                if display.found {
                    display.loadScreenInfo()
                }
            }
        }
        
        for display in removeDisplays{
            if display == curDisplay {
                curDisplay = nil
            }
            
            displays.remove(at: displays.firstIndex{$0 === display}!)
        }
    }
    
    func screenRecorderSelectDisplay(){
        if #available(macOS 12.3, *){
            DispatchQueue.main.async {
                Task{
                    let screenRecorder = self.contentView!.store.screenRecorder as! ScreenRecorder
                    await screenRecorder.refreshAvailableContent()
                    
                    // Removed: this can cause some types of crashes
                    //await screenRecorder.refreshAvailableContent()
                    
                    var scDisplay : SCDisplay? = nil
                    for d in screenRecorder.availableDisplays {
                        if(d.displayID == self.curDisplay?.screen.displayID){
                            scDisplay = d
                        }
                    }
                    
                    if(scDisplay != nil && !(self.curDisplay?.disable ?? true)){
                        print("starting recording on display", scDisplay?.displayID)
                        self.curDisplay?.scDisplay = scDisplay
                        screenRecorder.capturePreview.currentDisplay(display: self.curDisplay!)
                        await screenRecorder.start(lowProfile: true, display: scDisplay)
                    }
                }
            }
        }
    }
    
    public func getPointerDisplay(cursor: CGPoint, justGet: Bool = false) -> Display? {
        var inDisplay : Display?
        
        // This for compensate the "mouse movement bug"
        for display in self.displays {
            if display.aboveByPixels > 0{
                inDisplay = display
                display.mouseIn = true
            }
            else {
                display.mouseIn = false
            }
        }
        
        if(inDisplay == nil){
            for display in self.displays {
                if(!justGet){
                    display.mouseIn = false
                }
                
                let frame = display.screen.frame
                if frame.contains(cursor){
                    inDisplay = display
                }
            }
        }
        
        if(!justGet){
            if(inDisplay == nil){
                inDisplay = curDisplay
            }
            
            if inDisplay != curDisplay {
                inDisplay?.justArrived = true
            }
            
            inDisplay?.mouseIn = true
        }
                        
        return inDisplay
    }
    
    public func updateMousePosition(cursor: CGPoint = CGPoint.zero, from : Int = 0){
        self.curMouseLoc = cursor
        
        if(cursor == CGPoint.zero){
            curMouseLoc = NSEvent.mouseLocation //get current mouse position
        }
        
        var display = curDisplay
        
        if(display == nil || self.screens.count > 1){
            display = getPointerDisplay(cursor: self.curMouseLoc)
        }
        else {
            display?.mouseIn = true
        }
                
        if(display != nil){
            if(self.curDisplay?.screen != display!.screen){
                print("display id", display!.screen.displayID, self.curMouseLoc)
                
                if(self.curDisplay != nil){
                    if #available(macOS 12.3, *){
                        DispatchQueue.main.async {
                            Task {
                                await (self.contentView?.store.screenRecorder as! ScreenRecorder).stop()
                            }
                        }
                    }
                }
                
                //MARK: Display changed
                
                //window?.makeKeyAndOrderFront(nil)
                //window?.orderFront(nil)
                
                Static.curDisplay = display
                
                if !(display!.disable) {
                                                            
                    display!.newSet()
                    self.curDisplay = display
                                        
                    if(enableMouseEvent){ // currently false
                        stopMouseEvent()
                        startMouseEvent()
                    }
                    
                    window?.setFrame(NSRect(origin: NSPoint(x:display!.screen.frame.minX, y: display!.screen.frame.minY), size: NSSize(width:1, height:1)), display: false)
                    
                    DispatchQueue.main.async{
                        self.contentView?.store.setWindowsProperties()
                    }
                    
                    self.curDisplay?.hideWindow()
                    
                    screenRecorderSelectDisplay()
                    
                    // Init display settings
                    delay(ms: 10){
                        MenuBarView()
                    }
                }
            }
            else {
                if !(self.curDisplay?.disable ?? true){
                    DispatchQueue.main.async {
                        self.curDisplay?.active(mouse: self.curMouseLoc)
                    }
                }
            }
            
            Static.mouseInDisplay = display
        }
    }
    
    //TODO: Bring this in Display class
    func updateFrontmostApp(onFrontMost : NSRunningApplication? = nil){
        let frontMost = onFrontMost ?? NSWorkspace.shared.frontmostApplication
        
        if(curDisplay != nil && curDisplay!.aboveByPixels == 0){
            if(frontMost != NSRunningApplication.current){ // is not MakeItHome
                if frontMost != curDisplay!.curFrontApp {
                    curDisplay!.appSwitched(to: frontMost)
                    
                    curDisplay!.curFrontApp = frontMost
                    curDisplay!.frontMostAppSince = 0
                }
                else {
                    curDisplay!.frontMostAppSince += 1
                }
            }
        }
    }
    
    ///
    //MARK: Mouse events
    ///
    private var monitor: AnyObject?
    private var mask: NSEvent.EventTypeMask = NSEvent.EventTypeMask.any
    private lazy var handler: (NSEvent?) -> () = funcMouseEvent

    func funcMouseEvent(mouseEvent: NSEvent?) {
 
        // print("mouseEvent fired")
        
        //self.gecount += 1
        //self.textLabel.stringValue = "global event monitor: \(self.gecount)"
        //print("mouseEvent", mouseEvent?.deltaX, mouseEvent?.deltaY)
        
        self.curDisplay?.updateAccumulation(x: mouseEvent?.deltaX ?? 0, y: mouseEvent?.deltaY ?? 0)
 
        //self.curDisplay?.forcePosition()
        
        //let mouse = CGPoint(x: mouseEvent?.absoluteX ?? 0, y: mouseEvent?.absoluteY ?? 0)
                
        /*guard let moveEvent = CGEvent(mouseEventSource: nil, mouseType: .mouseMoved, mouseCursorPosition: mouse, mouseButton: .left) else {
                    return
        }*/
                
        //print("mouse moves", mouseEvent?.deltaX, mouseEvent?.deltaY)
        
        /*DispatchQueue.main.async {
            self.updateMousePosition(cursor: mouse, from: 1)
        }*/
    }
    
    func windowExistingElsewhere (display: Display, winId : Int) -> Display? {
        if winId == -1 {
            return nil
        }
        
        for d in displays{
            if(d != display){
                for app in d.apps{
                    for win in app.value.windows {
                        if win.value.id == winId {
                            return d
                        }
                    }
                }
            }
        }
        
        return nil
    }
    
    deinit {
        stopMouseEvent()
    }

    public func startMouseEvent() {
        if(curDisplay != nil && monitor == nil){
            
            monitor = NSEvent.addGlobalMonitorForEvents(matching: mask, handler: handler) as AnyObject?
            
            //let mouseTracking : NSTrackingArea = NSTrackingArea(rect:curDisplay!.frame, options: [.activeAlways, .mouseMoved], owner: curDisplay)
            //monitor?.addTrackingArea(mouseTracking)
            
            print("mouse event start")
            
        }
    }

    public func stopMouseEvent() {
        if monitor != nil {
            NSEvent.removeMonitor(monitor!)
            monitor = nil
            
            print("mouse event stop")
        }
    }
    
    func newWindow(win: Display.AppWindows.Window){
        for display in displays {
            for app in display.apps{
                if(app.value.id != win.app?.id){
                    continue;
                }
                
                var hasWin = -1
                for awin in app.value.windows {
                    if awin.value.id == win.id{
                        hasWin = awin.key
                    }
                }
                
                if hasWin > -1{
                    app.value.windows.removeValue(forKey: hasWin)
                }
            }
        }
    }
}

// Make display equatable
public func == (lhs: Display, rhs: Display) -> Bool {
    return lhs.screen == rhs.screen
}

//
//MARK: Display
//
public class Display : Equatable {
    public var found : Bool = true // variabile "di servizio"
    
    public var screen : NSScreen
    public let manager : DisplaysManager
    
    public var isMain : Bool = false
    public var frame : NSRect = NSRect.zero
    public var sizeFrame : NSRect = NSRect.zero
    public var scale : Double = 1
    public var apps : [pid_t:AppWindows] = [:]
    
    public var scDisplay : AnyObject? //SCDisplay?
    
    public var scaleCapture : CGFloat = 2
    
    public var menuHeight : CGFloat = 24
    
    //MARK: AppWindows
    
    // https://www.advancedswift.com/ordereddictionary/
    public func getOrderedApps() -> OrderedDictionary<Double, AppWindows>{
        var dict = OrderedDictionary<Double, AppWindows>()
        
        for (id, app) in apps{            
            dict[app.avgTime] = app
        }
                
        //MARK: TODO: invert order (also for getOrderedWindow)
        dict.sort(by: { $0.key > $1.key })
        
        return dict
    }
    
    func removeWindows(id: Int){
        for app in apps{
            let win = app.value.windows[id]
            if(win != nil){
                var wins = app.value.windows
                wins[id]?.app = nil
                wins.removeValue(forKey: id)
            }
        }
    }
    
    var goToSpace = -1 // temporarly unused
    func onActivate(win: AppWindows.Window?, forceSpaceChange: Bool = false){
        let forceByDefault = true
        
        if win == nil{
            return
        }
        
        var onOtherSpaces = false
        for awin in win!.app!.windows{
            if(awin.value.spaceId != win!.spaceId){
                onOtherSpaces = true
            }
        }
        
        let differentSpace = win!.spaceId != currentSpaceId
                
        if win!.id >= 0 && !win!.appearsInThiSpace && win!.spaceId != -1 && ((differentSpace && (forceSpaceChange || onOtherSpaces || manager.displays.count > 1)) || onOtherSpaces) {
            goToSpace = win!.spaceId
            
            // to prevent screenshots
            if differentSpace {
                // This seems to change space. What a irony
                //self.spaceDidChange() // (three times, but it doesn't works well, anyway)
                print("spaceIsChanging = true because of differentSpace")
                spaceIsChanging = true
            }
            
            DispatchQueue.main.async {
                Timer.scheduledTimer(withTimeInterval: Static.ChangeSpaceAfter / 2, repeats: false) { timer in
                    var space = self.spaces[win!.spaceId]
                    
                    if space == nil {
                        for ph in self.placeholders{
                            if ph.id == win!.spaceId{
                                space = ph
                                break
                            }
                        }
                    }
                    
                    if(space != nil && win!.spaceId != self.currentSpaceId){
                        print("activating space with id", win!.spaceId)
                        
                        self.spaceIsChanging = true
                        self.currentSpaceId = -1
                        
                        space?.activate()
                        self.activateNewApp = false // set fault to prevent "bouncing" effect when returning quiclky in overscreen
                        
                        Timer.scheduledTimer(withTimeInterval: Static.ChangeSpaceAfter, repeats: false) { timer in
                            win!.app?.activate(win: win, force: forceByDefault)
                        }
                    }
                    else {
                        self.goToSpace = -1
                        print(win!.spaceId)
                        print(self.spaces)
                        print("space not found")
                        
                        win!.app?.activate(win: win, force: forceByDefault) // just do it
                    }
                }
            }
        }
        else {
            delay(ms: 50){
                win!.app?.activate(win: win, force: forceByDefault)
            }
        }
    }
        
    public class AppWindows {
        public var index = 0
        
        public var considered : Bool = true
        public var appeared : Bool = true 
        
        public var runningApp : NSRunningApplication
        public let display : Display
        
        public var title : String = ""
        public var windows : [Int: Window] = [:]
        public var lastWindow : Window?
        
        public var avgSelect : Double = 0
        public var avgTime : Double = NSDate().timeIntervalSince1970
        
        public var timeSelection : Int = 0
        
        public var iconAvgColor : NSColor = NSColor.white
        
        public let id : pid_t
        public let bundleId : String?
        
        var appExtension : AppExtension?
        
        init(runningApp: NSRunningApplication, display: Display){
            self.runningApp = runningApp
            self.display = display
            self.id = runningApp.processIdentifier
            self.bundleId = runningApp.bundleIdentifier
            
            print("App bundleId", self.bundleId)
            
            DispatchQueue.global().async {
                if runningApp.icon != nil {
                    let avg = averageColor(of: runningApp.icon!)
                    self.iconAvgColor = avg ?? self.iconAvgColor
                }
            }
        }
        
        func checkAppExtension(){
            if self.appExtension == nil && Static.appExtensionManager != nil {
                for (id, app) in Static.appExtensionManager!.apps {
                    if app.bundleId == self.bundleId {
                        appExtension = app
                        app.link(app: self)
                    }
                }
            }
        }
        
        public func destroyWindows(force : Bool = false){
            if !force {
                if hasLockedBy() {
                    return
                }
            }
            
            for win in windows{
                win.value.app = nil;
            }
            
            windows.removeAll()
            
            display.apps.removeValue(forKey: id)
            
            if self.appExtension != nil {
                Static.appExtensionManager?.closedApp(bundleId: self.bundleId!)
            }
        }
        
        public func hasLockedBy() -> Bool{
            for win in windows{
                if(win.value.lockedBy == display.side){
                    return true
                }
            }
            
            return false
        }
        
        public func clean(){
            for win in windows{
                win.value.clean()
            }
        }
        
        var attempts = 0
        public func activate(win: Window?, force: Bool = false){
            /*runningApp.activate(options: NSApplication.ActivationOptions.activateAllWindows)
            display.showWindow()*/ //to study
            
            let display = win?.display ?? self.display
                                    
            if display.aboveBy == 0{
                //display.curFrontApp = runningApp // let it know by itself
                display.prevFrontWindow = display.curFrontWindow
                display.curFrontWindow = win
                self.lastWindow = win
                
                if win!.app == nil {
                    #if DEBUG
                        print("DEBUG: check nil win.app")
                    #endif
                    
                    return;
                }
                
                // Force it, i want to see the error
                let openApp = win!.app!.runningApp // ?? runningApp
                display.curFrontApp = openApp
                
                if !force {
                    openApp.activate(options: [])
                }
                else {
                    openApp.activate(options: [.activateAllWindows])
                }
                
                delay(ms: 75){
                    
                    var stop = true
                    
                    if display.aboveByPixels == 0 {
                        
                        // try to force update
                        //display.checkForScreenshot()
                        display.manager.updateFrontmostApp()
                        
                        if display.curFrontApp != openApp && display.mouseIn { // i don't know what i've done.
                            if self.attempts < 2 {
                                self.activate(win: win, force: true)
                                self.attempts += 1
                                stop = false
                            }
                        }
                    }
                    
                    if stop {
                        self.attempts = 0
                        display.activateNewApp = false // don't it ASAP
                    }
                }
            }
            else {
                display.aboveBy = 0
                display.activateNewApp = true

                display.curFrontWindow = nil // try to not trigger the activation of another app during the closing process
                
                display.onActivate(win: win)
            }
        }
        
        var lastOrderedDict : OrderedDictionary<Double, Window>? = nil
        
        public func clearUnusedWindows(){
            if lastOrderedDict != nil {
                var pos = 0
                for win in lastOrderedDict! {
                    if win.value.lockedBy == -1 && pos < self.windows.count - Static.MaximumWindowsSavedPerApp {
                        win.value.app = nil
                        windows.removeValue(forKey: win.value.id)
                        win.value.lastPreview = nil // is this useful?
                    }
                    
                    pos += 1
                }
            }
            else {
                print("it shouldn't arrive here")
            }
        }
        
        public func getWindow(winDict : [String: AnyObject], create: Bool = true) -> Window? {
            let winId = winDict["kCGWindowNumber"] as? Int
            
            var win = windows[winId!]
            
            if(win == nil && create){
                win = Window(app: self, winId: winId!, winDict: winDict)
                                
                // Warn the display of the creation of a new window
                // it delete it from another display if exists
                display.manager.newWindow(win: win!)
                
                //if(disableMultiWindows) { windows.removeAll() } // what the heck
                windows[winId!] = win
            }
            else {
                win?.updateDict(winDict: winDict)
            }
            
            return win
        }
        
        public func getOrderedWindows() -> OrderedDictionary<Double, Window>{
            var dict = OrderedDictionary<Double, Window>()
            
            for (id, win) in self.windows{
                dict[win.avgTime] = win
            }
            
            dict.sort(by: { $0.key < $1.key })
            
            self.lastOrderedDict = dict
            
            return dict
        }
        
        public class Window : Equatable {
            public static func == (lhs: Display.AppWindows.Window, rhs: Display.AppWindows.Window) -> Bool {
                return lhs.id == rhs.id
            }
                   
            public var app : AppWindows?
            public let id : Int
            public var winDict : [String: AnyObject]? = nil
            public var display : Display?
            
            public var winPlane : CapturePreview.CaptureView.WindowPlane? = nil
            public var lockedBy = -1
            
            public var isFakeWin = false
            
            public var lastCii : CIImage?
            public var lastCiiElabored = false
            public var lastCiiPriorityScale : CGFloat = 1
            
            public var lastShotTime : Date = Date(timeIntervalSince1970: 0)
            public var lastPreview : CGImage? = nil
            public var lastRect : NSRect? = nil
            public var previewsList : [Int : CGImage] = [:]
            
            public var avgPixel : NSColor = NSColor.black
            public var avgSelect : Double = 0
            public var avgTime : Double = 0 // NSDate().timeIntervalSince1970
            
            public var appTitle : String = ""
            public var winTitle : String = ""
            
            public var stillExisting = true
            public var inUsing = false
            public var missingFor = 0
            public var appearsInThiSpace = true
            
            public var widthHeightRatio : CGFloat = 1
            
            public var isFullscreen : Bool = false
            public var spaceId : Int = -1
            
            public var layer : Int = -1
            public var layerChanged = false
            
            public var avgLight : CGFloat {
                if isFakeWin {
                    return 0.5
                }
                
                return (avgPixel.redComponent + avgPixel.greenComponent + avgPixel.blueComponent)/3
            }
            
            public func activate(force: Bool = false){
                app?.activate(win: self, force: force)
            }
            
            init(app: AppWindows, winId: Int, winDict: [String: AnyObject]?){
                self.app = app
                self.id = winId
                
                if(winDict != nil){
                    updateDict(winDict: winDict!)
                }
                else {
                    appTitle = app.title
                }
            }
            
            public func clean(){
                if previewsList.count > 0 {
                    self.previewsList = [:]
                    self.lastCii = nil
                }
            }
            
            public func updateDict(winDict : [String: AnyObject]){
                self.winDict = winDict
                
                appTitle = winDict["kCGWindowOwnerName"] as! String
                app?.title = appTitle
                
                winTitle = winDict["kCGWindowName"] as? String ?? ""
                
                let lay = winDict["kCGWindowLayer"] as? Int ?? -1
                self.layerChanged = lay != self.layer
                self.layer = lay
            }
            
            public func deactivate(){
                if previewsList.count > 0{
                    let sortPreviews = previewsList.sorted(by: { $0.key < $1.key })
                    let firstPreview = sortPreviews.first

                    lastPreview = firstPreview!.value
                    
                    self.winPlane?.setMaterial()
                }
            }
            
            public func checkForCii(){
                Static.highPriorityQueue.async { // this may cause problems
                    if(self.lastCiiElabored || self.lastCii == nil || self.display == nil || self.display?.recordingPaused ?? false){
                        return
                    }
                    
                    let _cii = self.lastCii // guard laziness
                    if _cii == nil { // double check
                        return
                    }
                    
                    var cii = _cii!
                    
                    // Resize
                    //let divideBy : CGFloat = 4
                    let curScale = (cii.extent.width + cii.extent.height)/2.5 //more is more definition
                    var rapp : CGFloat = Static.OverscreenSizeDefault / curScale
                    rapp *= self.lastCiiPriorityScale
                    
                    cii = resizeCI(image: cii, scale: rapp)
                    
                    //print("cii size", cii.extent, "scale", rapp)
                    
                    // Convert to CGImage
                    var finalImg = convertToCGImage(image: cii)
                    
                    //everything smooth... https://developer.apple.com/documentation/coreimage/ciroundedrectanglegenerator
                    
                    if(finalImg != nil){
                        
                        if finalImg!.width  < 16384 {
                            //TODO: release previous image? (check for memory leak)
                            self.lastPreview = finalImg
                            self.lastShotTime = Date()
                            
                            let sec = Int(self.lastShotTime.timeIntervalSince1970)
                            if self.previewsList.index(forKey: sec) == nil {
                                self.previewsList[sec] = finalImg
                                
                                if self.previewsList.count > 2{
                                    let sortPreviews = self.previewsList.sorted(by: { $0.key < $1.key })
                                    self.previewsList.removeValue(forKey: sortPreviews.first!.key)
                                }
                            }
                            
                            ///
                            ///# Calculate average pixel
                            /// TODO: move to a function
                            let extent = cii.extent
                            let inputExtent = CIVector(x: extent.origin.x, y: extent.origin.y, z: extent.size.width, w: extent.size.height)
                            let filter = CIFilter(name: "CIAreaAverage", parameters: [kCIInputImageKey: cii, kCIInputExtentKey: inputExtent])!
                            let outputImage = filter.outputImage!
                            
                            var bitmap = [UInt8](repeating: 0, count: 4)
                            self.display?.contextAvgColor.render(outputImage, toBitmap: &bitmap, rowBytes: 4, bounds: CGRect(x: 0, y: 0, width: 1, height: 1), format: .RGBA8, colorSpace: nil)
                            
                            self.avgPixel = NSColor(red: CGFloat(bitmap[0]) / 255, green: CGFloat(bitmap[1]) / 255, blue: CGFloat(bitmap[2]) / 255, alpha: CGFloat(bitmap[3]) / 255)
                            
                            self.display?.contextAvgColor.reclaimResources()
                            
                            self.display?.previewUpdated = true
                            
                            self.winPlane?.setMaterial()
                            
                        } // scala reale
                    }
                    
                    self.lastCiiElabored = true
                    self.lastCii = nil
                }
            }
        }
    }
    
    //@objc var cii : CIImage?
    
    public var mouseIn = false
    
    public func loadScreenInfo(){
        self.frame = screen.frame
        self.sizeFrame = NSRect(origin: NSPoint.zero, size: frame.size)
        self.isMain = screen.displayID == 1
        
        print("screen", screen.displayID, "is main", isMain)
        
        setScreenScaling() // for align other variables (mostly unused)
        
        // Load user settings
        /*self.disable = Static.User.object(forKey: "DisableDisplay_\(self.screen.localizedName)") as? Bool ?? false
        self.activateSide[0] = Static.User.object(forKey: "DisplayEnableLeft_\(self.screen.localizedName)") as? Bool ?? true
        self.activateSide[1] = Static.User.object(forKey: "DisplayEnableRight_\(self.screen.localizedName)") as? Bool ?? true
        self.activateSide[2] = Static.User.object(forKey: "DisplayEnableBottom_\(self.screen.localizedName)") as? Bool ?? true*/
    }
    
    public var isFullscreen : Bool = false
    
    public var currentSpaceId : Int = -1
    var currentSpaceIds : [Int] = []
    public var spaces : [Int: SwifterPlaceholder] = [:]
    var curPlaceholder : SwifterPlaceholder? = nil
    var samePlaceholderSince : Int64 = 0
    
    var recordingPaused = false
    var lastRecorderUpdate : Double = 0
    
    func windowStillExists(winId : Int, windows: [CFDictionary]) -> Bool {
        for win in windows{
            if let dict = win as? [String: AnyObject] {
                let id = dict["kCGWindowNumber"] as? Int ?? -1

                if winId == id {
                    return true
                }
            }
        }
        
        return false
    }
    
    var placeholders : [SwifterPlaceholder] = []
    
    func removeDuplicatePlaceholder(idNew : Int, idOld : Int){
        var pos = -1
        for i in 0 ... placeholders.count - 1 {
            let pid = placeholders[i].id
            if pid == idNew || pid == -1 {
                placeholders[i].close()
                pos = i
                
                if pid != -1{
                    break
                }
            }
        }
        
        if pos >= 0 {
            placeholders.remove(at: pos)
        }
        
        for app in apps {
            for win in app.value.windows {
                if win.value.spaceId == idNew {
                    win.value.spaceId = idOld
                }
            }
        }
    }
    
    //MARK: Display init
    init(manager: DisplaysManager, screen: NSScreen){
        self.screen = screen
        self.manager = manager
        
        self.frame = NSRect.zero
        self.sizeFrame = NSRect.zero
        self.scale = 0
                        
        //Prepare checkForScreenshot variables
        self.lowerTitle = myAppTitle.lowercased()
        
        //MARK: EXCLUDE PROCESSES
        self.excludedApps = [myAppTitle, "loginwindow", "UserNotificationCenter", "Dock", "", "coreautha", "storeuid", "CoreServicesUIAgent", "universalAccessAuthWarn"]
        
        contextAvgColor = CIContext(options: [.workingColorSpace: screen.colorSpace ?? NSColorSpace.deviceRGB])
        
        self.loadScreenInfo()
        
        let definitionMultiplier : Int64 = 45
        var screenshotTick : Int64 = 0
        var mouseMoveMultiplier : Int64 = 0
        var prevMouseSpeed : Double = 0
        
        var prevRecorderUpdate : Double = 0
        var pauseMinMouseSpeed : Double = 0
        
        let timeStart = Date()
                
        Timer.scheduledTimer(withTimeInterval: Static.CheckIfUpdateWindowScreenshotEvery / Double(definitionMultiplier), repeats: true) { timer in
            
            if manager.contentView == nil {
                return
            }
            
            if self.disable || self.screen != NSScreen.main {
                return
            }
            
            var force = self.appSwitched_noScreenshot || self.aboveByPixels > 0
            
            if force || self.mouseSpeed_10s > prevMouseSpeed || self.spaceIsChanging || self.frontMostAppSince < 3 {
                mouseMoveMultiplier = 1
            }
            prevMouseSpeed = self.mouseSpeed_10s
            
            var restartRecording = false
            if self.aboveByPixels < 1 /*|| self.side == 3 (DUNNO Y)*/ {
                
                // Check if mouse is not moving
                if self.mouseIn {
                    let limiter = self.avgSpeed * 0.1 * 0.25
                    let startedFor = Date().timeIntervalSince1970 - timeStart.timeIntervalSince1970
                    
                    if !force && mouseMoveMultiplier > 0 && (self.mouseSpeed_10s < limiter || (self.recordingPaused && pauseMinMouseSpeed > self.mouseSpeed_10s)) && startedFor > 10 {
                        if !self.recordingPaused {
                            print("recorder paused")
                            self.recorderPause()
                            self.recordingPaused = true
                        }
                        
                        pauseMinMouseSpeed = self.mouseSpeed_10s
                    }
                    else {
                        if self.recordingPaused {
                            restartRecording = true
                        }
                    }
                }
                else {
                    self.recordingPaused = false
                }
                
                screenshotTick += 1
                if (screenshotTick % (mouseMoveMultiplier)) != 0{
                    return;
                }
                
                // Check and update current frontmost application
                self.manager.updateFrontmostApp() // onFrontMost: onFrontMost
                
                if(mouseMoveMultiplier < definitionMultiplier){
                    mouseMoveMultiplier += 1
                }
            } else {
                restartRecording = true
            }
            
            if restartRecording && self.recordingPaused {
                print("recorder restarted")
                self.setRecorderProfile(lowProfile: true)
                self.recordingPaused = false
                self.checkWindowStatus()
            }
            
            if prevRecorderUpdate >= self.lastRecorderUpdate{
                return
            }
            prevRecorderUpdate = self.lastRecorderUpdate
            
            if self.recordingPaused {
                return
            }
                        
            if self.checkForScreenshot(forceShot: true) {
                self.appSwitched_noScreenshot = false
            }
        }
    }
        
    var appSwitched_noScreenshot = false
    func appSwitched(to: NSRunningApplication?){
        if(curFrontApp == curFrontWindow?.app?.runningApp){
            curFrontWindow?.deactivate()
        }
        
        self.appSwitched_noScreenshot = true
    }
    
    //MARK: Frontmost App Screenshot
    let myAppTitle = "MakeItHome"
    let lowerTitle : String
    let excludedApps : [String]
    
    let contextAvgColor : CIContext
    var lastAppWin : AppWindows.Window? = nil
    var winnerRect : NSRect = NSRect.zero
    var prevWinnerRect : NSRect = NSRect.zero
    
    var lastAllWins : [CFDictionary] = []
    
    public var previewUpdated = false
    
    public var frontMostAppSince : Int64 = 0
    
    public func checkForScreenshot(forceShot: Bool = false) -> Bool{
        if !mouseIn{ // if mouse is not in display
            return false
        }
        
        //self.isFullscreen = false
        
        if self.activateNewApp {
            return false
        }
        
        // Disable in case of top widget zone
        if self.side == 3 {
            return false
        }
                        
        if(self.curFrontApp != nil && (self.curFrontApp?.isActive ?? false && !(self.curFrontApp?.isHidden ?? true) || aboveBy > 0)){
            
            var winOwnerName : String?
            
            func getWindow(winId: Int) -> AppWindows.Window? {
                for app in self.apps {
                    let win = app.value.windows[winId]
                    
                    if win != nil {
                        return win
                    }
                }
                
                return nil
            }
            
            for app in self.apps {
                if app.value.runningApp != self.curFrontApp {
                    app.value.timeSelection = 0
                }
                else {
                    app.value.timeSelection += 1
                }
            }
            
            let pid = self.curFrontApp!.processIdentifier
            let name = self.curFrontApp!.localizedName
            
            var appWins : AppWindows? = self.apps[pid]
            if(appWins == nil){
                appWins = AppWindows(runningApp: self.curFrontApp!, display: self)
                self.apps[pid] = appWins
            }
            
            var winner : [String: AnyObject]? = nil
            var winnerLayer = -1
            var winnerBehindSomething = false
            
            func rectContainsWinnerRect(rect : CGRect) -> Bool {
                let marginError : CGFloat = 3
                
                var contains = rect.minX - marginError <= winnerRect.minX && rect.maxX + marginError >= winnerRect.maxX
                contains = contains && rect.minY - marginError <= winnerRect.minY && rect.maxY + marginError >= winnerRect.maxY
                return contains
            }
            
            //var spaceHolder : [String: AnyObject]? = nil
            var spaceHolderId = -1
            var sameSpaceHolderId : Int = 0
            
            func cycleWindows(windows : [CFDictionary]?){
                
                winnerRect = NSRect.zero // set to default
                
                var aheadRects = [NSRect]()
                
                // Menu Bar Height checker
                var removeMenuHeight : CGFloat = 0
                
                let menuHeight = NSApplication.shared.menu!.menuBarHeight
                if menuHeight > 30 {
                    removeMenuHeight = menuHeight
                }
                
                var spaceHolderFound = -1
                
                func sortWinByLayer(_ w1: CFDictionary, _ w2: CFDictionary) -> Bool {
                    let dw1 = w1 as? [String: AnyObject]
                    let dw2 = w2 as? [String: AnyObject]
                    
                    let w1l = dw1?["kCGWindowLayer"] as? Int ?? -1
                    let w2l = dw2?["kCGWindowLayer"] as? Int ?? -1
                    
                    return w1l > w2l
                }
                
                let orderedWindows = windows //windows?.sorted(by: sortWinByLayer)
                
                var winnerTitle = ""
                var _curSpaceholder : SwifterPlaceholder?
                
                for win in orderedWindows!{
                    if let dict = win as? [String: AnyObject] {
                        
                        //print(dict)
                        
                        /* Notes:
                            winLayer => more is higher, more is ahead
                                the dict is order by the higher to the back
                         */
                        
                        // Go ahead
                        let winPid = dict["kCGWindowOwnerPID"] as? Int
                        winOwnerName = dict["kCGWindowOwnerName"] as? String
                        //let winStore = dict["kCGWindowStoreType"] as? Int
                        let winOnScreen = dict["kCGWindowIsOnscreen"] as? Int ?? 0
                        let winLayer = dict["kCGWindowLayer"] as? Int ?? -1
                        let winTitle = dict["kCGWindowName"] as? String
                        let winId = dict["kCGWindowNumber"] as? Int ?? -1
                        
                        let bounds = dict["kCGWindowBounds"] as! NSDictionary
                        
                        let width = CGFloat(truncating: (bounds["Width"] as? Int ?? 0) as NSNumber)
                        let rect = CGRect(
                            x: CGFloat(truncating: (bounds["X"] as? Int ?? 0) as NSNumber),
                            y: CGFloat(truncating: (bounds["Y"] as? Int ?? 0) as NSNumber), // this to respect CGRect principles
                            width: width,
                            height: CGFloat(truncating: (bounds["Height"] as? Int ?? 0) as NSNumber)
                        )
                        
                        let appWin = getWindow(winId: winId)
                        appWin?.stillExisting = true
                        appWin?.missingFor = 0
                        appWin?.appearsInThiSpace = !spaceIsChanging
                        
                        let winOwnerChecked = (winOwnerName == name || pid == winPid!)
                        
                        if winLayer == 0 && !excludedApps.contains(winOwnerName ?? "") {
                            // In case of emergency break the glass: https://developer.apple.com/documentation/appkit/nswindowwillenterfullscreennotification
                            if rect.height >= (screen.frame.height-removeMenuHeight) && rect.width >= screen.frame.width {
                                self.isFullscreen = true
                            }
                        }
                        
                        let thisTimeHasTitle = winner != nil && winnerTitle == "" && !(winTitle ?? "").isEmpty
                        
                        if winTitle == lowerTitle && winOnScreen == 1 {
                            // found placeholder panel
                            spaceHolderId = winId
                            
                            if self.currentSpaceId == winId {
                                // ...
                            }
                            else {
                                print("space holder found ", spaceHolderFound, winId)
                                
                                if spaceHolderFound == -1{
                                    spaceHolderFound = winId
                                }
                                else {
                                    spaceHolderFound = -2
                                }
                            }
                        }
                        else if (winner == nil || thisTimeHasTitle) && (winOnScreen == 1 && self.frame.contains(CGPoint(x: rect.origin.x, y: self.frame.minY)) && !excludedApps.contains(winOwnerName ?? "") && winOwnerChecked && (rect.width+rect.height)/2 > 150)/* window must be enough big */{
                            // winOnScreen == Int(self.screen.displayID)
                            
                            // Check if it's showed elsewhere
                            let changeDisplay = manager.windowExistingElsewhere(display: self, winId: winId)
                            if(changeDisplay != nil){
                                changeDisplay?.removeWindows(id: winId)
                            }
                            
                            //print(winnerRect)
                            
                            var biggerThanPreviousWinner = winner == nil || rectContainsWinnerRect(rect: rect)
         
                            // Check if winner is contained by this window
                            /*if winner != nil{ // these lines show chrome mini banners...
                                if(!rect.contains(winnerRect)){
                                    biggerThanPreviousWinner = false
                                }
                            }*/
                            
                            if(!biggerThanPreviousWinner){
                                continue;
                            }
                            
                            //MARK: Front window is behind something?
                            //for example a context menu, or the Applications popup
                            winnerBehindSomething = false
                            
                            let winnerSide = (rect.height + rect.width)/2
                            for aheadRect in aheadRects {
                                
                                let intersection = NSIntersectionRect(rect, aheadRect)
                                
                                let isInside =
                                    rect.contains(CGPoint(x: aheadRect.minX, y: aheadRect.minY)) &&
                                    rect.contains(CGPoint(x: aheadRect.maxX, y: aheadRect.maxY))
                                
                                let aheadSide = (intersection.height + intersection.width)/2
                                                    
                                if !isInside || aheadSide < (winnerSide/10){
                                    continue;
                                }
                                
                                //var contains = winnerRect.intersects(aheadRect) || winnerRect.contains(aheadRect.origin)
                                                                
                                winnerBehindSomething = true
                                appWins?.timeSelection = 0
                            }
                            
        
                            winner = dict
                            winnerLayer = winLayer
                            winnerRect = rect
                            
                            winnerTitle = winTitle ?? ""
                            //appWin?.lastRect = rect
                            
                        }
                        else if !winOwnerChecked && winner == nil{
                            if rect != self.screen.frame{
                                aheadRects.append(rect)
                            } // else Dock
                        }
                    }
                }
                
                //MARK: spaceHolder MGMT
                samePlaceholderSince += 1
                
                if (spaceHolderId == -1 || spaceHolderFound > -1 || spaceHolderFound == -2) {
                    
                    if true && (!spaceIsChanging && !activateNewApp) && spaceHolderId >= 0 && spaceHolderId != currentSpaceId {
                        DispatchQueue.main.async {
                            for placeholder in self.placeholders {
                                if self.curPlaceholder?.id != spaceHolderId {
                                    if placeholder.numWindows == self.curPlaceholder?.numWindows && spaceHolderId != self.currentSpaceId {
                                        self.removeDuplicatePlaceholder(idNew: spaceHolderId, idOld: self.currentSpaceId)
                                        spaceHolderId = self.currentSpaceId
                                        print("duplicate space holder removed")
                                    }
                                }
                            }
                        }
                    }
                    
                    if self.currentSpaceId != spaceHolderId || (spaceHolderFound < 0 && self.currentSpaceId > 0){
                        if !currentSpaceIds.contains(spaceHolderId){
                            samePlaceholderSince = 0
                        }
                        
                        sameSpaceHolderId = spaceHolderId
                    }
                    
                    // register the space holder in the list of "current space holders"
                    // this is an ugly but realistic approach. the space holder managament is a mess
                    if spaceHolderId > 0 {
                        if !currentSpaceIds.contains(spaceHolderId){
                            currentSpaceIds.append(spaceHolderId)
                        }
                    }
                    
                    
                    if spaceHolderFound >= 0 {
                        self.currentSpaceId = spaceHolderId
                        print("unique space holder found", spaceHolderId)
                    }
                    
                    //spaceHolderFound = -2 // force "space changing" status (it means that two space holders were found)
                    if spaceHolderFound == -2 && !self.spaceIsChanging {
                        print("space changing")
                        self.spaceIsChanging = true
                        self.spaceInChanging()
                    }
                    
                    curPlaceholder = nil
                }
                
                if self.spaceIsChanging {
                    if samePlaceholderSince > Static.WaitAfterSpaceChange {
                        self.spaceIsChanging = false
                        print("space no more changing due to timeout")
                    }
                    else {
                        print("space is still changing because of ", samePlaceholderSince, " <= ", Static.WaitAfterSpaceChange)
                    }
                }
                else {
                    if curPlaceholder == nil {
                        for placeholder in placeholders {
                            if(placeholder.id == -1){
                                placeholder.id = currentSpaceId
                            }
                            
                            if(placeholder.id == currentSpaceId){
                                curPlaceholder = placeholder
                                self.spaces[currentSpaceId] = self.curPlaceholder
                                break;
                            }
                        }
                    }
                }
                
                if spaceHolderFound == -1 {
                    if !self.spaceIsChanging && !self.activateNewApp{
                        for win in windows!{
                            if let dict = win as? [String: AnyObject] {
                                let winId = dict["kCGWindowNumber"] as? Int ?? -1
                                
                                let appWin = getWindow(winId: winId)
                                appWin?.spaceId = curPlaceholder?.id ?? currentSpaceId // update every time
                            }
                        }
                    }
                }
                
                if spaceHolderFound >= 0 {
                    self.spaceIsChanging = false
                }
            }
            
            //Check if application is still running
            for app in self.apps {
                if(app.value.runningApp.isTerminated){
                    self.apps.removeValue(forKey: app.key)
                    app.value.destroyWindows(force: true) // it's already dead
                }
                else {
                    for win in app.value.windows {
                        win.value.stillExisting = false
                        win.value.inUsing = false
                        win.value.appearsInThiSpace = false
                    }
                }
            }
            
            var windows = CGWindowListCopyWindowInfo([CGWindowListOption.optionOnScreenOnly, .excludeDesktopElements], kCGNullWindowID) as? [CFDictionary]
            
            for aWin in lastAllWins{
                windows?.insert(aWin, at: 0)
            }
            
            cycleWindows(windows: windows)
            
            if spaceIsChanging {
                return false
            }
            
            curPlaceholder?.numWindows = windows!.count
            
            // If the new frame is bigger, force the shot
            var vForceShot = forceShot
            if !vForceShot && (winnerRect.width * winnerRect.height) > (prevWinnerRect.width*prevWinnerRect.height) {
                vForceShot = true
            }
            prevWinnerRect = winnerRect
            
            //MARK: check if it's time to update
            if(lastAppWin != nil && (lastAppWin!.app?.runningApp == self.curFrontApp)){
                let nowUnix = Double(Date().timeIntervalSince1970)
                lastAppWin!.avgSelect += 1
                lastAppWin!.avgTime = nowUnix // ((nowUnix+lastAppWin!.avgSelect) + lastAppWin!.avgTime)/2
                
                lastAppWin!.app!.avgSelect += 1
                lastAppWin!.app!.avgTime = nowUnix // ((nowUnix+lastAppWin!.app!.avgSelect) + lastAppWin!.app!.avgTime)/2
                
                // Update image if it's older than 4 seconds
                if false && (!vForceShot && nowUnix - lastAppWin!.lastShotTime.timeIntervalSince1970 < (Static.UpdateWindowScreenshotAfter/self.batteryDivider)){
                    return false
                }
                
                //self.isFullscreen = lastAppWin!.isFullscreen
            }
            
            // Remove no more existing windows
            if !spaceIsChanging && samePlaceholderSince % 3 == 2 { // disabled, because it delete existing windows (anyway, are saved maximum 2 windows)
                var allWins = windows
                
                // divided because you can false it easily
                allWins = CGWindowListCopyWindowInfo([CGWindowListOption.optionAll], kCGNullWindowID) as? [CFDictionary]
                
                if false {
                    var newAllWins : [CFDictionary] = []
                    
                    var allOwners : [String] = []
                    for win in allWins!{
                        let wDict = win as! [String:AnyObject]
                        let wOwner = wDict["kCGWindowOwnerName"] as? String
                        let wName = wDict["kCGWindowName"] as? String
                        
                        //print(wOwner, wName)
                        allOwners.append(wOwner ?? "")
                        
                        if wOwner == "Control Centre"{
                            newAllWins.append(win)
                        }
                        
                        if wOwner == "Universal Control"{
                            newAllWins.append(win)
                        }
                        
                        if false {
                            if wOwner == "Dock"{
                                lastAllWins.append(win)
                            }
                        }
                    }
                    
                    lastAllWins = newAllWins
                }
                                
                if allWins != nil {
                    for app in self.apps{
                        for win in app.value.windows{
                            if !win.value.stillExisting && !windowStillExists(winId: win.value.id, windows: allWins!) {
                                //win.value.missingFor += 1
                                if win.value.missingFor > 1 || true { // double check
                                    app.value.windows.removeValue(forKey: win.key)
                                    print("window removed ", win.value.appTitle)
                                }
                            }
                        }
                    }
                }
            }
            
            
            /*if(winner != nil){
             let windowsAbove = CGWindowListCopyWindowInfo(CGWindowListOption.optionOnScreenBelowWindow, CGWindowID(appWinner!.id)) as? [CFDictionary]
             
             cycleWindows(windows: windowsAbove)
             }*/
            
            //MARK: Winner window
            if winner != nil {
                
                let appWin = appWins!.getWindow(winDict: winner!)!
                
                // Check for fullscreen
                let isFullSize = winnerRect.size.width >= self.frame.width && winnerRect.size.height >= self.frame.height - self.menuHeight
                                
                // "isFullscreen" check
                let isFinderDragging = appWin.appTitle == "Finder" && appWin.winTitle == ""
                
                if !isFinderDragging{
                    self.isFullscreen = isFullSize
                }
                
                if self.isFullscreen{
                    return false
                }
                
                if !self.isFullscreen && !spaceIsChanging{
                    if self.currentSpaceId == -1 {
                        print("creating new SwifterPlaceholder")
                        let winHolder = SwifterPlaceholder()
                        winHolder.numWindows = windows!.count
                        winHolder.show()
                        
                        self.curPlaceholder = winHolder
                        self.placeholders.append(winHolder)
                    }
                }
                                
                appWin.app?.runningApp = self.curFrontApp! // better update it(?)
                lastAppWin = appWin               
                
                for app in self.apps {
                    if app.value.id != appWin.app?.id {
                        app.value.clean()
                    }
                }

                prevFrontWindow = curFrontWindow
                
                self.curFrontWindow = appWin
                appWin.app?.lastWindow = appWin
                
                appWin.isFullscreen = self.isFullscreen
                
                if !self.spaceIsChanging && !self.activateNewApp && self.aboveBy == 0  {
                    if currentSpaceId > 0 && appWin.spaceId != currentSpaceId {
                        appWin.spaceId = currentSpaceId
                        print("setted new spaceId")
                    }
                }
                
                appWin.inUsing = true
                
                if(winnerBehindSomething){
                    return false
                }
                
                if(self.isFullscreen){
                    appWin.lastShotTime = Date()
                }
                else if forceShot || (appWins!.timeSelection > Static.WindowScreenshotAfterAttempts) { // - (forceShot ? 2 : 0)
                    /*if(studying) {
                     print ("--- LIST ---")
                     for (k, v) in winner!{
                     //print("dict", k, v)
                     }
                     }*/
                    
                    if(self.isMain){
                        // it's here becase we have to be sure that the "shared" menu is the main one
                        // (but it's still unstable, because it could be still selected an app on other display)
                        manager.mainBarHeight = NSApplication.shared.menu!.menuBarHeight
                        manager.mainScale = self.scale
                    }
                    
                    let bounds = winner!["kCGWindowBounds"] as! NSDictionary
                    
                    DispatchQueue.main.async {
                        Task{
                            if #available(macOS 12.3, *){
                                
                                let screenRecorder = self.manager.contentView!.store.screenRecorder as! ScreenRecorder
                                let lf = screenRecorder.lastFrame
                                
                                if(lf?.displayID == self.screen.displayID){
                                    
                                    if(lf != nil){                                        
                                        Static.highPriorityQueue.async {
                                            let context = CIContext()
                                            var cii = CIImage(cvPixelBuffer: lf!.pixelBuffer!)
                                            
                                            let ps = screenRecorder.priorityScale
                                            let scale : CGFloat = self.scale * ps
                                            let imgScale : CGFloat = cii.extent.width / self.frame.width
                                            self.scaleCapture = imgScale * ps
                                            
                                            let cgHeight = CGFloat(truncating: (bounds["Height"] as! Int) as NSNumber)
                                            var thisHeight = (cgHeight*imgScale)
                                            
                                            let cgY = CGFloat(truncating: (bounds["Y"] as! Int) as NSNumber)
                                            
                                            var thisY = cgY + cgHeight
                                            
                                            //TODO: create a checking window
                                            //thisY = thisY + self.frame.minY // in case of problems try to invert this
                                            thisY = self.frame.height - thisY // with this one
                                            
                                            //TODO: I absolutely don't know why -- check sometimes you need it
                                            if(!self.isMain && false){
                                                thisY += self.manager.mainBarHeight - (NSApplication.shared.menu!.menuBarHeight/self.manager.mainScale) // self.scale
                                                
                                                /*if(cgY < 0){
                                                 thisY = cgY * -1
                                                 }*/
                                            }
                                            
                                            thisY = thisY * imgScale
                                            
                                            let cgWidth = CGFloat(truncating: (bounds["Width"] as! Int) as NSNumber)
                                            var thisWidth = cgWidth*imgScale
                                            
                                            appWin.widthHeightRatio = cgWidth / cgHeight
                                            
                                            let cgX = CGFloat(truncating: (bounds["X"] as! Int) as NSNumber)
                                            var thisX = (cgX - self.frame.minX) * scale
                                            
                                            var rect = CGRect(
                                                x: thisX,
                                                y: thisY,
                                                width: thisWidth,
                                                height: thisHeight
                                            )
                                            
                                            var backingRect = CGRect(
                                                x: cgX,
                                                y: cgY,
                                                width: cgWidth,
                                                height: cgHeight
                                            )
                                            
                                            if(!cii.extent.contains(NSPoint(x: rect.midX, y: rect.midY))){
                                                print("cii.extent", cii.extent)
                                                return
                                            }
                                            
                                            //print("capturing rect", rect, appWin.appTitle, appWin.avgTime)
                                            //print(backingRect, self.frame.minY, self.frame.maxY)
                                            
                                            cii = cii.cropped(to: rect)
                                            
                                            appWin.display = self
                                            appWin.lastRect = backingRect
                                            appWin.lastCii = cii
                                            appWin.lastCiiElabored = false
                                            appWin.lastCiiPriorityScale = screenRecorder.priorityScale
                                        }
                                    }
                                }
                            }
                        }
                    }
                    
                }
            }
        }
        
        return true
    }
    
    public func newSet(){
        DispatchQueue.main.async {
            let contentView = self.manager.contentView!
            //let screenRecorder = contentView.store.screenRecorder
                        
            if !self.disable{
                                                
                self.mouseScarf = NSEvent.mouseLocation
                
                self.hideWindow()
                self.setRefresh()
                
                //self.setCurDesktopImage()
                
                /*self.lastAccumulated = CGPoint.zero
                self.maxAccumulate = 0.0
                self.compensateAboveByCursor = CGPoint.zero
                self.accumulateAvg = CGPoint.zero
                self.maxAccumulate = 0.1
                self.avgSideSpeed = 1
                self.avgSpeed = 1
                self.removeAccumulate = CGPoint.zero
                self.alterMouse = 0
                self.maxSpeed = 1
                self.absAccDelta = CGPoint.zero*/
            }
        }
    }
    
    ///
    ///# Satellites
    ///
    
    func calcAboveBy(side: Int, point: NSPoint) -> CGFloat{
        let iX = side-2
        let iY = side%2

        var res : CGFloat = 0
        
        let ab : CGFloat = 0 // aboveByPixels
        
        if(iX < 0){
            if(iY == 0){
                res = (point.x+ab) //- self.frame.minX
            }
            else {
                res =  self.frame.width - (point.x+ab)
            }
        }
        else {
            if(iY == 0){
                res = (point.y+ab) //- self.frame.minY
            }
            else {
                res = self.frame.height - (point.y+ab)
            }
        }
        
        //res /= self.scale
        return res
    }
    
    func checkSide(point: NSPoint) -> Int{
        for l in 0...3 { // 3 is the top, and it's excluded
            let cab = self.calcAboveBy(side: l, point: point)
            if(cab < activateOnPixelsLimit){
                return l
            }
        }
        
        return -1
    }
    
    func pointForecast(from: NSPoint, to: NSPoint, weight : CGFloat = 1) -> NSPoint{
        let dX = (to.x - from.x)*weight
        let dY = (to.y - from.y)*weight
        
        let res = NSPoint(x: to.x+dX, y: to.y+dY)
        return res
    }
    
    func multPoint(point: CGPoint, mul: CGFloat = -1) -> CGPoint{
        return CGPoint(x: mul*point.x, y: mul*point.y)
    }
    
    func getPointAccumulated(point: CGPoint, reset : Bool = true, accDelta: CGPoint = CGPoint.zero) -> CGPoint{
        var cAccDelta = accDelta
        if(cAccDelta == CGPoint.zero){
            cAccDelta = accumulatedDelta
        }
        
        var nPoint = point.clone
                
        nPoint.x += cAccDelta.x
        nPoint.y += cAccDelta.y
        
        if(reset){
            lastAccumulated = accumulatedDelta.clone
            accumulatedDelta = CGPoint.zero
        }
        
        return nPoint
    }
    
    ///
    ///# Accumulation
    ///
    //
    //TODO: DEPRECATE
    public func updateAccumulation(x: CGFloat, y: CGFloat){
        if(x == 0 && y == 0){
            return
        }
        
        let s = abs((x+y)/2)
        if(s > maxAccumulate){
            maxAccumulate = s
        }
                            
        self.accumulatedDelta.x += x
        self.accumulatedDelta.y  += y
    }
    
    public func compensateAboveBy(point: CGPoint) -> CGPoint {
        var p = point.clone
        var a : Double = aboveByPixels
        
        if(side % 2 == 0){
            a *= -1
        }
        
        if(side < 2){
            p.x += a
        }
        else {
            p.y += a
        }
        
        return p
    }
    
    ///
    //MARK: Window functions
    ///
    ///
    
    var ready = false
    var curDesktopUrl : URL? = URL(string: "zero")
    func updatDesktopImage(){

        var deskUrl : URL? = nil // MyAppleEvents.getCurrentWallpaperURL()
        
        if deskUrl == nil {
            let deskUrlFunc = NSWorkspace.desktopImageURL(NSWorkspace.shared)
            deskUrl = deskUrlFunc(screen)
        }
        
        // temporary solution: check if img is too small, and check if desktop is in dark mode
        if deskUrl?.absoluteString.contains("System/Library/Desktop%20Pictures/Solid%20Colors/") ?? false {
            deskUrl = nil
        }
        
        if(deskUrl != curDesktopUrl){
            
            func setDefaultWallpaper(){
                var url = Bundle.main.url(forResource:"wallpaper", withExtension:"jpeg")
                
                if isDarkMode() {
                    url = Bundle.main.url(forResource:"wallpaperDark", withExtension:"jpeg")
                }
                
                if url != nil {
                    manager.curDekstop = CIImage(contentsOf: url!)
                }
                else {
                    return
                }
            }
            
            if(deskUrl == nil){
                setDefaultWallpaper()
            }
            else {
                manager.curDekstop = CIImage(contentsOf: deskUrl!)
                
                if manager.curDekstop != nil {
                    manager.curDekstop = resizeCI(image: manager.curDekstop!, scale: 0.3) // pretty arbitrary
                }
                else {
                    setDefaultWallpaper()
                }
            }
            
            if manager.curDekstop != nil{
                manager.curDekstop = blurredCI(image: manager.curDekstop!, radius: 20)
                
                if(manager.capturePreview != nil){
                    curDesktopUrl = deskUrl
                    setCurDesktopImage()
                }
            }
            
            ready = true
        }
    }
    
    func setCurDesktopImage(){
        if(manager.curDekstop != nil){
            if #available(macOS 12.3, *){
                let background = (manager.capturePreview as? CapturePreview)?.captureView.scene!.background
                background?.contents = convertToCGImage(image: manager.curDekstop!)
                background?.contentsTransform = SCNMatrix4MakeScale(0.5,0.5,0.5)
            }
        }
    }
    
    func releaseSceneKitReferences(){
        for (_, app) in self.apps{
            for (_, win) in app.windows{
                win.winPlane = nil
            }
        }
    }
    
    func setRecorderProfile(lowProfile: Bool){
        DispatchQueue.main.async{
            if #available(macOS 12.3, *){
                let screenRecorder = (self.manager.contentView?.store.screenRecorder as! ScreenRecorder)
                screenRecorder.windowShowing = !lowProfile
                
                Task{
                    await screenRecorder.start(lowProfile: lowProfile, display: self.scDisplay as? SCDisplay)
                }
            }
            
            self.setRefresh()
        }
    }
    
    func recorderPause(){
        if #available(macOS 12.3, *){
            DispatchQueue.main.async{
                let screenRecorder = (self.manager.contentView?.store.screenRecorder as! ScreenRecorder)
                Task{
                    await screenRecorder.stop()
                }
            }
        }
    }
    
    func checkWindowStatus(reclose: Bool = true) -> Bool{
        let status = Static.mainWindowClosed
        
        if(Static.mainWindowClosed){
            Static.mainWindow?.windowController?.showWindow(nil)
            Static.mainWindowClosed = false
            
            // Try to force redraw
            self.showWindow()
            
            if reclose {
                delay(ms: 1){
                    if self.aboveByPixels == 0 {
                        self.hideWindow()
                    }
                }
            }
        }
        
        return status
    }
    
    //MARK: Window show/hide
    var frontWinBefore : AppWindows.Window?
    func showWindow(){
        
        if checkWindowStatus(reclose: false){
            return
        }
        
        setScreenScaling()
        
        manager.window?.setContentSize(frame.size)
        
        if #available(macOS 12.3, *){
            if(self.side != 3){
                if false { // if enable async setScreensApps
                    Static.highPriorityQueue.async {
                        (self.manager.capturePreview as? CapturePreview)?.captureView.setScreenApps(display: self)
                    }
                }
                else {
                    (self.manager.capturePreview as? CapturePreview)?.captureView.setScreenApps(display: self)
                }
            }
        }
        
        let dontPrioritizeRunningApp = spaceIsChanging || curFrontWindow?.app?.runningApp != NSRunningApplication.current
        
        //change dimension
        //manager.window?.setFrame(frame, display: true)
        manager.window?.setFrame(NSRect(origin: NSPoint(x:self.screen.frame.minX, y: self.screen.frame.minY), size: self.frame.size), display: true)
              
        //TODO: correct this condition in case of space-changing or prioritization issues
        if !Static.screenWake && (dontPrioritizeRunningApp && self.side != 3) {
            self.manager.window?.makeFirstResponder(Static.AppExtensionWebView)
            manager.window?.makeKeyAndOrderFront(nil)
        }
        else {
            self.manager.window?.makeFirstResponder(Static.TopBarWebView)
            manager.window?.makeKeyAndOrderFront(nil)
            Static.screenWake = false
        }
        
        // Delay because it use to slow down performances for some reason
        delay(ms: 100){
            NSApplication.shared.activate(ignoringOtherApps: true)
        }
        
        Static.mainWindowFirstShow = true
        
        windowHidden = false
        toBeRecorded = true
        Static.mainWindowInUsing = true
        Static.lastUsing = Date().timeIntervalSince1970
        
        DispatchQueue.main.async{
            self.manager.contentView!.store.setWindowsProperties()
        }
        
        manager.window?.level = .mainMenu + 1
        manager.window?.isOpaque = true
        
        frontWinBefore = dontPrioritizeRunningApp ? nil : curFrontWindow
        
        setRecorderProfile(lowProfile: false)
        
        //(manager.capturePreview as? CapturePreview)?.captureView.showed()
        
        print("show on window no", self.screen.displayID)
    }
    
    func setRefresh(){
        //TODO: Deprecate it
        DispatchQueue.main.async{
            self.manager.contentView?.refresh = true
            self.manager.contentView!.store.setWindowsProperties()
        }
    }
    
    func hideWindow(){
        if windowHidden{
            return
        }
        
        if(!debugDontHide && !self.spaceIsChanging){ // buh
            manager.window?.orderBack(nil)
            NSApplication.shared.deactivate()
        }
        
        //TODO: check if spaceChanged is still an useful condition
        if(!spaceIsChanging && !activateNewApp){
            if(curFrontWindow != nil /*&& frontWinBefore == curFrontWindow*/ && curFrontWindow?.spaceId == currentSpaceId){
                curFrontWindow?.activate()
            }
            /*else {
                curFrontApp?.activate(options: NSApplication.ActivationOptions.activateAllWindows)
            }*/
        }
        
        //curFrontApp = nil
        //curFrontWindow = nil
        
        windowHidden = true
        Static.mainWindowInUsing = false

        //manager.window?.b
        //manager.window?.setContentSize(NSSize(width: 1, height: 1))
        manager.window?.isOpaque = true //y?
        manager.window?.close()
        
        if #available(macOS 12.3, *){
            if(self.side != 3){
                (manager.capturePreview as? CapturePreview)?.captureView.unset()
            }
        }
        
        DispatchQueue.main.async{
            
            if #available(macOS 12.3, *){
                (self.manager.contentView?.store.screenRecorder as! ScreenRecorder).windowShowing = false
                
                /*Task{
                 await self.manager.contentView!.store.screenRecorder.start(lowProfile: true, display: self.scDisplay)
                 }*/
                
                // Forced operation for solving the "screen not updated issue"
                // it starts automatically screen recording in low profile
                Timer.scheduledTimer(withTimeInterval: 0.5, repeats: false) { timer in
                    if self.aboveByPixels == 0 && self.side == -1 {
                        if Static.ReloadScreenRecorderDisplay {
                            self.manager.screenRecorderSelectDisplay()
                        }
                        else {
                            self.setRecorderProfile(lowProfile: true)
                        }
                        
                        //(self.manager.capturePreview as? CapturePreview)?.captureView.hidden()
                        (self.manager.capturePreview as! CapturePreview).forgiveAndForget()
                    }
                }
            }
        }
    }
    
    public func forcePosition(){
        if(removeAccumulate == CGPoint.zero){
            return
        }
        
        var moveTo = NSEvent.mouseLocation
                
        moveTo.x -= removeAccumulate.x
        moveTo.y -= removeAccumulate.y
        removeAccumulate = CGPoint.zero
        
        moveTo.y = frame.height - moveTo.y
        
        CGDisplayHideCursor(1)
        CGWarpMouseCursorPosition(moveTo)
        CGDisplayShowCursor(1)
    }
    
    ///
    //MARK: Main status
    ///
    
    ///# fullOverscreenMode and outFullOverscreenMode possible cause of publishing async problems
    var fullOverscreenMode = false
    func onFullOverscreenMode(){
        if !fullOverscreenMode {
            Task.init {
                await Static.storeView?.view?.vars.overlaySizeY = self.frame.height
                await Static.storeView?.view?.vars.overlayOffsetY = 0;
            }
            fullOverscreenMode = true
        }
    }
    
    func outFullOverscreenMode(){
        if fullOverscreenMode {
            Task.init {
                await Static.storeView?.view?.vars.navOverlayOffsetY = 10000;
            }
            
            fullOverscreenMode = false
        }
    }
    
    func setScreenScaling(){
        // Update constants to scale factor
        self.scale = screen.backingScaleFactor
        
        // is it a good idea?
        if(true){
            let newPoint = screen.convertRectToBacking(CGRect(x: 1, y: 0, width: 1, height: 1))
            self.scale = Double(newPoint.origin.x)
        }
        
        prevMouseAboveBy = activateOnPixelsLimit
        //overscreenSize *= scale // reflect about this
    }
    
    var disable = false
    
    var spaceIsChanging : Bool = false
    var spaceChangedWin : AppWindows.Window?
    
    func spaceDidChange(){
        spaceChangedWin = curFrontWindow
        
        aboveBy = 0
        aboveByPixels = 0
        
        curPlaceholder = nil
        currentSpaceId = -1
        samePlaceholderSince = 0
        
        self.spaceIsChanging = false
        
        self.currentSpaceIds = []
    }
    
    func spaceInChanging(){
        prevFrontWindow?.deactivate()
        curFrontWindow?.deactivate()
        
        aboveBy = 0
    }
    
    var justArrived = false
    
    let useRelativePointer = false
    
    let sensivityBaseConstant = 0.002    
    var scarfWeight : CGFloat = 0.002 * Static.Sensivity
    var activateOnPixelsLimit : CGFloat = 35
    var moveOnPixels : CGFloat = 0
    let decelerateAboveBy : CGFloat = 0.25
    let slowDownOf : CGFloat = 0.75
    let activateOnPixelsLimitSlowering : CGFloat = 20
        
    var mouseInsideCurWin = false
    
    var mouseScarf : NSPoint = NSPoint.zero
    var side : Int = -1
    var aboveByPixels : CGFloat = 0
    var aboveBy : CGFloat = 0
    var forceAboveBy : CGFloat = 0
    
    public var prevAboveByPixels : CGFloat = 0
    
    var prevMouse : CGPoint = CGPoint.zero
    var prevRelMouse : CGPoint = CGPoint.zero
    var prevMouseAboveBy : CGFloat = -1 // setted in init
    var lastMouseChanged = false
    
    var accMouseMove = CGPoint.zero
    
    var accumulatedDelta = CGPoint.zero
    var lastAccumulated = CGPoint.zero
        
    let accumulateWeight : CGFloat = 60
    let avgWeight : CGFloat = 60 * 60
    var accumulateAvg : CGPoint = CGPoint.zero
    var maxAccumulate : CGFloat = 0.1
    var avgSideSpeed : Double = 1
    var avgSpeed : Double = 1
    var avgAcceleration : Double = 0
    var removeAccumulate : CGPoint = CGPoint.zero
    var alterMouse = 0
    var maxSpeed : CGFloat = 1
    var absAccDelta : CGPoint = CGPoint.zero
    
    var mouseSpeed : CGFloat = 0
    var mouseSpeed_10s : CGFloat = 0
    
    var compensateAboveByCursor : CGPoint = CGPoint.zero
    
    let slowDownMinSpeed = 0.01
    let slowDownMinSpeedRatio : CGFloat = 0.75 // from 0 to 1
    
    var toBeRecorded : Bool = false //TODO: DEPRECATE (probably also recording)
    var recording : Bool = false
    
    var windowHidden : Bool = false
    var curFrontApp : NSRunningApplication?
    var curFrontWindow : AppWindows.Window?
    var prevFrontWindow : AppWindows.Window?
    
    // Temporary debug variables
    let debugDontHide = false

    var sideToClose = -1
    var activateNewApp = false
    
    var accumulatedAboveByDiff : CGFloat = 0
    
    var batteryDivider : Double = 1
    
    var timerHideWindowStarted = false
    
    var activateSide = [true, true, true, true]
    
    var checkedDragging = false
    
    var initTimerCheckPreviews = false
    
    // or "AlongSide" (?)
    public class AlongLine {
        public var aboveBy : CGFloat = 0
        public var alterBy : CGFloat = 0
    }
        
    public var alongLine = AlongLine()
    
    func reSetDynamicSettings(){
        self.scarfWeight = sensivityBaseConstant * Static.Sensivity
        self.batteryDivider = GeneralFuncs.ComputerIsConnectedToAdapter() ? 2 : 1
    }
    
    var checkForUpdateFrontmostApp = 0
    
    func checkPreviewsElaborated(){
        for (_, app) in self.apps{
            for (_, win) in app.windows{
                win.checkForCii()
            }
        }
    }
    
    func forceFrameUpdate(){
        DispatchQueue.main.async{
            Static.mainWindow?.update()
            self.manager.contentView?.refresh = true
            
            Static.captureView?.setNeedsDisplay(NSRect.infinite)
            Static.captureView?.updateLayer()
        }
    }
    
    var aroundTopSide = false
    var dockPos : WBDockPosition = WBDockPosition.none
    
    ///# moreAboveBy
    let moreAboveByEnabled = true
    let moreAboveByActivationPoint : CGFloat = 5 // pixels
    let moreAboveByActivationSize : CGFloat = 10 // pixels
    var onMoreAboveBy = false
    
    var overrideAboveByDiff : CGFloat = 0
    var ignoreMousePositionForAboveBy = 0
    
    //MARK: Active area
    @MainActor func active(mouse: NSPoint){
        
        if(Static.ScreenRecordingUnauthorized && !Static.debugForceWorking){
            return
        }
        
        self.ready = manager.curDekstop != nil
        if(Static.ActivationStatus <= 0 || !ready){
            return
        }
        
        if(!mouseIn || isFullscreen){
            if !windowHidden{
                aboveBy = 0
                hideWindow()
            }
            
            return
        }
        
        self.menuHeight = NSApplication.shared.menu!.menuBarHeight
        
        reSetDynamicSettings()
        
        if #available(macOS 12.3, *){
            if !windowHidden {
                (manager.capturePreview as? CapturePreview)?.onMouseShouldUpdate(display: self)
            }
        }
                
        let mouseDelta = CGPoint(x: mouse.x - prevMouse.x, y: mouse.y - prevMouse.y)
        
        let acceleration = sqrt(pow((mouse.x - prevMouse.x),2)+pow((mouse.y - prevMouse.y),2))
        avgAcceleration = ((avgAcceleration*avgWeight)+acceleration)/(avgWeight+1)
        
        let s = abs((mouseDelta.x+mouseDelta.y)/2)
        if(s > maxAccumulate){
            maxAccumulate = s
        }
        
        if(!initTimerCheckPreviews){
            Timer.scheduledTimer(withTimeInterval: 5, repeats: true) { timer in
                self.checkPreviewsElaborated()
            }
            initTimerCheckPreviews = true
        }
        
        ///
        /// Mouse...
        ///
        mouseSpeed = sqrt((pow(mouseDelta.x,2)+pow(mouseDelta.y,2)))
        
        mouseSpeed_10s = ((mouseSpeed_10s*(Static.MouseHertz * 10))+mouseSpeed)/((Static.MouseHertz * 10)+1)
        
        avgSpeed = ((avgSpeed*avgWeight)+mouseSpeed)/(avgWeight+1)
        
        if(maxSpeed < avgSpeed){
            maxSpeed = (maxSpeed + avgSpeed)/2
        }
        else {
            if avgSpeed > 1 {
                let scarfMaxSpeed = scarfWeight * 0.01
                maxSpeed = (maxSpeed + (avgSpeed*scarfMaxSpeed))/(1+scarfMaxSpeed)
            }
        }
        
        var accDelta = CGPoint(x: abs(abs(mouse.x) - abs(prevMouse.x)), y: abs(abs(mouse.y) - abs(prevMouse.y)))
        accDelta = mouseDelta.clone
        
        ///# Currently deprecated
        //accumulateAvg.x = ((accumulateAvg.x*accumulateWeight)+mouseDelta.x)/(accumulateWeight+1)
        //accumulateAvg.y = ((accumulateAvg.y*accumulateWeight)+mouseDelta.y)/(accumulateWeight+1)
        //absAccDelta.x = (absAccDelta.x + accDelta.x)/2
        //absAccDelta.y = (absAccDelta.y + accDelta.y)/2
        
        // Control connstantly frontMostApp (but not too much)
        if self.checkForUpdateFrontmostApp % 10 == 0 { // || !winnerRect.contains(mouse)
            self.manager.updateFrontmostApp()
        }
        self.checkForUpdateFrontmostApp += 1
        
        //
        //
        //
        
        var accMouse = mouse.clone
        /*accMouse.x += accMouseMove.x
        accMouse.y += accMouseMove.y*/
        accMouseMove = CGPoint.zero
        
        /*if(lastMouseChanged){
            /*let useAcc = multPoint(point: lastAccumulated, mul: 0.01)
            accMouse = getPointAccumulated(point: prevMouse, accDelta: useAcc)*/
            accMouse = prevMouse
        }*/
        
        // Compesate mouse in base of screen
        var relMouse = compensateAboveBy(point:accMouse) // unused middleware in case of display relativity
        relMouse.x -= self.frame.origin.x
        relMouse.y -= self.frame.origin.y
        //print(relMouse)
        
        // Must use mouse or relMouse? (check when use multiple displays)
        var mouseOppositeY = relMouse.clone
        mouseOppositeY.y = self.frame.height - mouseOppositeY.y
        
        mouseInsideCurWin = curFrontWindow != nil && curFrontWindow?.appTitle != "Finder" && curFrontWindow?.lastRect?.contains(mouseOppositeY) ?? false
        
        ///# Handle mouse "scarf"
        if mouseScarf == NSPoint.zero{
            mouseScarf = accMouse;
        }
        
        mouseScarf.x = ((mouseScarf.x*scarfWeight)+relMouse.x)/(scarfWeight+1);
        mouseScarf.y = ((mouseScarf.y*scarfWeight)+relMouse.y)/(scarfWeight+1);
        
        if recordingPaused {
            return
        }
        
        // Disable mouse checking if in fullOverscreenc
        if fullOverscreenMode {
            return
        }
        
        ///
        /// Cur side checking
        ///
        
        var curSide = checkSide(point: relMouse)
        
        // Prevent the closing of the side in case of going near to side
        if curSide >= 0 && curSide != self.side && self.aboveByPixels > 0 {
            return;
        }
        
        ///# Mouse forecast weight
        var weight : CGFloat = 1
        
        if(curSide != -1){
            if(curSide >= 2){ // is vertical
                let size = (self.frame.width / 2)
                weight = abs(size - relMouse.x)/size
            }
            else{
                let size = (self.frame.height / 2)
                weight = abs(size - relMouse.y)/size
            }
            
            weight = 1 - weight
            weight = pow(weight, 1/2)
            
            if(weight.isNaN){
                weight = 1 // anyway, it should happens
            }
        }
        
        let mouseForecast = self.pointForecast(from: mouseScarf, to: relMouse, weight: weight)
        let absForecastMouse = NSPoint(x: mouseForecast.x + frame.origin.x, y: mouseForecast.y + frame.origin.y)
             
        //curSide = checkSide(point: mouseForecast)
        
        // Restart widgets zone rendering when pointer is around the top zone
        if curSide>0 && activateSide[curSide]{
            if(curSide == 3){
                Static.TopBarWebView?.restartRendering()
            }
            else {
                Static.TopBarWebView?.stopRendering()
            }
        }
        
        //MARK: Top side mouse
        if(curSide == 3 && activateSide[curSide] && self.aboveByPixels == 0){
            aroundTopSide = true
            
            
            let top = self.frame.height - relMouse.y
            
            if Static.EnableDragDropDetection {
                if(!checkedDragging && top > 0 && top < self.menuHeight*2 && !mouseInsideCurWin){
                    
                    // try to avoid glitching issue
                    self.forceFrameUpdate()
                    
                    delay(ms: 1){
                        if self.aroundTopSide{
                            //rapid check
                            self.forceFrameUpdate()
                            self.showWindow()
                            
                            delay(ms: 50){
                                if(Static.isDraggingInside){
                                    self.forceAboveBy = 1
                                    self.side = curSide
                                }
                                else {
                                    if(self.aboveByPixels == 0){
                                        self.hideWindow()
                                    }
                                }
                            }
                        }
                        /*else {
                         if self.aboveByPixels == 0 {
                         self.setRecorderProfile(lowProfile: true)
                         }
                         }*/
                    }
                    
                    checkedDragging = true
                }
            }
            else {
                checkedDragging = true
            }
            
            if mouseSpeed > (maxSpeed*0.5){ // don't slow down the pointer if it's already slow.
                let yDiff = relMouse.y - prevRelMouse.y
                let absXDiff = abs(relMouse.x - prevRelMouse.x)
                
                if(yDiff > 0 && yDiff > absXDiff){
                    if(top > 0 && top < self.menuHeight){
                        var dist = abs((self.menuHeight/2)-top) / (self.menuHeight/2)
                        //dist += 1/self.scale
                        
                        dist = 1 - dist
                        dist = pow(dist, 1/3)
                        
                        let mul =  mouseSpeed / maxSpeed
                        
                        var move = dist * yDiff * mul
                        
                        if(move > yDiff){
                            move = yDiff / 2
                        }
                        
                        // this is a song about that time I used abs because I forgot the variables signs
                        while(abs(move) > abs(self.menuHeight/2)){
                            move /= 1.5;
                        }
                        
                        //print(move, yDiff, mul)
                        
                        relMouse.y -= move
                        
                        accMouse.y -= move
                        accMouse.y = self.frame.maxY - accMouse.y
                        moveMouse(to: accMouse)
                    }
                }
            }
        }
        else {
            aroundTopSide = false
            
            // Try to not exit and re-enter continuosly
            if curSide != 3 {
                checkedDragging = false
            }
        }
        
        prevRelMouse = relMouse
        
        // Check if side is enabled
        if curSide > -1 && !activateSide[curSide]{
            curSide = -1
        }
        
        //TODO: Improve this, check for it etc etc
        if(aboveByPixels != 0 && aboveByPixels < 1){
            aboveBy = 0
            aboveByPixels = 0
            sideToClose = -1
        }
        
        if aboveByPixels == 0 {
            // this is the third time that activateNewApp is setted to false
            // but sometimes it's blocked on true, blocking the working of the entire app
            activateNewApp = false
        }
        
        if(sideToClose != -1){
            if(curSide == -1){
                self.side = curSide
                self.aboveBy = 0
            }
        }
        
        if(curSide != self.side){
            
            if(curSide != -1){
                self.forceFrameUpdate()
                
                if aboveByPixels == 0 {
                    Static.OverscreenSize = curSide == 3 ? Static.OverscreenSizeTop : Static.OverscreenSizeDefault
                }
            }
                                    
            //MARK: New side
            if !(self.side != -1 && curSide != -1){
                self.side = curSide
                
                if(curSide != -1){
                    
                    if curSide != side {
                        return // block rapid changes of side
                    }
                    
                    (manager.capturePreview as? CapturePreview)?.captureView.showed()
                    dockPos = getDockPosition(screen: NSScreen.main!)
                    
                    self.alongLine = AlongLine()
                    alongLine.aboveBy = activateOnPixelsLimit
                    
                    ///
                    ///# Force old side to close
                    ///
                    if(sideToClose != -1){
                        let s = sideToClose
                        sideToClose = -1
                        
                        if #available(macOS 12.3, *){
                            Static.highPriorityQueue.async {
                                (self.manager.capturePreview as! CapturePreview).setCurrentAbove(side: s, aboveBy: 0, display: self)
                            }
                        }
                    }
                }
                else {
                    (manager.capturePreview as? CapturePreview)?.captureView.hidden()
                }
            }
        }
              
        let prevAboveBy = aboveBy
        //let prevALAboveBy = alongLine.aboveBy
        
        //print("side", self.side)
        //print("mouse forecast", mouseForecast.x, mouse.x, mouseForecast.y, mouse.y)
        
        var sideVertical = self.side < 2
        var sideSign = self.side % 2
          
        if(self.side >= 0){
            
            self.checkPreviewsElaborated()
            
            //self.manager.contentView?.refresh = true
            
            if Static.DisableOnDockSide {
                if dockPos.rawValue == side {
                    return
                }
            }
            
            //accumulatedDelta = CGPoint(x: accumulateAvg.x + accumulatedDelta.x, y: accumulateAvg.y + accumulatedDelta.y) // rest in movement
            //accumulatedDelta = accumulateAvg.clone
            
            
            //let useLastAcc = invertPoint(point: lastAccumulated)
            //let compMouse = self.getPointAccumulated(point: accMouse)
            var mouseAboveLimitBy = self.calcAboveBy(side: self.side, point: relMouse)
            var forecastAboveLimitBy = self.calcAboveBy(side: self.side, point: mouseForecast)
            
            if(aboveBy > 0.8){
                forecastAboveLimitBy = mouseAboveLimitBy
                
                ///# Force activation on screen limit
                if(moveOnPixels == 0 && Int(forecastAboveLimitBy) == 0){
                    forecastAboveLimitBy = -1
                }
            }
            
            //print("mouseAboveLimitBy", mouseAboveLimitBy)
            
            //MARK: Calculate speed
            //TODO: deprecate speed (it's useless, always at 0)
            var axisSpeed = accDelta.x
            
            if(!sideVertical){
                axisSpeed = accDelta.y
            }
            
            var totalAxis = abs(accDelta.x) + abs(accDelta.y)
            var speedRatio = abs(axisSpeed) / totalAxis
            
            //MARK: Invert by side
            //let tmpSign = (sideSign + (sideVertical ? 0 : 1))%2
            var invert = sideSign == 1
            
            if(invert){
                //speedRatio *= -1
                axisSpeed *= -1
            }
            
            alongLine.aboveBy = mouseAboveLimitBy
            
            //removed: && mouseAboveLimitBy < moveOnPixels && ((speedRatio > slowDownMinSpeedRatio || abs(speed)>(maxAccumulate/3)))
            
            let goingTo = manager.getPointerDisplay(cursor: absForecastMouse, justGet: true)
            let isGoingHere = goingTo == nil || goingTo == self
            
            var aboveAvgSpeed = mouseSpeed > (maxSpeed / Static.DivideMaxSpeedBy)
            
            if(Static.EnableRequiredAcceleration){
                aboveAvgSpeed = aboveAvgSpeed && acceleration > avgAcceleration
            }
            
            let recordingAvailable = true
            
            if #available(macOS 12.3, *){
                // recordingAvailable = (manager.capturePreview as? CapturePreview)!.screenRecorder.isRunning
            }
            
            var isRightDirection = aboveBy > 0
            let mdX = abs(prevMouse.x - mouse.x)
            let mdY = abs(prevMouse.y - mouse.y)
            if(sideVertical){
                if(mdX > mdY){
                    isRightDirection = true
                }
            }
            else {
                if(mdY > mdX){
                    isRightDirection = true
                }
            }
            
            
            ///
            /// More aboveBy
            ///
            
            var curAboveByDeFacto = aboveByPixels / Static.OverscreenSize
            if curAboveByDeFacto > 0.99 && curAboveByDeFacto < 1 {
                curAboveByDeFacto = 1
            }
            
            let prevOnMoreAboveBy = onMoreAboveBy
            onMoreAboveBy = false
            if moreAboveByEnabled && Static.LastAppPreviewMouseOver?.appExtension != nil && curAboveByDeFacto >= 1 && curSide != 3 && !Static.isDragginApp && !Static.isRemovingApp{
                let mouseMoreAboveLimitBy = mouseAboveLimitBy + Static.OverscreenSize
                //print("moreAboveBy", curAboveByDeFacto, mouseMoreAboveLimitBy)
                
                if mouseMoreAboveLimitBy < moreAboveByActivationPoint && !self.activateNewApp {
                    var moreAboveBy = (mouseMoreAboveLimitBy - moreAboveByActivationPoint) / (-(moreAboveByActivationSize+moreAboveByActivationPoint))
                    
                    if moreAboveBy > 1 {
                        moreAboveBy = 1
                    }
                    
                    aboveBy = 1 + moreAboveBy
                    onMoreAboveBy = true
                    
                    if moreAboveBy != 0 && moreAboveBy != 1 {
                        print("activating moreAboveBy", mouseMoreAboveLimitBy, moreAboveBy)
                    }
                    
                    if prevOnMoreAboveBy == false {
                        // prepare activated content
                        Static.AppExtensionWebView?.setCurrentApp(app: Static.LastAppPreviewMouseOver!)
                    }
                }
                else if aboveBy > 1 {
                    aboveBy = 1
                }
            }
            else {
                //print("curAboveByDeFacto", curAboveByDeFacto)
            }
            
            if !onMoreAboveBy && prevOnMoreAboveBy {
                Static.AppExtensionWebView?.exiting()
            }
            
            Static.OnAppExtensionZone = onMoreAboveBy
            
            ///
            /// End more aboveBy
            ///
            
            //let recordingAvailable = recordingDisplayID == 94 || recordingDisplayID == screen.displayID
            
            if !onMoreAboveBy {
                // && acceleration >= 0
                if recordingAvailable && isRightDirection && ((forecastAboveLimitBy < moveOnPixels && isGoingHere && aboveAvgSpeed) || sideToClose != -1) && !activateNewApp {
                    sideToClose = side
                    
                    //MARK: Follow mouse
                    let acceptEnter : CGFloat = moveOnPixels
                    var aboveWithMin : CGFloat = (forecastAboveLimitBy) - acceptEnter
                    
                    if(false){
                        let aboveWithMinMouse : CGFloat = (mouseAboveLimitBy) - acceptEnter
                        if(aboveWithMinMouse < aboveWithMin){
                            aboveWithMin = aboveWithMinMouse
                        }
                    }
                    
                    //MARK: Set aboveBy
                    aboveBy = aboveWithMin / (Static.OverscreenAboveLimit+acceptEnter)
                    aboveBy *= -1
                    
                    if(aboveBy > 1){
                        aboveBy = 1
                        //print("aboveBy exceeded 1")
                    }
                    else if(aboveBy < 0){
                        aboveBy = 0
                    }
                    
                    /*if prevAboveBy == 0 && aboveBy > 0 {
                     self.checkForScreenshot(forceShot: true)
                     }*/
                    
                    //print("current aboveBy", aboveBy)
                }
                else if(mouseAboveLimitBy > 0){ //MARK: not "over screen"
                    
                    if(aboveBy == 0){ // slow down pointer
                        
                        //MARK: Border slowering
                        if(Static.EnableDockMouseSlowering){
                            //MARK: Mouse slowing
                            
                            //TODO: take the dockPos from the main display and check for left side in secondary display
                            //print("dockPos", dockPos.rawValue, side)
                            if(dockPos.rawValue == side && self.aboveBy == 0){ //disable lateral slowering
                                
                                //print(speedRatio)
                                if(abs(speedRatio) > slowDownMinSpeedRatio && weight > 0.25 && axisSpeed * (sideSign == 0 ? -1 : 1) > 0 && abs(axisSpeed) >= avgSpeed){
                                    let prevAboveBy = alongLine.aboveBy
                                    
                                    alongLine.alterBy = (mouseSpeed / avgSpeed) * weight
                                    alongLine.aboveBy -= axisSpeed * alongLine.alterBy
                                    //accumulatedDelta = multPoint(point: accumulatedDelta, mul: acceleration)
                                    
                                    if(prevAboveBy - alongLine.aboveBy < 0){
                                        alterMouse = 1
                                    }
                                }
                                else {
                                    if(axisSpeed < 0){
                                        alongLine.aboveBy = mouseAboveLimitBy
                                    }
                                    
                                    accumulatedAboveByDiff = 0
                                }
                            }
                            
                        }
                        
                    }
                    
                    ///#TODO: set aboveBy
                }
                else { // on over screen
                    //nothing to do
                }
                
                
                //print("acumulated", accumulatedDelta.x, accumulatedDelta.y)
                
                prevMouseAboveBy = mouseAboveLimitBy
                lastMouseChanged = alterMouse > 0
                
                self.timerHideWindowStarted = false
                
                if prevAboveBy == 0 && aboveBy > 0 {
                    performHaptic()
                }
            }
        }
        else { //MARK: outside side
            
            if(alterMouse == 0){
                accumulatedDelta = CGPoint.zero
            }
            prevMouseAboveBy = activateOnPixelsLimit
            lastMouseChanged = false
            
            if(!windowHidden){
                
                if(aboveByPixels == 0){
                    hideWindow()
                }
                else {
                    if !timerHideWindowStarted{
                        timerHideWindowStarted = true
                        
                        Timer.scheduledTimer(withTimeInterval: 0.75, repeats: false) { timer in
                            if self.timerHideWindowStarted {
                                self.hideWindow()
                                self.timerHideWindowStarted = false
                            }
                        }
                    }
                }
            }
            
            if(sideToClose != -1){
                let s = sideToClose
                aboveBy *= decelerateAboveBy
            }
            else {
                aboveBy = 0
            }
        }
        
        if(forceAboveBy > 0 && aboveBy < 1 && sideToClose == -1){
            self.sideToClose = curSide
            aboveBy = (prevAboveBy + forceAboveBy) / 2
            print("force aboveBy")
        }
        
        prevMouse = mouse //move this on top(?)
        
        //MARK: Update aboveByPixels
        prevAboveByPixels = aboveByPixels
        
        if ignoreMousePositionForAboveBy == 0 {
            aboveByPixels = ((aboveBy * Static.OverscreenSize)+prevAboveByPixels)/2
        }
        else {
            ignoreMousePositionForAboveBy -= 1
        }
        //print("aboveByPixels", aboveBy, aboveByPixels)
        
        aboveByPixels += overrideAboveByDiff
        
        if overrideAboveByDiff != 0 {
            print("overrideAboveByDiff", overrideAboveByDiff)
            overrideAboveByDiff = 0
        }
        
        onMoreAboveBy = false
        if aboveByPixels > Static.OverscreenSize {
            if moreAboveByEnabled {
                onMoreAboveBy = true
            }
        }
        
        if(prevAboveByPixels > aboveByPixels){ // why?
            aboveByPixels -= 1 // force closing
        }
        
        if(prevAboveByPixels == 0 && aboveByPixels > 0){
            self.manager.contentView?.store.setWindowsProperties()
        }
        
        //MARK: Show/hide capture window
        if aboveByPixels > 1 {
            if(windowHidden){
                showWindow()
            }
        }
        else {
            if(!windowHidden && !checkedDragging){
                hideWindow()
            }
        }
        
        let aboveByPixelsDiff = aboveByPixels - prevAboveByPixels
        if(aboveByPixels != prevAboveByPixels){
            
            if aboveByPixels != 0 && aboveByPixels != Static.OverscreenSize && ignoreMousePositionForAboveBy == 0 {
                alterMouse = 2
            }
            
            var s = sideToClose
            if(s == -1){
                s = side
            }
            else if(Static.isDraggingInside && aboveByPixelsDiff < 0){
                alterMouse = 0
            }
            
            sideVertical = sideToClose < 2
            sideSign = sideToClose % 2
            
            if(aboveByPixels < 1){
                aboveBy = 0
                aboveByPixels = 0
                sideToClose = -1
                activateNewApp = false
            }
            
            if !onMoreAboveBy && aboveByPixels > Static.OverscreenSize {
                aboveBy = 1
                aboveByPixels = Static.OverscreenSize
            }
            
            //MARK: Update aboveBy
            if #available(macOS 12.3, *){
                DispatchQueue.main.async {
                    Task {
                        (self.manager.capturePreview as! CapturePreview).setCurrentAbove(side: s, aboveBy: self.aboveByPixels, display: self)
                    }
                }
            }
        }
        
        if(forceAboveBy == 0 && aboveBy == 0 && !checkedDragging){
            Static.isDraggingInside = false
        }
        
        if((forceAboveBy == 1 && aboveByPixels >= Static.OverscreenSize) || (windowHidden)){
            forceAboveBy = 0
        }
        
        if(forceAboveBy == 1){
            alterMouse = 0
        }

        //MARK: alterMouse
        let minMovement : CGFloat = 1.1/scale
        
        //print(curSpeed, maxSpeed)
        if(alterMouse > 0 || compensateAboveByCursor != CGPoint.zero){ //TODO: move this block into a function (due to the use of returns in the flow)
            //MARK: compesate mouse position
            
            //print("accumulatedDelta", accumulatedDelta)
            //print("alterMouse", alterMouse)
            //updateAccumulation(x: accumulatedDelta.x, y: accumulatedDelta.y)
            
            //MARK: set alterMouse moving aboveBy
            if(alterMouse == 2 && !activateNewApp){
                if(aboveByPixels == 0 || aboveByPixels == Static.OverscreenSize){
                    
                    if(side == 3 && aboveBy >= 1){
                        accumulatedDelta.y += 5
                    }
                    
                    return
                }
                             
                if(aboveByPixelsDiff == 0){
                    return
                }
                                                
                var speedDim = (1-(mouseSpeed / maxSpeed))
                
                var dim : CGFloat = Static.CompensateAboveByCursor //* speedDim
                
                if(sideSign != 0 && !sideVertical){
                    dim *= -1
                }
                else if(sideSign != 0 && sideVertical){
                    dim *= -1
                }
                                        
                //print("changeOf", diffAboveBy*dim)
                
                var moveToDo : CGFloat = aboveByPixelsDiff*dim
                            
                if false {
                    while(abs(moveToDo) > abs(aboveByPixelsDiff)){
                        moveToDo *= 0.9 // pretty arbitrary
                    }
                }
                
                //TODO: check this trash, then delete it
                /*if(sideVertical){
                    //accumulatedDelta.x += accumulateAvg.x
                    compensateAboveByCursor.x -= diffAboveBy*dim
                    moveToDo = compensateAboveByCursor.x
                }
                else {
                    //accumulatedDelta.y += accumulateAvg.y
                    compensateAboveByCursor.y -= diffAboveBy*dim
                    moveToDo = compensateAboveByCursor.y
                }*/
                
                //moveToDo *= 0.75
                
                /*if sideSign == 0 {
                    if aboveByPixelsDiff > 0 && moveToDo < 0{
                        return
                    }
                }
                else {
                    if aboveByPixelsDiff > 0 && moveToDo > 0{
                        return
                    }
                }*/
                                
                // Origin of the forced mouse move bug
                /*let moveLimit = diffAboveBy
                if(abs(moveToDo) > abs(moveLimit)){
                    if(sideVertical){
                        compensateAboveByCursor.x -= moveToDo
                    }
                    else {
                        compensateAboveByCursor.y -= moveToDo
                    }
                    
                    moveToDo = 0
                }*/
                
                let absMoveToDo = abs(moveToDo)
                if(absMoveToDo < minMovement) && false { // disabled just for debuggin purposes(?)
                    return
                }
                else {
                    accumulatedDelta = CGPoint.zero
                    
                    if(sideVertical){
                        accumulatedDelta.x += moveToDo
                        accumulatedDelta.y = 0
                        compensateAboveByCursor.x = 0
                    }
                    else {
                        /*if(side == 3 && Static.isDraggingInside){
                            moveToDo *= 1.25
                            
                            if abs(moveToDo) > aboveByPixelsDiff * 0.95 {
                                moveToDo = aboveByPixelsDiff * -0.95
                            }
                        }*/
                        
                        accumulatedDelta.y += moveToDo
                        accumulatedDelta.x = 0
                        compensateAboveByCursor.y = 0
                    }
                }
            }
            else {
                compensateAboveByCursor = CGPoint.zero
            }
            
            /*if(abs(accumulatedDelta.x)+abs(accumulatedDelta.y) < minMovement){ // manager.nextMouseTick % 2 == 0 ||
                return
            }*/
                        
            //MARK: Calc moveTo
            var moveTo = getPointAccumulated(point: mouse, reset: true)
            
            if(alterMouse == 1){
                moveTo = mouse.clone
                
                //MARK: near doc try to stop
                let powBy : CGFloat = 3
                let stopLimit : CGFloat = moveOnPixels / 2
                let limit = activateOnPixelsLimitSlowering - stopLimit
                var diff = (alongLine.aboveBy - stopLimit) / limit
                
                if(diff > 1){
                    diff = 1
                }
                
                //let tmpSign = (sideSign + (sideVertical ? 0 : 1))%2
                if(true){
                    //diff = pow(diff, powBy)
                    diff = 1-pow(diff, powBy)
                    //diff = 1-pow(1-diff, powBy)
                }
                else {
                    diff = (diff - 0.5) * 2
                    diff = pow(diff, powBy)
                    diff = (diff / 2) + 0.5
                }
                
                var pixels = stopLimit + (diff*limit)
                pixels /= 2
                //pixels = ((pixels*alongLine.alterBy)+alongLine.aboveBy)/(alongLine.alterBy+1)
                
                //print("aboveBy", alongLine.aboveBy, pixels)
                
                /*if(sideSign == 1){
                    if(sideVertical){
                        pixels = frame.maxX - pixels
                    }
                    else {
                        pixels = frame.maxY - pixels
                    }
                }*/
                
                //print(diff, pixels)
                accumulatedAboveByDiff += diff - pixels
                
                //print(mouse.x, "=>", moveTo.x, ", ", mouse.y, "=>", moveTo.y)
                            
                if(abs(accumulatedAboveByDiff) > minMovement) {
                    if(sideSign == 0){
                        accumulatedAboveByDiff *= -1
                    }
                    
                    //print("accumulatedAboveByDiff", accumulatedAboveByDiff)
                    
                    if(sideVertical){
                        moveTo.x += accumulatedAboveByDiff
                    }
                    else {
                        moveTo.y -= accumulatedAboveByDiff
                    }
                    
                    accumulatedAboveByDiff = 0
                }
                else {
                    return
                }
            }
            else {
                accumulatedAboveByDiff = 0
            }
            
            if(abs(mouse.x - moveTo.x) < minMovement && abs(mouse.y - moveTo.y) < minMovement){
                return
            }
            
            if false {
                if false { // aka desperation
                    let dist = sqrt(pow(mouse.x - moveTo.x, 2)+pow(mouse.y - moveTo.y, 2))
                    if dist > 200 {
                        return
                    }
                }
                
                if sideVertical {
                    moveTo.y = mouse.y
                }
                else {
                    moveTo.x = mouse.x
                }
            }
            
            prevMouse = moveTo.clone
            
            moveTo.y = frame.height - moveTo.y
            moveTo.y += frame.minY
            
            let relativeCursor = false
            if(relativeCursor){
                moveTo.x -= frame.minX
            }
            
            // is it an antilag?
            /*let mouseEventSource = CGEventSource(stateID: .hidSystemState)
             mouseEventSource?.setLocalEventsFilterDuringSuppressionState(CGEventFilterMask.permitLocalMouseEvents , state: CGEventSuppressionState(rawValue: 0)!)*/
            
            //print("alterMouse", alterMouse)
            
            CGDisplayHideCursor(1)
            
            if !justArrived{
                //print("moving to", self.screen.displayID, moveTo)
                if relativeCursor{
                    CGDisplayMoveCursorToPoint(self.screen.displayID, moveTo)
                }
                else {
                    moveMouse(to: moveTo)
                }
            }
            else {
                justArrived = false
            }
            
            //CGEventSourceSetLocalEventsSuppressionInterval(seconds: 0)
            CGDisplayShowCursor(1)
            
            //let curML = NSEvent.mouseLocation
                                    
            /*removeAccumulate.x += curML.x - mouse.x
            removeAccumulate.y += curML.y - mouse.y*/
            
            alterMouse = 0
        }
        else {
            /*if(resetMouse){
             //print("reset")
             prevMouse = mouse
             }*/
            
            if self.sideToClose == -1 && self.side == -1{
                accumulatedDelta = CGPoint.zero
            }
        }
    }
    
    func moveMouse(to: CGPoint){
        let x = to.x * self.scale
        let y = to.y * self.scale
        
        let iX = round(x)
        let iY = round(y)
        
        let aX = x - iX
        let aY = y - iY
        
        //accMouseMove.x = aX / self.scale
        //accMouseMove.y = aY / self.scale
        
        var mouse = to.clone
        //mouse.x = iX / self.scale
        //mouse.y = iY / self.scale
        
        let curMouse = NSEvent.mouseLocation
        if(true || mouse.x != curMouse.x && mouse.y != (frame.height - curMouse.y)){
            //CGWarpMouseCursorPosition(mouse)
            
            let mouseMoveEvent = CGEvent(mouseEventSource: nil, mouseType: .mouseMoved, mouseCursorPosition: mouse, mouseButton: .left)!
            mouseMoveEvent.post(tap: .cghidEventTap)
        }
    }
    
}

///
///# Estensions
///
extension NSScreen {
  var displayID: CGDirectDisplayID {
      return (deviceDescription[NSDeviceDescriptionKey(rawValue: "NSScreenNumber")] as? CGDirectDisplayID) ?? CGMainDisplayID()
  }
}

extension CGPoint{
    var clone: CGPoint{ ///# For security...
        return CGPoint(x: self.x, y: self.y)
    }
}
