#if STRESS_TEST_APP

import Darwin
import Foundation

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
            // task_threads returns a send right for every thread as well as the
            // allocated array. Releasing only the array leaks rights each sample.
            for index in 0..<Int(count) {
                mach_port_deallocate(mach_task_self_, threads[index])
            }
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

#endif
