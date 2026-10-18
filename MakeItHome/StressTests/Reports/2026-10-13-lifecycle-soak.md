# Capture lifecycle stress investigation — 13 October 2026

All four app phases completed their full 60-minute active budget without an app crash. The older multi-hour autorelease crash remains unresolved.

## Environment and diagnostics

- Development branch: `2.1.1`; normal app version 2.1.1/build 164, isolated Test app version 2.1.0/build 161.
- macOS 27.0.1 (26A434), Apple Silicon, Xcode 27.0 (27A266a).
- Debug builds with retained dSYMs, LLDB crash hooks, one-second thread samples every minute, and external RSS/CPU measurements every 30 seconds.
- Screen Recording and Accessibility use the Test app's separate identity. Captured frames remain in memory; clipboard contents and screen images are not diagnostic artifacts.
- Protected-container access was denied to the controller. Validation used the explicitly marked stdout result handshake and packaged image fixtures with the app sandbox enabled.
- Local baseline bundle: `/private/tmp/MakeItHomeStress/20261013T081753Z-45615`.
- Local corrected-run bundle: `/private/tmp/MakeItHomeStress/20261013T083424Z-49421`.

## Baseline observation

The virtual phase completed with 657 frames and 17 selections. The extension flood completed with 27,758 requests and zero errors.

During the runtime phase, recording-start log entries reached 110 and remained unchanged for more than seven minutes while SceneKit sleep/restart and synthetic clipboard traffic continued. The application stayed alive and responsive. This was registered as a recorder-progress stall, not as a reproduced crash. A five-second stack sample, periodic samples, logs, and memory measurements were retained. Swift concurrency inspection could not acquire the process task port; its denial is recorded in the bundle. The stalled baseline was explicitly terminated to validate fixes and did not complete its planned runtime or real-usage phases. Forced termination cannot restore the harness's in-memory pasteboard snapshot or perform its normal fixture cleanup.

Source inspection found related lifecycle defects: consumer cancellation cleared running flags without stopping the owned stream; callbacks yielded through the engine's mutable current continuation; pending stops were published only after awaiting update work; and frame buffering used the default unbounded policy. These are plausible contributors to hangs/resource retention; no crash stack proves they caused the user's reported long-term crashes.

## Historical crash signature

A retired local report, `MakeItHome-2026-10-06-043551.ips`, belongs to normal MakeItHome 2.1.0/build 163. It launched at 22:48:58 on 5 October and crashed at 04:35:43 on 6 October (Europe/Rome), about 5 hours 47 minutes later. Its exception is `EXC_BAD_ACCESS` / `SIGSEGV`; the faulting main-thread stack begins `objc_release` → `AutoreleasePoolPage::releaseUntil` → `objc_autoreleasePoolPop`, under a run-loop timer. It does not identify a ScreenCaptureKit call or the released object's class. The original report is retained in `/private/tmp/MakeItHomeStress/historical-crashes/`, and this signature remains unresolved unless reproduced with object-lifetime diagnostics. The one-hour validation must not be presented as proof that this multi-hour crash is fixed.

## Changes and focused evidence

- Stop the owned stream when current frame iteration ends or throws, including consumer cancellation.
- Publish pending stops before suspension and avoid clearing a newer run's state when an older stop resumes.
- Give each stream its own continuation and a queue retaining only the newest frame. The engine stops a previously owned stream before replacing it.
- Add runtime cancellation checks, real frame counts, five-second metrics, and a 15-second recorder-progress watchdog. Completion requires cancellation coverage and actual frames.
- Release Mach send rights returned by `task_threads`, as well as its array, in the stress sampler.
- Support sandbox-compatible stdout result handshakes, packaged clipboard images, and isolated build output. Correct the wrapper's virtual-stage default to five seconds so its documented default budget is 20 active minutes.

`Tests/run.sh` passed: 151 preview-flow checks, nine clipboard bound/order checks, preview-title regressions, 100,000 queued capture frames with cancellation/channel-isolation checks, 1,000 suspending gate operations, and 10,000 sampler calls without leaked thread rights, and diagnostic fixtures covering normal exits, native/debugger shutdown crashes, primary report identity, and unrelated CPU-resource diagnostics.

Replaying the unbounded queue policy against the new regression failed retention, latest-frame, drain, and release checks. Replaying the original sampler against its new regression increased the current thread's send-right count from 3 to 10,003 after 10,000 samples; the corrected sampler kept the count unchanged. These replays exercise the original resource behavior independently of ScreenCaptureKit permissions.

Both the normal app (including its Safari extension) and the Test target build successfully. Existing project warnings include the copied Info.plist and parent/extension build-number mismatch.

## Corrected one-hour validation

The requested phase budget is 30 seconds virtual, 90 seconds extension flood, 1,800 seconds runtime lifecycle, and 1,680 seconds real usage, totaling 3,600 active seconds. Build, readiness, and diagnostic finalization add wall time. Real-usage seed: `20261013`.

| Phase | Active budget | Result |
| --- | ---: | --- |
| Virtual overscreen | 30 s | Passed: 747 frames, 19 selections; peak 372.2 MB / 11 threads |
| App Extension flood | 90 s | Passed: 25,337 requests, zero errors; peak 300.4 MB / 14 threads |
| Runtime lifecycle | 1,800 s | Passed: 3,537 recorder transitions, 118 consumer cancellations, 19,031 captured frames, 1,755 sleep/restart cycles, 3,425 clipboard writes; one real SceneKit app/window; peak 601.8 MB / 26 threads |
| Real usage | 1,680 s | Passed: 3,290 actions, 250 top/414 bottom activations, 510 selection clicks including 369 preview clicks, 1,250 clipboard writes / 1,833 files (1,697 images); peak 389.8 MB / 32 threads |

The corrected run finalized its summary at 11:35:27 Europe/Rome. All four LLDB logs record a normal exit with status zero. The collector also retained a WindowServer CPU-resource diagnostic (53% average CPU over 171 seconds, no action taken) from the aggressive runtime phase; this is related load evidence, not a Test app crash. The original bundle's raw crash-report count includes this non-crash diagnostic; those original files remain preserved. The report classifier now separates such diagnostics from primary Test-app `.ips`/`.crash` reports and treats debugger/native shutdown crashes as failures even if a completion record was already emitted.

The wrapper script was edited while its long-running shell was still reading it. After phase completion and summary finalization, that shell reported a parse error from the changed file. This controller error does not invalidate the app exit records or phase durations. The final script passes syntax and fixture checks; the final separate four-phase smoke run exited successfully without editing the running script. Its bundle is `/private/tmp/MakeItHomeStress/20261013T094703Z-65445`: 60 seconds of runtime produced 119 transitions, four original-stream cancellation checks, and 681 frames; 30 seconds of real usage produced 63 actions and seven preview clicks. An earlier short replay exposed an overly broad cancellation assertion: production can legitimately replace a stream while canceled tasks drain. Test-only task-local consumer IDs and stream generations now check release of the original harness-owned stream and permit legitimate replacements. The production capture fixes are unchanged by this assertion refinement.

The runtime retained actual frame delivery and recorder progress throughout the phase. Its late memory peak is recorded rather than treated as proof of leak-free operation. The real-usage phase loaded 77 bundled image fixtures and one other file.

## Scope and remaining checks

This run exercises the current desktop and its existing visible windows. It does not establish coverage for hardware display attach/detach, native fullscreen/Space transitions, system sleep/wake, multi-day operation, signed App Store distribution, or visual WebKit correctness. Repeated Quick Look thumbnail-generation failures in the runtime video-fixture path are retained in logs and require a separate rendering investigation. No user screen frames or clipboard payloads should be copied into this report.
