#!/usr/bin/env python3
"""Exercise last-focused window selection and image ownership with inert images/UI."""
from pathlib import Path
import subprocess
import tempfile

root = Path(__file__).resolve().parents[1]
displays = (root / 'MakeItHome/Managers/Displays.swift').read_text()
preview = (root / 'MakeItHome/Managers/Capture/Views/CapturePreview.swift').read_text()


def between(source, start, end):
    return source[source.index(start):source.index(end, source.index(start))]


fixture = r'''
import Foundation
import CoreGraphics

struct OrderedDictionary<Key: Hashable, Value> {
    var elements: [(key: Key, value: Value)] = []
    subscript(key: Key) -> Value? {
        get { elements.first { $0.key == key }?.value }
        set {
            elements.removeAll { $0.key == key }
            if let newValue { elements.append((key, newValue)) }
        }
    }
    var keys: [Key] { elements.map(\.key) }
    var values: [Value] { elements.map(\.value) }
    mutating func removeValue(forKey key: Key) { elements.removeAll { $0.key == key } }
    mutating func sort(by less: ((key: Key, value: Value), (key: Key, value: Value)) -> Bool) { elements.sort(by: less) }
}

final class CGImage {
    let width: Int
    let height: Int
    init(_ width: Int, _ height: Int) { self.width = width; self.height = height }
}
final class RunningApp { var isTerminated = false }
final class Manager {
    var displays: [Display] = []
    var selected: Display.AppWindows.Window?
    func focusPreviewTarget(_ window: Display.AppWindows.Window) { selected = window }
}
final class Display {
    let manager: Manager
    var apps: [Int32: AppWindows] = [:]
    init(_ manager: Manager) { self.manager = manager }
    var activationOwner: AppWindows?
    var afterClose: (() -> Void)?
    func focusAppExtension(app: AppWindows, completion: @escaping () -> Void) {
        activationOwner = app
        afterClose = completion
    }
    PRODUCTION_APP_LIST
    PRODUCTION_SELECTION
    final class AppWindows {
        let id: Int32
        let bundleId: String?
        let display: Display
        let runningApp = RunningApp()
        var windows: [Int: Window] = [:]
        var avgTime: Double = 0
        var lastWindow: Window?
        func destroyWindows(force: Bool = false) {
            for window in windows.values { window.app = nil }
            windows.removeAll()
            display.apps.removeValue(forKey: id)
        }
        init(_ id: Int32, _ bundle: String?, _ display: Display) {
            self.id = id; bundleId = bundle; self.display = display
            display.apps[id] = self
        }
        PRODUCTION_LOOKUP
        final class Window {
            var app: AppWindows?
            let id: Int
            var isFakeWin = false
            var lockedBy = -1
            var avgTime: Double = 0
            var lastPreview: CGImage?
            var lastRect: CGRect?
            var widthHeightRatio: CGFloat = 4
            var winTitle = "Selected local window"
            var spaceId = 77
            var inUsing = false
            PRODUCTION_PROPERTIES
            init(_ id: Int, _ app: AppWindows) { self.id = id; self.app = app; app.windows[id] = self }
            func capture(_ image: CGImage?, at time: TimeInterval) {
                lastPreview = image
                avgTime = time
            }
        }
    }
}
final class Channel {
    var contents: CGImage? { didSet { uploads += 1 } }
    var uploads = 0
    var intensity: CGFloat = 0
}
final class Material {
    var writesToDepthBuffer = true
    let diffuse = Channel()
    let multiply = Channel()
}
final class Geometry { let firstMaterial: Material? = Material() }
final class AppNode {
    var inUsing = false
    var record: Display.AppWindows?
    var app: Display.AppWindows { record! }
    func remove() {}
}
enum SCNTransaction {
    static var animationDuration: Double = 0
    static var animationTimingFunction: CAMediaTimingFunction?
    static func begin() {}
    static func commit() {}
}
struct CAMediaTimingFunction {
    enum Name { case easeInEaseOut }
    init(name: Name) {}
}
final class RemovalView {
    var listApp: OrderedDictionary<String, AppNode>?
    var curDisplay: Display?
    func setWindowsPosition() {}
    PRODUCTION_REMOVAL
}
final class CIFilter {
    init?(name: String) {}
    func setValue(_ value: Any, forKey: String) {}
}
final class WindowPlane {
    let win: Display.AppWindows.Window
    let geometry = Geometry()
    var app: AppNode? = AppNode()
    var minAlpha: CGFloat = 0
    private var appliedPreview: CGImage?
    init(_ win: Display.AppWindows.Window) { self.win = win }
    func clearFocusAppearance() { minAlpha = 0 }
    PRODUCTION_MATERIAL
}
final class NSEvent {}
enum Static {
    static let ClickMaximumDifference = 0.5
    static var isDragginApp = false
}
final class ClickedApp { var lastClickedWindow: WindowPlane? }
@MainActor final class ClickView {
    var curDisplay: Display?
    var clickedOnApp: ClickedApp?
    var draggedClickedApp = false
    var clickStartTime = Date()
    var clickStartedHere = CGPoint.zero
    var isPreviewPointerInteractionActive = false
    func resetGravityMouse() {}
    PRODUCTION_CLICK
}

@main struct AppPreviewFallbackTests {
    @MainActor static func main() {
        let manager = Manager()
        let a = Display(manager)
        let b = Display(manager)
        let c = Display(manager)
        manager.displays = [a, b, c]
        let local = Display.AppWindows(42, "example.app", a)
        let remote = Display.AppWindows(42, "example.app", b)
        let other = Display.AppWindows(99, "example.other", b)
        let wrongIdentity = Display.AppWindows(42, "example.different", c)
        let target = Display.AppWindows.Window(1, local)
        let plane = WindowPlane(target)
        precondition(target.displayPreview == nil, "An app with no cached capture still uses its icon")

        let localSource = Display.AppWindows.Window(2, local)
        let localImage = CGImage(800, 400)
        localSource.capture(localImage, at: 10)
        local.lastWindow = target
        let remoteSource = Display.AppWindows.Window(3, remote)
        let remoteImage = CGImage(900, 600)
        remoteSource.capture(remoteImage, at: 20)
        remote.lastWindow = remoteSource
        let unrelated = Display.AppWindows.Window(4, other)
        unrelated.capture(CGImage(500, 500), at: 100)
        let wrongBundle = Display.AppWindows.Window(5, wrongIdentity)
        wrongBundle.capture(CGImage(500, 500), at: 200)
        precondition(target.displayPreview == nil && target.displayPreviewSize == nil,
                     "An uncaptured focused window must never borrow a sibling image or geometry")
        precondition(local.preferredPreviewWindow(side: 2, on: a) === target &&
                     remote.preferredPreviewWindow(side: 2, on: a) === target,
                     "The last focused local window wins even if a sibling or remote window has a newer capture")
        plane.setMaterial()
        precondition(plane.geometry.firstMaterial?.diffuse.contents == nil,
                     "Use the icon path until the selected window has its own image")

        let ownImage = CGImage(600, 150)
        target.capture(ownImage, at: 5)
        target.inUsing = true
        precondition(local.preferredPreviewWindow(side: 2, on: a) === target,
                     "Do not substitute another window just because the focused local window is in use")
        precondition(target.displayPreview === ownImage && target.displayPreviewAspectRatio == 4 &&
                     target.displayPreviewSize == CGSize(width: 600, height: 150))
        plane.setMaterial()
        precondition(plane.geometry.firstMaterial?.diffuse.contents === ownImage &&
                     plane.geometry.firstMaterial?.multiply.contents === ownImage,
                     "The production material uses exactly the selected window's image")
        let uploads = plane.geometry.firstMaterial!.diffuse.uploads
        plane.setMaterial()
        precondition(plane.geometry.firstMaterial!.diffuse.uploads == uploads,
                     "Do not upload an unchanged texture repeatedly")
        precondition(plane.win === target && target.app === local && target.spaceId == 77 &&
                     target.winTitle == "Selected local window")

        local.lastWindow = localSource
        precondition(remote.preferredPreviewWindow(side: 2, on: a) === localSource,
                     "Switching focus between local windows changes that screen's card")
        precondition(local.preferredPreviewWindow(side: 2, on: b) === remoteSource,
                     "The presenting display decides local ownership, not the global app representative")
        let movedCurrent = Display.AppWindows.Window(target.id, remote)
        movedCurrent.capture(remoteImage, at: 110)
        precondition(local.preferredPreviewWindow(side: 2, on: a) === localSource,
                     "A retained remote copy must never displace this screen's last focused window")
        remote.windows.removeValue(forKey: movedCurrent.id)
        precondition(local.preferredPreviewWindow(side: 2, on: c) === remoteSource,
                     "Apps with no local history retain their last focused remote window")
        local.lastWindow = nil
        target.avgTime = 30
        precondition(local.preferredPreviewWindow(side: 2, on: a) === target,
                     "Missing focus references use local focus recency, never remote capture recency")
        local.lastWindow = target
        target.app = nil
        precondition(local.preferredPreviewWindow(side: 2, on: a) === localSource,
                     "Detached focus references cannot supply a target")
        target.app = local

        localSource.lockedBy = 2
        precondition(remote.preferredPreviewWindow(side: 2, on: b) === localSource,
                     "Explicit edge pins retain their selected real window")
        localSource.lockedBy = -1
        target.lastPreview = nil
        plane.setMaterial()
        precondition(target.displayPreview == nil && plane.geometry.firstMaterial?.diffuse.contents == nil &&
                     plane.geometry.firstMaterial?.multiply.contents == nil,
                     "Evicting this window's image clears its material instead of showing a sibling")
        let fakeTarget = Display.AppWindows.Window(-1, local)
        fakeTarget.isFakeWin = true
        precondition(fakeTarget.displayPreview == nil)
        fakeTarget.lastPreview = ownImage
        precondition(fakeTarget.displayPreview === ownImage, "Keep the existing icon rendering path")
        local.runningApp.isTerminated = true
        precondition(local.preferredPreviewWindow(side: 2, on: a) == nil,
                     "A retired app representative cannot supply a window")
        local.runningApp.isTerminated = false

        // Equal timestamps used to collide as dictionary keys. Include apps
        // that have only ever appeared on B/C, and keep one entry per PID.
        local.avgTime = 0
        remote.avgTime = 5
        other.avgTime = 0
        wrongIdentity.avgTime = 0
        let extra = Display.AppWindows(123, "example.third", c)
        extra.avgTime = 0
        let catalog = a.getOrderedApps()
        precondition(Set(catalog.keys) == Set([42, 99, 123]),
                     "The current display must include apps from other screens without dropping equal-time entries")
        precondition(catalog[42] === remote && catalog.values.count == 3,
                     "A process appears once, with the most recently used owner")
        precondition(b.getOrderedApps().keys == catalog.keys,
                     "Every screen must offer the same app inventory")

        let click = ClickView()
        click.curDisplay = a
        let clicked = ClickedApp()
        clicked.lastClickedWindow = WindowPlane(remoteSource)
        click.clickedOnApp = clicked
        click.mouseUp(with: NSEvent())
        precondition(a.activationOwner === remote && manager.selected == nil,
                     "A cross-screen click closes the presenting display before focusing the real window owner")
        a.afterClose?()
        precondition(manager.selected === remoteSource,
                     "The actual mouse-up/close callback must select the cached remote window")
        manager.selected = nil
        a.selectPreviewWindow(remoteSource)
        remoteSource.app = nil
        a.afterClose?()
        precondition(manager.selected == nil, "A removed target must not select a different window")
        let removal = RemovalView()
        let removedNode = AppNode()
        removedNode.record = remote
        var nodes = OrderedDictionary<String, AppNode>()
        nodes["Shared title\u{0}42"] = removedNode
        let survivingNode = AppNode()
        survivingNode.record = other
        nodes["Shared title\u{0}99"] = survivingNode
        removal.listApp = nodes
        removal.curDisplay = a
        removal.removeAppNode(app: removedNode, force: true)
        precondition(removal.listApp?.keys == ["Shared title\u{0}99"],
                     "Removing a card must use node identity, including equal-title apps")
        precondition(a.apps[42] == nil && b.apps[42] == nil && b.apps[99] === other && c.apps[42] === wrongIdentity,
                     "Explicit removal clears all same-process histories without touching another identity")
        print("AppPreviewFallbackTests: PASS (last-focused local window, no sibling images, presenting-display ownership, global app inventory, pins, click/close handoff, eviction, icons)")
    }
}
'''
fixture = fixture.replace('PRODUCTION_LOOKUP', between(
    displays, '        func previewWindows()', '        public class Window :'))
fixture = fixture.replace('PRODUCTION_PROPERTIES', between(
    displays, '            /// A card shows only its selected window', '            public var lastRect :'))
fixture = fixture.replace('PRODUCTION_MATERIAL', between(
    preview, '            public func setMaterial ()', '            public func addToNode(node:',))
fixture = fixture.replace('PRODUCTION_APP_LIST', between(
    displays, '    public func getOrderedApps()', '    func removeWindows('))
fixture = fixture.replace('PRODUCTION_SELECTION', between(
    displays, '    @MainActor func selectPreviewWindow(', '    private var frontWindowIDBefore:'))
fixture = fixture.replace('PRODUCTION_CLICK', between(
    preview, '        override public func mouseUp(', '        override public func rightMouseDown(').replace('override public func mouseUp', 'func mouseUp'))
fixture = fixture.replace('PRODUCTION_REMOVAL', between(
    preview, '        public func removeAppNode(', '        func freeListApp('))

with tempfile.TemporaryDirectory(prefix='mih-preview-fallback-') as directory:
    path = Path(directory)
    source = path / 'AppPreviewFallbackTests.swift'
    binary = path / 'preview-fallback-tests'
    source.write_text(fixture)
    subprocess.run(['swiftc', '-swift-version', '5', '-parse-as-library', str(source), '-o', str(binary)], check=True)
    subprocess.run([str(binary)], check=True)
