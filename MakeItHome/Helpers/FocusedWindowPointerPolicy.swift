import Foundation
import CoreGraphics

/// Remembers focus, rather than pointer position, so moving the pointer away
/// from an unchanged focused window never pulls it back again.
struct FocusedWindowPointerPolicy<Focus: Equatable> {
    private var hasBaseline = false
    private(set) var previousFocus: Focus?

    mutating func reset() {
        hasBaseline = false
        previousFocus = nil
    }

    mutating func observe(_ focus: Focus?) -> Bool {
        defer {
            previousFocus = focus
            if focus != nil { hasBaseline = true }
        }
        return hasBaseline && focus != nil && focus != previousFocus
    }
}

enum FocusedWindowPointerGeometry {
    /// All inputs use Quartz global points (top-left origin), never backing
    /// pixels or NSScreen's bottom-left coordinates.
    static func destination(window: CGRect, pointer: CGPoint, displays: [CGRect]) -> CGPoint? {
        func isValid(_ rect: CGRect) -> Bool {
            rect.origin.x.isFinite && rect.origin.y.isFinite &&
            rect.size.width.isFinite && rect.size.height.isFinite &&
            rect.size.width > 0 && rect.size.height > 0 &&
            rect.maxX.isFinite && rect.maxY.isFinite
        }

        let displays = displays.filter(isValid)
        guard displays.count > 1, isValid(window),
              pointer.x.isFinite, pointer.y.isFinite,
              displays.contains(where: { $0.contains(pointer) }) else { return nil }

        // A spanning window belongs to the display with the largest visible
        // portion. Mirrored displays do not produce a cross-display move.
        guard let target = displays.max(by: {
            let a = $0.intersection(window)
            let b = $1.intersection(window)
            let areaA = a.isNull ? 0 : a.width * a.height
            let areaB = b.isNull ? 0 : b.width * b.height
            if areaA == areaB { return !$0.contains(pointer) && $1.contains(pointer) }
            return areaA < areaB
        }), !target.contains(pointer) else { return nil }

        let visible = target.intersection(window)
        guard !visible.isNull, visible.width > 0, visible.height > 0 else { return nil }

        // Usually this is the exact window center. Keep partially offscreen
        // windows reachable without landing on an overscreen activation edge.
        let insetX = min(1, visible.width / 2)
        let insetY = min(1, visible.height / 2)
        return CGPoint(x: min(max(window.midX, visible.minX + insetX), visible.maxX - insetX),
                       y: min(max(window.midY, visible.minY + insetY), visible.maxY - insetY))
    }
}
