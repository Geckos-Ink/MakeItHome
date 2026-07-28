# MakeItHome stress harnesses

These debug-only launch modes are deliberately separate from the normal app startup and are compiled only by the `MakeItHome Test` target. The virtual and App Extension modes need no macOS privacy access; the runtime and real-usage modes use the Test app's separate Screen Recording and/or Accessibility grants. None of the modes mutates the saved `MaxApps` preference.

## Virtual overscreen

Run the `MakeItHome Test` scheme in the Debug configuration with these scheme arguments:

```text
--stress virtual-apps --stress-stage-seconds 5
```

The harness sweeps `Static.MaxApps` from 5 through 10. At each stage it creates `ceil(MaxApps × 1.5)` virtual apps with fixed generated 1280×720 images. The focused image is pushed through a layer at the normal 25 FPS capture rate, SceneKit preview materials are updated, and an overscreen open → random selection → close cycle runs once per second.

Useful overrides:

```text
--stress-fps 25 --stress-stage-seconds 20 --stress-auto-exit
```

## AppExtension server flood

Run the `MakeItHome Test` scheme with:

```text
--stress app-extension --stress-duration 30 --stress-workers 12 --stress-payload-kb 512
```

The harness starts the real `SimpleHTTPServer`, installs an authenticated fake `AppExtension`, and sends bounded concurrent requests to `setHtmlContent`, `sendJSMessage`, and `checkStatus`. It records request errors, throughput, resident memory, and live Mach thread count.

Useful overrides:

```text
--stress-port 19494 --stress-duration 120 --stress-workers 24 --stress-payload-kb 1024 --stress-auto-exit
```

Use a free port. Keep the worker count bounded: the goal is to reveal unintended thread growth in MakeItHome, not to manufacture an unbounded number of client tasks in the test itself.

## Runtime lifecycle

Run the Debug-only `MakeItHome Test.app` target. Its `ink.geckos.MakeItHome.Test` bundle identity is distinct from the normal app, so it receives a separate macOS privacy decision. On first launch, the harness opens the standard Screen Recording prompt and waits up to one minute for the user to allow it:

```text
--stress runtime-lifecycle --stress-duration 1200 --stress-interval 2 --stress-auto-exit
```

This single, bounded harness continuously cycles the real `ScreenRecorder` through low-priority, high-priority, and stopped states; alternates the live `CaptureView` between SceneKit sleep and active rendering; and writes synthetic text, image, and uniquely linked bundled-video items through the native clipboard into the live Widgets Zone. The run restores the pre-test system clipboard only if it remains untouched after the final synthetic write, and removes its temporary video links on exit.

`--stress-interval` controls each recorder phase and each clipboard write. Keep it at one second or above for sustained runs so Quick Look video previews and WebKit delivery remain bounded.

## Complete Debug stress orchestration

Run the checked-in orchestrator from the repository root:

```sh
./MakeItHome/StressTests/run-real-usage.sh
```

Despite its historical filename, the script builds `MakeItHome Test.app` once in Debug with `-Onone` and a retained dSYM, then runs all four harnesses sequentially. The default active stress budget is 20 minutes:

- virtual overscreen: six 5-second stages (30 seconds total);
- App Extension flood: 90 seconds;
- runtime lifecycle: 300 seconds;
- real-usage UI chaos: 780 seconds.

Build, permission waits, watchdog allowances, and diagnostic finalization are additional wall-clock time. Each app launch uses a private atomic result-file handshake; a crash, hang, failed assertion, missing UI startup, or incomplete action category makes that phase fail. By default later phases still run so a single failure does not discard the rest of the coverage; set `MIH_STRESS_STOP_ON_FAILURE=1` for fail-fast behavior.

Every invocation prints and retains a private diagnostic bundle under `~/Library/Logs/MakeItHomeStress/<UTC timestamp>-<pid>/` by default. It contains:

- the complete Debug build log, resolved build settings, executable/dSYM UUIDs, and copied dSYM;
- per-phase invocation, PID, final result and status;
- complete stdout, stderr, and process-scoped unified logging at debug level with source annotations;
- an LLDB log whose crash hook records process state, every thread backtrace, and registers before terminating the crashed Test process;
- periodic symbolized `sample` snapshots of every live thread and a five-second watchdog sample if a phase hangs;
- any new macOS Diagnostic Reports belonging to `ink.geckos.MakeItHome.Test`.

Artifacts are permission-restricted and never removed by the script. The temporary sandbox corpus and result handshakes are removed on success, failure, signal, or watchdog termination. A crash caught by the attached debugger normally does not produce a separate `.ips`; the LLDB all-thread stack is authoritative in that case. Set `MIH_STRESS_ATTACH_LLDB=0` to test native crash handling instead; periodic samples remain enabled and any resulting `.ips` is copied.

Useful overrides:

```sh
MIH_STRESS_MODES='runtime-lifecycle real-usage' \
MIH_STRESS_RUNTIME_SECONDS=600 \
MIH_STRESS_REAL_USAGE_SECONDS=1200 \
MIH_STRESS_SAMPLE_INTERVAL_SECONDS=15 \
MIH_STRESS_SEED=12345 \
./MakeItHome/StressTests/run-real-usage.sh
```

Available settings are `MIH_STRESS_MODES`, `MIH_STRESS_VIRTUAL_STAGE_SECONDS`, `MIH_STRESS_APP_EXTENSION_SECONDS`, `MIH_STRESS_RUNTIME_SECONDS`, `MIH_STRESS_REAL_USAGE_SECONDS`, `MIH_STRESS_RUNTIME_INTERVAL_SECONDS`, `MIH_STRESS_INTERVAL_SECONDS`, `MIH_STRESS_SAMPLE_INTERVAL_SECONDS`, `MIH_STRESS_ATTACH_LLDB`, `MIH_STRESS_STOP_ON_FAILURE`, `MIH_STRESS_SEED`, `MIH_STRESS_COPY_SOURCE`, and `MIH_STRESS_ARTIFACTS_DIRECTORY`. The legacy `MIH_STRESS_DURATION_SECONDS` remains a fallback override for the real-usage duration.

### Real-usage phase

The real-usage phase starts the normal `ContentView`, `DisplaysManager`, screen recorder, SceneKit preview, Widgets Zone, and clipboard polling paths inside `MakeItHome Test.app`. In a seeded random order it:

- invokes the same `Display.openSideFromShortcut` endpoint as ⌃⌥⌘↑ and ⌃⌥⌘↓ at a jittered rapid interval;
- opens the bottom overscreen and clicks random live SceneKit window previews using mouse events;
- falls back to a safe title-bar click on a random visible window when no preview point is ready;
- stages the real files from `/Users/riccardo/Pictures/instagramToReload` into the Test app's sandbox, then copies image-heavy batches as uniquely linked file URLs through the system pasteboard, Quick Look, native history, and Widgets Zone.

The first run requires both Screen Recording and Accessibility permission for `MakeItHome Test.app`. This automation moves the real pointer, changes the system clipboard, switches applications/windows, and rapidly presents both overscreen sides, so run it only on a desktop session dedicated to testing. On a normal exit it restores the original pointer and restores the original clipboard only if nothing else changed it after the last synthetic copy; all generated files are removed. `MIH_STRESS_INTERVAL_SECONDS` defaults to 0.08 seconds with randomized jitter. Set `MIH_STRESS_COPY_SOURCE` to replace the default image corpus; the wrapper stages it because the sandbox cannot read an arbitrary Pictures path directly.

The seed is stored in the startup/final result so a failing order can be replayed. The equivalent direct Xcode arguments are:

```text
--stress real-usage --stress-duration 780 --stress-interval 0.08 --stress-copy-source /sandbox-readable/corpus --stress-seed 12345 --stress-auto-exit
```

The orchestrator also supplies its private `--stress-result-file` handshake; direct Xcode launches can omit it.

For a dedicated Instruments Allocations or System Trace run, set `MIH_STRESS_ATTACH_LLDB=0` so the debugger does not change crash handling. A healthy bounded run completes without request errors, continuously changes focus or lifecycle state, and stops growing its thread count. The console and retained `summary.txt` provide final phase results alongside the trace.
