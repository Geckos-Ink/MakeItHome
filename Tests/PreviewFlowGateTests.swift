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
import CoreGraphics

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
        Check.expect(gate.isFullscreen, "holds fullscreen during the first ambiguous exit snapshot")
        gate.updateFullscreen(false, now: 11 + PreviewFlowGate.fullscreenExitSettleAfter)
        Check.expect(!gate.isFullscreen, "leaves fullscreen after continuous absence settles")
        Check.expect(gate.allowsScreenshot, "screenshots resume after fullscreen exit settles")
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
        Check.expect(!gate.noteDuplicatePlaceholderIDs([1], now: t0), "one placeholder never signals a collapse")

        // A brief two-placeholder blip (real space swipe) resolves before the window elapses.
        Check.expect(!gate.noteDuplicatePlaceholderIDs([1, 2], now: t0), "first pass with duplicates just starts the timer")
        Check.expect(!gate.noteDuplicatePlaceholderIDs([1, 2], now: t0 + 0.5), "still within the window — no collapse yet")
        Check.expect(!gate.noteDuplicatePlaceholderIDs([2], now: t0 + 0.7), "duplicates gone → reset, no collapse")
        Check.expect(!gate.noteDuplicatePlaceholderIDs([2, 3], now: t0 + 1.0), "a fresh run restarts the timer from here")
        Check.expect(!gate.noteDuplicatePlaceholderIDs([2, 3], now: t0 + 1.2), "brief swipe never trips the collapse")
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
            if gate.noteDuplicatePlaceholderIDs([6840, 6804], now: now) {
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

        var changing = PreviewFlowGate()
        Check.expect(!changing.noteDuplicatePlaceholderIDs([1, 2], now: start),
                     "a duplicate ID set starts its own timer")
        Check.expect(!changing.noteDuplicatePlaceholderIDs([2, 3], now: start + 2.9),
                     "changing duplicate IDs restart the timer instead of collapsing")
        Check.expect(!changing.noteDuplicatePlaceholderIDs([2, 3], now: start + 3.1),
                     "the replacement set gets a full grace period")
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

        // Exit fullscreen. WindowServer snapshots can flicker during the animation, so the gate
        // deliberately waits for a short continuous absence before restarting the recorder.
        var back = sim.step(fullscreenWindowPresent: false)
        while !back.screenshot {
            back = sim.step(fullscreenWindowPresent: false)
        }
        Check.expect(back.screenshot, "screenshots resume after the fullscreen exit settles")
        Check.expect(back.recorder, "recorder restarts after the fullscreen exit settles")
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
        Check.expect(!blocked.screenshot, "screenshots stay blocked while the Space is changing")

        let cleared = sim.step(fullscreenWindowPresent: false, clearSpaceChange: true)
        Check.expect(cleared.screenshot, "re-opens immediately once the Space settles")
    }

    static func testNewDesktopWithoutHolderRepairsDuringTransition() {
        Check.section("REGRESSION: a new Desktop without a holder does not deadlock")
        var gate = PreviewFlowGate()
        let start: TimeInterval = 6_000

        gate.beginSpaceTransition(now: start)
        _ = gate.observePlaceholderTopology([], now: start + 0.1)

        Check.expect(gate.spaceIsChanging, "empty new Desktop still protects Space bookkeeping")
        Check.expect(!gate.allowsScreenshot,
                     "previews remain blocked while the new Desktop holder is pending")
        Check.expect(!gate.shouldRepairMissingPlaceholder(now: start + 1),
                     "a transient empty animation snapshot does not create a holder")

        let repairAt = start + 0.1 + PreviewFlowGate.missingPlaceholderRepairAfter + 0.01
        Check.expect(gate.shouldRepairMissingPlaceholder(now: repairAt),
                     "stable empty Desktop can create its holder before the stuck-transition timeout")
        Check.expect(repairAt - start < PreviewFlowGate.spaceIsChangingForceResetAfter,
                     "holder repair does not wait for the five-second safety reset")

        gate.notePlaceholderCreated(id: 91, now: repairAt)
        Check.expect(!gate.spaceIsChanging, "creating the new Desktop holder settles bookkeeping")
        Check.expect(gate.allowsScreenshot, "previews resume only after holder bookkeeping settles")
        Check.expect(!gate.shouldRepairMissingPlaceholder(now: repairAt + 100),
                     "the created holder disarms further repairs and prevents an infinity loop")
    }

    static func testOnlyCompleteDisplayFramesAreFullscreen() {
        Check.section("fullscreen geometry: normal Desktop windows keep recording enabled")
        let display = CGRect(x: 0, y: 0, width: 1800, height: 1169)
        let maximized = CGRect(x: 0, y: 0, width: 1800, height: 1130)
        let stageManaged = CGRect(x: 61, y: 0, width: 1739, height: 1130)
        let fullscreen = CGRect(x: 0, y: 0, width: 1800, height: 1169)
        let adjacentLargeWindow = CGRect(x: 1700, y: 0, width: 2000, height: 1169)

        Check.expect(!PreviewFlowGate.isFullscreenWindowFrame(maximized, displayFrame: display),
                     "a menu-bar-sized maximized window is a normal Desktop window")
        Check.expect(!PreviewFlowGate.isFullscreenWindowFrame(stageManaged, displayFrame: display),
                     "a Stage Manager maximized window is a normal Desktop window")
        Check.expect(PreviewFlowGate.isFullscreenWindowFrame(fullscreen, displayFrame: display),
                     "a complete display-sized window is fullscreen")
        Check.expect(!PreviewFlowGate.isFullscreenWindowFrame(adjacentLargeWindow, displayFrame: display),
                     "a large window intersecting from another display is not fullscreen here")
        Check.expect(PreviewFlowGate.isFullscreenCandidateFrame(
            maximized,
            displayFrame: display,
            menuBarHeight: 39),
                     "a menu-bar-visible fullscreen layout reaches AX verification")
    }

    static func testCrossSpaceActivationDoesNotPullPreviousWindowsForward() {
        Check.section("cross-Space activation: do not activate all application windows")

        Check.expect(!PreviewFlowGate.shouldActivateAllWindows(
            forceRequested: false,
            selectedSpaceID: 20,
            appWindowSpaceIDs: [20]),
                     "a non-forced activation never requests all windows")
        Check.expect(PreviewFlowGate.shouldActivateAllWindows(
            forceRequested: true,
            selectedSpaceID: 20,
            appWindowSpaceIDs: [20, 20, -1]),
                     "force remains available when all known windows are on the selected Space")
        Check.expect(!PreviewFlowGate.shouldActivateAllWindows(
            forceRequested: true,
            selectedSpaceID: 20,
            appWindowSpaceIDs: [10, 20]),
                     "windows on another Space suppress activateAllWindows and prevent bounce-back")
    }

    static func testFocusRestorationIsScopedToOpenedSpace() {
        Check.section("overscreen close: never restore focus into a previous Space")

        Check.expect(PreviewFlowGate.shouldRestorePreviousFocus(
            openedSpaceID: 20,
            currentSpaceID: 20),
                     "focus may be restored when the overscreen closes on its opening Space")
        Check.expect(!PreviewFlowGate.shouldRestorePreviousFocus(
            openedSpaceID: 10,
            currentSpaceID: 20),
                     "focus is not restored after the active Desktop changed")
        Check.expect(!PreviewFlowGate.shouldRestorePreviousFocus(
            openedSpaceID: -1,
            currentSpaceID: -1),
                     "unknown transition IDs never authorize focus restoration")
    }

    static func testFullscreenExitIgnoresOneMissingSnapshot() {
        Check.section("fullscreen animation: one missing snapshot cannot restart recording")
        var gate = PreviewFlowGate()

        gate.updateFullscreen(true, now: 100)
        gate.updateFullscreen(false, now: 100.1)
        Check.expect(gate.isFullscreen, "holds fullscreen through the first missing snapshot")
        Check.expect(!gate.allowsRecorder(authorized: true, activated: true, ready: true, disabled: false),
                     "recorder stays stopped during the ambiguous animation frame")

        gate.updateFullscreen(true, now: 100.2)
        Check.expect(gate.fullscreenAbsentSince == 0, "a re-confirmation cancels the pending exit")
    }

    static func testPlaceholderTopologyMustSettle() {
        Check.section("space topology: transient holders are not committed or repaired")
        var gate = PreviewFlowGate()
        let start: TimeInterval = 7000

        gate.beginSpaceTransition(now: start)
        Check.expect(!gate.observePlaceholderTopology([10, 20], now: start + 0.1),
                     "two holders during animation keep the transition guarded")
        Check.expect(gate.spaceIsChanging, "duplicate topology remains marked as changing")
        Check.expect(!gate.observePlaceholderTopology([20], now: start + 0.4),
                     "the first single-holder snapshot is not committed")
        Check.expect(!gate.observePlaceholderTopology([20], now: start + 0.8),
                     "a single holder still inside the settle interval is not committed")
        Check.expect(gate.observePlaceholderTopology([20], now: start + 1.2),
                     "one stable holder settles the transition")
        Check.expect(!gate.spaceIsChanging, "stable topology releases the transition guard")
    }

    static func testFullscreenNeverRepairsItsMissingPlaceholder() {
        Check.section("fullscreen topology: no placeholder is valid and never auto-repaired")
        var gate = PreviewFlowGate()
        let start: TimeInterval = 8000

        gate.beginSpaceTransition(now: start)
        gate.updateFullscreen(true, now: start + 0.1)
        gate.acceptFullscreenTopology(now: start + 0.1)
        _ = gate.observePlaceholderTopology([], now: start + 10)

        Check.expect(!gate.spaceIsChanging, "fullscreen topology does not retain a space lock")
        Check.expect(!gate.shouldRepairMissingPlaceholder(now: start + 100),
                     "missing placeholder in fullscreen never triggers repair")
    }

    static func testMissingPlaceholderRepairHasGrace() {
        Check.section("missing placeholder repair: only after stable non-fullscreen grace")
        var gate = PreviewFlowGate()
        let start: TimeInterval = 9000

        _ = gate.observePlaceholderTopology([], now: start)
        Check.expect(!gate.shouldRepairMissingPlaceholder(now: start + 1),
                     "does not repair a brief missing snapshot")
        Check.expect(gate.shouldRepairMissingPlaceholder(
            now: start + PreviewFlowGate.missingPlaceholderRepairAfter + 0.01),
                     "allows repair only after continuous absence")

        gate.notePlaceholderCreated(id: 42, now: start + 3)
        Check.expect(!gate.shouldRepairMissingPlaceholder(now: start + 100),
                     "creating a placeholder disarms repair until a new missing run")
    }

    static func testMultiDisplayTopologiesSettleIndependently() {
        Check.section("multi-display: one fullscreen Space cannot corrupt another display")
        var fullscreenDisplay = PreviewFlowGate()
        var desktopDisplay = PreviewFlowGate()
        let start: TimeInterval = 10_000

        // The workspace notification is global, so both displays enter protection.
        fullscreenDisplay.beginSpaceTransition(now: start)
        desktopDisplay.beginSpaceTransition(now: start)

        fullscreenDisplay.updateFullscreen(true, now: start + 0.1)
        fullscreenDisplay.acceptFullscreenTopology(now: start + 0.1)
        _ = desktopDisplay.observePlaceholderTopology([77], now: start + 0.1)
        let desktopSettled = desktopDisplay.observePlaceholderTopology(
            [77],
            now: start + 0.1 + PreviewFlowGate.spaceTopologySettleAfter)

        Check.expect(fullscreenDisplay.isFullscreen, "fullscreen display remains correctly gated")
        Check.expect(!fullscreenDisplay.spaceIsChanging, "fullscreen's holder-less topology is accepted")
        Check.expect(desktopSettled, "other display independently commits its stable holder")
        Check.expect(!desktopDisplay.spaceIsChanging, "other display releases only its own transition")
        Check.expect(!fullscreenDisplay.shouldRepairMissingPlaceholder(now: start + 100),
                     "desktop settling cannot trigger repair on the fullscreen display")
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
        testNewDesktopWithoutHolderRepairsDuringTransition()
        testOnlyCompleteDisplayFramesAreFullscreen()
        testCrossSpaceActivationDoesNotPullPreviousWindowsForward()
        testFocusRestorationIsScopedToOpenedSpace()
        testFullscreenExitIgnoresOneMissingSnapshot()
        testPlaceholderTopologyMustSettle()
        testFullscreenNeverRepairsItsMissingPlaceholder()
        testMissingPlaceholderRepairHasGrace()
        testMultiDisplayTopologiesSettleIndependently()

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
