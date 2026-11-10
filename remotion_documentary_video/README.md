# Documentary Video: Jensen Huang, Alice Huang & The Geopolitical AI War

A high-production documentary video built with [Remotion](https://www.remotion.dev) (v4.0.542), TypeScript, React, and modular motion graphics.

---

## 📽️ Video Specifications

- **Format:** MP4 (H.264 / AAC 48kHz Stereo)
- **Resolution:** 1920 × 1080 (16:9 Full HD)
- **Framerate:** 30 fps
- **Total Duration:** 5,250 frames (175.08 seconds / 2 minutes 55 seconds)
- **Master Video File:** `out/documentary_master.mp4`
- **Camera Stability:** 100% Rock-Steady (No camera shake or transform jitter)

---

## 🎭 4-Act Investigative Narrative Architecture

Aligned strictly to the real story of Jensen Huang, Alice Huang, Megaspeed International, the Sunday memo *"A Message to Our Company"*, and the US-China semiconductor cold war:

| Act | Title | Audio Asset | Duration | Frames | Motion Aesthetics & Motifs |
|---|---|---|---|---|---|
| **Act 1** | *The Sunday Shock: The AI Titan & The Leaked Memo* | `assets/1china.wav` | 31.60s | 948f | Warm editorial paper (`#F6F2E9`), rock-steady archival background, Financial Times newspaper cutout with animated yellow highlighter, verified internal company memo card, and `ExplainerSourceCallout` pill. |
| **Act 2** | *The Monopoly Engine: 88% Share & The Chip Chokepoint* | `assets/2china.wav` | 42.76s | 1,283f | Obsidian tech grid (`#08080a`), H100 / Blackwell B200 silicon spec cards, `ExplainerTwoNumbers` motion design (88% Nvidia AI share vs. 12% rivals, 7.3x compute advantage), and Wall Street Journal cutout. |
| **Act 3** | *The Singapore Conduit: Alice Huang & Megaspeed* | `assets/3china.wav` | 56.88s | 1,706f | Archival dossier on Alice Huang (Huang Le) and Megaspeed Singapore cloud procurement, Guardian cutout, New York Times source pill, and `ExplainerStepper` (3-step chronology of escalation). |
| **Act 4** | *The Geopolitical Reckoning: National Security & AI Hegemony* | `assets/4china.wav` | 43.76s | 1,313f | Classified US government intelligence card with animated `RedactionBar`, `ExplainerRiskRadar` (CRITICAL threat level 94/100 dial), Wall Street Journal congressional oversight cutout, and final superpower takeaway lockup. |

---

## 🧩 Explainer Motion Design Components

Located in `src/components/explainers/`:

1. **`ExplainerTwoNumbers.tsx`** — Split-screen comparative metric cards with animated odometer tickers, percentage progress fills, and comparative multiplier badge (`7.3X COMPUTE SUPREMACY`).
2. **`ExplainerStepper.tsx`** — 3-step vertical/horizontal timeline progression showing chronological escalation (Sunday Memo → Singapore Conduit → Congressional Inquiries) with connecting fill line.
3. **`ExplainerSourceCallout.tsx`** — Floating frosted glass pill tag with verified badge (`[SOURCE: FINANCIAL TIMES]`, `[SOURCE: THE WALL STREET JOURNAL]`, `[SOURCE: THE NEW YORK TIMES]`).
4. **`ExplainerRiskRadar.tsx`** — National security threat gauge with rotating needle dial, colored status levels (DEFCON monitor), and alert metrics.
5. **`NewspaperCutout.tsx`** — Newspaper cutout component featuring polygonal deckle torn edges, frosted scotch tape tabs, animated yellow chisel highlighter sweep, and rotating ink stamp impact bounce.

---

## 📁 Project Directory Structure

```
remotion_documentary_video/
├── package.json               # Remotion 4.0.542, React 18, TypeScript 5
├── tsconfig.json              # ES2022 / React-JSX configuration
├── remotion.config.ts         # Remotion CLI configuration
├── render.sh                  # One-click render script for master and acts
├── public/
│   ├── assets/
│   │   ├── 1china.wav         # Act 1 audio narration (31.60s)
│   │   ├── 2china.wav         # Act 2 audio narration (42.76s)
│   │   ├── 3china.wav         # Act 3 audio narration (56.88s)
│   │   ├── 4china.wav         # Act 4 audio narration (43.76s)
│   │   ├── jensen.jpg         # Jensen Huang portrait
│   │   ├── alice_jensen_16x9.png
│   │   ├── alice_huang.png    # Alice Huang photo
│   │   ├── alice_huangg.png   # Alice Huang leadership photo
│   │   └── megaspeed.jpeg     # MegaSpeed hardware artifact
├── src/
│   ├── index.ts               # Remotion root entrypoint
│   ├── Root.tsx               # Composition registry (MainVideo + 4 Acts)
│   ├── MainVideo.tsx          # Master composition with <Series> & <Audio>
│   ├── constants.ts           # Timings, framerates, resolutions, and asset paths
│   ├── components/
│   │   ├── NewspaperCutout.tsx    # Torn newspaper cutout with yellow highlighter & tape
│   │   ├── PaperBackground.tsx    # Rock-steady archival parchment canvas
│   │   ├── DarkGridBackground.tsx # Obsidian Cartesian coordinate grid
│   │   ├── HighlighterMarker.tsx  # Chisel-nib yellow marker with wipe animation
│   │   ├── RedactionBar.tsx       # Animated classified blackout redaction block
│   │   ├── RubberStamp.tsx        # Crimson seal with spring impact bounce
│   │   ├── KenBurnsPhoto.tsx      # Parallax photo frame with matte/clean borders
│   │   ├── StockTelemetryHUD.tsx  # Self-drawing SVG line & green ticker pills
│   │   ├── VolumetricRays.tsx     # Rotating volumetric god rays
│   │   ├── GlowingMilestone.tsx   # Ultra-bold typography with multi-stage bloom
│   │   ├── CinematicOverlay.tsx   # Top progress indicator & framing rules
│   │   └── explainers/
│   │       ├── index.ts                   # Explainer components barrel export
│   │       ├── ExplainerTwoNumbers.tsx    # Two numbers compare component
│   │       ├── ExplainerStepper.tsx       # Chronological progression stepper
│   │       ├── ExplainerSourceCallout.tsx # Floating verified source pill
│   │       └── ExplainerRiskRadar.tsx     # National security threat assessment gauge
│   └── scenes/
│       ├── Act1Origin.tsx         # Act 1 scene component (948 frames)
│       ├── Act2GPURevolution.tsx  # Act 2 scene component (1283 frames)
│       ├── Act3Geopolitics.tsx    # Act 3 scene component (1706 frames)
│       └── Act4AIEpoch.tsx        # Act 4 scene component (1313 frames)
└── out/
    ├── documentary_master.mp4     # Full 5,250-frame documentary master
    ├── act1_origin.mp4            # Act 1 standalone MP4
    ├── act2_gpu_revolution.mp4    # Act 2 standalone MP4
    ├── act3_geopolitics.mp4       # Act 3 standalone MP4
    ├── act4_ai_epoch.mp4          # Act 4 standalone MP4
    ├── poster.jpg                 # 1080p video poster
    └── preview_*.png              # Still preview frames
```

---

## 🚀 Development & Rendering Commands

### Run Remotion Studio (Interactive UI Preview)
```bash
npm start
# or: npx remotion studio
```

### Render Master Video
```bash
npm run render
# or execute: ./render.sh
```

### Render Individual Acts
```bash
npx remotion render src/index.ts Act1-Origin out/act1_origin.mp4 --codec=h264
npx remotion render src/index.ts Act2-GPURevolution out/act2_gpu_revolution.mp4 --codec=h264
npx remotion render src/index.ts Act3-Geopolitics out/act3_geopolitics.mp4 --codec=h264
npx remotion render src/index.ts Act4-AIEpoch out/act4_ai_epoch.mp4 --codec=h264
```
