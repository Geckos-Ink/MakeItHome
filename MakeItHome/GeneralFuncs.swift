//
//  GeneralFuncs.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 18/11/22.
//

import Foundation
import IOKit.ps

public class GeneralFuncs {
    public static func ComputerIsConnectedToAdapter() -> Bool{
        //TODO: Currently disabled for debug purposes
        return true
        
        #if arch(arm64)
        let isPowerAdapterConnected = IOPSCopyExternalPowerAdapterDetails()?.takeRetainedValue() != nil
        return isPowerAdapterConnected
        
        #else
        return true
        #endif
    }
}

func calculateDistance(point1: NSPoint, point2: NSPoint) -> CGFloat {
    let distance = hypot(point2.x - point1.x, point2.y - point1.y)
    return distance
}

func delay(ms: Int, closure: @escaping () -> Void) {
    DispatchQueue.global().asyncAfter(deadline: .now() + .milliseconds(ms)) {
        DispatchQueue.main.async {
            closure()
        }
    }
}
