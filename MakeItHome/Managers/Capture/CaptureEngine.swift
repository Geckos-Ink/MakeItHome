/*
See LICENSE folder for this sample’s licensing information.

Abstract:
An object that captures a stream of captured sample buffers containing screen and audio content.
*/

import Foundation
import AVFAudio
import ScreenCaptureKit
import OSLog
import Combine

/// A structure that contains the video data to render.
struct CapturedFrame {
    static let invalid = CapturedFrame(surface: nil, contentRect: .zero, contentScale: 0, scaleFactor: 0, pixelBuffer: nil, displayID: nil)
    
    let surface: IOSurface?
    let contentRect: CGRect
    let contentScale: CGFloat
    let scaleFactor: CGFloat
    var size: CGSize { contentRect.size }
    let pixelBuffer : CVPixelBuffer?
    var displayID : CGDirectDisplayID?
    var captureTime = NSDate().timeIntervalSince1970
}

/// An object that wraps an instance of `SCStream`, and returns its results as an `AsyncThrowingStream`.
@available(macOS 12.3, *) class CaptureEngine: NSObject, @unchecked Sendable {
    
    private let logger = Logger()
    private let operationGate = CaptureEngineOperationGate()
    
    private var stream: SCStream?
    private let videoSampleBufferQueue = DispatchQueue(label: "ink.geckos.MakeItHome.VideoSampleBufferQueue",
                                                       qos: Static.CaptureVideoQueueQoS)
    //private let audioSampleBufferQueue = DispatchQueue(label: "ink.geckos.MakeItHome.AudioSampleBufferQueue")
    
    // Performs average and peak power calculations on the audio samples.
    private let powerMeter = PowerMeter()
    var audioLevels: AudioLevels { powerMeter.levels }
    
    // Store the the startCapture continuation, so that you can cancel it when you call stopCapture().
    private var continuation: AsyncThrowingStream<CapturedFrame, Error>.Continuation?
    
    private var streamOutput: CaptureEngineStreamOutput? // https://developer.apple.com/forums/thread/733077

    #if STRESS_TEST_APP
    private var streamGeneration: UInt = 0
    func ownedStreamGeneration() async -> UInt? {
        await operationGate.acquire()
        let generation = stream == nil ? nil : streamGeneration
        await operationGate.release()
        return generation
    }
    #endif
    
    /// - Tag: StartCapture
    func startCapture(configuration: SCStreamConfiguration, filter: SCContentFilter) async -> AsyncThrowingStream<CapturedFrame, Error> {
        await operationGate.acquire()

        // The engine owns at most one stream, including after a consumer exits.
        if stream != nil {
            await stopCurrentStream()
        }

        let frames = LatestCaptureFrames<CapturedFrame>()
        continuation = frames.continuation
        let output = CaptureEngineStreamOutput(continuation: frames.continuation)
        streamOutput = output

        do {
            let newStream = SCStream(filter: filter, configuration: configuration, delegate: output)
            #if STRESS_TEST_APP
            streamGeneration &+= 1
            #endif
            stream = newStream
            try newStream.addStreamOutput(output, type: .screen, sampleHandlerQueue: videoSampleBufferQueue)
            try await newStream.startCapture()
        } catch {
            frames.continuation.finish(throwing: error)
            continuation = nil
            streamOutput = nil
            stream = nil
        }

        await operationGate.release()
        return frames.stream
    }
    
    func stopCapture() async {
        await operationGate.acquire()

        await stopCurrentStream()

        await operationGate.release()
    }

    /// Called only while holding operationGate.
    private func stopCurrentStream() async {

        do {
            try await stream?.stopCapture()
            continuation?.finish()
        } catch {
            continuation?.finish(throwing: error)
        }
        continuation = nil
        streamOutput = nil
        stream = nil
        powerMeter.processSilence()

    }
    
    /// - Tag: UpdateStreamConfiguration
    func update(configuration: SCStreamConfiguration, filter: SCContentFilter) async {
        await operationGate.acquire()

        guard !Task.isCancelled else {
            await operationGate.release()
            return
        }

        do {
            try await stream?.updateConfiguration(configuration)
            try await stream?.updateContentFilter(filter)
        } catch {
            logger.error("Failed to update the stream session: \(String(describing: error))")
        }

        await operationGate.release()
    }
}

/// A class that handles output from an SCStream, and handles stream errors.
@available(macOS 12.3, *) private class CaptureEngineStreamOutput: NSObject, SCStreamOutput, SCStreamDelegate {
    
    var pcmBufferHandler: ((AVAudioPCMBuffer) -> Void)?
    
    // Store the the startCapture continuation, so you can cancel it if an error occurs.
    private var continuation: AsyncThrowingStream<CapturedFrame, Error>.Continuation?
    
    init(continuation: AsyncThrowingStream<CapturedFrame, Error>.Continuation?) {
        self.continuation = continuation
    }
    
    /// - Tag: DidOutputSampleBuffer
    func stream(_ stream: SCStream, didOutputSampleBuffer sampleBuffer: CMSampleBuffer, of outputType: SCStreamOutputType) {
        
        // Return early if the sample buffer is invalid.
        guard sampleBuffer.isValid else { return }
        
        // Determine which type of data the sample buffer contains.
        switch outputType {
        case .screen:
            // Create a CapturedFrame structure for a video sample buffer.
            guard let frame = createFrame(for: sampleBuffer) else { return }
            continuation?.yield(frame)
        @unknown default:
            fatalError("Encountered unknown stream output type: \(outputType)")
        }
    }
    
    /// Create a `CapturedFrame` for the video sample buffer.
    private func createFrame(for sampleBuffer: CMSampleBuffer) -> CapturedFrame? {
        
        // Retrieve the array of metadata attachments from the sample buffer.
        guard let attachmentsArray = CMSampleBufferGetSampleAttachmentsArray(sampleBuffer,
                                                                             createIfNecessary: false) as? [[SCStreamFrameInfo: Any]],
              let attachments = attachmentsArray.first else { return nil }
        
        // Validate the status of the frame. If it isn't `.complete`, return nil.
        guard let statusRawValue = attachments[SCStreamFrameInfo.status] as? Int,
              let status = SCFrameStatus(rawValue: statusRawValue),
              status == .complete else { return nil }
        
        // Get the pixel buffer that contains the image data.
        guard let pixelBuffer = sampleBuffer.imageBuffer else { return nil }
        
        // Get the backing IOSurface.
        guard let surfaceRef = CVPixelBufferGetIOSurface(pixelBuffer)?.takeUnretainedValue() else { return nil }
        let surface = unsafeBitCast(surfaceRef, to: IOSurface.self)
        
        // Retrieve the content rectangle, scale, and scale factor.
        guard let contentRectDict = attachments[.contentRect],
              let contentRect = CGRect(dictionaryRepresentation: contentRectDict as! CFDictionary),
              let contentScale = attachments[.contentScale] as? CGFloat,
              let scaleFactor = attachments[.scaleFactor] as? CGFloat else { return nil }
        
        // Create a new frame with the relevant data.
        let frame = CapturedFrame(surface: surface,
                                  contentRect: contentRect,
                                  contentScale: contentScale,
                                  scaleFactor: scaleFactor,
                                  pixelBuffer: pixelBuffer,
                                  displayID: nil
        )
        return frame
    }
    
    // Creates an AVAudioPCMBuffer instance on which to perform an average and peak audio level calculation.
    private func createPCMBuffer(for sampleBuffer: CMSampleBuffer) -> AVAudioPCMBuffer? {
        var ablPointer: UnsafePointer<AudioBufferList>?
        try? sampleBuffer.withAudioBufferList { audioBufferList, blockBuffer in
            ablPointer = audioBufferList.unsafePointer
        }
        guard let audioBufferList = ablPointer,
              let absd = sampleBuffer.formatDescription?.audioStreamBasicDescription,
              let format = AVAudioFormat(standardFormatWithSampleRate: absd.mSampleRate, channels: absd.mChannelsPerFrame) else { return nil }
        return AVAudioPCMBuffer(pcmFormat: format, bufferListNoCopy: audioBufferList)
    }
    
    func stream(_ stream: SCStream, didStopWithError error: Error) {
        continuation?.finish(throwing: error)
    }
}
