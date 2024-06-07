//
//  ContentView.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 30/09/22.
//

import SwiftUI
import ScreenCaptureKit

@MainActor
public class StoreView {
    @MainActor var screenRecorder : AnyObject?
    var view : ContentView?
    
    var statusBarItem: NSStatusItem!
        
    /*
     Publishing changes from background threads is not allowed; make sure to publish values from the main thread (via operators like receive(on:)) on model updates.
     */
    @MainActor public var window: NSWindow? {
        didSet{
            Static.mainWindow = self.window
            
            self.setWindowsProperties()
            
            if(!Static.ShowInDock){
                NSApp.setActivationPolicy(.accessory)
            }
            
            ///
            ///# Menu Bar
            ///
            
            let statusBar = NSStatusBar.system
            self.statusBarItem = statusBar.statusItem(
                withLength: NSStatusItem.squareLength)
            
            self.statusBarItem.button?.image = NSImage(named: "bar_icon")
            self.statusBarItem.button?.imageScaling = .scaleProportionallyDown
            
            self.statusBarItem.button?.action = #selector(self.orderABurrito(sender:))
            self.statusBarItem.button?.target = self
            self.statusBarItem.button?.sendAction(on: [.leftMouseDown])
            
            ///
            ///
            if #available(macOS 12.3, *) {
                (self.screenRecorder as? ScreenRecorder)?.capturePreview.view = self.view
            } else {
                // Fallback on earlier versions
            }
        }
    }
    
    public func setWindowsProperties(){
        view?.Displays.window = window
        
        /*window?.isOpaque = true
        window?.backgroundColor = NSColor.clear
        
        window?.titleVisibility = NSWindow.TitleVisibility.hidden
        window?.titlebarAppearsTransparent = true
        
        window?.styleMask = [.borderless, .hudWindow, .nonactivatingPanel, .titled, .fullSizeContentView, .closable, .miniaturizable, .resizable]
        
        //window?.styleMask = [.borderless,.hudWindow, .nonactivatingPanel]
        window?.styleMask.remove(.titled)*/
    
      
        window?.isOpaque = false
        window?.backgroundColor = NSColor(red: 0, green: 0, blue: 0, alpha: 128)
        //window?.backgroundColor = NSColor.green
        //window?.backgroundColor = .clear
        //window?.isMovableByWindowBackground = true
        
        window?.titlebarAppearsTransparent = true
        window?.titleVisibility = .hidden
        
        window?.styleMask = [.borderless, .titled, .docModalWindow]
        window?.hasShadow = false
        window?.showsResizeIndicator = false
        
        if(!Static.debugOneSpacePerTime && Static.ShowOnEverySpace){
            window?.collectionBehavior = .canJoinAllSpaces
        }
        
        window?.setFrameOrigin(view?.Displays.curDisplay?.frame.origin ?? NSPoint.zero)
                
        window?.display()
        
        //window?.standardWindowButton(.toolbarButton)
                                
        //window?.orderOut(nil)
    }
    
    var barPanel : SwifterPanel<MenuBarView>?
    
    @objc func orderABurrito(sender: Any) {
        print("Ordering a burrito!")
                
        if(false){ //TODO: set true just for testing purposes
            let swifterWin = SwifterWindow<TestView>(view: TestView())
            swifterWin.show()
        }
        
        if(barPanel?.isMainWindow ?? false){
            barPanel?.close()
        }
        else {
            barPanel?.close()
                        
            barPanel = SwifterPanel<MenuBarView>(view: MenuBarView())
            
            if(!Static.mainWindowFirstShow){
                Static.curDisplay?.showWindow()
                Static.curDisplay?.hideWindow()
                
                self.barPanel?.show(originOnClick: true)
            }
            else {
                barPanel?.show(originOnClick: true)
            }
        }
    }
    
    @Published public var panel: NSPanel? {
        didSet{
            view?.Displays.window = panel
            
            /*panel?.isOpaque = false
            panel?.backgroundColor = NSColor.clear
            
            panel?.titleVisibility = NSWindow.TitleVisibility.hidden
            panel?.titlebarAppearsTransparent = true*/
            
            /*window?.styleMask = [.borderless, .hudWindow, .nonactivatingPanel, .titled, .fullSizeContentView, .closable, .miniaturizable, .resizable]*/
            
            //panel?.orderOut(nil)
        }
    }
            
    init(){
        if #available(macOS 12.3, *){
            self.screenRecorder = ScreenRecorder()
        }
        
        window?.close()
    }
}

public class StoreVars: ObservableObject {
    // Overlay
    @Published public var overlayOffsetX: CGFloat = 100
    @Published public var overlayOffsetY: CGFloat = 10000
    @Published public var overlaySizeX: CGFloat = 100
    @Published public var overlaySizeY: CGFloat = 100
    
    @Published public var overlayOpacity: CGFloat = 1
    
    // Navigate overlay
    @Published public var navOverlayOffsetX: CGFloat = 100
    @Published public var navOverlayOffsetY: CGFloat = 10000
    @Published public var navOverlaySizeX: CGFloat = 100
    @Published public var navOverlaySizeY: CGFloat = 100
    
    @Published public var navOverlayOpacity: CGFloat = 1
    
    // AppExtension overlay
    @Published public var appExtOverlayOffsetX: CGFloat = 100
    @Published public var appExtOverlayOffsetY: CGFloat = 10000
    @Published public var appExtOverlaySizeX: CGFloat = 100
    @Published public var appExtOverlaySizeY: CGFloat = 100
    
    @Published public var appExtOverlayOpacity: CGFloat = 1
}

@MainActor
public struct ContentView: View {
    @ObservedObject public var vars = StoreVars()
    
    @State var refresh : Bool = false
    @State var store : StoreView = StoreView()
    
    @State var showWindow: Bool = false
    @State private var textToUpdate : String = "Hello, world ;)"
    @State var side : Int = -1;

    let timer = Timer.publish(every: 0.1, on: .main, in: .common).autoconnect()
    public let Displays : DisplaysManager
    
    // Screen recorder variables
    @State var userStopped = false
    @State var disableInput = true
    @State var isUnauthorized = false
           
    public var body: some View {
        
        /*if(!disableInput){
            ConfigurationView(screenRecorder: store.screenRecorder, userStopped: $userStopped)
                .frame(minWidth: 0, maxWidth: 0)
                .disabled(disableInput)
        }*/
        
        if refresh {
            Text("").onAppear{
                refresh = false
            }
        }
        
        VStack{
            if #available(macOS 12.3, *){
                (store.screenRecorder as? ScreenRecorder)?.capturePreview
                    .frame(maxWidth: .infinity)
                //.aspectRatio(frameSize, contentMode: ContentMode.fit)
            }
        }
        .overlay(
            WidgetZoneView()
                .offset(x: vars.overlayOffsetX, y: vars.overlayOffsetY)
                .frame(width: vars.overlaySizeX, height: vars.overlaySizeY)    
                .opacity(vars.overlayOpacity)
        )
        .overlay {
            NavigateZoneView()
                .offset(x: vars.navOverlayOffsetX, y: vars.navOverlayOffsetY)
                .frame(width: vars.navOverlaySizeX, height: vars.navOverlaySizeY)
                .opacity(vars.navOverlayOpacity)
        }
        .overlay {
            AppExtensionView()
                .offset(x: vars.appExtOverlayOffsetX, y: vars.appExtOverlayOffsetY)
                .frame(width: vars.appExtOverlaySizeX, height: vars.appExtOverlaySizeY)
                .opacity(vars.appExtOverlayOpacity)
        }               
        .onChange(of: refresh, perform: { val in
            //this prevents the overlay stuck? (to check)
            self.refresh = val
            print("frameSize changed")
        })
        .frame(maxWidth: .infinity, alignment: .center)
        //.aspectRatio(frameSize, contentMode: ContentMode.fill)
    /*.ignoresSafeArea()*/
        .background(WindowAccessor(window: $store.window))
        .onAppear {
            if #available(macOS 12.3, *){
                Task {
                    await self.checkCanRecord()
                }
            }
        }
        /*.touchBar { // TouchBar discontinues: implementing it is lost time
            Button("♥️ - Hearts", action: selectHearts)
            Button("♣️ - Clubs", action: selectClubs)
            Button("♠️ - Spades", action: selectSpades)
            Button("♦️ - Diamonds", action: selectDiamonds)
        }*/

        /*.onTapGesture {
            //Displays.curDisplay?.hideWindow()
        }*/
    }
            
    init(){
        self.Displays = DisplaysManager()
        //self.store = StoreView()

        self.Displays.contentView = self
        self.store.view = self                
        
        Static.storeView = self.store
        
        // this is ridiculous
        let me = self
        var myself = self
                
        DispatchQueue.main.async {
            if #available(macOS 12.3, *){
                Task {
                    (me.store.screenRecorder as! ScreenRecorder).contentView = me
                    await me.checkCanRecord() // this may be the cause of crash
                }
            }
        }
        
        var checkAuthorizationTicks = 0
        
        //MARK: Show NoRecordingPermissionView if neccessary
        Timer.scheduledTimer(withTimeInterval: Static.WaitBeforeStarting, repeats: false) { timer in            
            Timer.scheduledTimer(withTimeInterval: 1.5, repeats: true) { timer in
                if #available(macOS 12.3, *){
                                    
                    DispatchQueue.main.async {
                        if me.Displays.contentView == nil {
                            me.Displays.contentView = me
                        }
                    }
                    
                    var checkAfter = 0
                    if !Static.ScreenRecordingUnauthorized {
                        checkAfter = 5
                    }
                    
                    if checkAuthorizationTicks >= checkAfter {
                        DispatchQueue.main.async {
                            Task {
                                await me.checkCanRecord()
                            }
                        }
                        
                        Timer.scheduledTimer(withTimeInterval: 1, repeats: false) { timer in
                            DispatchQueue.main.async {
                                if Static.ScreenRecordingUnauthorized {
                                    if myself.activatePanel == nil {
                                        myself.store.window?.close()
                                        
                                        myself.activatePanel = SwifterPanel<HowToRecordingPermissionView>(view: HowToRecordingPermissionView())
                                        myself.activatePanel!.show()
                                    }
                                }
                                else {
                                    //TODO: is called multiple time... it's okay but...
                                    Static.CheckForThankYou();
                                }
                            }
                        }
                        
                        checkAuthorizationTicks = 0
                    }
                    else {
                        checkAuthorizationTicks += 1
                    }
                }
            }
        }

    }
    
    var activatePanel : SwifterPanel<HowToRecordingPermissionView>?
    
    @MainActor
    @available (macOS 12.3, *)
    func checkCanRecord() async -> Bool {
        if await (store.screenRecorder as! ScreenRecorder).canRecord {
            
            /*DispatchQueue.main.async {
                self.isUnauthorized = false
            }*/
            
            Static.ScreenRecordingUnauthorized = false
            
            return true
            
        } else {
            
            /*DispatchQueue.main.async {
                self.isUnauthorized = true
            }*/
            
            Static.ScreenRecordingUnauthorized = true
                        
            //self.disableInput = true
            
            return false
        }
    }
    
    /*func applicationDidFinishLaunching(aNotification: NSNotification) {
        self.Display.start()
    }*/    
}

class MyNSView : NSView{
    /*override func draggingEntered(_ sender: NSDraggingInfo) -> NSDragOperation {
        print("is dragging in")
        Static.isDraggingInside = true
        
        return super.draggingEntered(sender)
    }  
    
    override func draggingUpdated(_ sender: NSDraggingInfo) -> NSDragOperation {
        print("is dragging in (update)")
        Static.isDraggingInside = true
        
        return super.draggingUpdated(sender)
    }*/
}

struct WindowAccessor: NSViewRepresentable {
    @Binding var window: NSWindow?

    func makeNSView(context: Context) -> NSView {
        let view = MyNSView()
        
        DispatchQueue.main.async {
            self.window = view.window
        }
        return view
    }

    func updateNSView(_ nsView: NSView, context: Context) {}
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
         ContentView();
    }
}
