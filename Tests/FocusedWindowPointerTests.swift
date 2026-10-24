import Foundation
import CoreGraphics

@main
struct FocusedWindowPointerTests {
    static func main() {
        var checks = 0
        func expect(_ condition: Bool, _ message: String) {
            checks += 1
            guard condition else { fatalError(message) }
        }

        var policy = FocusedWindowPointerPolicy<String>()
        expect(!policy.observe(nil), "No focus at startup must not move the pointer")
        expect(!policy.observe("appA/window1"), "Initial focus establishes a baseline")
        expect(policy.observe("appB/window1"), "Changing applications is a focus change")
        expect(!policy.observe("appB/window1"), "Moving the pointer away must not cause repeated warps")
        expect(policy.observe("appB/window2"), "Switching windows within the same app must be detected")
        // The caller consumes focus before checking drag/overscreen suppression.
        expect(policy.observe("appB/window3"), "Suppressed focus still updates the baseline")
        expect(!policy.observe("appB/window3"), "Ending a drag must not replay a suppressed focus change")
        expect(!policy.observe(nil), "The host app or no window must not move the pointer")
        expect(policy.observe("appB/window3"), "Returning from the host is a new focus transition")
        policy.reset()
        expect(!policy.observe("appC/window1"), "Enable, topology and wake resets must establish a fresh baseline")

        let main = CGRect(x: 0, y: 0, width: 1920, height: 1080)
        let right = CGRect(x: 1920, y: 0, width: 1280, height: 1024)
        let left = CGRect(x: -1440, y: 180, width: 1440, height: 900)
        let above = CGRect(x: 200, y: -1200, width: 1600, height: 1200)
        let below = CGRect(x: 0, y: 1080, width: 1920, height: 1080)
        let pointer = CGPoint(x: 500, y: 500)
        func destination(_ window: CGRect, _ screens: [CGRect] = [main, right], _ cursor: CGPoint? = nil) -> CGPoint? {
            FocusedWindowPointerGeometry.destination(window: window, pointer: cursor ?? pointer, displays: screens)
        }

        expect(destination(CGRect(x: 2000, y: 100, width: 1000, height: 800)) == CGPoint(x: 2500, y: 500),
               "Use the window center, not the display center or backing pixels")
        expect(destination(CGRect(x: -1300, y: 200, width: 800, height: 600), [main, left]) == CGPoint(x: -900, y: 500),
               "A display left of the main display has negative Quartz x")
        expect(destination(CGRect(x: 400, y: -1100, width: 800, height: 600), [main, above]) == CGPoint(x: 800, y: -800),
               "A display above the main display has negative Quartz y")
        expect(destination(CGRect(x: 400, y: 1200, width: 800, height: 600), [main, below]) == CGPoint(x: 800, y: 1500),
               "A display below the main display has positive Quartz y")
        expect(destination(CGRect(x: 100, y: 100, width: 800, height: 600)) == nil,
               "Same-display focus must leave the pointer alone")
        expect(destination(right, [main]) == nil, "Single-display setups must never warp")
        expect(destination(main, [main, main]) == nil, "Mirrored displays must never warp")
        expect(destination(right, [main, right], CGPoint(x: 2200, y: 600)) == nil,
               "A pointer already on the target display must remain where it is")
        expect(destination(CGRect(x: 1700, y: 100, width: 1000, height: 600)) == CGPoint(x: 2200, y: 400),
               "Spanning windows belong to the display containing their largest portion")
        expect(destination(CGRect(x: 1000, y: 100, width: 1000, height: 600)) == nil,
               "A small overlap on another display must not cause a move")
        expect(destination(CGRect(x: 1820, y: 100, width: 200, height: 600)) == nil,
               "An equally split window favors the pointer's existing display")
        expect(destination(CGRect(x: 3000, y: 100, width: 1000, height: 600)) == CGPoint(x: 3199, y: 400),
               "An offscreen center must be clamped into the window's visible portion")
        expect(destination(CGRect(x: 4000, y: 100, width: 1000, height: 600)) == nil,
               "An entirely offscreen window has no safe destination")
        expect(destination(right, [main, right], CGPoint(x: 5000, y: 5000)) == nil,
               "A pointer outside the known topology must not be moved")
        for invalid in [CGRect.zero, CGRect(x: 2000, y: 100, width: -1, height: 100),
                        CGRect(x: CGFloat.infinity, y: 0, width: 100, height: 100), CGRect.null] {
            expect(destination(invalid) == nil, "Invalid or empty geometry must be ignored")
        }
        expect(destination(right, [main, right], CGPoint(x: CGFloat.nan, y: 0)) == nil,
               "Invalid pointer coordinates must be ignored")
        print("FocusedWindowPointerTests: PASS (\(checks) checks)")
    }
}
