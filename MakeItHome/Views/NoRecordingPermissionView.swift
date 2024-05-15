//
//  NoRecordingPermissionView.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 21/11/22.
//

import SwiftUI

struct NoRecordingPermissionView: View {
    var body: some View {
        VStack{
            Image("No screen recording permission").resizable().frame(width:874, height: 620)
        }.frame(width: 874)
        
        /*if #available(macOS 12.0, *) {
            VStack {
                Text("No screen recording permission.")
                    .font(.largeTitle)
                    .padding(.top)
                Text("Open System Settings and go to Privacy & Security > Screen Recording to grant permission.")
                    .font(.title2)
                    .padding(.bottom)
            }
            .frame(width:800)
            .background(.red)
            
            VStack {
                Spacer()
                Text("Screen recording is necessary for creating the boundary break effect and saving apps' previews.")
                    .font(.title2)
                Text("No screenshots will be saved anywhere.")
                    .font(.title2)
                    .padding(.bottom)
            }
            .frame(width: 800)
            .background(.green)
            
        } else {
            ///
            /// For macOS 11 (but unused)
            ///
            VStack {
                Text("No screen recording permission.")
                    .font(.largeTitle)
                    .padding(.top)
                Text("Open System Settings and go to Privacy & Security > Screen Recording to grant permission.")
                    .font(.title2)
                    .padding(.bottom)
            }
            .frame(width:800)
            
            VStack {
                Spacer()
                Text("Screen recording is necessary for creating the boundary break effect and saving apps' previews.")
                    .font(.title2)
                Text("No screenshots will be saved anywhere.")
                    .font(.title2)
                    .padding(.bottom)
            }
            .frame(width: 800)
        }*/
    }
}

struct NoRecordingPermissionView_Previews: PreviewProvider {
    static var previews: some View {
        NoRecordingPermissionView()
    }
}
