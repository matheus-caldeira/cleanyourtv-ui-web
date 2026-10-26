#!/usr/bin/env bash
# Brings the screenshots and the remote presets over from a checkout of cleanyourtv-ui, next to this one by default.
# Run it after a new remote.json lands in cleanyourtv-ui's examples/ or the screenshots change, then commit the result.
#
# Usage: scripts/sync.sh [path to cleanyourtv-ui]
set -euo pipefail
cd "$(dirname "$0")/.."
UI="${1:-../cleanyourtv-ui}"
[ -d "$UI/launcher-ui" ] || { echo "no cleanyourtv-ui checkout at $UI" >&2; exit 1; }

# Screenshots, 1280 px wide (sips on macOS, ImageMagick elsewhere).
mkdir -p img/shots
for f in "$UI"/docs/ui/screenshots/en/*.jpg; do
  out="img/shots/$(basename "$f")"
  if command -v sips >/dev/null 2>&1; then
    sips -Z 1280 -s formatOptions 78 "$f" --out "$out" >/dev/null
  else
    convert "$f" -resize 1280x -quality 78 "$out"
  fi
done

# Every examples/<model>/remote.json, as one script the page loads (it works from file:// too, unlike fetch).
python3 -I - "$UI" > remotes.js <<'PY'
import json, pathlib, sys
ui = pathlib.Path(sys.argv[1])
remotes = {}
for f in sorted(ui.glob("examples/*/remote.json")):
    remotes[f.parent.name] = json.loads(f.read_text(encoding="utf-8"))
print("window.REMOTES = " + json.dumps(remotes, ensure_ascii=False, indent=1) + ";")
PY
echo "Synced $(ls img/shots | wc -l | tr -d ' ') screenshots and $(grep -c '"buttons"' remotes.js) remotes from $UI"
