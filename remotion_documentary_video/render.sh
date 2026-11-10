#!/bin/bash
set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR"

mkdir -p out

echo "🎬 Rendering Documentary Master Video..."
npx remotion render src/index.ts MainVideo out/documentary_master.mp4 --codec=h264

echo "📸 Rendering Still Previews..."
npx remotion still src/index.ts Act1-Origin out/thumb_act1.png --frame=350
npx remotion still src/index.ts Act2-GPURevolution out/thumb_act2.png --frame=450
npx remotion still src/index.ts Act3-Geopolitics out/thumb_act3.png --frame=550
npx remotion still src/index.ts Act4-AIEpoch out/thumb_act4.png --frame=200

echo "✅ All renders finished successfully!"
