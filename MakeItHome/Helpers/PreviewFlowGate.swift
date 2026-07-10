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
//   1. `isFullscreen` is *recomputed fresh from the window list every pass* — never sticky.
//      Leaving fullscreen re-opens the gate on the very next pass.
//   2. `spaceIsChanging` may block updates, but only up to a wall-clock safety window. A real
//      space switch settles in ~1s; anything longer is treated as stuck and force-cleared.
//

import Foundation

struct PreviewFlowGate {

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

    /// True while a macOS fullscreen (or fullscreen-sized) window owns the display.
    /// Recomputed fresh from the current window list on every pass — never left sticky.
    private(set) var isFullscreen = false

    /// Wall-clock time (seconds since 1970) fullscreen was last *confirmed* true.
    private(set) var lastFullscreenConfirmed: TimeInterval = 0

    /// True while the active Space is mid-transition.
    private(set) var spaceIsChanging = false

    /// Wall-clock timestamp (seconds since 1970) of the false→true `spaceIsChanging` edge.
    private(set) var spaceIsChangingSince: TimeInterval = 0

    // MARK: - Transitions

    /// Applies the per-pass fullscreen state derived from the current window list, stamping the
    /// confirmation time whenever fullscreen is genuinely present.
    ///
    /// Passing `false` here is what breaks the historical deadlock: when no fullscreen-sized
    /// window is on screen anymore, the gate opens immediately instead of waiting for a
    /// specific "winner" window to be re-detected.
    mutating func updateFullscreen(_ present: Bool, now: TimeInterval) {
        isFullscreen = present
        if present {
            lastFullscreenConfirmed = now
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
        return true
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
