import AppKit
import AVFoundation
import CoreImage
import ImageIO
@preconcurrency import ScreenCaptureKit

/// Wallpaper pixels stay in memory. Never sample the composited display: it includes apps.
enum DesktopWallpaper {
    static let maximumDimension = 640
    private static let context = CIContext(options: [.cacheIntermediates: false])

    static func isWallpaperWindow(layer: Int, frame: CGRect, displayFrame: CGRect) -> Bool {
        layer < Int(CGWindowLevelForKey(.desktopIconWindow)) &&
        frame.width > 0 && frame.height > 0 &&
        frame.contains(displayFrame.insetBy(dx: 1, dy: 1))
    }

    struct Sample {
        let images: [CGImage]
        let windowFrame: CGRect
    }

    /// Use the rendered wallpaper even when NSWorkspace returns a stale poster/image URL.
    /// A deadline and main-owned completion make late framework callbacks harmless.
    @MainActor static func capture(displayID: CGDirectDisplayID,
                                  completion: @escaping (Sample?) -> Void) {
        guard #available(macOS 14.0, *), CGPreflightScreenCaptureAccess() else {
            completion(nil)
            return
        }
        let request = CaptureRequest(completion: completion)
        DispatchQueue.main.asyncAfter(deadline: .now() + 4) { request.finish(nil) }
        SCShareableContent.getExcludingDesktopWindows(false, onScreenWindowsOnly: true) { content, _ in
            DispatchQueue.main.async {
                guard request.isPending,
                      let content,
                      let display = content.displays.first(where: { $0.displayID == displayID }) else {
                    request.finish(nil)
                    return
                }
                // WindowServer order is front to back, unlike the shareable-content array.
                let descriptions = CGWindowListCopyWindowInfo(.optionOnScreenOnly, kCGNullWindowID)
                    as? [[String: Any]] ?? []
                let windows = Dictionary(uniqueKeysWithValues: content.windows.map { ($0.windowID, $0) })
                let wallpaper = descriptions.compactMap { description -> SCWindow? in
                    guard let id = description[kCGWindowNumber as String] as? UInt32,
                          let window = windows[id], window.isOnScreen,
                          isWallpaperWindow(layer: window.windowLayer, frame: window.frame,
                                            displayFrame: display.frame) else { return nil }
                    return window
                }.first
                guard let wallpaper else {
                    request.finish(nil)
                    return
                }
                let configuration = SCStreamConfiguration()
                let scale = min(1, CGFloat(maximumDimension) / max(wallpaper.frame.width, wallpaper.frame.height))
                configuration.width = max(1, Int((wallpaper.frame.width * scale).rounded()))
                configuration.height = max(1, Int((wallpaper.frame.height * scale).rounded()))
                configuration.showsCursor = false
                if #available(macOS 14.2, *) { configuration.ignoreShadowsSingleWindow = true }
                request.collect(filter: SCContentFilter(desktopIndependentWindow: wallpaper),
                                configuration: configuration, frame: wallpaper.frame)
            }
        }
    }

    @MainActor private final class CaptureRequest {
        private var completion: ((Sample?) -> Void)?
        private var images: [CGImage] = []
        var isPending: Bool { completion != nil }

        init(completion: @escaping (Sample?) -> Void) { self.completion = completion }

        func finish(_ sample: Sample?) {
            let callback = completion
            completion = nil
            images.removeAll()
            callback?(sample)
        }

        @available(macOS 14.0, *)
        func collect(filter: SCContentFilter, configuration: SCStreamConfiguration, frame: CGRect) {
            guard isPending else { return }
            SCScreenshotManager.captureImage(contentFilter: filter, configuration: configuration) { image, _ in
                DispatchQueue.main.async {
                    guard self.isPending else { return }
                    guard let image else {
                        self.finish(self.images.isEmpty ? nil : Sample(images: self.images, windowFrame: frame))
                        return
                    }
                    self.images.append(image)
                    if self.images.count == 3 {
                        self.finish(Sample(images: self.images, windowFrame: frame))
                    } else {
                        DispatchQueue.main.asyncAfter(deadline: .now() + 0.12) {
                            self.collect(filter: filter, configuration: configuration, frame: frame)
                        }
                    }
                }
            }
        }
    }

    /// Called on Display.imageProcessingQueue; supports normal images, HEIC and movie URLs.
    static func fileFrames(url: URL?) -> [CGImage] {
        guard let url, url.isFileURL else { return [] }
        let scoped = url.startAccessingSecurityScopedResource()
        defer { if scoped { url.stopAccessingSecurityScopedResource() } }
        if let source = CGImageSourceCreateWithURL(url as CFURL, nil),
           let image = CGImageSourceCreateThumbnailAtIndex(source, 0, [
                kCGImageSourceCreateThumbnailFromImageAlways: true,
                kCGImageSourceCreateThumbnailWithTransform: true,
                kCGImageSourceThumbnailMaxPixelSize: maximumDimension
           ] as CFDictionary) {
            return [image]
        }
        let asset = AVURLAsset(url: url)
        let duration = asset.duration.seconds
        guard duration.isFinite, duration > 0 else { return [] }
        let generator = AVAssetImageGenerator(asset: asset)
        generator.appliesPreferredTrackTransform = true
        generator.maximumSize = CGSize(width: maximumDimension, height: maximumDimension)
        generator.requestedTimeToleranceBefore = .zero
        generator.requestedTimeToleranceAfter = .zero
        return [0.15, 0.5, 0.85].compactMap { fraction in
            try? generator.copyCGImage(at: CMTime(seconds: duration * fraction, preferredTimescale: 600),
                                       actualTime: nil)
        }
    }

    /// Average a few low-resolution frames, preserve aspect ratio and clamp blur edges.
    static func render(images: [CGImage], windowFrame: CGRect? = nil,
                       displayFrame: CGRect) -> CGImage? {
        guard !images.isEmpty, displayFrame.width > 0, displayFrame.height > 0 else { return nil }
        if let windowFrame, windowFrame.width <= 0 || windowFrame.height <= 0 { return nil }
        let scale = min(1, CGFloat(maximumDimension) / max(displayFrame.width, displayFrame.height))
        let target = CGRect(origin: .zero, size: CGSize(width: max(1, (displayFrame.width * scale).rounded()),
                                                       height: max(1, (displayFrame.height * scale).rounded())))
        var average: CIImage?
        for (index, cgImage) in images.enumerated() {
            var image = CIImage(cgImage: cgImage)
            if let windowFrame {
                let sx = image.extent.width / windowFrame.width
                let sy = image.extent.height / windowFrame.height
                image = image.cropped(to: CGRect(x: (displayFrame.minX - windowFrame.minX) * sx,
                                                y: (windowFrame.maxY - displayFrame.maxY) * sy,
                                                width: displayFrame.width * sx, height: displayFrame.height * sy))
            }
            image = image.transformed(by: CGAffineTransform(translationX: -image.extent.minX, y: -image.extent.minY))
            let fillScale = max(target.width / image.extent.width, target.height / image.extent.height)
            image = image.transformed(by: CGAffineTransform(scaleX: fillScale, y: fillScale))
            image = image.transformed(by: CGAffineTransform(translationX: (target.width - image.extent.width) / 2,
                                                          y: (target.height - image.extent.height) / 2))
                .cropped(to: target)
            if let previous = average {
                average = previous.applyingFilter("CIDissolveTransition", parameters: [
                    kCIInputTargetImageKey: image, kCIInputTimeKey: 1 / Double(index + 1)
                ]).cropped(to: target)
            } else { average = image }
        }
        guard let average else { return nil }
        let blurred = average.clampedToExtent()
            .applyingFilter("CIGaussianBlur", parameters: [kCIInputRadiusKey: 20])
            .cropped(to: target)
        return context.createCGImage(blurred, from: target)
    }
}
