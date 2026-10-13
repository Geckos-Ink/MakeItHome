#!/bin/zsh
set -euo pipefail
source "${0:A:h:h}/MakeItHome/StressTests/StressDiagnosticChecks.zsh"
fixture_directory="$(mktemp -d -t makeithome-diagnostics)"
trap 'rm -rf -- "$fixture_directory"' EXIT

print 0 > "$fixture_directory/crash-report-count.txt"
print 'Process 42 exited with status = 0 (0x00000000)' > "$fixture_directory/lldb.log"
if stress_phase_has_crash "$fixture_directory"; then
    print 'FAIL: normal exit was classified as a crash'
    exit 1
fi

# A completion handshake must not hide a subsequent native shutdown crash.
print '[RuntimeLifecycleStress] COMPLETED' > "$fixture_directory/result.txt"
print 1 > "$fixture_directory/crash-report-count.txt"
stress_phase_has_crash "$fixture_directory" || { print 'FAIL: native shutdown crash was ignored'; exit 1; }

# Debugger-caught crashes usually do not generate an .ips report.
print 0 > "$fixture_directory/crash-report-count.txt"
print '(lldb) thread backtrace all' > "$fixture_directory/lldb.log"
stress_phase_has_crash "$fixture_directory" || { print 'FAIL: debugger crash hook was ignored'; exit 1; }

print 'error: attach failed' > "$fixture_directory/lldb.log"
if stress_phase_has_crash "$fixture_directory"; then
    print 'FAIL: unavailable diagnostics were classified as an app crash'
    exit 1
fi
print '{"bundleID":"ink.geckos.MakeItHome.Test"}' > "$fixture_directory/test.ips"
stress_report_is_test_crash "$fixture_directory/test.ips" || { print 'FAIL: Test app crash identity was missed'; exit 1; }
print '{"bundleID":"com.apple.WindowServer"}' > "$fixture_directory/server.ips"
print 'ink.geckos.MakeItHome.Test' >> "$fixture_directory/server.ips"
if stress_report_is_test_crash "$fixture_directory/server.ips"; then
    print 'FAIL: related process crash was attributed to the Test app'
    exit 1
fi
print 'ink.geckos.MakeItHome.Test' > "$fixture_directory/server.cpu_resource.diag"
if stress_report_is_test_crash "$fixture_directory/server.cpu_resource.diag"; then
    print 'FAIL: CPU-resource diagnostic was classified as an app crash'
    exit 1
fi
print 'Identifier:      ink.geckos.MakeItHome.Test' > "$fixture_directory/test.crash"
stress_report_is_test_crash "$fixture_directory/test.crash" || { print 'FAIL: legacy Test crash was missed'; exit 1; }
print 'StressDiagnosticChecksTests: PASS (shutdown crashes, report identity, resource diagnostics)'
