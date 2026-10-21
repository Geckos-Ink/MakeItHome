# Extension approval descriptor exhaustion — 21 October 2026

The reported SceneKit abort is caused by file-descriptor exhaustion while an
extension connection approval is open. The fix keeps approval asynchronous and
bounds the local server's connection lifetime and concurrency.

## Evidence

Three local build-167 reports from 20–21 October have the same termination:
Core Animation cannot open its `default.metallib` with `Too many open files`.
Their faulting stack enters `CA::OGL::new_metal_context` from SceneKit's
`CALayer` texture renderer. Main is inside `NSAlert.runModal`, called by
`AppExtensionManager.httpRequest` inside `SimpleHTTPServer`'s synchronous
main-queue handoff. The supplied debugger trace shows the same path.

The serial HTTP queue remains occupied for the whole approval. Its timeout is
submitted to the main dispatch queue, which cannot drain recursively inside
that dispatched modal loop. Reconnecting clients continue opening sockets
while server work and timeout cleanup are stalled. Graphics later fails when
it needs another descriptor.

An isolated native probe of the original code shortened the approval timeout
to 250 ms. At 800 ms, neither that timeout nor a separate main-queue heartbeat
had executed. A timer registered specifically in the modal run-loop mode was
needed to abort the dialog and release the synchronous request. The probe used
a synthetic extension identity and in-memory trust.

## Changes

- Connection requests immediately receive `connectionDeferred`. Requests are
  deduplicated by identity, with one active approval and overscreen deferral.
- A main-owned AppKit modal session advances at 50 ms intervals, returning
  control between passes. Its 30-second monotonic deadline and explicit
  Allow/Deny/revocation clean up that exact session. Pending/ignored requests
  do not grant trust; approved replacements retire the old connection once.
- Existing-token and approval-grace reuse require the same connection identity.
- The server caps accepted connections at 64 and cancels each after 30 seconds,
  including incomplete requests and parked polls. Server stop cancels clients.
  The existing 20-second status wait fits within this total lifetime.

## Validation

- `Tests/run.sh`: passed, including full-manager approval/connect regressions.
- `Tests/AppExtensionApprovalTests.py --native`: passed with real AppKit Allow
  and Deny buttons, automatic timeout, session cleanup and main-queue heartbeat.
- `Tests/AppExtensionApprovalTransportTests.py`: passed. 200 reconnects while
  approval remained visible completed in 0.15 seconds; open descriptors stayed
  at 18 before/after reconnects and after abandoned-client cleanup. 80 synthetic
  clients filled the 64-client cap; expiry and stop released all server slots.
- `Tests/AppExtensionTransportTests.py`: passed, including authenticated parked
  waits, concurrent ACK, disconnect/loss, token aging and 30 delivery cycles.
- Normal Debug app and embedded Safari extension: code-signing-disabled build
  passed with Xcode 27.1, using cached Swift Collections and temporary output.

These fixtures do not capture screens, access Safari, or alter persisted trust.
No deliberate process-wide descriptor exhaustion was attempted. The installed,
signed Safari approval/reconnect flow, real permission UI and an extended
production soak remain manual checks.
