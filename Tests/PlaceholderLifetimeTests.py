#!/usr/bin/env python3
"""Exercise real placeholder windows and production duplicate repair under ARC.

Uses AppKit/SwiftUI without capture, Accessibility, or a change to the user's Space.
"""
from pathlib import Path
import os
import subprocess
import tempfile

root = Path(__file__).resolve().parents[1]
display_source = (root / 'MakeItHome/Managers/Displays.swift').read_text()
start = display_source.index('    @MainActor\n    @discardableResult\n    func resolveStalePlaceholders')
end = display_source.index('\n    var aboveByTriggeredSince', start)
repair = display_source[start:end]

fixture = r'''
import AppKit
import SwiftUI

@MainActor
final class DisplayFixture {
    var placeholders: [SwifterPlaceholder] = []
    var spaces: [Int: SwifterPlaceholder] = [:]
    var curPlaceholder: SwifterPlaceholder?
    REPAIR
}

@main
struct PlaceholderLifetimeTests {
    @MainActor
    static func main() {
        let app = NSApplication.shared
        app.setActivationPolicy(.prohibited)
        var retired: [SwifterPlaceholder] = []
        var weakRetired: [WeakWindow] = []

        // Keep ARC owners across pool drains, just as Display's dictionaries do.
        for _ in 0..<50 {
            autoreleasepool {
                let display = DisplayFixture()
                let keep = SwifterPlaceholder()
                let duplicate = SwifterPlaceholder()
                keep.show()
                duplicate.show()
                precondition(keep.isVisible && duplicate.isVisible)
                display.placeholders = [keep, duplicate]
                precondition(keep.windowNumber >= 0 && duplicate.windowNumber >= 0,
                             "Native placeholder tests require an available WindowServer")
                display.spaces = [keep.windowNumber: keep, duplicate.windowNumber: duplicate]
                display.curPlaceholder = keep
                let ids = display.placeholders.map { $0.windowNumber }
                precondition(display.resolveStalePlaceholders(onScreenIds: ids))
                precondition(display.curPlaceholder === keep)
                precondition(display.placeholders.count == 1 && display.placeholders[0] === keep)
                precondition(display.spaces.count == 1 && display.spaces.values.first === keep)
                precondition(keep.isVisible && !keep.closed)
                precondition(duplicate.closed && !duplicate.isVisible)
                precondition(!display.resolveStalePlaceholders(onScreenIds: ids))
                duplicate.close()
                duplicate.show()
                precondition(!duplicate.isVisible, "A retired holder cannot reopen")
                retired.append(duplicate)
                weakRetired.append(WeakWindow(duplicate))
                keep.close()
                retired.append(keep)
                weakRetired.append(WeakWindow(keep))
            }
        }

        // With release-on-close, these owners become dangling at pool drain.
        for window in retired {
            precondition(window.closed && !window.isVisible)
            precondition(!window.isReleasedWhenClosed, "Swift owns placeholder lifetime")
        }
        autoreleasepool { retired.removeAll() }
        let deadline = Date().addingTimeInterval(3)
        while weakRetired.contains(where: { $0.window != nil }) && Date() < deadline {
            autoreleasepool { _ = RunLoop.main.run(mode: .default, before: Date().addingTimeInterval(0.01)) }
        }
        precondition(weakRetired.allSatisfy { $0.window == nil }, "Closed holders must not leak")
        print("PlaceholderLifetimeTests: PASS (100 native window closes, pool drains and deallocations)")
    }
}

final class WeakWindow {
    weak var window: SwifterPlaceholder?
    init(_ window: SwifterPlaceholder) { self.window = window }
}
'''.replace('    REPAIR', repair)

with tempfile.TemporaryDirectory(prefix='makeithome-placeholder-tests-') as directory:
    directory = Path(directory)
    harness = directory / 'PlaceholderLifetimeTests.swift'
    harness.write_text(fixture)
    binary = directory / 'PlaceholderLifetimeTests'
    subprocess.run([
        'swiftc', '-g', '-parse-as-library',
        str(root / 'MakeItHome/SwifterUI/SwifterPlaceholder.swift'), str(harness),
        '-o', str(binary),
    ], check=True)
    env = dict(os.environ, NSZombieEnabled='YES')
    result = subprocess.run([str(binary)], env=env, capture_output=True, text=True, timeout=30)
    print(result.stdout, end='')
    print(result.stderr, end='')
    if result.returncode != 0 or 'deallocated instance' in result.stderr:
        raise SystemExit('Placeholder lifetime regression failed')
