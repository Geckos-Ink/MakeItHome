import Darwin
import Foundation

@main
struct StressProcessSampleTests {
    static func main() {
        let thread = mach_thread_self()
        defer { mach_port_deallocate(mach_task_self_, thread) }
        var before: mach_port_urefs_t = 0
        precondition(mach_port_get_refs(mach_task_self_, thread, mach_port_right_t(MACH_PORT_RIGHT_SEND), &before) == KERN_SUCCESS)

        for _ in 0..<10_000 {
            let sample = StressProcessSample.capture()
            precondition(sample.threadCount > 0 && sample.residentMegabytes > 0)
        }

        var after: mach_port_urefs_t = 0
        precondition(mach_port_get_refs(mach_task_self_, thread, mach_port_right_t(MACH_PORT_RIGHT_SEND), &after) == KERN_SUCCESS)
        guard after == before else {
            print("FAIL: 10,000 samples leaked thread send rights (\(before) -> \(after))")
            exit(1)
        }
        print("StressProcessSampleTests: PASS (10,000 samples, no leaked thread rights)")
    }
}
