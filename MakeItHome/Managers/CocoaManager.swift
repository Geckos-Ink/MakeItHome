//
//  Cocoa.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 13/01/24.
//  Copyright © 2024 geckos.ink. All rights reserved.
//

import Foundation
import Cocoa

func isDarkMode() -> Bool {
    if #available(macOS 10.14, *) {
        let appearance = NSApp.effectiveAppearance
        return appearance.bestMatch(from: [.darkAqua, .aqua]) == .darkAqua
    } else {
        // Dark mode is not available before macOS 10.14
        return false
    }
}
