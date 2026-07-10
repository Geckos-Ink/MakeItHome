//
//  PreviewFlowGateTests.swift
//  MakeItHome — fast, dependency-free tests for the preview/recording gate.
//
//  These exercise the *real* MakeItHome/Helpers/PreviewFlowGate.swift (compiled alongside),
//  not a copy. They reproduce the historically painful sequences — idle → back,
//  fullscreen app → back, space change → back — that used to leave window screenshots frozen
//  and stop new windows from appearing, and assert the gate re-opens instead of staying stuck.
//
//  Run:  ./Tests/run.sh            (compiles + runs in well under a second, no Xcode)
//  Exit code is non-zero if any check fails, so it drops straight into CI.
//

import Foundation

// MARK: - Tiny test harness (keeps this runnable via plain `swiftc`, no XCTest bundle needed)

private enum Check {
    static var total = 0
    static var failed = 0

    static func expect(_ condition: Bool, _ message: String, line: UInt = #line) {
        total += 1
        if condition {
            print("  ✓ \(message)")
        } else {
            failed += 1
            print("  ✗ FAIL (line \(line)): \(message)")
        }
    }

    static func section(_ name: String) { print("\n▶ \(name)") }
}

// MARK: - Simulator mirroring the per-pass ordering of Display.checkForScreenshot
//
// Each pass mirrors the real method:
//   0. the every-tick stale-fullscreen net at the top of the screenshot timer (always runs),
//   1. a space-change may be signalled (two placeholders seen during a transition),
//   2. `cycleWindows` recomputes `isFullscreen` fresh from the window list — BUT only when the
//      entry guards pass (`windowsEvaluated`). When the mouse leaves the display or the front
//      app goes inactive, `checkForScreenshot` returns early and this never runs.
//   3. the wall-clock guard tries to recover a stuck space change,
//   4. the gate decides whether previews/window-registration proceed (`allowsScreenshot`)
//      and whether the recorder stays live (`allowsRecorder`, evaluated every tick).
private struct FlowSimulator {
    var gate = PreviewFlowGate()
    var now: TimeInterval
    let tick: TimeInterval

    init(startTime: TimeInterval = 1_000_000, tick: TimeInterval = 0.5) {
        self.now = startTime
        self.tick = tick
    }

    struct Pass { let screenshot: Bool; let recorder: Bool }

    @discardableResult
    mutating func step(fullscreenWindowPresent: Bool,
                       spaceChangeSignal: Bool = false,
                       clearSpaceChange: Bool = false,
                       windowsEvaluated: Bool = true) -> Pass {
        gate.recoverStaleFullscreen(now: now)                       // (0) every-tick net

        if spaceChangeSignal { gate.setSpaceChanging(true, now: now) }
        if clearSpaceChange { gate.setSpaceChanging(false, now: now) }

        if windowsEvaluated {
            gate.updateFullscreen(fullscreenWindowPresent, now: now) // (2) fresh recompute
            gate.recoverStuckSpaceChange(now: now)                   // (3) wall-clock safety net
        }

        let pass = Pass(screenshot: windowsEvaluated && gate.allowsScreenshot,   // (4)
                        recorder: gate.allowsRecorder(authorized: true,
                                                      activated: true,
                                                      ready: true,
                                                      disabled: false))
        now += tick
        return pass
    }
}

// MARK: - Tests

@main
enum PreviewFlowGateTests {

    // --- Unit tests of the pure state machine -------------------------------------------------

    static func testFullscreenIsNeverSticky() {
        Check.section("isFullscreen is recomputed fresh, never sticky")
        var gate = PreviewFlowGate()

        gate.updateFullscreen(true, now: 10)
        Check.expect(gate.isFullscreen, "goes fullscreen when a fullscreen-sized window is present")
        Check.expect(!gate.allowsScreenshot, "screenshots are gated off while fullscreen")

        gate.updateFullscreen(false, now: 11)
        Check.expect(!gate.isFullscreen, "leaves fullscreen the moment no fullscreen window is present")
        Check.expect(gate.allowsScreenshot, "screenshots resume immediately after fullscreen ends")
    }

    static func testStaleFullscreenIsCleared() {
        Check.section("fullscreen never re-confirmed is cleared by the staleness net")
        var gate = PreviewFlowGate()
        let start: TimeInterval = 500

        gate.updateFullscreen(true, now: start)
        // Simulate checkForScreenshot bailing out before cycleWindows for a while: nobody calls
        // updateFullscreen again, so the flag would freeze true without the net.
        Check.expect(!gate.recoverStaleFullscreen(now: start + 1), "still fullscreen 1s in (recently confirmed)")
        Check.expect(gate.isFullscreen, "flag held within the staleness window")

        let stale = PreviewFlowGate.fullscreenStaleAfter
        Check.expect(gate.recoverStaleFullscreen(now: start + stale + 0.01),
                     "clears once fullscreen goes unconfirmed past the staleness window")
        Check.expect(!gate.isFullscreen, "flag cleared after staleness recovery")
        Check.expect(gate.allowsScreenshot, "gate re-opens after stale fullscreen is cleared")

        // Re-confirming keeps it alive (genuine fullscreen refreshes every pass).
        gate.updateFullscreen(true, now: 1000)
        Check.expect(!gate.recoverStaleFullscreen(now: 1000 + stale - 0.5), "re-confirmed fullscreen is not cleared early")
        Check.expect(gate.isFullscreen, "genuine fullscreen stays gated while it keeps being confirmed")
    }

    static func testSpaceChangeTimestampMeasuresWholeTransition() {
        Check.section("space-change start time is stamped on the rising edge only")
        var gate = PreviewFlowGate()

        gate.setSpaceChanging(true, now: 100)
        Check.expect(gate.spaceIsChangingSince == 100, "stamps start time on false→true")

        // A later pass re-asserting the flag must NOT push the start time forward, otherwise the
        // safety window could be reset forever (exactly the original stuck-flag failure mode).
        gate.setSpaceChanging(true, now: 200)
        Check.expect(gate.spaceIsChangingSince == 100, "does not move the start time while already changing")
    }

    static func testStuckSpaceChangeIsForceCleared() {
        Check.section("a space change that outlives the safety window is force-cleared")
        var gate = PreviewFlowGate()
        let start: TimeInterval = 1000

        gate.setSpaceChanging(true, now: start)
        Check.expect(!gate.recoverStuckSpaceChange(now: start + 1), "still blocked 1s in (real switch in progress)")
        Check.expect(gate.spaceIsChanging, "flag still set within the safety window")

        let threshold = PreviewFlowGate.spaceIsChangingForceResetAfter
        Check.expect(gate.recoverStuckSpaceChange(now: start + threshold + 0.01),
                     "recovers once the wall-clock safety window is exceeded")
        Check.expect(!gate.spaceIsChanging, "flag cleared after recovery")
        Check.expect(!gate.recoverStuckSpaceChange(now: start + 100),
                     "recover is a no-op when not changing")
    }

    static func testRecorderGate() {
        Check.section("recorder gate honours fullscreen and environment")
        var gate = PreviewFlowGate()
        func rec(_ authorized: Bool = true, _ activated: Bool = true,
                 _ ready: Bool = true, _ disabled: Bool = false) -> Bool {
            gate.allowsRecorder(authorized: authorized, activated: activated, ready: ready, disabled: disabled)
        }
        Check.expect(rec(), "records when authorized, activated, ready, enabled, not fullscreen")
        Check.expect(!rec(false), "off when screen-recording is unauthorized")
        Check.expect(!rec(true, false), "off when app is not activated")
        Check.expect(!rec(true, true, false), "off when not ready")
        Check.expect(!rec(true, true, true, true), "off when the display is disabled")
        gate.updateFullscreen(true, now: 0)
        Check.expect(!rec(), "off while a fullscreen app owns the display")
    }

    static func testDuplicatePlaceholdersCollapseOnlyWhenPersistent() {
        Check.section("duplicate placeholders: collapse only after they persist")
        var gate = PreviewFlowGate()
        let t0: TimeInterval = 2000

        // A single placeholder is normal — never a collapse signal.
        Check.expect(!gate.notePlaceholderCount(1, now: t0), "one placeholder never signals a collapse")

        // A brief two-placeholder blip (real space swipe) resolves before the window elapses.
        Check.expect(!gate.notePlaceholderCount(2, now: t0), "first pass with duplicates just starts the timer")
        Check.expect(!gate.notePlaceholderCount(2, now: t0 + 0.5), "still within the window — no collapse yet")
        Check.expect(!gate.notePlaceholderCount(1, now: t0 + 0.7), "duplicates gone → reset, no collapse")
        Check.expect(!gate.notePlaceholderCount(2, now: t0 + 1.0), "a fresh run restarts the timer from here")
        Check.expect(!gate.notePlaceholderCount(2, now: t0 + 1.2), "brief swipe never trips the collapse")
    }

    static func testPersistentDuplicatePlaceholdersSignalCollapseOnce() {
        Check.section("REGRESSION: the log loop — two placeholders forever must self-heal")
        var gate = PreviewFlowGate()
        let start: TimeInterval = 5000

        // Reproduce the reported loop: every scan sees two "makeithome" panels (e.g. 6840 & 6804).
        var collapseSignals = 0
        var firstSignalAt: TimeInterval? = nil
        var now = start
        for _ in 0..<20 { // 20 * 0.25s = 5s of the stuck loop
            if gate.notePlaceholderCount(2, now: now) {
                collapseSignals += 1
                if firstSignalAt == nil { firstSignalAt = now }
            }
            now += 0.25
        }
        Check.expect(collapseSignals >= 1, "persistent duplicates eventually signal a collapse (instead of freezing forever)")
        if let at = firstSignalAt {
            Check.expect(at - start <= PreviewFlowGate.stalePlaceholdersAfter + 0.5,
                         "collapse is signalled promptly (~stale window), not after minutes")
        }
        // The signal is one-shot per run: it does not fire on every single pass.
        Check.expect(collapseSignals < 20, "collapse signal is one-shot, re-armed — not spamming every pass")
    }

    // --- Flow simulations reproducing the reported bug ---------------------------------------

    static func testIdleBaselineNeverBlocks() {
        Check.section("baseline: idle desktop keeps updating previews every pass")
        var sim = FlowSimulator()
        for i in 0..<40 {
            let p = sim.step(fullscreenWindowPresent: false)
            Check.expect(p.screenshot && p.recorder, "pass \(i): previews + recorder stay live")
            if !(p.screenshot && p.recorder) { break }
        }
    }

    static func testFullscreenThenBackRecovers() {
        Check.section("REGRESSION: fullscreen app, then back → previews + new windows resume")
        var sim = FlowSimulator()

        // In a fullscreen app (screen recording is intentionally paused there).
        for i in 0..<20 {
            let p = sim.step(fullscreenWindowPresent: true)
            Check.expect(!p.screenshot && !p.recorder, "fullscreen pass \(i): gated off (expected)")
            if p.screenshot || p.recorder { break }
        }

        // Exit fullscreen — the very next pass must re-open both, no matter how long we idled.
        let back = sim.step(fullscreenWindowPresent: false)
        Check.expect(back.screenshot, "screenshots resume on the first pass after leaving fullscreen")
        Check.expect(back.recorder, "recorder restarts on the first pass after leaving fullscreen")
    }

    static func testFullscreenThenBackWhileWindowsNotEvaluatedRecovers() {
        Check.section("REGRESSION: leave fullscreen while checkForScreenshot keeps bailing early")
        var sim = FlowSimulator(tick: 0.5)

        // In fullscreen, windows are still evaluated and refresh the flag true.
        for _ in 0..<10 { _ = sim.step(fullscreenWindowPresent: true) }

        // Now leave fullscreen, but the mouse is off this display / the front app is inactive, so
        // checkForScreenshot returns early *before* cycleWindows every pass — updateFullscreen is
        // never called. This is the exact hole the earlier "recompute inside cycleWindows" fix
        // could not reach. The every-tick staleness net must still recover it.
        var recovered = false
        var elapsed = 0.0
        for _ in 0..<20 { // 10s of wall-clock
            let p = sim.step(fullscreenWindowPresent: false, windowsEvaluated: false)
            elapsed += 0.5
            if p.recorder { recovered = true; break }
        }
        Check.expect(recovered, "recorder self-heals even when the window list is never re-read")
        Check.expect(elapsed <= PreviewFlowGate.fullscreenStaleAfter + 1.0,
                     "recovers within ~the staleness window, not indefinitely")

        // And once windows are evaluated again, screenshots flow.
        let p = sim.step(fullscreenWindowPresent: false, windowsEvaluated: true)
        Check.expect(p.screenshot && p.recorder, "previews fully resume once the window list is read again")
    }

    static func testFullscreenTeardownWithSpuriousSpaceChangeRecovers() {
        Check.section("REGRESSION: fullscreen teardown that also trips a stuck space change")
        var sim = FlowSimulator(tick: 0.5)

        // Fullscreen, and during teardown two placeholders are momentarily seen → space change.
        _ = sim.step(fullscreenWindowPresent: true)
        _ = sim.step(fullscreenWindowPresent: true, spaceChangeSignal: true)

        // Now we're back on a normal desktop, but the space holder never resolves (the exact
        // condition that used to wedge the flag on forever). It must self-heal via the safety net.
        var recovered = false
        var passesUntilRecovery = 0
        for _ in 0..<40 { // 40 * 0.5s = 20s of wall-clock, well past the 5s safety window
            let p = sim.step(fullscreenWindowPresent: false)
            passesUntilRecovery += 1
            if p.screenshot && p.recorder { recovered = true; break }
        }
        Check.expect(recovered, "gate self-heals after a stuck space change following fullscreen")
        // Should recover a hair past the 5s window, not linger for tens of seconds.
        Check.expect(Double(passesUntilRecovery) * 0.5 <= PreviewFlowGate.spaceIsChangingForceResetAfter + 1.0,
                     "recovers promptly (~safety window), not indefinitely")
    }

    static func testNormalSpaceChangeClearsImmediately() {
        Check.section("normal space change: cleared by real logic re-opens the gate at once")
        var sim = FlowSimulator()
        _ = sim.step(fullscreenWindowPresent: false, spaceChangeSignal: true)
        let blocked = sim.step(fullscreenWindowPresent: false)
        Check.expect(!blocked.screenshot, "blocked while the space is changing")

        let cleared = sim.step(fullscreenWindowPresent: false, clearSpaceChange: true)
        Check.expect(cleared.screenshot, "re-opens immediately once the space settles (no waiting on the safety net)")
    }

    // --- Runner --------------------------------------------------------------------------------

    static func main() {
        print("PreviewFlowGate — flow tests")

        testFullscreenIsNeverSticky()
        testStaleFullscreenIsCleared()
        testSpaceChangeTimestampMeasuresWholeTransition()
        testStuckSpaceChangeIsForceCleared()
        testDuplicatePlaceholdersCollapseOnlyWhenPersistent()
        testPersistentDuplicatePlaceholdersSignalCollapseOnce()
        testRecorderGate()
        testIdleBaselineNeverBlocks()
        testFullscreenThenBackRecovers()
        testFullscreenThenBackWhileWindowsNotEvaluatedRecovers()
        testFullscreenTeardownWithSpuriousSpaceChangeRecovers()
        testNormalSpaceChangeClearsImmediately()

        print("\n────────────────────────────────────────")
        if Check.failed == 0 {
            print("✅ \(Check.total) checks passed")
            exit(0)
        } else {
            print("❌ \(Check.failed)/\(Check.total) checks FAILED")
            exit(1)
        }
    }
}
