//
//  MainThread.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 09/11/25.
//  Copyright © 2025 geckos.ink. All rights reserved.
//

@MainActor
func runOnMain(_ block: @escaping () -> Void) {
    Task { @MainActor in
        block()
    }
}
