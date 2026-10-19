# MakeItHome — AI Agent Reference

This is the fast-access operational reference for agents working on MakeItHome, a shipped macOS SwiftUI application that exposes an “overscreen” beyond display edges for live app previews, app switching, widgets, and trusted third-party extension content. The current development tree builds app marketing version 2.1.2/build 167 on branch `2.1.2`; the embedded Safari extension remains 2.1.1/build 165 and its manifest version remains 2.1.1 (see Known Gaps). Version 2.1.0 is tagged as `release-2.1.0` and documented in the public README as the current Mac App Store release. The isolated Test target still uses marketing version 2.1.0. Do not confuse the embedded Safari Web Extension, the optional third-party App Extension protocol, or the Angular source templates under `Assets/templates/` with the native application itself.

## Read This First

Use this source-of-truth order:

1. [`LICENSE`](LICENSE) and platform privacy/security requirements — legal and OS-enforced boundaries.
2. [`Tests/PreviewFlowGateTests.swift`](Tests/PreviewFlowGateTests.swift), executable protocol behavior, target definitions, and build settings in [`MakeItHome.xcodeproj/project.pbxproj`](MakeItHome.xcodeproj/project.pbxproj) — asserted behavior and build truth.
3. Current Swift, JavaScript, HTML, property lists, entitlements, and packaged-resource configuration — implemented behavior.
4. [`README.md`](README.md) — public product behavior, current release statement, and roadmap summary; verify its branch pointers against repository refs.
5. [`WhatsNew.md`](WhatsNew.md) — public 2.0.9 release notes, not a development changelog.
6. [`MakeItHome/StressTests/README.md`](MakeItHome/StressTests/README.md) — verified manual stress-harness invocations.
7. [`MakeItHome/Notes/`](MakeItHome/Notes/) and Git history — historical context only; notes may contain experiments or superseded code.

When sources disagree, inspect the relevant executable path. A roadmap item does not prove implementation, a comment does not override behavior, and a test proves only what it asserts. Fix documentation drift in the same task when it is in scope; otherwise record the mismatch under Known Gaps.

No nested `AGENTS.md` files exist at this revision. This root file applies to the whole repository.

## Collaboration and Maintenance Rules

- Read this file completely, inspect `git status`, and preserve unrelated user changes before editing.
- Keep this reference synchronized with durable changes to owners, symbols, protocols, feature status, commands, tests, security boundaries, or recurring failure-prevention rules. Remove stale claims in the same change.
- Add or update focused tests for logic that can be isolated. Run [`Tests/run.sh`](Tests/run.sh) whenever preview gating, fullscreen detection, Space topology, placeholder recovery, focus restoration, or recorder gating changes.
- For UI, capture, extension, clipboard, calendar, or pointer behavior without automated coverage, build the app and report the required manual permission/hardware checks accurately.
- Do not edit or commit ignored/generated state such as `build/`, `DerivedData/`, `.DS_Store`, Xcode user data, `.swiftpm` user state, `Pods/`, workspaces, signing material, or local secret/config files.
- Treat bundled minified/vendor output under [`MakeItHome/Resources/assets/`](MakeItHome/Resources/assets/) and Angular distributions under [`Assets/templates/`](Assets/templates/) as generated/vendor artifacts. Change their authoritative source when it is available and regenerate; do not hand-edit hashed bundles as the first choice.
- Development branches are named for the version in progress. Verify the checked-out branch and project marketing version rather than relying on an older README statement.
- There is no checked-in automated release pipeline or complete release procedure. Do not invent signing, notarization, archive, or App Store steps.
- Before committing, review the full diff, validate changed links/commands, keep feature labels honest, and stage this handbook with the code or docs whose facts it updates.

### Handbook maintenance triggers

- **Task start:** Re-check the owning file subsection, current implementation, relevant contract/feature, focused tests, and repository status before relying on this map.
- **Task end:** Update facts discovered or changed by the task, remove superseded guidance, synchronize governed human docs, and report tests run/not run.
- **Edit:** Update the linked file reference when a source owner, meaningful symbol, entry point, message/route, setting, dependency, generated boundary, test, or recurring failure-prevention rule changes. Update feature status only after implementation and verification. Pure formatting or local refactors with unchanged ownership need no cosmetic handbook churn.
- **Security/data/lifecycle edit:** Also update the critical contract and security/data boundaries when trust, permission, secrets, persistence, wire/file formats, concurrency, main-thread ownership, or resource lifetime changes.
- **Commit:** Ensure the staged handbook describes the tree after that commit, moved/deleted owners are gone, partial work is labeled experimental or a known gap, and the relevant tests, build, links, and `git diff --check` have been validated.

## Essential Project Principles

### Screen-derived content stays local

- Live frames exist to render window previews. Do not persist or transmit captured screen images from the native app.
- The Safari extension may capture tab previews for the explicitly approved local App Extension connection; this is a separate, user-enabled boundary and must remain authenticated and loopback-only.

### Overscreen interaction must remain recoverable

- A stale fullscreen flag, Space transition, placeholder, recorder operation, or WebKit navigation must not permanently wedge previews or prevent the overscreen from reopening.
- Recovery is time-bounded and state-derived. Do not replace it with sticky booleans or unbounded retries.

### UI and graphics ownership stays on the main thread

- SceneKit, `CALayer`, AppKit windows, SwiftUI-observed state, and `WKWebView` mutations must execute on the main actor/thread.
- Expensive Core Image cropping belongs on `Display.imageProcessingQueue`; return to the main actor before applying preview materials or UI state.

### Web state survives normal UI transitions

- The shared top `WKWebView` and native child web views retain DOM, browsing, and sign-in state across SwiftUI updates and full-screen search transitions.
- Entering or leaving full-screen search changes visibility and geometry; it must not recreate the top web view or reload content as a lifecycle shortcut.

### Extensions cross an explicit trust boundary

- App Extension requests remain bound to a stable extension identity, user approval, a per-connection secret, and a rolling token.
- Ignored or deferred approval is not approval. A connection cannot gain content or JavaScript access through a status/poll route.

## Critical Implementation Contracts

- **Capture lifecycle serialization:** [`CaptureEngineOperationGate`](MakeItHome/Helpers/CaptureLifecycle.swift) serializes `SCStream` start, update, and stop. [`ScreenRecorder`](MakeItHome/Managers/Capture/ScreenRecorder.swift) publishes its stop task before awaiting configuration work, uses intent/run IDs, and releases the engine when frame iteration ends or is canceled. Never overlap raw `SCStream` mutations or clear a newer run's state after an older stop resumes.
- **Capture frame ownership:** [`LatestCaptureFrames`](MakeItHome/Helpers/CaptureLifecycle.swift) retains only one newest queued frame. Each `CaptureEngineStreamOutput` yields to its own immutable channel; late callbacks must never look up the engine's current continuation. `CaptureEngine.startCapture` stops any previously owned stream before replacement. Screen frames stay in memory.
- **Startup Screen Recording requests:** [`ScreenRecorder.shareableContent`](MakeItHome/Managers/Capture/ScreenRecorder.swift) gates permission-triggering content queries through [`ScreenRecordingPermissionGate`](MakeItHome/Helpers/ScreenRecordingPermissionGate.swift) on main, using monotonic uptime. While access is absent, allow the first request immediately, then at most one every 15 seconds, with no overlapping requests. Both `canRecord` and content refreshes must use this boundary; preflight-granted access bypasses the retry delay. `ContentView` polls authorization every 15 seconds and shows the instruction video with `SwifterPanel.show(centered: true)` after sizing its hosting content.
- **First-approval cursor control:** `ScreenRecorder.scheduleCursorControlRequestIfNeeded` schedules one main-thread mouse-move event one second after observing approval following a Screen Recording request. Read the current `CGEvent.location` only after that delay and post at the same Quartz position, including on secondary displays. The `ScreenRecordingPermissionOnboarding` UserDefaults key stores `notRequested`/`awaitingApproval`/`completed`; pending progress survives a required relaunch and completion prevents repeat onboarding after denial, restart or later Screen Recording revocation. Pre-existing Screen Recording grants alone do not start this flow. Recheck Screen Recording access before posting, and retain pending progress if access is revoked or event creation fails. macOS owns the actual cursor-control permission dialog; do not treat posting as a grant.
- **Preview flow gate:** [`PreviewFlowGate`](MakeItHome/Helpers/PreviewFlowGate.swift) is the canonical state machine for fullscreen, Space-change, duplicate-placeholder, missing-placeholder, focus-restore, and recorder eligibility. [`Display.checkForScreenshot`](MakeItHome/Managers/Displays.swift) must call stale recovery on an every-tick path, including paths that return before the window list is evaluated. Covered by [`Tests/PreviewFlowGateTests.swift`](Tests/PreviewFlowGateTests.swift).
- **Fullscreen detection:** A normal maximized window that leaves the menu-bar area visible is not automatically native fullscreen. Use `isFullscreenCandidateFrame` plus Accessibility full-screen state, and accept a complete display frame directly. Do not regress Stage Manager or multi-display geometry.
- **Space topology:** A fullscreen Space legitimately has no MakeItHome placeholder. A single placeholder must settle before it becomes authoritative; duplicate IDs are repairable only after their stable grace period. Never repair a missing placeholder while fullscreen.
- **Cross-Space focus:** Do not use `.activateAllWindows` when tracked windows span Spaces. On overscreen close, restore prior focus only when the opening Space still matches the stable current placeholder.
- **Top web view lifetime:** [`TopWebView.sharedWKWV`](MakeItHome/Views/Overscreen/WidgetZoneView.swift) is a single shared instance. `loadTopWKWB` is load-once unless an explicit recovery/reload is requested. Do not allocate it in a SwiftUI update or full-screen search transition.
- **Full-screen search geometry:** `Display.onFullOverscreenMode` sets top overlay height to the display height and offset to zero. `outFullOverscreenMode` must restore both `overlaySizeY = Static.OverscreenSizeTop` and `overlayOffsetY = (Static.OverscreenSizeTop - frame.height) / 2`.
- **Full-screen search pointer exit:** Native child `WKWebView`s intercept pointer events. Search exit may be armed only after real downward movement in the parent page; entering search must not pre-arm an upward exit. Keep search-only pointer behavior scoped to `fullOverscreenMode`.
- **Permission-prompt ordering:** [`AppExtensionManager`](MakeItHome/Managers/AppExtension.swift) defers connection alerts while any display is presenting overscreen content. A prompt must not force-close active search or compete with the overscreen window. `Static.isExtensionApprovalPromptShowing` keeps displays dismissed during the blocking modal.
- **Extension authentication:** All non-`/connect` App Extension operations require the current secret and `SHA256(secret:unixSecond)` token within the configured clock skew. Safari connections also require a nonempty `clientId`. Keep the 10-second post-approval grace behavior that converges racing connects without rotating secrets repeatedly.
- **Safari background lifetime:** The macOS-only [manifest](MakeItHome/MakeItHome%20Web%20Extension/Resources/manifest.json) uses Manifest V2 with `background.persistent: true`; `background.js` registers the toolbar listener through `chrome.browserAction`, matching `browser_action`. Safari makes all MV3 background pages nonpersistent, so changing this manifest back to MV3 removes idle-retention behavior. Persistence keeps the approved status receive loop and bounded runtime preview cache resident during normal browser idle; capture pacing and connection backoff still apply. Safari termination, extension disable/reload, process failure and system sleep can interrupt execution; startup reconnects with stored credentials. Do not add content-script heartbeat timers or disk-backed previews. Apple documents this macOS-specific option in [Optimizing your web extension for Safari](https://developer.apple.com/documentation/safariservices/optimizing-your-web-extension-for-safari); iOS requires nonpersistent backgrounds. Installed Safari idle retention remains a manual check with Web Inspector closed.
- **Safari tab surface:** [`background.js`](MakeItHome/MakeItHome%20Web%20Extension/Resources/background.js) sends `syncSafariTabs` metadata before `applySafariScreenshots` batches. Metadata updates only existing cards; create a visible card only with a cached preview, and remove its card if the preview is evicted or fails to decode. Late frames must not resurrect closed tabs. Metadata/capture exclude unaddressable negative, fractional or unsafe IDs, while tab/window ID zero remains valid. Titles are text nodes, never interpolated HTML. Normal hide/show retains the carousel and images. Identical HTML delivery is idempotent; a genuine content update reuses cached image/card nodes and tab order in the same JavaScript context. Only explicit Reset or actual WebKit context loss clears the preview cache. Titles and 18 px tab favicons occupy a reserved 30 px grid row beneath a constrained image cell in both orientations. `updateSafariTabIcon` uses the browser-provided HTTP(S) or bounded raster data URL with no referrer and a globe fallback for missing/failed/unsupported icons; never use a third-party favicon lookup service. Icon replacement/reset/removal detaches retired image handlers and loads; icon failure must not evict the preview. Each replacement uses a new image element and detaches the old handlers before revocation, so a late load error cannot remove the newer preview. Each show sends `safariViewReady` with `inventoryReady`, the runtime position and retained preview IDs. A warm report causes no metadata/image resend; missing content re-sends metadata and only missing cached frames, restoring the saved non-private position for a cold context. A per-tab delivery revision prevents an older in-flight send acknowledgement from clearing that recovery work. Browser `safariCarouselOrder` and view `vars.safari.order` maintain the same stable first-seen ID order independently of screenshot/delivery priority or later window/index changes, including cold native view replay. The browser prunes closed IDs on inventory sync; the order stays in runtime memory. Structural changes insert/remove only affected nodes and wait for a 300 ms input pause (momentum protection capped at 1.5 seconds); preserve selected ID and fractional scroll offset. Read selection from Swiper's current slide objects, not a newly changed backing array. Use one successful layout update, not repeated re-centering timers. Identical frame fingerprints retain their image nodes/URLs, and cache eviction protects the selected preview within the existing bounds. Save the selected tab ID and fallback index through `tabPosition` status in browser storage, excluding private tabs; never persist previews or tab titles/URLs. Both browser and view caches cap previews at 60 and 8 MiB of base64 characters, with 256 KiB per frame and 768 KiB per send batch. Release bitmaps and replaced/removed/reinjected object URLs, retry failed deliveries, and preserve inventory events received during asynchronous sync. Keep capture requests for real switches/navigation paced separately from slower periodic captures; page title tickers must not mark user activity. The content script retains Safari website-access matching but performs no timers or messaging.
- **App Extension focus handoff:** `focusOnMe(status)` in [`appExtensionView.html`](MakeItHome/Resources/assets/appExtensionView.html) sends focus and optional follow-up status through the `appExtensionMessage` WebKit handler (legacy URL fallback). [`AppExtensionWebViewCoordinator`](MakeItHome/Managers/Capture/Views/AppExtensionView.swift) pins the current extension owner, never `LastAppPreviewMouseOver`. Main-actor [`Display.focusAppExtension`](MakeItHome/Managers/Displays.swift) resolves that owner's immutable PID and validates its bundle ID, closes the full extension surface over 120 ms with a smooth curve (immediately with Reduce Motion), then clears every overscreen offset/animation/pointer-pressure value and queues follow-up status after requesting activation. `finishAppExtensionFocus` performs the final zero-state reset; generation checks cancel superseded animation and old show/hide callbacks. macOS 14+ uses cooperative `yieldActivation`/`activate(from:)`; older systems use explicit activation. `PreviewFlowGate` invalidates pre-click show/activation callbacks with a presentation generation and suppresses pointer reopening until it re-enters the display interior or a 1.5-second monotonic deadline expires; an explicit shortcut re-arms immediately. Safari's `safariAPI` awaits actual completion from either callback or Promise APIs. `getCurrentTabInfo` queries Safari with `active: true, lastFocusedWindow: true` without changing activity or selection state, and resolves `null` when no addressable tab exists. `confirmTabOrder` and the recent-tab list are removed; tab events and per-window active flags do not establish the foreground tab. `resolveSafariTab` uses the exact safe integer ID (zero is valid), with a fresh exact-ID inventory fallback if direct lookup is rejected. `focusOnTab` always requests window focus and exact-ID tab activation, including already active tabs in other windows, independently of cached metadata or carousel order. It restores a minimized target window, requests window focus, allows 150 ms to settle, then re-resolves the tab/window before selecting it; moved tabs use their new window automatically. A window read/focus rejection must not suppress tab selection. Verify the fresh last-focused-window active-tab query, exact-ID tab state and actual focused window, and emit only tab ID/failure stage diagnostics; never substitute another tab by URL or index. `requestTabFocus` performs exactly one window/tab retry 400 ms later, including after an initial API rejection, and verifies the active tab and focused window. Each attempt expires after 1.2 seconds; completion resolves after the retry, never at the initial API response. A newer extension click or a closed target cancels old work, including checks after awaits; delayed Safari activation events must not cancel the required retry. Do not depend on the normal hide timer or a pointer tick to finish the handoff, leave `aboveByPixels`/`prevAboveByPixels` nonzero, or reintroduce independently delayed focus/tab-selection messages.
- **App Extension status delivery:** [`AppExtensionStatusMailbox`](MakeItHome/Helpers/AppExtensionStatusMailbox.swift) retains runtime-only `{id,value}` events for `/checkStatus?reliableStatus=1` until authenticated `/ackStatusMessages` with JSON `{ids:[String]}`. Legacy polls still consume string messages. Queue bounds are 128 entries, 256 KiB total UTF-8, and 64 KiB per message. Safari coalesces each of `clickedOn`/`tabPosition`/`safariViewReady` separately; clicks expire after 15 seconds of continuous Mach time (including sleep) to avoid replay after sleep. Safari keeps at most 128 in-flight/completed receipts, preserves IDs still pending on the server, and resends lost ACKs without repeating selection. ACK means processing completed (including terminal failure/closed/superseded requests), not proof that macOS granted focus; failed verification produces a payload-free warning. All protocol fetch deadlines include JSON body parsing; stale poll responses cannot run commands. The WebKit handler accepts only the shared view's main frame and checks the source bundle when supplied (older content may omit it), uses a weak coordinator proxy, and resolves the current approved identity after the close animation. Revocation or a different identity blocks deferred delivery.
- **App Extension content lifetime:** `createAppExtension` and identical `setContent` calls in the host page retain existing DOM by default; explicit `forceReload` is propagated by native sync. Transient/unknown health-check errors do not establish missing content. Only a confirmed missing container triggers automatic recovery. Native content/health callbacks carry document generation, content revision and view identity so stale callbacks cannot publish readiness or reinject content into a newer view; teardown invalidates outstanding callbacks from a retired connection. Covered by [`Tests/AppExtensionContentLifecycleTests.py`](Tests/AppExtensionContentLifecycleTests.py) and isolated WebKit rendering tests.
- **HTTP isolation and bounds:** [`SimpleHTTPServer.start`](MakeItHome/Managers/SimpleHttpServer.swift) sets `acceptLocalOnly`; request bodies are capped at 15 MiB; App Extension handling runs on main because it touches UI-owned state. Ordinary requests use a synchronous handoff; `/checkStatus` uses an asynchronous response so a parked status request blocks neither main nor the HTTP queue. Do not expose this server beyond loopback or remove body bounds.
- **Widget bridge reliability:** Page-to-native operational messages use the `widgetMessage` WebKit handler. The legacy `myapp://` URL bridge remains compatibility-only because repeated identical navigations can coalesce. Localization and native child-web-view sync use their dedicated handlers.
- **Widget localization:** Every user-facing fallback in [`widgets.html`](MakeItHome/Resources/assets/widgets.html) needs a semantic `widgets.…` key and an English value in [`Localizable.xcstrings`](Localizable.xcstrings). Dynamic strings in [`script.js`](MakeItHome/Resources/assets/script.js) must be registered through `registerLocalizations` and rendered through `localizedString`. Send the collected dictionary through `widgetLocalization`, never the custom URL bridge.
- **Calendar grid:** [`calendar.html`](MakeItHome/Resources/assets/components/calendar.html) is Monday-first, so its `Date#getDay()` offset must map Sunday to the final column with `(getDay() + 6) % 7`. Render only the required five or six weeks; do not reserve a sixth row made entirely of next-month days. Keep the 42-cell maximum capacity, `days`, event lookup, and the visible grid derived from the same start date. Events begin at the top of their cell beneath the date chip with a 3px top/left inset; a one-second pointer dwell expands that week row and leaving clears it. A day-surface click opens its 48-slot, 30-minute agenda; all-day events belong in its separate rail, never on the timed grid. Appointment controls must stop propagation to preserve their own popover/edit actions, and their bounded detail card must remain above both the month view and day agenda.
- **Clipboard round-trip fidelity:** [`Clipboard.Element.rawTypes`](MakeItHome/Managers/New%20Group/Clipboard.swift) preserves every pasteboard representation. Re-copying must replay raw types before falling back to display-oriented string/image/file data.
- **Clipboard resource bounds and ordering:** Native clipboard history is newest-first and capped by `Static.ClipboardForgetElementsOlderThan`; page updates are batched oldest-first so CSS Grid appends the newest item at the visual bottom. [`BoundedFIFOQueue`](MakeItHome/Helpers/ClipboardResourceBounds.swift) caps native-to-page messages while WebKit is unavailable. [`ClipboardPreviewImage`](MakeItHome/Views/Overscreen/WidgetZoneView.swift) limits only the base64 preview sent to the Widgets Zone (160 px, 128 KiB); never use that derivative for pasteboard re-copy, whose raw representations remain in `Clipboard.Element`. The grid's persistent, centered `clipboard-notch-spacer` reserves its first row so cards stay below a MacBook display notch; clear/replace operations must remove `.item` cards only. Do not reintroduce unbounded history/queues, one timer per item, Masonry transform ownership, collection mutation during iteration, or whole-grid `.empty()` calls.
- **Clipboard rich text:** RTF is decoded and converted to Cocoa-generated HTML in [`Clipboard.Element.setRtf`](MakeItHome/Managers/New%20Group/Clipboard.swift). [`script.js`](MakeItHome/Resources/assets/script.js) renders only an allowlisted subset inside a Shadow DOM, with sanitized Cocoa CSS. Never inject raw clipboard strings or unscoped rich-text CSS into the Widgets Zone document.

- **Safari command transport:** A new `/checkStatus` response advertises `statusWaitSupported`. Updated Safari uses authenticated `POST /checkStatus?reliableStatus=1&waitMs=…` with `{receivedIds:[String]}` to park a response until a new mailbox event arrives (1 second visible, 20 seconds hidden, clamped to 20 seconds). Authentication is checked on arrival; wake validates the same live connection object and rejects teardown/replacement. Do not revalidate the expired arrival token after a valid wait. Replacing connection credentials tears down the retired connection first. One main-owned waiter per connection is cancelled/replaced with an identity guard; disconnect, timeout and teardown release it. Excluded IDs are temporary receipt hints, never ACKs or queue deletion. Safari excludes only unfinished receipts, receives newer commands while selection/storage/ACK work continues, and registers a whole batch before awaiting completion so the newest click can supersede older work. Completed receipts redeliver after ACK loss without repeated selection. Legacy clients/servers keep ordinary polling. The isolated [transport suite](Tests/AppExtensionTransportTests.py) checks real loopback wake, concurrent ACK, loss/disconnect, auth/token aging, cancellation and revocation with synthetic commands.

**Safari recovery invariants:**

- `AppExtensionWebViewCoordinator.webView(_:didFinish:)` restores the current owner's show state and orientation after document replacement only while the native extension zone is active and the approved identity still matches. Hidden/retired owners must not reopen. Rebuilding HTML alone leaves the new host unable to initialize its carousel or report missing cached previews.
- Safari `checkOpenTabs` returns metadata-delivery readiness. Refresh and install paths must wait for successful metadata delivery before sending images; otherwise unknown-tab frames can be ignored by the view yet acknowledged by the browser.
- Inventory queries and the entire capture/query/encoding pipeline expire after the configured `screenshotPolicy.captureTimeoutMs` deadline (currently 1 second). Late callbacks cannot mutate inventory or publish expired frames. `captureRevision` invalidates captures across switch/navigation/topology events, including a switch away and back to the same ID/URL.
- Metadata refreshes mutate each tab's stable runtime state so title-only updates cannot discard valid pending captures. `makeFrameFingerprint` inspects the entire frame; unchanged pixels bypass encoding/resending even when titles change. Images remain runtime-only.
- `scheduleScreenshotLoop` keeps the earliest requested deadline; frequent title events must never reset a pending refresh later. Background-tab loading/URL events do not invalidate foreground captures. A completed user selection requests a prompt fresh capture even if Safari emits no new activation event.

## Architecture and Data/Control Flow

Native startup:

`MakeItHomeApp` → `ContentView` / `StoreView` → `DisplaysManager` → per-display `Display` → `ScreenRecorder` → `CaptureEngine` (`SCStream`) → `CapturedFrame` → `CapturePreview.CaptureView` (SceneKit)

Window discovery and overscreen:

`DisplaysManager` mouse/Space notifications → `Display.active` / `checkForScreenshot` → WindowServer + Accessibility geometry → `PreviewFlowGate` → cropped window previews → `CapturePreview` app/window nodes → AppKit overscreen window

Widgets:

`ContentView` → shared `TopWKWV` → loopback `SimpleHTTPServer` → `widgets.html` + `script.js` → `widgetMessage` / `widgetLocalization` / `nativeWebView` handlers → clipboard, calendar, settings, extension permissions, and persistent native child `WKWebView`s

App Extension:

external client or bundled Safari background worker → loopback `/appExtension/*` → `SimpleHTTPServer` → main-thread `AppExtensionManager.httpRequest` → approval/trust/token checks → `AppExtension` state → `AppExtensionWKWV` → `Display.AppWindows`

Canonical persisted state is split between native `UserDefaults` (settings, trust metadata/secrets, native child-web-view navigation), Safari `chrome.storage.local` (extension connection state and tab-carousel position), and Application Support JSON used by the embedded board APIs. Screen frames and the native clipboard history are runtime memory, not durable application data.

## Linked Source Tree and File Reference

### [`MakeItHome.xcodeproj/project.pbxproj`](MakeItHome.xcodeproj/project.pbxproj)

Authoritative target, source/resource membership, Swift package dependency, deployment target, bundle IDs, versions, schemes, and signing configuration.

- **Key subparts:** `MakeItHome` app target; embedded `MakeItHome Web Extension`; separate Debug-only `MakeItHome Test` app target; Swift Collections 1.0.3; macOS 12.3 target; normal app marketing version 2.1.2/build 167, embedded Safari extension marketing version 2.1.1/build 165, manifest version 2.1.1, and Test marketing version 2.1.0/build 161. The Test target produces `MakeItHome Test.app` (`ink.geckos.MakeItHome.Test`) so TCC permissions and `UserDefaults` remain separate from normal app builds; it deliberately does not embed the Safari extension and overrides `LSUIElement` to `NO` so its explicit stress host window starts reliably.
- **Depends on:** [`MakeItHome.xcodeproj/project.xcworkspace/xcshareddata/swiftpm/Package.resolved`](MakeItHome.xcodeproj/project.xcworkspace/xcshareddata/swiftpm/Package.resolved).
- **Common mistakes:** Add new manually grouped files to the correct target/resource phase. Keep Debug/Release parent and extension `CFBundleVersion`/`MARKETING_VERSION` and the Safari manifest version aligned; the browser reads manifest metadata independently of the containing app. The version regression in `Tests/WebExtensionTests.cjs` checks all three sources.

### [`MakeItHome/MakeItHomeApp.swift`](MakeItHome/MakeItHomeApp.swift)

The SwiftUI application entry point. The dedicated `MakeItHome Test` target uses `StressTestAppDelegate` to create and retain an explicit hosting window, routing `--stress` launches to the stress root; normal builds keep the existing `WindowGroup`, create `ContentView`, and call `Static.Init`.

- **Key symbols:** `MakeItHomeApp.body`; `StressTestAppDelegate`; `StressLaunchConfiguration.current`.
- **Called by / depends on:** Xcode app target; [`MakeItHome/StressTests/StressTestSupport.swift`](MakeItHome/StressTests/StressTestSupport.swift).
- **Tests:** Manual stress modes only.
- **Common mistakes:** Keep the delegate, regular activation policy, explicit test window, and stress dispatch behind `#if STRESS_TEST_APP`; normal startup must not inherit stress arguments, Dock behavior, or state.

### [`MakeItHome/ContentView.swift`](MakeItHome/ContentView.swift)

Composes the SceneKit capture preview and widget/App Extension overlays, owns `StoreView`, creates `DisplaysManager`, checks Screen Recording authorization, and configures the accessory/menu-bar window.

- **Key symbols:** `StoreView` owns the recorder and AppKit window; `StoreVars` owns overlay geometry; `ContentView` wires native surfaces; `checkCanRecord` updates authorization state.
- **Depends on:** [`MakeItHome/Managers/Displays.swift`](MakeItHome/Managers/Displays.swift), [`MakeItHome/Managers/Capture/ScreenRecorder.swift`](MakeItHome/Managers/Capture/ScreenRecorder.swift), [`MakeItHome/Views/Overscreen/WidgetZoneView.swift`](MakeItHome/Views/Overscreen/WidgetZoneView.swift), and [`MakeItHome/Managers/Capture/Views/AppExtensionView.swift`](MakeItHome/Managers/Capture/Views/AppExtensionView.swift).
- **Tests:** Request cadence is covered by [`Tests/ScreenRecordingPermissionGateTests.swift`](Tests/ScreenRecordingPermissionGateTests.swift); actual permission dialogs and video-window placement remain manual.
- **Common mistakes:** Published/AppKit changes belong on main. Do not recreate overlay web views while changing their frames.

### [`MakeItHome/Static.swift`](MakeItHome/Static.swift)

Central configuration and runtime registry for preferences, capture/interaction tuning, singleton references, activation state, and Web Extension installation state.

- **Key symbols:** `Init`, `EnableClipboardCapture`, `EnableShortcuts`, `CheckOpenAtStartup`, `refreshWebExtensionInstallButtonVisibility`, capture/overscreen constants, and the shared `TopBarWebView`/`AppExtensionWebView` references.
- **Called by:** Nearly every native subsystem.
- **Tests:** Indirect flow-gate coverage only.
- **Common mistakes:** Distinguish persisted computed properties from transient global state. New preferences require a stable key, a deliberate default, and UI/documentation synchronization.

### [`MakeItHome/GeneralFuncs.swift`](MakeItHome/GeneralFuncs.swift)

Owns Accessibility polling/prompting, global Carbon hotkeys, shortcut dispatch, the shortcut status HUD, and small shared helpers.

- **Key symbols:** `PermissionsService`, `GlobalShortcutManager`, `ShortcutStatusHUD`, `delay`, `performHaptic`, `generateRandomString`.
- **Depends on:** [`MakeItHome/Managers/Displays.swift`](MakeItHome/Managers/Displays.swift) for shortcut actions.
- **Tests:** No focused automated tests.
- **Common mistakes:** Register/unregister hotkeys as a set and marshal UI work to main.

### [`MakeItHome/Helpers/PreviewFlowGate.swift`](MakeItHome/Helpers/PreviewFlowGate.swift)

Pure, AppKit-free state machine for preview/recorder gating and Space topology. Behavioral fixes belong here when they can be expressed without WindowServer/UI dependencies.

- **Key functions:** `updateFullscreen` and `recoverStaleFullscreen`; `beginSpaceTransition`, `observePlaceholderTopology`, and `acceptFullscreenTopology`; `noteDuplicatePlaceholderIDs`; `shouldRepairMissingPlaceholder`; `allowsScreenshot`, `allowsRecorder`, focus/activation helpers; `beginInteractionDismissal`, `allowsScheduledPresentation`, and `allowsPointerPresentation` for extension-click presentation cancellation/re-arm.
- **Called by:** [`Display`](MakeItHome/Managers/Displays.swift).
- **Tests:** [`Tests/PreviewFlowGateTests.swift`](Tests/PreviewFlowGateTests.swift).
- **Common mistakes:** Timestamp transitions only on a state edge; changing signatures restart grace periods. Do not convert wall-clock safety nets to tick counts.

### [`MakeItHome/Helpers/AppExtensionStatusMailbox.swift`](MakeItHome/Helpers/AppExtensionStatusMailbox.swift)

AppKit-free bounded status-event mailbox and Codable `{id,value}` envelope. `pending` is non-destructive; exact-ID `acknowledge` never deletes a replacement command. Runtime session UUID/sequence prevents ID reuse across queues, `consumeLegacy` preserves older clients, and continuous Mach time expiry prevents stale Safari click replay after sleep. Owned on main by `AppExtension`. Covered by [`Tests/AppExtensionStatusMailboxTests.swift`](Tests/AppExtensionStatusMailboxTests.swift) through [`Tests/run.sh`](Tests/run.sh).

### [`MakeItHome/Helpers/CaptureLifecycle.swift`](MakeItHome/Helpers/CaptureLifecycle.swift)

AppKit-free capture primitives: `CaptureEngineOperationGate` serializes suspending operations, and `LatestCaptureFrames` creates a separate newest-one channel for each capture run. Both are used by `CaptureEngine` and covered by [`Tests/CaptureLifecycleTests.swift`](Tests/CaptureLifecycleTests.swift).

### [`MakeItHome/Helpers/ScreenRecordingPermissionGate.swift`](MakeItHome/Helpers/ScreenRecordingPermissionGate.swift)

Pure request pacing and onboarding progress for first-launch Screen Recording authorization. `beginRequest(now:)` reserves an immediate first request, a 15-second minimum between starts, and at most one in-flight request; `finishRequest` releases the reservation after success or failure. `ScreenRecordingPermissionOnboarding` models persisted progress toward the one-time cursor-control request after approval. Owned by main-actor `ScreenRecorder` and covered by [`Tests/ScreenRecordingPermissionGateTests.swift`](Tests/ScreenRecordingPermissionGateTests.swift) through [`Tests/run.sh`](Tests/run.sh).

### [`MakeItHome/Helpers/StressProcessSample.swift`](MakeItHome/Helpers/StressProcessSample.swift)

Test-target-only memory/thread sampling. `StressProcessSample.capture` releases every send right returned by `task_threads` before freeing its returned array. [`Tests/StressProcessSampleTests.swift`](Tests/StressProcessSampleTests.swift) performs 10,000 samples and checks that the caller's thread send-right count remains unchanged.

### [`MakeItHome/Helpers/PreviewTitleText.swift`](MakeItHome/Helpers/PreviewTitleText.swift)

Pure preview-title wrapping used before SceneKit text creation. It clamps computed character limits to at least one and traverses Swift `Character`s safely so transient zero-width window geometry cannot crash title rendering.

- **Key function:** `PreviewTitleText.wrapping`.
- **Called by:** `CapturePreview.CaptureView.WindowPlane.setTitle`.
- **Tests:** [`Tests/PreviewTitleTextTests.swift`](Tests/PreviewTitleTextTests.swift).
- **Common mistakes:** Window geometry can briefly be zero or extremely narrow while the SceneKit graph is rebuilt. Never use a geometry-derived line length as a divisor without clamping it.

### [`MakeItHome/Managers/Displays.swift`](MakeItHome/Managers/Displays.swift)

The primary overscreen domain owner: display discovery, high-frequency pointer motion, edge activation, WindowServer tracking, Space placeholders, screenshot cropping, recorder policy, window/focus activation, shortcut animation, and overscreen geometry.

- **Key classes and methods:** `DisplaysManager` discovers displays and routes mouse/Space events; `Display.checkForScreenshot` derives windows/fullscreen/placeholder topology; `Display.active` drives edge behavior; `showWindow`/`hideWindow` own presentation; `focusAppExtension`/`finishAppExtensionFocus` own its fast close and extension-to-app handoff; `onFullOverscreenMode`/`outFullOverscreenMode` own search geometry; `shouldKeepScreenRecorderActive` delegates to the flow gate.
- **Depends on:** [`MakeItHome/Helpers/PreviewFlowGate.swift`](MakeItHome/Helpers/PreviewFlowGate.swift), capture/preview owners, `CGWindowListCopyWindowInfo`, Accessibility, and placeholder windows.
- **Tests:** Flow logic and dismissal re-arm in [`Tests/PreviewFlowGateTests.swift`](Tests/PreviewFlowGateTests.swift); the production extension-close method is compiled with UI/process doubles by [`Tests/ExtensionFocusHandoffTests.py`](Tests/ExtensionFocusHandoffTests.py). Cooperative AppKit activation was checked with isolated native fixture apps; installed Safari/multi-display integration remains manual.
- **Common mistakes:** This file mixes coordinate systems and lifecycle states. Preserve per-display isolation, main-thread graphics/UI mutation, `imageProcessingQueue` ownership, every-tick stale recovery, and both dimensions of search restoration. Window scans may refresh `AppWindows.runningApp` only when the frontmost process ID matches the immutable owner ID; extension activation independently resolves that stable identity.

### [`MakeItHome/Managers/Capture/CaptureEngine.swift`](MakeItHome/Managers/Capture/CaptureEngine.swift)

Lowest ScreenCaptureKit boundary. It creates `SCStream`, serializes stream mutations, converts complete sample buffers into `CapturedFrame`, and exposes frames through `AsyncThrowingStream`.

- **Key symbols:** `CapturedFrame`, `CaptureEngine.startCapture`, `stopCapture`, `update`, and `CaptureEngineStreamOutput`.
- **Called by:** [`ScreenRecorder`](MakeItHome/Managers/Capture/ScreenRecorder.swift).
- **Tests:** [`Tests/CaptureLifecycleTests.swift`](Tests/CaptureLifecycleTests.swift) tests the production channel and operation gate; actual ScreenCaptureKit cleanup/cancellation requires the runtime lifecycle harness.
- **Common mistakes:** Never update configuration/filter while stop is in progress; never render incomplete sample buffers. Keep frame buffering bounded and callbacks attached to their originating continuation, without a closure retaining the engine.

### [`MakeItHome/Managers/Capture/ScreenRecorder.swift`](MakeItHome/Managers/Capture/ScreenRecorder.swift)

Main-actor capture coordinator. Selects the display/window filter, switches low/high capture profiles, serializes intent changes, consumes frames, and hands them to the preview.

- **Key methods:** `start`, `stop`, `stopCaptureEngine`, `updateEngine`, `canRecord`, `shareableContent`, `scheduleCursorControlRequestIfNeeded`, `refreshAvailableContent`, `contentFilter`, and `streamConfiguration`.
- **Depends on:** [`CaptureEngine`](MakeItHome/Managers/Capture/CaptureEngine.swift), [`CapturePreview`](MakeItHome/Managers/Capture/Views/CapturePreview.swift), and `Static` performance constants.
- **Tests:** Recorder eligibility is modeled in flow-gate tests; permission pacing/onboarding state is covered by [`Tests/ScreenRecordingPermissionGateTests.swift`](Tests/ScreenRecordingPermissionGateTests.swift). [`Tests/ScreenRecordingPermissionOnboardingTests.py`](Tests/ScreenRecordingPermissionOnboardingTests.py) compiles production permission methods with inert timer/capture/pointer doubles for one-second scheduling, cross-recorder deduplication, approval during queries or after relaunch, current Quartz coordinates, revocation, event failure and completion. Actual permission dialogs and real capture remain manual.
- **Common mistakes:** Prefer an in-place configuration update when the target stream is current. Publish pending stops before suspending, validate intent IDs after suspension, stop the engine on consumer cancellation/error, and avoid post-await state writes from an older stop.

### [`MakeItHome/Managers/Capture/Views/CapturePreview.swift`](MakeItHome/Managers/Capture/Views/CapturePreview.swift)

SceneKit renderer and interaction surface for the desktop plane, app/window preview nodes, hover/focus, clicks, scrolling, drag/drop, and gravity-mouse behavior.

- **Key symbols:** `CapturePreview.updateFrame`; `CaptureView.prepareScene`, `setScreenApps`, `setWindowsPosition`, `mouseMove`, `unset`; `AppNode`; `WindowPlane`.
- **Called by:** `ContentView`, `ScreenRecorder`, and `Display`.
- **Tests:** Title wrapping is covered by [`Tests/PreviewTitleTextTests.swift`](Tests/PreviewTitleTextTests.swift); the virtual overscreen stress harness exercises the SceneKit graph, but has no automated SceneKit assertions.
- **Common mistakes:** Release material/layer references when removing nodes, avoid redundant texture uploads, perform SceneKit/CALayer mutations on main, and clamp geometry-derived title line lengths before wrapping.

### [`MakeItHome/Managers/AppExtension.swift`](MakeItHome/Managers/AppExtension.swift)

Owns external extension identity, permission inventory, trust persistence, approval/defer/timeout behavior, secret and rolling-token authentication, request dispatch, and live extension content/message synchronization.

- **Key symbols:** `AppExtensionManager.httpRequest`, `waitForStatusResponse`, `requestConnectionApproval`, `presentNextDeferredApprovalIfPossible`, `extensionPermissionsStatus`, `revokeExtensionPermission`, `hasValidToken`; `AppExtension.syncIfNeeded`, `sendJSMessage`, `pendingStatusEvents`, `waitForStatus`, `acknowledgeStatusEvents`, `contentSyncGeneration`, and `scheduleHealthCheckIfNeeded`.
- **Called by:** [`SimpleHTTPServer`](MakeItHome/Managers/SimpleHttpServer.swift), widget settings, and `Display.AppWindows`.
- **Tests:** Debug App Extension flood harness; mailbox bounds/loss tests and production non-connect auth/ACK-route dispatch checks in [`Tests/AppExtensionDeliveryTests.py`](Tests/AppExtensionDeliveryTests.py). Full production `AppExtension` sync/health lifecycle is covered by [`Tests/AppExtensionContentLifecycleTests.py`](Tests/AppExtensionContentLifecycleTests.py). Approval/trust persistence and full HTTP parser coverage remain gaps.
- **Common mistakes:** Identity is `bundleId` plus normalized `clientId`, not bundle ID alone. Preserve ignored cooldown, approval timeout, racing-connect grace, bounded message queue, and UI deferral.

### [`MakeItHome/Managers/SimpleHttpServer.swift`](MakeItHome/Managers/SimpleHttpServer.swift)

Loopback HTTP server for packaged widget resources, board JSON APIs, and the App Extension protocol.

- **Key methods:** `start`, `handleNewConnection` (including asynchronous status-response dispatch), `parseRequest`, `handleRequest`, `loadOrSaveJson`, and MIME mapping.
- **Called by:** `TopWKWV.initHttpServer`; Safari/background clients connect to port 19494.
- **Tests:** App Extension flood harness exercises the real listener; [`Tests/AppExtensionTransportTests.py`](Tests/AppExtensionTransportTests.py) exercises real loopback status/ACK transport with production auth and waiter methods. Broader parser/path coverage remains a gap.
- **Common mistakes:** Keep `acceptLocalOnly`, the request-size ceiling, single-response connection close, and main-thread handoff for extension state.

### [`MakeItHome/Views/Overscreen/WidgetZoneView.swift`](MakeItHome/Views/Overscreen/WidgetZoneView.swift)

Native owner of the Widgets Zone. Hosts the shared parent `WKWebView`, translates bridge messages, manages reliable native-to-page delivery, creates persistent native child web views for My Widgets/search, and starts the local resource server.

- **Key symbols:** `loadTopWKWB`, `WidgetZoneDefaultWidgetSettings`, `ClipboardPreviewImage`, `TopWebView`, `TopWebViewCoordinator.handleJSMessage`, `PersistentNativeWebViewHost`, `NativeWebViewStateStore`, `TopWKWV.sendCurrentSettings`, `TopWKWV.syncNativeWebViews`, and `JSMessage`.
- **Depends on:** [`widgets.html`](MakeItHome/Resources/assets/widgets.html), [`script.js`](MakeItHome/Resources/assets/script.js), clipboard/calendar/extension managers, and [`SimpleHTTPServer`](MakeItHome/Managers/SimpleHttpServer.swift).
- **Tests:** Native queue capacity/order is covered by [`Tests/ClipboardResourceStressTests.swift`](Tests/ClipboardResourceStressTests.swift); WebKit bridge rendering and persistence remain manual.
- **Common mistakes:** Do not reload on ordinary SwiftUI updates. Keep child web views alive when only geometry/visibility changes, bound and queue native-to-page messages across navigation, invalidate stale in-flight delivery callbacks, use dedicated handlers for large localization/sync payloads, keep image previews bounded before they reach WebKit without altering the native clipboard payload, and persist built-in widget visibility through `WidgetZoneDefaultWidgetSettings` rather than page storage.

### [`MakeItHome/Resources/assets/widgets.html`](MakeItHome/Resources/assets/widgets.html)

Semantic DOM and English fallbacks for navigation, clipboard, notes/tasks, calendar, custom widgets, search, settings, and extension permissions.

- **Key subparts:** `data-i18n*` collection/dispatch; native web-view placeholders; settings sections; `widgetLocalization` request.
- **Called by:** `TopWKWV` through the local server; behavior comes from [`script.js`](MakeItHome/Resources/assets/script.js).
- **Tests:** Build validates the string catalog; UI behavior is manual.
- **Common mistakes:** Keep visible fallbacks in English and add every semantic key to `Localizable.xcstrings`. Keep the invisible `clipboard-notch-spacer` as the first persistent grid child and exclude it from clipboard clear/replace operations. Keep paragraph column CSS scoped to direct children so Onsen’s `.left`/`.right` form labels remain interactive.

### [`MakeItHome/Resources/assets/script.js`](MakeItHome/Resources/assets/script.js)

Widgets Zone client controller: bridge messages, clipboard DOM, section switching, settings, localization registration, search state/gestures, native-web-view geometry sync, extension permission rendering, and custom-widget persistence.

- **Key functions:** `sendMessage`, `receiveMessage`, `appendClipboardItems`, `renderClipboardRichText`, `registerLocalizations`, `localizedString`, `syncNativeWebViews`, `applyDefaultWidgetVisibility`, `openApp`, search handlers, extension permission handlers, and My Widgets creation/update.
- **Depends on:** DOM from [`widgets.html`](MakeItHome/Resources/assets/widgets.html) and `JSMessage` decoding in Swift.
- **Tests:** No JavaScript test runner is configured.
- **Common mistakes:** Build clipboard elements with DOM APIs, keep rich text inside its sanitized Shadow DOM, append batches oldest-first, keep bridge `type`/field names synchronized with `JSMessage`, and do not pre-arm search exit.

### [`MakeItHome/Resources/assets/components/calendar.html`](MakeItHome/Resources/assets/components/calendar.html)

The dynamically loaded Calendar widget's DOM, presentation, month grid, event placement, and event-editing form.

- **Key functions:** `generateMonth`, `getDateIndex`, `retrieveMonth`, `showDayAgenda`, `setCalendarDayInteractions`, `prevMonth`, and `nextMonth`.
- **Called by:** `loadComponent("calendar", $("#app-calendar"))` in [`widgets.html`](MakeItHome/Resources/assets/widgets.html); calendar bridge messages are handled in [`Calendar.swift`](MakeItHome/Managers/Widgets/Calendar.swift).
- **Tests:** Manual WebKit verification; check Monday-, Sunday-, and Saturday-starting months plus February and six-week months, inline event visibility beneath the day chip, the one-second hover-row expansion/reset, the bounded appointment detail card from both month and day views, all-day alongside timed events, and day versus appointment click behavior in the half-hour agenda.
- **Common mistakes:** JavaScript weekdays are Sunday-first while the UI labels are Monday-first. Render only the five or six rows required by the selected month from the 42-cell maximum, retain the visible trailing dates for event-range and lookup consistency, keep event controls from bubbling to the day agenda, keep all-day events out of timed slots, and keep styles scoped to `#app-calendar`.

### [`MakeItHome/Resources/assets/onsenui/`](MakeItHome/Resources/assets/onsenui/)

Vendored Onsen UI 2.12.9 distribution from the official `onsenui` npm package. The Widgets Zone loads its packaged CSS and JavaScript directly, so it remains available without an external network dependency.

- **Called by:** [`widgets.html`](MakeItHome/Resources/assets/widgets.html).
- **Common mistakes:** Replace the distribution coherently from a verified official package rather than editing minified output independently. Preserve the package license and keep `package.json`, source modules, stylesheets, type declarations, and bundles on the same version.

### [`Localizable.xcstrings`](Localizable.xcstrings)

Canonical native and Widgets Zone string catalog for all configured localizations.

- **Called by:** SwiftUI/Foundation localization and `TopWebViewCoordinator.sendWidgetLocalizations`.
- **Validation:** Compiled by the Xcode build.
- **Common mistakes:** Do not add a web fallback key without the corresponding catalog entry; preserve semantic `widgets.…` names.

### [`MakeItHome/Managers/New Group/Clipboard.swift`](MakeItHome/Managers/New%20Group/Clipboard.swift)

In-memory clipboard history, pasteboard polling, deduplication, multi-representation capture/replay, file previews, drag-in, and page message production.

- **Key symbols:** `Clipboard.checkClipboard`, `setCaptureEnabled`, `selectElement`, `checkElementsForSending`, `sendHistorySnapshot`, and `Element.rawTypes`/`setRtf`/`getItem`.
- **Called by:** `DisplaysManager`, `Static.EnableClipboardCapture`, and widget bridge messages.
- **Tests:** Collection bounds and FIFO behavior are stress-tested by [`Tests/ClipboardResourceStressTests.swift`](Tests/ClipboardResourceStressTests.swift); real pasteboard/Quick Look/WebKit behavior remains manual.
- **Common mistakes:** Disabled capture must synchronize a baseline so re-enabling does not import stale content. Preserve raw pasteboard representations, mutate thumbnail state on main, batch oldest-first page updates, and retain the 30-item bound.

### [`MakeItHome/Managers/Widgets/Calendar.swift`](MakeItHome/Managers/Widgets/Calendar.swift)

EventKit adapter for listing calendars and fetching, creating, updating, and deleting events requested by the widget page.

- **Key methods:** `Calendar.receive`, `fetchEvents`, `listCalendars`, and `extractEventDetails`.
- **Called by:** `TopWebViewCoordinator.handleJSMessage`.
- **Tests:** No focused calendar tests; requires Calendar permission and manual validation.
- **Common mistakes:** Keep page date/time formats synchronized and never assume permission was granted before EventKit operations.

### [`MakeItHome/Managers/Capture/Views/AppExtensionView.swift`](MakeItHome/Managers/Capture/Views/AppExtensionView.swift)

Shared native App Extension `WKWebView`, its script-message bridge and legacy navigation fallback, container loading, and current-app presentation.

- **Key symbols:** `AppExtensionWebView.sharedWKWV`, `AppExtensionWebViewCoordinator` and `WeakAppExtensionMessageHandler` (including combined `focusOnMe`/status routing), `AppExtensionWKWV.setCurrentApp`, `exiting`, and `forceReload`.
- **Depends on:** [`MakeItHome/Resources/assets/appExtensionView.html`](MakeItHome/Resources/assets/appExtensionView.html) and `AppExtension`.
- **Tests:** [`Tests/AppExtensionDeliveryTests.py`](Tests/AppExtensionDeliveryTests.py) compiles production dispatch with WebKit/process doubles for frame/source checks, reconnect/revocation and weak-handler lifetime. The actual host/carousel rendering and recovery are exercised by [`Tests/SafariCarouselWebKitTests.py`](Tests/SafariCarouselWebKitTests.py); installed Safari integration remains manual.
- **Common mistakes:** Navigation replaces the JavaScript context; notify the manager so every extension container is recreated and queued messages are flushed, then restore the approved visible owner's presentation so the new document requests missing cached previews. Focus the displayed extension owner and deliver any combined follow-up status only after the native close/focus handoff.

### [`MakeItHome/Resources/assets/appExtensionView.html`](MakeItHome/Resources/assets/appExtensionView.html)

JavaScript container surface injected into the native App Extension web view.

- **Called by:** `AppExtensionWKWV`; native `AppExtension.syncIfNeeded` invokes its container/content/message functions.
- **Tests:** Browser doubles and isolated real WebKit host/carousel rendering in [`Tests/SafariCarouselWebKitTests.py`](Tests/SafariCarouselWebKitTests.py).
- **Common mistakes:** Set `isShowing` before invoking show callbacks so visibility checks and view-readiness reporting work on the first reopen. Keep invoked JavaScript function names synchronized with `AppExtension.swift`. `focusOnMe` accepts an optional status string as the bridge `value`; legacy calls without it remain valid. Keep container creation and identical content delivery idempotent; use the optional `forceReload` argument only for an explicit Reset. Keep focus and follow-up status in one `appExtensionMessage` post with the displayed bundle in `strId`; only older native releases use the custom URL fallback.

### [`MakeItHome/MakeItHome Web Extension/MakeItHome_Web_Extension.entitlements`](MakeItHome/MakeItHome%20Web%20Extension/MakeItHome_Web_Extension.entitlements)

Required, non-secret signing input for both Debug and Release of the Safari Web Extension target. It enables App Sandbox for the native extension handler; browser permissions remain in `manifest.json`.

- **Common mistakes:** Keep this file in source control via its explicit `.gitignore` exception. Do not copy the parent app's Calendar or server entitlements into the extension; the native handler only echoes messages and browser networking lives in `background.js`.

### [`MakeItHome/MakeItHome Web Extension/Resources/manifest.json`](MakeItHome/MakeItHome%20Web%20Extension/Resources/manifest.json)

Manifest V2 declaration for the macOS-only Safari extension, with `background.scripts` and explicit `background.persistent: true`, plus the matching `browser_action` popup. Safari makes all Manifest V3 background pages nonpersistent; this desktop manifest deliberately uses V2 to request background retention while Safari is running and the extension is enabled. Existing tabs, active-tab, web-navigation, storage, and alarms permissions are unchanged.

- **Entrypoints:** [`background.js`](MakeItHome/MakeItHome%20Web%20Extension/Resources/background.js), [`content.js`](MakeItHome/MakeItHome%20Web%20Extension/Resources/content.js), and [`popup.html`](MakeItHome/MakeItHome%20Web%20Extension/Resources/popup.html).
- **Icon source:** [`Assets/logo-classic.png`](Assets/logo-classic.png) supplies the bundled `Resources/Icon.png` and all settings/toolbar PNG sizes under `Resources/images/`; regenerate those sizes from this source when replacing the MakeItHome Web icon.
- **Common mistakes:** Any permission or asset change must also be present in the extension target resource phase. Update manifest `version` with the app/extension marketing version; changing only the native app version leaves browser metadata stale. Safari receives the extension packaged in the installed normal app; the isolated Test app does not embed it.

### [`MakeItHome/MakeItHome Web Extension/Resources/background.js`](MakeItHome/MakeItHome%20Web%20Extension/Resources/background.js)

Safari-side App Extension client: stable client identity, secret/token generation, connection/reconnect policy, adaptive status polling, tab tracking, screenshot pacing, and HTML/JavaScript payload delivery.

- **Key functions:** `makeRequestUrl`, `getRollingToken`, `connect`, `checkOpenTabs`, `markTabsDirty`, `trimPreviewCache`, `sendAllTabsScreenshot`, `captureScreenshotAndSend`/`captureScreenshot`, `makeFrameFingerprint`, `safariAPI`, `getCurrentTabInfo`, `resolveSafariTab`, `focusOnTab`, `requestTabFocus`, `handleStatusEvents`, `fetchJSONWithTimeout`, screenshot/status loops, `setHtmlContent`, and `sendJsMessage`.
- **Depends on:** loopback `/appExtension/*`, Chrome/Safari extension APIs, and packaged extension HTML.
- **Tests:** [`Tests/WebExtensionTests.cjs`](Tests/WebExtensionTests.cjs) checks the persistent desktop manifest/toolbar contract and executes the production browser/view scripts with deterministic API/DOM doubles. The fixture exposes only `chrome.browserAction` so an accidental MV3-only startup call fails. App flood harness validates the native protocol; signed Safari idle retention/capture/permission behavior remains manual.
- **Common mistakes:** Do not reset a valid secret on `connectionIgnored`/`connectionDeferred`; honor server-suggested poll intervals, abort timed-out fetches, back off unavailable connections, and bound preview sends even during recovery. Send metadata without waiting for capture, acknowledge only successfully delivered frame versions and the matching preview-delivery revision, recover missing frames on `safariViewReady`, and supply unchanged HTML without `forceReload` on reconnect so the native view retains its DOM.

### [`MakeItHome/MakeItHome Web Extension/Resources/assets/extension.html`](MakeItHome/MakeItHome%20Web%20Extension/Resources/assets/extension.html)

Authoritative Safari tab-carousel markup, styles, and controller injected into the native App Extension web view with bundled Swiper 11.1.4.

- **Key functions:** `syncSafariTabs`, `applySafariScreenshots`, `rememberSafariPosition`, `restoreSafariPosition`, `refreshSafariSlides`, `noteSafariInteraction`, `safariIsInteracting`, `trimSafariPreviews`, `releaseSafariPreview`, `updateSafariTabIcon`, and `releaseSafariTabIcon`.
- **Behavior:** Shows only tabs with cached previews, with their titles and favicons alongside the image. Missing/failed/unsupported icons use a globe, and icon updates retain preview nodes and position. Metadata updates titles without creating uncaptured cards; a fixed title row stays visible for landscape and portrait images. Reports retained preview IDs at each show to recover missing cached frames after content loss. Keeps a separate metadata-derived ID order and selected tab identity/fractional position across metadata updates, reopen, orientation changes, and reinjection; defers new card membership during input and preserves identical images; uses a clamped index if the selected tab closes. Keyboard handling is disabled while hidden; layout/library retries are bounded.
- **Tests:** [`Tests/WebExtensionTests.cjs`](Tests/WebExtensionTests.cjs); real Swiper tested in isolated headless Chrome and the production host in isolated, nonpersistent macOS WebKit via [`Tests/SafariCarouselWebKitTests.py`](Tests/SafariCarouselWebKitTests.py). Installed Safari integration remains manual.
- **Common mistakes:** Preserve position before destroying an instance, batch initial DOM insertion, avoid layout updates per screenshot, scope CSS to `#safariTabs`, and revoke every retired object URL.

### [`MakeItHome/MakeItHome Web Extension/Resources/content.js`](MakeItHome/MakeItHome%20Web%20Extension/Resources/content.js)

No-op entry point retained by manifest website matches for Safari website-access permissions. Tab metadata and capture work live in the background script; never restore the old one-second heartbeat per webpage.

### [`MakeItHome/MakeItHome Web Extension/SafariWebExtensionHandler.swift`](MakeItHome/MakeItHome%20Web%20Extension/SafariWebExtensionHandler.swift)

Native Safari Web Extension request handler that echoes extension messages back through the extension context.

- **Entrypoint:** `SafariWebExtensionHandler.beginRequest`.
- **Tests:** No focused extension-host tests.
- **Common mistakes:** Keep this application-extension-safe; browser background logic does not run here.

### [`MakeItHome/Views/MenuBarView.swift`](MakeItHome/Views/MenuBarView.swift)

Menu-bar controls and preferences for display edges, sensitivity, app limits, launch behavior, shortcuts, clipboard capture, and Safari extension installation.

- **Key methods:** `openSafariWebExtensionSettings`, `installSafariWebExtension`, `refreshInstallWebExtensionVisibility`, and per-display settings UI.
- **Depends on:** `Static`, `Display`, and SafariServices.
- **Tests:** Manual.
- **Common mistakes:** Persist through the owning `Static`/`Display` property rather than duplicating UserDefaults logic in the view.

### [`MakeItHome/Views/Overscreen/NavigateZoneView.swift`](MakeItHome/Views/Overscreen/NavigateZoneView.swift)

Secondary navigation web view used by page bridge navigation requests.

- **Key symbols:** `NavigateWebView`, `NavigateCoordinator`, and `NavigateWKWV`.
- **Called by:** Widget `navUrl`/`navPos` messages.
- **Tests:** Manual.
- **Common mistakes:** This is distinct from persistent native My Widgets/search hosts.

### [`MakeItHome/Managers/Space/SpaceObserver.swift`](MakeItHome/Managers/Space/SpaceObserver.swift)

Private-window-list Space inspection model and delegate surface.

- **Key symbols:** `SpaceObserver.updateSpaceInformation`, `SpaceObserverDelegate`, `Space`.
- **Tests:** None.
- **Common mistakes:** Treat this as supporting/experimental infrastructure; the critical active Space contract is enforced through `Display` placeholders and `PreviewFlowGate`.

### [`MakeItHome/SwifterUI/`](MakeItHome/SwifterUI/)

AppKit/SwiftUI window wrappers and graphics helpers. [`SwifterWindow.swift`](MakeItHome/SwifterUI/SwifterWindow.swift) and [`SwifterPanel.swift`](MakeItHome/SwifterUI/SwifterPanel.swift) own reusable hosting windows/panels; [`SwifterPlaceholder.swift`](MakeItHome/SwifterUI/SwifterPlaceholder.swift) creates the Space holder detected by `Display`; [`CoreImage.swift`](MakeItHome/SwifterUI/CoreImage.swift) contains image helpers. Other files are small supporting UI wrappers.

- **Called by:** Startup panels, menu UI, display/Space tracking, and preview processing.
- **Tests:** No focused tests.
- **Common mistakes:** A placeholder’s title/window identity is part of Space detection. AppKit window/layer operations remain main-thread-only. Use `SwifterPanel.show(centered: true)` for the Screen Recording instruction video so centering uses its final hosting size and the screen's visible frame.

### [`MakeItHome/Views/`](MakeItHome/Views/)

Small SwiftUI panels for activation, permissions, onboarding, updates, menu UI, and test previews. The behavior-heavy owners have separate sections above.

- **Important files:** [`HowToRecordingPermissionView.swift`](MakeItHome/Views/HowToRecordingPermissionView.swift), [`RequestAutomationPermissions.swift`](MakeItHome/Views/RequestAutomationPermissions.swift), and [`NoRecordingPermissionView.swift`](MakeItHome/Views/NoRecordingPermissionView.swift).
- **Tests:** Manual permission/onboarding flows.
- **Common mistakes:** Permission prompts affect app activation and overscreen lifecycle; route state changes through the established owners.

### [`MakeItHome/StressTests/`](MakeItHome/StressTests/)

Debug-only manual performance and lifecycle harnesses, compiled only by the `MakeItHome Test` target. [`StressTestSupport.swift`](MakeItHome/StressTests/StressTestSupport.swift) parses launch options, owns the explicit test host window, suppresses blocking onboarding/start-at-login modals only for explicit stress runs, selects a root, and writes atomic file or explicitly marked stdout result handshakes; state-changing stress cycles use a randomized 0.25–0.75 second delay by default. [`VirtualOverscreenStressTest.swift`](MakeItHome/StressTests/VirtualOverscreenStressTest.swift) exercises SceneKit/app-count churn; [`AppExtensionStressTest.swift`](MakeItHome/StressTests/AppExtensionStressTest.swift) floods the real authenticated local server with bounded workers and intentionally does not throttle requests as lifecycle cycles; [`RuntimeLifecycleStressTest.swift`](MakeItHome/StressTests/RuntimeLifecycleStressTest.swift) embeds the full production `ContentView`/`DisplaysManager`/`ScreenRecorder`/`CapturePreview` graph, captures existing visible application windows into the real SceneKit model, and cycles recorder profiles, consumer cancellation, `CaptureView` sleep/restart, and native Clipboard-to-Widgets-Zone traffic together; it logs metrics every five seconds and fails on 15 seconds without recorder progress; [`RealUsageStressTest.swift`](MakeItHome/StressTests/RealUsageStressTest.swift) runs the normal app runtime while seeded UI automation rapidly invokes the production top/bottom shortcut endpoint, clicks random preview or visible-window title-bar points, and copies image-heavy unique file URLs. Despite its legacy name, [`run-real-usage.sh`](MakeItHome/StressTests/run-real-usage.sh) builds once with a dSYM and runs all four modes sequentially for 20 active minutes by default, staging `/Users/riccardo/Pictures/instagramToReload` (or `MIH_STRESS_COPY_SOURCE`) inside the Test sandbox. `MIH_STRESS_COPY_SOURCE=bundled` reads packaged image fixtures, and `MIH_STRESS_RESULT_CHANNEL=stdout` retains atomic controller-side result files without requiring access to the protected app container.

- **Commands:** See [`MakeItHome/StressTests/README.md`](MakeItHome/StressTests/README.md).
- **Diagnostics:** The orchestrator retains a permission-restricted bundle under `~/Library/Logs/MakeItHomeStress/` containing the full build log/settings, dSYM and UUIDs, per-mode stdout/stderr and debug-level unified logs, LLDB crash-time all-thread backtraces/registers, periodic symbolized `sample` stacks, watchdog stacks, results/status, and new Test-bundle Diagnostic Reports. It never deletes these artifacts; sandbox staging is temporary. [`StressDiagnosticChecks.zsh`](MakeItHome/StressTests/StressDiagnosticChecks.zsh) distinguishes primary Test-app crashes from related CPU/resource diagnostics and rejects crashes after a completion record. Its [fixture tests](Tests/StressDiagnosticChecksTests.zsh) run through `Tests/run.sh`. Never edit the running wrapper or its sourced helper; launch an immutable snapshot when concurrent wrapper work is necessary.
- **Common mistakes:** Never make stress mode reachable in Release and never turn bounded worker counts, sampling cadence, or the real-usage selection task into unbounded work. Preserve all result handshakes and diagnostic streams. The runtime lifecycle and real-usage modes must restore the pasteboard only when the user has not changed it since the final synthetic write, remove temporary linked fixtures, and keep synthetic clipboard payloads out of logs. Real-usage automation requires the Test app's Screen Recording and Accessibility permissions, reports each missing grant by name, takes control of the pointer/clipboard/window focus, and must remain isolated from the normal app identity.

### [`Tests/PreviewFlowGateTests.swift`](Tests/PreviewFlowGateTests.swift)

Dependency-free executable regression suite that compiles the production `PreviewFlowGate` with a small test harness.

- **Coverage:** fullscreen staleness/settling, Space-change timeout, placeholder topology/repair, multi-display isolation, cross-Space activation/focus, recorder eligibility, and extension-click cancellation of queued presentation work with time-bounded pointer re-arm.
- **Runner:** [`Tests/run.sh`](Tests/run.sh).
- **Common mistakes:** Test the real production file, not a copied model. Keep scenarios deterministic and free of AppKit permissions.

### [`Tests/ExtensionFocusHandoffTests.py`](Tests/ExtensionFocusHandoffTests.py)

Extracts and compiles the production `Display.focusAppExtension` method with deterministic UI/process doubles and the real `PreviewFlowGate`. It asserts complete close geometry, animation/pressure reset, immutable PID selection despite a drifted app cache, cooperative activation ordering, follow-up delivery at the end of a 120 ms close, Reduce Motion, cancellation of a superseded animation, stale-show cancellation, and invalid-owner/fullscreen guards. Runs through [`Tests/run.sh`](Tests/run.sh), requiring Python 3 and Swift. This does not simulate Safari permissions or WindowServer; isolated native fixture apps separately verified real AppKit cooperative activation.

### [`Tests/AppExtensionDeliveryTests.py`](Tests/AppExtensionDeliveryTests.py)

Extracts and compiles production non-connect secret/token checks, token validation, reliable polling/ACK routes, `AppExtension` mailbox methods, and coordinator script-message dispatch with dependency doubles. Tests invalid/missing credentials, malformed/oversized ACKs, lost-poll redelivery, legacy consumption, repeated messages, wrong frames/views/bundles, reconnect/revocation during animation, and weak-handler lifetime. It does not exercise the full connection approval path or real HTTP/WebKit transport. Runs through [`Tests/run.sh`](Tests/run.sh).

The native delivery suite also compiles production navigation completion and asserts visible-document recovery without reopening hidden or retired identities.

### [`Tests/AppExtensionTransportTests.py`](Tests/AppExtensionTransportTests.py)

Compiles the production HTTP server, manager waiting-response method, auth/ACK routes and mailbox/waiter methods using the [delivery fixture](Tests/AppExtensionDeliveryTests.py) for UI/trust doubles. Uses a random loopback port and synthetic commands to verify immediate wake, ACKs while a poll is parked, lost responses, repeated ACKs, receiver disconnect, invalid credentials/receipt IDs, tokens aging out during a valid wait, timeout/cancellation/replacement, revocation, and 30 wake/ACK cycles. Run separately with `python3 Tests/AppExtensionTransportTests.py`; local listener permission is required. Does not open Safari or verify installed extension permissions, capture or UI activation.

### [`Tests/AppExtensionContentLifecycleTests.py`](Tests/AppExtensionContentLifecycleTests.py)

Compiles the entire production `AppExtension` class with controlled WebKit/owner doubles. Covers identical-content no-ops, transient/unknown health errors, confirmed missing DOM, explicit forced Reset, and cancellation of old sync/health results across document generations and shared-view replacement and connection teardown. Runs through [`Tests/run.sh`](Tests/run.sh).

### [`Tests/SafariCarouselWebKitTests.py`](Tests/SafariCarouselWebKitTests.py)

Loads the actual App Extension host, bundled Swiper and Safari carousel in a nonpersistent `WKWebView` using generated JPEGs and literal synthetic titles. Checks click/reopen, identical HTML/image no-ops, cache/order retention across content changes, explicit Reset, saved selection and fractional position during real wheel input/background card arrival, portrait/landscape title geometry, orientation changes and repeated hidden-frame replacement. Run separately with Python 3 and Swift on macOS; it does not open Safari, activate a window, capture the screen or verify installed extension permissions.

The WebKit carousel suite additionally checks long-title containment and actual document navigation followed by show/cache replay, with saved selection, orientation and unique cards.

### [`Tests/ClipboardResourceStressTests.swift`](Tests/ClipboardResourceStressTests.swift)

Dependency-free stress regression that compiles the production [`ClipboardResourceBounds.swift`](MakeItHome/Helpers/ClipboardResourceBounds.swift) helper and pushes 100,000 history inserts plus 100,000 queued page messages.

- **Coverage:** newest-first 30-item history eviction, fixed 128-message queue capacity, overflow behavior, and FIFO drain order.
- **Runner:** [`Tests/run.sh`](Tests/run.sh).
- **Common mistakes:** Keep the stress inputs large enough to expose unbounded growth while leaving the production collection helper as the implementation under test.

### [`Tests/PreviewTitleTextTests.swift`](Tests/PreviewTitleTextTests.swift)

Dependency-free regression suite that compiles the production [`PreviewTitleText.swift`](MakeItHome/Helpers/PreviewTitleText.swift) helper.

- **Coverage:** empty and Unicode titles, punctuation wrapping, forced wrapping, and zero/negative character-limit clamping.
- **Runner:** [`Tests/run.sh`](Tests/run.sh).
- **Common mistakes:** Exercise the production helper directly and retain a zero-limit case because transient narrow window geometry triggered the original crash.

### [`Podfile`](Podfile)

Empty CocoaPods target scaffolding; no pods are declared and no workspace/lockfile is tracked.

- **Common mistakes:** Do not tell contributors to run `pod install` unless dependencies are actually added and the workflow is intentionally adopted.

### [`Assets/templates/`](Assets/templates/)

Angular/Fuse source templates and built distributions used for the Notes/Tasks experience. `fuse-makeithome` is the product-specific source/template tree; `fuse-demo-v19.0.0` is a large upstream reference/demo.

- **Output relationship:** Hashed bundles are copied into [`MakeItHome/Resources/assets/fuse/`](MakeItHome/Resources/assets/fuse/) for packaging.
- **Tests:** No root npm workflow is documented or verified.
- **Common mistakes:** Do not edit copied hashed output without identifying and rebuilding from the authoritative Angular source.

## Features and Recurring Development Pitfalls

### Edge overscreen app switching — Shipped

- **Behavior:** Crossing enabled display edges opens live app/window previews; selecting a preview activates its exact window.
- **Flow and owners:** pointer timer → `DisplaysManager.updateMousePosition` → `Display.active` → `showWindow` → `CapturePreview.setScreenApps`.
- **Constraints:** Accessibility and Screen Recording permissions; per-display geometry; exact-window activation across Spaces.
- **Tests and gaps:** Flow gate is automated; real multi-display pointer/WindowServer behavior is manual.

### Widgets Zone, My Widgets, and search — Shipped

- **Behavior:** The top edge exposes configurable built-in widgets (Clipboard and Calendar enabled by default; Notes and Tasks disabled by default), custom web widgets, settings, and full-screen web search. Native child web views persist sessions/navigation.
- **Flow and owners:** `WidgetZoneView` → shared `TopWKWV` → local assets → three WebKit handlers → native managers/child web views.
- **Constraints:** Do not reload the parent during normal transitions; preserve search geometry/pointer rules; custom URLs can load remote websites in default persistent WebKit stores.
- **Tests and gaps:** No automated WebKit or JavaScript suite.

### External App Extension API — Shipped, documentation incomplete

- **Behavior:** Approved local clients can attach interactive HTML/JavaScript content to an app preview and poll visibility/status.
- **Flow and owners:** loopback server → `AppExtensionManager` auth/approval → `AppExtension` → shared App Extension web view → `Display.AppWindows`.
- **Constraints:** user approval, stable identity, secret plus rolling token, loopback-only listener, bounded body/message queues.
- **Tests and gaps:** Manual/demo use and debug server flood exist; non-connect auth/ACK-route regression checks exist; approval/trust/parser coverage and the public tutorial/API reference remain incomplete.

### Bundled Safari Web Extension — Shipped groundwork

- **Behavior:** Tracks Safari tabs and supplies a tab-switching surface after approval. The 2.1.1 development tree adds titles and favicons on preview-bearing tabs, bounded preview caches/batches, slower idle capture, retained carousel position across reopen/recovery, and a combined native-focus/browser-selection handoff with acknowledged delivery and actual active-tab verification.
- **Constraints:** Safari extension permissions, local server availability, persisted browser secret, and reconnect cooldown/backoff.
- **Tests and gaps:** Embedded target builds; browser/view regression doubles and real Swiper synthetic checks cover the 2.1.1 changes. Installed Safari permissions, active-tab capture races, CPU/memory profiling, private browsing, and multiple-window integration remain manual; broader-browser variants are planned.

### Fullscreen or idle leaves previews frozen

- **Symptom / wrong assumption:** Preview updates and new-window discovery never resume after fullscreen, sleep/idle, or a Space animation.
- **Cause and invariant:** Window scans can return early while sticky fullscreen/Space/placeholder state continues blocking capture.
- **Risk area:** `Display.checkForScreenshot` and `PreviewFlowGate`.
- **Safe pattern / regression check:** Derive state from fresh topology, run stale recovery every tick, debounce exits, and cap transitions; run `./Tests/run.sh`.
- **Status:** Previously fixed failure mode and active regression risk.

### Rapid capture start/stop crashes

- **Symptom / wrong assumption:** ScreenCaptureKit crashes in configuration equality or a stale start resurrects a stopped stream.
- **Cause and invariant:** Suspended start/update/stop operations race on one `SCStream`.
- **Risk area:** `ScreenRecorder` and `CaptureEngine`.
- **Safe pattern / regression check:** Operation gate plus intent/run IDs, stop reservation before suspension, per-run newest-one frame channels, and engine cleanup on consumer termination. Run `./Tests/run.sh`, build, and run `runtime-lifecycle` including cancellation and frame/progress assertions.
- **Status:** Previously fixed failure mode and active regression risk.

### Full-screen search exits to an invisible Widgets Zone

- **Symptom / wrong assumption:** Search closes, but the still-loaded widget page remains outside the visible top zone or the whole overscreen stops reopening.
- **Cause and invariant:** Restoring only height, recreating WebKit, or broadening normal hide/pointer logic breaks retained geometry/state.
- **Risk area:** `Display.onFullOverscreenMode`, `outFullOverscreenMode`, `hideWindow`, and search logic in `script.js`.
- **Safe pattern / regression check:** Restore height and offset together; scope exit arming to actual parent-page downward movement; manually verify search with pointer movement over native results.
- **Status:** Previously fixed failure mode and active regression risk.

### Extension “Allow” prompt loops forever

- **Symptom / wrong assumption:** Concurrent browser reconnects repeatedly prompt and rotate secrets before the client converges.
- **Cause and invariant:** Racing empty-token `/connect` requests arrive immediately after approval.
- **Risk area:** `AppExtensionManager.httpRequest`, recent-approval tracking, and Safari reconnect handling.
- **Safe pattern / regression check:** Reuse the approved identity/connection within the grace window; run the App Extension stress mode and manually validate ignored/deferred retry.
- **Status:** Previously fixed failure mode and active regression risk.

### Safari previews disappear or repeat after switching/refresh

- **Cause and invariant:** A replaced WebKit document loses its show state; a stalled Safari API blocks refresh; failed metadata delivery can leave images acknowledged but absent; a switch away/back can cache the intervening tab's image. Title/inventory updates must not replace a pending capture's state object or force unchanged-image encoding.
- **Owners:** `AppExtensionWebViewCoordinator.webView(_:didFinish:)`, Safari `checkOpenTabs`, `captureScreenshotAndSend`/`captureScreenshot`, and the screenshot loop.
- **Regression checks:** Browser doubles cover capture/metadata deadlines, late callbacks, away/back switches, stable title/inventory state, metadata failure, full-frame fingerprints, callback-only APIs and unchanged-image encoding. Native delivery and isolated WebKit tests cover document recovery, long titles and unique cards. Waiting status responses and independent command receipt remove the idle poll and processing delays; screenshot deadlines resist title-ticker starvation and background-navigation invalidation. Signed Safari multi-window switching, website permissions, actual capture and CPU/memory remain manual checks.
- **Status:** Covered in the 2.1.1 development tree; signed Safari integration remains unverified.

## Interface Ownership Map

- macOS app entry and Debug stress selection → [`MakeItHomeApp`](MakeItHome/MakeItHomeApp.swift).
- Menu-bar settings and actions → [`MenuBarView`](MakeItHome/Views/MenuBarView.swift).
- Overscreen edge/pointer/window behavior → [`DisplaysManager` and `Display`](MakeItHome/Managers/Displays.swift).
- SceneKit preview interaction → [`CapturePreview.CaptureView`](MakeItHome/Managers/Capture/Views/CapturePreview.swift).
- Widgets Zone screen/DOM → [`widgets.html`](MakeItHome/Resources/assets/widgets.html) + [`script.js`](MakeItHome/Resources/assets/script.js) + [`TopWebViewCoordinator`](MakeItHome/Views/Overscreen/WidgetZoneView.swift).
- Widget page messages → `widgetMessage`; localization dictionaries → `widgetLocalization`; child-web-view geometry → `nativeWebView`, all registered in [`TopWebView.makeNSView`](MakeItHome/Views/Overscreen/WidgetZoneView.swift).
- App Extension HTTP routes `/connect`, `/setHtmlContent`, `/sendJSMessage`, `/checkStatus`, `/ackStatusMessages`, and compatibility `/waitForStatus` → [`AppExtensionManager.httpRequest`](MakeItHome/Managers/AppExtension.swift); real `/checkStatus` transport enters `waitForStatusResponse` for authenticated asynchronous waiting.
- App Extension page messages → `appExtensionMessage`, registered in [`AppExtensionWebView.makeNSView`](MakeItHome/Managers/Capture/Views/AppExtensionView.swift); legacy `myapp://message` is compatibility-only.
- Static widget resources and `/fuse/api/*` JSON → [`SimpleHTTPServer.handleRequest`](MakeItHome/Managers/SimpleHttpServer.swift).
- External extension permission list/request/revoke UI → widget settings → `TopWebViewCoordinator` → [`AppExtensionManager`](MakeItHome/Managers/AppExtension.swift).
- Safari extension public surface and permissions → [`manifest.json`](MakeItHome/MakeItHome%20Web%20Extension/Resources/manifest.json); long-lived browser behavior → [`background.js`](MakeItHome/MakeItHome%20Web%20Extension/Resources/background.js).
- Global keyboard shortcuts → [`GlobalShortcutManager`](MakeItHome/GeneralFuncs.swift) → `Display.openSideFromShortcut` / `toggleDisabledFromShortcut`.

## Build, Run, Test, Debug, and Release

Prerequisites: macOS 12.3 or later, Xcode with the macOS SDK, and Swift 5 language mode. First resolution/build may contact GitHub for Swift Collections. Running the full app requires Screen Recording and Accessibility; calendar features require Calendar permission.

Inspect targets and schemes:

```sh
xcodebuild -project MakeItHome.xcodeproj -list
```

Build the normal Debug app and embedded Safari extension without signing:

```sh
xcodebuild -project MakeItHome.xcodeproj -scheme MakeItHome -configuration Debug -destination 'platform=macOS' CODE_SIGNING_ALLOWED=NO build
```

The normal Debug and Release products are `MakeItHome.app`. Build the isolated stress app explicitly with:

```sh
xcodebuild -project MakeItHome.xcodeproj -scheme 'MakeItHome Test' -configuration Debug -destination 'platform=macOS' CODE_SIGNING_ALLOWED=NO build
```

The `MakeItHome Test` scheme produces `MakeItHome Test.app`; grant permissions to that app only when exercising stress harnesses.

Fast focused and resource-bound stress tests:

```sh
./Tests/run.sh
```

Safari extension browser/view regressions (requires Node.js, no packages):

```sh
node Tests/WebExtensionTests.cjs
```

Authenticated waiting responses over the real loopback HTTP server (synthetic commands; requires a local listener):

```sh
python3 Tests/AppExtensionTransportTests.py
```

Isolated production host/carousel rendering in real macOS WebKit (Python 3 and Swift required; synthetic tabs/images, no Safari or visible window):

```sh
python3 Tests/SafariCarouselWebKitTests.py
```

Manual Safari validation: close Web Inspector before idle-retention checks; leave Safari in the background beyond the previous unload interval, including with no normal webpage open, then verify connection readiness, retained cached previews and prompt tab selection. Also verify browser quit/relaunch and Mac sleep/resume reconnect cleanly. Include clicks immediately after a long idle, rapid newer clicks during a stalled selection/ACK, website title tickers and background-tab navigations during live preview updates, and Safari background suspension/resume. Run a signed Debug app, enable MakeItHome Web in Safari and grant website access plus the native App Extension approval. With many tabs and two windows, verify uncaptured tabs remain absent, titles and favicons on cached previews (including missing/failed icons and updates in both orientations), extension version 2.1.1 in Safari after installing/running the signed normal app, exact-ID selection including ID zero and minimized/moved-window targets, callbacks/Promise compatibility, same-window and other-window selection regardless of cached active flags, fresh last-focused-window status reads, stable first-seen order and fractional wheel/drag position during incoming frames/metadata, warm reopen/reconnect without reinjection, cached preview loading, preview/title retention after a selection and reopen (both edges/orientations), cached frame recovery after WebKit content loss, the 120 ms close with Reduce Motion on/off, click-to-focus from another app while hovering a different preview, Safari window focus before delayed tab selection and its single 400 ms retry (also with two windows on different Spaces), rapid successive selections/target closure during retry, lost status/ACK responses (no repeated selection), reconnect or revoke during close, unconfirmed-selection warnings, title changes, final-tab closure, saved position on reopen and orientation change, private-tab position exclusion, explicit Reset, app restart/reconnect, and permission denial/revocation. Safari can capture only the visible tab; uncaptured tabs stay absent until a preview is available; evicted or undecodable previews remove their cards. Compare Safari CPU/memory while the surface is open, hidden, and Safari is unfocused; the policy changes have not been measured in installed Safari.

Normal development run: open [`MakeItHome.xcodeproj`](MakeItHome.xcodeproj) in Xcode, select the `MakeItHome` scheme, configure signing locally, and Run. The main app and Safari extension entitlement files are source-controlled project inputs; do not remove the extension's explicit `.gitignore` exception.

Debug stress modes are launch arguments on the Debug `MakeItHome Test` scheme:

```text
--stress virtual-apps --stress-stage-seconds 5
--stress app-extension --stress-duration 30 --stress-workers 12 --stress-payload-kb 512
--stress runtime-lifecycle --stress-duration 1200 --stress-cycle-min 0.25 --stress-cycle-max 0.75 --stress-auto-exit
--stress real-usage --stress-duration 1200 --stress-cycle-min 0.25 --stress-cycle-max 0.75 --stress-auto-exit
```

Run the complete 20-minute Debug stress orchestration with its diagnostic wrapper:

```sh
./MakeItHome/StressTests/run-real-usage.sh
```

See [`MakeItHome/StressTests/README.md`](MakeItHome/StressTests/README.md) for permission requirements, safety boundaries, seeded replay, bounded overrides, and Instruments guidance. These modes launch real runtime components and may open a local listener; use a free port for overrides.

Debug WebKit using Safari’s Develop inspector; the top view sets `isInspectable` on macOS 13.3+. Debug capture/overscreen performance with Instruments Allocations and System Trace.

There is no root lint/format task, CI workflow, automated UI suite, checked-in archive/notarization script, or verified App Store release checklist. Release is therefore `Unknown — verify signing, matching bundle versions, archive, notarization/App Store submission, and release-note synchronization before publishing`.

## Test Ownership Map

- Fullscreen classification and recovery → [`PreviewFlowGateTests.swift`](Tests/PreviewFlowGateTests.swift).
- Space transition, placeholder stability/repair, and multi-display isolation → [`PreviewFlowGateTests.swift`](Tests/PreviewFlowGateTests.swift).
- Cross-Space activation, focus restoration, and extension-click presentation cancellation/re-arm → [`PreviewFlowGateTests.swift`](Tests/PreviewFlowGateTests.swift).
- Production extension-dismissal geometry/animation, Reduce Motion, immutable owner resolution, activation order, and selection delivery at the animation boundary → [`ExtensionFocusHandoffTests.py`](Tests/ExtensionFocusHandoffTests.py), using UI/process doubles.
- App Extension runtime delivery bounds, ACK identity, replacement and expiry → [`AppExtensionStatusMailboxTests.swift`](Tests/AppExtensionStatusMailboxTests.swift); production auth/ACK/polling/bridge dispatch with doubles → [`AppExtensionDeliveryTests.py`](Tests/AppExtensionDeliveryTests.py); real loopback waiting-response/ACK transport → [`AppExtensionTransportTests.py`](Tests/AppExtensionTransportTests.py).
- Capture queue retention, cancellation/channel isolation, and suspending operation serialization → [`CaptureLifecycleTests.swift`](Tests/CaptureLifecycleTests.swift).
- Stress sampler Mach thread-right lifetime → [`StressProcessSampleTests.swift`](Tests/StressProcessSampleTests.swift).
- Startup Screen Recording request interval, in-flight exclusion and persisted cursor-control onboarding state → [`ScreenRecordingPermissionGateTests.swift`](Tests/ScreenRecordingPermissionGateTests.swift); production delayed cursor-control handling with inert doubles → [`ScreenRecordingPermissionOnboardingTests.py`](Tests/ScreenRecordingPermissionOnboardingTests.py), both through [`Tests/run.sh`](Tests/run.sh). Manually verify first-launch Screen Recording approval followed by the cursor-control dialog, denial, required relaunch, already-granted access, unchanged cursor position on multiple displays, and centered video placement on small/multiple displays.
- Recorder eligibility state → [`PreviewFlowGateTests.swift`](Tests/PreviewFlowGateTests.swift); real ScreenCaptureKit lifecycle is manual.
- Preview-title wrapping and transient zero-width geometry → [`PreviewTitleTextTests.swift`](Tests/PreviewTitleTextTests.swift).
- SceneKit churn, virtual app counts, and frame updates → [`VirtualOverscreenStressTest.swift`](MakeItHome/StressTests/VirtualOverscreenStressTest.swift).
- Authenticated server concurrency, payload bounds, memory, and thread growth → [`AppExtensionStressTest.swift`](MakeItHome/StressTests/AppExtensionStressTest.swift).
- Full production-runtime ScreenCaptureKit profile transitions, populated `CapturePreview` SceneKit sleep/restart, and Clipboard-to-Widgets-Zone delivery → [`RuntimeLifecycleStressTest.swift`](MakeItHome/StressTests/RuntimeLifecycleStressTest.swift); requests the Debug app's separate Screen Recording permission, reports peak SceneKit app/window nodes, and requires manual WebKit inspection.
- Clipboard history and native-to-WebKit queue resource bounds/order → [`ClipboardResourceStressTests.swift`](Tests/ClipboardResourceStressTests.swift).
- Safari metadata, independent logical order, active gesture deferral, duplicate-frame retention, selected-cache protection, exact IDs/callback completion/window movement, preview-only cards, click/reopen/content-loss recovery and stale-image error isolation, combined click requests, browser window-focus/tab-selection ordering, 150 ms settling, one 400 ms retry and cancellation, capture pacing, polling/ACK loss and redelivery deduplication, stalled response bodies and APIs, actual selection verification, bounded cache/delivery, saved position, title safety, favicon updates/failure/stale-handler isolation, manifest/native version alignment, and object-URL lifecycle → [`WebExtensionTests.cjs`](Tests/WebExtensionTests.cjs), using API/DOM doubles.
- App Extension content sync/health generation, transient errors versus confirmed missing DOM, and explicit Reset → [`AppExtensionContentLifecycleTests.py`](Tests/AppExtensionContentLifecycleTests.py).
- Actual App Extension host/Swiper rendering, landscape/portrait image decode, click/reopen, idempotent/changed content, cached-node/order retention, live wheel input with background updates, fractional position, explicit Reset, both orientations, visible title/favicon rows, decoded favicon size/fallback, and rapid hidden-frame replacement → [`SafariCarouselWebKitTests.py`](Tests/SafariCarouselWebKitTests.py), using isolated nonpersistent WebKit and synthetic data.
- Build/resource/localization integration → the code-signing-disabled Xcode build.
- Known test gaps: App Extension approval/trust decisions, HTTP parsing/path safety, WebKit bridges/state retention, JavaScript broader DOM behavior, clipboard pasteboard/RTF fidelity, EventKit behavior, accessibility hotkeys, UI permission flows, and end-to-end signed Safari installation.

## Data, Security, Privacy, and Compatibility Boundaries

- Waiting status responses retain at most one cancellable callback/timer and 128 excluded receipt IDs per approved connection for at most 20 seconds; arrival authentication never grants access to another/revoked connection. The server queue remains available for previews and ACKs.
- App Extension status commands and receipt IDs remain in bounded runtime memory; do not persist them or log command payloads/secrets. Selection diagnostics may include only session tab IDs and API/verification stages, never titles, URLs, images or credentials.
- ScreenCaptureKit frames and derived window previews are runtime-only. Do not add disk or network persistence for them.
- Clipboard history is runtime memory. It may contain sensitive text, images, files, and app-specific raw pasteboard types; do not log payloads or transmit them.
- User settings, known extension metadata, trust flags/secrets, and child-web-view navigation state are in `UserDefaults`. Treat stored extension secrets as credentials even though the current implementation does not use Keychain.
- The `ScreenRecordingPermissionOnboarding` UserDefaults value stores onboarding progress only, never a cached OS grant or cursor coordinates. The delayed cursor-control request posts one same-position mouse move; it does not click, type, or bypass macOS permission checks.
- Browser-provided favicon HTTP(S) URLs may be loaded directly by the native carousel with `no-referrer`; unsupported schemes fall back to a globe. No external favicon lookup service is used.
- The persistent Safari background is a macOS-only lifecycle choice, not a new OS permission or a guarantee of execution while the Mac sleeps or Safari is closed. It keeps the existing bounded in-memory data resident during normal browser idle; captured previews still must not be persisted.
- Safari extension connection state and the selected non-private tab ID/fallback index (`tabPosition`) are in `chrome.storage.local`. Preview images and tab titles/URLs stay in runtime memory and the approved loopback connection. Never print the secret/token or include real credentials in fixtures.
- Board/Notes task data is read/written as JSON in Application Support through `/fuse/api/*`; writes are atomic with complete file protection. Preserve format compatibility or provide migration logic.
- Calendar data remains owned by EventKit. Access only after user permission and do not mirror it to unrelated persistence.
- The local HTTP server must remain loopback-only, with bounded bodies. App Extension content and JavaScript are trusted only after explicit identity approval and request authentication.
- Persistent native widget web views use the default WebKit data store and can contact remote websites configured by the user. Do not merge their cookies/session state into the parent Widgets Zone or into extension trust state.
- The app sandbox enables incoming/outgoing networking and Calendar access in the tracked app entitlement. The Safari extension's source-controlled entitlement enables only App Sandbox. Signing credentials, keys, profiles, environment files, and other local entitlements must remain uncommitted.
- Minimum supported macOS is 12.3 according to target settings. Keep availability guards synchronized with that boundary.
- The App Extension protocol has compatibility behavior for older trust records and the misspelled response `appAlreadyConnected`; do not “clean up” wire values without a coordinated client migration.

## Current Status and Known Gaps

### Shipped

- Native multi-display overscreen app/window switching, app locking, live previews, and global shortcuts.
- Widgets Zone with clipboard, Notes/Tasks assets, calendar, custom native web widgets, settings, localization, and full-screen search.
- User-reviewed external App Extension protocol and permission controls.
- Embedded Safari Web Extension target and reconnect/polling/preview groundwork.
- Debug stress harnesses and focused preview-flow regression suite.

### Experimental / Scaffold

- `SpaceObserver` private Space inspection is supporting infrastructure, not the canonical Space contract.
- `AVScreenRecorder`, audio-metering paths, CoreML assets, and various test/example views exist but are not the primary shipped capture/interaction path.
- Angular/Fuse demo/template trees include upstream/demo material beyond the native product surface.

### Known Gaps

- [`WhatsNew.md`](WhatsNew.md) remains the standalone 2.0.9 release-note file; the 2.1.0 summary currently lives in [`README.md`](README.md) and the Mac App Store listing.
- The app target also copies its processed [`Info.plist`](MakeItHome/Info.plist) in the Resources phase, producing an Xcode build warning.
- App Extension tutorial/API documentation remains incomplete.
- Focused suites cover preview gating, capture lifecycle, extension auth/status transport and isolated WebKit rendering. Connection approval/trust persistence, installed Safari capture/activation, clipboard fidelity, calendar and end-to-end UI paths remain gaps.
- The app target is 2.1.2/build 167 while the embedded Safari extension remains 2.1.1/build 165 and its manifest remains 2.1.1. `Tests/WebExtensionTests.cjs` fails its version-alignment check on this pre-existing mismatch. Its two connection/preview request deadline tests also still assume 5 seconds while `makeGet`/`makePost` currently use 2.2 seconds.
- Release/signing/notarization procedure and continuous integration are not checked in.
- A retired 2.1.0/build 163 report records a main-thread `objc_release`/autorelease-pool `EXC_BAD_ACCESS` after roughly 5 hours 47 minutes. Capture lifecycle resource fixes do not establish that this historical crash is resolved; see the [13 October investigation](MakeItHome/StressTests/Reports/2026-10-13-lifecycle-soak.md) for measured coverage and remaining checks.

### Planned

- Widgets supplied by external apps.
- App Extension tutorial and complete API documentation.
- Browser extensions beyond Safari.
- Continued cleanup of `Display`/`aboveBy` complexity and broader stability/performance coverage.

Roadmap intent currently lives only in [`README.md`](README.md); keep planned work there until a dedicated tracked roadmap is introduced.

## Task Start and Handoff Checklist

1. Read all applicable instructions, inspect branch/status, and preserve unrelated changes.
2. Locate the owning subsection, symbols, interface, feature path, and focused tests before editing.
3. Re-check the relevant principle, lifecycle, persistence, permission, trust, and compatibility boundaries against current code.
4. Make the smallest coherent change; keep UI/graphics on main and capture/image work in its established owner.
5. Add focused coverage where possible, run `./Tests/run.sh` for preview-flow changes, build the affected targets, and perform permission/hardware/WebKit checks that automation cannot cover.
6. Update this handbook and public/roadmap/schema/protocol docs for every durable fact changed; do not label unverified work shipped.
7. Validate local Markdown links, `git diff --check`, the full diff, generated-file boundaries, tests run/not run, and remaining gaps before handoff or commit.
