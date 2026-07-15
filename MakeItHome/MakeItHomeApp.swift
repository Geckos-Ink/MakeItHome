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
    
    var body: some Scene {
        WindowGroup {
            #if DEBUG
            if let stressConfiguration = StressLaunchConfiguration.current {
                StressTestRootView(configuration: stressConfiguration)
            } else {
                ContentView()
                    .onAppear(){
                        Static.Init()
                    }
            }
            #else
            ContentView()
                .onAppear(){
                    Static.Init()
                }
            #endif
        }
    }
    
}
