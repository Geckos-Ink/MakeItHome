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
    
    init(){
        if Static.TopBarIsPreview { // for last 1.4.x versions, for the moment
            return
        }               
        
        Timer.scheduledTimer(withTimeInterval: 0.5, repeats: true) { timer in
            self.checkClipboard()
        }
    }
    
    func getElement(id: Int) -> Element?{
        for el in history{
            if el.id == id {
                return el
            }
        }
        
        return nil
    }
    
    var ignoreThisPaste = false
    func selectElement(id: Int){
        for el in history{
            if el.id == id {
                
                let pasteboard = NSPasteboard.general
                pasteboard.clearContents()

                // Create a pasteboard item and set the image data
                let item = el.getItem()

                if item != nil{
                    // Set the pasteboard item to the pasteboard
                    pasteboard.writeObjects([item!])
                    ignoreThisPaste = true
                }
            
                return;
            }
        }
    }
    
    func checkElement(element : Element){
        var num = 1
        for hEl in history{
            if hEl == element {
                if num != history.count && num > 10 {
                    hEl.alreadySent = hEl.sent
                    hEl.sent = false
                    
                    let iEl = history.firstIndex(of: hEl)
                    if iEl != nil{
                        history.remove(at: iEl!)
                        history.insert(element, at: 0)
                    }
                }
                return
            }
            num += 1
        }
                
        history.insert(element, at: 0)
    }
    
    var totElements : Int = 0
    func checkElementsForSending(){
        var num = 1
        for el in history{
            if el.wait || el.sent {
                continue
            }
            
            if el.alreadySent {
                if false { // don't remove it, simply go on
                    var msg = JSMessage()
                    msg.type = "removeClipboardItem"
                    msg.value = String(el.id)
                    Static.topBarWebViewRepresentable?.sendMessage(obj: msg)
                }
            }
            else {
                el.id = totElements
                totElements += 1
                
                let cleanUpTo = totElements - Static.ClipboardForgetElementsOlderThan
                if cleanUpTo >= 0 {
                    
                    var msg = JSMessage()
                    msg.type = "removeUpTo"
                    msg.value = String(cleanUpTo)
                    Static.topBarWebViewRepresentable?.sendMessage(obj: msg)
                    
                    for el in history{
                        if el.id > cleanUpTo {
                            break;
                        }
                        
                        history.remove(at: history.firstIndex(of: el)!)
                    }
                }
            }
            
            var msg = JSMessage()
            msg.type = "newClipboardItem"

            msg.id = el.id
            msg.format = el.type
            msg.imgBase = el.imgBase
            msg.str = el.str
            msg.url = el.url?.absoluteURL
            
            el.sent = true
            
            Static.topBarWebViewRepresentable?.sendMessage(obj: msg)
            num += 1
        }
    }
    
    var prevString : String?
    var prevRtf : String?
    var prevImage : Data?
    var prevFileUrl : URL?
    
    func checkClipboard(){
        // Set string to clipboard
        let pasteboard = NSPasteboard.general
        //pasteboard.declareTypes([.string, .fileURL, .png, .pdf, .fileContents, .textFinderOptions], owner: nil)
        
        var something = false
        
        let el = Element()
        var jump = false
        
        if let copiedString = pasteboard.string(forType: .string) {
            if prevString != copiedString{
                something = true
                el.setString(str: copiedString)
                prevString = copiedString
            }
            else {
                jump = true
            }
        }
        
        if !jump, let copiedString = pasteboard.string(forType: .rtf) {
            if prevRtf != copiedString{
                something = true
                el.setRtf(rtf: copiedString)
                prevRtf = copiedString
            }
            else {
                jump = true
            }
        }
                
        if !jump, let imageData = pasteboard.data(forType: .tiff) {
            if prevImage != imageData{
                // Encode PNG data to base64
                if let base64String = tiffToBase64(tiff: imageData) {
                    something = true
                    el.setImage(base: base64String, data: imageData)
                }
                prevImage = imageData
            }
            else {
                jump = true
            }
        }
    
        if !jump, let fileURLs = pasteboard.readObjects(forClasses: [NSURL.self], options: nil) as? [URL] {
           // Handle the copied file URLs
            if fileURLs.count == 1 {
                for fileURL in fileURLs {
                    if prevFileUrl != fileURL{
                        something = true
                        el.setUrl(url: fileURL)
                        prevFileUrl = fileURL
                    }
                    else {
                        jump = true
                    }
                }
            }
            else {
                if fileURLs.count < 10 { // limit to a maximum of 10 of files at the same time
                    for fileURL in fileURLs {
                        let el = Element()
                        el.setUrl(url: fileURL)
                        checkElement(element: el)
                        
                        something = false
                    }
                }
            }
        }
        
        if something && !jump{
            el.sent = ignoreThisPaste
            ignoreThisPaste = false
            checkElement(element: el)
        }
        
        if jump {
            if prevFileUrl != nil || prevImage != nil {
                prevString = nil
                prevFileUrl = nil
                prevImage = nil
            }
        }
        
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
        public var rtf : String?
        
        public var wait = false
        public var sent = false
        public var alreadySent : Bool = false
                 
        public func setUrl(url: URL){
            self.url = url
            self.hash = url.absoluteString
            type = "url"
            
            generatePreviewImage(fileURL: url, forEl: self)
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
        
        public func setRtf(rtf: String){
            self.rtf = rtf
        }
        
        public func getItem() -> NSPasteboardItem? {
            var item : NSPasteboardItem? = NSPasteboardItem()
            
            switch(self.type){
                case "img":
                    item!.setData(self.imgData!, forType: NSPasteboard.PasteboardType.tiff)
                    break;
                
                case "str":
                    if self.rtf != nil{
                        item!.setString(self.rtf!, forType: NSPasteboard.PasteboardType.rtf)
                    }
                    else {
                        item!.setString(self.str!, forType: NSPasteboard.PasteboardType.string)
                    }
                    break;
                
                case "url":
                    item!.setData(self.url!.dataRepresentation, forType: NSPasteboard.PasteboardType.fileURL)
                    break;
                
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

var _doneThumbails : [URL] = []

func generatePreviewImage(fileURL: URL, forEl: Clipboard.Element){
    
    if _doneThumbails.contains(fileURL){
        return
    }
    _doneThumbails.append(fileURL)
    
    // Create a QLThumbnailGenerator
    let thumbnailGenerator = QLThumbnailGenerator.shared
    
    // Request a thumbnail preview image for the file
    let request = QLThumbnailGenerator.Request(fileAt: fileURL, size: CGSize(width: 150, height: 150), scale: NSScreen.main?.backingScaleFactor ?? 1.0, representationTypes: .thumbnail)
        
    forEl.wait = true
    
    thumbnailGenerator.generateBestRepresentation(for: request) { (thumbnail, error) in
        if let thumbnail = thumbnail, error == nil {
            // Handle the generated thumbnail image (NSImage)
            print("Thumbnail image generated successfully.")
            
            let res = thumbnail.nsImage
            
            if res.tiffRepresentation != nil {
                forEl.imgBase = tiffToBase64(tiff: res.tiffRepresentation!)
            }
            
            forEl.wait = false
            
            // Do something with the thumbnail image...
        } else {
            
            let request2 = QLThumbnailGenerator.Request(fileAt: fileURL, size: CGSize(width: 150, height: 150), scale: NSScreen.main?.backingScaleFactor ?? 1.0, representationTypes: .icon)
            
            thumbnailGenerator.generateBestRepresentation(for: request2) { (thumbnail2, error2) in
                if error2 != nil {
                    print("Thumbnail2 generation error: \(error2?.localizedDescription)")
                }
                else {
                    let res = thumbnail2?.nsImage
                    if res?.tiffRepresentation != nil {
                        forEl.imgBase = tiffToBase64(tiff: res!.tiffRepresentation!)
                    }
                }
                
                forEl.wait = false
            }
            
            // Handle error
            if let error = error {
                print("Thumbnail generation error: \(error.localizedDescription)")
            } else {
                print("Unknown thumbnail generation error.")
            }
        }
    }
}
