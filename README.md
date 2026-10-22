<p align="center">
  <img src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/makeithome.png?raw=true" style="width: 40%"/><br>
  <!-- <img src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/icon.png?raw=true" style="width: 40%"/> -->
  <img src="https://github.com/Geckos-Ink/MakeItHome/blob/main/Assets/vintage-logo.png?raw=true" style="width: 40%"/>
</p>

<p align="center" >
  <a href="https://apps.apple.com/it/app/makeithome-screen-extender/id6444596296?l=en-GB&mt=12"><img src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/download_mac_appstore.png?raw=true"/></a>
</p>

# The UI extender for macOS

MakeItHome extends your Mac beyond the physical edges of the screen. Push the cursor past a screen border and you enter the **overscreen**: a virtual area surrounding your desktop where you can switch between apps with live window previews, pin your favorite apps, and access a full zone of widgets — without ever touching the Dock or Cmd-Tab.

<img src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_0.gif?raw=true">

**Current release: 2.1.0** — [available on the Mac App Store](https://apps.apple.com/it/app/makeithome-screen-extender/id6444596296?l=en-GB&mt=12)

## Features

- **Overscreen app switching** — cross a screen edge to reveal the running apps with live, real-time window previews. Click a preview to jump straight to that window.
- **App locking** — pin an app to a screen edge so it is always one flick away, on every Space.
- **The Widgets Zone** — the top edge hosts a dedicated widgets area where you choose which built-in widgets appear:
  - **Notes and Tasks** — quick notes and to-do lists, always within reach.
  - **Calendar** — browse a clear month view, expand busy weeks, and open a daily agenda for all-day and timed events.
  - **Clipboard history** — capture text, rich text, images, and files, then paste them back later.
  - **My Widgets** — add your own custom web widgets.
- **Fast web search** — start a web search directly from the top zone, with full-page results in an instant overlay.
- **App Extension API** — third-party apps can extend their preview in the overscreen with their own interactive area (see below).
- **Localization** — the interface is translated into multiple languages.
- **Multi-display aware** — works with your monitors' arrangement.

### A note on privacy

MakeItHome uses the Screen Recording permission to create its magic: the live previews of your windows. The captured images are processed entirely on your Mac — they are never saved to disk nor sent over the internet.

## What's new in 2.1.0

- Choose which built-in widgets — Clipboard, Notes, Tasks, and Calendar — appear in the Widgets Zone.
- Use the redesigned Calendar with a clearer month layout, expandable week rows, a dedicated daily agenda, and improved handling of all-day and timed events.
- Rely on a more robust Clipboard history with richer text support, smoother updates, bounded image previews, and a notch-aware layout.
- Enjoy smoother live previews and improved responsiveness while MakeItHome is active or idle.
- Benefit from refined widget visuals, better overlay contrast, and general stability and memory-use improvements.

## How to

<center>
  <table>
  	<tr>
  		<td><b>How to lock an app</b></td>
  		<td><b>The Widgets Zone</b></td>
  	</tr>
  	<tr>
  		<td><a href="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_1.gif"><img stype="width: 25%" src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_mini_1.gif?raw=true"></a></td>
  		<td><a href="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_2.gif"><img stype="width: 25%" src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_mini_2.gif?raw=true"></a></td>
  	</tr>
  	<tr>
  		<td><b>Fast web search</b></td>
  		<td><b>Notes and Tasks</b></td>
  	</tr>
  	<tr>
  		<td><a href="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_3.gif"><img stype="width: 25%" src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_mini_3.gif?raw=true"></a></td>
  		<td><a href="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_4.gif"><img stype="width: 25%" src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_mini_4.gif?raw=true"></a></td>
  	</tr>
  	<tr>
  		<td><b>The Calendar</b></td>
  		<td><b>My Widgets</b></td>
  	</tr>
  	<tr>
  		<td><a href="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_5.gif"><img stype="width: 25%" src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_mini_5.gif?raw=true"></a></td>
  		<td><a href="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_6.gif"><img stype="width: 25%" src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_mini_6.gif?raw=true"></a></td>
  	</tr>
  <table>
</center>

## The App Extension

An application can extend its icon in the window-switching area. When an app exposes an extension area, an aurora borealis glows at the base of its preview: "break" the screen boundary further on the aurora's side and you access a doubled overscreen with a WebView, where the application is free to render whatever it wants.

For example, a browser can offer rapid tab switching with web page previews, or a music player can display the song queue and let you change tracks instantly. Unlike the Widgets Zone, the App Extension imposes no design structure: the focus is entirely on the API and the communication protocol between MakeItHome and the app.

<img src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/makeithome-web-preview.gif?raw=true">
<i>A preview of the App Extension area with MakeItHome Web for Safari.</i>

The App Extension API is implemented in the current release, and a demo app is already available: [MakeItHome-AppExtension-Demo](https://github.com/Geckos-Ink/MakeItHome-AppExtension-Demo). A full tutorial and API documentation are on the way.

## Project status

Version 2.1.0 builds on the "MakeItHome 2.0" foundation with a focus on configurable widgets, a more capable Calendar and Clipboard, and runtime stability:

- ✅ Widgets Zone in the top bar
- ✅ Configurable built-in widgets
- ✅ Calendar month view and daily agenda
- ✅ Rich-text and image-aware Clipboard history
- ✅ App Extension API, with a working demo app
- ✅ Browser extension groundwork (MakeItHome Web)
- ✅ Interface localization
- 🚧 Widgets from external apps
- 🚧 App Extension tutorial and API documentation
- 🚧 Browser extensions for more browsers

Development branches are named after the version in progress. The 2.1.0 source is available on the [`2.1.0` branch](https://github.com/Geckos-Ink/MakeItHome/tree/2.1.0) and under the [`release-2.1.0` tag](https://github.com/Geckos-Ink/MakeItHome/releases/tag/release-2.1.0).

**Looking for testers!** New features have a talent for shipping with a bug nobody noticed. If you'd like to help make releases more stable, get in touch (contacts below).

## Development

- MakeItHome requires macOS 12.3 or later and Xcode with the macOS SDK.
- Open `MakeItHome.xcodeproj` in Xcode and run the `MakeItHome` scheme.
- The app requires the **Screen Recording** and **Accessibility** permissions to function.
- In the 2.1.1 development tree, the first Screen Recording approval starts a one-time cursor-control request after a one-second delay, by posting a mouse move at the cursor's current position. Pending onboarding survives a required app relaunch; actual macOS permission dialogs still require manual validation.
- The 2.1.2 development tree adds “Move pointer to focused window on another display” in menu-bar settings (enabled by default). When focus changes to a window on a different display from the pointer, the pointer moves once to that window's center, or its visible portion if the center is offscreen. This includes switching windows within one app. It requires Accessibility permission and skips dragging or an open overscreen; enabling it or waking the Mac does not move the pointer to an already-focused window. Geometry and focus-history regression tests are automated; actual multi-display and permission behavior still need manual validation.
- Display crossings now choose the active screen from pointer coordinates and reuse known ScreenCaptureKit displays, avoiding a full content query on each crossing. Rapid switches share cold queries, and delayed work from the previous display cannot hide or pause the new surface. Window/space-holder coordinates stay anchored to the primary display. Regression coverage is in [`Tests/DisplaySwitchTests.py`](Tests/DisplaySwitchTests.py); actual multi-monitor latency, hot-plug and mixed-scale layouts still need manual validation.
- The overscreen now shares tracked apps across displays, with one entry per running process. For an app already in use on this screen, it offers that app's latest other-window capture when available, including another display; edge pins retain precedence. A preview click closes the current overscreen, focuses the selected real window, and moves the pointer to that window on another display when the pointer preference is enabled. Window matching uses public Accessibility geometry and fresh local titles, and skips ambiguous matches. Existing in-memory captures are reused. Regression checks are in [`Tests/AppPreviewFallbackTests.py`](Tests/AppPreviewFallbackTests.py) and [`Tests/FocusedWindowPointerMonitorTests.py`](Tests/FocusedWindowPointerMonitorTests.py); real multi-display/TCC/Space behavior remains a manual check.
- Run `./Tests/run.sh` for the focused preview-flow, clipboard-bound, and preview-title regression tests.
- Debug-only runtime and stress harnesses are documented in [`MakeItHome/StressTests/README.md`](MakeItHome/StressTests/README.md).
- The top Widgets Zone web assets live in `MakeItHome/Resources/assets/`; its Swift controller is `MakeItHome/Views/Overscreen/WidgetZoneView.swift`.
- The browser extension sources are in `MakeItHome/MakeItHome Web Extension/`. Run `node Tests/WebExtensionTests.cjs` for its dependency-free browser/view regressions (Node.js required).

The 2.1.2 development tree requests a persistent background page for MakeItHome Web on macOS Safari, using Manifest V2 and `background.persistent: true`. This keeps the background page loaded during normal browser idle while Safari is running and the extension is enabled. Existing capture pacing, bounded in-memory previews and connection backoff still apply. Safari quit/relaunch and Mac sleep/resume can interrupt execution; startup reconnects using stored credentials. This manifest is macOS-only: Safari Manifest V3 and iOS require nonpersistent backgrounds. See [Apple’s background-page guidance](https://developer.apple.com/documentation/safariservices/optimizing-your-web-extension-for-safari). Signed Safari idle retention must be checked with Web Inspector closed, along with browser relaunch and sleep/resume recovery.

The 2.1.2 development tree also keeps extension approval responsive while the user decides: connection requests return `connectionDeferred` immediately, Allow/Deny closes the panel through explicit button actions in the normal app event loop, approval expires after 30 seconds, and the local server caps concurrent connections and expires abandoned clients. Regression checks are in `Tests/AppExtensionApprovalTests.py` (add `--native` for brief automatic AppKit dialogs) and `Tests/AppExtensionApprovalTransportTests.py` (local listener required).

The current development tree also improves MakeItHome Web for Safari: the carousel shows only tabs with cached previews, their titles, and tab icons (with a globe fallback when unavailable), cached previews arrive in batches, and reopening returns to the last tab-carousel position. Titles and icons keep a dedicated row beneath each preview. The app target is currently 2.1.2/build 167 while the embedded extension builds 2.1.2/build 165 and its manifest version remains 2.1.1; this version-alignment gap still fails its regression check. Safari receives the bundled extension when the signed normal app is updated and run. Cached images and tab order survive duplicate content delivery and source updates, and incoming cards wait for navigation to settle without resetting the current scroll position. A cold view restores missing cached previews and the last saved position. Clicking a tab closes the overscreen in 120 ms (immediately with Reduce Motion), cancels stale reopen callbacks, and hands focus to Safari. After its browser window receives focus, selection waits 150 ms and retries once after 400 ms to handle activation races. Click requests stay queued until Safari acknowledges processing, with a 15-second expiry to prevent stale selections after sleep. Lost polling responses redeliver pending requests; lost acknowledgements are resent without repeating the selection. Selection resolves the exact tab ID again after activation, follows tabs moved to another window, and waits for callback or Promise API completion. Safari verifies the actual active tab and focused window, and stalled API/HTTP responses have bounded deadlines. Capture runs less frequently at smaller sizes, preview caches are bounded, and webpages no longer send a one-second heartbeat. Previews remain in memory; only the selected non-private tab ID and fallback position are saved locally. Safari can capture the visible tab, so a tab without a cached preview stays out of the carousel until visited and captured. Signed Safari installation, website permissions, multi-window behavior, and CPU/memory measurements still require manual validation.

Heads-up on GitHub's security advisories: they are all related to the Angular project used for the Notes and Tasks widgets and are inconsistent issues in practice. The Swift code advisories are the ones worth checking.

Code quality dashboard: [SonarCloud](https://sonarcloud.io/project/overview?id=Geckos-Ink_MakeItHome)

## Articles

- MacWorld: <a href="https://www.macworld.com/article/1533463/why-breaking-your-macs-screen-is-a-good-idea.html">*Why breaking your Mac's screen is a good idea*</a>

## Credits

Riccardo Cecchini \<rcecchini.ds@gmail.com> [cekkr](https://github.com/cekkr)
