#!/usr/bin/env python3
"""
Fixes the v2 patch: removes duplicate static chart-wrap shells so React's
ChartCard component can render correctly without nested wrappers.

The issue: v2 patch wrapped each chart container in a static
<div class="chart-wrap"><div class="chart-title">...</div><div id="chart-X">
which conflicted with React's ChartCard component that renders ITS OWN
chart-wrap + chart-title around the chart.

Result: nested chart-wraps, duplicate titles, overflow, content overlapping.

Fix: replace each static chart-wrap shell with just <div id="chart-X"></div>.
React's ChartCard handles the styled container and title.

Run from ~/Downloads/novora-site/:
    python3 metadao_chart_fix.py
"""
import re
import sys
from pathlib import Path

REPORT_PATH = Path("public/research/metadao-q1-2026.html")


def main():
    if not REPORT_PATH.exists():
        print(f"✗ Report not found at {REPORT_PATH}")
        sys.exit(1)

    html = REPORT_PATH.read_text()
    backup = REPORT_PATH.with_suffix(".html.bak.v2")
    backup.write_text(html)
    print(f"✓ Backup saved to {backup}")

    # Match: <div class="chart-wrap">\n    <div class="chart-title">...</div>\n    <div id="chart-X" style="height: NNNpx;"></div>\n    <div class="chart-source">...</div>\n  </div>
    # Replace with just: <div id="chart-X"></div>
    pattern = re.compile(
        r'<div class="chart-wrap">\s*'
        r'<div class="chart-title">[^<]*</div>\s*'
        r'<div id="(chart-[a-z-]+)"[^>]*></div>\s*'
        r'<div class="chart-source">[^<]*</div>\s*'
        r'</div>',
        re.DOTALL
    )

    matches = pattern.findall(html)
    print(f"\nFound {len(matches)} static chart-wrap shells to strip:")
    for cid in matches:
        print(f"  • {cid}")

    new_html = pattern.sub(lambda m: f'<div id="{m.group(1)}"></div>', html)

    if new_html == html:
        print("\n✗ No changes made — pattern did not match. Aborting.")
        sys.exit(1)

    REPORT_PATH.write_text(new_html)

    # Verify all chart IDs preserved
    chart_ids = re.findall(r'id="(chart-[a-z-]+)"', new_html)
    chart_ids = sorted(set(chart_ids))
    print(f"\n✓ Chart IDs preserved ({len(chart_ids)} total):")
    for cid in chart_ids:
        print(f"  • {cid}")

    new_size = REPORT_PATH.stat().st_size
    print(f"\n✓ Fix written: {new_size:,} bytes")


if __name__ == "__main__":
    main()
