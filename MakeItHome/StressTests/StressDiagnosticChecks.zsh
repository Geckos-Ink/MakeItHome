# Shared by the diagnostic wrapper and its fixture-based regression tests.
stress_report_is_test_crash() {
    local report="$1"
    case "$report" in
        *.ips)
            head -n 1 "$report" |
                grep -Eq '"bundleID"[[:space:]]*:[[:space:]]*"ink\.geckos\.MakeItHome\.Test"'
            ;;
        *.crash)
            grep -Eq '^Identifier:[[:space:]]+ink\.geckos\.MakeItHome\.Test[[:space:]]*$' "$report"
            ;;
        *) return 1 ;;
    esac
}

stress_phase_has_crash() {
    local mode_directory="$1"
    local crash_count=0
    if [[ -s "$mode_directory/crash-report-count.txt" ]]; then
        crash_count="$(<"$mode_directory/crash-report-count.txt")"
    fi
    if [[ "$crash_count" == <-> ]] && (( crash_count > 0 )); then
        return 0
    fi
    # This command is executed only by the LLDB --one-line-on-crash hook.
    # A completion record may already have been emitted before a shutdown crash.
    if [[ -s "$mode_directory/lldb.log" ]] &&
        grep -Fxq '(lldb) thread backtrace all' "$mode_directory/lldb.log"; then
        return 0
    fi
    return 1
}
