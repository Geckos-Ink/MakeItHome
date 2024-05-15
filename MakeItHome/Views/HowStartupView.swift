//
//  HowStartupView.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 22/11/22.
//

import SwiftUI

struct HowStartupView: View {
    @State var addToLoginItems : String
    
    var body: some View {
        VStack {
            Text("For executing MakeItHome at startup go to System Settings > General > Login Items")
                .font(.body)
                .padding(.top)
            Text("And click to '+' selecting MakeItHome in your Applications folder.")
                .font(.body)
                .padding(.bottom)
            Text("Or paste this script in your terminal:")
                .font(.headline)
            TextField("Terminal command", text: $addToLoginItems).font(.footnote)
            if #available(macOS 12.0, *) {
                Button(action:{
                    let pasteboard = NSPasteboard.general
                    pasteboard.clearContents()
                    pasteboard.setString(self.addToLoginItems, forType: NSPasteboard.PasteboardType.string)
                    
                    LoginItems.openTerminal()
                },
                       label: {Text("Copy to clipboard and open terminal \(Image(systemName: "terminal"))").foregroundColor(.black).font(.headline)}
                ).background(.green).cornerRadius(5).padding(.bottom)
            } else {
                Button(action:{
                    let pasteboard = NSPasteboard.general
                    pasteboard.clearContents()
                    pasteboard.setString(self.addToLoginItems, forType: NSPasteboard.PasteboardType.string)
                    
                    LoginItems.openTerminal()
                },
                       label: {Text("Copy to clipboard and open terminal \(Image(systemName: "terminal"))").foregroundColor(.black).font(.headline)}
                ).cornerRadius(5).padding(.bottom)
            }
                
        }
        .frame(width: 700)
        //.background(.gray)
    }
    
    init(){
        addToLoginItems = "osascript -e '" + LoginItems.AddToLogin() + "'"
    }
}

