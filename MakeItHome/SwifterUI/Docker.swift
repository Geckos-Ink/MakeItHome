//
//  DockInfo.swift
//
//  Created by Wessley Roche on 28/11/2016.
//
import Foundation
import SwiftUI

enum WBDockPosition: Int {
    case none = 4
    case bottom = 2
    case left = 0
    case right = 1
}

func getDockPosition(screen: NSScreen) -> WBDockPosition {
    if screen.visibleFrame.origin.y == 0 {
        if screen.visibleFrame.origin.x == 0 {
            return .right
        } else {
            return .left
        }
    } else {
        return .bottom
    }
    
    return .none
}

func getDockSize(screen: NSScreen) -> CGFloat {
    let dockPosition = getDockPosition(screen: screen)
    switch dockPosition {
    case .right:
        let size = screen.frame.width - screen.visibleFrame.width
        return size
    case .left:
        let size = screen.visibleFrame.origin.x
        return size
    case .bottom:
        let size = screen.visibleFrame.origin.y
        return size
        
    case .none:
        return 0
    }
}

func isDockHidden(screen: NSScreen) -> Bool {
    let dockSize = getDockSize(screen: screen)
    
    if dockSize < 25 {
        return true
    } else {
        return false
    }
}
