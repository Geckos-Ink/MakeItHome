#!/usr/bin/env python3
"""Compile the production app initializer; verify worker results publish on main."""
from pathlib import Path
import subprocess
import tempfile

root = Path(__file__).resolve().parents[1]
source = (root / 'MakeItHome/Managers/Displays.swift').read_text()
start = source.index('        init(runningApp: NSRunningApplication, display: Display){')
end = source.index('\n        func checkAppExtension()', start)
initializer = source[start:end]
fixture = r'''
import Foundation
import Dispatch
final class NSColor { static let white = NSColor() }
final class NSImage {}
final class NSRunningApplication {
    let processIdentifier: Int32 = 1
    let bundleIdentifier: String? = "test.app"
    var icon: NSImage? {
        precondition(Thread.isMainThread, "Read the running application's icon on main")
        return NSImage()
    }
}
final class Display {}
enum Static { static let highPriorityQueue = DispatchQueue(label: "test.icon.worker") }
func averageColor(of image: NSImage) -> NSColor? {
    precondition(!Thread.isMainThread, "Image processing must remain on the worker")
    return NSColor()
}
final class AppWindows {
    var runningApp: NSRunningApplication
    let display: Display
    let id: Int32
    let bundleId: String?
    var publications = 0
    var iconAvgColor: NSColor = .white {
        didSet {
            if !Thread.isMainThread {
                FileHandle.standardError.write(Data("Off-main icon color publication\n".utf8))
            }
            precondition(Thread.isMainThread, "Icon color publication races SceneKit readers")
            publications += 1
        }
    }
    INITIALIZER
}
@main struct Test {
    static func main() {
        Static.highPriorityQueue.suspend()
        weak var retired: AppWindows?
        do {
            let owner = AppWindows(runningApp: NSRunningApplication(), display: Display())
            retired = owner
        }
        precondition(retired == nil, "Pending icon work must not retain a retired owner")
        let owners = (0..<500).map { _ in AppWindows(runningApp: NSRunningApplication(), display: Display()) }
        Static.highPriorityQueue.resume()
        let deadline = Date().addingTimeInterval(10)
        while owners.contains(where: { $0.publications == 0 }) && Date() < deadline {
            _ = RunLoop.main.run(mode: .default, before: Date().addingTimeInterval(0.005))
        }
        precondition(owners.allSatisfy { $0.publications == 1 })
        print("AppIconOwnershipTests: PASS (500 worker results published on main)")
    }
}
'''.replace('    INITIALIZER', initializer)
with tempfile.TemporaryDirectory(prefix='mih-icon-tests-') as directory:
    directory = Path(directory)
    harness = directory / 'Test.swift'
    harness.write_text(fixture)
    binary = directory / 'Test'
    subprocess.run(['swiftc', '-O', '-parse-as-library', str(harness), '-o', str(binary)], check=True)
    result = subprocess.run([str(binary)], capture_output=True, text=True, timeout=15)
    if result.returncode:
        print(result.stderr[-5000:])
        raise SystemExit('App icon ownership regression failed')
    print(result.stdout.splitlines()[-1])
