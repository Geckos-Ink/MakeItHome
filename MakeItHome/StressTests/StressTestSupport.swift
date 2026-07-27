#if STRESS_TEST_APP

import AppKit
import Darwin
import SwiftUI

enum StressTestMode: String {
    case virtualApps = "virtual-apps"
    case appExtension = "app-extension"
    case runtimeLifecycle = "runtime-lifecycle"
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

    static var current: StressLaunchConfiguration? {
        let arguments = ProcessInfo.processInfo.arguments
        guard let rawMode = value(for: "--stress", in: arguments),
              let mode = StressTestMode(rawValue: rawMode) else {
            return nil
        }

        return StressLaunchConfiguration(
            mode: mode,
            autoExit: arguments.contains("--stress-auto-exit"),
            stageSeconds: positiveDouble("--stress-stage-seconds", arguments: arguments) ?? 5,
            durationSeconds: positiveDouble("--stress-duration", arguments: arguments) ?? 30,
            framesPerSecond: positiveInt("--stress-fps", arguments: arguments) ?? Static.ScreenRecorderHighPriorityFPS,
            workers: positiveInt("--stress-workers", arguments: arguments) ?? 12,
            payloadBytes: (positiveInt("--stress-payload-kb", arguments: arguments) ?? 512) * 1_024,
            port: UInt16(positiveInt("--stress-port", arguments: arguments) ?? 19_494),
            intervalSeconds: positiveDouble("--stress-interval", arguments: arguments) ?? 2
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
        }
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
