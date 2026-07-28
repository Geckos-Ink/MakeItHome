#if STRESS_TEST_APP

import AppKit
import Darwin
import SwiftUI

enum StressTestMode: String {
    case virtualApps = "virtual-apps"
    case appExtension = "app-extension"
    case runtimeLifecycle = "runtime-lifecycle"
    case realUsage = "real-usage"
}

@MainActor
final class StressTestAppDelegate: NSObject, NSApplicationDelegate {
    private var hostingWindow: NSWindow?

    func applicationDidFinishLaunching(_ notification: Notification) {
        let rootView: AnyView
        if let configuration = StressLaunchConfiguration.current {
            rootView = AnyView(StressTestRootView(configuration: configuration))
        } else {
            rootView = AnyView(
                ContentView()
                    .onAppear {
                        Static.Init()
                    }
            )
        }

        let window = NSWindow(
            contentRect: NSRect(x: 0, y: 0, width: 1_180, height: 760),
            styleMask: [.titled, .closable, .miniaturizable, .resizable],
            backing: .buffered,
            defer: false
        )
        window.title = StressLaunchConfiguration.current == nil ? "MakeItHome Test" : "MakeItHome Stress"
        window.contentView = NSHostingView(rootView: rootView)
        window.center()
        window.makeKeyAndOrderFront(nil)
        hostingWindow = window

        NSApplication.shared.setActivationPolicy(.regular)
        NSApplication.shared.activate(ignoringOtherApps: true)
    }

    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool {
        false
    }
}

struct StressLaunchConfiguration {
    let mode: StressTestMode
    let autoExit: Bool
    let stageSeconds: TimeInterval
    let durationSeconds: TimeInterval
    let framesPerSecond: Int
    let workers: Int
    let payloadBytes: Int
    let port: UInt16
    let intervalSeconds: TimeInterval
    let seed: UInt64
    let copySourcePath: String?
    let resultPath: String?

    static var current: StressLaunchConfiguration? {
        let arguments = ProcessInfo.processInfo.arguments
        guard let rawMode = value(for: "--stress", in: arguments),
              let mode = StressTestMode(rawValue: rawMode) else {
            return nil
        }

        let defaultInterval: TimeInterval = mode == .realUsage ? 0.08 : 2

        return StressLaunchConfiguration(
            mode: mode,
            autoExit: arguments.contains("--stress-auto-exit"),
            stageSeconds: positiveDouble("--stress-stage-seconds", arguments: arguments) ?? 5,
            durationSeconds: positiveDouble("--stress-duration", arguments: arguments) ?? 30,
            framesPerSecond: positiveInt("--stress-fps", arguments: arguments) ?? Static.ScreenRecorderHighPriorityFPS,
            workers: positiveInt("--stress-workers", arguments: arguments) ?? 12,
            payloadBytes: (positiveInt("--stress-payload-kb", arguments: arguments) ?? 512) * 1_024,
            port: UInt16(positiveInt("--stress-port", arguments: arguments) ?? 19_494),
            intervalSeconds: positiveDouble("--stress-interval", arguments: arguments) ?? defaultInterval,
            seed: positiveUInt64("--stress-seed", arguments: arguments) ?? UInt64.random(in: 1...UInt64.max),
            copySourcePath: value(for: "--stress-copy-source", in: arguments),
            resultPath: value(for: "--stress-result-file", in: arguments)
        )
    }

    private static func value(for option: String, in arguments: [String]) -> String? {
        if let inline = arguments.first(where: { $0.hasPrefix(option + "=") }) {
            return String(inline.dropFirst(option.count + 1))
        }

        guard let index = arguments.firstIndex(of: option), arguments.indices.contains(index + 1) else {
            return nil
        }
        return arguments[index + 1]
    }

    private static func positiveInt(_ option: String, arguments: [String]) -> Int? {
        guard let raw = value(for: option, in: arguments), let value = Int(raw), value > 0 else {
            return nil
        }
        return value
    }

    private static func positiveDouble(_ option: String, arguments: [String]) -> Double? {
        guard let raw = value(for: option, in: arguments), let value = Double(raw), value > 0 else {
            return nil
        }
        return value
    }

    private static func positiveUInt64(_ option: String, arguments: [String]) -> UInt64? {
        guard let raw = value(for: option, in: arguments), let value = UInt64(raw), value > 0 else {
            return nil
        }
        return value
    }
}

struct StressProcessSample {
    let residentMegabytes: Double
    let threadCount: Int

    static func capture() -> StressProcessSample {
        StressProcessSample(
            residentMegabytes: residentBytes() / 1_048_576,
            threadCount: activeThreadCount()
        )
    }

    private static func residentBytes() -> Double {
        var info = mach_task_basic_info_data_t()
        var count = mach_msg_type_number_t(
            MemoryLayout<mach_task_basic_info_data_t>.size / MemoryLayout<natural_t>.size
        )
        let result = withUnsafeMutablePointer(to: &info) { pointer in
            pointer.withMemoryRebound(to: integer_t.self, capacity: Int(count)) { rebound in
                task_info(
                    mach_task_self_,
                    task_flavor_t(MACH_TASK_BASIC_INFO),
                    rebound,
                    &count
                )
            }
        }
        return result == KERN_SUCCESS ? Double(info.resident_size) : 0
    }

    private static func activeThreadCount() -> Int {
        var threads: thread_act_array_t?
        var count: mach_msg_type_number_t = 0
        guard task_threads(mach_task_self_, &threads, &count) == KERN_SUCCESS else {
            return 0
        }

        if let threads = threads {
            let allocationSize = vm_size_t(Int(count) * MemoryLayout<thread_t>.stride)
            vm_deallocate(
                mach_task_self_,
                vm_address_t(UInt(bitPattern: threads)),
                allocationSize
            )
        }
        return Int(count)
    }
}

struct StressMetricCard: View {
    let title: String
    let value: String

    var body: some View {
        VStack(alignment: .leading, spacing: 4) {
            Text(title)
                .font(.caption)
                .foregroundStyle(.secondary)
            Text(value)
                .font(.system(.title3, design: .monospaced).weight(.semibold))
                .monospacedDigit()
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(10)
        .background(.quaternary, in: RoundedRectangle(cornerRadius: 8))
    }
}

struct StressTestRootView: View {
    let configuration: StressLaunchConfiguration

    var body: some View {
        switch configuration.mode {
        case .virtualApps:
            VirtualOverscreenStressView(configuration: configuration)
        case .appExtension:
            AppExtensionStressView(configuration: configuration)
        case .runtimeLifecycle:
            RuntimeLifecycleStressView(configuration: configuration)
        case .realUsage:
            RealUsageStressView(configuration: configuration)
        }
    }
}

func writeStressResult(_ summary: String, configuration: StressLaunchConfiguration) {
    guard let resultPath = configuration.resultPath else { return }
    do {
        try Data((summary + "\n").utf8).write(
            to: URL(fileURLWithPath: resultPath),
            options: .atomic
        )
    } catch {
        print("[StressResult] unable to write result file: \(error.localizedDescription)")
    }
}

@MainActor
func finishStressRun(autoExit: Bool, failed: Bool) {
    guard autoExit else { return }
    if failed {
        fflush(stdout)
        fflush(stderr)
        Darwin.exit(EXIT_FAILURE)
    } else {
        NSApplication.shared.terminate(nil)
    }
}

#endif
