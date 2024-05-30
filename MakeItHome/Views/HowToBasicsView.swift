//
//  HowToBasicsView.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 29/05/24.
//  Copyright © 2024 geckos.ink. All rights reserved.
//

import SwiftUI
import AVKit

struct HowToBasicsView: View {
    @State var player = AVPlayer(url: Bundle.main.url(forResource: "howto_basic", withExtension: "mp4")!)
    
    var body: some View {
        VStack{
            VideoPlayer(player: player)
                .frame(width: 1280, height: 830, alignment: .center)
                .ignoresSafeArea(.all)
        }
        .frame(width: 1280)
        .onAppear{
            player.play()
        }
    }
}

#Preview {
    HowToBasicsView()
}
