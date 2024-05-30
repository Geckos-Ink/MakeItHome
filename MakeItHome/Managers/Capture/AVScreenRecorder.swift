//
//  AVScreenRecorder.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 30/05/24.
//  Copyright © 2024 geckos.ink. All rights reserved.
//

import Cocoa
import AVFoundation

// that can lead the minimum compatibility to macOS 10.8
// but the use of StateObject brings the minimum compatibility to 11.0 ... is this a good invenstment of time?
class AVScreenRecorder: NSObject, AVCaptureVideoDataOutputSampleBufferDelegate {

    var window: NSWindow!
    var captureSession: AVCaptureSession!
    var screenInput: AVCaptureScreenInput!
    var videoOutput: AVCaptureVideoDataOutput!

    func applicationDidFinishLaunching(_ aNotification: Notification) {
        // Create the window
        let screenRect = NSScreen.main!.frame
        self.window = NSWindow(contentRect: screenRect, styleMask: [.titled, .resizable, .closable], backing: .buffered, defer: false)
        self.window.makeKeyAndOrderFront(nil)
        
        // Set up capture session
        setupCaptureSession()
        
        // Start capture session
        captureSession.startRunning()
    }

    func setupCaptureSession() {
        // Initialize capture session
        captureSession = AVCaptureSession()
        
        // Set up screen input
        guard let screen = NSScreen.main else { return }
        screenInput = AVCaptureScreenInput(displayID: screen.deviceDescription[NSDeviceDescriptionKey("NSScreenNumber")] as! CGDirectDisplayID)
        screenInput.minFrameDuration = CMTime(value: 1, timescale: 30) // 30 fps
        screenInput.cropRect = CGRect(x: 0, y: 0, width: screen.frame.width, height: screen.frame.height)
        
        if captureSession.canAddInput(screenInput) {
            captureSession.addInput(screenInput)
        } else {
            print("Failed to add screen input to capture session.")
            return
        }
        
        // Set up video data output
        videoOutput = AVCaptureVideoDataOutput()
        videoOutput.videoSettings = [kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32BGRA]
        videoOutput.setSampleBufferDelegate(self, queue: DispatchQueue(label: "videoQueue"))
        
        if captureSession.canAddOutput(videoOutput) {
            captureSession.addOutput(videoOutput)
        } else {
            print("Failed to add video output to capture session.")
            return
        }
    }
    
    func captureOutput(_ output: AVCaptureOutput, didOutput sampleBuffer: CMSampleBuffer, from connection: AVCaptureConnection) {
        // Process the video frame
        guard let imageBuffer = CMSampleBufferGetImageBuffer(sampleBuffer) else { return }
        let ciImage = CIImage(cvImageBuffer: imageBuffer)
        let context = CIContext()
        
        guard let cgImage = context.createCGImage(ciImage, from: ciImage.extent) else { return }
        
        // Display or process the image
        // For example, you could display it in a NSImageView:
        DispatchQueue.main.async {
            let nsImage = NSImage(cgImage: cgImage, size: NSSize(width: cgImage.width, height: cgImage.height))
            self.window.contentView?.layer?.contents = nsImage
        }
    }
    
    func applicationWillTerminate(_ aNotification: Notification) {
        // Insert code here to tear down your application
        captureSession.stopRunning()
    }
}
