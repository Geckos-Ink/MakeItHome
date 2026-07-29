import Foundation

@main
struct PreviewTitleTextTests {
    private static var failures = 0

    private static func expectEqual(
        _ actual: String,
        _ expected: String,
        _ message: String,
        file: StaticString = #filePath,
        line: UInt = #line
    ) {
        guard actual != expected else {
            return
        }

        failures += 1
        print("FAIL \(file):\(line): \(message)")
        print("  expected: \(String(reflecting: expected))")
        print("  actual:   \(String(reflecting: actual))")
    }

    static func main() {
        expectEqual(
            PreviewTitleText.wrapping("", after: 0),
            "",
            "Empty titles should remain empty at a zero character limit."
        )
        expectEqual(
            PreviewTitleText.wrapping("Terminal: Logs", after: 0),
            "Terminal\n:\n \nLogs",
            "A zero character limit should be clamped instead of reaching remainder-by-zero."
        )
        expectEqual(
            PreviewTitleText.wrapping("Window", after: -4),
            "Window",
            "Negative character limits should also be clamped safely."
        )
        expectEqual(
            PreviewTitleText.wrapping("abcdefghijk", after: 1),
            "abcdefgh\nijk",
            "Long words should force a bounded line break even without punctuation."
        )
        expectEqual(
            PreviewTitleText.wrapping("Preview title", after: 7),
            "Preview \ntitle",
            "Preferred punctuation should end an armed line."
        )
        expectEqual(
            PreviewTitleText.wrapping("窗口预览标题", after: 3),
            "窗口预览标题",
            "Unicode titles should be traversed by Character without invalid indices."
        )

        if failures == 0 {
            print("PreviewTitleTextTests: PASS")
        } else {
            print("PreviewTitleTextTests: FAIL (\(failures) failures)")
            exit(1)
        }
    }
}
