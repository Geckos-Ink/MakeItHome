//
//  ScreenRecorder.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 23/10/22.
//

import Foundation
import ScreenCaptureKit
import Combine
import OSLog
import SwiftUI

/// A provider of audio levels from the captured samples.
class AudioLevelsProvider: ObservableObject {
    @Published var audioLevels = AudioLevels.zero
}

@MainActor
@available(macOS 12.3, *)
class ScreenRecorder: ObservableObject {
    
    public var windowShowing = false
    public var contentView : ContentView?
    
    /// The supported capture types.
    enum CaptureType {
        case display
        case window
    }
    
    private let logger = Logger()
    
    @Published var isRunning = false
    
    // MARK: - Video Properties
    @Published var captureType: CaptureType = .display {
        didSet { updateEngine() }
    }
    
    @Published var selectedDisplay: SCDisplay? {
        didSet { updateEngine() }
    }
    
    @Published var selectedWindow: SCWindow? {
        didSet { updateEngine() }
    }    
    
    @Published var isAppExcluded = true {
        didSet { updateEngine() }
    }
    
    @Published var contentSize = CGSize(width: 1, height: 1)
    private var scaleFactor: Int {
        //Int(NSScreen.main?.backingScaleFactor ?? 2)
        Int(contentView?.Displays.curDisplay?.scale ?? 2)
    }
    
    /// A view that renders the screen content.
    lazy var capturePreview: CapturePreview = {
        //CapturePreview(screenRecorder: self)
        CapturePreview() // metal to the pedal
    }()
    
    private var availableApps = [SCRunningApplication]()
    @Published private(set) var availableDisplays = [SCDisplay]()
    @Published private(set) var availableWindows = [SCWindow]()
    
    // MARK: - Audio Properties
    @Published var isAudioCaptureEnabled = false {
        didSet {
            updateEngine()
            if isAudioCaptureEnabled {
                startAudioMetering()
            } else {
                stopAudioMetering()
            }
        }
    }
    @Published var isAppAudioExcluded = false { didSet { updateEngine() } }
    @Published private(set) var audioLevelsProvider = AudioLevelsProvider()
    // A value that specifies how often to retrieve calculated audio levels.
    private let audioLevelRefreshRate: TimeInterval = 0.1
    private var audioMeterCancellable: AnyCancellable?
    
    // The object that manages the SCStream.
    private let captureEngine = CaptureEngine()
    
    private var isSetup = true
    
    // Combine subscribers.
    private var subscriptions = Set<AnyCancellable>()
    private var permissionRequestGate = ScreenRecordingPermissionGate()
    private static var cursorControlRequestScheduled = false
    private static var permissionOnboarding: ScreenRecordingPermissionOnboarding {
        get {
            ScreenRecordingPermissionOnboarding(rawValue: Static.User.string(forKey: "ScreenRecordingPermissionOnboarding") ?? "") ?? .notRequested
        }
        set {
            Static.User.set(newValue.rawValue, forKey: "ScreenRecordingPermissionOnboarding")
        }
    }

    private static func scheduleCursorControlRequestIfNeeded(screenRecordingGranted: Bool) {
        guard permissionOnboarding.shouldRequestCursorControl(screenRecordingGranted: screenRecordingGranted),
              !cursorControlRequestScheduled else { return }
        cursorControlRequestScheduled = true

        DispatchQueue.main.asyncAfter(deadline: .now() + 1) {
            cursorControlRequestScheduled = false
            guard permissionOnboarding.shouldRequestCursorControl(screenRecordingGranted: CGPreflightScreenCaptureAccess()),
                  let position = CGEvent(source: nil)?.location,
                  let event = CGEvent(mouseEventSource: nil, mouseType: .mouseMoved,
                                      mouseCursorPosition: position, mouseButton: .left) else { return }

            // Use the current Quartz coordinates, including on secondary displays.
            // Posting the same-position move triggers macOS's cursor-control permission flow.
            permissionOnboarding = .completed
            event.post(tap: .cghidEventTap)
        }
    }

    /// Both startup checks and display refreshes can trigger the macOS permission prompt.
    private func shareableContent(excludingDesktopWindows: Bool,
                                  onScreenWindowsOnly: Bool) async throws -> SCShareableContent? {
        let needsPermission = !CGPreflightScreenCaptureAccess()
        Self.scheduleCursorControlRequestIfNeeded(screenRecordingGranted: !needsPermission)
        if needsPermission {
            guard permissionRequestGate.beginRequest(now: ProcessInfo.processInfo.systemUptime) else {
                return nil
            }
            Self.permissionOnboarding.noteScreenRecordingRequest()
        }
        defer {
            if needsPermission {
                permissionRequestGate.finishRequest()
            }
        }
        let content = try await SCShareableContent.excludingDesktopWindows(excludingDesktopWindows,
                                                                         onScreenWindowsOnly: onScreenWindowsOnly)
        Self.scheduleCursorControlRequestIfNeeded(screenRecordingGranted: true)
        return content
    }
    
    var canRecord: Bool {
        get async {
            do {
                // If the app doesn't have Screen Recording permission, this call generates an exception.
                return try await shareableContent(excludingDesktopWindows: false,
                                                  onScreenWindowsOnly: true) != nil
            } catch {
                return false
            }
        }
    }
    
    func monitorAvailableContent() async {
        guard !isSetup else { return }
        
        // Refresh the lists of capturable content.
        await self.refreshAvailableContent()
        Timer.publish(every: 3, on: .main, in: .common).autoconnect().sink { [weak self] _ in
            guard let self = self else { return }
            Task {
                await self.refreshAvailableContent()
            }
        }
        .store(in: &subscriptions)
    }
    
    var priorityFrameRate = 5
    public var isLowPriority = true
    public var priorityScale : CGFloat = 1
    public var lastFrame : CapturedFrame? = nil
    public var lastFrameTime : Double = 0
    
    let lowProfileFPS = 10
    let lowProfileDepth = 4
    
    @MainActor public var recordingOnDisplay : CGDirectDisplayID = 0
    private var captureRunID: UInt = 0
    private var captureIntentID: UInt = 0
    private var stopOperationID: UInt = 0
    private var captureStopTask: Task<Void, Never>?
    private var captureUpdateTask: Task<Void, Never>?
    private var isStarting = false

    #if STRESS_TEST_APP
    private(set) var capturedFrameCount = 0
    private(set) var stressConsumerID: UUID?
    func ownedCaptureStreamGeneration() async -> UInt? {
        await captureEngine.ownedStreamGeneration()
    }
    #endif
    
    /// Starts capturing screen content.
    func start(lowProfile: Bool = false, display: SCDisplay? = nil) async {
        captureIntentID &+= 1
        let intentID = captureIntentID

        if(display != nil){
            selectedDisplay = display
        }
        
        guard let targetDisplayID = selectedDisplay?.displayID else {
            return
        }
        
        let previousLowPriority = isLowPriority
        let previousPriorityScale = priorityScale
        
        self.isLowPriority = lowProfile
        
        priorityScale = Static.EnableRecordingHalfInLowPriority && lowProfile ? 2 : 1
        
        let p = lowProfile ? lowProfileFPS : Static.ScreenRecorderHighPriorityFPS
        
        let frameRateChanged = p != priorityFrameRate
        let profileChanged = previousLowPriority != isLowPriority || previousPriorityScale != priorityScale
        let staleFrame = lastFrame.map { Date().timeIntervalSince1970 - $0.captureTime > 1 } ?? false
        
        if recordingOnDisplay == targetDisplayID, isRunning, !isStarting, !staleFrame {
            if frameRateChanged || profileChanged, let filter = contentFilter {
                self.priorityFrameRate = p
                captureUpdateTask?.cancel()
                await captureUpdateTask?.value
                captureUpdateTask = nil
                guard intentID == captureIntentID else {
                    return
                }
                await captureEngine.update(configuration: streamConfiguration, filter: filter)
            }
            return
        }
        
        self.priorityFrameRate = p
        
        if isRunning || captureStopTask != nil {
            await stopCaptureEngine()
            guard intentID == captureIntentID else {
                return
            }
        }
        
        if !isSetup {
            // Starting polling for available screen content.
            await monitorAvailableContent()
            guard intentID == captureIntentID else {
                return
            }
            isSetup = true
        }
        
        // If the user enables audio capture, start monitoring the audio stream.
        if isAudioCaptureEnabled {
            startAudioMetering()
        }
        
        var startingRunID: UInt?
        do {
            let config = streamConfiguration
            let filter = contentFilter

            if filter == nil || intentID != captureIntentID {
                return
            }
            
            // Update the running state.
            
            // Start the stream and await new video frames.
            captureRunID &+= 1
            let runID = captureRunID
            #if STRESS_TEST_APP
            stressConsumerID = CaptureStressContext.consumerID
            #endif
            startingRunID = runID
            lastFrame = nil
            lastFrameTime = 0
            isStarting = true
            isRunning = true
            Static.isRecordingScreen = true
            recordingOnDisplay = targetDisplayID

            let frames = await captureEngine.startCapture(configuration: config, filter: filter!)
            guard intentID == captureIntentID, runID == captureRunID else {
                return
            }
            isStarting = false
            print("recording started! display", targetDisplayID)
            
            for try await frame in frames {
                guard runID == captureRunID else {
                    break
                }
                
                if(Static.debugLastFrame){
                    print("lastFrame", NSDate().timeIntervalSince1970)
                }
                                
                lastFrame = frame
                lastFrame!.displayID = targetDisplayID

                #if STRESS_TEST_APP
                capturedFrameCount += 1
                #endif
                
                capturePreview.updateFrame(frame)
                
                lastFrameTime = Date().timeIntervalSince1970
                Static.curDisplay?.lastRecorderUpdate = lastFrameTime
                
                if contentSize != frame.size {
                    // Update the content size if it changed.
                    contentSize = frame.size
                }
            }
            
            if runID == captureRunID {
                // Cancellation of the consuming task also ends frame iteration.
                // Release the SCStream before making this recorder eligible to start again.
                await stopCaptureEngine()
            }
        } catch {
            guard startingRunID == captureRunID else {
                return
            }
            logger.error("Capture stream ended with error: \(error.localizedDescription)")
            await stopCaptureEngine()
        }
    }
    
    /// Stops capturing screen content.
    func stop() async {
        captureIntentID &+= 1
        await stopCaptureEngine()
    }

    /// Serializes the suspending SCStream stop. A newer start waits for this exact operation;
    /// an older start that resumes afterwards is rejected by `captureIntentID`.
    private func stopCaptureEngine() async {
        let needsEngineStop = isRunning || recordingOnDisplay != 0
        #if STRESS_TEST_APP
        stressConsumerID = nil
        #endif
        captureRunID &+= 1
        recordingOnDisplay = 0
        lastFrame = nil
        lastFrameTime = 0
        Static.isRecordingScreen = false
        isRunning = false
        isStarting = false

        stopAudioMetering()

        // Reserve the stop before the first suspension. A concurrent start must
        // see and await it even while an older configuration update is draining.
        let updateTask = captureUpdateTask
        updateTask?.cancel()
        captureUpdateTask = nil

        if let captureStopTask {
            await captureStopTask.value
            return
        }

        guard needsEngineStop else {
            await updateTask?.value
            return
        }

        stopOperationID &+= 1
        let operationID = stopOperationID
        let stopTask = Task { [captureEngine] in
            await updateTask?.value
            await captureEngine.stopCapture()
        }
        captureStopTask = stopTask
        await stopTask.value

        if operationID == stopOperationID {
            captureStopTask = nil
        }
        // A newer start may already have resumed; do not clear its running state here.
    }
    
    private func startAudioMetering() {
        audioMeterCancellable = Timer.publish(every: 0.1, on: .main, in: .common).autoconnect().sink { [weak self] _ in
            guard let self = self else { return }
            self.audioLevelsProvider.audioLevels = self.captureEngine.audioLevels
        }
    }
    
    private func stopAudioMetering() {
        audioMeterCancellable?.cancel()
        audioLevelsProvider.audioLevels = AudioLevels.zero
    }
    
    /// - Tag: UpdateCaptureConfig
    private func updateEngine() {
        guard isRunning, let filter = contentFilter else { return }

        let configuration = streamConfiguration
        let runID = captureRunID
        captureUpdateTask?.cancel()
        captureUpdateTask = Task { [weak self, captureEngine] in
            guard let self,
                  !Task.isCancelled,
                  self.isRunning,
                  runID == self.captureRunID else {
                return
            }

            await captureEngine.update(configuration: configuration, filter: filter)
        }
    }
    
    /// - Tag: UpdateFilter
    private var contentFilter: SCContentFilter? {
        let filter: SCContentFilter
        switch captureType {
        case .display:
            guard let display = selectedDisplay else { return nil }
            var excludedApps = [SCRunningApplication]()
            // If a user chooses to exclude the app from the stream,
            // exclude it by matching its bundle identifier.
            if isAppExcluded {
                excludedApps = availableApps.filter { app in
                    Bundle.main.bundleIdentifier == app.bundleIdentifier
                }
            }
            // Create a content filter with excluded apps.
            filter = SCContentFilter(display: display,
                                     excludingApplications: excludedApps,
                                     exceptingWindows: availableWindows)
        case .window:
            guard let window = selectedWindow else { fatalError("No window selected.") }
            
            // Create a content filter that includes a single window.
            filter = SCContentFilter(desktopIndependentWindow: window)
        }
        return filter
    }
    
    private var streamConfiguration: SCStreamConfiguration {
        
        let streamConfig = SCStreamConfiguration()
        
        // Configure audio capture. (EXCLUDED)
        //todo: study why Value of type 'SCStreamConfiguration' has no member 'excludesCurrentProcessAudio'
        //streamConfig.capturesAudio = isAudioCaptureEnabled
        //streamConfig.excludesCurrentProcessAudio = isAppAudioExcluded
        streamConfig.showsCursor = false        
        
        // Configure the display content width and height.
        if captureType == .display, let display = selectedDisplay {
            streamConfig.width = display.width * scaleFactor / Int(priorityScale)
            streamConfig.height = display.height * scaleFactor / Int(priorityScale)
            
            if isLowPriority{
                streamConfig.scalesToFit = true
            }
        }
        
        // Configure the window content width and height.
        if captureType == .window, let window = selectedWindow {
            streamConfig.width = Int(window.frame.width) * scaleFactor
            streamConfig.height = Int(window.frame.height) * scaleFactor
        }
                
        // Set the capture interval at 25 fps.
        streamConfig.minimumFrameInterval = CMTime(value: 1, timescale: CMTimeScale(self.priorityFrameRate))
        
        // Increase the depth of the frame queue to ensure high fps at the expense of increasing
        // the memory footprint of WindowServer.
        streamConfig.queueDepth = (self.isLowPriority ? lowProfileDepth : 7) + (Static.IsCaptureHigherPriority ? 1 : 0) // was 8
        // todo: make lowProfileDepth and "7" a Static variable
        
        return streamConfig
    }
    
    /// - Tag: GetAvailableContent
    public func refreshAvailableContent() async {
        do {
            // Retrieve the available screen content to capture.
            guard let availableContent = try await shareableContent(excludingDesktopWindows: true,
                                                                   onScreenWindowsOnly: false) else { return }
            availableDisplays = availableContent.displays
            
            let windows = filterWindows(availableContent.windows)
            if windows != availableWindows {
                availableWindows = windows
            }
            
            availableApps = availableContent.applications
            
            if selectedDisplay == nil {
                selectedDisplay = availableDisplays.first
            }
            if selectedWindow == nil {
                selectedWindow = availableWindows.first
            }
        } catch {
            print("Failed to get the shareable content: \(error.localizedDescription)")
        }
    }
    
    private func filterWindows(_ windows: [SCWindow]) -> [SCWindow] {
        windows
        // Sort the windows by app name.
            //.sorted { $0.owningApplication?.applicationName ?? "" < $1.owningApplication?.applicationName ?? "" }
        // Remove windows that don't have an associated .app bundle.
            //.filter { $0.owningApplication != nil && $0.owningApplication?.applicationName != "" }
        // I want only the MakeItHome icon
            .filter { $0.owningApplication?.bundleIdentifier == Bundle.main.bundleIdentifier }
            .filter { $0.title == "Item-0" }
    }
}

@available(macOS 12.3, *) extension SCWindow {
    var displayName: String {
        switch (owningApplication, title) {
        case (.some(let application), .some(let title)):
            return "\(application.applicationName): \(title)"
        case (.none, .some(let title)):
            return title
        case (.some(let application), .none):
            return "\(application.applicationName): \(windowID)"
        default:
            return ""
        }
    }
}

@available(macOS 12.3, *) extension SCDisplay {
    var displayName: String {
        "Display: \(width) x \(height)"
    }
}
