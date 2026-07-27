//
//  Static.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 27/10/22.
//

import Foundation
import ServiceManagement

import SwiftUI
import SafariServices

public class Static {
            
    #if TRIAL
    
    public static let AppStoreVersion : Bool = false
    public static let Demo : Bool = !AppStoreVersion && true // remember to toggle Outgoing connections
    
    #else
    
    public static let AppStoreVersion : Bool = true
    public static let Demo : Bool = !AppStoreVersion && true // remember to toggle Outgoing connections
    
    #endif
    
    public static let Debug : Bool = false
    
    public static var WaitBeforeStarting = Double.pi / 2
    
    public static var ScreenRecordingUnauthorized = false
    
    public static let User : UserDefaults = UserDefaults.standard
    
    public static let VersionStr = "1"
    public static var ActivationStatus = 1 //-1
    public static var UpdateAvailable = false
    
    public static let ShowOnEverySpace : Bool = false

    public static let WebExtensionBundleIdentifier = "ink.geckos.MakeItHome.WebExtension"
    private static let showInstallWebExtensionKey = "ShowInstallWebExtension"
    private static let installedWebExtensionVersionKey = "InstalledWebExtensionVersion"
    private static var showInstallWebExtensionCache: Bool?
    private static let enableClipboardCaptureKey = "EnableClipboardCapture"
    
    static var _showInDock = false;
    
    public static var ShowInDock : Bool {
        get {
            _showInDock = User.bool(forKey: "ShowInDock") ?? _showInDock
            return _showInDock
        }
        
        set {
            if(_showInDock != newValue){
                _showInDock = newValue
                User.set(newValue, forKey: "ShowInDock")
            }
            
            checkShowInDock()
        }
    }

    public static var showInstallWebExtension: Bool {
        get {
            if let cached = showInstallWebExtensionCache {
                return cached
            }

            let installedVersion = User.object(forKey: installedWebExtensionVersionKey) as? String
            if let stored = User.object(forKey: showInstallWebExtensionKey) as? Bool {
                if !stored && installedVersion != CurVersion {
                    showInstallWebExtensionCache = true
                    return true
                }

                showInstallWebExtensionCache = stored
                return stored
            }

            if installedVersion == CurVersion {
                showInstallWebExtensionCache = false
                return false
            }

            showInstallWebExtensionCache = true
            return true
        }

        set {
            showInstallWebExtensionCache = newValue
            User.set(newValue, forKey: showInstallWebExtensionKey)
        }
    }

    public static func markWebExtensionInstalled(version: String? = nil) {
        let latestVersion = version ?? CurVersion
        User.set(latestVersion, forKey: installedWebExtensionVersionKey)
        showInstallWebExtension = false
    }

    public static func refreshWebExtensionInstallButtonVisibility(completion: ((Bool) -> Void)? = nil) {
        SFSafariExtensionManager.getStateOfSafariExtension(withIdentifier: WebExtensionBundleIdentifier) { state, error in
            DispatchQueue.main.async {
                if let state = state, error == nil, state.isEnabled {
                    Static.markWebExtensionInstalled()
                    completion?(false)
                    return
                }

                let installedVersion = User.object(forKey: installedWebExtensionVersionKey) as? String
                let shouldShowButton = installedVersion != CurVersion

                Static.showInstallWebExtension = shouldShowButton
                completion?(shouldShowButton)
            }
        }
    }
    
    public static func checkShowInDock(){
        if let app = NSApp {
            if(ShowInDock){
                app.setActivationPolicy(.regular)
            }
            else {
                app.setActivationPolicy(.accessory)
            }
        }
        else {
            delay(ms: 500){
                Static.checkShowInDock()
            }
        }
    }
    
    public static let MouseHertz : Double = 60 // previous 60
    public static let ActiveStrictModeEnabled = true
    public static let ActiveMouseTimerQoS: DispatchQoS = .userInteractive
    public static let ActiveMouseTimerLeewayMs: Int = 1
    public static let SceneKitPreferredFPS = 45 // prev 45
    public static let SceneKitSleepPreferredFPS = 25
    public static let SceneKitContinuousRenderingWhenActive = true
    
    public static let EnableCloseMainWindowAfterInactivity = false
    
    public static let ResetCapturePreviewSceneEvery : Double = 120 // seconds
    public static let CloseMainWindowAfterSecondsOfInactivity : Double = 60*15 // minutes
    
    public static var OverscreenSize : CGFloat = 300
    public static let OverscreenSizeDefault : CGFloat = 300
    public static let OverscreenSizeTop : CGFloat = 400
    
    public static let OverscreenAboveLimit : CGFloat = 5
    public static let CompensateAboveByCursor : Double = 0.99
    public static let DivideMaxSpeedBy : Double = 2.5
    public static var overScreenMouseAxisAcceleration: CGFloat = 1.5
    public static var enableGravityMouse: Bool = true
    
    public static let PutAsideInUsingApp = false
    public static let PutAsideInUsingAppBy : CGFloat = 10 // pixels
    
    public static let EnableLowProfile = false // continues to cycle with "recording start" // ehy wait, but IT ENABLES low profile...
    public static var EnableDockMouseSlowering = true
    public static var EnableRequiredAcceleration = true
    public static var DisableOnDockSide = false
    public static var EnableShortcuts : Bool {
        get {
            return User.object(forKey: "EnableShortcuts") as? Bool ?? false
        }
        
        set {
            User.set(newValue, forKey: "EnableShortcuts")
            GlobalShortcutManager.shared.setEnabled(newValue)
        }
    }
    
    public static let MenuBarPopupWidth : CGFloat = 300
    
    public static let BackgroundUpdate_SetWindowsProperties = false // this should be deprecated
    public static let BackgroundUpdateSeconds_SetWindowsProperties = 0.5 // seconds
    public static let ChangeSpaceAfter = 0.5 // seconds
    public static let WindowScreenshotAfterAttempts = 3
    
    public static let ReloadScreenRecorderDisplay = false
    public static let UpdateWallpaperEvery : Double = 45 // Seconds
    public static let MaximumWindowsSavedPerApp = 2
    
    public static let BackgroundUpdateSeconds_NewDisplay : Double = 5 // seconds
    
    public static let ScreenRecorderHighPriorityFPS = 25 // FPS
    public static let CheckIfUpdateWindowScreenshotEvery : Double = 0.5 // seconds
    public static let UpdateWindowScreenshotAfter : Double = 2.0 // seconds
    public static let EnableRecordingHalfInLowPriority = false // don't enable it: it breaks window previews rects
    public static let WaitScreenshotAfterAboveBy = 0.3 // milliseconds
    
    public static let RecorderPrewarmDuration: TimeInterval = 2
    public static let RecorderPrewarmMinSpeed: CGFloat = 1
    public static let RecorderPrewarmSpeedRatio: CGFloat = 0.25
    
    public static let EnableLatencyCriticalActivity = true
    public static let LatencyCriticalActivityReason = "Overscreen interaction"
    public static let LatencyCriticalActivityOptions: ProcessInfo.ActivityOptions = [.userInitiated, .latencyCritical]
    public static let CaptureVideoQueueQoS: DispatchQoS = .userInteractive
        
    public static let ClickMaximumDifference : Double = 0.5
    
    public static var MaxApps = 5
    public static var Sensivity = 10.0
    
    public static var GroupMiniPreviews = true
    
    ///# Requests
    // Accessibility is fundamental to mouse pointer position compensation
    public static let RequestAccessibility : Bool = true
    
    // FaceID
    //public static var myFace : MyFace? = nil
    
    // Space Change
    public static let WaitAfterSpaceChange = 3 // ticks
    // Wall-clock safety net for a stuck space change lives in PreviewFlowGate
    // (PreviewFlowGate.spaceIsChangingForceResetAfter).
    
    // Clipboard
    public static let ClipboardForgetElementsOlderThan = 30 // ergo: maximum clipboard items
    
    ///# TOP BAR
    public static var EnableDragDropDetection : Bool = false
    static var _enableClipboardCapture = true
    public static var EnableClipboardCapture : Bool {
        get {
            if User.object(forKey: enableClipboardCaptureKey) != nil {
                _enableClipboardCapture = User.bool(forKey: enableClipboardCaptureKey)
            }
            return _enableClipboardCapture
        }
        
        set {
            _enableClipboardCapture = newValue
            User.set(newValue, forKey: enableClipboardCaptureKey)
            clipboard?.setCaptureEnabled(newValue)
        }
    }
    public static let TopBarIsPreview = false
    public static var TopBarWebView : TopWKWV? = nil
    public static var topBarWebViewRepresentable : TopWebView? 
    
    public static var OpenAtStartup : Bool {
        get {
            let res = User.object(forKey: "OpenAtStartup") as? Bool
            
            if(res == nil){ // default action
                let defaultAction = false
                
                self.OpenAtStartup = defaultAction
                return defaultAction
            }
            
            return res!
        }
        
        set {
            Static.User.set(newValue, forKey: "OpenAtStartup")
            CheckOpenAtStartup(launch: newValue)
        }
    }
    
    public static var OpenAtStartupPrompts : Int {
        get {
            let res = User.object(forKey: "OpenAtStartupPrompts") as? Int
            
            if(res == nil){ // default action
                let defaultAction = 0
                self.OpenAtStartupPrompts = defaultAction
                return defaultAction
            }
            
            return res!
        }
        
        set {
            Static.User.set(newValue, forKey: "OpenAtStartupPrompts")
        }
    }
    
    public static func CheckOpenAtStartup(launch: Bool){
        if #available(macOS 13, *){
            let appService = SMAppService()
            do {
                if launch{
                    try appService.register()
                }
                else {
                    try appService.unregister()
                }
            }
            catch {
                print("failed unregister from services")
            }
        }
        else
        {
            //SMLoginItemSetEnabled("ink.geckos.MakeItHome" as CFString, launch)
        }
    }
    
    public static var CurVersion : String {
        get{
            return (Bundle.main.infoDictionary!["CFBundleShortVersionString"] as! String)
        }
    }
    
    ///# App Extension web view
    public static var OnAppExtensionZone = false
    public static var AppExtensionWebView : AppExtensionWKWV? = nil
    public static var appExtensionWebViewRepresentable : AppExtensionWebView?
    public static var LastAppPreviewMouseOver : Display.AppWindows?
    
    ///
    ///# Init
    ///

    static var calendar : Calendar?
    
    public static func Init(){
        //myFace = MyFace()
        
        ///# Static instances
        calendar = Calendar()
        
        ///# Settings
        
        Sensivity = User.object(forKey: "Sensivity") as? Double ?? Sensivity
        //EnableDockMouseSlowering = User.object(forKey: "EnableDockMouseSlowering") as? Bool ?? EnableDockMouseSlowering
        MaxApps = User.object(forKey: "MaxApps") as? Int ?? MaxApps
        EnableDragDropDetection = User.object(forKey: "EnableDragDropDetection") as? Bool ?? EnableDragDropDetection
        EnableClipboardCapture = User.object(forKey: enableClipboardCaptureKey) != nil ? User.bool(forKey: enableClipboardCaptureKey) : _enableClipboardCapture
        DisableOnDockSide = User.object(forKey: "DisableOnDockSide") as? Bool ?? DisableOnDockSide
        GlobalShortcutManager.shared.setEnabled(EnableShortcuts)
        
        /*if let showInDock = User.object(forKey: "ShowInDock") as? Bool {
            Static.ShowInDock = showInDock
        }*/
        
        checkShowInDock()
        
        // Removed
        EnableRequiredAcceleration = true // User.object(forKey: "EnableRequiredAcceleration") as? Bool ?? EnableRequiredAcceleration
        
        // Check version
        Static.User.set(CurVersion, forKey: "LastVersion")
        refreshWebExtensionInstallButtonVisibility()
    }
    
    static var thankYouDone = false
    public static func CheckForThankYou(){
        
        //return; // no thank you this time
        
        if(thankYouDone){
            return
        }
        
        thankYouDone = true
        
        if !(User.object(forKey: "ThankYouBanner") as? Bool ?? false) {
            let thankYou = SwifterPanel<HowToBasicsView>(view: HowToBasicsView());
            thankYou.show()
            
            User.set(true, forKey: "ThankYouBanner")
        }
        else if !(User.object(forKey: "UncleNerdBanner") as? Bool ?? false) && false{
            let thankYou = SwifterPanel<IWantYouView>(view: IWantYouView());
            thankYou.show()
            
            User.set(true, forKey: "UncleNerdBanner")
        }
        else {
            if !Static.OpenAtStartup {
                if Static.OpenAtStartupPrompts < 2 {
                    Static.OpenAtStartupPrompts += 1
                    
                    delay(ms: 1000){
                        showStartAtLoginAlert()
                    }
                }
            }
        }
    }
    
    // Debug verboses
    public static let debugLastFrame = false
    public static let debugOneSpacePerTime = false //TODO: remove it
    public static let debugSideAboveBy = false
    public static let debugForceWorking = false // force window appears also when screen recording is not active
    //public static let debugDontLoad = true
    
    ///
    ///# Runtime variables
    ///
    public static var mouseInDisplay : Display?
    public static var isRecordingScreen = false
    
    ///
    ///# Computer static infos
    ///
    public static var serialNumber: String? {
        let platformExpert = IOServiceGetMatchingService(kIOMainPortDefault, IOServiceMatching("IOPlatformExpertDevice") )
        
        guard platformExpert > 0 else {
            return nil
        }
        
        guard let serialNumber = (IORegistryEntryCreateCFProperty(platformExpert, kIOPlatformSerialNumberKey as CFString, kCFAllocatorDefault, 0).takeUnretainedValue() as? String) else {
            return nil
        }
        
        
        IOObjectRelease(platformExpert)
        
        return serialNumber
    }
    
    ///
    ///# In-app lazy communication
    ///
    public static var curDisplay : Display?
    
    public static var mainWindow : NSWindow?
    public static var mainWindowFirstShow = false
    public static var mainWindowClosed = false
    public static var mainWindowInUsing = false
    public static var lastUsing : Double = 0
    
    public static var clipboard : Clipboard? 
    
    public static var captureView : CapturePreview.CaptureView?
    public static var storeView : StoreView?
    
    public static var disableScreenUpdate = false
    public static var strDraggingFile = ""
    public static var selectedClipboardItemId : Int = -1
    
    public static var isDraggingInside = false   
    public static var isDraggingFromPoint : NSPoint?
    
    public static var screenWake = false
    // A blocking extension-approval alert must never compete with the overscreen window.
    // Display.active uses this to keep every display dismissed for the alert's lifetime.
    public static var isExtensionApprovalPromptShowing = false
    
    public static var navWebView : NavigateWebView?
    
    static var curRequestAutomationPermission : SwifterWindow<RequestAutomationPermissions>?
    
    static var appExtensionManager : AppExtensionManager?
    
    static var isDragginApp : Bool = false
    static var isRemovingApp : Bool = false
    
    static let highPriorityQueue = DispatchQueue.global(qos: .userInitiated)
    
    ///
    ///# Cache
    ///
    public static var _cacheAsIconPreview : CGImage?
    public static var _alreadyCreatedTopMenuIcon : Bool = false
}
