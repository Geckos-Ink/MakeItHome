#!/usr/bin/env python3
"""Execute Display's production handoff with deterministic UI/process doubles.

This compiles the actual focusAppExtension method, rather than copying its animation, reset,
or activation logic. No WindowServer, capture permissions, or browser data needed.
"""
from pathlib import Path
import subprocess
import tempfile

root = Path(__file__).resolve().parents[1]
owner = root / 'MakeItHome/Managers/Displays.swift'
source = owner.read_text()
start = source.index('    func focusAppExtension(')
end = source.index('    private func rememberFocusBeforeShowing()', start)
method = source[start:end]
fixture = r'''
import Foundation
import CoreGraphics

enum Calls { static var values: [String] = [] }
class NSRunningApplication {
    static var registry: [Int32: NSRunningApplication] = [:]
    static var current: NSRunningApplication { registry[1]! }
    let processIdentifier: Int32
    let bundleIdentifier: String?
    var isTerminated = false
    init(id: Int32, bundle: String) { processIdentifier = id; bundleIdentifier = bundle }
    convenience init?(processIdentifier: Int32) {
        guard let app = Self.registry[processIdentifier] else { return nil }
        self.init(id: app.processIdentifier, bundle: app.bundleIdentifier!)
        isTerminated = app.isTerminated
    }
    struct Options: OptionSet {
        let rawValue: Int
        static let activateIgnoringOtherApps = Options(rawValue: 1)
    }
    @discardableResult func activate(from: NSRunningApplication, options: Options) -> Bool {
        Calls.values.append("activate:\(processIdentifier):from:\(from.processIdentifier)")
        return true
    }
    @discardableResult func activate(options: Options) -> Bool {
        Calls.values.append("activate:\(processIdentifier):legacy")
        return true
    }
}
class NSApplication {
    static let shared = NSApplication()
    func yieldActivation(to app: NSRunningApplication) { Calls.values.append("yield:\(app.processIdentifier)") }
}
enum NSEvent { static let mouseLocation = CGPoint(x: 1, y: 300) }
class Window {
    var alphaValue = 1.0
    var isOpaque = true
    func orderOut(_ sender: Any?) { Calls.values.append("orderOut") }
}
class ExtensionView { func exiting() { Calls.values.append("extensionExit") } }
enum Static {
    static var OnAppExtensionZone = true
    static var isDraggingInside = true
    static var mainWindowInUsing = true
    static var OverscreenSize: CGFloat = 400
    static var AppExtensionWebView: ExtensionView? = ExtensionView()
}
class CaptureView { func unset() { Calls.values.append("unset") } }
class CapturePreview {
    var captureView = CaptureView()
    func setCurrentAbove(side: Int, aboveBy: CGFloat, display: Display) {
        precondition(side == 2 && aboveBy >= 0 && aboveBy <= 800)
        Calls.values.append(aboveBy == 0 ? "previewZero" : "previewAnimated")
    }
}
class ScreenRecorder { var windowShowing = true }
class Store { var screenRecorder: Any = ScreenRecorder() }
class ContentView { var store = Store() }
class Manager {
    var window: Window? = Window()
    var capturePreview: Any? = CapturePreview()
    var contentView: ContentView? = ContentView()
}
class ProcessInfo {
    static let processInfo = ProcessInfo()
    var systemUptime: TimeInterval = 100
}
class NSWorkspace {
    static let shared = NSWorkspace()
    var accessibilityDisplayShouldReduceMotion = false
}
class Timer {
    var valid = true
    var block: ((Timer) -> Void)?
    init() {}
    init(timeInterval: TimeInterval, repeats: Bool, block: @escaping (Timer) -> Void) { self.block = block }
    func invalidate() { valid = false; Calls.values.append("cancelAnimation") }
    func fire() { if valid { block?(self) } }
}
class RunLoop {
    static let main = RunLoop()
    var timers: [Timer] = []
    enum Mode { case common }
    func add(_ timer: Timer, forMode: Mode) { timers.append(timer) }
    func advance(_ seconds: TimeInterval) {
        ProcessInfo.processInfo.systemUptime += seconds
        for timer in timers { timer.fire() }
        timers.removeAll { !$0.valid }
    }
}
@MainActor class Display {
    class AppWindows {
        let id: Int32
        let bundleId: String?
        var runningApp: NSRunningApplication
        init(id: Int32, bundle: String, cachedApp: NSRunningApplication) {
            self.id = id; bundleId = bundle; runningApp = cachedApp
        }
    }
    var flowGate = PreviewFlowGate()
    var manager = Manager()
    var fullOverscreenMode = false
    var pendingWindowAfterClose: Int? = 55
    var pendingAppExtensionFocus: (app: NSRunningApplication, completion: () -> Void)?
    var curFrontWindow: Int? = 55
    var frontAppBefore: NSRunningApplication? = .current
    var frontWindowIDBefore: Int? = 55
    var frontSpaceBefore = 3
    var side = 2, sideToClose = 2
    var shortcutOpenTimer: Timer? = Timer()
    var shortcutAnimationInProgress = true
    var aboveBy: CGFloat = 2, aboveByPixels: CGFloat = 800, prevAboveByPixels: CGFloat = 800
    var forceAboveBy: CGFloat = 1, overrideAboveByDiff: CGFloat = 50
    var ignoreMousePositionForAboveBy = 10
    var activateNewApp = true, checkedDragging = true, timerHideWindowStarted = true, onMoreAboveBy = true
    var edgeActivationPressure = [CGFloat](repeating: 35, count: 4)
    var lastMotionSampleTime = 0.0, previousMotionSpeed = 80.0
    var lastAcceleratedPointerPosition: CGPoint? = CGPoint(x: 1, y: 300)
    var windowHidden = false
    var curFrontApp: NSRunningApplication?
    func cancelRecorderPrewarm() { Calls.values.append("cancelPrewarm") }
    func resetMouseTrackingForShortcutAnimation(mouse: CGPoint) { Calls.values.append("resetMotion") }
    func updatePerformanceActivity() { Calls.values.append("performance") }
    func setRecorderProfile(lowProfile: Bool) { precondition(lowProfile); Calls.values.append("lowProfile") }
    func hideWindow() { Calls.values.append("hideQueued") }
    // PRODUCTION_METHOD
}
@main struct Tests {
    @MainActor static func main() {
        let current = NSRunningApplication(id: 1, bundle: "fixture.host")
        let target = NSRunningApplication(id: 2, bundle: "fixture.browser")
        NSRunningApplication.registry = [1: current, 2: target]
        // Reproduce a corrupted mutable app cache: the immutable owner still
        // identifies the browser, while runningApp points back to MakeItHome.
        let owner = Display.AppWindows(id: 2, bundle: "fixture.browser", cachedApp: current)
        let display = Display()
        let oldGeneration = display.flowGate.presentationGeneration
        var delivered = 0
        display.focusAppExtension(app: owner) {
            delivered += 1
            precondition(display.windowHidden && display.aboveByPixels == 0 && display.prevAboveByPixels == 0)
            precondition(Calls.values.contains("activate:2:from:1") || Calls.values.contains("activate:2:legacy"))
            Calls.values.append("selectionDelivered")
        }
        precondition(delivered == 0 && !display.windowHidden, "the close must animate before handing focus off")
        RunLoop.main.advance(0.03)
        precondition(display.aboveByPixels > 0 && display.aboveByPixels < 800)
        precondition(delivered == 0 && !display.windowHidden)
        precondition(Calls.values.contains("previewAnimated"))
        precondition(!Calls.values.contains("yield:2"), "focus must wait for the closing frames")
        RunLoop.main.advance(0.1)
        precondition(delivered == 1, "selection must be delivered at animation completion without a hide timer or pointer tick")
        precondition(display.curFrontApp?.processIdentifier == 2, "focus must resolve the immutable owner PID")
        precondition(display.aboveBy == 0 && display.forceAboveBy == 0 && display.overrideAboveByDiff == 0)
        precondition(display.side == -1 && display.sideToClose == -1 && display.ignoreMousePositionForAboveBy == 0)
        precondition(!display.shortcutAnimationInProgress && display.shortcutOpenTimer == nil)
        precondition(!display.onMoreAboveBy && !Static.OnAppExtensionZone && !Static.mainWindowInUsing)
        precondition(display.edgeActivationPressure.allSatisfy { $0 == 0 })
        precondition(display.pendingWindowAfterClose == nil && display.frontAppBefore == nil && display.curFrontWindow == nil)
        precondition(display.manager.window?.alphaValue == 0)
        precondition(!Calls.values.contains("hideQueued"), "the old deferred-close race must remain absent")
        precondition(!display.flowGate.allowsScheduledPresentation(generation: oldGeneration,
                                                                  now: ProcessInfo.processInfo.systemUptime + 10))
        if #available(macOS 14.0, *) {
            precondition(Calls.values.firstIndex(of: "yield:2")! < Calls.values.firstIndex(of: "activate:2:from:1")!)
        }
        precondition(Calls.values.last == "selectionDelivered")

        let rejected = Display()
        let mismatchedOwner = Display.AppWindows(id: 1, bundle: "fixture.browser", cachedApp: target)
        rejected.focusAppExtension(app: mismatchedOwner) { preconditionFailure("wrong identity delivered") }
        precondition(!rejected.windowHidden && rejected.aboveByPixels == 800)
        target.isTerminated = true
        rejected.focusAppExtension(app: owner) { preconditionFailure("terminated owner delivered") }
        target.isTerminated = false
        rejected.fullOverscreenMode = true
        rejected.focusAppExtension(app: owner) { preconditionFailure("fullscreen search interrupted") }
        NSWorkspace.shared.accessibilityDisplayShouldReduceMotion = true
        let reduced = Display()
        var reducedDelivered = 0
        reduced.focusAppExtension(app: owner) { reducedDelivered += 1 }
        precondition(reducedDelivered == 1 && reduced.windowHidden && reduced.aboveByPixels == 0)
        NSWorkspace.shared.accessibilityDisplayShouldReduceMotion = false
        let newer = Display()
        var olderDelivered = 0, newerDelivered = 0
        newer.focusAppExtension(app: owner) { olderDelivered += 1 }
        RunLoop.main.advance(0.02)
        newer.focusAppExtension(app: owner) { newerDelivered += 1 }
        RunLoop.main.advance(0.13)
        precondition(olderDelivered == 0 && newerDelivered == 1, "a superseded animation must not switch tabs later")
        print("ExtensionFocusHandoffTests: PASS (production close/reset, stale process cache, activation order, 120 ms animation, reduced motion, superseded close, cancelled shows, invalid owners)")
    }
}
'''.replace('    // PRODUCTION_METHOD', method)
with tempfile.TemporaryDirectory(prefix='makeithome-extension-focus-') as directory:
    temp = Path(directory)
    fixture_path = temp / 'HandoffTests.swift'
    fixture_path.write_text(fixture)
    binary = temp / 'handoff-tests'
    subprocess.run(['swiftc', '-O', '-parse-as-library', '-module-cache-path', str(temp / 'modules'),
                    str(root / 'MakeItHome/Helpers/PreviewFlowGate.swift'), str(fixture_path), '-o', str(binary)], check=True)
    subprocess.run([str(binary)], check=True)
