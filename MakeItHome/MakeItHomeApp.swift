//
//  MakeItHomeApp.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 30/09/22.
//

import SwiftUI

@main
class MakeItHomeApp : App {
       
    required init(){
        Static.Init()                
                
        //
        // Activation checker
        //
        if !Static.AppStoreVersion {
            if Static.Demo {
                
                checkDemo();
                
                // Check every 24 h
                Timer.scheduledTimer(withTimeInterval: 3600*24, repeats: false) { timer in
                    checkDemo();
                }
                
            }
            else {
                ///
                ///# Unlimited demo based  to version (temporarly unused, probably forever)
                ///
                let url = URL(string: "https://geckos.ink/api/makeItHome_demo.php")!
                
                let task = URLSession.shared.dataTask(with: url) {(data, response, error) in
                    guard let data = data else { return }
                    let res = String(data: data, encoding: .utf8)!
                    
                    if(res == Static.VersionStr){
                        Static.ActivationStatus = 1 // should be 1
                    }
                    
                    print("Server reply:", res)
                }
                
                task.resume()
                
                Timer.scheduledTimer(withTimeInterval: 5, repeats: false) { timer in
                    if Static.ActivationStatus <= 0 {
                        var activatePanel = SwifterPanel<ActivateView>(view: ActivateView())
                        activatePanel.show()
                    }
                }
            }
        }
        else {
            /// By default (for example for App Store) it's activated
            Static.ActivationStatus = 1
        }
        
        func checkDemo(){
            ///
            /// Day counted demo
            ///
            let serial = Data("\(Static.serialNumber)(makeItHome22)".utf8).sha256Hexa
            
            let strUrl = "https://geckos.ink/api/makeItHome_demo.php?serial=\(serial)&v=2" // for debug purposes
            let url = URL(string: strUrl)!
            
            let task = URLSession.shared.dataTask(with: url) {(data, response, error) in
                guard let data = data else { return }
                let res = String(data: data, encoding: .utf8)!
                let parts = res.split(separator: ";")
                
                if(parts[0] == "1"){
                    Static.ActivationStatus = 1
                    
                    if(parts[1] != Static.CurVersion){
                        DispatchQueue.main.async {
                            Static.UpdateAvailable = true
                            
                            Timer.scheduledTimer(withTimeInterval: 2, repeats: false) { timer in
                                var activatePanel = SwifterPanel<UpdateView>(view: UpdateView())
                                activatePanel.show()
                            }
                        }
                    }
                    
                }
                else {
                    Static.ActivationStatus = 0
                }
                
                print("Server reply:", res)
            }
            
            task.resume()
            
            Timer.scheduledTimer(withTimeInterval: 5, repeats: false) { timer in
                if Static.ActivationStatus <= 0 {
                    var activatePanel = SwifterPanel<ActivateView>(view: ActivateView())
                    activatePanel.show()
                }
            }
        }
        
        ///
        /// Launch ContentView manually (unused)
        ///
        // let main = SwifterWindow<ContentView>(view: ContentView())
        // main.show()
        
        ///
        /// Auto close main window
        ///
        if Static.EnableCloseMainWindowAfterInactivity {
            Timer.scheduledTimer(withTimeInterval: 60, repeats: true) { timer in
                if(Static.mainWindow != nil){
                    if(!Static.mainWindowClosed && !Static.mainWindowInUsing && Static.curDisplay?.recordingPaused ?? true){
                        let lastUsing = Date().timeIntervalSince1970 - Static.lastUsing
                        if lastUsing > Static.CloseMainWindowAfterSecondsOfInactivity {
                            Static.mainWindow?.close()
                            Static.mainWindowClosed = true
                        }
                    }
                }
            }
        }
    }
   
    //@State var currentNumber: String = "0"
    
    var body: some Scene {
        WindowGroup {
            ContentView()
        }        
    }
    
}
