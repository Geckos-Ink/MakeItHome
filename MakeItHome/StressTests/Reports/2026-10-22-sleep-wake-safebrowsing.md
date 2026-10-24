# Overnight wake crash investigation — 22 October 2026

The newest local crash identifies an unbalanced dispatch-group completion on
Apple's Safari Safe Browsing queue during an automatic overnight wake. This is
the strongest explanation for this incident. A framework resume race is a
working hypothesis, not a confirmed underlying defect or a reproduced fix.

## Direct evidence

Source: local Diagnostic Report
`~/Library/Logs/DiagnosticReports/MakeItHome-2026-10-22-062559.ips`.
All times below are Europe/Rome (UTC+02:00).

| Field | Value |
| --- | --- |
| App | Normal Release MakeItHome 2.1.1/build 166 |
| OS | macOS 27.0.1 (26A434), Apple Silicon |
| Launch | 21 October, 19:40:20 |
| Report capture time | 22 October, 06:25:56.332 |
| Report timestamp | 22 October, 06:25:59 |
| Process wall-clock lifetime | About 10 hours 45 minutes; this is not time spent asleep |
| Exception | `EXC_BREAKPOINT` / `SIGTRAP` |
| Faulting thread | 59, `com.apple.Safari.SafeBrowsing.LookupContext` |
| Application-specific diagnostic | `BUG IN CLIENT OF LIBDISPATCH: Unbalanced call to dispatch_group_leave()` |
| Wake metadata | `wakeTime: 4` |

The faulting stack is:

```text
dispatch_group_leave.cold.1
dispatch_group_leave
_dispatch_block_async_invoke2
_dispatch_client_callout
_dispatch_lane_serial_drain
_dispatch_lane_invoke
```

There is no MakeItHome frame on that stack. Main is waiting in a Core Animation
transaction commit, not executing the failing group completion. Another thread
is processing WebKit's `webProcessPoolHighDynamicRangeDidChangeCallback` on
`com.apple.coremedia.fpsupport.powerStateChangedNotificationQueue`.

Read-only `pmset -g log` inspection independently places the crash in a wake:

- 06:25:18: maintenance sleep.
- 06:25:55: dark wake with a USB-C/power-related reason.
- 06:25:56: transition to full wake due to a notification.
- 06:26:06: return to sleep after the notification wake.

The preceding minutes contain repeated maintenance/notification wakes with
USB-C plug or AC-detach reasons. This was an overnight sequence of sleep/wake
cycles, not evidence of one uninterrupted long sleep. Repeated transitions are
a plausible amplifier for a resume race; these logs do not diagnose a faulty
cable, dock, battery or power supply.

## Source interpretation

[Apple's libdispatch source](https://github.com/apple/swift-corelibs-libdispatch/blob/main/src/semaphore.c)
deliberately traps when a group is left with no outstanding entry. This
establishes the immediate failure mechanism, but not who first corrupted or
mismanaged the group. The native MakeItHome source contains no explicit
`DispatchGroup` or `dispatch_group_*` calls. Its scheduled `DispatchWorkItem`s
are created per operation; the review found no repeated submission of one work
item that explains this framework queue's failure.

MakeItHome embeds WebKit independently of the bundled Safari extension:

- [`PersistentNativeWebViewHost`](../../Views/Overscreen/WidgetZoneView.swift)
  creates persistent `WKWebView`s for custom widgets/search, loads configured
  or restored URLs, retains them while hidden, and reloads after a web-content
  process termination. There is no sleep-aware reload deferral.
- The shared Widgets Zone, App Extension surface and secondary navigation view
  also embed WebKit. The crash report does not identify the responsible view,
  navigation, website, or whether a recovery reload occurred.
- The web-view configuration leaves the fraud-warning preference at its
  default. [Apple documents that default as enabled](https://developer.apple.com/documentation/webkit/wkpreferences/isfraudulentwebsitewarningenabled).
  This is consistent with Safe Browsing executing inside the app. The queue's
  Safari name alone does not implicate the bundled Safari Web Extension.

The evidence therefore favors a Safe Browsing/framework bookkeeping failure
around wake. App-triggered navigation/recovery timing and earlier memory
corruption remain possible; the stack alone cannot distinguish them. Neither
SceneKit wake rebuilding nor ScreenCaptureKit is established as the cause of
this particular trap.

This signature differs from both the October 20–21 descriptor-exhaustion
reports and the October 6 main-thread `objc_release`/autorelease crash.
The current checkout is 2.1.2/build 167, so this build-166 report does not prove
that the current binary reproduces the same failure.

## Next verification and limits

Reproduce actual overnight sleep/wake with the affected Release build and a
small standalone `WKWebView` host on the same OS. Compare runs with custom
remote widgets/search hosts present versus absent, without changing saved
settings, cookies or credentials. Record only lifecycle times, anonymous host
identifiers, navigation outcomes and content-process terminations; do not log
URLs, page contents or captured frames. A repeat in the minimal host would
strengthen an Apple framework report. A repeat only in the app would justify
checking its navigation/reload lifetimes with memory/thread diagnostics.

Do not label disabling fraudulent-website warnings or rebuilding every web
view on wake as a verified fix. The former reduces protection; the latter
breaks the retained DOM/session contract and may add navigation races.

The initial review inspected the crash report, power history and current source. It did
not force the user's computer to sleep, reproduce the trap, change application
behavior, or run a build/test suite. Existing lifecycle stress results
explicitly exclude actual system sleep/wake and cannot validate this incident.

## Implemented mitigation and validation

The follow-up patch adds [`SleepAwareWebView`](../../Helpers/SleepAwareWebView.swift)
and a shared main-actor `WebViewSleepCoordinator`. The top Widgets Zone,
App Extension host, secondary navigation view and persistent native child web
views retain their existing objects, configurations and website data stores.

App-owned URL/file/HTML loads and reloads defer during system/display sleep.
Initial display state also protects a process created during dark wake. A
two-second settling timer releases pending operations only after system and
display wake; a subsequent sleep invalidates that timer. Duplicate wake events
do not postpone the deadline. A weak registry does not retain retired views.
Each live view keeps only its latest pending navigation, repeated recovery
reloads coalesce, and a stale reload cannot overwrite a newer requested URL.
`stopLoading` also cancels pending work. A healthy document is never reloaded
merely because the Mac slept or woke. Safe Browsing remains enabled.

This boundary deliberately covers app-requested navigation and recovery. It
does not freeze website JavaScript, page-initiated navigation, ongoing loads,
or WebKit's internal Safe Browsing activity. It therefore reduces one plausible
trigger and is not proof that Apple's dispatch-group trap is fixed.

Validation on 22 October:

- Normal Debug app and embedded Safari extension: code-signing-disabled Xcode
  build passed, with cached dependencies and temporary build output. The new
  helper also type-checks for the macOS 12.3 deployment target.
- [`SleepAwareWebViewTests.py`](../../../Tests/SleepAwareWebViewTests.py): passed
  with real nonpersistent WebKit and synthetic notifications. Checks cover
  retained JavaScript state, unchanged fraud protection, dark/cold wake,
  100-to-one recovery coalescing, resleep cancellation, latest-document priority,
  pending cancellation, URL/file/HTML loads, duplicate wakes and weak lifetime.
- `Tests/run.sh`: preview flow, clipboard bounds, title wrapping, permission
  pacing/onboarding and capture lifecycle checks passed before the unchanged
  `CapturePriorityTests.py` failed. Its expected extra queue depth is one;
  current recorder code adds two. An isolated repeat failed the same assertion.
- The remaining runner suites passed when invoked separately: process sampling,
  status mailbox, extension focus/delivery/content lifecycle/approval, and
  diagnostic classification.

Actual overnight sleep/wake, repeated hardware USB-C wake cycles, installed
remote widgets/search sessions and multi-display sleep/wake still need manual
validation. No sleep, screen capture, Safari access or saved session changes
were performed by the new regression.
