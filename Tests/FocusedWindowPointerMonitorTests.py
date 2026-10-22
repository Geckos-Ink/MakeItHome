#!/usr/bin/env python3
"""Execute the production monitor with inert AX/window/pointer APIs and real queues."""
from pathlib import Path
import re
import subprocess
import tempfile

root = Path(__file__).resolve().parents[1]
monitor = (root / 'MakeItHome/Helpers/FocusedWindowPointerMonitor.swift').read_text()
monitor = monitor.replace('import AppKit', 'import Foundation\nimport CoreGraphics').replace('import ApplicationServices', '')
for original, replacement in {
    'ProcessInfo': 'TestProcessInfo',
    'CGEvent': 'TestCGEvent',
    'CGPreflightScreenCaptureAccess': 'testScreenAccess',
    'CGWarpMouseCursorPosition': 'testWarp',
    'CGWindowListCopyWindowInfo': 'testWindowInfo',
    'CGDisplayBounds': 'testDisplayBounds',
    'CGDisplayIsAsleep': 'testDisplayAsleep',
    'CFGetTypeID': 'testTypeID',
    'CFEqual': 'testEqual',
}.items():
    monitor = re.sub(r'\b' + original + r'\b', replacement, monitor)
# Drive samples explicitly; retain production queueing/observers without a
# wall-clock polling timer introducing unrelated samples into assertions.
monitor = monitor.replace('private func sample()', 'func sample()').replace('Timer(timeInterval: 0.25', 'Timer(timeInterval: 60')

fixture = r'''
import Foundation
import CoreGraphics

enum AXError { case success, failure }
enum AXValueType { case cgPoint, cgSize }
final class AXValue: NSObject {
    let point: CGPoint?
    let size: CGSize?
    init(_ point: CGPoint) { self.point = point; size = nil }
    init(_ size: CGSize) { point = nil; self.size = size }
}
final class AXUIElement: NSObject {
    let pid: Int32
    let id: Int
    let isApp: Bool
    var frame: CGRect
    var title: String
    init(_ pid: Int32, _ id: Int, _ frame: CGRect, isApp: Bool = false) {
        self.pid = pid; self.id = id; self.frame = frame; self.isApp = isApp; title = "Fixture window \(id)"
    }
}
let kAXFocusedWindowAttribute = "focusedWindow"
let kAXWindowsAttribute = "windows"
let kAXPositionAttribute = "position"
let kAXSizeAttribute = "size"
let kAXMinimizedAttribute = "minimized"
let kAXMainAttribute = "main"
let kAXFocusedAttribute = "focused"
let kAXRaiseAction = "raise"
let kAXTitleAttribute = "title"
enum State {
    static var trusted = true
    static var windows: [Int32: [AXUIElement]] = [:]
    static var focused: [Int32: AXUIElement] = [:]
    static var records: [Int: AXUIElement] = [:]
    static var pointer = CGPoint(x: 400, y: 400)
    static var warps: [CGPoint] = []
    static var raised: [Int] = []
    static var allowRaise = true
    static var interactions = false
    static var enabled = true
    static var moved = 0
}
func AXIsProcessTrusted() -> Bool { State.trusted }
func AXUIElementCreateApplication(_ pid: Int32) -> AXUIElement { AXUIElement(pid, -1, .zero, isApp: true) }
@discardableResult func AXUIElementSetMessagingTimeout(_ element: AXUIElement, _ seconds: Float) -> AXError { .success }
func AXUIElementGetTypeID() -> UInt { 1 }
func AXValueGetTypeID() -> UInt { 2 }
func testTypeID(_ value: CFTypeRef) -> UInt { value is AXUIElement ? 1 : 2 }
func testEqual(_ lhs: CFTypeRef, _ rhs: CFTypeRef) -> Bool { lhs === rhs }
func AXValueGetType(_ value: AXValue) -> AXValueType { value.point == nil ? .cgSize : .cgPoint }
func AXValueGetValue(_ value: AXValue, _ type: AXValueType, _ output: UnsafeMutableRawPointer) -> Bool {
    if type == .cgPoint { output.storeBytes(of: value.point!, as: CGPoint.self) }
    else { output.storeBytes(of: value.size!, as: CGSize.self) }
    return true
}
func AXUIElementCopyAttributeValue(_ element: AXUIElement, _ attribute: CFString,
                                  _ output: UnsafeMutablePointer<CFTypeRef?>) -> AXError {
    switch attribute as String {
    case kAXFocusedWindowAttribute:
        guard let value = State.focused[element.pid] else { return .failure }
        output.pointee = value
    case kAXWindowsAttribute: output.pointee = (State.windows[element.pid] ?? []) as NSArray
    case kAXPositionAttribute: output.pointee = AXValue(element.frame.origin)
    case kAXSizeAttribute: output.pointee = AXValue(element.frame.size)
    case kAXTitleAttribute: output.pointee = element.title as NSString
    case kAXMinimizedAttribute: output.pointee = kCFBooleanFalse
    default: return .failure
    }
    return .success
}
@discardableResult func AXUIElementSetAttributeValue(_ element: AXUIElement, _ attribute: CFString, _ value: CFTypeRef) -> AXError {
    if State.allowRaise && (attribute as String == kAXMainAttribute || attribute as String == kAXFocusedAttribute) {
        State.focused[element.pid] = element
    }
    return .success
}
@discardableResult func AXUIElementPerformAction(_ element: AXUIElement, _ action: CFString) -> AXError {
    State.raised.append(element.id)
    if State.allowRaise { State.focused[element.pid] = element }
    return .success
}
func testWindowInfo(_ options: CGWindowListOption, _ id: CGWindowID) -> CFArray? {
    let windows = options == .optionAll ? Array(State.records.values) : State.records[Int(id)].map { [$0] } ?? []
    return windows.map { window in
        [kCGWindowNumber as String: window.id,
         kCGWindowOwnerPID as String: window.pid,
         kCGWindowLayer as String: 0,
         kCGWindowName as String: window.title,
         kCGWindowBounds as String: window.frame.dictionaryRepresentation] as [String: Any]
    } as CFArray
}
struct NSScreen {
    static var screens = [NSScreen(displayID: 1, frame: CGRect(x: 0, y: 0, width: 1920, height: 1080)),
                          NSScreen(displayID: 2, frame: CGRect(x: 1920, y: 0, width: 1280, height: 1080))]
    let displayID: UInt32
    var frame: CGRect
    var backingScaleFactor: CGFloat = 1
}
func testDisplayBounds(_ id: UInt32) -> CGRect { NSScreen.screens.first { $0.displayID == id }!.frame }
func testDisplayAsleep(_ id: UInt32) -> UInt32 { 0 }
final class TestCGEvent {
    init?(source: Int?) {}
    var location: CGPoint { State.pointer }
    var unflippedLocation: CGPoint { State.pointer }
}
func testWarp(_ point: CGPoint) -> CGError { State.pointer = point; State.warps.append(point); return .success }
enum NSEvent { static var pressedMouseButtons: Int = 0 }
final class TestProcessInfo {
    static let processInfo = TestProcessInfo()
    var systemUptime: Double = 100
    let processIdentifier: Int32 = 1
}
final class NSRunningApplication {
    static var registry: [Int32: NSRunningApplication] = [:]
    let processIdentifier: Int32
    let bundleIdentifier: String?
    var isTerminated = false
    init(_ pid: Int32, _ bundle: String) { processIdentifier = pid; bundleIdentifier = bundle }
    convenience init?(processIdentifier: Int32) {
        guard let app = Self.registry[processIdentifier] else { return nil }
        self.init(app.processIdentifier, app.bundleIdentifier!)
        isTerminated = app.isTerminated
    }
}
final class NSWorkspace {
    static let shared = NSWorkspace()
    let notificationCenter = NotificationCenter()
    var frontmostApplication: NSRunningApplication?
    static let willSleepNotification = Notification.Name("willSleep")
    static let didWakeNotification = Notification.Name("didWake")
    static let screensDidSleepNotification = Notification.Name("screensSleep")
    static let screensDidWakeNotification = Notification.Name("screensWake")
    static let sessionDidResignActiveNotification = Notification.Name("sessionInactive")
    static let sessionDidBecomeActiveNotification = Notification.Name("sessionActive")
}
enum NSApplication { static let didChangeScreenParametersNotification = Notification.Name("screensChanged") }
enum Static { static let focusedWindowPointerDidChange = Notification.Name("pointerSetting") }

@main struct FocusedWindowPointerMonitorTests {
    @MainActor static func settle(_ milliseconds: UInt64 = 100) async {
        try! await Task.sleep(nanoseconds: milliseconds * 1_000_000)
    }
    @MainActor static func main() async {
        let app = NSRunningApplication(2, "example.app")
        let other = NSRunningApplication(3, "example.other")
        NSRunningApplication.registry = [2: app, 3: other]
        NSWorkspace.shared.frontmostApplication = app
        let a = AXUIElement(2, 21, CGRect(x: 100, y: 100, width: 800, height: 600))
        let b = AXUIElement(2, 22, CGRect(x: 2100, y: 100, width: 800, height: 600))
        let c = AXUIElement(3, 31, CGRect(x: 2200, y: 200, width: 600, height: 600))
        State.windows = [2: [a, b], 3: [c]]
        State.records = [21: a, 22: b, 31: c]
        State.focused = [2: a, 3: c]
        var monitor: FocusedWindowPointerMonitor? = FocusedWindowPointerMonitor(
            isEnabled: { State.enabled }, isInteractionActive: { State.interactions }, didMove: { _ in State.moved += 1 })
        monitor!.start()
        monitor!.sample()
        await settle()
        precondition(State.warps.isEmpty, "Initial focus establishes a baseline")
        State.focused[2] = b
        monitor!.sample()
        await settle()
        precondition(State.warps == [CGPoint(x: 2500, y: 400)], "Ordinary same-app cross-screen focus moves the pointer")

        State.warps = []
        State.pointer = CGPoint(x: 400, y: 400)
        State.interactions = true
        State.focused[2] = a
        monitor!.sample(); await settle()
        State.focused[2] = b
        monitor!.sample(); await settle()
        State.interactions = false
        monitor!.sample(); await settle()
        precondition(State.warps.isEmpty, "Normal suppressed focus is not replayed later")
        monitor!.focusWindow(pid: 2, bundleID: "example.app", windowID: 22)
        await settle(400)
        precondition(State.raised.last == 22 && State.warps == [CGPoint(x: 2500, y: 400)],
                     "An explicit click on an already-focused remote window must still move the pointer after close")
        monitor!.sample(); await settle()
        precondition(State.warps.count == 1, "Explicit pointer moves remain one-shot")

        State.warps = []
        State.pointer = CGPoint(x: 400, y: 400)
        NSWorkspace.shared.frontmostApplication = other
        NotificationCenter.default.post(name: NSApplication.didChangeScreenParametersNotification, object: nil)
        monitor!.sample(); await settle()
        precondition(State.warps == [CGPoint(x: 2500, y: 500)],
                     "A focus-only screen notification must not erase the next app-switch pointer move")

        NSWorkspace.shared.frontmostApplication = app
        State.focused[2] = a
        State.pointer = CGPoint(x: 400, y: 400)
        monitor!.sample(); await settle()
        State.warps = []; State.raised = []
        monitor!.focusWindow(pid: 2, bundleID: "example.app", windowID: 22)
        await settle(400)
        precondition(State.focused[2] === b && State.raised == [22] && State.warps.count == 1,
                     "Resolve and raise the selected remote window before centering the pointer")

        State.warps = []; State.raised = []
        monitor!.focusWindow(pid: 2, bundleID: "example.app", windowID: 21)
        monitor!.focusWindow(pid: 2, bundleID: "example.app", windowID: 22)
        await settle(400)
        precondition(State.raised == [22], "A newer click cancels an older queued native focus")

        let duplicate = AXUIElement(2, 23, b.frame)
        duplicate.title = b.title
        State.windows[2] = [a, b, duplicate]
        State.raised = []; State.warps = []
        monitor!.focusWindow(pid: 2, bundleID: "example.app", windowID: 22)
        await settle(400)
        precondition(State.raised.isEmpty && State.warps.isEmpty,
                     "Ambiguous public AX geometry matching must not raise a different same-app window")
        State.windows[2] = [a, b]
        State.records[23] = duplicate
        monitor!.focusWindow(pid: 2, bundleID: "example.app", windowID: 22)
        await settle(400)
        precondition(State.raised.isEmpty,
                     "WindowServer ambiguity is unsafe even if AX omits the overlapping peer")
        State.windows[2] = [a, b, duplicate]
        duplicate.title = "A different fixture window"
        monitor!.focusWindow(pid: 2, bundleID: "example.app", windowID: 22)
        await settle(400)
        precondition(State.raised == [22], "Fresh unique titles can disambiguate overlapping window frames")
        State.raised = []; State.warps = []
        State.windows[2] = [a, b]
        State.records.removeValue(forKey: 23)
        monitor!.focusWindow(pid: 2, bundleID: "wrong.identity", windowID: 22)
        await settle(400)
        precondition(State.raised.isEmpty, "Reject replaced or mismatched process identities")

        State.allowRaise = false
        State.pointer = CGPoint(x: 2500, y: 400)
        State.warps = []
        monitor!.focusWindow(pid: 2, bundleID: "example.app", windowID: 21)
        await settle(400)
        precondition(State.warps.isEmpty, "Never center on a window that failed to become focused")
        TestProcessInfo.processInfo.systemUptime += 2
        monitor!.sample(); await settle()
        precondition(State.warps.isEmpty, "Failed explicit requests expire without delayed movement")
        State.allowRaise = true

        State.raised = []
        monitor!.focusWindow(pid: 2, bundleID: "example.app", windowID: 22)
        TestProcessInfo.processInfo.systemUptime += 2
        await settle(300)
        precondition(State.raised.isEmpty, "An expired queued selection must not change focus")

        monitor!.focusWindow(pid: 2, bundleID: "example.app", windowID: 22)
        NSWorkspace.shared.notificationCenter.post(name: NSWorkspace.willSleepNotification, object: nil)
        await settle(300)
        precondition(State.raised.isEmpty, "Sleep cancels queued native selection and pointer work")
        NSWorkspace.shared.notificationCenter.post(name: NSWorkspace.didWakeNotification, object: nil)
        TestProcessInfo.processInfo.systemUptime += 3

        State.enabled = false
        State.raised = []; State.warps = []
        monitor!.focusWindow(pid: 2, bundleID: "example.app", windowID: 21)
        await settle(400)
        precondition(State.raised == [21] && State.warps.isEmpty,
                     "The pointer preference must not disable native window selection")
        State.enabled = true
        State.trusted = false
        State.raised = []
        monitor!.focusWindow(pid: 2, bundleID: "example.app", windowID: 22)
        await settle(200)
        precondition(State.raised.isEmpty, "Do not prompt or control windows without Accessibility access")
        weak var released = monitor
        monitor = nil
        precondition(released == nil, "Timer/observer ownership must not retain the monitor")
        print("FocusedWindowPointerMonitorTests: PASS (normal and explicit moves, already-focused targets, focus-only notifications, exact unique window matching, newer-click cancellation, failed focus, expiry, preference, permission, lifetime)")
    }
}
'''

with tempfile.TemporaryDirectory(prefix='mih-pointer-monitor-') as directory:
    path = Path(directory)
    source = path / 'Monitor.swift'
    tests = path / 'Tests.swift'
    binary = path / 'pointer-monitor-tests'
    source.write_text(monitor)
    tests.write_text(fixture)
    subprocess.run(['swiftc', '-swift-version', '5', '-parse-as-library',
                    str(root / 'MakeItHome/Helpers/FocusedWindowPointerPolicy.swift'), str(source), str(tests), '-o', str(binary)], check=True)
    subprocess.run([str(binary)], check=True)
