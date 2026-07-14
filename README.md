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

**Current release: 2.0.9** — [available on the Mac App Store](https://apps.apple.com/it/app/makeithome-screen-extender/id6444596296?l=en-GB&mt=12)

## Features

- **Overscreen app switching** — cross a screen edge to reveal the running apps with live, real-time window previews. Click a preview to jump straight to that window.
- **App locking** — pin an app to a screen edge so it is always one flick away, on every Space.
- **The Widgets Zone** — the top edge hosts a dedicated widgets area with:
  - **Notes and Tasks** — quick notes and to-do lists, always within reach.
  - **Calendar** — glance at your schedule without opening another app.
  - **Clipboard history** — capture what you copy and paste it back later.
  - **My Widgets** — add your own custom web widgets.
- **Fast web search** — start a web search directly from the top zone, with full-page results in an instant overlay.
- **App Extension API** — third-party apps can extend their preview in the overscreen with their own interactive area (see below).
- **Localization** — the interface is translated into multiple languages.
- **Multi-display aware** — works with your monitors' arrangement.

### A note on privacy

MakeItHome uses the Screen Recording permission to create its magic: the live previews of your windows. The captured images are processed entirely on your Mac — they are never saved to disk nor sent over the internet.

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

The 2.0.x series is the consolidation of the "MakeItHome 2.0" goals introduced during the 1.9.x cycle, with the focus now on stability and polish:

- ✅ Widgets Zone in the top bar
- ✅ App Extension API, with a working demo app
- ✅ Browser extension groundwork (MakeItHome Web)
- ✅ Clipboard history widget
- ✅ Interface localization
- 🚧 Widgets from external apps
- 🚧 App Extension tutorial and API documentation
- 🚧 Browser extensions for more browsers

Development happens on branches named after the version in progress (currently **2.0.9**).

**Looking for testers!** New features have a talent for shipping with a bug nobody noticed. If you'd like to help make releases more stable, get in touch (contacts below).

## Development

- Open `MakeItHome.xcodeproj` in Xcode and run the macOS target.
- The app requires the **Screen Recording** and **Accessibility** permissions to function.
- The top Widgets Zone web assets live in `MakeItHome/Resources/assets/`; its Swift controller is `MakeItHome/Views/Overscreen/WidgetZoneView.swift`.
- The browser extension sources are in `MakeItHome/MakeItHome Web Extension/`.

Heads-up on GitHub's security advisories: they are all related to the Angular project used for the Notes and Tasks widgets and are inconsistent issues in practice. The Swift code advisories are the ones worth checking.

Code quality dashboard: [SonarCloud](https://sonarcloud.io/project/overview?id=Geckos-Ink_MakeItHome)

## Articles

- MacWorld: <a href="https://www.macworld.com/article/1533463/why-breaking-your-macs-screen-is-a-good-idea.html">*Why breaking your Mac's screen is a good idea*</a>

## Credits

Riccardo Cecchini \<rcecchini.ds@gmail.com> [cekkr](https://github.com/cekkr)
