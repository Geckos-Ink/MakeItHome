#!/bin/zsh

set -euo pipefail
umask 077

script_directory="${0:A:h}"
repository_root="${script_directory:h:h}"
mode_list="${MIH_STRESS_MODES:-virtual-apps app-extension runtime-lifecycle real-usage}"
modes=(${=mode_list})

virtual_stage_seconds="${MIH_STRESS_VIRTUAL_STAGE_SECONDS:-5}"
app_extension_seconds="${MIH_STRESS_APP_EXTENSION_SECONDS:-90}"
runtime_seconds="${MIH_STRESS_RUNTIME_SECONDS:-300}"
real_usage_seconds="${MIH_STRESS_REAL_USAGE_SECONDS:-${MIH_STRESS_DURATION_SECONDS:-780}}"
runtime_interval="${MIH_STRESS_RUNTIME_INTERVAL_SECONDS:-2}"
action_interval="${MIH_STRESS_INTERVAL_SECONDS:-0.08}"
sample_interval="${MIH_STRESS_SAMPLE_INTERVAL_SECONDS:-30}"
attach_lldb="${MIH_STRESS_ATTACH_LLDB:-1}"
stop_on_failure="${MIH_STRESS_STOP_ON_FAILURE:-0}"
copy_source_directory="${MIH_STRESS_COPY_SOURCE:-/Users/riccardo/Pictures/instagramToReload}"

user_name="$(id -un)"
user_directory="$(
    dscl . -read "/Users/$user_name" NFSHomeDirectory |
        awk '{ print $2; exit }'
)"
artifact_root="${MIH_STRESS_ARTIFACTS_DIRECTORY:-$user_directory/Library/Logs/MakeItHomeStress}"
run_stamp="$(date -u '+%Y%m%dT%H%M%SZ')"
artifact_directory="$artifact_root/$run_stamp-$$"
container_temporary_directory="$user_directory/Library/Containers/ink.geckos.MakeItHome.Test/Data/tmp"
runtime_directory="$container_temporary_directory/MakeItHomeStressRun-$$"
results_directory="$runtime_directory/results"
staging_directory="$runtime_directory/corpus"

active_app_pid=""
active_launcher_pid=""
active_log_pid=""
active_lldb_pid=""
active_sampler_pid=""
active_mode_directory=""

cleanup_process() {
    local process_id="${1:-}"
    if [[ -n "$process_id" ]] && kill -0 "$process_id" 2>/dev/null; then
        kill "$process_id" 2>/dev/null || true
    fi
}

cleanup() {
    set +e
    cleanup_process "$active_sampler_pid"
    cleanup_process "$active_log_pid"
    cleanup_process "$active_lldb_pid"

    if [[ -n "$active_app_pid" ]] && kill -0 "$active_app_pid" 2>/dev/null; then
        kill -TERM "$active_app_pid" 2>/dev/null
        for _ in {1..30}; do
            if ! kill -0 "$active_app_pid" 2>/dev/null; then
                break
            fi
            sleep 0.1
        done
        if kill -0 "$active_app_pid" 2>/dev/null; then
            kill -KILL "$active_app_pid" 2>/dev/null
        fi
    fi
    cleanup_process "$active_launcher_pid"

    if [[ -n "$active_mode_directory" && -d "$results_directory" ]]; then
        mkdir -p "$active_mode_directory"
        for result in "$results_directory"/*.txt(N); do
            ditto "$result" "$active_mode_directory/${result:t}" 2>/dev/null
        done
    fi

    if [[ "$runtime_directory" == "$container_temporary_directory"/MakeItHomeStressRun-* ]]; then
        rm -rf -- "$runtime_directory"
    fi
}

handle_signal() {
    exit 130
}

trap handle_signal INT TERM
trap cleanup EXIT

require_positive_number() {
    local option_name="$1"
    local option_value="$2"
    if ! awk -v value="$option_value" \
        'BEGIN { exit !(value ~ /^[0-9]+([.][0-9]+)?$/ && value > 0) }'; then
        print -u2 "$option_name must be a positive number; received: $option_value"
        exit 2
    fi
}

require_positive_integer() {
    local option_name="$1"
    local option_value="$2"
    if [[ "$option_value" != <-> ]] || (( option_value <= 0 )); then
        print -u2 "$option_name must be a positive integer; received: $option_value"
        exit 2
    fi
}

require_boolean() {
    local option_name="$1"
    local option_value="$2"
    if [[ "$option_value" != "0" && "$option_value" != "1" ]]; then
        print -u2 "$option_name must be 0 or 1; received: $option_value"
        exit 2
    fi
}

require_positive_number MIH_STRESS_VIRTUAL_STAGE_SECONDS "$virtual_stage_seconds"
require_positive_number MIH_STRESS_APP_EXTENSION_SECONDS "$app_extension_seconds"
require_positive_number MIH_STRESS_RUNTIME_SECONDS "$runtime_seconds"
require_positive_number MIH_STRESS_REAL_USAGE_SECONDS "$real_usage_seconds"
require_positive_number MIH_STRESS_RUNTIME_INTERVAL_SECONDS "$runtime_interval"
require_positive_number MIH_STRESS_INTERVAL_SECONDS "$action_interval"
require_positive_integer MIH_STRESS_SAMPLE_INTERVAL_SECONDS "$sample_interval"
require_boolean MIH_STRESS_ATTACH_LLDB "$attach_lldb"
require_boolean MIH_STRESS_STOP_ON_FAILURE "$stop_on_failure"

if (( ${#modes[@]} == 0 )); then
    print -u2 "MIH_STRESS_MODES selected no stress modes."
    exit 2
fi

needs_real_usage=0
for mode in "${modes[@]}"; do
    case "$mode" in
        virtual-apps | app-extension | runtime-lifecycle) ;;
        real-usage)
            needs_real_usage=1
            ;;
        *)
            print -u2 "Unknown stress mode: $mode"
            exit 2
            ;;
    esac
done

if (( needs_real_usage )) && [[ ! -d "$copy_source_directory" ]]; then
    print -u2 "Clipboard source directory not found: $copy_source_directory"
    exit 1
fi

mkdir -p "$artifact_directory" "$results_directory"
run_marker="$artifact_directory/run-start.marker"
: > "$run_marker"

cd "$repository_root"

{
    print "startedUTC=$run_stamp"
    print "repository=$repository_root"
    print "modes=${(j: :)modes}"
    print "virtualStageSeconds=$virtual_stage_seconds"
    print "appExtensionSeconds=$app_extension_seconds"
    print "runtimeSeconds=$runtime_seconds"
    print "realUsageSeconds=$real_usage_seconds"
    print "runtimeIntervalSeconds=$runtime_interval"
    print "realUsageIntervalSeconds=$action_interval"
    print "sampleIntervalSeconds=$sample_interval"
    print "attachLLDB=$attach_lldb"
    print "copySource=$copy_source_directory"
    print
    sw_vers
    print
    xcodebuild -version
    print
    git rev-parse HEAD
    git status --short
} > "$artifact_directory/manifest.txt" 2>&1

print "Stress artifacts: $artifact_directory"

if pgrep -x "MakeItHome Test" >/dev/null 2>&1; then
    print -u2 "MakeItHome Test is already running. Quit it before starting the orchestrator."
    exit 1
fi

build_arguments=(
    -project MakeItHome.xcodeproj
    -scheme "MakeItHome Test"
    -configuration Debug
    -destination "platform=macOS"
)
debug_overrides=(
    DEBUG_INFORMATION_FORMAT=dwarf-with-dsym
)

print "Building MakeItHome Test in Debug with dSYM generation..."
if ! xcodebuild "${build_arguments[@]}" "${debug_overrides[@]}" build \
    > "$artifact_directory/build.log" 2>&1; then
    tail -n 200 "$artifact_directory/build.log" >&2
    print -u2 "Debug build failed. Full build log: $artifact_directory/build.log"
    exit 1
fi

xcodebuild "${build_arguments[@]}" "${debug_overrides[@]}" -showBuildSettings \
    > "$artifact_directory/build-settings.txt" 2>&1

target_build_directory="$(
    awk -F ' = ' '/^[[:space:]]*TARGET_BUILD_DIR = / { print $2; exit }' \
        "$artifact_directory/build-settings.txt"
)"
dsym_file_name="$(
    awk -F ' = ' '/^[[:space:]]*DWARF_DSYM_FILE_NAME = / { print $2; exit }' \
        "$artifact_directory/build-settings.txt"
)"
stress_app="$target_build_directory/MakeItHome Test.app"
stress_executable="$stress_app/Contents/MacOS/MakeItHome Test"
stress_dsym="$target_build_directory/$dsym_file_name"

if [[ ! -x "$stress_executable" ]]; then
    print -u2 "Stress executable not found: $stress_executable"
    exit 1
fi

mkdir -p "$artifact_directory/symbols"
if [[ -d "$stress_dsym" ]]; then
    ditto "$stress_dsym" "$artifact_directory/symbols/$dsym_file_name"
else
    if ! xcrun dsymutil "$stress_executable" \
        -o "$artifact_directory/symbols/$dsym_file_name" \
        > "$artifact_directory/dsymutil.log" 2>&1; then
        print -u2 "Unable to preserve a dSYM; see $artifact_directory/dsymutil.log"
        exit 1
    fi
fi

{
    xcrun dwarfdump --uuid "$stress_executable"
    xcrun dwarfdump --uuid "$artifact_directory/symbols/$dsym_file_name"
    codesign -dvv "$stress_app"
} > "$artifact_directory/binary-identities.txt" 2>&1

if (( needs_real_usage )); then
    print "Staging clipboard corpus: $copy_source_directory"
    ditto "$copy_source_directory" "$staging_directory"
fi

sample_periodically() {
    local target_pid="$1"
    local stack_directory="$2"
    local sampler_log="$3"
    local sample_index=1

    sleep 2
    while kill -0 "$target_pid" 2>/dev/null; do
        local output_file="$stack_directory/sample-$(printf '%04d' "$sample_index").txt"
        print "Sampling pid $target_pid -> $output_file" >> "$sampler_log"
        /usr/bin/sample "$target_pid" 1 10 -mayDie -fullPaths -file "$output_file" \
            >> "$sampler_log" 2>&1 || true
        sample_index=$((sample_index + 1))

        local remaining="$sample_interval"
        while (( remaining > 0 )) && kill -0 "$target_pid" 2>/dev/null; do
            sleep 1
            remaining=$((remaining - 1))
        done
    done
}

stop_diagnostics() {
    cleanup_process "$active_sampler_pid"
    cleanup_process "$active_log_pid"

    if [[ -n "$active_lldb_pid" ]]; then
        for _ in {1..50}; do
            if ! kill -0 "$active_lldb_pid" 2>/dev/null; then
                break
            fi
            sleep 0.1
        done
        cleanup_process "$active_lldb_pid"
    fi

    set +e
    [[ -n "$active_sampler_pid" ]] && wait "$active_sampler_pid" 2>/dev/null
    [[ -n "$active_log_pid" ]] && wait "$active_log_pid" 2>/dev/null
    [[ -n "$active_lldb_pid" ]] && wait "$active_lldb_pid" 2>/dev/null
    set -e

    active_sampler_pid=""
    active_log_pid=""
    active_lldb_pid=""
}

collect_crash_reports() {
    local destination_directory="$1"
    local marker_file="$2"
    local collector_log="$destination_directory/collector.log"
    local copied=0
    local report_root

    mkdir -p "$destination_directory/crash-reports"
    for report_root in \
        "$user_directory/Library/Logs/DiagnosticReports" \
        "/Library/Logs/DiagnosticReports"; do
        [[ -d "$report_root" ]] || continue
        while IFS= read -r -d $'\0' report; do
            if grep -aq "ink.geckos.MakeItHome.Test" "$report"; then
                local destination="$destination_directory/crash-reports/${report:t}"
                ditto "$report" "$destination" >> "$collector_log" 2>&1
                copied=$((copied + 1))
            fi
        done < <(
            find "$report_root" -maxdepth 2 -type f -newer "$marker_file" -print0 \
                2>> "$collector_log"
        )
    done
    print "$copied" > "$destination_directory/crash-report-count.txt"
}

print_failure_diagnostics() {
    local mode_directory="$1"
    if [[ -s "$mode_directory/stdout.log" ]]; then
        print -u2 -- "----- stdout: ${mode_directory:t} (last 120 lines) -----"
        tail -n 120 "$mode_directory/stdout.log" >&2
    fi
    if [[ -s "$mode_directory/stderr.log" ]]; then
        print -u2 -- "----- stderr: ${mode_directory:t} (last 120 lines) -----"
        tail -n 120 "$mode_directory/stderr.log" >&2
    fi
    if [[ -s "$mode_directory/lldb.log" ]]; then
        print -u2 -- "----- LLDB: ${mode_directory:t} (last 80 lines) -----"
        tail -n 80 "$mode_directory/lldb.log" >&2
    fi
}

run_mode() {
    local mode="$1"
    local sequence="$2"
    local mode_directory="$artifact_directory/$(printf '%02d-%s' "$sequence" "$mode")"
    local result_file="$results_directory/$mode.txt"
    local marker_file="$mode_directory/start.marker"
    local expected_prefix=""
    local expected_active_seconds=0
    local watchdog_allowance=90
    local -a app_arguments

    mkdir -p "$mode_directory/stacks"
    : > "$mode_directory/stdout.log"
    : > "$mode_directory/stderr.log"
    : > "$marker_file"
    active_mode_directory="$mode_directory"

    app_arguments=(
        --stress "$mode"
        --stress-auto-exit
        --stress-result-file "$result_file"
    )

    case "$mode" in
        virtual-apps)
            expected_prefix="[VirtualStress] COMPLETED "
            expected_active_seconds="$(awk -v stage="$virtual_stage_seconds" 'BEGIN { print stage * 6 }')"
            app_arguments+=(--stress-stage-seconds "$virtual_stage_seconds")
            ;;
        app-extension)
            expected_prefix="[AppExtensionStress] COMPLETED "
            expected_active_seconds="$app_extension_seconds"
            app_arguments+=(
                --stress-duration "$app_extension_seconds"
                --stress-workers 12
                --stress-payload-kb 512
            )
            ;;
        runtime-lifecycle)
            expected_prefix="[RuntimeLifecycleStress] COMPLETED "
            expected_active_seconds="$runtime_seconds"
            watchdog_allowance=150
            app_arguments+=(
                --stress-duration "$runtime_seconds"
                --stress-interval "$runtime_interval"
            )
            ;;
        real-usage)
            expected_prefix="[RealUsageStress] COMPLETED "
            expected_active_seconds="$real_usage_seconds"
            watchdog_allowance=210
            app_arguments+=(
                --stress-duration "$real_usage_seconds"
                --stress-interval "$action_interval"
                --stress-copy-source "$staging_directory"
            )
            if [[ -n "${MIH_STRESS_SEED:-}" ]]; then
                app_arguments+=(--stress-seed "$MIH_STRESS_SEED")
            fi
            ;;
    esac

    local watchdog_seconds="$(
        awk -v active="$expected_active_seconds" -v allowance="$watchdog_allowance" \
            'BEGIN { print int(active + allowance + 0.999999) }'
    )"
    {
        print "mode=$mode"
        print "expectedActiveSeconds=$expected_active_seconds"
        print "watchdogSeconds=$watchdog_seconds"
        printf '%q ' "$stress_executable" "${app_arguments[@]}"
        print
    } > "$mode_directory/invocation.txt"

    print "[$mode] starting; artifacts: $mode_directory"

    /usr/bin/log stream \
        --level debug \
        --style ndjson \
        --source \
        --backtrace \
        --predicate 'process == "MakeItHome Test"' \
        > "$mode_directory/unified.ndjson" \
        2> "$mode_directory/unified-stderr.log" &
    active_log_pid=$!

    /usr/bin/open -n -F -W \
        -o "$mode_directory/stdout.log" \
        --stderr "$mode_directory/stderr.log" \
        "$stress_app" \
        --args "${app_arguments[@]}" &
    active_launcher_pid=$!

    active_app_pid=""
    for _ in {1..300}; do
        active_app_pid="$(pgrep -n -x "MakeItHome Test" 2>/dev/null || true)"
        if [[ -n "$active_app_pid" ]] && kill -0 "$active_app_pid" 2>/dev/null; then
            break
        fi
        active_app_pid=""
        if ! kill -0 "$active_launcher_pid" 2>/dev/null; then
            break
        fi
        sleep 0.1
    done

    if [[ -z "$active_app_pid" ]]; then
        set +e
        wait "$active_launcher_pid"
        local launch_status=$?
        set -e
        stop_diagnostics
        collect_crash_reports "$mode_directory" "$marker_file"
        print -u2 "[$mode] app process did not launch (LaunchServices status $launch_status)."
        print_failure_diagnostics "$mode_directory"
        active_launcher_pid=""
        active_mode_directory=""
        return 1
    fi

    print "$active_app_pid" > "$mode_directory/pid.txt"

    if (( attach_lldb )); then
        xcrun lldb \
            --batch \
            --no-lldbinit \
            --attach-pid "$active_app_pid" \
            --one-line "process continue" \
            --one-line-on-crash "process status" \
            --one-line-on-crash "thread backtrace all" \
            --one-line-on-crash "register read" \
            --one-line-on-crash "process kill" \
            > "$mode_directory/lldb.log" 2>&1 &
        active_lldb_pid=$!
    fi

    sample_periodically \
        "$active_app_pid" \
        "$mode_directory/stacks" \
        "$mode_directory/sampler.log" &
    active_sampler_pid=$!

    local started_epoch="$(date +%s)"
    local deadline_epoch=$((started_epoch + watchdog_seconds))
    local timed_out=0

    while kill -0 "$active_launcher_pid" 2>/dev/null; do
        if (( $(date +%s) >= deadline_epoch )); then
            timed_out=1
            print "watchdog expired after ${watchdog_seconds}s" > "$mode_directory/watchdog.txt"
            /usr/bin/sample "$active_app_pid" 5 10 -mayDie -fullPaths \
                -file "$mode_directory/stacks/watchdog-timeout.txt" \
                >> "$mode_directory/sampler.log" 2>&1 || true

            kill -TERM "$active_app_pid" 2>/dev/null || true
            for _ in {1..50}; do
                if ! kill -0 "$active_app_pid" 2>/dev/null; then
                    break
                fi
                sleep 0.1
            done
            if kill -0 "$active_app_pid" 2>/dev/null; then
                kill -KILL "$active_app_pid" 2>/dev/null || true
            fi
            break
        fi
        sleep 1
    done

    set +e
    wait "$active_launcher_pid"
    local launch_status=$?
    set -e
    sleep 2
    stop_diagnostics
    sleep 2
    collect_crash_reports "$mode_directory" "$marker_file"

    local result_summary=""
    if [[ -s "$result_file" ]]; then
        result_summary="$(<"$result_file")"
        ditto "$result_file" "$mode_directory/result.txt"
    fi

    local mode_failed=0
    if (( timed_out )); then
        mode_failed=1
    fi
    if (( launch_status != 0 )); then
        mode_failed=1
    fi
    if [[ "$result_summary" != "$expected_prefix"* ]]; then
        mode_failed=1
    fi

    if (( mode_failed )); then
        {
            print "FAILED"
            print "launchStatus=$launch_status"
            print "timedOut=$timed_out"
            print "result=$result_summary"
        } > "$mode_directory/status.txt"
        print -u2 "[$mode] FAILED: ${result_summary:-no completion result}"
        print_failure_diagnostics "$mode_directory"
    else
        {
            print "COMPLETED"
            print "launchStatus=$launch_status"
            print "result=$result_summary"
        } > "$mode_directory/status.txt"
        print "[$mode] $result_summary"
    fi

    active_app_pid=""
    active_launcher_pid=""
    active_mode_directory=""
    return "$mode_failed"
}

overall_failed=0
mode_sequence=1
for mode in "${modes[@]}"; do
    if ! run_mode "$mode" "$mode_sequence"; then
        overall_failed=1
        if (( stop_on_failure )); then
            break
        fi
    fi
    mode_sequence=$((mode_sequence + 1))
done

sleep 3
collect_crash_reports "$artifact_directory" "$run_marker"

{
    if (( overall_failed )); then
        print "FAILED"
    else
        print "COMPLETED"
    fi
    print "finishedUTC=$(date -u '+%Y-%m-%dT%H:%M:%SZ')"
    print "artifacts=$artifact_directory"
    for status_file in "$artifact_directory"/<->-*/status.txt(N); do
        print "${status_file:h:t}: $(head -n 1 "$status_file")"
    done
} > "$artifact_directory/summary.txt"

print "Complete diagnostic bundle: $artifact_directory"
if (( overall_failed )); then
    print -u2 "One or more stress modes failed. See $artifact_directory/summary.txt"
    exit 1
fi
