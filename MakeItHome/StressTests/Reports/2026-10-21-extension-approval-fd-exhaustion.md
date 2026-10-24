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
- A main-owned alert panel uses the normal AppKit event loop. Retained explicit
  button actions close it after event dispatch; a 50 ms safety timer enforces
  the 30-second monotonic deadline. Selection and revocation clean up that exact
  request. Pending/ignored requests do not grant trust; approved replacements
  retire the old connection once.
- Existing-token and approval-grace reuse require the same connection identity.
- The server caps accepted connections at 64 and cancels each after 30 seconds,
  including incomplete requests and parked polls. Server stop cancels clients.
  The existing 20-second status wait fits within this total lifetime.

## Validation

- `Tests/run.sh`: passed, including full-manager approval/connect regressions.
- The initial `Tests/AppExtensionApprovalTests.py --native` check passed using
  `performClick`. This missed normal event dispatch and has been replaced by
  the queued-input check described below.
- `Tests/AppExtensionApprovalTransportTests.py`: passed. 200 reconnects while
  approval remained visible completed in 0.15 seconds; open descriptors stayed
  at 18 before/after reconnects and after abandoned-client cleanup. 80 synthetic
  clients filled the 64-client cap; expiry and stop released all server slots.
- `Tests/AppExtensionTransportTests.py`: passed, including authenticated parked
  waits, concurrent ACK, disconnect/loss, token aging and 30 delivery cycles.
- Normal Debug app and embedded Safari extension: code-signing-disabled build
  passed with Xcode 27.1, using cached Swift Collections and temporary output.

## Follow-up: button press waits for the timeout

The user reported that an alert could remain open until its 30-second timeout
following a button press. The initial timer-driven modal-session implementation
still depended on AppKit's modal return code and the native test used
`performClick`, bypassing the normal application input loop.

Approval now uses an ordinary alert panel with explicit retained button targets.
The first choice is timestamped independently of modal state. Its callback
queues cleanup after event dispatch; the timer handles only timeout/fallback.
Cleanup detaches both targets, so a retired panel cannot approve a newer request.
No approval path runs an application modal loop or modal session.

The updated native fixture runs `NSApplication.run` and posts six mouse clicks
through the real AppKit event queue. It checks dismissal within 400 ms against
a separate one-second timeout, as well as Allow/Deny decisions, expiry and a
main-queue heartbeat. The measured peak dismissal was 27 ms. Unit coverage also
checks prompt closure before the fallback timer, first-choice retention and
retired-target isolation. Full tests, loopback descriptor checks and the normal
Debug app/extension build were repeated after this change.

These fixtures do not capture screens, access Safari, or alter persisted trust.
No deliberate process-wide descriptor exhaustion was attempted. The installed,
signed Safari approval/reconnect flow, real permission UI and an extended
production soak remain manual checks.
