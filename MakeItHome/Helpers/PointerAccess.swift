//
//  PointerAccess.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 08/01/26.
//  Copyright © 2026 geckos.ink. All rights reserved.
//


import Foundation
import Darwin
import CoreImage

enum PointerAccess {
    case read
    case write
    case readWrite

    var requiredProt: vm_prot_t {
        switch self {
        case .read:      return VM_PROT_READ
        case .write:     return VM_PROT_WRITE
        case .readWrite: return VM_PROT_READ | VM_PROT_WRITE
        }
    }
}

/// Best-effort check: is the address range currently mapped and does it have the requested VM protections?
/// ⚠️ Not a guarantee against EXC_BAD_ACCESS (pointer can become invalid after the check).
func isAddressRangeAccessible(_ address: UnsafeRawPointer?,
                              byteCount: Int,
                              access: PointerAccess = .read) -> Bool {
    guard let address, byteCount > 0 else { return false }

    // Basic sanity
    let start = mach_vm_address_t(UInt(bitPattern: address))
    let length = mach_vm_size_t(byteCount)

    // Overflow check for end = start + length
    if length > 0, start > mach_vm_address_t.max - (length - 1) { return false }
    let end = start + length

    var cursor = start
    let task = mach_task_self_

    while cursor < end {
        var regionAddr = cursor
        var regionSize: mach_vm_size_t = 0

        // We use vm_region_basic_info_64 to read protection flags.
        var info = vm_region_basic_info_64()
        var infoCount = mach_msg_type_number_t(MemoryLayout.size(ofValue: info) / MemoryLayout<natural_t>.size)
        var objectName: mach_port_t = 0

        let kr = withUnsafeMutablePointer(to: &info) { infoPtr -> kern_return_t in
            infoPtr.withMemoryRebound(to: integer_t.self, capacity: Int(infoCount)) { intPtr in
                mach_vm_region(
                    task,
                    &regionAddr,
                    &regionSize,
                    VM_REGION_BASIC_INFO_64,
                    intPtr,
                    &infoCount,
                    &objectName
                )
            }
        }

        guard kr == KERN_SUCCESS, regionSize > 0 else { return false }

        // The region returned must actually cover 'cursor'
        guard cursor >= regionAddr, cursor < regionAddr + regionSize else { return false }

        // Check protections (current protection is what matters for access)
        let needed = access.requiredProt
        if (info.protection & needed) != needed {
            return false
        }

        // Advance to next region (or end)
        let regionEnd = regionAddr + regionSize
        cursor = min(regionEnd, end)
    }

    return true
}

/// Convenience wrapper for typed pointers.
func isPointerAccessible<T>(_ ptr: UnsafePointer<T>?,
                            count: Int = 1,
                            access: PointerAccess = .read) -> Bool {
    guard let ptr, count > 0 else { return false }
    return isAddressRangeAccessible(UnsafeRawPointer(ptr),
                                    byteCount: count * MemoryLayout<T>.stride,
                                    access: access)
}

func isMutablePointerAccessible<T>(_ ptr: UnsafeMutablePointer<T>?,
                                   count: Int = 1,
                                   access: PointerAccess = .readWrite) -> Bool {
    guard let ptr, count > 0 else { return false }
    return isAddressRangeAccessible(UnsafeRawPointer(ptr),
                                    byteCount: count * MemoryLayout<T>.stride,
                                    access: access)
}

///
///
///

// MARK: - Object -> UnsafeRawPointer (unretained)

@inline(__always)
func unretainedOpaquePointer<T: AnyObject>(_ object: T) -> UnsafeRawPointer {
    UnsafeRawPointer(Unmanaged.passUnretained(object).toOpaque())
}

// MARK: - Object -> UnsafeRawPointer (retained, RAII)

/// Owns a +1 retain of an object and exposes a stable *opaque* pointer.
/// The pointer stays valid as long as this wrapper is alive.
public final class RetainedOpaquePointer {
    private let unmanaged: Unmanaged<AnyObject>
    public let pointer: UnsafeRawPointer

    public init(_ object: AnyObject) {
        let u = Unmanaged.passRetained(object)
        self.unmanaged = u
        self.pointer = UnsafeRawPointer(u.toOpaque())
    }

    deinit {
        unmanaged.release()
    }
}

public final class RetainedValuePointer<T> {
    private let storage: UnsafeMutablePointer<T>
    public var pointer: UnsafePointer<T> { UnsafePointer(storage) }

    public init(_ value: T) {
        storage = .allocate(capacity: 1)
        storage.initialize(to: value)
    }

    deinit {
        storage.deinitialize(count: 1)
        storage.deallocate()
    }
}

// MARK: - Optional: UnsafeRawPointer -> Object

@inline(__always)
func objectFromUnretainedOpaquePointer<T: AnyObject>(_ ptr: UnsafeRawPointer, as _: T.Type = T.self) -> T {
    Unmanaged<T>.fromOpaque(ptr).takeUnretainedValue()
}

@inline(__always)
func objectFromRetainedOpaquePointer<T: AnyObject>(_ ptr: UnsafeRawPointer, as _: T.Type = T.self) -> T {
    Unmanaged<T>.fromOpaque(ptr).takeRetainedValue()
}

// Recover object from raw pointer
func objectFromOpaquePointer<T: AnyObject>(_ ptr: UnsafeRawPointer, as _: T.Type = T.self) -> T {
    Unmanaged<T>.fromOpaque(ptr).takeUnretainedValue()
}


///
///
///

func examplePointerAccessCheck() {
    let num: Int = 1

    let hold = RetainedValuePointer(num)
    let p: UnsafePointer<Int> = hold.pointer

    if isPointerAccessible(p, count: 1, access: .read) {
        print(p.pointee)   // safe while `hold` is alive
    } else {
        // treat as invalid / avoid dereference
    }

    _ = hold // keep it alive at least until you're done with `p`
}

func exampleObjectPointerAccessCheck() {
    let img = CIImage(color: .red)

    let hold = RetainedOpaquePointer(img)
    let objPtr: UnsafeRawPointer = hold.pointer

    // If you really want: best-effort "mapped" check (not a guarantee)
    _ = isAddressRangeAccessible(objPtr, byteCount: 1, access: .read)

    // Typical use: pass as opaque context to C APIs / callbacks
    //someCFunction(context: objPtr)

    _ = hold // keep alive while the other side uses objPtr
}
