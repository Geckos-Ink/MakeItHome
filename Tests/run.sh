#!/bin/bash
#
# Fast unit tests for the preview/recording gate.
#
# Compiles the REAL MakeItHome/Helpers/PreviewFlowGate.swift together with the test file and
# runs it — no Xcode, no simulator, no screen-recording permission. Finishes in well under a
# second, so it is the quick way to check the fullscreen / idle / space-change recovery flow
# without manually reproducing "leave the computer idle, open a fullscreen app, come back".
#
# Usage:  ./Tests/run.sh
# Exit status is non-zero if any check fails.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
GATE="$ROOT/MakeItHome/Helpers/PreviewFlowGate.swift"
TESTS="$ROOT/Tests/PreviewFlowGateTests.swift"
BIN="$(mktemp -t previewflowgate-tests)"

trap 'rm -f "$BIN"' EXIT

swiftc -O -parse-as-library "$GATE" "$TESTS" -o "$BIN"
"$BIN"
