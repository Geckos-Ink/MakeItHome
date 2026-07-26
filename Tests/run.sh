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
TEST_DIR="$(mktemp -d -t makeithome-tests)"

trap 'rm -rf "$TEST_DIR"' EXIT

swiftc -O -parse-as-library "$GATE" "$GATE_TESTS" -o "$TEST_DIR/preview-flow-gate-tests"
"$TEST_DIR/preview-flow-gate-tests"

swiftc -O -parse-as-library "$CLIPBOARD_BOUNDS" "$CLIPBOARD_TESTS" -o "$TEST_DIR/clipboard-resource-stress-tests"
"$TEST_DIR/clipboard-resource-stress-tests"
