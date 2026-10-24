#!/usr/bin/env python3
"""Check production sleep-aware navigation in isolated, nonpersistent WebKit.

Uses synthetic workspace notifications and local pages. Does not sleep the Mac,
capture the screen, open Safari, or access persisted website data.
"""
from pathlib import Path
import subprocess
import tempfile

root = Path(__file__).resolve().parents[1]
with tempfile.TemporaryDirectory(prefix='mih-sleep-webkit-') as directory:
    temporary = Path(directory)
    binary = temporary / 'SleepAwareWebViewTests'
    subprocess.run([
        'swiftc', '-swift-version', '5', '-parse-as-library',
        '-module-cache-path', str(temporary / 'modules'),
        str(root / 'MakeItHome/Helpers/SleepAwareWebView.swift'),
        str(root / 'Tests/SleepAwareWebViewTests.swift'), '-o', str(binary)
    ], check=True)
    subprocess.run([str(binary)], check=True, timeout=60)
