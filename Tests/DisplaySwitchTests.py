#!/usr/bin/env python3
"""Compile production display routing/catalog/handoff with inert capture and UI doubles."""
from pathlib import Path
import subprocess
import tempfile

root = Path(__file__).resolve().parents[1]
displays = (root / 'MakeItHome/Managers/Displays.swift').read_text()
recorder = (root / 'MakeItHome/Managers/Capture/ScreenRecorder.swift').read_text()


def between(source, start, end):
    return source[source.index(start):source.index(end, source.index(start))]


fixture = r'''
import Foundation
import CoreGraphics

typealias CGDirectDisplayID = UInt32
@MainActor func CGPreflightScreenCaptureAccess() -> Bool { true }
struct SCDisplay: Equatable { let displayID: UInt32 }
struct SCWindow: Equatable { let id: Int }
struct SCShareableContent {
    let displays: [SCDisplay]
    var windows: [SCWindow] = []
    var applications: [Int] = []
}
struct Screen {
    static var screens: [Screen] = []
    static var main: Screen?
    let displayID: UInt32
    let frame: CGRect
    var backingScaleFactor: CGFloat = 1
}
typealias NSScreen = Screen
@MainActor enum Catalog {
    static var calls = 0
    static var pending: [CheckedContinuation<SCShareableContent?, Never>] = []
    static func query() async -> SCShareableContent? {
        calls += 1
        return await withCheckedContinuation { pending.append($0) }
    }
    static func complete(_ ids: [UInt32]) {
        precondition(pending.count == 1, "Concurrent callers must share one inventory request")
        pending.removeFirst().resume(returning: SCShareableContent(displays: ids.map { SCDisplay(displayID: $0) }))
    }
}
@MainActor final class CaptureView {
    var curDisplay: Display?
    var unsets = 0
    func unset() { unsets += 1 }
}
@MainActor final class CapturePreview {
    let captureView = CaptureView()
    let contentLayer: Layer? = Layer()
    var curFrame: CapturedFrame?
    var configurations = 0
    func currentDisplay(display: Display) { captureView.curDisplay = display; configurations += 1 }
    func setCurrentAbove(side: Int, aboveBy: CGFloat, display: Display) {}
    PRODUCTION_FRAME
}
final class Surface { func removeAllAttachments() {} }
final class Layer { var contents: Surface? }
struct CapturedFrame { let displayID: UInt32?; let surface: Surface? }
@MainActor final class ScreenRecorder {
    var availableDisplays: [SCDisplay] = []
    var availableWindows: [SCWindow] = []
    var availableApps: [Int] = []
    var selectedDisplay: SCDisplay?
    var selectedWindow: SCWindow?
    let capturePreview = CapturePreview()
    var starts: [UInt32] = []
    var stops = 0
    var consumers: [UUID: AsyncStream<Void>.Continuation] = [:]
    var run: UUID?
    var isRunning = false
    var recordingOnDisplay: UInt32 = 0
    var windowShowing = false
    func shareableContent(excludingDesktopWindows: Bool, onScreenWindowsOnly: Bool) async throws -> SCShareableContent? {
        await Catalog.query()
    }
    func filterWindows(_ windows: [SCWindow]) -> [SCWindow] { windows }
    func start(lowProfile: Bool, display: SCDisplay?) async {
        let id = UUID()
        run = id
        isRunning = true
        recordingOnDisplay = display!.displayID
        starts.append(display!.displayID)
        let frames = AsyncStream<Void> { consumers[id] = $0 }
        for await _ in frames {}
        consumers.removeValue(forKey: id)
        if run == id { isRunning = false; recordingOnDisplay = 0 }
    }
    func stop() async {
        stops += 1
        for consumer in consumers.values { consumer.finish() }
        isRunning = false
    }
    PRODUCTION_CATALOG
}
@MainActor final class Store { var screenRecorder: AnyObject; init(_ r: ScreenRecorder) { screenRecorder = r } }
@MainActor final class ContentView { let store: Store; init(_ r: ScreenRecorder) { store = Store(r) } }
@MainActor final class Window {
    var alphaValue: CGFloat = 1
    var ordersOut = 0
    func orderOut(_ sender: Any?) { ordersOut += 1 }
}
@MainActor final class ExtensionView { func exiting() {} }
@MainActor enum Static {
    static var OnAppExtensionZone = true
    static var isDraggingInside = true
    static var mainWindowInUsing = true
    static var disableScreenUpdate = false
    static var AppExtensionWebView: ExtensionView? = ExtensionView()
}
@MainActor enum NSEvent { static let mouseLocation = CGPoint(x: 2100, y: 500) }
@MainActor final class DisplaysManager {
    var displays: [Display] = []
    var curDisplay: Display?
    var contentView: ContentView?
    var capturePreview: AnyObject?
    var window: Window? = Window()
    private var recorderSelectionTask: Task<Void, Never>?
    private var recorderSelectionDisplayID: CGDirectDisplayID?
    private var recorderSelectionGeneration: UInt = 0
    private var capturePreviewNeedsConfiguration = true
    private weak var configuredCaptureDisplay: Display?
    private var captureCatalogNeedsInvalidation = false
    private var captureDisplayFrames: [CGDirectDisplayID: CGRect] = [:]
    private var captureDisplayScales: [CGDirectDisplayID: CGFloat] = [:]
    var mainScreenHeight: CGFloat = 0
    var screens: [Screen] = []
    init(_ recorder: ScreenRecorder) {
        contentView = ContentView(recorder)
        capturePreview = recorder.capturePreview
    }
    PRODUCTION_SELECTION
    PRODUCTION_ROUTING
    PRODUCTION_TOPOLOGY
    func cancel() { recorderSelectionTask?.cancel() }
}
@MainActor final class Display: Equatable {
    nonisolated static func == (lhs: Display, rhs: Display) -> Bool { lhs === rhs }
    var screen: Screen
    var found = true
    var loads = 0
    let manager: DisplaysManager
    var scDisplay: Any?
    var mouseIn = false
    var justArrived = false
    var eligible = true
    var flowGate = PreviewFlowGate()
    var currentSpaceId = 77
    var shortcutOpenTimer: Timer?
    var shortcutAnimationInProgress = false
    var aboveBy: CGFloat = 1
    var aboveByPixels: CGFloat = 400
    var prevAboveByPixels: CGFloat = 400
    var forceAboveBy: CGFloat = 100
    var overrideAboveByDiff: CGFloat = 100
    var ignoreMousePositionForAboveBy = 10
    var side = 2
    var sideToClose = 2
    var activateNewApp = true
    var timerHideWindowStarted = true
    var onMoreAboveBy = true
    var checkedDragging = true
    var recordingPaused = true
    var toBeRecorded = true
    var pendingWindowAfterClose: Int? = 9
    var frontAppBefore: Int? = 5
    var frontSpaceBefore = 77
    var edgeActivationPressure = [CGFloat](repeating: 40, count: 4)
    var windowHidden = false
    var fullOverscreenMode = false
    init(_ id: UInt32, _ frame: CGRect, _ manager: DisplaysManager) {
        self.screen = Screen(displayID: id, frame: frame)
        self.manager = manager
    }
    init(manager: DisplaysManager, screen: Screen) { self.manager = manager; self.screen = screen }
    func loadScreenInfo() { loads += 1 }
    func shouldKeepScreenRecorderActive() -> Bool { eligible && flowGate.allowsRecorder(authorized: true, activated: true, ready: true, disabled: false) }
    func cancelRecorderPrewarm() {}
    func resetMouseTrackingForShortcutAnimation(mouse: CGPoint) {}
    func outFullOverscreenMode() { fullOverscreenMode = false }
    func updatePerformanceActivity() {}
    PRODUCTION_LEAVE
    PRODUCTION_PAUSE
}

@main struct DisplaySwitchTests {
    @MainActor static func drain() async {
        // Settle MainActor/DispatchQueue continuations without hardware or sleeps.
        for _ in 0..<30 {
            await withCheckedContinuation { continuation in
                DispatchQueue.main.async { continuation.resume() }
            }
        }
    }
    @MainActor static func main() async {
        let recorder = ScreenRecorder()
        let manager = DisplaysManager(recorder)
        let a = Display(1, CGRect(x: 0, y: 0, width: 1920, height: 1080), manager)
        let b = Display(2, CGRect(x: 1920, y: 0, width: 1280, height: 1024), manager)
        let c = Display(3, CGRect(x: -1600, y: 900, width: 1600, height: 1200), manager)
        manager.displays = [a, b, c]
        manager.curDisplay = a
        a.mouseIn = true
        precondition(manager.getPointerDisplay(cursor: CGPoint(x: 2100, y: 500)) === b,
                     "An open overscreen on A must not pin a pointer physically on B")
        precondition(!a.mouseIn && b.mouseIn && b.justArrived)
        let flags = manager.displays.map { [$0.mouseIn, $0.justArrived] }
        precondition(manager.getPointerDisplay(cursor: CGPoint(x: -500, y: 1100), justGet: true) === c)
        precondition(flags == manager.displays.map { [$0.mouseIn, $0.justArrived] },
                     "Edge/forecast probes must not change real mouse ownership")
        precondition(manager.getPointerDisplay(cursor: CGPoint(x: 5000, y: 5000), justGet: true) == nil)
        precondition(manager.getPointerDisplay(cursor: CGPoint(x: 5000, y: 5000)) === a,
                     "Outside the known topology retains the current overscreen")

        let generation = a.flowGate.presentationGeneration
        a.leaveForAnotherDisplay()
        precondition(a.aboveByPixels == 0 && a.prevAboveByPixels == 0 && a.side == -1 && a.windowHidden)
        precondition(a.pendingWindowAfterClose == nil && a.edgeActivationPressure.allSatisfy { $0 == 0 })
        precondition(a.flowGate.presentationGeneration != generation && a.currentSpaceId == 77,
                     "Leaving cancels UI callbacks without inventing a Space transition")
        precondition(a.flowGate.interactionDismissalUntil == 0,
                     "Returning through a display edge must not add a pointer reentry cooldown")
        precondition(manager.window!.ordersOut == 1 && recorder.stops == 0,
                     "Leaving hides the old surface without stopping capture or restoring focus")

        recorder.availableDisplays = [SCDisplay(displayID: 1), SCDisplay(displayID: 2)]
        manager.curDisplay = b
        // Even an unresolved holder/Space transition does not delay recorder selection.
        b.flowGate.beginSpaceTransition(now: 100)
        manager.screenRecorderSelectDisplay()
        await drain()
        precondition(recorder.starts == [2] && Catalog.calls == 0,
                     "Warm crossings start from cached SCDisplay objects without enumerating windows")
        for _ in 0..<20 { manager.screenRecorderSelectDisplay() }
        await drain()
        precondition(recorder.starts == [2] && recorder.isRunning && Catalog.calls == 0,
                     "Repeated selection must not cancel a live frame consumer")
        manager.curDisplay = a
        manager.screenRecorderSelectDisplay()
        await drain()
        precondition(recorder.starts == [2, 1] && recorder.recordingOnDisplay == 1)
        precondition(recorder.capturePreview.configurations == 2)
        let oldSurface = Surface()
        let newSurface = Surface()
        recorder.capturePreview.updateFrame(CapturedFrame(displayID: 2, surface: oldSurface))
        precondition(recorder.capturePreview.curFrame == nil,
                     "Frames from the departed display cannot overwrite the new preview")
        recorder.capturePreview.updateFrame(CapturedFrame(displayID: 1, surface: newSurface))
        precondition(recorder.capturePreview.contentLayer?.contents === newSurface)
        b.recorderPause()
        await drain()
        precondition(recorder.stops == 0, "A retired display's queued pause cannot stop the new recorder")
        a.recorderPause()
        a.leaveForAnotherDisplay()
        // Model a rapid A -> B -> A before A's queued pause reaches main.
        await drain()
        precondition(recorder.stops == 0 && recorder.isRunning,
                     "A previous visit's pause cannot stop a fresh run after a round trip")
        manager.cancel()
        await drain()

        // Stall a cold query, then cross repeatedly while it is in flight.
        let coldRecorder = ScreenRecorder()
        let cold = DisplaysManager(coldRecorder)
        let x = Display(1, a.screen.frame, cold)
        let y = Display(2, b.screen.frame, cold)
        cold.curDisplay = x
        cold.screenRecorderSelectDisplay()
        await drain()
        precondition(Catalog.calls == 1 && Catalog.pending.count == 1)
        for _ in 0..<20 { cold.screenRecorderSelectDisplay() }
        cold.curDisplay = y
        cold.screenRecorderSelectDisplay()
        await drain()
        precondition(Catalog.calls == 1, "Crossings must share a pending inventory query")
        precondition(coldRecorder.capturePreview.captureView.curDisplay === y,
                     "Renderer ownership changes before a cold query returns")
        Catalog.complete([1, 2])
        await drain()
        precondition(coldRecorder.starts == [2] && coldRecorder.stops == 0,
                     "Only the final coordinate-selected display may start after a delayed query")
        cold.cancel()
        await drain()

        // A query begun before hot-plug/resolution invalidation cannot refill the cache.
        let topologyRecorder = ScreenRecorder()
        let pending = Task { await topologyRecorder.displayForCapture(id: 1) }
        await drain()
        topologyRecorder.invalidateAvailableContent()
        pending.cancel()
        Catalog.complete([1])
        let retiredResult = await pending.value
        precondition(retiredResult == nil, "Discard pre-topology content snapshots")
        let fresh = Task { await topologyRecorder.displayForCapture(id: 2) }
        await drain()
        Catalog.complete([2])
        let freshResult = await fresh.value
        precondition(freshResult?.displayID == 2, "Refresh after topology invalidation")
        let calls = Catalog.calls
        let cached = await topologyRecorder.displayForCapture(id: 2)
        precondition(cached?.displayID == 2 && Catalog.calls == calls)

        let staleQuery = Task { await topologyRecorder.refreshAvailableContent() }
        await drain()
        topologyRecorder.invalidateAvailableContent()
        let handoff = Task { await topologyRecorder.displayForCapture(id: 3) }
        await drain()
        Catalog.complete([2])
        await staleQuery.value
        await drain()
        precondition(Catalog.pending.count == 1,
                     "A handoff joining a retired query must retry once without more pointer movement")
        Catalog.complete([3])
        let handoffResult = await handoff.value
        precondition(handoffResult?.displayID == 3)

        // Exercise production discovery with synthetic NSScreens. Focus alone
        // cannot change the coordinate origin or invalidate the capture catalog.
        let discoveryRecorder = ScreenRecorder()
        let discovery = DisplaysManager(discoveryRecorder)
        NSScreen.screens = [a.screen, b.screen]
        NSScreen.main = b.screen
        discovery.initCurrentDisplays()
        await drain()
        precondition(discovery.mainScreenHeight == 1080 && discovery.displays.count == 2,
                     "WindowServer coordinate conversion must use the primary screen, not the focused screen")
        let ownedDisplay = discovery.displays[0]
        discoveryRecorder.availableDisplays = [SCDisplay(displayID: 1)]
        NSScreen.main = a.screen
        discovery.initCurrentDisplays()
        await drain()
        precondition(discovery.displays[0] === ownedDisplay && discoveryRecorder.availableDisplays.count == 1,
                     "A focus-only screen notification preserves display identity and the warm catalog")
        NSScreen.screens = [Screen(displayID: 1, frame: CGRect(x: 0, y: 0, width: 1600, height: 900)), b.screen]
        discovery.initCurrentDisplays()
        await drain()
        precondition(discovery.displays[0] === ownedDisplay && ownedDisplay.screen.frame.height == 900)
        precondition(discoveryRecorder.availableDisplays.isEmpty,
                     "A real resolution/topology change invalidates cached SCDisplay objects")
        print("DisplaySwitchTests: PASS (coordinates, read-only probes, immediate close, warm cache, rapid crossings, coalesced lookup, stale topology, retired pauses, frame ownership, primary origin, resolution changes)")
    }
}
'''
fixture = fixture.replace('PRODUCTION_CATALOG', between(
    recorder, '    private var contentRefreshTask:', '    private func filterWindows('))
fixture = fixture.replace('PRODUCTION_SELECTION', between(
    displays, '    func screenRecorderSelectDisplay()', '    public func getPointerDisplay('))
fixture = fixture.replace('PRODUCTION_ROUTING', between(
    displays, '    public func getPointerDisplay(', '    var menuBarView :'))
fixture = fixture.replace('PRODUCTION_TOPOLOGY', between(
    displays, '    func getDisplayFromNSScreen(', '    func screenRecorderSelectDisplay()').replace('    var screens : [NSScreen] = []', ''))
fixture = fixture.replace('PRODUCTION_LEAVE', between(
    displays, '    @MainActor func leaveForAnotherDisplay()', '    ///\n    ///# Satellites'))
fixture = fixture.replace('PRODUCTION_PAUSE', between(
    displays, '    func recorderPause()', '    private func resumeScreenRecordingForWindowPreviewsIfNeeded'))
preview = (root / 'MakeItHome/Managers/Capture/Views/CapturePreview.swift').read_text()
fixture = fixture.replace('PRODUCTION_FRAME', between(
    preview, '    func updateFrame(_ frame:', '    // The view isn\'t updatable.'))

with tempfile.TemporaryDirectory(prefix='mih-display-switch-') as directory:
    path = Path(directory)
    source = path / 'DisplaySwitchTests.swift'
    source.write_text(fixture)
    binary = path / 'display-switch-tests'
    subprocess.run(['swiftc', '-swift-version', '5', '-parse-as-library',
                    str(root / 'MakeItHome/Helpers/PreviewFlowGate.swift'), str(source), '-o', str(binary)], check=True)
    subprocess.run([str(binary)], check=True)
