#!/bin/bash
#
# Fast dependency-free regression tests.
#
# Compiles real production helpers together with their focused test files and
# runs them — no Xcode, simulator, or privacy permissions required.
#
# Usage:  ./Tests/run.sh
# Exit status is non-zero if any check fails.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
GATE="$ROOT/MakeItHome/Helpers/PreviewFlowGate.swift"
GATE_TESTS="$ROOT/Tests/PreviewFlowGateTests.swift"
CLIPBOARD_BOUNDS="$ROOT/MakeItHome/Helpers/ClipboardResourceBounds.swift"
CLIPBOARD_TESTS="$ROOT/Tests/ClipboardResourceStressTests.swift"
PREVIEW_TITLE_TEXT="$ROOT/MakeItHome/Helpers/PreviewTitleText.swift"
PREVIEW_TITLE_TESTS="$ROOT/Tests/PreviewTitleTextTests.swift"
TEST_DIR="$(mktemp -d -t makeithome-tests)"

trap 'rm -rf "$TEST_DIR"' EXIT

swiftc -O -parse-as-library "$GATE" "$GATE_TESTS" -o "$TEST_DIR/preview-flow-gate-tests"
"$TEST_DIR/preview-flow-gate-tests"

swiftc -O -parse-as-library "$CLIPBOARD_BOUNDS" "$CLIPBOARD_TESTS" -o "$TEST_DIR/clipboard-resource-stress-tests"
"$TEST_DIR/clipboard-resource-stress-tests"

swiftc -O -parse-as-library "$PREVIEW_TITLE_TEXT" "$PREVIEW_TITLE_TESTS" -o "$TEST_DIR/preview-title-text-tests"
"$TEST_DIR/preview-title-text-tests"

swiftc -O -parse-as-library "$ROOT/MakeItHome/Helpers/FocusedWindowPointerPolicy.swift" \
    "$ROOT/Tests/FocusedWindowPointerTests.swift" -o "$TEST_DIR/focused-window-pointer-tests"
"$TEST_DIR/focused-window-pointer-tests"
python3 "$ROOT/Tests/DisplaySwitchTests.py"

swiftc -O -parse-as-library "$ROOT/MakeItHome/Helpers/ScreenRecordingPermissionGate.swift" \
    "$ROOT/Tests/ScreenRecordingPermissionGateTests.swift" -o "$TEST_DIR/screen-recording-permission-gate-tests"
"$TEST_DIR/screen-recording-permission-gate-tests"
python3 "$ROOT/Tests/ScreenRecordingPermissionOnboardingTests.py"

swiftc -O -parse-as-library "$ROOT/MakeItHome/Helpers/CaptureLifecycle.swift" \
    "$ROOT/Tests/CaptureLifecycleTests.swift" -o "$TEST_DIR/capture-lifecycle-tests"
"$TEST_DIR/capture-lifecycle-tests"
python3 "$ROOT/Tests/CapturePriorityTests.py"

swiftc -O -D STRESS_TEST_APP -parse-as-library "$ROOT/MakeItHome/Helpers/StressProcessSample.swift" \
    "$ROOT/Tests/StressProcessSampleTests.swift" -o "$TEST_DIR/stress-process-sample-tests"
"$TEST_DIR/stress-process-sample-tests"

swiftc -O -parse-as-library "$ROOT/MakeItHome/Helpers/AppExtensionStatusMailbox.swift" \
    "$ROOT/Tests/AppExtensionStatusMailboxTests.swift" -o "$TEST_DIR/app-extension-status-mailbox-tests"
"$TEST_DIR/app-extension-status-mailbox-tests"

python3 "$ROOT/Tests/ExtensionFocusHandoffTests.py"
python3 "$ROOT/Tests/AppExtensionDeliveryTests.py"
python3 "$ROOT/Tests/AppExtensionContentLifecycleTests.py"
python3 "$ROOT/Tests/AppExtensionApprovalTests.py"

zsh "$ROOT/Tests/StressDiagnosticChecksTests.zsh"
