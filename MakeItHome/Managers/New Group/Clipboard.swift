//
//  Clipboard.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 19/10/23.
//  Copyright © 2023 geckos.ink. All rights reserved.
//

import Foundation
import AppKit
import QuickLookThumbnailing

public class Clipboard {
    var history: [Element] = []    
    private var captureEnabled = true
    private var pollingTimer: Timer?
    
    /// Debug harnesses can drive `checkClipboard()` explicitly so they can stop
    /// without leaving a RunLoop timer monitoring the user's pasteboard.
    init(automaticallyPolls: Bool = true){
        captureEnabled = Static.EnableClipboardCapture

        if !automaticallyPolls || Static.TopBarIsPreview { // for last 1.4.x versions, for the moment
            return
        }               
        
        pollingTimer = Timer.scheduledTimer(withTimeInterval: 0.5, repeats: true) { [weak self] _ in
            guard let self else { return }
            self.checkClipboard()
        }
    }

    func stopPolling() {
        pollingTimer?.invalidate()
        pollingTimer = nil
    }
    
    func getElement(id: Int) -> Element?{
        for el in history{
            if el.id == id {
                return el
            }
        }
        
        return nil
    }
    
    private var ignoredPasteboardChangeCount: Int?

    // Bounds the re-copy retry loop so enforcement never fights the user's own
    // clipboard activity for more than a fraction of a second.
    private let clipboardWriteMaxAttempts = 3
    private let clipboardWriteRetryDelay = 0.08
    private var pendingClipboardEnforcement: DispatchWorkItem?

    func selectElement(id: Int){
        guard let el = getElement(id: id) else { return }
        writeElementToPasteboard(el, attempt: 0)
    }

    /// Writes the element to the OS pasteboard and then verifies the write
    /// actually landed. WebKit sometimes drops the `selItem` bridge message on
    /// rapid repeated clicks, and `writeObjects` can occasionally no-op, so we
    /// confirm the pasteboard reflects the requested item and retry a small,
    /// bounded number of times. The retry is abandoned the moment someone else
    /// (typically the user copying directly) touches the pasteboard, so it never
    /// clobbers an intentional copy.
    private func writeElementToPasteboard(_ el: Element, attempt: Int){
        // A fresh selection supersedes any retry still pending for a previous one.
        pendingClipboardEnforcement?.cancel()

        guard let item = el.getItem() else { return }

        let pasteboard = NSPasteboard.general
        pasteboard.clearContents()
        let written = pasteboard.writeObjects([item])

        // Change count captured right after our write. If it still matches when we
        // verify, nobody has copied over us; if it differs, the user won and we back off.
        let expectedChangeCount = pasteboard.changeCount
        ignoredPasteboardChangeCount = expectedChangeCount

        let verify = DispatchWorkItem { [weak self] in
            guard let self = self else { return }
            self.pendingClipboardEnforcement = nil

            let pasteboard = NSPasteboard.general

            // The user (or another app) copied something after us: leave it alone.
            if pasteboard.changeCount != expectedChangeCount {
                return
            }

            if self.pasteboardContains(el) {
                return
            }

            if attempt + 1 < self.clipboardWriteMaxAttempts {
                self.writeElementToPasteboard(el, attempt: attempt + 1)
            }
        }

        // If the write itself reported failure there is no point waiting; retry now.
        if !written && attempt + 1 < clipboardWriteMaxAttempts {
            writeElementToPasteboard(el, attempt: attempt + 1)
            return
        }

        pendingClipboardEnforcement = verify
        DispatchQueue.main.asyncAfter(deadline: .now() + clipboardWriteRetryDelay, execute: verify)
    }

    /// Whether the general pasteboard currently holds the given element's content.
    private func pasteboardContains(_ el: Element) -> Bool {
        let pasteboard = NSPasteboard.general

        switch el.type {
        case "str":
            if let rtfData = el.rtfData {
                return pasteboard.data(forType: .rtf) == rtfData
            }
            return pasteboard.string(forType: .string) == el.str
        case "img":
            // TIFF can be re-encoded by the pasteboard, so presence of image data
            // (with the change count check already confirming it is our write) is
            // a sufficient and stable signal.
            return pasteboard.data(forType: .tiff) != nil
        case "url":
            let urls = pasteboard.readObjects(forClasses: [NSURL.self], options: nil) as? [URL]
            return urls?.first == el.url
        default:
            // Custom / raw-backed items: present if any captured flavor is on the
            // pasteboard now.
            guard let available = pasteboard.types else { return false }
            let availableSet = Set(available.map { $0.rawValue })
            return el.rawTypes.keys.contains { availableSet.contains($0) }
        }
    }
    
    func checkElement(element: Element){
        if let existingIndex = history.firstIndex(of: element) {
            // Re-copying an older value makes that existing element recent again.
            // Reuse the object so file thumbnails and raw pasteboard data are not
            // duplicated in memory, then give it a fresh UI id when it is sent.
            if existingIndex >= 10 {
                let existing = history.remove(at: existingIndex)
                if existing.sent {
                    existing.replacesID = existing.id
                    existing.id = -1
                    existing.sent = false
                }
                history.insert(existing, at: 0)
            }
            return
        }

        history.insert(element, at: 0)

        if element.type == "url", let url = element.url {
            generatePreviewImage(fileURL: url, forEl: element)
        }

        let removed = trimNewestFirstHistory(
            &history,
            maximumCount: Static.ClipboardForgetElementsOlderThan
        )
        let removedIDs = removed.compactMap { removedElement in
            removedElement.sent && removedElement.id >= 0 ? removedElement.id : nil
        }
        if !removedIDs.isEmpty {
            var message = JSMessage()
            message.type = "removeClipboardItems"
            message.ids = removedIDs
            Static.topBarWebViewRepresentable?.sendMessage(obj: message)
        }
    }
    
    var totElements : Int = 0
    func checkElementsForSending(){
        if !captureEnabled {
            return
        }

        // History is newest-first, while the grid appends at its visual bottom.
        // Sending oldest-first preserves chronological order even for a burst of
        // copied files and lets WebKit update the DOM once per poll.
        let pending = history.reversed().filter { !$0.wait && !$0.sent }
        guard !pending.isEmpty else { return }

        var items: [ClipboardItemMessage] = []
        items.reserveCapacity(pending.count)

        for element in pending {
            element.id = totElements
            totElements += 1
            element.sent = true
            items.append(element.pageMessage)
            element.replacesID = nil
        }

        var message = JSMessage()
        message.type = "clipboardItems"
        message.clipboardItems = items
        Static.topBarWebViewRepresentable?.sendMessage(obj: message)
    }

    /// Replaces the page's clipboard DOM after a WebKit navigation or content
    /// process recovery. The native history is the source of truth.
    func sendHistorySnapshot(){
        guard captureEnabled else {
            var message = JSMessage()
            message.type = "clearClipboardItems"
            Static.topBarWebViewRepresentable?.sendMessage(obj: message)
            return
        }

        for element in history.reversed() where !element.wait && !element.sent {
            element.id = totElements
            totElements += 1
            element.sent = true
        }

        var message = JSMessage()
        message.type = "replaceClipboardItems"
        message.clipboardItems = history.reversed().compactMap { element in
            guard !element.wait && element.sent else { return nil }
            return element.pageMessage
        }
        history.forEach { $0.replacesID = nil }
        Static.topBarWebViewRepresentable?.sendMessage(obj: message)
    }
    
    // Tracks the pasteboard's change count so app-specific payloads that expose
    // none of the standard flavors (e.g. a Blender object copy) can still be
    // detected as "something new" and captured.
    var prevChangeCount : Int = -1

    func setCaptureEnabled(_ enabled: Bool) {
        captureEnabled = enabled
        syncCurrentPasteboardAsBaseline()

        if !enabled {
            history.removeAll()
            totElements = 0
            
            var msg = JSMessage()
            msg.type = "clearClipboardItems"
            Static.topBarWebViewRepresentable?.sendMessage(obj: msg)
        }
    }

    func syncCurrentPasteboardAsBaseline() {
        prevChangeCount = NSPasteboard.general.changeCount
    }
    
    func checkClipboard(){
        if !captureEnabled {
            return
        }

        let pasteboard = NSPasteboard.general
        guard pasteboard.changeCount != prevChangeCount else {
            checkElementsForSending()
            return
        }

        // Selecting a history item writes it back to the pasteboard. Record the
        // new baseline without inserting a duplicate into history.
        if ignoredPasteboardChangeCount == pasteboard.changeCount {
            ignoredPasteboardChangeCount = nil
            syncCurrentPasteboardAsBaseline()
            checkElementsForSending()
            return
        }
        ignoredPasteboardChangeCount = nil

        let fileURLs = pasteboard.readObjects(
            forClasses: [NSURL.self],
            options: nil
        ) as? [URL] ?? []

        if fileURLs.count > 1 {
            // One pasteboard change may represent several files. Keep work and
            // Quick Look requests bounded while preserving their source order.
            for fileURL in fileURLs.prefix(10) {
                let element = Element()
                element.setUrl(url: fileURL)
                checkElement(element: element)
            }
        } else {
            let element = Element()

            if let fileURL = fileURLs.first {
                element.setUrl(url: fileURL)
            } else if let imageData = pasteboard.data(forType: .tiff),
                      let base64String = tiffToBase64(tiff: imageData) {
                element.setImage(base: base64String, data: imageData)
            } else {
                if let copiedString = pasteboard.string(forType: .string) {
                    element.setString(str: copiedString)
                }
                if let copiedRTF = pasteboard.data(forType: .rtf) {
                    element.setRtf(data: copiedRTF)
                }

                if element.type == "nil" {
                    element.captureRawTypes(from: pasteboard)
                    if !element.rawTypes.isEmpty {
                        element.setCustom()
                    }
                }
            }

            if element.type != "nil" {
                // Preserve every representation the OS pasteboard exposed so
                // re-copy remains byte-faithful.
                if element.rawTypes.isEmpty {
                    element.captureRawTypes(from: pasteboard)
                }
                checkElement(element: element)
            }
        }

        syncCurrentPasteboardAsBaseline()
        checkElementsForSending()
    }
    
    public func droppedFileUrl(url: URL){
        let el = Element()
        
        el.setUrl(url: url)
        el.str = url.lastPathComponent
        
        checkElement(element: el)
    }
    
    public class Element : Equatable {
        public static func == (lhs: Clipboard.Element, rhs: Clipboard.Element) -> Bool {
            return lhs.hash == rhs.hash
        }
        
        public var id : Int = -1
        
        public var hash : String = ""
        public var type = "nil"
        
        public var url : URL?
        public var str : String?
        public var imgBase : String?
        public var imgData : Data?
        public var rtfData : Data?
        public var rtfHTML : String?

        // Every representation the OS pasteboard exposed for this item, keyed by
        // pasteboard type identifier. Replayed verbatim on re-copy so app-specific
        // flavors (e.g. Blender) and all image encodings survive the round-trip.
        public var rawTypes : [String: Data] = [:]

        public var wait = false
        public var sent = false
        public var replacesID : Int?

        var pageMessage: ClipboardItemMessage {
            ClipboardItemMessage(
                id: id,
                format: type,
                url: url?.absoluteURL,
                str: str,
                imgBase: imgBase,
                html: rtfHTML,
                replacesID: replacesID
            )
        }

        /// Snapshots all raw representations of the pasteboard's first item.
        public func captureRawTypes(from pasteboard: NSPasteboard){
            guard let item = pasteboard.pasteboardItems?.first else { return }

            var captured : [String: Data] = [:]
            for type in item.types {
                if let data = item.data(forType: type) {
                    captured[type.rawValue] = data
                }
            }
            rawTypes = captured
        }

        /// Marks this element as a generic app-specific payload (no standard
        /// flavor). Requires `rawTypes` to already be populated.
        public func setCustom(){
            type = "custom"
            str = friendlyCustomLabel()
            hash = customHash()
        }

        private func friendlyCustomLabel() -> String {
            // Name the source app from a reverse-DNS UTI (org.blender.* -> "Blender item").
            for typeId in rawTypes.keys.sorted() {
                let parts = typeId.split(separator: ".")
                if parts.count >= 2,
                   !typeId.hasPrefix("public."),
                   !typeId.hasPrefix("com.apple.") {
                    let name = String(parts[1])
                    return name.prefix(1).uppercased() + name.dropFirst() + " item"
                }
            }
            return "Clipboard item"
        }

        private func customHash() -> String {
            // Content hash for de-duplication within the session (Hasher is seeded
            // per run, which is all history de-dup needs).
            var hasher = Hasher()
            for (typeId, data) in rawTypes.sorted(by: { $0.key < $1.key }) {
                hasher.combine(typeId)
                hasher.combine(data)
            }
            return "custom:\(hasher.finalize())"
        }

        public func setUrl(url: URL){
            self.url = url
            self.str = url.lastPathComponent
            self.hash = url.absoluteString
            type = "url"
        }
        
        public func setImage(base: String, data: Data){
            self.imgBase = base
            self.imgData = data
            
            self.hash = base
            type = "img"
        }
        
        public func setString(str: String){
            self.str = str
            self.hash = str
            type = "str"
        }
        
        public func setRtf(data: Data){
            rtfData = data
            type = "str"

            var hasher = Hasher()
            hasher.combine(str)
            hasher.combine(data)
            hash = "rtf:\(hasher.finalize())"

            guard let attributed = try? NSAttributedString(
                data: data,
                options: [.documentType: NSAttributedString.DocumentType.rtf],
                documentAttributes: nil
            ) else {
                return
            }

            if str == nil {
                str = attributed.string
            }

            let fullRange = NSRange(location: 0, length: attributed.length)
            guard let htmlData = try? attributed.data(
                from: fullRange,
                documentAttributes: [.documentType: NSAttributedString.DocumentType.html]
            ) else {
                return
            }
            rtfHTML = String(data: htmlData, encoding: .utf8)
        }
        
        public func getItem() -> NSPasteboardItem? {
            let item = NSPasteboardItem()

            // Preferred path: replay the exact representations captured from the OS
            // pasteboard. This preserves every flavor — app-specific/custom types
            // (e.g. Blender) and all image encodings — so re-copy is faithful.
            if !rawTypes.isEmpty {
                var wroteSomething = false
                for (typeId, data) in rawTypes {
                    if item.setData(data, forType: NSPasteboard.PasteboardType(typeId)) {
                        wroteSomething = true
                    }
                }
                if wroteSomething {
                    return item
                }
            }

            // Fallback for synthetic elements without a raw capture (e.g. dropped files).
            switch(self.type){
                case "img":
                    guard let imgData = self.imgData else { return nil }
                    item.setData(imgData, forType: NSPasteboard.PasteboardType.tiff)

                case "str":
                    // Always provide a plain-text representation so the item can
                    // be pasted into plain-text targets (terminals, search fields,
                    // code editors). Rich-text items keep their .rtf flavor too, but
                    // writing *only* rtf made those items paste as nothing in
                    // plain-text contexts.
                    if let plain = self.str {
                        item.setString(plain, forType: NSPasteboard.PasteboardType.string)
                    }
                    if let rtfData = self.rtfData {
                        item.setData(rtfData, forType: NSPasteboard.PasteboardType.rtf)
                    }
                    if self.str == nil && self.rtfData == nil {
                        return nil
                    }

                case "url":
                    guard let url = self.url else { return nil }
                    item.setData(url.dataRepresentation, forType: NSPasteboard.PasteboardType.fileURL)

            default:
                return nil;
            }

            return item
        }
    }
}

func resizeImageRep(imageRep: NSBitmapImageRep, toSize size: CGFloat) -> NSBitmapImageRep? {
    let width = imageRep.size.width
    let height = imageRep.size.height
    
    let aspectRatio = width / height
    var newSize: CGSize
    
    if width < height {
        newSize = CGSize(width: size, height: size / aspectRatio)
    } else {
        newSize = CGSize(width: size * aspectRatio, height: size)
    }
    
    let newImage = NSImage(size: newSize)
    newImage.lockFocus()
    imageRep.draw(in: NSRect(x: 0, y: 0, width: newSize.width, height: newSize.height))
    newImage.unlockFocus()
    
    guard let resizedImageRep = NSBitmapImageRep(data: newImage.tiffRepresentation!) else {
        return nil
    }
    
    return resizedImageRep
}

func tiffToBase64(tiff: Data) -> String?{
    if var bitmap = NSBitmapImageRep(data: tiff) {
        
        if let bmResize = resizeImageRep(imageRep: bitmap, toSize: 128) {
            bitmap = bmResize
        }
        
        let pngData = bitmap.representation(using: .png, properties: [:])
        
        // Encode PNG data to base64
        if let base64String = pngData?.base64EncodedString() {
            // Return base64-encoded string
            return base64String
        }
    }
    
    return nil
}

func generatePreviewImage(fileURL: URL, forEl: Clipboard.Element){
    // Create a QLThumbnailGenerator
    let thumbnailGenerator = QLThumbnailGenerator.shared
    
    // Request a thumbnail preview image for the file
    let request = QLThumbnailGenerator.Request(fileAt: fileURL, size: CGSize(width: 150, height: 150), scale: NSScreen.main?.backingScaleFactor ?? 1.0, representationTypes: .thumbnail)
        
    forEl.wait = true
    
    thumbnailGenerator.generateBestRepresentation(for: request) { (thumbnail, error) in
        if let thumbnail = thumbnail, error == nil {
            let imageBase = thumbnail.nsImage.tiffRepresentation.flatMap(tiffToBase64)

            DispatchQueue.main.async {
                forEl.imgBase = imageBase
                forEl.wait = false
                Static.clipboard?.checkElementsForSending()
            }
        } else {
            let request2 = QLThumbnailGenerator.Request(fileAt: fileURL, size: CGSize(width: 150, height: 150), scale: NSScreen.main?.backingScaleFactor ?? 1.0, representationTypes: .icon)
            
            thumbnailGenerator.generateBestRepresentation(for: request2) { (thumbnail2, error2) in
                if let error2 {
                    print("Thumbnail icon generation error: \(error2.localizedDescription)")
                }

                let imageBase = thumbnail2?.nsImage.tiffRepresentation.flatMap(tiffToBase64)
                DispatchQueue.main.async {
                    forEl.imgBase = imageBase
                    forEl.wait = false
                    Static.clipboard?.checkElementsForSending()
                }
            }
            
            if let error = error {
                print("Thumbnail generation error: \(error.localizedDescription)")
            }
        }
    }
}
