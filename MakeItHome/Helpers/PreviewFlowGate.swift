//
//  PreviewFlowGate.swift
//  MakeItHome
//
//  Pure, AppKit-free state machine for the transient conditions that gate window-preview
//  screenshots and live screen recording inside `Display.checkForScreenshot`.
//
//  It is extracted from that ~600-line method on purpose: the recurring "previews frozen /
//  no new windows after idle or after a fullscreen app" bug is a state-machine problem — a
//  sticky flag (`isFullscreen`, `spaceIsChanging`) that never resets and blocks every later
//  pass. Kept dependency-free so the exact failure sequences (idle → back, fullscreen → back,
//  space change → back) can be simulated in a unit test in milliseconds, with no real display,
//  window server, ScreenCaptureKit, or screen-recording permission.
//
//  Invariants this type guarantees:
//   1. `isFullscreen` is derived from the window list every pass, with a short exit debounce so
//      a single incomplete WindowServer snapshot during a fullscreen animation cannot restart
//      ScreenCaptureKit while the fullscreen Space is still being assembled.
//   2. `spaceIsChanging` blocks previews while placeholder/window-to-Space bookkeeping settles,
//      but only up to a wall-clock safety window. A real space switch settles in ~1s; anything
//      longer is treated as stuck and force-cleared.
//   3. Missing placeholders are repairable only after a stable, non-fullscreen interval. A
//      fullscreen Space legitimately has no placeholder and must never trigger auto-repair.
//

import Foundation
import CoreGraphics

struct PreviewFlowGate {

    /// A native fullscreen window covers the complete display, including the menu-bar area.
    /// A maximized window on a normal Desktop covers only the visible frame and must not disable
    /// MakeItHome or prevent that Desktop from receiving a placeholder.
    static func isFullscreenWindowFrame(_ windowFrame: CGRect,
                                        displayFrame: CGRect,
                                        tolerance: CGFloat = 3) -> Bool {
        let coveredFrame = windowFrame.intersection(displayFrame)
        return !coveredFrame.isNull &&
            coveredFrame.size.width >= displayFrame.size.width - tolerance &&
            coveredFrame.size.height >= displayFrame.size.height - tolerance
    }

    /// Broad geometry candidate used before consulting the active window's AXFullScreen state.
    /// This includes native fullscreen configurations that keep the menu bar visible.
    static func isFullscreenCandidateFrame(_ windowFrame: CGRect,
                                           displayFrame: CGRect,
                                           menuBarHeight: CGFloat,
                                           tolerance: CGFloat = 3) -> Bool {
        let coveredFrame = windowFrame.intersection(displayFrame)
        return !coveredFrame.isNull &&
            coveredFrame.size.width >= displayFrame.size.width - tolerance &&
            coveredFrame.size.height >= displayFrame.size.height - menuBarHeight - tolerance
    }

    /// `.activateAllWindows` can pull an application window from a different Space to the front,
    /// undoing a placeholder-driven Space switch. It is safe only when every known window for
    /// the application belongs to the selected Space (unknown `-1` IDs are ignored).
    static func shouldActivateAllWindows(forceRequested: Bool,
                                         selectedSpaceID: Int,
                                         appWindowSpaceIDs: [Int]) -> Bool {
        guard forceRequested else { return false }
        return !appWindowSpaceIDs.contains { spaceID in
            spaceID >= 0 && spaceID != selectedSpaceID
        }
    }

    /// Closing the overscreen without a selection must not activate an app from the Desktop that
    /// was current before a later Space change. Unknown/transitional IDs are deliberately unsafe.
    static func shouldRestorePreviousFocus(openedSpaceID: Int,
                                           currentSpaceID: Int) -> Bool {
        openedSpaceID > 0 && openedSpaceID == currentSpaceID
    }

    /// A space change must never block previews longer than this (seconds). Real space
    /// switches settle in ~1s; anything longer means the placeholder bookkeeping got stuck
    /// (sleep / fullscreen teardown), so we force the flag off.
    static let spaceIsChangingForceResetAfter: TimeInterval = 5.0

    /// Fullscreen must be re-confirmed from the window list at least this often, otherwise it
    /// is treated as stale and cleared. `isFullscreen` is only refreshed inside `cycleWindows`,
    /// which sits behind several early-returns in `checkForScreenshot` (mouse left the display,
    /// front app went inactive, no window snapshot yet). Whenever one of those keeps firing, the
    /// flag would otherwise freeze at `true` and wedge the recorder off forever. This is the net
    /// that catches every such path — the space-change safety window's twin for fullscreen.
    static let fullscreenStaleAfter: TimeInterval = 3.0

    /// WindowServer can briefly omit the fullscreen window while entering/exiting fullscreen.
    /// Hold the confirmed state across that gap to avoid stop/start/stop recorder churn.
    static let fullscreenExitSettleAfter: TimeInterval = 1.0

    /// A single placeholder must remain the only observed topology for this long before a Space
    /// transition is considered complete. This prevents an animation's first partial snapshot
    /// from being committed as the final Space.
    static let spaceTopologySettleAfter: TimeInterval = 0.75

    /// A normal (non-fullscreen, non-transitioning) Space may be repaired only after its
    /// placeholder has continuously been absent for this long.
    static let missingPlaceholderRepairAfter: TimeInterval = 2.0

    /// True while a macOS fullscreen (or fullscreen-sized) window owns the display.
    /// Recomputed fresh from the current window list on every pass — never left sticky.
    private(set) var isFullscreen = false

    /// Wall-clock time (seconds since 1970) fullscreen was last *confirmed* true.
    private(set) var lastFullscreenConfirmed: TimeInterval = 0

    /// Start of a continuous run of snapshots without a fullscreen window.
    private(set) var fullscreenAbsentSince: TimeInterval = 0

    /// True while the active Space is mid-transition.
    private(set) var spaceIsChanging = false

    /// Wall-clock timestamp (seconds since 1970) of the false→true `spaceIsChanging` edge.
    private(set) var spaceIsChangingSince: TimeInterval = 0

    /// How long two-or-more on-screen placeholder panels must persist before they are treated
    /// as stale duplicates to be collapsed. A genuine space swipe shows two placeholders only
    /// briefly (<1s); anything longer is a leftover placeholder from a previous space (typically
    /// after a fullscreen app tears down), which otherwise makes the window scan read a
    /// *permanent* "space changing" and freezes previews.
    static let stalePlaceholdersAfter: TimeInterval = 3.0

    /// Wall-clock time the current run of duplicate placeholders started (0 when not duplicated).
    private(set) var duplicatePlaceholdersSince: TimeInterval = 0

    /// Exact IDs in the current duplicate run. A changing set is animation, not stale state.
    private(set) var duplicatePlaceholderSignature: [Int] = []

    /// Normalized IDs from the most recent placeholder topology observation.
    private(set) var placeholderSignature: [Int] = []

    /// Time at which `placeholderSignature` last changed.
    private(set) var placeholderSignatureSince: TimeInterval = 0

    /// Start of the current continuous run with no placeholder on screen.
    private(set) var missingPlaceholderSince: TimeInterval = 0

    /// Last time a transition was explicitly settled. Repairs get a fresh grace period from it.
    private(set) var lastSpaceTransitionFinished: TimeInterval = 0

    // MARK: - Transitions

    /// Applies the per-pass fullscreen state derived from the current window list, stamping the
    /// confirmation time whenever fullscreen is genuinely present.
    ///
    /// Passing `false` starts/continues the bounded exit settle period. The gate opens after a
    /// continuous absence instead of trusting one possibly incomplete animation snapshot.
    mutating func updateFullscreen(_ present: Bool, now: TimeInterval) {
        if present {
            isFullscreen = true
            lastFullscreenConfirmed = now
            fullscreenAbsentSince = 0
            return
        }

        guard isFullscreen else {
            fullscreenAbsentSince = 0
            return
        }

        if fullscreenAbsentSince == 0 {
            fullscreenAbsentSince = now
        }

        if now - fullscreenAbsentSince >= Self.fullscreenExitSettleAfter {
            isFullscreen = false
            fullscreenAbsentSince = 0
        }
    }

    /// Clears an `isFullscreen` that hasn't been re-confirmed within the staleness window.
    /// Must be called on a path that runs *every* tick (even when `checkForScreenshot` returns
    /// early before `cycleWindows`), so a genuinely-gone fullscreen can never wedge the recorder.
    /// Returns `true` when it actually cleared a stale flag.
    @discardableResult
    mutating func recoverStaleFullscreen(now: TimeInterval) -> Bool {
        guard isFullscreen,
              now - lastFullscreenConfirmed > Self.fullscreenStaleAfter else {
            return false
        }
        isFullscreen = false
        fullscreenAbsentSince = 0
        return true
    }

    /// Marks receipt of the global active-Space notification. The notification can arrive while
    /// the fullscreen animation is incomplete, so callers must preserve their last known
    /// placeholder and let `observePlaceholderTopology` commit the new stable topology.
    mutating func beginSpaceTransition(now: TimeInterval) {
        setSpaceChanging(true, now: now)
        placeholderSignature = []
        placeholderSignatureSince = now
        missingPlaceholderSince = 0
        duplicatePlaceholdersSince = 0
        duplicatePlaceholderSignature = []
    }

    /// Fullscreen is itself a Space topology, but one without a MakeItHome placeholder. Accept it
    /// without starting missing-placeholder repair and without retaining a space-change lock.
    mutating func acceptFullscreenTopology(now: TimeInterval) {
        setSpaceChanging(false, now: now)
        placeholderSignature = []
        placeholderSignatureSince = now
        missingPlaceholderSince = 0
        duplicatePlaceholdersSince = 0
        duplicatePlaceholderSignature = []
        lastSpaceTransitionFinished = now
    }

    /// Records the complete set of on-screen placeholder IDs. Returns true only when exactly one
    /// ID has remained stable long enough to be safely committed as the current Space.
    @discardableResult
    mutating func observePlaceholderTopology(_ ids: [Int], now: TimeInterval) -> Bool {
        let normalized = Array(Set(ids.filter { $0 > 0 })).sorted()

        if normalized != placeholderSignature {
            placeholderSignature = normalized
            placeholderSignatureSince = now
            missingPlaceholderSince = normalized.isEmpty ? now : 0
            if normalized.count >= 2 {
                setSpaceChanging(true, now: now)
            }
            return false
        }

        if normalized.isEmpty {
            if missingPlaceholderSince == 0 {
                missingPlaceholderSince = now
            }
            return false
        }

        missingPlaceholderSince = 0

        guard normalized.count == 1 else {
            setSpaceChanging(true, now: now)
            return false
        }

        guard now - placeholderSignatureSince >= Self.spaceTopologySettleAfter else {
            return false
        }

        if spaceIsChanging {
            setSpaceChanging(false, now: now)
            lastSpaceTransitionFinished = now
        }
        return true
    }

    /// Prevents a newly created placeholder from being duplicated while the asynchronous window
    /// list catches up and begins reporting it.
    mutating func notePlaceholderCreated(id: Int, now: TimeInterval) {
        placeholderSignature = id > 0 ? [id] : []
        placeholderSignatureSince = now
        missingPlaceholderSince = 0
        setSpaceChanging(false, now: now)
        lastSpaceTransitionFinished = now
    }

    /// Sets the space-changing flag, stamping the start time only on the false→true edge so
    /// the safety window measures the *whole* transition, not each individual pass.
    mutating func setSpaceChanging(_ value: Bool, now: TimeInterval) {
        if value && !spaceIsChanging {
            spaceIsChangingSince = now
        }
        spaceIsChanging = value
    }

    // MARK: - Recovery

    /// Force-clears a `spaceIsChanging` that has outlived the safety window.
    /// Returns `true` when it actually cleared a stuck flag (useful for logging).
    @discardableResult
    mutating func recoverStuckSpaceChange(now: TimeInterval) -> Bool {
        guard spaceIsChanging,
              now - spaceIsChangingSince > Self.spaceIsChangingForceResetAfter else {
            return false
        }
        spaceIsChanging = false
        lastSpaceTransitionFinished = now
        // A timeout is not proof that an already-running missing interval is safe to repair.
        // Restart that grace window instead of immediately creating a placeholder.
        if placeholderSignature.isEmpty {
            missingPlaceholderSince = now
        }
        return true
    }

    /// Feeds the exact on-screen "makeithome" placeholder IDs and returns `true` exactly once
    /// when the same duplicate set persists past `stalePlaceholdersAfter`. A Space animation can
    /// show two holders for a while, but its ID set changes; that restarts the timer instead of
    /// closing a valid panel mid-animation.
    mutating func noteDuplicatePlaceholderIDs(_ ids: [Int], now: TimeInterval) -> Bool {
        let normalized = Array(Set(ids.filter { $0 > 0 })).sorted()
        guard normalized.count >= 2 else {
            duplicatePlaceholdersSince = 0
            duplicatePlaceholderSignature = []
            return false
        }

        if duplicatePlaceholdersSince == 0 || duplicatePlaceholderSignature != normalized {
            duplicatePlaceholderSignature = normalized
            duplicatePlaceholdersSince = now
            return false
        }
        if now - duplicatePlaceholdersSince > Self.stalePlaceholdersAfter {
            duplicatePlaceholdersSince = 0   // one-shot: re-arm for the next run
            duplicatePlaceholderSignature = normalized
            return true
        }
        return false
    }

    /// True only for a continuously missing placeholder on a topology that is known not to be
    /// fullscreen. A newly selected Desktop legitimately has no holder while `spaceIsChanging`
    /// is still true, so the caller must evaluate this repair before returning for the transition
    /// gate. The continuous-absence grace prevents a transient animation snapshot from creating
    /// a holder, while previews remain blocked until the holder is created or observed.
    func shouldRepairMissingPlaceholder(now: TimeInterval) -> Bool {
        guard !isFullscreen,
              placeholderSignature.isEmpty,
              missingPlaceholderSince > 0,
              now - missingPlaceholderSince >= Self.missingPlaceholderRepairAfter,
              lastSpaceTransitionFinished == 0 ||
                now - lastSpaceTransitionFinished >= Self.missingPlaceholderRepairAfter else {
            return false
        }
        return true
    }

    // MARK: - Queries

    /// Whether `checkForScreenshot` may proceed to crop previews and register windows.
    var allowsScreenshot: Bool {
        !spaceIsChanging && !isFullscreen
    }

    /// Whether the screen recorder should stay running for live previews, given the
    /// surrounding authorization / activation state. Mirrors `shouldKeepScreenRecorderActive`.
    func allowsRecorder(authorized: Bool, activated: Bool, ready: Bool, disabled: Bool) -> Bool {
        authorized && activated && ready && !disabled && !isFullscreen
    }
}
