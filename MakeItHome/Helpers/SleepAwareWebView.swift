import AppKit
import WebKit

/// Defers app-owned navigation/recovery across sleep and the first moments of
/// wake. It does not stop, reload or replace a healthy document on a transition.
@MainActor
final class WebViewSleepCoordinator {
    static let shared = WebViewSleepCoordinator()

    private let notificationCenter: NotificationCenter
    private let wakeSettlingInterval: TimeInterval
    private let screensAreAsleep: () -> Bool
    private var observers: [NSObjectProtocol] = []
    private let views = NSHashTable<SleepAwareWebView>.weakObjects()
    private var systemAsleep = false
    private var screensAsleep: Bool
    private var resumeTimer: Timer?
    private var wakeGeneration: UInt64 = 0
    private(set) var navigationSuspended: Bool

    init(notificationCenter: NotificationCenter = NSWorkspace.shared.notificationCenter,
         screensAreAsleep: @escaping () -> Bool = {
             NSScreen.screens.allSatisfy { screen in
                 guard let id = screen.deviceDescription[NSDeviceDescriptionKey("NSScreenNumber")] as? NSNumber else { return false }
                 return CGDisplayIsAsleep(id.uint32Value) != 0
             }
         },
         wakeSettlingInterval: TimeInterval = 2) {
        self.notificationCenter = notificationCenter
        self.screensAreAsleep = screensAreAsleep
        self.screensAsleep = screensAreAsleep()
        self.navigationSuspended = self.screensAsleep
        self.wakeSettlingInterval = wakeSettlingInterval

        for name in [NSWorkspace.willSleepNotification, NSWorkspace.didWakeNotification,
                     NSWorkspace.screensDidSleepNotification, NSWorkspace.screensDidWakeNotification] {
            observers.append(notificationCenter.addObserver(forName: name, object: nil, queue: .main) { [weak self] notification in
                // NotificationCenter's .main queue delivers synchronously on
                // main, so sleep takes effect before the notification returns.
                MainActor.assumeIsolated { self?.receive(notification.name) }
            })
        }
    }

    deinit {
        resumeTimer?.invalidate()
        observers.forEach(notificationCenter.removeObserver)
    }

    func register(_ view: SleepAwareWebView) {
        views.add(view)
    }

    private func receive(_ name: Notification.Name) {
        switch name {
        case NSWorkspace.willSleepNotification:
            systemAsleep = true
            suspend()
        case NSWorkspace.screensDidSleepNotification:
            screensAsleep = true
            suspend()
        case NSWorkspace.didWakeNotification:
            systemAsleep = false
            screensAsleep = screensAreAsleep()
            scheduleResumeIfAwake()
        case NSWorkspace.screensDidWakeNotification:
            screensAsleep = false
            scheduleResumeIfAwake()
        default:
            break
        }
    }

    private func suspend() {
        navigationSuspended = true
        wakeGeneration &+= 1
        resumeTimer?.invalidate()
        resumeTimer = nil
    }

    private func scheduleResumeIfAwake() {
        // A dark/maintenance wake must not replay remote navigations while the
        // displays are still asleep. Duplicate wake events share one deadline.
        guard navigationSuspended, !systemAsleep, !screensAsleep, resumeTimer == nil else { return }
        let generation = wakeGeneration
        let timer = Timer(timeInterval: wakeSettlingInterval, repeats: false) { [weak self] _ in
            MainActor.assumeIsolated {
                guard let self, self.wakeGeneration == generation,
                      !self.systemAsleep, !self.screensAsleep else { return }
                self.resumeTimer = nil
                self.navigationSuspended = false
                for view in self.views.allObjects {
                    view.resumePendingNavigation()
                }
            }
        }
        resumeTimer = timer
        RunLoop.main.add(timer, forMode: .common)
    }
}

/// One pending operation per live view; retired views and their requests are
/// released normally. Safe Browsing preferences and website data are unchanged.
public class SleepAwareWebView: WKWebView {
    private enum PendingNavigation {
        case request(URLRequest)
        case file(URL, readAccess: URL)
        case html(String, baseURL: URL?)
        case reload(fromOrigin: Bool)
    }

    private let sleepCoordinator: WebViewSleepCoordinator
    private var pendingNavigation: PendingNavigation?

    public override convenience init(frame: NSRect, configuration: WKWebViewConfiguration) {
        self.init(frame: frame, configuration: configuration, sleepCoordinator: .shared)
    }

    init(frame: NSRect, configuration: WKWebViewConfiguration,
         sleepCoordinator: WebViewSleepCoordinator) {
        self.sleepCoordinator = sleepCoordinator
        super.init(frame: frame, configuration: configuration)
        sleepCoordinator.register(self)
    }

    public required init?(coder: NSCoder) {
        sleepCoordinator = .shared
        super.init(coder: coder)
        sleepCoordinator.register(self)
    }

    @discardableResult public override func load(_ request: URLRequest) -> WKNavigation? {
        pendingNavigation = nil
        guard !sleepCoordinator.navigationSuspended else {
            pendingNavigation = .request(request)
            return nil
        }
        return super.load(request)
    }

    @discardableResult public override func loadFileURL(_ URL: URL, allowingReadAccessTo readAccessURL: URL) -> WKNavigation? {
        pendingNavigation = nil
        guard !sleepCoordinator.navigationSuspended else {
            pendingNavigation = .file(URL, readAccess: readAccessURL)
            return nil
        }
        return super.loadFileURL(URL, allowingReadAccessTo: readAccessURL)
    }

    @discardableResult public override func loadHTMLString(_ string: String, baseURL: URL?) -> WKNavigation? {
        pendingNavigation = nil
        guard !sleepCoordinator.navigationSuspended else {
            pendingNavigation = .html(string, baseURL: baseURL)
            return nil
        }
        return super.loadHTMLString(string, baseURL: baseURL)
    }

    @discardableResult public override func reload() -> WKNavigation? {
        guard !sleepCoordinator.navigationSuspended else {
            // A recovery callback must not replace a newer requested URL with a
            // reload of the old document. Repeated recovery requests coalesce.
            if pendingNavigation == nil { pendingNavigation = .reload(fromOrigin: false) }
            return nil
        }
        pendingNavigation = nil
        return super.reload()
    }

    @discardableResult public override func reloadFromOrigin() -> WKNavigation? {
        guard !sleepCoordinator.navigationSuspended else {
            if pendingNavigation == nil { pendingNavigation = .reload(fromOrigin: true) }
            return nil
        }
        pendingNavigation = nil
        return super.reloadFromOrigin()
    }

    public override func stopLoading() {
        pendingNavigation = nil
        super.stopLoading()
    }

    fileprivate func resumePendingNavigation() {
        guard !sleepCoordinator.navigationSuspended, let pending = pendingNavigation else { return }
        pendingNavigation = nil
        switch pending {
        case .request(let request): load(request)
        case .file(let url, let readAccess): loadFileURL(url, allowingReadAccessTo: readAccess)
        case .html(let html, let baseURL): loadHTMLString(html, baseURL: baseURL)
        case .reload(let fromOrigin):
            if fromOrigin { reloadFromOrigin() } else { reload() }
        }
    }
}
