//
//  UpdateView.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 10/01/23.
//

import SwiftUI

struct UpdateView: View {
    var body: some View {
        VStack{
            Button(action: {
                if let url = URL(string: "https://geckos.ink/products/makeithome/"){
                    if NSWorkspace.shared.open(url) {
                        print("default browser was successfully opened")
                        
                    }
                }
            }){
                Image("update").resizable().frame(width:540, height: 540).onHover { inside in
                    if inside {
                        NSCursor.pointingHand.push()
                    } else {
                        NSCursor.pop()
                    }
                }
            }.frame(width:540, height: 540).buttonStyle(.borderless)
        }
        .frame(width: 540)
    }
}

struct UpdateView_Previews: PreviewProvider {
    static var previews: some View {
        UpdateView()
    }
}
