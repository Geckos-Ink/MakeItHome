import AppKit
import WebKit

@MainActor
private final class NavigationObserver: NSObject, WKNavigationDelegate {
    var finishes = 0
    var starts = 0

    func webView(_ webView: WKWebView, didStartProvisionalNavigation navigation: WKNavigation!) {
        starts += 1
    }

    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        finishes += 1
    }
}

@main
struct SleepAwareWebViewTests {
    @MainActor static func pause(_ seconds: Double = 0.12) async {
        try? await Task.sleep(nanoseconds: UInt64(seconds * 1_000_000_000))
    }

    @MainActor static func wait(_ condition: () -> Bool) async {
        let deadline = ProcessInfo.processInfo.systemUptime + 8
        while !condition() {
            precondition(ProcessInfo.processInfo.systemUptime < deadline, "WebKit test timed out")
            await pause(0.01)
        }
    }

    @MainActor static func run() async throws {
        let center = NotificationCenter()
        var displaysAsleep = false
        let coordinator = WebViewSleepCoordinator(notificationCenter: center,
                                                   screensAreAsleep: { displaysAsleep },
                                                   wakeSettlingInterval: 0.05)
        func post(_ name: Notification.Name) { center.post(name: name, object: nil) }
        func sleep() {
            displaysAsleep = true
            post(NSWorkspace.screensDidSleepNotification)
            post(NSWorkspace.willSleepNotification)
        }
        func wake() {
            displaysAsleep = false
            post(NSWorkspace.didWakeNotification)
            post(NSWorkspace.screensDidWakeNotification)
        }
        func makeView() -> SleepAwareWebView {
            let configuration = WKWebViewConfiguration()
            configuration.websiteDataStore = .nonPersistent()
            return SleepAwareWebView(frame: NSRect(x: 0, y: 0, width: 100, height: 100),
                                     configuration: configuration, sleepCoordinator: coordinator)
        }

        let view = makeView(), observer = NavigationObserver()
        view.navigationDelegate = observer
        precondition(view.configuration.preferences.isFraudulentWebsiteWarningEnabled,
                     "Sleep handling must preserve fraud protection")
        view.loadHTMLString("<body>original<script>window.retainedMarker=42</script>", baseURL: nil)
        await wait { observer.finishes == 1 }

        // Real WebKit retains the document and JS state over healthy sleep/wake.
        sleep(); wake()
        precondition(coordinator.navigationSuspended, "Do not navigate in the first wake turn")
        await pause()
        precondition(observer.starts == 1, "Healthy wake must not reload")
        let marker = try await view.evaluateJavaScript("window.retainedMarker") as? Int
        precondition(marker == 42, "Retain page state across sleep")

        // Recovery storms collapse to one actual reload, only after display wake.
        sleep()
        for _ in 0..<100 { precondition(view.reload() == nil) }
        post(NSWorkspace.didWakeNotification) // Dark wake: display remains asleep.
        await pause()
        precondition(observer.starts == 1 && coordinator.navigationSuspended)
        displaysAsleep = false
        post(NSWorkspace.screensDidWakeNotification)
        await wait { observer.finishes == 2 }
        precondition(observer.starts == 2, "Only one recovery may replay")

        // A new sleep cancels the prior wake's timer; the next wake recovers.
        sleep()
        view.loadHTMLString("<body>superseded", baseURL: nil)
        wake()
        sleep()
        await pause()
        precondition(observer.starts == 2, "A retired wake must not navigate during sleep")
        view.loadHTMLString("<body>latest", baseURL: nil)
        view.reload() // Must not replace the pending new document with the old URL.
        view.reloadFromOrigin()
        wake()
        await wait { observer.finishes == 3 }
        let text = try await view.evaluateJavaScript("document.body.textContent") as? String
        precondition(text == "latest", "Latest navigation wins over stale recovery")
        precondition(observer.starts == 3)

        // stopLoading also cancels an operation that has not yet reached WebKit.
        sleep()
        view.loadHTMLString("<body>cancelled", baseURL: nil)
        view.stopLoading()
        wake()
        await pause()
        precondition(observer.starts == 3)

        // Both native file and URL-request entry points use the same boundary.
        let directory = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        try FileManager.default.createDirectory(at: directory, withIntermediateDirectories: true)
        defer { try? FileManager.default.removeItem(at: directory) }
        let file = directory.appendingPathComponent("fixture.html")
        try "<body>file fixture".write(to: file, atomically: true, encoding: .utf8)
        sleep()
        precondition(view.loadFileURL(file, allowingReadAccessTo: directory) == nil)
        wake()
        await wait { observer.finishes == 4 }
        precondition(view.url == file)
        sleep()
        let requestURL = URL(string: "about:blank#latest")!
        precondition(view.load(URLRequest(url: requestURL)) == nil)
        wake()
        await wait { observer.finishes == 5 }
        precondition(view.url == requestURL)

        // Cold creation during sleep queues its first load, without retaining a
        // retired host through the shared coordinator or its pending operation.
        sleep()
        weak var retired: SleepAwareWebView?
        autoreleasepool {
            let temporary = makeView()
            temporary.loadHTMLString("<body>retired", baseURL: nil)
            retired = temporary
        }
        precondition(retired == nil, "Sleep monitoring must not retain a retired view")
        let cold = makeView(), coldObserver = NavigationObserver()
        cold.navigationDelegate = coldObserver
        precondition(cold.loadHTMLString("<body>cold", baseURL: nil) == nil)
        wake()
        await wait { coldObserver.finishes == 1 }

        // Duplicate wake notifications do not keep pushing the settling deadline.
        post(NSWorkspace.screensDidSleepNotification)
        post(NSWorkspace.screensDidWakeNotification)
        view.loadHTMLString("<body>duplicate wake", baseURL: nil)
        for _ in 0..<12 {
            await pause(0.01)
            post(NSWorkspace.screensDidWakeNotification)
        }
        precondition(!coordinator.navigationSuspended,
                     "Duplicate wake notifications must not postpone or restart settling")
        await wait { observer.finishes == 6 }

        weak var releasedCoordinator: WebViewSleepCoordinator?
        autoreleasepool {
            let temporary = WebViewSleepCoordinator(notificationCenter: center, screensAreAsleep: { false })
            releasedCoordinator = temporary
            post(NSWorkspace.screensDidWakeNotification)
        }
        precondition(releasedCoordinator == nil, "Observers/timers must not retain the coordinator")

        // Startup can occur during a maintenance wake before this process has
        // observed any sleep notification. Inspect the initial display state.
        let startupCenter = NotificationCenter()
        var startupAsleep = true
        let startupCoordinator = WebViewSleepCoordinator(notificationCenter: startupCenter,
                                                          screensAreAsleep: { startupAsleep },
                                                          wakeSettlingInterval: 0.05)
        let configuration = WKWebViewConfiguration()
        configuration.websiteDataStore = .nonPersistent()
        let startup = SleepAwareWebView(frame: .zero, configuration: configuration,
                                        sleepCoordinator: startupCoordinator)
        let startupObserver = NavigationObserver()
        startup.navigationDelegate = startupObserver
        precondition(startup.loadHTMLString("<body>startup", baseURL: nil) == nil)
        startupCenter.post(name: NSWorkspace.didWakeNotification, object: nil)
        await pause()
        precondition(startupObserver.starts == 0, "Cold dark wake must remain deferred")
        startupAsleep = false
        startupCenter.post(name: NSWorkspace.screensDidWakeNotification, object: nil)
        await wait { startupObserver.finishes == 1 }
        print("SleepAwareWebViewTests: PASS (real WebKit state retention, dark wake, recovery coalescing, supersession, cancellation, file/request loads, cold/retired views)")
    }

    @MainActor static func main() {
        NSApplication.shared.setActivationPolicy(.prohibited)
        Task { @MainActor in
            do {
                try await run()
                exit(0)
            } catch {
                print("FAIL SleepAwareWebViewTests:", error)
                exit(1)
            }
        }
        NSApplication.shared.run()
    }
}
