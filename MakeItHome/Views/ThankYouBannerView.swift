//
//  ThankYouBannerView.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 30/12/22.
//

import SwiftUI

struct ThankYouBannerView: View {
    var body: some View {
        VStack{
            Image("welcome_banner").resizable().frame(width:820, height: 462)
        }.frame(width: 820)
    }
}

// 1640 × 924 =>  820 x 462

struct ThankYouBannerView_Previews: PreviewProvider {
    static var previews: some View {
        ThankYouBannerView()
    }
}
