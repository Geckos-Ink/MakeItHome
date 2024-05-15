//
//  ActivateView.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 18/11/22.
//

import SwiftUI

struct ActivateView: View {
    var body: some View {
        VStack{
            if Static.ActivationStatus == -1 {
                Text("Internet connection is necessary during the trial version!")
                Text("Please connect to internet for continuing with the trial. Or buy the product for 3.49€")
            }
            else {
                Text("Thank you for tried Gecko's Ink MakeItHome for 30 days. But now it's your choice!")
            }
            
            Button(action: {
                if let url = URL(string: "itms-apps://itunes.apple.com/app/geckos-ink-makeithome/id6444596296"){
                    if NSWorkspace.shared.open(url) {
                        print("default browser was successfully opened")
                        
                    }
                }                
            }){
                Image("buyNow").resizable().frame(width:800, height: 270).onHover { inside in
                    if inside {
                        NSCursor.pointingHand.push()
                    } else {
                        NSCursor.pop()
                    }
                }
            }.frame(width:800, height: 270).buttonStyle(.borderless)
        }
        .frame(width: 800)
    }
}

struct ActivateView_Previews: PreviewProvider {
    static var previews: some View {
        ActivateView()
    }
}
