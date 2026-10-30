# What’s New in MakeItHome

## 2.1.3

- Improved the blurred overscreen background to reflect each display’s wallpaper, with support for still images, solid colors, and video-file fallbacks.
- On macOS 14 and later, sample the rendered wallpaper with existing Screen Recording access, keeping app windows and desktop icons out of the background.
- Keep the previous background during temporary loading failures and retry without losing each display’s cached wallpaper.
- Fixed a window-lifetime issue during duplicate Space-placeholder cleanup and a threading race when updating app-icon colors.

## 2.1.2

- Added “Move pointer to focused window on another display” in menu-bar settings, enabled by default, including switches between windows of the same app.
- Share tracked apps across displays while showing each app’s last focused window on the current screen. Apps with windows on other displays remain available, and pinned apps keep their preferred position.
- Clicking a preview selects its exact window. Closing the overscreen without a selection restores the window that was focused when it opened, on the same stable Space.
- Improved live preview delivery and display switching, reusing known capture displays and preventing delayed work from a previous screen from interrupting the current one.
- Apply changes to “High priority screen recording” immediately and restore the saved preference at startup.
- Keep extension approval responsive, dismiss Allow/Deny prompts promptly, and bound abandoned local connections.
- Improved Safari reconnects by retaining approved credentials after connection errors, and requested a persistent Safari background page during normal browser idle on macOS.
- Defer app-requested widget and extension navigation during sleep, resuming after wake settles while preserving healthy page state.

## 2.1.1

- Improved MakeItHome Web for Safari with tab titles and icons beneath cached previews, plus a globe fallback for unavailable icons.
- Preserve tab-carousel order, selection, and scroll position across reopening and content recovery. Incoming previews wait for navigation to settle.
- Improved exact-tab switching across Safari windows, including moved or minimized windows, with a smoother overscreen close and bounded retries.
- Added acknowledged tab-selection delivery, avoiding repeated selections after lost acknowledgements and expiring stale clicks after sleep.
- Reduced idle capture work and bounded in-memory preview caches. Preview images remain in memory; only the selected non-private tab and fallback position are saved.
- Improved capture start/stop cleanup and first-launch permission handling, including a one-time cursor-control request after Screen Recording approval and a centered instruction video.
- Updated the app icon and interface translations.

## 2.1.0

- Choose which built-in widgets — Clipboard, Notes, Tasks, and Calendar — appear in the Widgets Zone.
- Use the redesigned Calendar with a clearer month layout, expandable week rows, a dedicated daily agenda, and improved handling of all-day and timed events.
- Rely on a more robust Clipboard history with richer text support, smoother updates, bounded image previews, and a notch-aware layout.
- Enjoy smoother live previews and improved responsiveness while MakeItHome is active or idle.
- Benefit from refined widget visuals, better overlay contrast, and general stability and memory-use improvements.

## 2.0.9

- A smoother, more responsive cursor experience around screen edges and app previews.
- Improved app preview navigation, with gentler movement and smarter preview selection.
- Custom widgets and web search now keep their session and browsing state.
- More space for custom widgets, plus improved full-screen search reliability.
- The Widgets area is now fully localized.
- Improved handling of browser-extension permissions and overall stability.
