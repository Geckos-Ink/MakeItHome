# MakeItHome — AI Agent Reference

This is the fast-access operational reference for agents working on MakeItHome, a shipped macOS SwiftUI application that exposes an “overscreen” beyond display edges for live app previews, app switching, widgets, and trusted third-party extension content. The checked-out `2.1.0` branch builds marketing version 2.1.0; the public README still identifies 2.0.9 as the current Mac App Store release. Do not confuse the embedded Safari Web Extension, the optional third-party App Extension protocol, or the Angular source templates under `Assets/templates/` with the native application itself.

## Read This First

Use this source-of-truth order:

1. [`LICENSE`](LICENSE) and platform privacy/security requirements — legal and OS-enforced boundaries.
2. [`Tests/PreviewFlowGateTests.swift`](Tests/PreviewFlowGateTests.swift), executable protocol behavior, target definitions, and build settings in [`MakeItHome.xcodeproj/project.pbxproj`](MakeItHome.xcodeproj/project.pbxproj) — asserted behavior and build truth.
3. Current Swift, JavaScript, HTML, property lists, entitlements, and packaged-resource configuration — implemented behavior.
4. [`README.md`](README.md) — public product behavior, release statement, and roadmap summary; it is currently stale about the development branch/version.
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
- Development branches are named for the version in progress. The current branch is `2.1.0`; verify rather than copying the stale branch name in the README.
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

- **Capture lifecycle serialization:** [`CaptureEngineOperationGate`](MakeItHome/Managers/Capture/CaptureEngine.swift) serializes `SCStream` start, update, and stop. [`ScreenRecorder.start`](MakeItHome/Managers/Capture/ScreenRecorder.swift) uses intent/run IDs and awaits in-flight stop/update work. Never overlap raw `SCStream` mutations or bypass these owners.
- **Preview flow gate:** [`PreviewFlowGate`](MakeItHome/Helpers/PreviewFlowGate.swift) is the canonical state machine for fullscreen, Space-change, duplicate-placeholder, missing-placeholder, focus-restore, and recorder eligibility. [`Display.checkForScreenshot`](MakeItHome/Managers/Displays.swift) must call stale recovery on an every-tick path, including paths that return before the window list is evaluated. Covered by [`Tests/PreviewFlowGateTests.swift`](Tests/PreviewFlowGateTests.swift).
- **Fullscreen detection:** A normal maximized window that leaves the menu-bar area visible is not automatically native fullscreen. Use `isFullscreenCandidateFrame` plus Accessibility full-screen state, and accept a complete display frame directly. Do not regress Stage Manager or multi-display geometry.
- **Space topology:** A fullscreen Space legitimately has no MakeItHome placeholder. A single placeholder must settle before it becomes authoritative; duplicate IDs are repairable only after their stable grace period. Never repair a missing placeholder while fullscreen.
- **Cross-Space focus:** Do not use `.activateAllWindows` when tracked windows span Spaces. On overscreen close, restore prior focus only when the opening Space still matches the stable current placeholder.
- **Top web view lifetime:** [`TopWebView.sharedWKWV`](MakeItHome/Views/Overscreen/WidgetZoneView.swift) is a single shared instance. `loadTopWKWB` is load-once unless an explicit recovery/reload is requested. Do not allocate it in a SwiftUI update or full-screen search transition.
- **Full-screen search geometry:** `Display.onFullOverscreenMode` sets top overlay height to the display height and offset to zero. `outFullOverscreenMode` must restore both `overlaySizeY = Static.OverscreenSizeTop` and `overlayOffsetY = (Static.OverscreenSizeTop - frame.height) / 2`.
- **Full-screen search pointer exit:** Native child `WKWebView`s intercept pointer events. Search exit may be armed only after real downward movement in the parent page; entering search must not pre-arm an upward exit. Keep search-only pointer behavior scoped to `fullOverscreenMode`.
- **Permission-prompt ordering:** [`AppExtensionManager`](MakeItHome/Managers/AppExtension.swift) defers connection alerts while any display is presenting overscreen content. A prompt must not force-close active search or compete with the overscreen window. `Static.isExtensionApprovalPromptShowing` keeps displays dismissed during the blocking modal.
- **Extension authentication:** All non-`/connect` App Extension operations require the current secret and `SHA256(secret:unixSecond)` token within the configured clock skew. Safari connections also require a nonempty `clientId`. Keep the 10-second post-approval grace behavior that converges racing connects without rotating secrets repeatedly.
- **HTTP isolation and bounds:** [`SimpleHTTPServer.start`](MakeItHome/Managers/SimpleHttpServer.swift) sets `acceptLocalOnly`; request bodies are capped at 15 MiB; App Extension handling is dispatched synchronously to main because it touches UI-owned state. Do not expose this server beyond loopback or remove body bounds.
- **Widget bridge reliability:** Page-to-native operational messages use the `widgetMessage` WebKit handler. The legacy `myapp://` URL bridge remains compatibility-only because repeated identical navigations can coalesce. Localization and native child-web-view sync use their dedicated handlers.
- **Widget localization:** Every user-facing fallback in [`widgets.html`](MakeItHome/Resources/assets/widgets.html) needs a semantic `widgets.…` key and an English value in [`Localizable.xcstrings`](Localizable.xcstrings). Dynamic strings in [`script.js`](MakeItHome/Resources/assets/script.js) must be registered through `registerLocalizations` and rendered through `localizedString`. Send the collected dictionary through `widgetLocalization`, never the custom URL bridge.
- **Calendar grid:** [`calendar.html`](MakeItHome/Resources/assets/components/calendar.html) is Monday-first, so its `Date#getDay()` offset must map Sunday to the final column with `(getDay() + 6) % 7`. Render only the required five or six weeks; do not reserve a sixth row made entirely of next-month days. Keep the 42-cell maximum capacity, `days`, event lookup, and the visible grid derived from the same start date. Events begin at the top of their cell beneath the date chip with a 3px top/left inset; a one-second pointer dwell expands that week row and leaving clears it. A day-surface click opens its 48-slot, 30-minute agenda; all-day events belong in its separate rail, never on the timed grid. Appointment controls must stop propagation to preserve their own popover/edit actions, and their bounded detail card must remain above both the month view and day agenda.
- **Clipboard round-trip fidelity:** [`Clipboard.Element.rawTypes`](MakeItHome/Managers/New%20Group/Clipboard.swift) preserves every pasteboard representation. Re-copying must replay raw types before falling back to display-oriented string/image/file data.
- **Clipboard resource bounds and ordering:** Native clipboard history is newest-first and capped by `Static.ClipboardForgetElementsOlderThan`; page updates are batched oldest-first so CSS Grid appends the newest item at the visual bottom. [`BoundedFIFOQueue`](MakeItHome/Helpers/ClipboardResourceBounds.swift) caps native-to-page messages while WebKit is unavailable. [`ClipboardPreviewImage`](MakeItHome/Views/Overscreen/WidgetZoneView.swift) limits only the base64 preview sent to the Widgets Zone (160 px, 128 KiB); never use that derivative for pasteboard re-copy, whose raw representations remain in `Clipboard.Element`. The grid's persistent, centered `clipboard-notch-spacer` reserves its first row so cards stay below a MacBook display notch; clear/replace operations must remove `.item` cards only. Do not reintroduce unbounded history/queues, one timer per item, Masonry transform ownership, collection mutation during iteration, or whole-grid `.empty()` calls.
- **Clipboard rich text:** RTF is decoded and converted to Cocoa-generated HTML in [`Clipboard.Element.setRtf`](MakeItHome/Managers/New%20Group/Clipboard.swift). [`script.js`](MakeItHome/Resources/assets/script.js) renders only an allowlisted subset inside a Shadow DOM, with sanitized Cocoa CSS. Never inject raw clipboard strings or unscoped rich-text CSS into the Widgets Zone document.

## Architecture and Data/Control Flow

Native startup:

`MakeItHomeApp` → `ContentView` / `StoreView` → `DisplaysManager` → per-display `Display` → `ScreenRecorder` → `CaptureEngine` (`SCStream`) → `CapturedFrame` → `CapturePreview.CaptureView` (SceneKit)

Window discovery and overscreen:

`DisplaysManager` mouse/Space notifications → `Display.active` / `checkForScreenshot` → WindowServer + Accessibility geometry → `PreviewFlowGate` → cropped window previews → `CapturePreview` app/window nodes → AppKit overscreen window

Widgets:

`ContentView` → shared `TopWKWV` → loopback `SimpleHTTPServer` → `widgets.html` + `script.js` → `widgetMessage` / `widgetLocalization` / `nativeWebView` handlers → clipboard, calendar, settings, extension permissions, and persistent native child `WKWebView`s

App Extension:

external client or bundled Safari background worker → loopback `/appExtension/*` → `SimpleHTTPServer` → main-thread `AppExtensionManager.httpRequest` → approval/trust/token checks → `AppExtension` state → `AppExtensionWKWV` → `Display.AppWindows`

Canonical persisted state is split between native `UserDefaults` (settings, trust metadata/secrets, native child-web-view navigation), Safari `chrome.storage.local` (extension connection state), and Application Support JSON used by the embedded board APIs. Screen frames and the native clipboard history are runtime memory, not durable application data.

## Linked Source Tree and File Reference

### [`MakeItHome.xcodeproj/project.pbxproj`](MakeItHome.xcodeproj/project.pbxproj)

Authoritative target, source/resource membership, Swift package dependency, deployment target, bundle IDs, versions, schemes, and signing configuration.

- **Key subparts:** `MakeItHome` app target; embedded `MakeItHome Web Extension`; Swift Collections 1.0.3; macOS 12.3 target; app marketing version 2.1.0/build 161. Debug builds produce `MakeItHome Test.app` (`ink.geckos.MakeItHome.Test`) and its matching test Web Extension so TCC permissions and `UserDefaults` remain separate from the Release app.
- **Depends on:** [`MakeItHome.xcodeproj/project.xcworkspace/xcshareddata/swiftpm/Package.resolved`](MakeItHome.xcodeproj/project.xcworkspace/xcshareddata/swiftpm/Package.resolved).
- **Common mistakes:** Add new manually grouped files to the correct target/resource phase. Keep parent and extension `CFBundleVersion` aligned before distribution; the current app build is 161 while the extension build is 1.

### [`MakeItHome/MakeItHomeApp.swift`](MakeItHome/MakeItHomeApp.swift)

The SwiftUI application entry point. Debug builds route explicit `--stress` launches to the stress root; normal builds create `ContentView` and call `Static.Init`.

- **Key symbols:** `MakeItHomeApp.body`; `StressLaunchConfiguration.current`.
- **Called by / depends on:** Xcode app target; [`MakeItHome/StressTests/StressTestSupport.swift`](MakeItHome/StressTests/StressTestSupport.swift).
- **Tests:** Manual stress modes only.
- **Common mistakes:** Keep stress dispatch behind `#if DEBUG`; normal startup must not inherit stress arguments or state.

### [`MakeItHome/ContentView.swift`](MakeItHome/ContentView.swift)

Composes the SceneKit capture preview and widget/App Extension overlays, owns `StoreView`, creates `DisplaysManager`, checks Screen Recording authorization, and configures the accessory/menu-bar window.

- **Key symbols:** `StoreView` owns the recorder and AppKit window; `StoreVars` owns overlay geometry; `ContentView` wires native surfaces; `checkCanRecord` updates authorization state.
- **Depends on:** [`MakeItHome/Managers/Displays.swift`](MakeItHome/Managers/Displays.swift), [`MakeItHome/Managers/Capture/ScreenRecorder.swift`](MakeItHome/Managers/Capture/ScreenRecorder.swift), [`MakeItHome/Views/Overscreen/WidgetZoneView.swift`](MakeItHome/Views/Overscreen/WidgetZoneView.swift), and [`MakeItHome/Managers/Capture/Views/AppExtensionView.swift`](MakeItHome/Managers/Capture/Views/AppExtensionView.swift).
- **Tests:** No automated UI/startup coverage.
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

- **Key functions:** `updateFullscreen` and `recoverStaleFullscreen`; `beginSpaceTransition`, `observePlaceholderTopology`, and `acceptFullscreenTopology`; `noteDuplicatePlaceholderIDs`; `shouldRepairMissingPlaceholder`; `allowsScreenshot`, `allowsRecorder`, and focus/activation helpers.
- **Called by:** [`Display`](MakeItHome/Managers/Displays.swift).
- **Tests:** [`Tests/PreviewFlowGateTests.swift`](Tests/PreviewFlowGateTests.swift).
- **Common mistakes:** Timestamp transitions only on a state edge; changing signatures restart grace periods. Do not convert wall-clock safety nets to tick counts.

### [`MakeItHome/Managers/Displays.swift`](MakeItHome/Managers/Displays.swift)

The primary overscreen domain owner: display discovery, high-frequency pointer motion, edge activation, WindowServer tracking, Space placeholders, screenshot cropping, recorder policy, window/focus activation, shortcut animation, and overscreen geometry.

- **Key classes and methods:** `DisplaysManager` discovers displays and routes mouse/Space events; `Display.checkForScreenshot` derives windows/fullscreen/placeholder topology; `Display.active` drives edge behavior; `showWindow`/`hideWindow` own presentation; `onFullOverscreenMode`/`outFullOverscreenMode` own search geometry; `shouldKeepScreenRecorderActive` delegates to the flow gate.
- **Depends on:** [`MakeItHome/Helpers/PreviewFlowGate.swift`](MakeItHome/Helpers/PreviewFlowGate.swift), capture/preview owners, `CGWindowListCopyWindowInfo`, Accessibility, and placeholder windows.
- **Tests:** Flow logic in [`Tests/PreviewFlowGateTests.swift`](Tests/PreviewFlowGateTests.swift); full pointer/window integration is manual.
- **Common mistakes:** This file mixes coordinate systems and lifecycle states. Preserve per-display isolation, main-thread graphics/UI mutation, `imageProcessingQueue` ownership, every-tick stale recovery, and both dimensions of search restoration.

### [`MakeItHome/Managers/Capture/CaptureEngine.swift`](MakeItHome/Managers/Capture/CaptureEngine.swift)

Lowest ScreenCaptureKit boundary. It creates `SCStream`, serializes stream mutations, converts complete sample buffers into `CapturedFrame`, and exposes frames through `AsyncThrowingStream`.

- **Key symbols:** `CaptureEngineOperationGate`, `CapturedFrame`, `CaptureEngine.startCapture`, `stopCapture`, `update`, and `CaptureEngineStreamOutput`.
- **Called by:** [`ScreenRecorder`](MakeItHome/Managers/Capture/ScreenRecorder.swift).
- **Tests:** No focused ScreenCaptureKit tests.
- **Common mistakes:** Never update configuration/filter while stop is in progress; never render incomplete sample buffers.

### [`MakeItHome/Managers/Capture/ScreenRecorder.swift`](MakeItHome/Managers/Capture/ScreenRecorder.swift)

Main-actor capture coordinator. Selects the display/window filter, switches low/high capture profiles, serializes intent changes, consumes frames, and hands them to the preview.

- **Key methods:** `start`, `stop`, `stopCaptureEngine`, `updateEngine`, `refreshAvailableContent`, `contentFilter`, and `streamConfiguration`.
- **Depends on:** [`CaptureEngine`](MakeItHome/Managers/Capture/CaptureEngine.swift), [`CapturePreview`](MakeItHome/Managers/Capture/Views/CapturePreview.swift), and `Static` performance constants.
- **Tests:** Recorder eligibility is modeled in flow-gate tests; real capture requires Screen Recording permission.
- **Common mistakes:** Prefer an in-place configuration update when the target stream is current. Await stop/update tasks and validate intent IDs after suspension.

### [`MakeItHome/Managers/Capture/Views/CapturePreview.swift`](MakeItHome/Managers/Capture/Views/CapturePreview.swift)

SceneKit renderer and interaction surface for the desktop plane, app/window preview nodes, hover/focus, clicks, scrolling, drag/drop, and gravity-mouse behavior.

- **Key symbols:** `CapturePreview.updateFrame`; `CaptureView.prepareScene`, `setScreenApps`, `setWindowsPosition`, `mouseMove`, `unset`; `AppNode`; `WindowPlane`.
- **Called by:** `ContentView`, `ScreenRecorder`, and `Display`.
- **Tests:** Virtual overscreen stress harness; no automated SceneKit assertions.
- **Common mistakes:** Release material/layer references when removing nodes, avoid redundant texture uploads, and perform SceneKit/CALayer mutations on main.

### [`MakeItHome/Managers/AppExtension.swift`](MakeItHome/Managers/AppExtension.swift)

Owns external extension identity, permission inventory, trust persistence, approval/defer/timeout behavior, secret and rolling-token authentication, request dispatch, and live extension content/message synchronization.

- **Key symbols:** `AppExtensionManager.httpRequest`, `requestConnectionApproval`, `presentNextDeferredApprovalIfPossible`, `extensionPermissionsStatus`, `revokeExtensionPermission`, `hasValidToken`; `AppExtension.syncIfNeeded`, `sendJSMessage`, and `scheduleHealthCheckIfNeeded`.
- **Called by:** [`SimpleHTTPServer`](MakeItHome/Managers/SimpleHttpServer.swift), widget settings, and `Display.AppWindows`.
- **Tests:** Debug App Extension flood harness; no focused auth unit tests.
- **Common mistakes:** Identity is `bundleId` plus normalized `clientId`, not bundle ID alone. Preserve ignored cooldown, approval timeout, racing-connect grace, bounded message queue, and UI deferral.

### [`MakeItHome/Managers/SimpleHttpServer.swift`](MakeItHome/Managers/SimpleHttpServer.swift)

Loopback HTTP server for packaged widget resources, board JSON APIs, and the App Extension protocol.

- **Key methods:** `start`, `parseRequest`, `handleRequest`, `loadOrSaveJson`, and MIME mapping.
- **Called by:** `TopWKWV.initHttpServer`; Safari/background clients connect to port 19494.
- **Tests:** App Extension flood harness exercises the real listener; no parser/path unit tests.
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

Shared native App Extension `WKWebView`, its navigation bridge, container loading, and current-app presentation.

- **Key symbols:** `AppExtensionWebView.sharedWKWV`, `AppExtensionWebViewCoordinator`, `AppExtensionWKWV.setCurrentApp`, `exiting`, and `forceReload`.
- **Depends on:** [`MakeItHome/Resources/assets/appExtensionView.html`](MakeItHome/Resources/assets/appExtensionView.html) and `AppExtension`.
- **Tests:** App Extension stress harness covers server traffic, not WebKit rendering.
- **Common mistakes:** Navigation replaces the JavaScript context; notify the manager so every extension container is recreated and queued messages are flushed.

### [`MakeItHome/Resources/assets/appExtensionView.html`](MakeItHome/Resources/assets/appExtensionView.html)

JavaScript container surface injected into the native App Extension web view.

- **Called by:** `AppExtensionWKWV`; native `AppExtension.syncIfNeeded` invokes its container/content/message functions.
- **Tests:** Manual and stress-harness validation.
- **Common mistakes:** Keep invoked JavaScript function names synchronized with `AppExtension.swift`.

### [`MakeItHome/MakeItHome Web Extension/Resources/manifest.json`](MakeItHome/MakeItHome%20Web%20Extension/Resources/manifest.json)

Manifest V3 declaration for the bundled Safari extension, including tabs, active-tab, web-navigation, storage, and alarms permissions.

- **Entrypoints:** [`background.js`](MakeItHome/MakeItHome%20Web%20Extension/Resources/background.js), [`content.js`](MakeItHome/MakeItHome%20Web%20Extension/Resources/content.js), and [`popup.html`](MakeItHome/MakeItHome%20Web%20Extension/Resources/popup.html).
- **Common mistakes:** Any permission or asset change must also be present in the extension target resource phase.

### [`MakeItHome/MakeItHome Web Extension/Resources/background.js`](MakeItHome/MakeItHome%20Web%20Extension/Resources/background.js)

Safari-side App Extension client: stable client identity, secret/token generation, connection/reconnect policy, adaptive status polling, tab tracking, screenshot pacing, and HTML/JavaScript payload delivery.

- **Key functions:** `makeRequestUrl`, `getRollingToken`, `connect`, `checkOpenTabs`, screenshot/status loops, `setHtmlContent`, and `sendJsMessage`.
- **Depends on:** loopback `/appExtension/*`, Chrome/Safari extension APIs, and packaged extension HTML.
- **Tests:** App flood harness validates the native protocol but not browser behavior.
- **Common mistakes:** Do not reset a valid secret on `connectionIgnored`/`connectionDeferred`; honor server-suggested poll intervals and bounded in-flight work.

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
- **Common mistakes:** A placeholder’s title/window identity is part of Space detection. AppKit window/layer operations remain main-thread-only.

### [`MakeItHome/Views/`](MakeItHome/Views/)

Small SwiftUI panels for activation, permissions, onboarding, updates, menu UI, and test previews. The behavior-heavy owners have separate sections above.

- **Important files:** [`HowToRecordingPermissionView.swift`](MakeItHome/Views/HowToRecordingPermissionView.swift), [`RequestAutomationPermissions.swift`](MakeItHome/Views/RequestAutomationPermissions.swift), and [`NoRecordingPermissionView.swift`](MakeItHome/Views/NoRecordingPermissionView.swift).
- **Tests:** Manual permission/onboarding flows.
- **Common mistakes:** Permission prompts affect app activation and overscreen lifecycle; route state changes through the established owners.

### [`MakeItHome/StressTests/`](MakeItHome/StressTests/)

Debug-only manual performance and lifecycle harnesses. [`StressTestSupport.swift`](MakeItHome/StressTests/StressTestSupport.swift) parses launch options and selects a root; [`VirtualOverscreenStressTest.swift`](MakeItHome/StressTests/VirtualOverscreenStressTest.swift) exercises SceneKit/app-count churn; [`AppExtensionStressTest.swift`](MakeItHome/StressTests/AppExtensionStressTest.swift) floods the real authenticated local server with bounded workers; [`RuntimeLifecycleStressTest.swift`](MakeItHome/StressTests/RuntimeLifecycleStressTest.swift) cycles the real recorder profiles, `CaptureView` sleep/restart, and native Clipboard-to-Widgets-Zone traffic together.

- **Commands:** See [`MakeItHome/StressTests/README.md`](MakeItHome/StressTests/README.md).
- **Common mistakes:** Never make stress mode reachable in Release and never turn bounded worker counts into unbounded task creation. The runtime lifecycle mode must restore the pasteboard only when the user has not changed it since its final synthetic write, remove its temporary linked video fixtures, and keep synthetic clipboard payloads out of logs.

### [`Tests/PreviewFlowGateTests.swift`](Tests/PreviewFlowGateTests.swift)

Dependency-free executable regression suite that compiles the production `PreviewFlowGate` with a small test harness.

- **Coverage:** fullscreen staleness/settling, Space-change timeout, placeholder topology/repair, multi-display isolation, cross-Space activation/focus, and recorder eligibility.
- **Runner:** [`Tests/run.sh`](Tests/run.sh).
- **Common mistakes:** Test the real production file, not a copied model. Keep scenarios deterministic and free of AppKit permissions.

### [`Tests/ClipboardResourceStressTests.swift`](Tests/ClipboardResourceStressTests.swift)

Dependency-free stress regression that compiles the production [`ClipboardResourceBounds.swift`](MakeItHome/Helpers/ClipboardResourceBounds.swift) helper and pushes 100,000 history inserts plus 100,000 queued page messages.

- **Coverage:** newest-first 30-item history eviction, fixed 128-message queue capacity, overflow behavior, and FIFO drain order.
- **Runner:** [`Tests/run.sh`](Tests/run.sh).
- **Common mistakes:** Keep the stress inputs large enough to expose unbounded growth while leaving the production collection helper as the implementation under test.

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
- **Tests and gaps:** Manual/demo use and debug server flood exist; focused auth/parser tests and the public tutorial/API reference do not.

### Bundled Safari Web Extension — Shipped groundwork

- **Behavior:** Tracks Safari tabs, produces bounded/adaptive previews, and supplies a tab-switching extension surface after approval.
- **Constraints:** Safari extension permissions, local server availability, persisted browser secret, and reconnect cooldown/backoff.
- **Tests and gaps:** Embedded target builds; broader-browser variants are planned.

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
- **Safe pattern / regression check:** Operation gate plus intent/run IDs; perform a code-signing-disabled build and manually exercise repeated edge entry/exit.
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

## Interface Ownership Map

- macOS app entry and Debug stress selection → [`MakeItHomeApp`](MakeItHome/MakeItHomeApp.swift).
- Menu-bar settings and actions → [`MenuBarView`](MakeItHome/Views/MenuBarView.swift).
- Overscreen edge/pointer/window behavior → [`DisplaysManager` and `Display`](MakeItHome/Managers/Displays.swift).
- SceneKit preview interaction → [`CapturePreview.CaptureView`](MakeItHome/Managers/Capture/Views/CapturePreview.swift).
- Widgets Zone screen/DOM → [`widgets.html`](MakeItHome/Resources/assets/widgets.html) + [`script.js`](MakeItHome/Resources/assets/script.js) + [`TopWebViewCoordinator`](MakeItHome/Views/Overscreen/WidgetZoneView.swift).
- Widget page messages → `widgetMessage`; localization dictionaries → `widgetLocalization`; child-web-view geometry → `nativeWebView`, all registered in [`TopWebView.makeNSView`](MakeItHome/Views/Overscreen/WidgetZoneView.swift).
- App Extension HTTP routes `/connect`, `/setHtmlContent`, `/sendJSMessage`, `/checkStatus`, and compatibility `/waitForStatus` → [`AppExtensionManager.httpRequest`](MakeItHome/Managers/AppExtension.swift).
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

Build the Debug-only test app and embedded Safari extension without signing:

```sh
xcodebuild -project MakeItHome.xcodeproj -scheme MakeItHome -configuration Debug -destination 'platform=macOS' CODE_SIGNING_ALLOWED=NO build
```

The Debug product is `MakeItHome Test.app`; grant permissions to that app only when exercising debug harnesses. Release builds continue to produce `MakeItHome.app`.

Fast focused and resource-bound stress tests:

```sh
./Tests/run.sh
```

Normal development run: open [`MakeItHome.xcodeproj`](MakeItHome.xcodeproj) in Xcode, select the `MakeItHome` scheme, configure signing/entitlements locally, and Run. The main app entitlement file is tracked; the Safari extension entitlement file referenced by the project is locally required but ignored by `.gitignore`, so verify it exists before a signed build.

Debug stress modes are launch arguments on the Debug `MakeItHome` scheme:

```text
--stress virtual-apps --stress-stage-seconds 5
--stress app-extension --stress-duration 30 --stress-workers 12 --stress-payload-kb 512
--stress runtime-lifecycle --stress-duration 1200 --stress-interval 2 --stress-auto-exit
```

See [`MakeItHome/StressTests/README.md`](MakeItHome/StressTests/README.md) for bounded overrides and Instruments guidance. These modes launch real runtime components and may open a local listener; use a free port for overrides.

Debug WebKit using Safari’s Develop inspector; the top view sets `isInspectable` on macOS 13.3+. Debug capture/overscreen performance with Instruments Allocations and System Trace.

There is no root lint/format task, CI workflow, automated UI suite, checked-in archive/notarization script, or verified App Store release checklist. Release is therefore `Unknown — verify signing, matching bundle versions, archive, notarization/App Store submission, and release-note synchronization before publishing`.

## Test Ownership Map

- Fullscreen classification and recovery → [`PreviewFlowGateTests.swift`](Tests/PreviewFlowGateTests.swift).
- Space transition, placeholder stability/repair, and multi-display isolation → [`PreviewFlowGateTests.swift`](Tests/PreviewFlowGateTests.swift).
- Cross-Space activation and focus restoration → [`PreviewFlowGateTests.swift`](Tests/PreviewFlowGateTests.swift).
- Recorder eligibility state → [`PreviewFlowGateTests.swift`](Tests/PreviewFlowGateTests.swift); real ScreenCaptureKit lifecycle is manual.
- SceneKit churn, virtual app counts, and frame updates → [`VirtualOverscreenStressTest.swift`](MakeItHome/StressTests/VirtualOverscreenStressTest.swift).
- Authenticated server concurrency, payload bounds, memory, and thread growth → [`AppExtensionStressTest.swift`](MakeItHome/StressTests/AppExtensionStressTest.swift).
- Real ScreenCaptureKit profile transitions, SceneKit sleep/restart, and Clipboard-to-Widgets-Zone delivery → [`RuntimeLifecycleStressTest.swift`](MakeItHome/StressTests/RuntimeLifecycleStressTest.swift); requests the Debug app's separate Screen Recording permission and requires manual WebKit inspection.
- Clipboard history and native-to-WebKit queue resource bounds/order → [`ClipboardResourceStressTests.swift`](Tests/ClipboardResourceStressTests.swift).
- Build/resource/localization integration → the code-signing-disabled Xcode build.
- Known test gaps: App Extension auth decisions, HTTP parsing/path safety, WebKit bridges/state retention, JavaScript DOM behavior, clipboard pasteboard/RTF fidelity, EventKit behavior, accessibility hotkeys, UI permission flows, and end-to-end signed Safari installation.

## Data, Security, Privacy, and Compatibility Boundaries

- ScreenCaptureKit frames and derived window previews are runtime-only. Do not add disk or network persistence for them.
- Clipboard history is runtime memory. It may contain sensitive text, images, files, and app-specific raw pasteboard types; do not log payloads or transmit them.
- User settings, known extension metadata, trust flags/secrets, and child-web-view navigation state are in `UserDefaults`. Treat stored extension secrets as credentials even though the current implementation does not use Keychain.
- Safari extension connection state is in `chrome.storage.local`. Never print the secret/token or include real credentials in fixtures.
- Board/Notes task data is read/written as JSON in Application Support through `/fuse/api/*`; writes are atomic with complete file protection. Preserve format compatibility or provide migration logic.
- Calendar data remains owned by EventKit. Access only after user permission and do not mirror it to unrelated persistence.
- The local HTTP server must remain loopback-only, with bounded bodies. App Extension content and JavaScript are trusted only after explicit identity approval and request authentication.
- Persistent native widget web views use the default WebKit data store and can contact remote websites configured by the user. Do not merge their cookies/session state into the parent Widgets Zone or into extension trust state.
- The app sandbox enables incoming/outgoing networking and Calendar access in the tracked app entitlement. Signing files, keys, profiles, environment files, and local extension entitlements must remain uncommitted unless the repository policy deliberately changes.
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

- The checked-out project builds version 2.1.0 on branch `2.1.0`, while [`README.md`](README.md) and [`WhatsNew.md`](WhatsNew.md) still present 2.0.9 as current; resolve this only when release status is known.
- The parent app build number is 161 and embedded Web Extension build number is 1, producing an Xcode validation warning.
- The app target also copies its processed [`Info.plist`](MakeItHome/Info.plist) in the Resources phase, producing an Xcode build warning.
- `ContentView.swift` has an `@available (` whitespace warning that becomes an error in Swift 6 mode.
- App Extension tutorial/API documentation remains incomplete.
- Automated coverage is concentrated in `PreviewFlowGate`; security, WebKit, clipboard, calendar, capture, and end-to-end UI paths remain gaps.
- Release/signing/notarization procedure and continuous integration are not checked in.

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
