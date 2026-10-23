#!/usr/bin/env python3
"""Compile production window-image delivery with deterministic rendering and real queues."""
from pathlib import Path
import subprocess
import tempfile

root = Path(__file__).resolve().parents[1]
displays = (root / 'MakeItHome/Managers/Displays.swift').read_text()


def between(source, start, end):
    return source[source.index(start):source.index(end, source.index(start))]


fixture = r'''
import Foundation
import AppKit

final class CGImage { let id: Int; let width = 160; init(_ id: Int) { self.id = id } }
final class CIImage {
    let id: Int
    let extent = CGRect(x: 0, y: 0, width: 800, height: 600)
    init(_ id: Int) { self.id = id }
    init(cvPixelBuffer: PixelBuffer) { id = cvPixelBuffer.id }
    func cropped(to rect: CGRect) -> CIImage { self }
}
final class PixelBuffer { let id: Int; init(_ id: Int) { self.id = id } }
func CVPixelBufferGetWidth(_ buffer: PixelBuffer) -> Int { 800 }
struct Frame {
    let pixelBuffer: PixelBuffer?
    let captureTime: Double
    let displayID: UInt32? = 1
}
final class ScreenRecorder {
    var isRunning = true
    var recordingOnDisplay: UInt32 = 1
    var priorityScale: CGFloat = 1
    var lastFrame: Frame?
}
struct Store { let screenRecorder: Any = ScreenRecorder() }
struct ContentView { let store = Store() }
struct Screen {
    let displayID: UInt32 = 1
    let frame = CGRect(x: 0, y: 0, width: 800, height: 600)
}
final class Manager {
    weak var curDisplay: Display?
    var contentView: ContentView? = ContentView()
    let mainScreenHeight: CGFloat = 600
    let mainBarHeight: CGFloat = 24
    let mainScale: CGFloat = 1
    func windowExistingElsewhere(display: Display, winId: Int) -> Display? { nil }
}
final class ScanApp { var timeSelection = 0 }
struct CIVector { init(x: CGFloat, y: CGFloat, z: CGFloat, w: CGFloat) {} }
let kCIInputImageKey = "image"
let kCIInputExtentKey = "extent"
final class CIFilter {
    let outputImage: CIImage?
    init?(name: String, parameters: [String: Any]) {
        outputImage = parameters[kCIInputImageKey] as? CIImage
    }
}
final class Context {
    enum Format { case RGBA8 }
    func render(_ image: CIImage, toBitmap: inout [UInt8], rowBytes: Int,
                bounds: CGRect, format: Format, colorSpace: Int?) {}
}
struct RetainedOpaquePointer {
    let pointer: UnsafeRawPointer
    init(_ image: CIImage) { pointer = UnsafeRawPointer(Unmanaged.passUnretained(image).toOpaque()) }
}
enum Access { case read }
func isAddressRangeAccessible(_ pointer: UnsafeRawPointer, byteCount: Int, access: Access) -> Bool { true }
func resizeCI(image: CIImage, scale: CGFloat) -> CIImage {
    precondition(!Thread.isMainThread, "Image processing stays off main")
    return image
}
func convertToCGImage(image: CIImage) -> CGImage? { CGImage(image.id) }
enum Static { static let OverscreenSizeDefault: CGFloat = 300 }
final class Plane {
    weak var window: Window?
    var applied: [Int] = []
    func setMaterial() {
        precondition(Thread.isMainThread, "Materials must be applied on main")
        if let image = window?.lastPreview { applied.append(image.id) }
    }
}
final class Display {
    let imageProcessingQueue = DispatchQueue(label: "live-preview-test")
    let contextAvgColor = Context()
    var aboveByPixels: CGFloat = 300
    var recordingPaused = false
    var previewUpdated = false
    let manager = Manager()
    let screen = Screen()
    var frame: CGRect { screen.frame }
    let scale: CGFloat = 1
    var scaleCapture: CGFloat = 1
    let isMain = true
    var curFrontWindow: Window?
    var winnerRect = NSRect.zero
    var scannedWindowID: Int?
    let menuHeight: CGFloat = 24
    let excludedApps = ["MakeItHome"]
    let lowerTitle = "makeithome"
    let spaceIsChanging = false
    var lastCroppedPreviewFrameTime: TimeInterval = 0
    var lastCroppedPreviewWindowID: Int?
    var previewCropInFlight = false
    init() { manager.curDisplay = self }
    func removeWindows(id: Int) {}
    func crop(_ winner: [String: AnyObject]?, appWin: Window) -> Bool {
        let bounds = winner!["kCGWindowBounds"] as! NSDictionary
        let screenRecorder = manager.contentView!.store.screenRecorder as! ScreenRecorder
        PRODUCTION_CROP
        return true
    }
    func isOccluded(_ windows: [CFDictionary]) -> Bool {
        var winner: [String: AnyObject]?
        var winnerBehindSomething = false
        var winOwnerName: String?
        let name = "Target"
        let pid: Int32 = 42
        let appWins: ScanApp? = ScanApp()
        func getWindow(winId: Int) -> Window? { nil }
        func rectContainsWinnerRect(rect: CGRect) -> Bool { rect.contains(winnerRect) }
        PRODUCTION_SCAN
            scannedWindowID = winner?["kCGWindowNumber"] as? Int
            return winnerBehindSomething
        }
        return cycleWindows(windows: windows)
    }
}
final class Window {
    let id = 77
    var widthHeightRatio: CGFloat = 1
    var stillExisting = true
    var missingFor = 0
    var appearsInThiSpace = true
    var display: Display?
    var lastRect: NSRect?
    var lastCii: CIImage?
    var lastCiiElabored = false
    var lastCiiPriorityScale: CGFloat = 1
    var ciiRevision: UInt = 0
    var isProcessingCii = false
    var lastPreview: CGImage?
    var lastShotTime = Date()
    var previewsList: [Int: CGImage] = [:]
    var avgPixel = NSColor.black
    var winPlane: Plane?
    PRODUCTION_UPDATE
    PRODUCTION_PROCESS
}
@main struct LiveWindowPreviewTests {
    @MainActor static func waitFor(_ condition: () -> Bool) async {
        let deadline = ProcessInfo.processInfo.systemUptime + 3
        while !condition() && ProcessInfo.processInfo.systemUptime < deadline {
            try! await Task.sleep(nanoseconds: 1_000_000)
        }
        precondition(condition(), "Preview processing failed to make progress")
    }
    @MainActor static func main() async {
        let display = Display()
        let window = Window()
        let plane = Plane()
        plane.window = window
        window.winPlane = plane
        let rect = CGRect(x: 10, y: 20, width: 800, height: 600)

        // The first image is already rendering when 25 newer source frames arrive.
        // Both the completed first image and newest pending image must be displayed.
        let release = DispatchSemaphore(value: 0)
        display.imageProcessingQueue.async { release.wait() }
        for id in 1...26 {
            window.updateCii(CIImage(id), rect: rect, priorityScale: 1, display: display)
            if id == 1 { window.checkForCii() } // Also exercise the former polling entry point.
        }
        release.signal()
        await waitFor { window.lastCiiElabored }
        precondition(plane.applied == [1, 26], "Do not starve or queue every intermediate frame")
        precondition(window.lastPreview?.id == 26 && window.lastCii == nil)

        // No mouse tick/checkPreviewsElaborated/idle timer: normal 25 fps source
        // delivery must reach the material on every frame while the surface is open.
        for id in 27...51 {
            window.updateCii(CIImage(id), rect: rect, priorityScale: 1, display: display)
            await waitFor { window.lastPreview?.id == id }
            try! await Task.sleep(nanoseconds: 40_000_000)
        }
        precondition(plane.applied.count == 27)
        precondition(display.previewUpdated && window.lastRect == rect)
        precondition(window.previewsList.count <= 2, "Keep existing bounded history")

        // Closed and paused surfaces retain their previous scheduling policy.
        display.aboveByPixels = 0
        window.updateCii(CIImage(52), rect: rect, priorityScale: 1, display: display)
        precondition(!window.isProcessingCii)
        window.checkForCii()
        await waitFor { window.lastPreview?.id == 52 }
        display.aboveByPixels = 300
        display.recordingPaused = true
        window.updateCii(CIImage(53), rect: rect, priorityScale: 1, display: display)
        precondition(!window.isProcessingCii)
        display.recordingPaused = false
        window.checkForCii()
        await waitFor { window.lastPreview?.id == 53 }

        // A crop cannot publish into a window that moved to another display.
        display.imageProcessingQueue.async { release.wait() }
        window.updateCii(CIImage(54), rect: rect, priorityScale: 1, display: display)
        window.display = Display()
        release.signal()
        await waitFor { !window.isProcessingCii }
        precondition(window.lastPreview?.id == 53)

        // Exercise the actual capture-to-crop branch, including repeated scanner
        // ticks against one frame, slow work and retired display/target callbacks.
        let cropDisplay = Display()
        let cropWindow = Window()
        cropDisplay.curFrontWindow = cropWindow
        let recorder = cropDisplay.manager.contentView!.store.screenRecorder as! ScreenRecorder
        let winner: [String: AnyObject] = ["kCGWindowBounds": [
            "X": 10, "Y": 20, "Width": 400, "Height": 300] as NSDictionary]
        recorder.lastFrame = Frame(pixelBuffer: PixelBuffer(60), captureTime: 60)
        cropDisplay.imageProcessingQueue.async { release.wait() }
        precondition(cropDisplay.crop(winner, appWin: cropWindow))
        for _ in 0..<90 { precondition(!cropDisplay.crop(winner, appWin: cropWindow)) }
        release.signal()
        await waitFor { !cropDisplay.previewCropInFlight && cropWindow.lastCiiElabored }
        precondition(cropWindow.lastPreview?.id == 60)
        precondition(!cropDisplay.crop(winner, appWin: cropWindow), "Do not process a source frame twice")
        recorder.lastFrame = Frame(pixelBuffer: PixelBuffer(61), captureTime: 61)
        precondition(cropDisplay.crop(winner, appWin: cropWindow))
        await waitFor { !cropDisplay.previewCropInFlight && cropWindow.lastPreview?.id == 61 }

        cropDisplay.imageProcessingQueue.async { release.wait() }
        recorder.lastFrame = Frame(pixelBuffer: PixelBuffer(62), captureTime: 62)
        precondition(cropDisplay.crop(winner, appWin: cropWindow))
        cropDisplay.curFrontWindow = nil
        release.signal()
        await waitFor { !cropDisplay.previewCropInFlight }
        precondition(cropWindow.lastPreview?.id == 61, "Retired targets cannot receive queued crops")

        // The overscreen's real WindowServer scan must ignore our own windows
        // while retaining occlusion checks for actual foreign overlays.
        func info(_ pid: Int, _ name: String, _ rect: CGRect,
                  id: Int? = nil, title: String? = nil, layer: Int = 0) -> CFDictionary {
            ["kCGWindowOwnerPID": pid, "kCGWindowOwnerName": name,
             "kCGWindowIsOnscreen": 1, "kCGWindowLayer": layer,
             "kCGWindowName": title ?? name, "kCGWindowNumber": id ?? pid,
             "kCGWindowBounds": ["X": rect.minX, "Y": rect.minY,
                                 "Width": rect.width, "Height": rect.height]] as NSDictionary as! CFDictionary
        }
        let target = info(42, "Target", CGRect(x: 100, y: 100, width: 500, height: 400))
        let overlayRect = CGRect(x: 150, y: 150, width: 200, height: 200)
        let own = info(Int(NSRunningApplication.current.processIdentifier), "MakeItHome", overlayRect)
        let foreign = info(43, "Other", overlayRect)
        precondition(!cropDisplay.isOccluded([own, target]), "Our excluded overscreen cannot freeze its live preview")
        precondition(cropDisplay.isOccluded([foreign, target]), "Foreign occlusion remains enforced")
        let focused = info(42, "Target", CGRect(x: 100, y: 100, width: 500, height: 400), id: 70, title: "")
        let sibling = info(42, "Target", CGRect(x: 50, y: 50, width: 600, height: 500), id: 71, title: "Named sibling")
        _ = cropDisplay.isOccluded([focused, sibling])
        precondition(cropDisplay.scannedWindowID == 70,
                     "A titled or larger sibling behind the focused window must not replace it")
        let popup = info(42, "Target", CGRect(x: 100, y: 100, width: 500, height: 400), id: 72, layer: 8)
        _ = cropDisplay.isOccluded([popup, focused, sibling])
        precondition(cropDisplay.scannedWindowID == 70, "Only normal windows establish preview focus")
        let smallFocused = info(42, "Target", CGRect(x: 100, y: 100, width: 100, height: 100), id: 73)
        _ = cropDisplay.isOccluded([smallFocused, sibling])
        precondition(cropDisplay.scannedWindowID == 73,
                     "A small focused window must not be replaced by its larger sibling")
        print("LiveWindowPreviewTests: PASS (25 fps delivery, slow renderer, newest-only backlog, pause/close, display ownership)")
    }
}
'''
fixture = fixture.replace('PRODUCTION_UPDATE', between(
    displays, '            func updateCii(', '            public func clean()'))
fixture = fixture.replace('PRODUCTION_PROCESS', between(
    displays, '            public func checkForCii()', '        }\n    }\n    \n    //@objc'))
fixture = fixture.replace('PRODUCTION_CROP', between(
    displays, '                        if screenRecorder.isRunning,',
    '                    }\n                    \n                }\n            }\n        }\n        \n        return true'))
fixture = fixture.replace('PRODUCTION_SCAN', between(
    displays, '            func cycleWindows(windows : [CFDictionary]?)',
    '                if completeDisplayCandidate {').replace(
        'func cycleWindows(windows : [CFDictionary]?)',
        'func cycleWindows(windows : [CFDictionary]?) -> Bool'))

with tempfile.TemporaryDirectory(prefix='mih-live-window-preview-') as directory:
    source = Path(directory) / 'LiveWindowPreviewTests.swift'
    binary = Path(directory) / 'live-window-preview-tests'
    source.write_text(fixture)
    subprocess.run(['swiftc', '-swift-version', '5', '-parse-as-library',
                    str(root / 'MakeItHome/Helpers/PreviewFlowGate.swift'),
                    str(source), '-o', str(binary)], check=True)
    subprocess.run([str(binary)], check=True)
