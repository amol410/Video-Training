# Video Training & Motion Design Deconstruction System

A comprehensive motion graphics engineering and programmatic video production repository. This repository contains deconstructed motion design templates from MotionVid (Explainers & Documentary categories), interactive standalone HTML simulators, and a production-grade **Remotion** documentary video engine.

---

## 📁 Repository Structure

```
├── remotion_documentary_video/       # Full Remotion React 18 programmatic video project
│   ├── src/
│   │   ├── scenes/                   # 4-Act Investigative Documentary Scenes
│   │   │   ├── Act1Origin.tsx        # Act 1: The Silicon Origin & Sunday Memo (31.6s)
│   │   │   ├── Act2GPURevolution.tsx # Act 2: GPU Computing Monopoly (42.76s)
│   │   │   ├── Act3Geopolitics.tsx   # Act 3: Alice Huang & Megaspeed Singapore (56.88s)
│   │   │   └── Act4AIEpoch.tsx       # Act 4: National Security Threat Assessment (43.76s)
│   │   ├── components/               # Reusable Documentary & Motion Components
│   │   │   ├── PaperBackground.tsx   # Warm archival parchment background (rock-steady)
│   │   │   ├── NewspaperCutout.tsx   # Archival newspaper clippings (FT, WSJ, Guardian)
│   │   │   ├── DocumentaryHighlightText.tsx # On-screen narrative with yellow chisel wipes
│   │   │   ├── KenBurnsPhoto.tsx     # Smooth camera push/pull framing
│   │   │   └── explainers/           # 4 Re-skinned Explainer Motion Components
│   │   │       ├── ExplainerTwoNumbers.tsx   # Two Numbers Compared (88% vs 12%)
│   │   │       ├── ExplainerStepper.tsx      # Chronology of Escalation Horizontal Stepper
│   │   │       ├── ExplainerRiskRadar.tsx    # DEFCON Kinetic Threat Radar & Threat Arc
│   │   │       └── ExplainerSourceCallout.tsx# Verified news source citation badges
│   │   ├── data/                     # Transcript alignment and timestamp metadata
│   │   ├── constants.ts              # Global timings, asset paths, color tokens
│   │   ├── Root.tsx                  # Remotion Root composition definitions
│   │   └── MainVideo.tsx             # Master 175-second multi-act sequence
│   ├── public/                       # Audio narration stems (1china.wav - 4china.wav) & images
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

### 2. Deconstructed Motion Templates
- **Explainer Category**:
  1. *Two Numbers Compared* — Asymmetric market share comparison with animated counters and delta sparkline.
  2. *Horizontal Stepper* — Linear chronological milestone sequence with connecting bezier lines.
  3. *Kinetic Threat Radar* — Multi-stop SVG arc gauge dial with DEFCON vulnerability metrics.
  4. *Verified Source Callout* — Citation badge with verified checkmark and publication branding.
- **Documentary Category**:
  1. *Archival Newspaper Cutout* — Realistic paper texture, corner tape, rubber stamps, and headline highlights.
  2. *Classified Intelligence Dossier* — Case identification, top-secret classification stamps, and highlighted evidence.
  3. *Ken Burns Archival Photo Spread* — High-resolution historical portrait with archival frame and source tags.

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

#### Render Standalone Act 1 Preview (31.6s):
```bash
npx remotion render src/index.ts Act1-Origin out/documentary_preview_act1.mp4 --codec=h264
```

#### Render Full 175-Second Master Documentary Feature:
```bash
npx remotion render src/index.ts MainVideo out/documentary_master.mp4 --codec=h264
```

---

## 📄 License
Private & Confidential — Created for Video Training & Production.
