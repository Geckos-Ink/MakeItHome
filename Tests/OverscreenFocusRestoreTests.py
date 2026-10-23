#!/usr/bin/env python3
"""Exercise production no-selection hide/focus restoration with inert UI/process APIs."""
from pathlib import Path
import subprocess
import tempfile

root = Path(__file__).resolve().parents[1]
displays = (root / 'MakeItHome/Managers/Displays.swift').read_text()


def between(start, end):
    return displays[displays.index(start):displays.index(end, displays.index(start))]


fixture = r'''
import Foundation

enum Calls { static var values: [String] = [] }
final class NSRunningApplication: Equatable {
    static let current = NSRunningApplication(1)
    let id: Int
    var isTerminated = false
    init(_ id: Int) { self.id = id }
    static func == (lhs: NSRunningApplication, rhs: NSRunningApplication) -> Bool { lhs === rhs }
    func activate(options: [Int]) { precondition(options.isEmpty); Calls.values.append("app:\(id)") }
}
final class NSWorkspace {
    static let shared = NSWorkspace()
    var frontmostApplication: NSRunningApplication?
}
final class NSApplication {
    static let shared = NSApplication()
    func deactivate() { Calls.values.append("deactivate") }
}
final class Surface {
    var isOpaque = true
    var alphaValue: CGFloat = 1
    func orderBack(_ sender: Any?) { Calls.values.append("orderBack") }
    func close() { Calls.values.append("close") }
}
final class Timer {
    static var pending: [() -> Void] = []
    static func scheduledTimer(withTimeInterval: Double, repeats: Bool, block: @escaping (Timer) -> Void) {
        precondition(!repeats)
        pending.append { block(Timer()) }
    }
    static func fire() {
        let callbacks = pending
        pending = []
        callbacks.forEach { $0() }
    }
}
func delay(ms: Int, callback: @escaping () -> Void) {} // Recorder restart is independent of focus.
enum Static {
    static var mainWindowInUsing = true
    static let ReloadScreenRecorderDisplay = false
}
final class CaptureView { func unset() {} }
final class CapturePreview {
    let captureView = CaptureView()
    func forgiveAndForget() {}
}
final class ScreenRecorder { var windowShowing = true }
struct Store { let screenRecorder: Any = ScreenRecorder() }
struct ContentView { let store = Store() }
final class Manager {
    weak var curDisplay: Display?
    let window: Surface? = Surface()
    let capturePreview: Any = CapturePreview()
    let contentView: ContentView? = ContentView()
    var openingFocus: (app: NSRunningApplication, windowID: Int?)?
    var pendingRestore: (() -> Bool)?
    func prepareFocusForPreview() -> (app: NSRunningApplication, windowID: Int?)? { openingFocus }
    func restoreFocusAfterPreview(app: NSRunningApplication, windowID: Int?, isCurrent: @escaping () -> Bool) {
        Calls.values.append("restore:\(windowID ?? -1)")
        pendingRestore = isCurrent
    }
    func screenRecorderSelectDisplay() {}
}
final class App { let runningApp: NSRunningApplication; init(_ app: NSRunningApplication) { runningApp = app } }
final class Window {
    let id: Int
    var app: App?
    var appearsInThiSpace = true
    var stillExisting = true
    var spaceId: Int
    init(_ id: Int, _ app: NSRunningApplication, space: Int = 10) {
        self.id = id; self.app = App(app); spaceId = space
    }
    func activate() {
        Calls.values.append("window:\(id)")
        app?.runningApp.activate(options: [])
    }
}
final class Display {
    let manager = Manager()
    var flowGate = PreviewFlowGate()
    var currentSpaceId = 10
    var spaceIsChanging: Bool { flowGate.spaceIsChanging }
    var frontWindowIDBefore: Int?
    var frontAppBefore: NSRunningApplication?
    var frontSpaceBefore = -1
    var pendingWindowAfterClose: Window?
    var curFrontWindow: Window?
    var curFrontApp: NSRunningApplication?
    var fullOverscreenMode = false
    var windowHidden = false
    var shortcutAnimationInProgress = false
    var debugDontHide = false
    var aboveByPixels: CGFloat = 0
    var side = -1
    init() {
        manager.curDisplay = self
        flowGate.notePlaceholderCreated(id: 10, now: 100)
    }
    func outFullOverscreenMode() {}
    func updatePerformanceActivity() {}
    func shouldKeepScreenRecorderActive() -> Bool { true }
    func setRecorderProfile(lowProfile: Bool) {}
    PRODUCTION_FOCUS
    PRODUCTION_HIDE
}
@main struct OverscreenFocusRestoreTests {
    @MainActor static func close(_ display: Display) async {
        display.hideWindow()
        await withCheckedContinuation { continuation in
            DispatchQueue.main.async { continuation.resume() }
        }
        Timer.fire()
    }
    @MainActor static func main() async {
        let originalApp = NSRunningApplication(2)
        let otherApp = NSRunningApplication(3)
        let original = Window(11, originalApp)
        func opened() -> Display {
            let display = Display()
            display.curFrontWindow = original
            display.curFrontApp = originalApp
            display.manager.openingFocus = (originalApp, 12)
            NSWorkspace.shared.frontmostApplication = originalApp
            display.rememberFocusBeforeShowing()
            NSWorkspace.shared.frontmostApplication = .current
            Calls.values = []
            return display
        }
        let changedScan = opened()
        changedScan.curFrontWindow = Window(22, otherApp)
        await close(changedScan)
        precondition(Calls.values == ["orderBack", "deactivate", "restore:12", "app:2", "close"],
                     "Restore the actual WindowServer ID even when the preview catalog has a sibling")
        precondition(changedScan.manager.pendingRestore?() == true)
        precondition(changedScan.windowHidden && changedScan.frontWindowIDBefore == nil &&
                     changedScan.frontAppBefore == nil && changedScan.frontSpaceBefore == -1)

        let peerScan = opened()
        peerScan.curFrontWindow = Window(12, originalApp)
        await close(peerScan)
        precondition(Calls.values.contains("restore:12") && !Calls.values.contains("window:11"))
        peerScan.windowHidden = false
        precondition(peerScan.manager.pendingRestore?() == false, "Reopening cancels a queued restore")
        peerScan.windowHidden = true
        peerScan.currentSpaceId = 20
        precondition(peerScan.manager.pendingRestore?() == false, "Space changes cancel a queued restore")

        let selected = opened()
        selected.pendingWindowAfterClose = Window(22, otherApp, space: 20)
        await close(selected)
        precondition(Calls.values.contains("window:22") && !Calls.values.contains("app:2"),
                     "An explicit selection takes precedence over saved focus")
        precondition(selected.pendingWindowAfterClose == nil)

        let changedSpace = opened()
        changedSpace.currentSpaceId = 20
        changedSpace.flowGate.notePlaceholderCreated(id: 20, now: 102)
        changedSpace.curFrontWindow = Window(22, otherApp, space: 20)
        await close(changedSpace)
        precondition(!Calls.values.contains(where: { $0.hasPrefix("app:") || $0.hasPrefix("window:") }),
                     "A different stable Space cannot restore the old focus or activate a scan result")

        let transition = opened()
        transition.flowGate.beginSpaceTransition(now: 101)
        await close(transition)
        precondition(!Calls.values.contains("app:2"), "Space animations must suppress automatic activation")

        let closedTarget = opened()
        original.stillExisting = false
        await close(closedTarget)
        precondition(Calls.values.contains("app:2") && !Calls.values.contains("window:11"),
                     "The preview catalog must never supply a fallback sibling to raise")
        original.stillExisting = true

        let terminated = opened()
        originalApp.isTerminated = true
        await close(terminated)
        precondition(!Calls.values.contains("app:2"))
        originalApp.isTerminated = false

        let unknown = Display()
        unknown.curFrontWindow = original
        unknown.curFrontApp = originalApp
        unknown.currentSpaceId = -1
        unknown.rememberFocusBeforeShowing()
        precondition(unknown.frontWindowIDBefore == nil && unknown.frontAppBefore == nil)

        let stale = opened()
        stale.hideWindow()
        await withCheckedContinuation { continuation in DispatchQueue.main.async { continuation.resume() } }
        stale.flowGate.beginInteractionDismissal(now: 200)
        Timer.fire()
        precondition(Calls.values.isEmpty && !stale.windowHidden, "Retired close callbacks cannot steal focus")
        print("OverscreenFocusRestoreTests: PASS (no-click close, opening target, same-app peers, explicit selection, Space guards, closed/terminated targets, stale callbacks)")
    }
}
'''
fixture = fixture.replace('PRODUCTION_FOCUS', between(
    '    private func rememberFocusBeforeShowing()', '    func showWindow()').replace('private func', 'func'))
fixture = fixture.replace('PRODUCTION_HIDE', between(
    '    func hideWindow(allowRecorderRestart:', '    @MainActor public func openSideFromShortcut'))

with tempfile.TemporaryDirectory(prefix='mih-focus-restore-') as directory:
    path = Path(directory)
    source = path / 'OverscreenFocusRestoreTests.swift'
    binary = path / 'focus-restore-tests'
    source.write_text(fixture)
    subprocess.run(['swiftc', '-swift-version', '5', '-parse-as-library',
                    str(root / 'MakeItHome/Helpers/PreviewFlowGate.swift'), str(source), '-o', str(binary)], check=True)
    subprocess.run([str(binary)], check=True)
