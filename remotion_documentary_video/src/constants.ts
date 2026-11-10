export const FPS = 30;
export const WIDTH = 1920;
export const HEIGHT = 1080;

export interface ActConfig {
  id: string;
  actNumber: number;
  title: string;
  subtitle: string;
  audioSrc: string;
  durationInSeconds: number;
  durationInFrames: number;
}

export const ACT_TIMINGS: ActConfig[] = [
  {
    id: 'act1-origin',
    actNumber: 1,
    title: 'THE SUNDAY SHOCK',
    subtitle: "A Message to Our Company & The AI Titan's Crisis",
    audioSrc: 'assets/1china.wav',
    durationInSeconds: 31.60,
    durationInFrames: 948,
  },
  {
    id: 'act2-gpu-revolution',
    actNumber: 2,
    title: 'THE MONOPOLY ENGINE',
    subtitle: 'NVIDIA 88% Global Dominance & The Silicon Chokepoint',
    audioSrc: 'assets/2china.wav',
    durationInSeconds: 42.76,
    durationInFrames: 1283,
  },
  {
    id: 'act3-geopolitics',
    actNumber: 3,
    title: 'THE SINGAPORE PIPELINE',
    subtitle: 'Alice Huang, Megaspeed & The Classified Dossier',
    audioSrc: 'assets/3china.wav',
    durationInSeconds: 56.88,
    durationInFrames: 1706,
  },
  {
    id: 'act4-ai-epoch',
    actNumber: 4,
    title: 'THE GEOPOLITICAL RECKONING',
    subtitle: 'Congressional Inquiries & The US-China Chip War',
    audioSrc: 'assets/4china.wav',
    durationInSeconds: 43.76,
    durationInFrames: 1313,
  },
];

export const TOTAL_DURATION_FRAMES = ACT_TIMINGS.reduce(
  (sum, act) => sum + act.durationInFrames,
  0
); // Exactly 5250 frames

export const ASSETS = {
  jensen: 'assets/jensen.jpg',
  aliceJensen: 'assets/alice_jensen_16x9.png',
  aliceHuang: 'assets/alice_huang.png',
  aliceHuangg: 'assets/alice_huangg.png',
  megaspeed: 'assets/megaspeed.jpeg',
  // Authentic Newspaper & Internal Memo Cutouts
  newspaperFT: 'assets/newspaper_ft_alice_huang.svg',
  newspaperWSJ: 'assets/newspaper_wsj_chinese_exec.svg',
  newspaperGuardian: 'assets/newspaper_guardian_lawsuit.svg',
  newspaperBloomberg: 'assets/newspaper_bloomberg_megaspeed.svg',
  nvidiaMemo: 'assets/nvidia_memo_jensen_apology.svg',
} as const;
