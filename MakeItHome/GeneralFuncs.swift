//
//  GeneralFuncs.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 18/11/22.
//

import Foundation
import IOKit.ps
import AppKit
import Carbon

public class GeneralFuncs {
    public static func ComputerIsConnectedToAdapter() -> Bool{
        //TODO: Currently disabled for debug purposes
        return true
        
        #if arch(arm64)
        let isPowerAdapterConnected = IOPSCopyExternalPowerAdapterDetails()?.takeRetainedValue() != nil
        return isPowerAdapterConnected
        
        #else
        return true
        #endif
    }
    
    func warnAboutInputMonitoringPermission() {
        // Permission denied
        let alert = NSAlert()
        alert.messageText = "Input Monitoring Permission Required"
        alert.informativeText = "This app requires Input Monitoring permission to function properly. Please enable it in System Preferences -> Security & Privacy -> Input Monitoring."
        alert.addButton(withTitle: "OK")
        alert.runModal()
    }
}

func calculateDistance(point1: NSPoint, point2: NSPoint) -> CGFloat {
    let distance = hypot(point2.x - point1.x, point2.y - point1.y)
    return distance
}

func delay(ms: Int, closure: @escaping () -> Void) {
    DispatchQueue.global().asyncAfter(deadline: .now() + .milliseconds(ms)) {
        DispatchQueue.main.async {
            closure()
        }
    }
}

func performHaptic(){
    print("haptic")
    
    for var i in 0...4{
        delay(ms: 5*i){
            NSHapticFeedbackManager.defaultPerformer.perform(
                NSHapticFeedbackManager.FeedbackPattern.generic,
                performanceTime: NSHapticFeedbackManager.PerformanceTime.now
            )
        }
    }
}

func generateRandomString(length: Int) -> String {
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let charactersArray = Array(characters)
    var randomString = ""

    for _ in 0..<length {
        let randomIndex = Int.random(in: 0..<charactersArray.count)
        randomString.append(charactersArray[randomIndex])
    }

    return randomString
}

final class PermissionsService: ObservableObject {
    // Store the active trust state of the app.
    @Published var isTrusted: Bool = AXIsProcessTrusted()

    // Poll the accessibility state every 1 second to check
    //  and update the trust status.
    func pollAccessibilityPrivileges() {
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.0) {
            self.isTrusted = AXIsProcessTrusted()

            if !self.isTrusted {
                self.pollAccessibilityPrivileges()
            }
        }
    }

    // Request accessibility permissions, this should prompt
    //  macOS to open and present the required dialogue open
    //  to the correct page for the user to just hit the add
    //  button.
    static func acquireAccessibilityPrivileges() {
        let options: NSDictionary = [kAXTrustedCheckOptionPrompt.takeRetainedValue() as NSString: true]
        let enabled = AXIsProcessTrustedWithOptions(options)
    }
    
    static func checkAccessibilityPrivileges(){
        if !AXIsProcessTrustedWithOptions([kAXTrustedCheckOptionPrompt.takeRetainedValue() as NSString: true] as CFDictionary) {
            // Require accessibility permissions
            PermissionsService.acquireAccessibilityPrivileges()
        }
    }
}

final class GlobalShortcutManager {
    static let shared = GlobalShortcutManager()
    
    static let openSideShortcutDescription = "⌃⌥⌘ + Arrow"
    static let toggleDisplayShortcutDescription = "⌃⌥⌘↩"
    
    private enum Action: UInt32 {
        case openLeft = 1
        case openRight = 2
        case openBottom = 3
        case openTop = 4
        case toggleCurrentDisplay = 5
    }
    
    private static let signature = fourCharCode("MIHS")
    private let modifierFlags = UInt32(controlKey | optionKey | cmdKey)
    private var hotKeyRefs: [UInt32: EventHotKeyRef] = [:]
    private var eventHandlerRef: EventHandlerRef?
    
    private init() {}
    
    func setEnabled(_ enabled: Bool) {
        if enabled {
            PermissionsService.checkAccessibilityPrivileges()
            start()
        }
        else {
            stop()
        }
    }
    
    private func start() {
        if eventHandlerRef == nil {
            var eventType = EventTypeSpec(eventClass: OSType(kEventClassKeyboard),
                                          eventKind: UInt32(kEventHotKeyPressed))
            let status = InstallEventHandler(GetApplicationEventTarget(),
                                             GlobalShortcutManager.eventHandler,
                                             1,
                                             &eventType,
                                             UnsafeMutableRawPointer(Unmanaged.passUnretained(self).toOpaque()),
                                             &eventHandlerRef)
            if status != noErr {
                print("Unable to install global shortcut handler:", status)
                return
            }
        }
        
        guard hotKeyRefs.isEmpty else {
            return
        }
        
        registerHotKey(keyCode: UInt32(kVK_LeftArrow), action: .openLeft)
        registerHotKey(keyCode: UInt32(kVK_RightArrow), action: .openRight)
        registerHotKey(keyCode: UInt32(kVK_DownArrow), action: .openBottom)
        registerHotKey(keyCode: UInt32(kVK_UpArrow), action: .openTop)
        registerHotKey(keyCode: UInt32(kVK_Return), action: .toggleCurrentDisplay)
    }
    
    private func stop() {
        for ref in hotKeyRefs.values {
            UnregisterEventHotKey(ref)
        }
        hotKeyRefs.removeAll()
        
        if let eventHandlerRef {
            RemoveEventHandler(eventHandlerRef)
            self.eventHandlerRef = nil
        }
    }
    
    private func registerHotKey(keyCode: UInt32, action: Action) {
        var hotKeyRef: EventHotKeyRef?
        let hotKeyID = EventHotKeyID(signature: Self.signature, id: action.rawValue)
        let status = RegisterEventHotKey(keyCode,
                                         modifierFlags,
                                         hotKeyID,
                                         GetApplicationEventTarget(),
                                         0,
                                         &hotKeyRef)
        
        if status == noErr, let hotKeyRef {
            hotKeyRefs[action.rawValue] = hotKeyRef
        }
        else {
            print("Unable to register global shortcut \(action):", status)
        }
    }
    
    private static let eventHandler: EventHandlerUPP = { _, eventRef, userData in
        guard let eventRef, let userData else {
            return OSStatus(eventNotHandledErr)
        }
        
        var hotKeyID = EventHotKeyID(signature: 0, id: 0)
        let status = GetEventParameter(eventRef,
                                       EventParamName(kEventParamDirectObject),
                                       EventParamType(typeEventHotKeyID),
                                       nil,
                                       MemoryLayout<EventHotKeyID>.size,
                                       nil,
                                       &hotKeyID)
        
        guard status == noErr, hotKeyID.signature == GlobalShortcutManager.signature else {
            return OSStatus(eventNotHandledErr)
        }
        
        let manager = Unmanaged<GlobalShortcutManager>.fromOpaque(userData).takeUnretainedValue()
        Task { @MainActor in
            manager.handleHotKey(id: hotKeyID.id)
        }
        
        return OSStatus(noErr)
    }
    
    @MainActor
    private func handleHotKey(id: UInt32) {
        guard let action = Action(rawValue: id) else {
            return
        }
        
        switch action {
        case .openLeft:
            currentDisplay()?.openSideFromShortcut(side: 0)
        case .openRight:
            currentDisplay()?.openSideFromShortcut(side: 1)
        case .openBottom:
            currentDisplay()?.openSideFromShortcut(side: 2)
        case .openTop:
            currentDisplay()?.openSideFromShortcut(side: 3)
        case .toggleCurrentDisplay:
            currentDisplay()?.toggleDisabledFromShortcut()
        }
    }
    
    @MainActor
    private func currentDisplay() -> Display? {
        return Static.mouseInDisplay ?? Static.curDisplay
    }
    
    private static func fourCharCode(_ value: String) -> OSType {
        return value.utf8.reduce(0) { ($0 << 8) + OSType($1) }
    }
}

final class ShortcutStatusHUD {
    static let shared = ShortcutStatusHUD()
    
    private var panel: NSPanel?
    private var closeWorkItem: DispatchWorkItem?
    
    private init() {}
    
    @MainActor
    func show(displayName: String, enabled: Bool, on screen: NSScreen) {
        closeWorkItem?.cancel()
        
        let panel = self.panel ?? makePanel()
        self.panel = panel
        
        let contentView = makeContentView(displayName: displayName, enabled: enabled)
        panel.contentView = contentView
        panel.setContentSize(NSSize(width: 260, height: 160))
        
        let frame = screen.frame
        panel.setFrameOrigin(NSPoint(x: frame.midX - 130, y: frame.midY - 80))
        panel.alphaValue = 1
        panel.orderFrontRegardless()
        
        let closeWorkItem = DispatchWorkItem { [weak self, weak panel] in
            NSAnimationContext.runAnimationGroup { context in
                context.duration = 0.2
                panel?.animator().alphaValue = 0
            } completionHandler: {
                panel?.orderOut(nil)
                panel?.alphaValue = 1
                if self?.panel === panel {
                    self?.panel = nil
                }
            }
        }
        
        self.closeWorkItem = closeWorkItem
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.1, execute: closeWorkItem)
    }
    
    private func makePanel() -> NSPanel {
        let panel = NSPanel(contentRect: NSRect(x: 0, y: 0, width: 260, height: 160),
                            styleMask: [.borderless, .nonactivatingPanel],
                            backing: .buffered,
                            defer: false)
        panel.level = .statusBar
        panel.collectionBehavior = [.canJoinAllSpaces, .fullScreenAuxiliary]
        panel.isOpaque = false
        panel.backgroundColor = .clear
        panel.hasShadow = true
        panel.ignoresMouseEvents = true
        return panel
    }
    
    private func makeContentView(displayName: String, enabled: Bool) -> NSView {
        let visualEffectView = NSVisualEffectView(frame: NSRect(x: 0, y: 0, width: 260, height: 160))
        visualEffectView.material = .hudWindow
        visualEffectView.blendingMode = .behindWindow
        visualEffectView.state = .active
        visualEffectView.wantsLayer = true
        visualEffectView.layer?.cornerRadius = 18
        visualEffectView.layer?.masksToBounds = true
        
        let stack = NSStackView()
        stack.orientation = .vertical
        stack.alignment = .centerX
        stack.spacing = 8
        stack.translatesAutoresizingMaskIntoConstraints = false
        
        let image = NSImage(systemSymbolName: enabled ? "display" : "display.trianglebadge.exclamationmark",
                            accessibilityDescription: nil)
        let imageView = NSImageView(image: image ?? NSImage())
        imageView.symbolConfiguration = NSImage.SymbolConfiguration(pointSize: 42, weight: .regular)
        imageView.contentTintColor = enabled ? .systemGreen : .systemRed
        
        let title = NSTextField(labelWithString: enabled ? "MakeItHome Enabled" : "MakeItHome Disabled")
        title.font = .systemFont(ofSize: 18, weight: .semibold)
        title.textColor = .white
        title.alignment = .center
        
        let subtitle = NSTextField(labelWithString: displayName)
        subtitle.font = .systemFont(ofSize: 13, weight: .regular)
        subtitle.textColor = .secondaryLabelColor
        subtitle.alignment = .center
        
        stack.addArrangedSubview(imageView)
        stack.addArrangedSubview(title)
        stack.addArrangedSubview(subtitle)
        
        visualEffectView.addSubview(stack)
        NSLayoutConstraint.activate([
            stack.centerXAnchor.constraint(equalTo: visualEffectView.centerXAnchor),
            stack.centerYAnchor.constraint(equalTo: visualEffectView.centerYAnchor),
            stack.leadingAnchor.constraint(greaterThanOrEqualTo: visualEffectView.leadingAnchor, constant: 16),
            stack.trailingAnchor.constraint(lessThanOrEqualTo: visualEffectView.trailingAnchor, constant: -16)
        ])
        
        return visualEffectView
    }
}
