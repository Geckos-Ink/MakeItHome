//
//  FastWebView.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 30/10/23.
//  Copyright © 2023 geckos.ink. All rights reserved.
//

import SwiftUI
import WebKit
import Cocoa

struct NavigateZoneView: View {
    @State private var isDropTargeted = false
    
    var body: some View {
        VStack{
            NavigateWebView()
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

#Preview {
    NavigateZoneView()
}

public struct NavigateWebView: NSViewRepresentable {
    public let wkwv = NavigateWKWV()
    
    // 2
    public func makeNSView(context: Context) -> WKWebView {
        Static.navWebView = self
        
        wkwv.setValue(true, forKey: "drawsBackground")
        wkwv.underPageBackgroundColor = NSColor.clear
        
        wkwv.registerForDraggedTypes([.fileURL, .png, .string])
        wkwv.uiDelegate = context.coordinator
        wkwv.navigationDelegate = context.coordinator
        
        wkwv.configuration.setValue(true, forKey: "_allowUniversalAccessFromFileURLs")
        wkwv.configuration.userInterfaceDirectionPolicy = .system
        
        return wkwv
    }
    
    // 3
    public func updateNSView(_ webView: WKWebView, context: Context) {
        if let url = Bundle.main.url(forResource: "mrWhite", withExtension: "html") {
            wkwv.loadFileURL(url, allowingReadAccessTo: url.deletingLastPathComponent())
        }
    }
    
    public func makeCoordinator() -> NavigateCoordinator {
       return NavigateCoordinator(parent: self)
    }
    
    
    public func navigate(url: URL){
        wkwv.load(URLRequest(url: url))
    }
}


public class NavigateCoordinator: NSObject, WKUIDelegate, WKNavigationDelegate {
    var parent: NavigateWebView

    var firstLoad = true
    
    init(parent: NavigateWebView) {
        self.parent = parent
    }

    // Implement WKNavigationDelegate method to allow navigation for dropped items
    public func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        
        guard let url = navigationAction.request.url else {
            decisionHandler(.cancel)
            return
        }
        
        
        decisionHandler(.allow)
    }
    
}

public class NavigateWKWV : WKWebView {
    
}
