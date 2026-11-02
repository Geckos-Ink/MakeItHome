# Unresolved autorelease crash and confirmed icon race — 29 October 2026

The 17:57 crash remains unresolved. Its exact Release executable predates the 27 October placeholder fix, but the report does not identify the released object. The initial conclusion that existing placeholder coverage was sufficient was premature. Further investigation reproduced a separate worker/main ownership race in the production app initializer and corrected it; that does not prove the identity of this crash's object.

## Crash and binary provenance

`~/Library/Logs/DiagnosticReports/MakeItHome-2026-10-29-175749.ips` records a crash at **17:57:41 +0100 on 29 October**, after a launch at 16:25:47 +0100 on 28 October. It reports app version **2.1.2/build 168**, macOS 27.2 (26B123), and a main-thread `EXC_BAD_ACCESS` while draining a timer callback's autorelease pool:

```text
objc_release + 16
AutoreleasePoolPage::releaseUntil(objc_object**) + 204
objc_autoreleasePoolPop + 244
_CFAutoreleasePoolPop + 32
__CFRUNLOOP_IS_CALLING_OUT_TO_A_TIMER_CALLBACK_FUNCTION__ + 32
__CFRunLoopDoTimer + 1084
```

The report identifies `Build/Products/Release/MakeItHome.app`, not the current Debug product. Its arm64 UUID, `530D3E40-EE5E-3DD4-AB88-5E4E99BA4DC8`, exactly matches the Release executable still present in Xcode's DerivedData. That executable has a 26 October modification date. Disassembling its complete `SwifterPlaceholder.init()` at file address `0x100025bd0` shows initialization proceeding directly from `NSWindow.init` to `setLevel:`; it never calls `setReleasedWhenClosed:`.

Commit `a6ebae8320621cd9f76fd94612491e133f29f5d8` on 27 October added `isReleasedWhenClosed = false` to that initializer. The matched crashing binary therefore still has the old release-on-close ownership policy.

When inspected, Xcode was running MakeItHome PID 82815. A brief debugger pause identified its loaded **Debug** dylib as `7C0A4CA1-C596-3D43-95F6-6306D8660D1B`. Offline disassembly of that same dylib shows `SwifterPlaceholder.init()` calling `setReleasedWhenClosed:` with false at file address `0x48158`. The existing debug session was resumed after inspection.

The saved crash does not identify the former class of the released object or retain the timer callback's application frame. A placeholder is one hypothesis; binary provenance and its isolated reproduction cannot close this investigation. Repeated Network framework connection-after-cancel warnings in the live Debug console do not establish a cause for the saved memory error.

## Native regression

The existing [`PlaceholderLifetimeTests.py`](../../../Tests/PlaceholderLifetimeTests.py) was run against the current source with Objective-C Zombies enabled and real WindowServer access. It passed **100 native window closes, autorelease-pool drains, and weak-reference deallocations**.

An additional comparison copied the same production initializer, duplicate-repair method, and test harness into temporary fixtures and compiled them with `swiftc -O -g`:

- Current initializer: passes the same 100 close/deallocation checks under optimization.
- Initializer from the parent of the fix commit: fails with `SwifterPlaceholder retain: message sent to deallocated instance`.

The fixtures create 1×1 windows without app activation, screen capture, Accessibility requests, or Space switching. Initial sandboxed attempts could not access the compiler cache/WindowServer; the successful runs used a temporary compiler cache and normal GUI-service access. Temporary optimized fixtures and logs are under `/private/tmp/mih-crash-20261029/ownership-checks/`.

## Corrective action and remaining validation

Keep the existing ownership correction in [`SwifterPlaceholder.swift`](../../SwifterUI/SwifterPlaceholder.swift). A build/run of Debug does not refresh a previously built Release app; rebuild the intended configuration from the corrected tree before using it. Preserve the old matched executable if further crash analysis is needed.

A fresh signing-disabled universal Release app and embedded Safari extension built successfully, with outputs isolated under `/private/tmp/mih-crash-20261029/`; the original Xcode products are preserved. The new app is 2.1.3/build 168 (arm64 UUID `A177A6E7-D4E7-3AEE-8E14-93D6F3BC3D79`), and disassembly confirms its initializer calls `setReleasedWhenClosed:` with false. The embedded extension is 2.1.3/build 166. Existing warnings include the copied Info.plist and parent/extension build-number mismatch. This is build validation, not a signed release or installation.

Build command, using a temporary copy of the existing Swift Collections checkout to avoid fetching or changing the user's package cache:

```sh
xcodebuild -project MakeItHome.xcodeproj -scheme MakeItHome \
  -configuration Release -destination 'platform=macOS' \
  -derivedDataPath /private/tmp/mih-crash-20261029 \
  -clonedSourcePackagesDirPath /private/tmp/mih-crash-20261029/SourcePackages \
  -disableAutomaticPackageResolution -skipPackageUpdates \
  CODE_SIGNING_ALLOWED=NO build
```

The initial build log is `/private/tmp/mih-crash-20261029/release-build.log`, and the checked initializer disassembly is `release-placeholder-disassembly.txt` in that same directory. This initial build predates the additional icon-race correction below.

Real Space/fullscreen transitions, multiple monitors, and a production soak with allocation diagnostics remain necessary. See the [27 October investigation](2026-10-27-placeholder-lifetime.md) for the original placeholder reproduction.

## Deeper audit: icon color data race

`AppWindows.init` previously read `runningApp.icon` and assigned `self.iconAvgColor` on `Static.highPriorityQueue`. SceneKit's `AppNode` reads the same mutable strong `NSColor` reference on main when constructing its particle system. An unsynchronized strong-reference assignment can release the old object while another thread reads/retains it. A crash later in an autorelease drain cannot reveal that earlier racing access.

The initializer now obtains the icon on main, performs average-color processing on the existing worker, then publishes the result on main. Weak captures let retired app owners disappear while work is pending. No extra cache or capture path was added.

[`AppIconOwnershipTests.py`](../../../Tests/AppIconOwnershipTests.py) extracts and compiles this production initializer. The old source fails with **Off-main icon color publication**. The corrected source passes 500 worker-to-main deliveries, checks icon access on main and processing off main, and checks pending work does not retain a retired owner. The suite is included in `Tests/run.sh`. The Release app/extension build succeeds after this correction; its log is `/private/tmp/mih-crash-20261029/icon-fix-build.log`.

Other checks narrowed the candidates without proving a cause:

- Actual native windows in a fresh Xcode Debug run (PID 86155) report `isReleasedWhenClosed = false` for the SwiftUI overscreen window, menu panel and placeholder. Main-window close therefore does not reproduce a second release-on-close defect in this build. The debug session was resumed.
- The Accessibility poll incorrectly uses `takeRetainedValue` on the unowned `kAXTrustedCheckOptionPrompt` constant. An isolated test using the actual system key and inert trust checks survives 100,000 production checks; this OS supplies `__NSCFConstantString`. This ownership mistake is not established as the crash cause and was left outside the icon-race patch.

The icon race is a confirmed defect, but production crash attribution still requires a fresh reproduction retaining the failing object's class and allocation/deallocation stacks (for example a bounded Zombies/Allocations debug run). Successful isolated tests and builds are not a production stability result.

Validation after the race correction:

- Focused optimized initializer regression passes 500 deliveries and retired-owner checks; baseline emits `Off-main icon color publication` and fails.
- Universal Release app and embedded extension build successfully. Xcode also rebuilt and launched the corrected Debug app as PID 86795.
- `Tests/run.sh` passes the new test and preceding flow/pointer/display checks. The sandboxed run also passes recorder delivery, live previews and app fallback, then cannot create a graphics fixture in the wallpaper test. The normal GUI-service run stops at the previously documented intermittent live-preview assertion, `Our excluded overscreen cannot freeze its live preview`; later suites are not reached. This run does not establish a clean full suite.
- `git diff --check` and changed local Markdown links pass.
