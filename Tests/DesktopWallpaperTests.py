#!/usr/bin/env python3
"""Real image/movie fixtures plus production Display integration with inert capture/UI."""
from pathlib import Path
import os
import platform
import subprocess
import sys
import tempfile

root = Path(__file__).resolve().parents[1]
source = (root / "MakeItHome/Managers/Displays.swift").read_text()
start = source.index("    private var desktopBackground:")
methods = source[start:source.index("    func releaseSceneKitReferences", start)]

fixture = r'''
import Foundation
import CoreGraphics

final class CGImage { let id: Int; init(_ id: Int) { self.id = id } }
final class CIImage { let image: CGImage; init(cgImage: CGImage) { image = cgImage } }
enum NSColor { static let windowBackgroundColor = "neutral" }
let SCNMatrix4Identity = 1
final class Background { var contents: Any?; var contentsTransform = 0 }
final class Scene { let background = Background() }
final class CaptureView { var scene: Scene? = Scene() }
final class CapturePreview { let captureView = CaptureView() }
final class Screen {
    let displayID: UInt32
    var frame: CGRect
    init(_ id: UInt32) { displayID = id; frame = CGDisplayBounds(id) }
}
func CGDisplayBounds(_ id: UInt32) -> CGRect { CGRect(x: Int(id) * 800, y: 0, width: 800, height: 600) }
var dark = false
func isDarkMode() -> Bool { precondition(Thread.isMainThread); return dark }
final class Bundle {
    static let main = Bundle()
    func url(forResource: String, withExtension: String) -> URL? { URL(fileURLWithPath: "/default") }
}
final class NSWorkspace {
    static let shared = NSWorkspace()
    var urls: [UInt32: URL] = [:]
    func desktopImageURL(for screen: Screen) -> URL? { precondition(Thread.isMainThread); return urls[screen.displayID] }
}
enum DesktopWallpaper {
    struct Sample { let images: [CGImage]; let windowFrame: CGRect }
    static var requests: [(UInt32, (Sample?) -> Void)] = []
    static var files: [URL: Int] = [URL(fileURLWithPath: "/default"): 99]
    @MainActor static func capture(displayID: UInt32, completion: @escaping (Sample?) -> Void) {
        precondition(Thread.isMainThread)
        requests.append((displayID, completion))
    }
    @MainActor static func finish(_ id: UInt32, image: Int?) {
        let index = requests.firstIndex { $0.0 == id }!
        let callback = requests.remove(at: index).1
        callback(image.map { Sample(images: [CGImage($0)], windowFrame: CGDisplayBounds(id)) })
    }
    static func fileFrames(url: URL?) -> [CGImage] {
        precondition(!Thread.isMainThread)
        return url.flatMap { files[$0] }.map { [CGImage($0)] } ?? []
    }
    static func render(images: [CGImage], windowFrame: CGRect? = nil, displayFrame: CGRect) -> CGImage? {
        precondition(!Thread.isMainThread)
        return images.first
    }
}
final class Manager {
    var curDisplay: Display?
    var curDekstop: CIImage?
    var capturePreview: AnyObject? = CapturePreview()
    var applied: Int? { ((capturePreview as? CapturePreview)?.captureView.scene?.background.contents as? CGImage)?.id }
}
final class Display {
    let manager: Manager
    let screen: Screen
    var ready = false
    let imageProcessingQueue = DispatchQueue(label: "wallpaper-test-images")
    init(_ id: UInt32, manager: Manager) { self.manager = manager; screen = Screen(id) }
__METHODS__
}

@main struct Integration {
    @MainActor static func wait(_ condition: () -> Bool) async {
        let deadline = ProcessInfo.processInfo.systemUptime + 3
        while !condition() {
            precondition(ProcessInfo.processInfo.systemUptime < deadline, "Wallpaper pipeline stalled")
            try? await Task.sleep(nanoseconds: 2_000_000)
        }
    }
    @MainActor static func main() async {
        let manager = Manager()
        let first = Display(1, manager: manager)
        let second = Display(2, manager: manager)
        manager.curDisplay = first
        first.updatDesktopImage()
        first.updatDesktopImage()
        await wait { DesktopWallpaper.requests.count == 1 }
        try? await Task.sleep(nanoseconds: 10_000_000)
        precondition(DesktopWallpaper.requests.count == 1, "Coalesce in-flight refreshes")
        manager.curDisplay = second
        second.setCurDesktopImage()
        await wait { DesktopWallpaper.requests.count == 2 }
        DesktopWallpaper.finish(1, image: 11)
        try? await Task.sleep(nanoseconds: 30_000_000)
        precondition(manager.applied == nil && manager.curDekstop == nil, "Departed display must not publish")
        DesktopWallpaper.finish(2, image: 22)
        await wait { manager.applied == 22 }
        manager.curDisplay = first
        first.setCurDesktopImage()
        precondition(manager.applied == 11, "Each display keeps its own wallpaper")
        await wait { DesktopWallpaper.requests.count == 1 }
        DesktopWallpaper.finish(1, image: 12)
        await wait { manager.applied == 12 }
        first.updatDesktopImage()
        await wait { DesktopWallpaper.requests.count == 1 }
        DesktopWallpaper.finish(1, image: 13)
        await wait { manager.applied == 13 }
        // Same URL (including nil) must never suppress animation/slideshow refreshes.
        let still = URL(fileURLWithPath: "/normal.png")
        NSWorkspace.shared.urls[1] = still
        DesktopWallpaper.files[still] = 31
        first.updatDesktopImage()
        await wait { DesktopWallpaper.requests.count == 1 }
        DesktopWallpaper.finish(1, image: nil)
        await wait { manager.applied == 31 }
        DesktopWallpaper.files.removeValue(forKey: still)
        first.updatDesktopImage()
        await wait { DesktopWallpaper.requests.count == 1 }
        DesktopWallpaper.finish(1, image: nil)
        try? await Task.sleep(nanoseconds: 30_000_000)
        precondition(manager.applied == 31, "Transient failure must preserve the last good image")
        first.updatDesktopImage()
        await wait { DesktopWallpaper.requests.count == 1 }
        NSWorkspace.shared.urls[1] = URL(fileURLWithPath: "/changed.png")
        DesktopWallpaper.finish(1, image: 41)
        await wait { DesktopWallpaper.requests.count == 1 }
        precondition(manager.applied == 31, "Reject stale URL result")
        DesktopWallpaper.finish(1, image: 42)
        await wait { manager.applied == 42 }
        first.updatDesktopImage()
        await wait { DesktopWallpaper.requests.count == 1 }
        dark = true
        DesktopWallpaper.finish(1, image: 43)
        await wait { DesktopWallpaper.requests.count == 1 }
        precondition(manager.applied == 42, "Reject stale appearance result")
        DesktopWallpaper.finish(1, image: 44)
        await wait { manager.applied == 44 }
        first.updatDesktopImage()
        await wait { DesktopWallpaper.requests.count == 1 }
        first.screen.frame.size.width = 900
        DesktopWallpaper.finish(1, image: 46)
        await wait { DesktopWallpaper.requests.count == 1 }
        precondition(manager.applied == 44, "Reject stale display geometry")
        DesktopWallpaper.finish(1, image: 47)
        await wait { manager.applied == 47 }
        manager.capturePreview = nil
        first.updatDesktopImage()
        await wait { DesktopWallpaper.requests.count == 1 }
        DesktopWallpaper.finish(1, image: 45)
        await wait { manager.curDekstop?.image.id == 45 }
        manager.capturePreview = CapturePreview()
        first.setCurDesktopImage(refresh: false)
        precondition(manager.applied == 45, "Retain image when SceneKit is not yet ready")
        let third = Display(3, manager: manager)
        manager.curDisplay = third
        third.setCurDesktopImage()
        await wait { DesktopWallpaper.requests.count == 1 }
        DesktopWallpaper.finish(3, image: nil)
        await wait { manager.applied == 99 }
        precondition(third.ready, "Last-resort fallback permits startup")
        precondition(DesktopWallpaper.requests.isEmpty, "No refresh loop after completion")
        print("DesktopWallpaper Display integration: coalescing, display isolation, same-URL refresh, stale results, image fallback and scene lifetime passed")
    }
}
'''.replace("__METHODS__", methods)

with tempfile.TemporaryDirectory(prefix="makeithome-wallpaper-tests-") as directory:
    folder = Path(directory)
    cache = os.environ.get("CLANG_MODULE_CACHE_PATH", str(folder / "module-cache"))
    flags = ["swiftc", "-module-cache-path", cache, "-target", f"{platform.machine()}-apple-macosx12.3", "-parse-as-library"]
    subprocess.run(flags + [str(root / "MakeItHome/Helpers/DesktopWallpaper.swift"),
                           str(root / "Tests/DesktopWallpaperTests.swift"), "-o", str(folder / "images")], check=True)
    subprocess.run([str(folder / "images")] + (["--native"] if "--native" in sys.argv else []), check=True)
    path = folder / "DisplayIntegration.swift"
    path.write_text(fixture)
    subprocess.run(flags + [str(path), "-o", str(folder / "integration")], check=True)
    subprocess.run([str(folder / "integration")], check=True)
