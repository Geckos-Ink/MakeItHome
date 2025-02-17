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
    private var savedMimes: [String: Any] = [:] // Replace `Any` with the actual type of `res`
    private let queue = DispatchQueue(label: "com.example.mimeManagerQueue")
    
    func setMime(for fileExtension: String, value: Any) { // Replace `Any` with the actual type of `res`
        queue.async {
            self.savedMimes[fileExtension] = value
        }
    }
    
    func getMime(for fileExtension: String) -> Any? { // Replace `Any?` with the actual type
        var result: Any? // Replace `Any?` with the actual type
        queue.sync {
            result = self.savedMimes[fileExtension]
        }
        return result
    }
}

public class SimpleHTTPServer {
    static public let CopyInDirectoryBundle = false
    
    private let port: NWEndpoint.Port
    private let directoryPath: String
    private var listener: NWListener?
    public var assetsAvailable = false
    
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
        if !assetsAvailable {
            return false
        }
        
        listener = try NWListener(using: .tcp, on: port)
        listener?.newConnectionHandler = handleNewConnection
        listener?.parameters.acceptLocalOnly = true
        listener?.start(queue: .main)
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
        func runOnComplete(){
            if completed {
                return
            }
            
            completed = true
            
            guard let r = String(data: receivedData, encoding: .utf8) else {
                let respData = "HTTP/1.1 400 Bad Request\r\n\r\n".data(using: .utf8)!
                connection.send(content: respData, completion: .contentProcessed({ _ in
                    connection.cancel()
                }))
                return
            }
                   
            //DispatchQueue.global(qos: .background).async {
            DispatchQueue.main.async {
                let response = self.handleRequest(request: r)
                
                
                if response == nil {
                    return
                }
                
                connection.send(content: response, completion: .contentProcessed({ _ in
                    connection.cancel()
                }))
            }
        }
        
        var lastMsg : Double = 0
        func receiveNextChunk() {
            connection.receive(minimumIncompleteLength: 1, maximumLength: .max) { data, _, isComplete, error in
                if let data = data, !data.isEmpty {
                    receivedData.append(data)
                    
                    let waitForIt = 50
                    lastMsg = Date.now.timeIntervalSince1970
                    delay(ms: waitForIt){
                        var now = Date.now.timeIntervalSince1970
                        if (now - lastMsg) >= (Double(waitForIt) / (1000)) {
                            runOnComplete()
                        }
                    }
                }
                if isComplete {
                    runOnComplete()
                } else if let error = error {
                    print("Connection error: \(error)")
                    connection.cancel()
                } else {
                    receiveNextChunk()
                }
            }
        }
        
        receiveNextChunk()
        
        delay(ms: 250){
            runOnComplete()
        }
        
        //connection.start(queue: DispatchQueue.global(qos: .background))
        connection.start(queue: .main)
    }
    
    //private var savedMimes : [String:String] = [:]
    let mimeManager = MimeManager()
    
    func mimeType(for filePath: String, data : Data) -> String {
        let url = URL(fileURLWithPath: filePath)
        let fileExtension = url.pathExtension.lowercased()
        
        var res = self.mimeManager.getMime(for: fileExtension) as? String // savedMimes[fileExtension]
        
        if res != nil {
            return res!
        }
        
        switch fileExtension {
        case "html", "htm":
            res = "text/html"+detectEncoding(for: data)
        case "js":
            res = "application/javascript"+detectEncoding(for: data)
        case "css":
            res = "text/css"+detectEncoding(for: data)
        case "json":
            res = "application/json"+detectEncoding(for: data)
        case "png":
            res = "image/png"
        case "jpg", "jpeg":
            res = "image/jpeg"
        case "gif":
            res = "image/gif"
        case "svg":
            res = "image/svg+xml"+detectEncoding(for: data)
        case "pdf":
            res = "application/pdf"+detectEncoding(for: data)
        case "txt":
            res = "text/plain"+detectEncoding(for: data)
        case "xml":
            res = "application/xml"+detectEncoding(for: data)
        case "woff2":
            res = "font-woff2"
        // Add more cases for other file types as needed
        default:
            res = "application/octet-stream"+detectEncoding(for: data) // generic binary data
        }
        
        //self.savedMimes[fileExtension] = res
        self.mimeManager.setMime(for: fileExtension, value: res)
        
        return res!
    }
    
    func detectEncoding(for data: Data) -> String {
        let encodings: [String.Encoding] = [
            .utf8, .utf16, .utf16BigEndian, .utf16LittleEndian, .utf32, .utf32BigEndian, .utf32LittleEndian, .isoLatin1, .isoLatin2, .windowsCP1251, .windowsCP1252, .windowsCP1253, .windowsCP1254, .windowsCP1250
            // Add more encodings as needed
        ]

        for encoding in encodings {
            if let string = String(data: data, encoding: encoding) {
                print("Decoded with \(encoding)")
                
                switch encoding {
                    case .utf8:
                        return ";charset=UTF-8"
                    case .utf16, .unicode:
                        return ";charset=UTF-16"
                    case .utf16BigEndian:
                        return ";charset=UTF-16BE"
                    case .utf16LittleEndian:
                        return ";charset=UTF-16LE"
                    case .utf32:
                        return ";charset=UTF-32"
                    case .utf32BigEndian:
                        return ";charset=UTF-32BE"
                    case .utf32LittleEndian:
                        return ";charset=UTF-32LE"
                    case .isoLatin1:
                        return ";charset=ISO-8859-1"
                    case .isoLatin2:
                        return ";charset=ISO-8859-2"
                    case .windowsCP1251:
                        return ";charset=windows-1251"
                    case .windowsCP1252:
                        return ";charset=windows-1252"
                    case .windowsCP1253:
                        return ";charset=windows-1253"
                    case .windowsCP1254:
                        return ";charset=windows-1254"
                    case .windowsCP1250:
                        return ";charset=windows-1250"
                    default:
                        return ";charset=unknown"
                    }
            }
        }

        return ""
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

        if dataToSave != nil && dataToSave!.count != 0 {
            
            while true {
                
                // Saving data to the Application Support Directory
                do {
                    if !fileManager.fileExists(atPath: fileURL.deletingLastPathComponent().path){
                        try fileManager.createDirectory(at: fileURL.deletingLastPathComponent(), withIntermediateDirectories: true, attributes: nil)
                    }
                    
                    try dataToSave!.data(using:.utf8)?.write(to: fileURL, options: [.completeFileProtection, .atomic])
                    //return dataToSave
                } catch {
                    throw FileOperationError.writingError
                }
                
                Thread.sleep(forTimeInterval: 0.01)
                
                // Loading data from the file
                do {
                    print("Checking json: \(fileURL.path)")
                    let data = try Data(contentsOf: fileURL)
                    let string = String(data:data, encoding: .utf8)
                    
                    if string == dataToSave {
                        return string
                    }
                } catch {
                    throw FileOperationError.fileNotFound
                }
            }
        }
        
        // Loading data from the file
        do {
            print("Reading json: \(fileURL.path)")
            let data = try Data(contentsOf: fileURL)
            return String(data:data, encoding: .utf8)
        } catch {
            throw FileOperationError.fileNotFound
        }
        
        return nil
    }
    
    private func getHeader(lines : [String], property: String) -> String?{
        for line in lines {
            if line.isEmpty {
                break
            }
            
            if line.starts(with: property){
                let parts = line.components(separatedBy: ": ")
                return parts.last
            }
        }
        
        return nil
    }
    
    private func handleRequest(request: String) -> Data? {
        let lines = request.split(whereSeparator: \.isNewline)
        
        guard let firstLine = lines.first else {
            return "HTTP/1.1 400 Bad Request\r\n\r\n".data(using: .utf8)!
        }
        
        let firstLineParts = firstLine.split(separator: " ")
                
        if firstLineParts.count < 2 {
            return "HTTP/1.1 400 Bad Request\r\n\r\n".data(using: .utf8)!
        }
        
        let reqType = firstLineParts[0]
        var url = firstLineParts[1]
        
        var dataReq : String?
        
        if reqType != "GET"{
            print("handle data post type")
            let dataParts = request.components(separatedBy: "\r\n\r\n")
            
            if(dataParts.count > 1){
                dataReq = dataParts[1]
                
                let dataReqCount = dataReq?.count ?? 0
     
                if false {
                    let strLength = getHeader(lines: lines.map { String($0) }, property: "Body-Length") ?? "0"
                    let len = Int(strLength) ?? 0
                    
                    if dataReqCount ?? 0 < len {
                        //print("given POST data", dataReq)
                        return nil
                    }
                }
            }
            else {
                print("empty post...")
                return nil
            }
        }
        
        var jsonRes : String? = nil
        
        ///
        /// Handle AppExtension
        ///
        
        if url.hasPrefix("/appExtension/"){
            let reply = appExtensionManager.httpRequest(url:String(url), dataReq: dataReq)
            let data = try? JSONEncoder().encode(reply)
            
            if data != nil{
                jsonRes = String(data: data!, encoding: .utf8)
            }
            else {
                jsonRes = "{}"
            }
        }
        
        ///
        ///
        ///
        
        if url.hasSuffix(".js.m"){
            url += "ap"
        }
        
        let queries = url.split(separator: "?")
        url = queries[0]
        //todo: if queries.count > 1 ...
        
        var fileData : Data = Data()
        
        ///
        /// Handle API call
        ///
        if url.hasPrefix("/fuse/api/"){
            let jsonName = url.replacingOccurrences(of: "/", with: "-") + ".json"
            
            print("Request JSON: \(jsonName)")
            
            jsonRes = try? loadOrSaveJson(at: "boardJson/"+jsonName, dataToSave: dataReq)
            
            if jsonRes == nil {
                jsonRes = getDefaultJson(at: jsonName)
            }
        }
        
        ///
        /// Normal file serving
        ///
        var mime : String = ""
        
        if jsonRes != nil {
            fileData = jsonRes?.data(using: .utf8) ?? fileData
            mime = mimeType(for: "dummy.json", data: fileData)
        }
        else {
            let filePath = directoryPath + url
            guard let fd = FileManager.default.contents(atPath: String(filePath)) else {
                return "HTTP/1.1 404 Not Found\r\n\r\n".data(using: .utf8)!
            }
            fileData = fd
            
            mime = mimeType(for: String(url), data: fileData)
        }
        
        var httpHeaders = "HTTP/1.1 200 OK\r\n"
        httpHeaders += "Server: MakeItHome-SimpleHTTPServer\r\n"
        httpHeaders += "Content-Length: " + String(fileData.count) + "\r\n"
        httpHeaders += "Accept-Ranges: bytes\r\n"
        httpHeaders += "Connection: Keep-Alive\r\n"
        httpHeaders += "Content-Type: " + mime
        httpHeaders += "\r\n\r\n"
        
        return httpHeaders.data(using: .ascii)! + fileData
    }
}
