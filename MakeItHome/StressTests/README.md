# MakeItHome stress harnesses

These debug-only launch modes are deliberately separate from the normal app startup. They do not request Screen Recording or Accessibility access and do not mutate the saved `MaxApps` preference.

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

For all modes, attach Instruments Allocations and System Trace. A healthy bounded run completes without request errors, continuously changes focus or lifecycle state, and stops growing its thread count. The console prints a one-line final summary suitable for saving alongside an Instruments trace.
