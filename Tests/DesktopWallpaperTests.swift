import AppKit
import AVFoundation
import CoreImage
import ImageIO
import UniformTypeIdentifiers

private func check(_ condition: @autoclosure () -> Bool, _ message: String) {
    precondition(condition(), message)
}

private func solid(_ color: CIColor, width: Int = 96, height: Int = 64) -> CGImage {
    let rect = CGRect(x: 0, y: 0, width: width, height: height)
    return CIContext().createCGImage(CIImage(color: color).cropped(to: rect), from: rect)!
}

private func pixel(_ image: CGImage, x: Int = 0, y: Int = 0) -> [UInt8] {
    var bytes = [UInt8](repeating: 0, count: 4)
    CIContext().render(CIImage(cgImage: image), toBitmap: &bytes, rowBytes: 4,
                       bounds: CGRect(x: x, y: y, width: 1, height: 1), format: .RGBA8,
                       colorSpace: CGColorSpace(name: CGColorSpace.sRGB))
    return bytes
}

private func write(_ image: CGImage, to url: URL, type: UTType) {
    let destination = CGImageDestinationCreateWithURL(url as CFURL, type.identifier as CFString, 1, nil)!
    CGImageDestinationAddImage(destination, image, nil)
    check(CGImageDestinationFinalize(destination), "Write fixture")
}

private func movie(at url: URL) async throws {
    let writer = try AVAssetWriter(outputURL: url, fileType: .mov)
    let input = AVAssetWriterInput(mediaType: .video, outputSettings: [
        AVVideoCodecKey: AVVideoCodecType.h264, AVVideoWidthKey: 96, AVVideoHeightKey: 64
    ])
    let adaptor = AVAssetWriterInputPixelBufferAdaptor(assetWriterInput: input,
        sourcePixelBufferAttributes: [kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32ARGB,
                                     kCVPixelBufferWidthKey as String: 96, kCVPixelBufferHeightKey as String: 64])
    writer.add(input)
    check(writer.startWriting(), "Start movie fixture")
    writer.startSession(atSourceTime: .zero)
    let colors: [CGColor] = [CGColor(red: 1, green: 0, blue: 0, alpha: 1),
                             CGColor(red: 0, green: 1, blue: 0, alpha: 1),
                             CGColor(red: 0, green: 0, blue: 1, alpha: 1)]
    for index in 0..<6 {
        while !input.isReadyForMoreMediaData { try await Task.sleep(nanoseconds: 1_000_000) }
        var buffer: CVPixelBuffer?
        check(CVPixelBufferPoolCreatePixelBuffer(nil, adaptor.pixelBufferPool!, &buffer) == kCVReturnSuccess,
              "Allocate movie frame")
        let frame = buffer!
        CVPixelBufferLockBaseAddress(frame, [])
        let context = CGContext(data: CVPixelBufferGetBaseAddress(frame), width: 96, height: 64,
            bitsPerComponent: 8, bytesPerRow: CVPixelBufferGetBytesPerRow(frame),
            space: CGColorSpaceCreateDeviceRGB(), bitmapInfo: CGImageAlphaInfo.noneSkipFirst.rawValue)!
        context.setFillColor(colors[index / 2])
        context.fill(CGRect(x: 0, y: 0, width: 96, height: 64))
        CVPixelBufferUnlockBaseAddress(frame, [])
        check(adaptor.append(frame, withPresentationTime: CMTime(value: Int64(index), timescale: 1)), "Append movie frame")
    }
    input.markAsFinished()
    await writer.finishWriting()
    check(writer.status == .completed, "Finish movie fixture")
}

@main struct DesktopWallpaperTests {
    @MainActor static func main() async throws {
        let folder = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        try FileManager.default.createDirectory(at: folder, withIntermediateDirectories: true)
        defer { try? FileManager.default.removeItem(at: folder) }
        let display = CGRect(x: -1920, y: 1080, width: 1920, height: 1080)
        let red = solid(.red)
        for type: UTType in [.png, .jpeg, .heic] {
            let url = folder.appendingPathComponent("still.\(type.preferredFilenameExtension!)")
            write(red, to: url, type: type)
            let frames = DesktopWallpaper.fileFrames(url: url)
            check(frames.count == 1, "Decode \(type.identifier) wallpaper")
            let image = DesktopWallpaper.render(images: frames, displayFrame: display)!
            check(image.width == 640 && image.height == 360, "Preserve display aspect ratio")
            let p = pixel(image)
            check(p[0] > 240 && p[1] < 10 && p[2] < 10 && p[3] == 255, "Image color and opaque blur edges")
        }
        let tiny = DesktopWallpaper.render(images: [solid(.green, width: 1, height: 1)], displayFrame: display)!
        check(pixel(tiny)[1] > 240, "Solid-color wallpapers must not fall back")
        let average = DesktopWallpaper.render(images: [red, solid(.green), solid(.blue)], displayFrame: display)!
        let p = pixel(average, x: 320, y: 180)
        check(abs(Int(p[0]) - Int(p[1])) < 3 && abs(Int(p[1]) - Int(p[2])) < 3 && p[0] > 70,
              "Average all three frames equally")

        let spanningRect = CGRect(x: 0, y: 0, width: 200, height: 100)
        let left = CIImage(color: .red).cropped(to: CGRect(x: 0, y: 0, width: 100, height: 100))
        let right = CIImage(color: .blue).cropped(to: CGRect(x: 100, y: 0, width: 100, height: 100))
        let spanning = CIContext().createCGImage(left.composited(over: right), from: spanningRect)!
        let cropped = DesktopWallpaper.render(images: [spanning], windowFrame: spanningRect,
                                             displayFrame: CGRect(x: 100, y: 0, width: 100, height: 100))!
        check(pixel(cropped)[2] > 240 && pixel(cropped)[0] < 10, "Crop only the target display")
        let verticalRect = CGRect(x: -100, y: -100, width: 100, height: 100)
        let top = CIImage(color: .red).cropped(to: CGRect(x: 0, y: 50, width: 100, height: 50))
        let bottom = CIImage(color: .blue).cropped(to: CGRect(x: 0, y: 0, width: 100, height: 50))
        let vertical = CIContext().createCGImage(top.composited(over: bottom), from: CGRect(x: 0, y: 0, width: 100, height: 100))!
        let upper = DesktopWallpaper.render(images: [vertical], windowFrame: verticalRect,
                                           displayFrame: CGRect(x: -100, y: -100, width: 100, height: 50))!
        check(pixel(upper)[0] > 240 && pixel(upper)[2] < 10, "Quartz-to-image vertical crop on negative coordinates")
        let wideRect = CGRect(x: 0, y: 0, width: 300, height: 100)
        let center = CIImage(color: .green).cropped(to: CGRect(x: 100, y: 0, width: 100, height: 100))
        let wide = CIContext().createCGImage(center.composited(over: CIImage(color: .red)), from: wideRect)!
        let square = DesktopWallpaper.render(images: [wide], displayFrame: CGRect(x: 0, y: 0, width: 100, height: 100))!
        check(pixel(square)[1] > 240 && pixel(square)[0] < 10, "Aspect fill crops the center without stretching")

        let desktopLayer = Int(CGWindowLevelForKey(.desktopWindow))
        check(DesktopWallpaper.isWallpaperWindow(layer: desktopLayer, frame: display, displayFrame: display), "Wallpaper candidate")
        check(!DesktopWallpaper.isWallpaperWindow(layer: 0, frame: display, displayFrame: display), "Reject application windows")
        check(!DesktopWallpaper.isWallpaperWindow(layer: Int(CGWindowLevelForKey(.desktopIconWindow)), frame: display,
                                                 displayFrame: display), "Reject desktop icons")
        check(!DesktopWallpaper.isWallpaperWindow(layer: desktopLayer, frame: .zero, displayFrame: display), "Reject another display")
        check(DesktopWallpaper.fileFrames(url: nil).isEmpty, "Missing URL")
        check(DesktopWallpaper.fileFrames(url: URL(string: "https://example.invalid/wallpaper.mov")).isEmpty, "No remote media fetch")
        let replaced = folder.appendingPathComponent("replaced.png")
        try Data("invalid".utf8).write(to: replaced)
        check(DesktopWallpaper.fileFrames(url: replaced).isEmpty, "Unreadable wallpaper")
        write(red, to: replaced, type: .png)
        check(DesktopWallpaper.fileFrames(url: replaced).count == 1, "Retry the same URL after failure")

        let url = folder.appendingPathComponent("animated.mov")
        try await movie(at: url)
        let videoFrames = DesktopWallpaper.fileFrames(url: url)
        check(videoFrames.count == 3, "Decode three representative movie frames")
        let video = DesktopWallpaper.render(images: videoFrames, displayFrame: display)!
        let vp = pixel(video, x: 320, y: 180)
        check(abs(Int(vp[0]) - Int(vp[1])) < 12 && abs(Int(vp[1]) - Int(vp[2])) < 12 && vp[0] > 70,
              "Video wallpaper averages the movie rather than using its first frame")
        print("DesktopWallpaperTests: image, solid-color, movie averaging, crop, blur and selection checks passed")

        if CommandLine.arguments.contains("--native") {
            guard CGPreflightScreenCaptureAccess() else {
                print("Native wallpaper capture skipped: this test process has no Screen Recording permission")
                return
            }
            let sample = await withCheckedContinuation { continuation in
                DesktopWallpaper.capture(displayID: CGMainDisplayID()) { continuation.resume(returning: $0) }
            }
            check(sample?.images.count == 3, "Capture the current desktop wallpaper window")
            let rendered = DesktopWallpaper.render(images: sample!.images, windowFrame: sample!.windowFrame,
                                                   displayFrame: CGDisplayBounds(CGMainDisplayID()))!
            check(pixel(rendered, x: rendered.width / 2, y: rendered.height / 2)[3] > 240,
                  "Native wallpaper capture contains opaque rendered content")
            print("Native wallpaper capture: three in-memory frames received")
        }
    }
}
