# AGENTS

## Project Summary
- MakeItHome is a macOS SwiftUI app that extends screen edges into an "overscreen" UI for app switching and widgets.
- Uses ScreenCaptureKit for capture, SceneKit for rendering, and CoreImage for preview processing.
- Current release is 2.0.9; development happens on branches named after the version in progress.

## Repo Layout
- `MakeItHome/Managers/Displays.swift`: display detection, mouse/overscreen logic, window tracking, screenshot cropping.
- `MakeItHome/Managers/AppExtension.swift`: external extension connection auth/trust, 30s popup timeout+retry handling, permission listing/revoke/re-request APIs for settings.
- `MakeItHome/Managers/Capture/ScreenRecorder.swift`: ScreenCaptureKit capture engine and stream configuration.
- `MakeItHome/Managers/Capture/Views/CapturePreview.swift`: SceneKit preview renderer and interaction.
- `MakeItHome/Views/Overscreen/WidgetZoneView.swift`: widgets zone SwiftUI controller.
- `MakeItHome/Resources/assets/widgets.html` and `MakeItHome/Resources/assets/script.js`: settings UI sections, including External Extensions permission controls.
- `MakeItHome/Resources/assets/`: web assets for the top widgets zone.
- `MakeItHome/MakeItHome Web Extension/Resources/background.js`: browser extension handshake, tokenized auth, and reconnect backoff on ignored permission popups.
- `MakeItHome/Static.swift`: global app state and configuration.
- `MakeItHome.xcodeproj`: Xcode project.

## Build and Run
- Open `MakeItHome.xcodeproj` in Xcode and run the macOS target.
- If CocoaPods are required, run `pod install` and open the workspace instead of the project.
- The app requires Screen Recording and Accessibility permissions to function.

## Concurrency Notes
- SceneKit, CALayer, and AppKit updates must happen on the main thread.
- Use `Display.imageProcessingQueue` for CI image processing; update previews and SceneKit materials on main.
- Avoid overlapping ScreenRecorder start and stop calls; prefer config updates when possible.

## Widget Zone Localization
- Keep all user-facing text in `MakeItHome/Resources/assets/widgets.html` localizable with a semantic `data-i18n="widgets.…"` key. Use `data-i18n-title` or `data-i18n-placeholder` for those attributes, and keep the English text in the HTML as the fallback.
- Add every new `widgets.…` key and its English value to `Localizable.xcstrings`. The web page collects its keys and fallbacks, sends them through the `widgetLocalization` WebKit message handler, then `WidgetZoneView.swift` returns the localized key/value JSON. Do not send this potentially large request through the custom URL bridge.
- For strings created dynamically in `script.js`, register the key and English fallback in `registerLocalizations`, and render it with `localizedString(key, fallback)`. This ensures it is included in the localization request before the page opens.

## Native Widget WebView and Search Invariants
- Do not reload or recreate the top `WKWebView` when native search enters or exits full-screen mode. Its DOM state, widget contents, and native child WebViews must remain alive; only their visibility and geometry should change.
- Full-screen search changes both the widget overlay height and vertical offset. When leaving it, restore `overlaySizeY` to `Static.OverscreenSizeTop` and `overlayOffsetY` to `(Static.OverscreenSizeTop - display.frame.height) / 2`. Restoring only the height leaves the still-loaded widget page outside the visible top zone.
- Keep search-specific pointer handling scoped to `fullOverscreenMode`. Do not broadly alter the normal overscreen hide timers or lifecycle, because that can disable the normal overscreen.
- Native child `WKWebView`s intercept pointer events, so parent-page `mousemove` alone cannot determine whether the pointer is navigating search results. Entering search must not pre-arm its upward-exit gesture; arm it only after an actual downward movement in the parent page.
- Defer extension permission alerts until the overscreen has fully closed. A permission request must not force-close an active search WebView or leave the overscreen unable to reopen.

## Known Hotspots
- `Displays.swift` aboveBy logic is complex and has unused variables.
- Rendering responsiveness depends on timely ScreenRecorder profile switches and SceneKit rendering state.

## Roadmap (from README and notes)
- MakeItHome 2.0 goals:
  - Widgets zone in the top bar (done)
  - Widgets from external apps (todo)
  - App Extension API, demo, and documentation; browser extension integration
- Clean up aboveBy management in Display class.
- Investigate thread overflow issues (possibly only a debug problem).
- Improve release testing coverage.
