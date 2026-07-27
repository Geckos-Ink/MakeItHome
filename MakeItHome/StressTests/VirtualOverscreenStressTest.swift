#if STRESS_TEST_APP

import AppKit
import SceneKit
import SwiftUI

struct VirtualStressApp: Identifiable {
    let id: Int
    let title: String
    let image: CGImage
}

@MainActor
final class VirtualOverscreenStressCoordinator: ObservableObject {
    @Published private(set) var apps: [VirtualStressApp] = []
    @Published private(set) var maxApps = 5
    @Published private(set) var focusedID: Int?
    @Published private(set) var isOverscreenOpen = false
    @Published private(set) var frameRevision: UInt64 = 0
    @Published private(set) var selectionCount = 0
    @Published private(set) var peakResidentMB = 0.0
    @Published private(set) var peakThreads = 0
    @Published private(set) var status = "Preparing"

    let configuration: StressLaunchConfiguration

    private var timer: Timer?
    private var stageStartedAt = Date()
    private var tickInCycle = 0
    private var randomState: UInt64 = 0x4D_49_48_20_32_30_39

    init(configuration: StressLaunchConfiguration) {
        self.configuration = configuration
    }

    var focusedImage: CGImage? {
        guard let focusedID = focusedID else { return nil }
        return apps.first(where: { $0.id == focusedID })?.image
    }

    var virtualAppCount: Int { apps.count }

    func start() {
        guard timer == nil else { return }
        configureStage(maxApps: 5)
        status = "Running"

        let interval = 1 / Double(configuration.framesPerSecond)
        let timer = Timer(timeInterval: interval, repeats: true) { [weak self] _ in
            MainActor.assumeIsolated {
                self?.advanceFrame()
            }
        }
        timer.tolerance = interval * 0.1
        RunLoop.main.add(timer, forMode: .common)
        self.timer = timer
    }

    func stop() {
        timer?.invalidate()
        timer = nil
        isOverscreenOpen = false
        status = "Stopped"
    }

    private func advanceFrame() {
        precondition(Thread.isMainThread, "Virtual screen and SceneKit updates must remain on main")
        frameRevision &+= 1
        tickInCycle += 1

        let cycleLength = max(configuration.framesPerSecond, 3)
        let phase = tickInCycle % cycleLength
        if phase == 0 {
            isOverscreenOpen = true
        } else if phase == max(1, cycleLength / 3) {
            selectNextApp()
        } else if phase == max(2, (cycleLength * 2) / 3) {
            isOverscreenOpen = false
        }

        if frameRevision % UInt64(max(configuration.framesPerSecond / 2, 1)) == 0 {
            sampleProcess()
        }

        guard Date().timeIntervalSince(stageStartedAt) >= configuration.stageSeconds else {
            return
        }

        if maxApps < 10 {
            configureStage(maxApps: maxApps + 1)
        } else {
            timer?.invalidate()
            timer = nil
            isOverscreenOpen = false
            status = "Completed"
            let expected = maxApps + Int(ceil(Double(maxApps) * 0.5))
            let failed = apps.count != expected || focusedImage == nil
            printSummary(failed: failed)
            finishStressRun(autoExit: configuration.autoExit, failed: failed)
        }
    }

    private func configureStage(maxApps: Int) {
        self.maxApps = maxApps
        Static.MaxApps = maxApps
        let totalApps = maxApps + Int(ceil(Double(maxApps) * 0.5))
        apps = autoreleasepool {
            (0..<totalApps).map { index in
                VirtualStressApp(
                    id: (maxApps * 1_000) + index,
                    title: "Virtual App \(index + 1)",
                    image: makeFixedImage(index: index, stage: maxApps)
                )
            }
        }
        focusedID = apps.first?.id
        isOverscreenOpen = false
        tickInCycle = 0
        stageStartedAt = Date()
        sampleProcess()
        print("[VirtualStress] MaxApps=\(maxApps), virtualApps=\(totalApps)")
    }

    private func selectNextApp() {
        guard apps.count > 1 else { return }
        let oldID = focusedID
        var candidate = apps[nextRandomIndex(upperBound: apps.count)].id
        if candidate == oldID, let oldID = oldID, let index = apps.firstIndex(where: { $0.id == oldID }) {
            candidate = apps[(index + 1) % apps.count].id
        }
        focusedID = candidate
        selectionCount += 1
    }

    private func nextRandomIndex(upperBound: Int) -> Int {
        randomState = randomState &* 6_364_136_223_846_793_005 &+ 1
        return Int(randomState % UInt64(upperBound))
    }

    private func makeFixedImage(index: Int, stage: Int) -> CGImage {
        let width = 1_280
        let height = 720
        let colorSpace = CGColorSpaceCreateDeviceRGB()
        let context = CGContext(
            data: nil,
            width: width,
            height: height,
            bitsPerComponent: 8,
            bytesPerRow: width * 4,
            space: colorSpace,
            bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
        )!

        let hue = CGFloat((index * 47 + stage * 19) % 360) / 360
        let base = NSColor(calibratedHue: hue, saturation: 0.72, brightness: 0.78, alpha: 1)
        let accent = NSColor(calibratedHue: (hue + 0.16).truncatingRemainder(dividingBy: 1), saturation: 0.8, brightness: 1, alpha: 1)
        context.setFillColor(base.cgColor)
        context.fill(CGRect(x: 0, y: 0, width: width, height: height))

        context.setFillColor(accent.withAlphaComponent(0.35).cgColor)
        for stripe in 0..<14 {
            let x = CGFloat((stripe * 137 + index * 53) % width)
            context.fill(CGRect(x: x, y: 0, width: 42, height: CGFloat(height)))
        }

        context.setFillColor(NSColor.black.withAlphaComponent(0.22).cgColor)
        context.fill(CGRect(x: 0, y: 0, width: width, height: 92))
        return context.makeImage()!
    }

    private func sampleProcess() {
        let sample = StressProcessSample.capture()
        peakResidentMB = max(peakResidentMB, sample.residentMegabytes)
        peakThreads = max(peakThreads, sample.threadCount)
    }

    private func printSummary(failed: Bool) {
        print("[VirtualStress] \(failed ? "FAILED" : "COMPLETED") frames=\(frameRevision) selections=\(selectionCount) peakMemoryMB=\(String(format: "%.1f", peakResidentMB)) peakThreads=\(peakThreads)")
    }
}

struct VirtualOverscreenStressView: View {
    @StateObject private var coordinator: VirtualOverscreenStressCoordinator

    init(configuration: StressLaunchConfiguration) {
        _coordinator = StateObject(wrappedValue: VirtualOverscreenStressCoordinator(configuration: configuration))
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 14) {
            HStack {
                VStack(alignment: .leading, spacing: 3) {
                    Text("Virtual overscreen stress")
                        .font(.title2.weight(.bold))
                    Text("Fixed 1280×720 frames at \(coordinator.configuration.framesPerSecond) FPS; open → select → close once per second")
                        .foregroundStyle(.secondary)
                }
                Spacer()
                Text(coordinator.status)
                    .font(.headline)
                    .foregroundStyle(coordinator.status == "Completed" ? .green : .primary)
            }

            HStack(spacing: 10) {
                StressMetricCard(title: "MaxApps", value: "\(coordinator.maxApps)")
                StressMetricCard(title: "Virtual apps", value: "\(coordinator.virtualAppCount)")
                StressMetricCard(title: "Frames", value: "\(coordinator.frameRevision)")
                StressMetricCard(title: "Selections", value: "\(coordinator.selectionCount)")
                StressMetricCard(title: "Peak memory", value: String(format: "%.0f MB", coordinator.peakResidentMB))
                StressMetricCard(title: "Peak threads", value: "\(coordinator.peakThreads)")
            }

            ZStack(alignment: .bottom) {
                FixedFrameLayerView(image: coordinator.focusedImage, revision: coordinator.frameRevision)
                    .background(Color.black)

                VirtualOverscreenSceneView(
                    apps: coordinator.apps,
                    maxApps: coordinator.maxApps,
                    focusedID: coordinator.focusedID,
                    isOpen: coordinator.isOverscreenOpen,
                    frameRevision: coordinator.frameRevision
                )
                .frame(height: 260)
            }
            .clipShape(RoundedRectangle(cornerRadius: 12))
            .overlay(RoundedRectangle(cornerRadius: 12).stroke(.white.opacity(0.15)))

            HStack {
                Text("Stage duration: \(String(format: "%.1fs", coordinator.configuration.stageSeconds))")
                    .foregroundStyle(.secondary)
                Spacer()
                Button("Stop") { coordinator.stop() }
            }
        }
        .padding(18)
        .frame(minWidth: 1_000, minHeight: 700)
        .task { coordinator.start() }
    }
}

private struct FixedFrameLayerView: NSViewRepresentable {
    let image: CGImage?
    let revision: UInt64

    func makeNSView(context: Context) -> NSView {
        let view = NSView()
        view.wantsLayer = true
        view.layer?.contentsGravity = .resizeAspectFill
        view.layer?.backgroundColor = NSColor.black.cgColor
        return view
    }

    func updateNSView(_ view: NSView, context: Context) {
        precondition(Thread.isMainThread)
        view.layer?.contents = image
        view.layer?.setNeedsDisplay()
        _ = revision
    }
}

private struct VirtualOverscreenSceneView: NSViewRepresentable {
    let apps: [VirtualStressApp]
    let maxApps: Int
    let focusedID: Int?
    let isOpen: Bool
    let frameRevision: UInt64

    func makeCoordinator() -> SceneCoordinator { SceneCoordinator() }

    func makeNSView(context: Context) -> SCNView {
        context.coordinator.view
    }

    func updateNSView(_ view: SCNView, context: Context) {
        context.coordinator.update(
            apps: apps,
            maxApps: maxApps,
            focusedID: focusedID,
            isOpen: isOpen,
            frameRevision: frameRevision
        )
    }

    final class SceneCoordinator {
        let view = SCNView()
        private let appsRoot = SCNNode()
        private var nodes: [Int: SCNNode] = [:]
        private var renderedIDs: [Int] = []
        private var lastOpen = false

        init() {
            let scene = SCNScene()
            scene.rootNode.addChildNode(appsRoot)
            view.scene = scene
            view.backgroundColor = .clear
            view.wantsLayer = true
            view.layer?.backgroundColor = NSColor.black.withAlphaComponent(0.72).cgColor
            view.rendersContinuously = false
            view.isPlaying = true
            view.preferredFramesPerSecond = Static.SceneKitPreferredFPS

            let camera = SCNNode()
            camera.camera = SCNCamera()
            camera.camera?.usesOrthographicProjection = true
            camera.camera?.orthographicScale = 6.2
            camera.position = SCNVector3(0, 0, 10)
            scene.rootNode.addChildNode(camera)
            view.pointOfView = camera
        }

        func update(apps: [VirtualStressApp], maxApps: Int, focusedID: Int?, isOpen: Bool, frameRevision: UInt64) {
            precondition(Thread.isMainThread)
            let ids = apps.map(\.id)
            if ids != renderedIDs {
                rebuild(apps: apps, maxApps: maxApps)
                renderedIDs = ids
            }

            for app in apps {
                guard let material = nodes[app.id]?.geometry?.firstMaterial else { continue }
                if app.id == focusedID {
                    // This intentionally assigns the same fixed CGImage on every capture tick,
                    // matching the focused-window material update path without allocating frames.
                    material.diffuse.contents = app.image
                    material.emission.contents = NSColor.controlAccentColor.withAlphaComponent(0.28)
                } else {
                    material.emission.contents = NSColor.black
                }
            }

            if lastOpen != isOpen {
                SCNTransaction.begin()
                SCNTransaction.animationDuration = 0.16
                appsRoot.position.y = isOpen ? 0 : -7
                appsRoot.opacity = isOpen ? 1 : 0
                SCNTransaction.commit()
                lastOpen = isOpen
            }
            view.setNeedsDisplay(view.bounds)
            _ = frameRevision
        }

        private func rebuild(apps: [VirtualStressApp], maxApps: Int) {
            appsRoot.childNodes.forEach { $0.removeFromParentNode() }
            nodes.removeAll(keepingCapacity: true)

            let previewApps = Array(apps.prefix(maxApps))
            let iconApps = Array(apps.dropFirst(maxApps))
            let previewWidth: CGFloat = 1.85
            let previewHeight: CGFloat = 1.04
            let totalWidth = CGFloat(max(previewApps.count - 1, 0)) * 2.02

            for (index, app) in previewApps.enumerated() {
                let plane = SCNPlane(width: previewWidth, height: previewHeight)
                plane.cornerRadius = 0.08
                plane.firstMaterial?.diffuse.contents = app.image
                plane.firstMaterial?.lightingModel = .constant
                let node = SCNNode(geometry: plane)
                node.position = SCNVector3(CGFloat(index) * 2.02 - totalWidth / 2, 0.55, 0)
                appsRoot.addChildNode(node)
                nodes[app.id] = node
            }

            let iconTotalWidth = CGFloat(max(iconApps.count - 1, 0)) * 0.82
            for (index, app) in iconApps.enumerated() {
                let plane = SCNPlane(width: 0.64, height: 0.64)
                plane.cornerRadius = 0.13
                plane.firstMaterial?.diffuse.contents = app.image
                plane.firstMaterial?.lightingModel = .constant
                let node = SCNNode(geometry: plane)
                node.position = SCNVector3(CGFloat(index) * 0.82 - iconTotalWidth / 2, -0.72, 0)
                appsRoot.addChildNode(node)
                nodes[app.id] = node
            }

            appsRoot.position.y = -7
            appsRoot.opacity = 0
            lastOpen = false
        }
    }
}

#endif
