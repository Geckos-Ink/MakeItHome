//
//  RequestAutomationPermissions.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 13/01/24.
//  Copyright © 2024 geckos.ink. All rights reserved.
//

import SwiftUI

struct RequestAutomationPermissions: View {
    
    @Environment(\.presentationMode) var presentationMode
    
    var body: some View {
        VStack {
            Image("hello")
                .resizable()
                .aspectRatio(contentMode: .fit)
                .frame(width: 400, height: 100)
                .padding(5)
            
            Text("MakeItHome can use Apple Events to get and make some automations for you.")
            Spacer()
            
            Text("This is not mandatory and allows to:")
            Text("- Retrieve your current desktop background for using it as overscreen background")
            Spacer()
            
            Text("If you want enable these feature you have to give Automation permissions to MakeItHome")
            Spacer(minLength: 10)
            
            HStack {
                Button(action: {
                    
                }, label: {
                    Text("\(Image(systemName: "xmark.circle.fill")) Don't ask anymore").frame(width: 150).padding(2)//.padding(.horizontal ,40)
                }).background(Color(red: 0.5, green: 0, blue: 0)).cornerRadius(5).buttonStyle(.bordered)
                
                Button(action: {
                    self.presentationMode.wrappedValue.dismiss()
                }, label: {
                    Text("\(Image(systemName: "arrow.down.right.and.arrow.up.left")) Close").frame(width: 150).padding(2)//.padding(.horizontal ,40)
                }).background(Color(red: 0.5, green: 0.5, blue: 0)).cornerRadius(5).buttonStyle(.bordered)
                
                Button(action: {
                    if let url = URL(string: "x-apple.systempreferences:com.apple.preference.security?Privacy_Automation") {
                        NSWorkspace.shared.open(url)
                    }
                }, label: {
                    Text("\(Image(systemName: "gear")) Open Settings").frame(width: 150).padding(2)//.padding(.horizontal ,40)
                }).background(Color(red: 0, green: 0.5, blue: 0)).cornerRadius(5).buttonStyle(.bordered)
            }
        }
        .frame(width: 700)
    }
}

#Preview {
    RequestAutomationPermissions()
}
