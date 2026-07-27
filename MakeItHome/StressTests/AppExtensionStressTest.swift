#if STRESS_TEST_APP

import AppKit
import Foundation
import SwiftUI

private struct ExtensionFloodSnapshot {
    var completedRequests = 0
    var failedRequests = 0
    var bytesSent: UInt64 = 0
    var firstError: String?
}

private actor ExtensionFloodCounters {
    private var value = ExtensionFloodSnapshot()

    func record(bodyBytes: Int, error: String?) {
        value.completedRequests += 1
        value.bytesSent += UInt64(bodyBytes)
        if let error = error {
            value.failedRequests += 1
            if value.firstError == nil {
                value.firstError = error
            }
        }
    }

    func snapshot() -> ExtensionFloodSnapshot { value }
}

private enum ExtensionFloodEngine {
    static func run(
        port: UInt16,
        bundleID: String,
        clientID: String,
        secret: String,
        workers: Int,
        payloadBytes: Int,
        duration: TimeInterval,
        counters: ExtensionFloodCounters
    ) async {
        let configuration = URLSessionConfiguration.ephemeral
        configuration.httpMaximumConnectionsPerHost = workers
        configuration.timeoutIntervalForRequest = 10
        configuration.timeoutIntervalForResource = 15
        configuration.requestCachePolicy = .reloadIgnoringLocalCacheData
        let session = URLSession(configuration: configuration)
        let payload = String(repeating: "x", count: payloadBytes)
        let deadline = Date().addingTimeInterval(duration)

        await withTaskGroup(of: Void.self) { group in
            for worker in 0..<workers {
                group.addTask {
                    var sequence = 0
                    while !Task.isCancelled && Date() < deadline {
                        let route: String
                        let body: Data
                        if sequence % 10 == 0 {
                            route = "setHtmlContent"
                            let json = "{\"content\":\"<main data-worker='\(worker)' data-sequence='\(sequence)'>\(payload)</main>\",\"forceReload\":true}"
                            body = Data(json.utf8)
                        } else if sequence % 7 == 0 {
                            route = "checkStatus"
                            body = Data()
                        } else {
                            route = "sendJSMessage"
                            let json = "{\"jsMessage\":\"window.__makeItHomeStress={worker:\(worker),sequence:\(sequence),payload:'\(payload)'}\"}"
                            body = Data(json.utf8)
                        }

                        let error = await send(
                            session: session,
                            port: port,
                            route: route,
                            bundleID: bundleID,
                            clientID: clientID,
                            secret: secret,
                            body: body
                        )
                        await counters.record(bodyBytes: body.count, error: error)
                        sequence += 1
                    }
                }
            }
            await group.waitForAll()
        }
        session.invalidateAndCancel()
    }

    private static func send(
        session: URLSession,
        port: UInt16,
        route: String,
        bundleID: String,
        clientID: String,
        secret: String,
        body: Data
    ) async -> String? {
        var components = URLComponents()
        components.scheme = "http"
        components.host = "127.0.0.1"
        components.port = Int(port)
        components.path = "/appExtension/\(route)"
        components.queryItems = [
            URLQueryItem(name: "bundleId", value: bundleID),
            URLQueryItem(name: "clientId", value: clientID),
            URLQueryItem(name: "secret", value: secret),
            URLQueryItem(name: "token", value: token(secret: secret))
        ]

        guard let url = components.url else { return "Could not construct request URL" }
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.httpBody = body
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")

        do {
            let (data, response) = try await session.data(for: request)
            guard let response = response as? HTTPURLResponse, response.statusCode == 200 else {
                return "Non-200 HTTP response"
            }
            guard let reply = try? JSONDecoder().decode(AppExtensionMsg.self, from: data) else {
                return "Invalid JSON response"
            }
            guard reply.status == "ok" else {
                return reply.description ?? "Extension request rejected"
            }
            return nil
        } catch {
            return error.localizedDescription
        }
    }

    private static func token(secret: String) -> String {
        let second = Int64(Date().timeIntervalSince1970)
        return Data("\(secret):\(second)".utf8).sha256Hexa
    }
}

@MainActor
final class AppExtensionStressCoordinator: ObservableObject {
    @Published private(set) var status = "Preparing"
    @Published private(set) var completedRequests = 0
    @Published private(set) var failedRequests = 0
    @Published private(set) var megabytesSent = 0.0
    @Published private(set) var requestsPerSecond = 0.0
    @Published private(set) var peakResidentMB = 0.0
    @Published private(set) var peakThreads = 0
    @Published private(set) var lastError: String?

    let configuration: StressLaunchConfiguration

    private let bundleID = "ink.geckos.MakeItHome.StressExtension"
    private let clientID = "stress-client"
    private let counters = ExtensionFloodCounters()
    private var server: SimpleHTTPServer?
    private var runTask: Task<Void, Never>?
    private var metricsTask: Task<Void, Never>?
    private var startedAt: Date?

    init(configuration: StressLaunchConfiguration) {
        self.configuration = configuration
    }

    func start() {
        guard runTask == nil else { return }
        let server = SimpleHTTPServer(port: configuration.port)
        let app = AppExtension(bundleId: bundleID, identity: "\(bundleID)#\(clientID)")
        server.appExtensionManager.apps[bundleID] = app
        self.server = server
        status = "Starting server"

        runTask = Task { [weak self] in
            guard let self = self else { return }
            do {
                _ = try await server.start()
                try await Task.sleep(nanoseconds: 250_000_000)
                self.startedAt = Date()
                self.status = "Flooding"
                self.startMetricsSampling()

                await ExtensionFloodEngine.run(
                    port: self.configuration.port,
                    bundleID: self.bundleID,
                    clientID: self.clientID,
                    secret: app.secret,
                    workers: self.configuration.workers,
                    payloadBytes: self.configuration.payloadBytes,
                    duration: self.configuration.durationSeconds,
                    counters: self.counters
                )
                await self.finish()
            } catch {
                self.lastError = error.localizedDescription
                self.failedRequests += 1
                self.status = "Failed to start"
                server.stop()
                print("[AppExtensionStress] FAILED: \(error.localizedDescription)")
                finishStressRun(autoExit: self.configuration.autoExit, failed: true)
            }
        }
    }

    func stop() {
        runTask?.cancel()
        metricsTask?.cancel()
        server?.stop()
        status = "Stopped"
    }

    private func startMetricsSampling() {
        metricsTask = Task { [weak self] in
            guard let self = self else { return }
            while !Task.isCancelled {
                let snapshot = await self.counters.snapshot()
                self.apply(snapshot: snapshot)
                self.sampleProcess()
                try? await Task.sleep(nanoseconds: 250_000_000)
            }
        }
    }

    private func finish() async {
        metricsTask?.cancel()
        let snapshot = await counters.snapshot()
        apply(snapshot: snapshot)
        sampleProcess()
        server?.stop()
        status = snapshot.failedRequests == 0 ? "Completed" : "Completed with errors"
        let failed = snapshot.failedRequests > 0 || snapshot.completedRequests == 0
        print("[AppExtensionStress] \(failed ? "FAILED" : "COMPLETED") requests=\(snapshot.completedRequests) errors=\(snapshot.failedRequests) sentMB=\(String(format: "%.1f", megabytesSent)) rps=\(String(format: "%.1f", requestsPerSecond)) peakMemoryMB=\(String(format: "%.1f", peakResidentMB)) peakThreads=\(peakThreads)")
        if let firstError = snapshot.firstError {
            print("[AppExtensionStress] firstError=\(firstError)")
        }
        finishStressRun(autoExit: configuration.autoExit, failed: failed)
    }

    private func apply(snapshot: ExtensionFloodSnapshot) {
        completedRequests = snapshot.completedRequests
        failedRequests = snapshot.failedRequests
        megabytesSent = Double(snapshot.bytesSent) / 1_048_576
        lastError = snapshot.firstError
        if let startedAt = startedAt {
            requestsPerSecond = Double(snapshot.completedRequests) / max(Date().timeIntervalSince(startedAt), 0.001)
        }
    }

    private func sampleProcess() {
        let sample = StressProcessSample.capture()
        peakResidentMB = max(peakResidentMB, sample.residentMegabytes)
        peakThreads = max(peakThreads, sample.threadCount)
    }
}

struct AppExtensionStressView: View {
    @StateObject private var coordinator: AppExtensionStressCoordinator

    init(configuration: StressLaunchConfiguration) {
        _coordinator = StateObject(wrappedValue: AppExtensionStressCoordinator(configuration: configuration))
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 18) {
            HStack {
                VStack(alignment: .leading, spacing: 3) {
                    Text("AppExtension server stress")
                        .font(.title2.weight(.bold))
                    Text("Authenticated large POST requests through the real local HTTP listener and AppExtensionManager")
                        .foregroundStyle(.secondary)
                }
                Spacer()
                Text(coordinator.status)
                    .font(.headline)
                    .foregroundStyle(coordinator.status == "Completed" ? .green : .primary)
            }

            HStack(spacing: 10) {
                StressMetricCard(title: "Requests", value: "\(coordinator.completedRequests)")
                StressMetricCard(title: "Errors", value: "\(coordinator.failedRequests)")
                StressMetricCard(title: "Throughput", value: String(format: "%.1f req/s", coordinator.requestsPerSecond))
                StressMetricCard(title: "Payload sent", value: String(format: "%.1f MB", coordinator.megabytesSent))
                StressMetricCard(title: "Peak memory", value: String(format: "%.0f MB", coordinator.peakResidentMB))
                StressMetricCard(title: "Peak threads", value: "\(coordinator.peakThreads)")
            }

            VStack(alignment: .leading, spacing: 10) {
                configurationRow("Concurrent clients", "\(coordinator.configuration.workers)")
                configurationRow("Payload per request", "\(coordinator.configuration.payloadBytes / 1_024) KB")
                configurationRow("Duration", String(format: "%.1f seconds", coordinator.configuration.durationSeconds))
                configurationRow("Server", "127.0.0.1:\(coordinator.configuration.port)")
                configurationRow("Routes", "setHtmlContent, sendJSMessage, checkStatus")
            }
            .padding(16)
            .background(.quaternary, in: RoundedRectangle(cornerRadius: 10))

            if let error = coordinator.lastError {
                Text(error)
                    .foregroundStyle(.red)
                    .textSelection(.enabled)
            }

            Spacer()
            HStack {
                Text("Use Instruments System Trace to inspect whether the live thread count returns to baseline after completion.")
                    .foregroundStyle(.secondary)
                Spacer()
                Button("Stop") { coordinator.stop() }
            }
        }
        .padding(20)
        .frame(minWidth: 980, minHeight: 520)
        .task { coordinator.start() }
    }

    private func configurationRow(_ title: String, _ value: String) -> some View {
        HStack(alignment: .firstTextBaseline, spacing: 18) {
            Text(title)
                .foregroundStyle(.secondary)
                .frame(width: 160, alignment: .leading)
            Text(value)
                .font(.system(.body, design: .monospaced))
                .textSelection(.enabled)
        }
    }
}

#endif
