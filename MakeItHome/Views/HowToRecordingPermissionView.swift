//
//  HowToRecordingPermissionView.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 29/05/24.
//  Copyright © 2024 geckos.ink. All rights reserved.
//

import SwiftUI
import AVKit

struct HowToRecordingPermissionView: View {
    @State var player = AVPlayer(url: Bundle.main.url(forResource: "howto_permissions", withExtension: "mp4")!)
    
    var body: some View {
        VStack{
            VideoPlayer(player: player)
                .frame(width: 1280, height: 830, alignment: .center)
                .ignoresSafeArea(.all)
            
            VStack {
                Text("How to give Screen Recording permissions.")
                    .font(.title)
                    .padding([.top, .bottom])
            }
            .frame(width: 1280)
            .background(.red)
        }
        .frame(width: 1280)
        .onAppear{
            player.play()
        }
    }
}

#Preview {
    HowToRecordingPermissionView()
}
