//
//  WidgetZoneView.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 06/10/23.
//  Copyright © 2023 geckos.ink. All rights reserved.
//

/*
 # Notes:
 This page is full of unused content during its development.
 It's necessary to try to remove stuff and check if it continues to work.
*/

import SwiftUI
import WebKit
import Cocoa

struct WidgetZoneView: View {
    @State private var isDropTargeted = false
    
    @StateObject fileprivate var viewModel = ViewModel()
    
    var body: some View {
        VStack{
            TopWebView()
                /*.overlay{
                    Image(systemName: "photo")
                        .onDrag { NSItemProvider(object: NSImage(named: "AppIcon")!)
                            
                        }
                        .onDrop(of: ["public.file-url"], isTargeted: nil) { providers, _ in
                            guard let itemProvider = providers.first else { return false }
                            return true
                        }
                }*/
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    }
    
    func process(titles: [String]) {
        print("process \(titles)")
    }
    
    func animateDrop(at: CGPoint) {
        print("at \(at)")
    }
}

fileprivate class ViewModel: NSObject, ObservableObject, DropDelegate {
    func dropEntered(info: DropInfo) {
        print("Drop entered: \(info)")
    }
    
    func dropUpdated(info: DropInfo) -> DropProposal? {
        print("Drop updated: \(info)")

        return DropProposal(operation: .copy)
    }
    
    func dropExited(info: DropInfo) {
        print("Drop exited: \(info)")
    }
    
    func performDrop(info: DropInfo) -> Bool {
        print("Perform drop: \(info)")
        return true
    }
}

#Preview {
    WidgetZoneView()
}

// Sorry, this is ugly
func loadTopWKWB(webView: WKWebView){
    if Static.TopBarIsPreview {
        if let url = Bundle.main.url(forResource: "preview", withExtension: "html") {
            webView.loadFileURL(url, allowingReadAccessTo: url.deletingLastPathComponent())
        }
    }
    else {
        
        Static.TopBarWebView?.initHttpServer()
        
        if let url = URL(string: "http://127.0.1:19494/widgets.html?height="+String(format: "%.1f", Static.OverscreenSizeTop)) {
            var urlReq = URLRequest(url: url)
            webView.load(urlReq)
        } else {
            print("Invalid URL")
        }

    }
}

public struct TopWebView: NSViewRepresentable {
    public let wkwv = TopWKWV()
    public var lastMsg : String?
    
    
    // 2
    public func makeNSView(context: Context) -> WKWebView {
        Static.topBarWebViewRepresentable = self
        
        if false {
            wkwv.setValue(true, forKey: "drawsBackground")
            wkwv.underPageBackgroundColor = NSColor(red: 0.1, green: 0.1, blue: 0.1, alpha: 1)
        }
        else { // transparent background (desktop)
            wkwv.setValue(false, forKey: "drawsBackground")
            wkwv.underPageBackgroundColor = NSColor.clear
        }
        
        wkwv.registerForDraggedTypes([.fileURL, .png, .string])
        wkwv.uiDelegate = context.coordinator
        wkwv.navigationDelegate = context.coordinator
        
        wkwv.configuration.setValue(true, forKey: "_allowUniversalAccessFromFileURLs")
        wkwv.configuration.userInterfaceDirectionPolicy = .system
     
        //wkwv.configuration.preferences.setValue(true, forKey: "developerExtrasEnabled")
        
        if #available(macOS 13.3, *) {
            wkwv.isInspectable = true;
        }
        
        var fuck = self
        fuck.delegate = context.coordinator
        
        Static.TopBarWebView = wkwv
        
        return wkwv
    }
    
    // 3
    public func updateNSView(_ webView: WKWebView, context: Context) {
        if !Static.TopBarIsPreview{
            loadTopWKWB(webView: webView)
        }
    }
    
    public func makeCoordinator() -> Coordinator {
       return Coordinator(parent: self)
    }
    
    var delegate: DragDropDelegate?
    
    public func sendMessage(str: String){
        // Call the injected JavaScript function from Swift
        let callScript = "receiveMessage('\(str)');"
        wkwv.evaluateJavaScript(callScript, completionHandler: nil)
    }
    
    public func sendMessage(obj: JSMessage){        
        do {
            let jsonData = try JSONEncoder().encode(obj)
            let msg = String(data: jsonData, encoding: String.Encoding.utf8)
            
            if msg != nil{
                let callScript = "receiveMessage("+msg!+");"
                //print(callScript)
                wkwv.evaluateJavaScript(callScript, completionHandler: nil)
            }
        }
        catch {
            print("EEEEERRROOORRR")
        }
    }
            
}


// Your delegate protocol for handling drops
public protocol DragDropDelegate {
    func didDrop(files: [URL])
}

public class Coordinator: NSObject, WKUIDelegate, WKNavigationDelegate, NSDraggingDestination, DropDelegate, DragDropDelegate {
    var parent: TopWebView

    var firstLoad = true
    
    init(parent: TopWebView) {
        self.parent = parent
    }    
     
    
    @objc func startDragging(_ sender: NSDraggingSession) {
        let content = "Content to be written to the file"
        let fileUrl = FileManager.default.temporaryDirectory.appendingPathComponent("example.txt")
        do {
            try content.write(to: fileUrl, atomically: true, encoding: .utf8)
            sender.draggingPasteboard.writeObjects([fileUrl as NSPasteboardWriting])
        } catch {
            print("Error writing data to file: \(error)")
        }
    }
    
    func didDragItem(withInfo info: String) {
        print("Dropped item with info: \(info)")
        // Handle the dropped item here
    }
    
    public func didDrop(files: [URL]) {
        print("Dropped item with info: \(files)")
        // Handle the dropped item here
    }
    
    public func dropEntered(info: DropInfo) {
        print("Drop entered: \(info)")
    }
    
    public func dropUpdated(info: DropInfo) -> DropProposal? {
        print("Drop updated: \(info)")

        return DropProposal(operation: .copy)
    }
    
    public func dropExited(info: DropInfo) {
        print("Drop exited: \(info)")
    }
    
    public func performDrop(info: DropInfo) -> Bool {
        print("Perform drop: \(info)")
        return true
    }

    // Implement WKNavigationDelegate method to allow navigation for dropped items
    public func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        
        guard let url = navigationAction.request.url else {
            decisionHandler(.cancel)
            return
        }
        
        print("received url ", url)
        
        func frameOpenUrl(url : URL){
            
            var request = URLRequest(url: url)
            //request.setValue("text/plain; charset=utf-8", forHTTPHeaderField: "Content-Type")
            
            // Create a URLSession task for making the GET request
            let task = URLSession.shared.dataTask(with: request) { (data, response, error) in
              // Handle the response here
              if let error = error {
                  print("Error: \(error)")
              } else if let data = data {
                  
                  if let response = response as? HTTPURLResponse {
                      let statusCode = response.statusCode
                      let headers = response.allHeaderFields
                      
                      // Handle the response here
                      print("Status Code: \(statusCode)")
                      print("Headers: \(headers)")
                      
                      let loc = headers["location"]
                      if loc != nil {
                          frameOpenUrl(url: URL(string: (loc as? String)!)!)
                      }
                      else {
                          // Parse the data if needed
                          var msg = JSMessage()
                          msg.type = "frameResponse";
                          //msg.value = String(data: data, encoding: .ascii);
                          msg.data = data
                          msg.url = url.absoluteURL
                          self.parent.sendMessage(obj: msg)
                      }
                      
                  } else {
                      // Handle error or unexpected response type
                      print("Error: Invalid HTTPURLResponse")
                  }
              }
            }

            // Start the task
            task.resume()
        }
        
        let frame = navigationAction.targetFrame
        if !(frame?.isMainFrame ?? true){ // it's an internal frame
            
            decisionHandler(.allow)
            return;
            
            /*if url.lastPathComponent == "mrWhite.html" {
                decisionHandler(.allow)
            }
            else {
                if url.absoluteString.starts(with: "http") {
                    if !url.absoluteString.contains("makeithome-bridge.php"){
                        
                        // Parse the data if needed
                        var msg = JSMessage()
                        msg.type = "frameResponse";
                        msg.url = url.absoluteURL
                        self.parent.sendMessage(obj: msg)
                        
                        decisionHandler(.cancel)
                    }
                    else {
                        if url.absoluteString.contains("bridge.php?url=http"){
                            decisionHandler(.allow)
                        }
                        else {
                            decisionHandler(.cancel)
                        }
                    }
                }
                else {
                    decisionHandler(.cancel)
                }
            }
            
            return;*/
        }
        
        if(url.scheme == "file"){
            if(firstLoad || url.lastPathComponent == "mrWhite.html"){
                decisionHandler(.allow)
                firstLoad = url.lastPathComponent == "mrWhite.html"
            }
            else {
                // Handle dropped file URL here
                print("Dropped file URL: \(url)")
                
                if !parent.wkwv.dragOutside{
                    Static.clipboard?.droppedFileUrl(url: url)
                    
                    Static.topBarWebViewRepresentable?.sendMessage(str: "dragging")
                }
                
                decisionHandler(.cancel)
            }
        }
        else if let url = navigationAction.request.url, // is a message
           url.scheme == "myapp",
           url.host == "message",
           let message = url.queryParameters?["text"] {
            // Handle the message from JavaScript
            print("Message from JavaScript: \(message)")
            
            //pasteFile(filePath: "file:///Users/riccardo/Sources/GitHub/Extension-Twitch-LowLatency/stuff/forward.png")
            
            var isJson = false
            var json : JSMessage?
            
            do {
                let jsonDecoder = JSONDecoder()
                json = try jsonDecoder.decode(JSMessage.self, from: message.data(using: .utf8)!)
                isJson = true
            }
            catch{
                let err = error.localizedDescription
                print(error, err)
                isJson = false
            }
            
            if isJson {
                if json?.type == "jsError"{
                    print(json?.value);
                }
                
                if json?.type == "selItem"{
                    let id = json?.id
                    
                    Static.clipboard?.selectElement(id: id!)
                    
                    Static.isDraggingFromPoint = NSEvent.mouseLocation
                    Static.selectedClipboardItemId = id!
                    parent.wkwv.dragOutside = true
                    print("DRAGGING OUT MODE")
                }
                
                if json?.type == "enterFullscreen" {
                    Static.curDisplay?.onFullOverscreenMode()
                }
                
                if json?.type == "closeFullscreen" {
                    Static.curDisplay?.outFullOverscreenMode()
                }
                
                if json?.type == "frameOpen" {
                    frameOpenUrl(url: URL(string: json!.value!)!)
                }
                
                if json?.type == "navUrl" {
                    Static.navWebView?.navigate(url: json!.url!)
                }
                
                if json?.type == "navPos" {
                    Static.storeView?.view?.vars.navOverlayOffsetX = 0 // json!.x!
                    Static.storeView?.view?.vars.navOverlayOffsetY = (json!.y! / 2)
                    Static.storeView?.view?.vars.navOverlaySizeX = json!.width!
                    Static.storeView?.view?.vars.navOverlaySizeY = json!.height!
                }
                
                if json?.type == "setSetting" {
                    
                    switch json?.setting {
                    case "detectDragAndDrop":
                        Static.EnableDragDropDetection = json!.valBool!
                        Static.User.set(Static.EnableDragDropDetection, forKey: "EnableDragDropDetection")
                        break
                    case .none:
                        break
                    case .some(_):
                        break
                    }
                }
                
                if json?.type == "calendar" {
                    Static.calendar?.receive(msg: json!)
                }
                
                if json?.type == "haptic"{
                    performHaptic()
                }
                
                //todo: type == "widget", where to redirect the request directly to widget core(?)
                
                decisionHandler(.cancel)
                return
            }
            
            if(message == "dragOut"){
                parent.wkwv.dragOutside = true
            }
            else {
                parent.lastMsg = message
                Static.strDraggingFile = message
                print("setted lastMsg")
            }
            
            decisionHandler(.cancel)
            return
        }
        
        if url.host == "127.0.0.1"{
            decisionHandler(.allow)
        }
        else {
            decisionHandler(.cancel)
        }
        
        return
    }
    
    func pasteFile(filePath: String) {
        CGRequestPostEventAccess()
        
        // Create a pasteboard
        let pasteboard = NSPasteboard.general
        
        // Clear the existing contents of the pasteboard
        pasteboard.clearContents()
        
        // Add the file URL to the pasteboard
        let fileURL = URL(fileURLWithPath: filePath)
        let res = fileURL.startAccessingSecurityScopedResource()
        pasteboard.writeObjects([fileURL as NSPasteboardWriting])
    }

    // Implement WKUIDelegate method to allow dragging of items
    func webView(_ webView: WKWebView, startDragging item: NSItemProvider, from frame: NSRect, sandboxed: Bool) -> Bool {
        // Handle dragged item here
        print("Dragging item")
        return true
    }
    
    func webView(_ webView: WKWebView, dragStartFor items: [NSDraggingItem], session: NSDraggingSession) {
        // Handle drag start event
        // You can modify the NSDraggingItem with your custom data
        // For example, set the UTIs and pasteboard data here
        print("fucking dragging")
    }
    
    func webView(_ webView: WKWebView, dropping: NSItemProvider) -> Bool {
        // Handle dragged item here
        print("Dragging item")
        return true
    }
    
    public func validateDrop(info: DropInfo) -> Bool {
        print("validate drop")
        return true
    }
    
    func draggingSession(_ session: NSDraggingSession, sourceOperationMaskFor context: NSDraggingContext) -> NSDragOperation {
        print("drag session")
        return .copy
    }

    func pasteboard(_ pasteboard: NSPasteboard?, item: NSPasteboardItem, provideDataForType type: NSPasteboard.PasteboardType) {
        if type == NSPasteboard.PasteboardType("your.custom.draggable.type") {
            pasteboard?.setString("Custom Draggable Data", forType: .string)
        }
        
        print("Dragging item (pasteboard)")
    }
    
    public func performDragOperation(_ sender: NSDraggingInfo) -> Bool {
        let pasteboard = sender.draggingPasteboard
        if let urls = pasteboard.readObjects(forClasses: [NSURL.self], options: nil) as? [URL], let url = urls.first {
            // Handle dropped file URL here
            print("Dropped file URL: \(url)")
            return true
        }
        return false
    }
    
    public func draggingEntered(_ sender: NSDraggingInfo) -> NSDragOperation {
        if let urls = sender.draggingPasteboard.readObjects(forClasses: [NSURL.self], options: nil) as? [URL], urls.count > 0 {
            // Handle the dragged file URLs here
            return .copy
        }
        return []
    }
    
    private func extractFileURL(from pasteboard: NSPasteboard) -> URL? {
        if let fileURL = pasteboard.readObjects(forClasses: [NSURL.self], options: nil)?.first as? URL {
            return fileURL
        }
        return nil
    }

    private func icon(forFileURL fileURL: URL) -> NSImage? {
        let workspace = NSWorkspace.shared
        if let icon = workspace.icon(forFile: fileURL.path) as NSImage? {
            return icon
        }
        
        return nil // Default empty image
    }
}

public class TopWKWV : WKWebView, NSDraggingSource{
    
    public var httpServer : SimpleHTTPServer?
    
    public func initHttpServer(){
        httpServer = SimpleHTTPServer(port: 19494)
        
        Task {
            do {
                try await httpServer!.start()
            } catch {
                print("Failed to start server: \(error)")
            }
        }
        
        // Take advantage of this function to init some aspects of the web view
        wantsLayer = true
        
        // https://developer.apple.com/documentation/webkit/wkwebviewconfiguration#//apple_ref/doc/c_ref/WKWebViewConfiguration
        //self.configuration.processPool = WKProcessPool() // as by default
        self.configuration.suppressesIncrementalRendering = true
        
    }
    
    ///
    ///
    ///
    public var dragOutside = false
    
    public func draggingSession(_ session: NSDraggingSession, sourceOperationMaskFor context: NSDraggingContext) -> NSDragOperation {
        //print("dragging")
        //parent?.sendMessage(str: "dragging")
        
        return .copy
    }
    
    public override func draggingEntered(_ sender: NSDraggingInfo) -> NSDragOperation {
        print("dragging entered")
        
        if(!dragOutside){
            if(!mouseDown){ // is an external dragging operation
                Static.topBarWebViewRepresentable?.sendMessage(str: "dragging")
                Static.disableScreenUpdate = true
            }
            
            return super.draggingEntered(sender)
        }
        
        Static.disableScreenUpdate = true
        sender.animatesToDestination = true
        print("sender.description ", sender.description)
        
        return .copy
    }
    
    public override func draggingEnded(_ sender: NSDraggingInfo) {
        Static.disableScreenUpdate = false
        
        if(!dragOutside){
            //return super.draggingEnded(sender)
            return
        }
        else {
            dragOutside = false
            return
        }
    }
    
    public override func draggingExited(_ sender: NSDraggingInfo?) {
        Static.disableScreenUpdate = false
        print("dragging out")
        
        if(!dragOutside){
            return super.draggingExited(sender)
        }
        else {
            return
        }
    }
    
    var mouseDown = false
    public override func mouseDown(with event: NSEvent) {
        print("mouse down")
        mouseDown = true
        
        if dragOutside && calculateDistance(point1: NSEvent.mouseLocation, point2: Static.isDraggingFromPoint!) > 10{
            dragOutside = false
        }
        
        if(!dragOutside){
            super.mouseDown(with: event)
        }
        else {
            dragPasteboard(event: event)
            return
        }
    }
    
    func dragPasteboard(event: NSEvent){
        print("pasteboard mgmt")
                        
        // Start the drag with multiple representations
        let el = Static.clipboard?.getElement(id: Static.selectedClipboardItemId)
        let pasteboardItem = el?.getItem()

        // You can also add other representations like images, files, etc.
        // pasteboardItem.setData(data, forType: .png)
        // pasteboardItem.setPropertyList(propertyList, forType: .fileURL)
        
        if pasteboardItem != nil {
            let item = NSDraggingItem(pasteboardWriter: pasteboardItem!)
            item.setDraggingFrame(self.bounds, contents: NSImage.Name("AppIcon"))
            beginDraggingSession(with: [item], event: event, source: self)
        }
    }
    
    public override func mouseMoved(with event: NSEvent) {
        if(!dragOutside){
            super.mouseMoved(with: event)
        }
        else {
            return
        }
    }
    
    public override func mouseUp(with event: NSEvent) {
        print("mouse up")
        mouseDown = false
        
        if(!dragOutside){
            super.mouseUp(with: event)            
        }
        else{
            dragOutside = false
        }
    }
    
    ///
    /// Rendering management
    ///
    var isRendering = !Static.TopBarIsPreview
    var callRendering = false
    
    // Function to stop rendering
    func stopRendering() {
        if isRendering && Static.TopBarIsPreview {
            print("stop TopWKWB rendering")
            
            if let url = Bundle.main.url(forResource: "mrWhite", withExtension: "html") {
                self.loadFileURL(url, allowingReadAccessTo: url.deletingLastPathComponent())
            }
            
            isRendering = false
        }
        
        if callRendering {
            delay(ms: 100){
                Static.topBarWebViewRepresentable?.sendMessage(str: "closing")
            }
        }
        
        callRendering = false
    }

    // Function to restart rendering
    var firstOpening = true
    func restartRendering() {
        if(!isRendering){
            print("start TopWKWB rendering")
            
            // Reload the web view to restart rendering
            loadTopWKWB(webView: self)
     
            isRendering = true
        }
        else {
            if !callRendering {
                
                dragOutside = false
                
                delay(ms: 50){
                    Static.topBarWebViewRepresentable?.sendMessage(str: "opening")
                    
                    if self.firstOpening { // Set settings
                        self.firstOpening = false
                        
                        var jsMessage = JSMessage()
                        jsMessage.type = "setSetting"
                        jsMessage.setting = "detectDragAndDrop"
                        jsMessage.valBool = Static.EnableDragDropDetection
                        self.sendMessage(obj: jsMessage)
                    }
                }
                
                //NSRunningApplication.current.activate(options: .activateAllWindows)
                delay(ms: 100){
                    self.focusOnWebViewElement() // useless I guess
                }
            }
        }
        
        callRendering = true
    }
    
    func focusOnWebViewElement() {
        let script = "document.getElementById('searchbar').focus();"
        self.evaluateJavaScript(script, completionHandler: { (result, error) in
            if let error = error {
                print("Error focusing on element: \(error.localizedDescription)")
            } else {
                print("Focused on the element successfully.")
            }
        })
    }
    
    ///
    /// Send message
    ///
    
    public func sendMessage(str: String){
        // Call the injected JavaScript function from Swift
        let callScript = "receiveMessage('\(str)');"
        self.evaluateJavaScript(callScript, completionHandler: nil)
    }
    
    public func sendMessage(obj: JSMessage){
        do {
            let jsonData = try JSONEncoder().encode(obj)
            let msg = String(data: jsonData, encoding: String.Encoding.utf8)
            
            if msg != nil{
                let callScript = "receiveMessage("+msg!+");"
                //print(callScript)
                self.evaluateJavaScript(callScript, completionHandler: nil)
            }
        }
        catch {
            print("EEEEERRROOORRR")
        }
    }
}


public struct JSMessage: Codable {
    var type: String? = ""
    var value: String? = ""
    var op : String? = ""
    
    var format : String? = ""
    var url : URL?
    var str : String?
    var imgBase : String?
    
    var id : Int?
    var strId : String?
    
    var data : Data?
    
    var x: CGFloat?
    var y: CGFloat?
    var width: CGFloat?
    var height: CGFloat?
    
    // Settings
    var setting : String?
    var valBool : Bool?
    
    // Calendar
    var firstDate : String?
    var lastDate : String?
    
    var title : String?
    var day : String?
    var startTime : String?
    var endTime : String?
    var allDay : Bool?
    var location : String?
    var notes : String?
    var calendar : String?
    var color: [CGFloat]?    
    
    // Calendars
    var calendarsTitles : [String]?
    var calendarsColors : [[CGFloat]]?
}

extension URL {
    public var queryParameters: [String: String]? {
        guard
            let components = URLComponents(url: self, resolvingAgainstBaseURL: true),
            let queryItems = components.queryItems else { return nil }
        return queryItems.reduce(into: [String: String]()) { (result, item) in
            result[item.name] = item.value
        }
    }
}
