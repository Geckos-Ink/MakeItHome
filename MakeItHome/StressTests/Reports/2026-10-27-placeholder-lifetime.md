# Placeholder lifetime crash — 27 October 2026

The current Xcode session stopped in a main-thread autorelease-pool drain immediately after duplicate placeholder cleanup. An isolated native regression reproduces a use-after-free in that cleanup. Setting `SwifterPlaceholder.isReleasedWhenClosed = false` fixes the reproduced ownership error.

## Current debugger evidence

Inspected the existing Xcode LLDB session for MakeItHome PID 3716 without resuming or terminating it. The main thread stopped with `EXC_BAD_ACCESS (code=1, address=0x293760b16f08)`:

```text
objc_release + 16
AutoreleasePoolPage::releaseUntil(objc_object**) + 204
objc_autoreleasePoolPop + 244
_CFAutoreleasePoolPop + 32
__CFRUNLOOP_IS_CALLING_OUT_TO_A_TIMER_CALLBACK_FUNCTION__ + 32
__CFRunLoopDoTimer + 1084
__CFRunLoopDoTimers + 280
__CFRunLoopRun + 1852
```

The last application console entry was `resolved stale duplicate placeholders, kept 3232`. The timer recovered from the saved run-loop registers has interval `0.011111111111111112` seconds. Its context points to `_NSTimerBlockTarget`; resolving its block's Swift function pointer identifies `closure #1` in `Display.init(manager:screen:)`, the production window/Space scan timer. This connects the autorelease failure to the timer that calls `resolveStalePlaceholders`.

The released object address was `0x75b6578280`; its first word was no longer a valid Objective-C class pointer and `malloc_size` returned zero. Allocation history was unavailable, so the stopped process alone cannot establish the object's former class. All-thread backtraces showed no other application source frame identifying an earlier write or release. The Network framework's repeated connection-after-cancel warnings are separate observations, without evidence tying them to this memory error.

Raw stack/register/callback extracts were saved locally as `/private/tmp/mih-current-stacks.txt` and `/private/tmp/mih-crash-*.txt`. No screen frames, clipboard contents, credentials or full heap/core dump were collected.

## Ownership error and fix

`SwifterPlaceholder` subclasses `NSWindow`, whose release-on-close behavior was left enabled. `Display.placeholders`, `spaces`, `curPlaceholder` and temporary scan collections also retain these windows through Swift ARC. Duplicate repair closes a window and removes its collection entries. AppKit's additional close-time release consumes ownership that Swift still expects to hold, leaving a dangling reference or an extra release when the timer's pool drains.

The initializer now disables release-on-close, consistent with the existing `SwifterWindow` wrapper. Window visibility, Space detection, duplicate-selection rules and collection cleanup are unchanged. Swift releases retired holders when the last owner goes away; no extra retained-window cache or delayed cleanup was added.

## Regression and validation

`python3 Tests/PlaceholderLifetimeTests.py` compiles the real `SwifterPlaceholder` and extracts the real `Display.resolveStalePlaceholders` method into a small owner fixture. It creates real 1×1 AppKit windows without activation, capture or Accessibility access, repairs 50 pairs, retains owners across pool drains, checks keeper/duplicate identity and collection cleanup, checks idempotent close and refusal to reopen retired holders, then checks weak references clear after owners are removed. It runs with Objective-C Zombies enabled and rejects deallocated-instance diagnostics. A working WindowServer is required.

- Original production initializer: fails with `SwifterPlaceholder retain: message sent to deallocated instance`.
- Corrected initializer: passes 100 native closes, autorelease-pool drains and weak-reference release checks.
- `Tests/run.sh`: preview-flow (260 checks), clipboard bounds, title wrapping, pointer policy, display switching and recorder frame delivery pass before the existing `LiveWindowPreviewTests.py` assertion, “Our excluded overscreen cannot freeze its live preview,” stops the suite. This failure was already documented before this change; later suites were not reached.
- Normal Debug app and embedded Safari extension: code-signing-disabled build succeeds, with output isolated under `/private/tmp/mih-crash-build`. Existing warnings include the copied Info.plist and parent/extension build-number mismatch.

The original Xcode process remains paused for further inspection. It contains the old code and needs a rebuild/relaunch to exercise the correction. Physical Space/fullscreen transitions, multiple monitors and an extended production soak remain manual checks. This fix reproduces a concrete cause matching the current failure; it does not establish that every historical `objc_release` crash or the separate Safe Browsing wake trap has the same cause.
