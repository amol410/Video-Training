# Video Training & Motion Design Deconstruction System — Stable Version 1.0.0

A comprehensive motion graphics engineering and programmatic video production repository. This repository contains deconstructed motion design templates from MotionVid (Explainers & Documentary categories), interactive standalone HTML simulators, and a production-grade **Remotion** documentary video engine featuring the full 7-act investigative feature synced to master audio narration stems.

---

## 📁 Repository Structure

```
├── remotion_documentary_video/       # Full Remotion React 18 programmatic video project
│   ├── src/
│   │   ├── scenes/                   # 7-Act Investigative Documentary Scenes
│   │   │   ├── Act1Origin.tsx        # Act 1: The Silicon Origin & Sunday Memo (31.60s / 948 frames)
│   │   │   ├── Act2GPURevolution.tsx # Act 2: GPU Computing Monopoly (42.76s / 1,283 frames)
│   │   │   ├── Act3Geopolitics.tsx   # Act 3: Alice Huang & Megaspeed Singapore (56.88s / 1,706 frames)
│   │   │   ├── Act4AIEpoch.tsx       # Act 4: National Security Threat Assessment (43.76s / 1,313 frames)
│   │   │   ├── Act5BoardInvestigation.tsx # Act 5: Board Investigation & Family Apology (28.00s / 840 frames)
│   │   │   ├── Act6MarketTremors.tsx # Act 6: Wall Street Tremors & Executive Scrutiny (29.04s / 871 frames)
│   │   │   └── Act7SuperpowerClash.tsx # Act 7: Tech Sovereignty in the Crosshairs (27.88s / 836 frames)
│   │   ├── components/               # Reusable Documentary & Motion Components
│   │   │   ├── PaperBackground.tsx   # Warm archival parchment background (rock-steady)
│   │   │   ├── NewspaperCutout.tsx   # Archival newspaper clippings (FT, WSJ, Guardian, WaPo)
│   │   │   ├── DocumentaryHighlightText.tsx # On-screen narrative with yellow chisel wipes
│   │   │   ├── KenBurnsPhoto.tsx     # Smooth camera push/pull framing
│   │   │   └── explainers/           # Re-skinned Explainer Motion Components
│   │   │       ├── ExplainerTwoNumbers.tsx   # Two Numbers Compared ($3.5T vs 100% Uncertainty)
│   │   │       ├── ExplainerStepper.tsx      # Chronology of Escalation Horizontal Stepper
│   │   │       ├── ExplainerRiskRadar.tsx    # DEFCON Kinetic Threat Radar & Threat Arc
│   │   │       └── ExplainerSourceCallout.tsx# Verified news source citation badges
│   │   ├── data/                     # Transcript alignment and timestamp metadata
│   │   ├── constants.ts              # Global timings (7,797 frames / 259.92s), asset paths, color tokens
│   │   ├── Root.tsx                  # Remotion Root composition definitions (MainVideo + Acts 1-7)
│   │   └── MainVideo.tsx             # Master 7-act sequential video composition with audio tracks
│   ├── public/                       # Audio narration stems (1china.wav - 7china.wav) & images
│   ├── package.json
│   └── tsconfig.json
│
├── explainers_motion_reference.html  # Standalone interactive simulator for 5 Explainer templates
├── documentary_motion_reference.html # Standalone interactive simulator for 6 Documentary templates
├── motion_design_system_master.html  # Motion design tokens, spring physics curves & specifications
├── create  video from this/          # Original media footage, audio narration stems (1china to 7china)
└── README.md
```

---

## 🎨 Motion Design Architecture

### 1. Unified Archival Warm Paper Theme
- **Background Tone**: `#F6F2E9` (warm vintage newsprint parchment) with a subtle grid (`#2C2218` at 6% opacity) and vignette.
- **Typography**: 
  - Primary Headlines: `Playfair Display`, `Georgia`, serif (editorial weight 900, `#0F172A`).
  - Narrative & Analysis: `Newsreader`, `Georgia`, serif (italicized, `#1E293B`).
  - Intelligence & Telemetry: `SF Mono`, `Fira Code`, monospace (uppercase letter-spacing `0.14em`).
- **Highlighter Mechanics**: Canary yellow (`#FFE600`) chisel-tip marker sweep with bezier easing (`cubic-bezier(0.16, 1, 0.3, 1)`), 3° skew, and multiply blend mode.
- **Camera Dynamics**: 100% rock-steady (all full-screen jitter transforms disabled).
- **Layout Constraints**: Zero top progress bars, zero top sticky headers, zero bottom floating subtitle pills. All text is typeset directly into the on-screen documentary spreads.

### 2. The 7 Documentary Acts & Sync Structure

| Act | Title | Narrative Focus | Audio Stem | Duration |
| :--- | :--- | :--- | :--- | :--- |
| **Act 1** | The Silicon Origin & Sunday Memo | Denny's diner founding & CUDA architecture breakthrough | `1china.wav` | 31.60s (948 frames) |
| **Act 2** | GPU Computing Monopoly | 88% market dominance vs 12% all others, TSMC foundry ties | `2china.wav` | 42.76s (1,283 frames) |
| **Act 3** | Alice Huang & Megaspeed Singapore | Mysterious Singapore holding entity & shell company transit | `3china.wav` | 56.88s (1,706 frames) |
| **Act 4** | National Security Threat Assessment | Classified foundry telemetry & export control scrutiny | `4china.wav` | 43.76s (1,313 frames) |
| **Act 5** | Board Investigation & Family Apology | Independent directors' inquiry & Huang's personal plea | `5china.wav` | 28.00s (840 frames) |
| **Act 6** | Wall Street Tremors & Executive Scrutiny | $3.5T market cap vs 100% uncertainty, stock jitters | `6china.wav` | 29.04s (871 frames) |
| **Act 7** | Tech Sovereignty in the Crosshairs | Silicon Valley tech titans in the superpower geopolitical storm | `7china.wav` | 27.88s (836 frames) |
| **Total** | **Full Feature Feature Length** | **Complete 7-Act Documentary** | **Stems 1–7** | **259.92s (7,797 frames)** |

---

## 🚀 Getting Started with Remotion

### Prerequisites
- Node.js 18+ or 20+
- FFmpeg installed (`brew install ffmpeg`)

### Installation
```bash
cd remotion_documentary_video
npm install
```

### Preview in Studio
To launch the interactive Remotion Studio web preview:
```bash
npm start
```
Open `http://localhost:3000` to preview any scene or component in real time.

### Rendering Video

#### Render Master 7-Act Documentary Feature (259.92s / 4m 19.92s):
```bash
npx remotion render src/index.ts MainVideo /Users/cms/Movies/references/documentary_master.mp4 --codec=h264
```

#### Render Standalone Scene Previews:
```bash
npx remotion render src/index.ts Act1-Origin /Users/cms/Movies/references/documentary_preview_act1.mp4
npx remotion render src/index.ts Act5-BoardInvestigation /Users/cms/Movies/references/documentary_preview_act5.mp4
npx remotion render src/index.ts Act6-MarketTremors /Users/cms/Movies/references/documentary_preview_act6.mp4
npx remotion render src/index.ts Act7-SuperpowerClash /Users/cms/Movies/references/documentary_preview_act7.mp4
```

---

## 🏷️ Version History
- **v1.0.0 (Stable Version 1)**:
  - Complete 7-act documentary engine with high-fidelity paper styling.
  - Eliminated bottom subtitle bars and top sticky headers.
  - Canary yellow chisel-tip marker sweeps replacing black redaction boxes.
  - Fully synced to Hindi investigative audio narration stems `1china.wav` through `7china.wav`.
  - Pushed to `origin/main` and tagged `v1.0.0`.


## 📄 License
Private & Confidential — Created for Video Training & Production.
