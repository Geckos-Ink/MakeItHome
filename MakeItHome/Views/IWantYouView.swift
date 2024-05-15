//
//  IWantYouView.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 20/08/23.
//

import SwiftUI

struct IWantYouView: View {
    var body: some View {
        VStack{
            Button(action: {
                if let url = URL(string: "https://forum.geckos.ink/forumdisplay.php?fid=3"){
                    if NSWorkspace.shared.open(url) {
                        print("default browser was successfully opened")
                        
                    }
                }
            }){
                Image("uncle_nerd_poster").resizable().frame(width:488, height: 625).onHover { inside in
                    if inside {
                        NSCursor.pointingHand.push()
                    } else {
                        NSCursor.pop()
                    }
                }
            }.frame(width:488, height: 625).buttonStyle(.borderless)
        }
        .frame(width: 488)
    }
}

struct IWantYouView_Previews: PreviewProvider {
    static var previews: some View {
        IWantYouView()
    }
}
