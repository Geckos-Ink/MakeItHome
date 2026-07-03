# AGENTS

## Project Summary
- MakeItHome is a macOS SwiftUI app that extends screen edges into an "overscreen" UI for app switching and widgets.
- Uses ScreenCaptureKit for capture, SceneKit for rendering, and CoreImage for preview processing.
- Current release noted in README is 1.9.6, with 1.9.7 in progress.

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

## Known Hotspots
- `Displays.swift` aboveBy logic is complex and has unused variables (noted in README).
- Rendering responsiveness depends on timely ScreenRecorder profile switches and SceneKit rendering state.

## Roadmap (from README and notes)
- MakeItHome 2.0 goals:
  - Widgets zone in the top bar (done)
  - Widgets from external apps (todo)
  - App Extension API, demo, and documentation; browser extension integration
- Clean up aboveBy management in Display class.
- Investigate thread overflow issues mentioned in README.
- Improve release testing coverage.
