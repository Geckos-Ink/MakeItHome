//
//  MakeItHomeApp.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 30/09/22.
//

import SwiftUI
import Foundation

@main
struct MakeItHomeApp : App {
    //@State var currentNumber: String = "0"

    #if STRESS_TEST_APP
    @NSApplicationDelegateAdaptor(StressTestAppDelegate.self) private var stressAppDelegate
    #endif
    
    var body: some Scene {
        #if STRESS_TEST_APP
        SwiftUI.Settings {
            SwiftUI.EmptyView()
        }
        #else
        WindowGroup {
            ContentView()
                .onAppear(){
                    Static.Init()
                }
        }
        #endif
    }
    
}
