//
//  SimpleHttpServer.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 06/01/24.
//  Copyright © 2024 geckos.ink. All rights reserved.
//

import Foundation
import Network
import AppKit

// http://127.0.0.1:19494/index.html

func copyDirectory(at sourceURL: URL, to destinationURL: URL) {
    let fileManager = FileManager.default

    // Create the destination directory if it doesn't exist
    if !fileManager.fileExists(atPath: destinationURL.path) {
        do {
            try fileManager.createDirectory(at: destinationURL, withIntermediateDirectories: true, attributes: nil)
        } catch {
            print("Failed to create destination directory: \(error)")
            return
        }
    }

    // Get the contents of the source directory
    do {
        let contents = try fileManager.contentsOfDirectory(at: sourceURL, includingPropertiesForKeys: nil, options: [])

        for content in contents {
            let destinationContentURL = destinationURL.appendingPathComponent(content.lastPathComponent)
            if fileManager.fileExists(atPath: destinationContentURL.path) {
                try fileManager.removeItem(at: destinationContentURL) // Remove existing item if any
            }
            try fileManager.copyItem(at: content, to: destinationContentURL)
        }
    } catch {
        print("Error during copying: \(error)")
    }
}

func copyAssetToAppContainer(fileName: String) -> URL? {
    let fileManager = FileManager.default

    guard let containerURL = fileManager.containerURL(forSecurityApplicationGroupIdentifier: "ink.geckos.MakeItHome") else {
        print("Error: Unable to find container URL")
        return nil
    }

    let destinationURL = containerURL.appendingPathComponent("Data").appendingPathComponent(fileName)

    guard var sourceURL = Bundle.main.url(forResource: "assets", withExtension: nil, subdirectory: nil) else {
        print("Error: Unable to find \(fileName) in the app bundle")
        return nil
    }
    
    sourceURL = sourceURL.appendingPathComponent(fileName)
    
    if !SimpleHTTPServer.CopyInDirectoryBundle{
        return sourceURL
    }

    copyDirectory(at: sourceURL, to: destinationURL)
    
    return destinationURL
}

func getAssetsUrl() -> URL? {
    guard var sourceURL = Bundle.main.url(forResource: "assets", withExtension: nil, subdirectory: nil) else {
        return nil
    }
    
    return sourceURL
}

func parseURLQueryItems(from urlString: String) -> [String: String]? {
    // Ensure the URL is valid
    guard let url = URL(string: urlString) else {
        return nil
    }
    
    // Create URLComponents from the URL
    guard let components = URLComponents(url: url, resolvingAgainstBaseURL: false) else {
        return nil
    }
    
    // Get the query items and map them to an array of tuples (key, value)
    guard let queryItems = components.queryItems else {
        return nil
    }
    
    let result = queryItems.map { ($0.name, $0.value ?? "") }
    
    var arr : [String: String] = [:]
    
    for (k, v) in result{
        arr[k] = v
    }
    
    return arr
}

func jsonStringToDictionary(jsonString: String) -> [String: Any?]? {
    // Convert the JSON string to Data
    guard let jsonData = jsonString.data(using: .utf8) else {
        print("Failed to convert JSON string to Data")
        return nil
    }
    
    do {
        // Deserialize the JSON data into a dictionary
        if let jsonDict = try JSONSerialization.jsonObject(with: jsonData, options: []) as? [String: Any] {
            // Convert the dictionary to [String: Any?]
            var resultDict: [String: Any?] = [:]
            for (key, value) in jsonDict {
                resultDict[key] = value
            }
            return resultDict
        } else {
            print("Failed to cast JSON object to [String: Any?]")
            return nil
        }
    } catch {
        print(jsonString)
        print("Error deserializing JSON data: \(error)")
        return nil
    }
}

class MimeManager {
    private var savedMimes: [String: String] = [:]
    private let queue = DispatchQueue(label: "ink.geckos.MakeItHome.mimeManagerQueue")
    
    func setMime(for fileExtension: String, value: String) {
        queue.async {
            self.savedMimes[fileExtension] = value
        }
    }
    
    func getMime(for fileExtension: String) -> String? {
        queue.sync {
            savedMimes[fileExtension]
        }
    }
}

public class SimpleHTTPServer {
    static public let CopyInDirectoryBundle = false
    
    private let port: NWEndpoint.Port
    private let directoryPath: String
    private var listener: NWListener?
    public var assetsAvailable = false
    private let requestQueue = DispatchQueue(label: "ink.geckos.MakeItHome.simpleHttpServer", qos: .userInitiated)
    private let maxRequestBodyBytes = 15 * 1024 * 1024
    
    private struct HTTPRequest {
        let method: String
        let path: String
        let headers: [String: String]
        let body: Data
    }
    
    private enum RequestParseResult {
        case pending
        case complete(HTTPRequest)
        case error(Data)
    }
    
    // I know, this is chaotic, but for the moment has sense: AppExtension works using this HTTP server
    // for communication, so this location remains a stable reference point
    var appExtensionManager : AppExtensionManager

    init(port: UInt16) {
        self.port = NWEndpoint.Port(rawValue: port)!
                
        let containerDir = getAssetsUrl()
        
        if containerDir != nil {
            assetsAvailable = true
        }

        self.directoryPath = containerDir?.path ?? ""
        
        self.appExtensionManager = AppExtensionManager()
        Static.appExtensionManager = self.appExtensionManager
        
        observeSystemNotifications()
    }
    
    private func observeSystemNotifications() {
        let nc = DistributedNotificationCenter.default()

        nc.addObserver(forName: NSWorkspace.screensDidSleepNotification, object: nil, queue: nil) { _ in
            self.stop()
        }

        nc.addObserver(forName: NSWorkspace.screensDidWakeNotification, object: nil, queue: nil) { _ in
            Task.detached {
                do {
                    try await self.start()
                }
                catch {
                    
                }
            }
        }
    }

    func start() async throws -> Bool { // is it important to make it async(?)
        if listener != nil {
            return true
        }
        
        listener = try NWListener(using: .tcp, on: port)
        listener?.newConnectionHandler = handleNewConnection
        listener?.parameters.acceptLocalOnly = true
        listener?.start(queue: requestQueue)
        print("Server started on port \(port)")
        return true
    }
    
    func stop(){
        listener?.cancel()
        listener = nil
        print("Server stopped")
    }

    private func handleNewConnection(connection: NWConnection) {
        var receivedData = Data()
        var completed = false
        
        func sendAndClose(_ data: Data) {
            guard !completed else { return }
            completed = true
            connection.send(content: data, completion: .contentProcessed({ _ in
                connection.cancel()
            }))
        }
        
        func receiveNextChunk() {
            connection.receive(minimumIncompleteLength: 1, maximumLength: 64 * 1024) { data, _, isComplete, error in
                if let data = data, !data.isEmpty {
                    receivedData.append(data)
                }
                
                if receivedData.count > self.maxRequestBodyBytes {
                    sendAndClose(self.buildResponse(statusCode: 413, reason: "Payload Too Large"))
                    return
                }
                
                switch self.parseRequest(from: receivedData) {
                case .complete(let request):
                    if let response = self.handleRequest(request: request) {
                        sendAndClose(response)
                    } else {
                        sendAndClose(self.buildResponse(statusCode: 400, reason: "Bad Request"))
                    }
                case .error(let response):
                    sendAndClose(response)
                case .pending:
                    if isComplete || error != nil {
                        sendAndClose(self.buildResponse(statusCode: 400, reason: "Bad Request"))
                    } else {
                        receiveNextChunk()
                    }
                }
            }
        }
        
        connection.start(queue: requestQueue)
        receiveNextChunk()
    }
    
    private func parseRequest(from data: Data) -> RequestParseResult {
        let delimiter = Data("\r\n\r\n".utf8)
        guard let headerRange = data.range(of: delimiter) else {
            return .pending
        }
        
        let headerData = data.subdata(in: 0..<headerRange.lowerBound)
        guard let headerString = String(data: headerData, encoding: .utf8) else {
            return .error(buildResponse(statusCode: 400, reason: "Bad Request"))
        }
        
        let lines = headerString.components(separatedBy: "\r\n")
        guard let requestLine = lines.first else {
            return .error(buildResponse(statusCode: 400, reason: "Bad Request"))
        }
        
        let firstLineParts = requestLine.split(separator: " ")
        guard firstLineParts.count >= 2 else {
            return .error(buildResponse(statusCode: 400, reason: "Bad Request"))
        }
        
        let method = String(firstLineParts[0])
        let path = String(firstLineParts[1])
        
        var headers: [String: String] = [:]
        for line in lines.dropFirst() {
            guard !line.isEmpty else { continue }
            let parts = line.split(separator: ":", maxSplits: 1)
            guard parts.count == 2 else { continue }
            let key = parts[0].trimmingCharacters(in: .whitespaces).lowercased()
            let value = parts[1].trimmingCharacters(in: .whitespaces)
            headers[key] = value
        }
        
        let lengthString = headers["content-length"] ?? headers["body-length"] ?? "0"
        let contentLength = Int(lengthString) ?? 0
        if contentLength < 0 || contentLength > maxRequestBodyBytes {
            return .error(buildResponse(statusCode: 413, reason: "Payload Too Large"))
        }
        
        let bodyStart = headerRange.upperBound
        let bodyEnd = bodyStart + contentLength
        if data.count < bodyEnd {
            return .pending
        }
        
        let body = data.subdata(in: bodyStart..<bodyEnd)
        let request = HTTPRequest(method: method, path: path, headers: headers, body: body)
        return .complete(request)
    }
    
    private func buildResponse(statusCode: Int,
                               reason: String,
                               body: Data = Data(),
                               contentType: String = "text/plain; charset=utf-8",
                               extraHeaders: [String: String] = [:]) -> Data {
        var httpHeaders = "HTTP/1.1 \(statusCode) \(reason)\r\n"
        httpHeaders += "Server: MakeItHome-SimpleHTTPServer\r\n"
        httpHeaders += "Content-Length: \(body.count)\r\n"
        httpHeaders += "Connection: close\r\n"
        httpHeaders += "Content-Type: \(contentType)\r\n"
        for (key, value) in extraHeaders {
            httpHeaders += "\(key): \(value)\r\n"
        }
        httpHeaders += "\r\n"
        
        return httpHeaders.data(using: .ascii)! + body
    }
    
    //private var savedMimes : [String:String] = [:]
    let mimeManager = MimeManager()
    
    func mimeType(for filePath: String, data _: Data) -> String {
        let url = URL(fileURLWithPath: filePath)
        let fileExtension = url.pathExtension.lowercased()
        
        if let res = self.mimeManager.getMime(for: fileExtension) {
            return res
        }
        
        let charset = "; charset=utf-8"
        let res: String
        switch fileExtension {
        case "html", "htm":
            res = "text/html" + charset
        case "js":
            res = "application/javascript" + charset
        case "css":
            res = "text/css" + charset
        case "json":
            res = "application/json" + charset
        case "png":
            res = "image/png"
        case "jpg", "jpeg":
            res = "image/jpeg"
        case "gif":
            res = "image/gif"
        case "svg":
            res = "image/svg+xml" + charset
        case "pdf":
            res = "application/pdf"
        case "txt":
            res = "text/plain" + charset
        case "xml":
            res = "application/xml" + charset
        case "woff2":
            res = "font/woff2"
        // Add more cases for other file types as needed
        default:
            res = "application/octet-stream" // generic binary data
        }
        
        self.mimeManager.setMime(for: fileExtension, value: res)
        
        return res
    }
    
    enum FileOperationError: Error {
        case fileNotFound, invalidDirectory, writingError, readingError
    }
    
    func getDefaultJson(at path: String) -> String? {
        var url = getAssetsUrl()
        url = url?.appendingPathComponent("boardJson")
        url = url?.appendingPathComponent(path)
        
        let data = try? Data(contentsOf: url!)
        
        if data != nil {
            return String(data:data!, encoding: .utf8)
        }
        
        return "[]"
    }

    func loadOrSaveJson(at path: String, dataToSave: String? = nil) throws -> String? {
        let fileManager = FileManager.default

        // Get the URL for the file
        guard let fileURL = Bundle.main.url(forResource: path, withExtension: nil) ?? fileManager.urls(for: .applicationSupportDirectory, in: .userDomainMask).first?.appendingPathComponent(path) else {
            throw FileOperationError.invalidDirectory
        }

        if let dataToSave = dataToSave, !dataToSave.isEmpty {
            do {
                if !fileManager.fileExists(atPath: fileURL.deletingLastPathComponent().path){
                    try fileManager.createDirectory(at: fileURL.deletingLastPathComponent(), withIntermediateDirectories: true, attributes: nil)
                }
                
                try dataToSave.data(using:.utf8)?.write(to: fileURL, options: [.completeFileProtection, .atomic])
                return dataToSave
            } catch {
                throw FileOperationError.writingError
            }
        }
        
        // Loading data from the file
        do {
            let data = try Data(contentsOf: fileURL)
            return String(data:data, encoding: .utf8)
        } catch {
            throw FileOperationError.fileNotFound
        }
        
        return nil
    }
    
    private func handleRequest(request: HTTPRequest) -> Data? {
        let method = request.method
        var url = request.path
        let dataReq = request.body.isEmpty ? nil : String(data: request.body, encoding: .utf8)
        
        if method != "GET" && method != "POST" {
            return buildResponse(statusCode: 405, reason: "Method Not Allowed")
        }
        
        ///
        /// Handle AppExtension
        ///
        
        if url.hasPrefix("/appExtension/") {
            let reply: AppExtensionMsg = DispatchQueue.main.sync {
                appExtensionManager.httpRequest(url: url, dataReq: dataReq)
            }
            let data = (try? JSONEncoder().encode(reply)) ?? Data()
            return buildResponse(statusCode: 200,
                                 reason: "OK",
                                 body: data,
                                 contentType: "application/json; charset=utf-8",
                                 extraHeaders: ["Cache-Control": "no-store"])
        }
        
        ///
        /// Fix for .js.map requests mapped as .js.m
        ///
        
        if url.hasSuffix(".js.m") {
            url += "ap"
        }
        
        let pathOnly = url.split(separator: "?").first.map(String.init) ?? url
        var jsonRes : String? = nil
        
        ///
        /// Handle API call
        ///
        if pathOnly.hasPrefix("/fuse/api/") {
            let jsonName = pathOnly.replacingOccurrences(of: "/", with: "-") + ".json"
            jsonRes = try? loadOrSaveJson(at: "boardJson/" + jsonName, dataToSave: dataReq)
            
            if jsonRes == nil {
                jsonRes = getDefaultJson(at: jsonName)
            }
        }
        
        if let jsonRes = jsonRes {
            let fileData = jsonRes.data(using: .utf8) ?? Data()
            return buildResponse(statusCode: 200,
                                 reason: "OK",
                                 body: fileData,
                                 contentType: "application/json; charset=utf-8")
        }
        
        ///
        /// Normal file serving
        ///
        guard !directoryPath.isEmpty else {
            return buildResponse(statusCode: 404, reason: "Not Found")
        }
        
        let filePath = directoryPath + pathOnly
        guard let fileData = FileManager.default.contents(atPath: filePath) else {
            return buildResponse(statusCode: 404, reason: "Not Found")
        }
        
        let mime = mimeType(for: String(pathOnly), data: fileData)
        return buildResponse(statusCode: 200, reason: "OK", body: fileData, contentType: mime)
    }
}
