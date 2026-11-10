/**
 * Verified News Research Data: Jensen Huang / Alice Huang / Megaspeed / Nvidia Memo Story
 * 
 * Sources compiled from:
 * - Financial Times (FT)
 * - The Guardian
 * - Bloomberg News
 * - Reuters
 * - The Wall Street Journal (WSJ)
 * - The New York Times (NYT)
 * - Official Internal Nvidia Corporate Memo ("A Message to Our Company")
 */

export interface NewsArticle {
  publication: string;
  headline: string;
  subheadline?: string;
  byline?: string;
  date: string;
  quote: string;
  sourceUrlSnippet?: string;
  tags: string[];
}

export interface InternalMemo {
  title: string;
  sender: string;
  senderTitle: string;
  recipient: string;
  date: string;
  subject: string;
  fullText: string;
  keyExcerpts: string[];
}

export const VERIFIED_NEWS_ARTICLES: Record<string, NewsArticle> = {
  wsj_investigation: {
    publication: 'THE WALL STREET JOURNAL',
    headline: 'Chinese Executive Close to Nvidia CEO Suspected of Giving China Information',
    subheadline: 'Classified U.S. memo scrutinizes ties between Jensen Huang and Singapore cloud executive Alice Huang amid AI export crackdowns',
    byline: 'By Amrith Ramkumar, Lingling Wei, and Robbie Whelan',
    date: 'November 8, 2026',
    quote: 'A classified U.S. intelligence memorandum concluded that Alice Huang, who developed a romantic relationship with Nvidia CEO Jensen Huang, was suspected of acting as an asset for Beijing’s Ministry of State Security while Megaspeed acquired billions in restricted AI hardware.',
    tags: ['WSJ', 'Intelligence', 'Megaspeed', 'Jensen Huang', 'Alice Huang', 'MSS'],
  },
  ft_connections: {
    publication: 'THE FINANCIAL TIMES',
    headline: 'Alice Huang’s Tangled Web of Connections',
    subheadline: 'From Beijing state media to Singapore AI clouds: How an executive gained access to the pinnacle of Silicon Valley',
    byline: 'By Zijing Wu and Eleanor Olcott',
    date: 'November 9, 2026',
    quote: 'U.S. intelligence officials concluded she was targeted and utilized as an intelligence asset by China’s Ministry of State Security... Alice Huang pitched multimillion-dollar Southeast Asian AI data-centre projects to investors, boasting about unhindered access to advanced Nvidia GPUs and citing Alibaba as a prospective client.',
    tags: ['Financial Times', 'Special Report', 'Megaspeed', 'China MSS', 'AI Datacenters'],
  },
  ft_wachtell_probe: {
    publication: 'THE FINANCIAL TIMES',
    headline: 'Nvidia Hires Former US Prosecutor at Wachtell to Lead Jensen Huang Probe',
    subheadline: 'Board establishes special independent committee to audit corporate communications and semiconductor distribution',
    byline: 'By Richard Waters and Stephen Morris',
    date: 'November 9, 2026',
    quote: 'Nvidia’s board of directors, led by lead independent director Stephen Neal, appointed former federal prosecutor Joon H. Kim of Wachtell, Lipton, Rosen & Katz to lead an independent investigation into whether any proprietary roadmaps or national security secrets were compromised.',
    tags: ['Financial Times', 'Corporate Governance', 'Wachtell', 'Board Probe'],
  },
  guardian_lawsuit: {
    publication: 'THE GUARDIAN',
    headline: 'Nvidia and Jensen Huang Sued in US Over Affair With Alleged Chinese Spy',
    subheadline: 'Shareholder class action claims board failed to mitigate geopolitical and espionage risks surrounding CEO',
    byline: 'By Dan Milmo',
    date: 'November 10, 2026',
    quote: 'Nvidia and its chief executive Jensen Huang have been targeted in a shareholder lawsuit following revelations of his relationship with a woman suspected of being a Chinese intelligence operative... Huang released a statement admitting to an extramarital affair, writing there was "no excuse" for his actions.',
    tags: ['The Guardian', 'Shareholder Lawsuit', 'US Security', 'Corporate Fallout'],
  },
  guardian_us_china: {
    publication: 'THE GUARDIAN',
    headline: 'The AI Poster Boy, the "Chinese Spy" and Washington: How an Affair Roiled US Security',
    subheadline: 'Why the personal crisis of tech’s most celebrated executive became a flashpoint in the superpower semiconductor rivalry',
    byline: 'By Alex Hern',
    date: 'November 9, 2026',
    quote: 'Megaspeed, a Singapore cloud provider and top customer of Nvidia’s advanced Hopper and Blackwell GPUs, faces scrutiny over whether Southeast Asian data hubs were used to circumvent export controls and funnel critical AI computing power to Beijing.',
    tags: ['The Guardian', 'Geopolitics', 'Superpower AI Race', 'Export Controls'],
  },
  reuters_probe: {
    publication: 'REUTERS',
    headline: 'Nvidia CEO Faces Board Probe Over Ties to Chinese Businesswoman Suspected of Passing Information to Beijing',
    subheadline: 'Exclusive: Independent counsel examines whether foreign intelligence targeted CEO at tech conferences across Asia',
    byline: 'By Krystal Hu and Max A. Cherney',
    date: 'November 9, 2026',
    quote: 'Nvidia’s board of directors launched an independent inquiry into whether Chief Executive Jensen Huang was the target of a foreign intelligence operation following an extramarital relationship with Alice Huang, a former executive at Singapore cloud firm Megaspeed International.',
    tags: ['Reuters', 'Wire Dispatch', 'Exclusive', 'Board Inquiry'],
  },
  reuters_computex: {
    publication: 'REUTERS',
    headline: 'The Phantom Life of Alice Huang, Alleged Chinese Spy Who Had an Affair With Nvidia CEO',
    subheadline: 'Traced through Computex Taipei banquets, offshore holding companies, and GPU allocation agreements',
    byline: 'By Julie Zhu and Fanny Potkin',
    date: 'November 10, 2026',
    quote: 'Photographs and corporate records confirmed Alice Huang accompanied Jensen Huang at Computex Taipei and high-level semiconductor banquets while controlling Singapore cloud outfit Megaspeed, presenting herself as a key gateway for Nvidia hardware in Southeast Asia.',
    tags: ['Reuters', 'Deep Dive', 'Computex', 'Singapore Cloud'],
  },
  bloomberg_counsel: {
    publication: 'BLOOMBERG NEWS',
    headline: 'Nvidia Counsel Contacted Commerce Officials Over Singapore Detention of Megaspeed Exec',
    subheadline: 'Trade records reveal billions in high-end AI GPU shipments channeled through regional data center partners',
    byline: 'By Ian King and Mackenzie Hawkins',
    date: 'November 9, 2026',
    quote: 'Trade and customs records indicated that Nvidia figures undercounted advanced AI chips sold through hardware partners to Singapore-based Megaspeed by billions of dollars, intensifying federal inquiries into regional transshipment corridors.',
    tags: ['Bloomberg', 'Trade Analysis', 'Commerce Department', 'BIS'],
  },
  nyt_memo_scoop: {
    publication: 'THE NEW YORK TIMES',
    headline: 'Classified U.S. Memo Concludes Woman Close to Nvidia CEO Was Chinese Intelligence Asset',
    subheadline: 'Administration officials review potential exposure of sensitive semiconductor roadmaps to Ministry of State Security',
    byline: 'By David E. Sanger, Julian E. Barnes, and Edward Wong',
    date: 'November 8, 2026',
    quote: 'A classified U.S. intelligence memorandum overseen by top national security officials concluded that electronic surveillance captured communications involving Alice Huang, who cultivated a relationship with Nvidia CEO Jensen Huang on behalf of Chinese intelligence.',
    tags: ['The New York Times', 'National Security', 'Intelligence Scoop', 'Classified Memo'],
  },
};

export const JENSEN_HUANG_INTERNAL_MEMO: InternalMemo = {
  title: 'A Message to Our Company',
  sender: 'Jensen Huang',
  senderTitle: 'Founder and Chief Executive Officer',
  recipient: 'All NVIDIA Employees, Board of Directors & Partners Worldwide',
  date: 'Sunday, November 8, 2026',
  subject: 'Personal Statement and Commitment to NVIDIA and America',
  fullText: `To my colleagues at NVIDIA,

I owe my family and all of you an apology. I was unfaithful to my wife. My actions hurt her and our children. There is no excuse for what I did. I am deeply sorry.

Throughout my life, my family has given me love and support. They deserve my honesty and loyalty. Instead, I let them down and damaged the life we built together. I take full responsibility for what I did and the hurt I caused, and I accept the criticism that comes with it.

To my wife and family: I love you. I know an apology cannot undo what I have done. I hope our family will heal and that, over time, I can earn back your trust.

To my colleagues at NVIDIA, including those I have worked alongside for decades, and to our board, partners, and shareholders around the world: you deserve better from me.

Leading NVIDIA is the privilege of my life. My responsibility is to serve you and be worthy of your trust. I have fallen short of that responsibility. I am fully committed to NVIDIA and will work to earn back your confidence.

Regarding the national security concerns raised in news reports, NVIDIA's Board of Directors has initiated an independent investigation. I support the investigation and will cooperate fully. I love our country and our company. I am committed to protecting NVIDIA and supporting America's national security.

Sincerely,
Jensen Huang
Founder & CEO, NVIDIA`,
  keyExcerpts: [
    'I owe my family and all of you an apology. I was unfaithful to my wife.',
    'There is no excuse for what I did. I am deeply sorry.',
    'I take full responsibility for what I did and the hurt I caused.',
    'NVIDIA\'s Board of Directors has initiated an independent investigation. I support the investigation and will cooperate fully.',
    'I love our country and our company. I am committed to protecting NVIDIA and supporting America\'s national security.',
  ],
};

export interface NewspaperPreset {
  id: string;
  publication: string;
  mastheadFont: string;
  mastheadColor: string;
  accentColor: string;
  paperBgColor: string;
  borderColor: string;
  headline: string;
  subheadline: string;
  byline: string;
  date: string;
  snippet: string;
  highlightText: string;
  stampText: string;
  stampColor: string;
  rotation: number;
}

export const NEWSPAPER_PRESETS: Record<string, NewspaperPreset> = {
  financialTimes: {
    id: 'ft',
    publication: 'FINANCIAL TIMES',
    mastheadFont: "'Times New Roman', serif",
    mastheadColor: '#1A1814',
    accentColor: '#394045',
    paperBgColor: '#FDF1E7', // Distinct FT salmon pink
    borderColor: 'rgba(57, 64, 69, 0.3)',
    headline: 'ALICE HUANG’S TANGLED WEB OF CONNECTIONS',
    subheadline: 'How Singapore Cloud Firm Megaspeed Gained Unrivaled Access to Restricted Nvidia AI Hardware',
    byline: 'By Zijing Wu and Eleanor Olcott',
    date: 'MONDAY NOVEMBER 9 2026',
    snippet: 'US intelligence officials concluded that Alice Huang was targeted and recruited by China’s Ministry of State Security. Documents show she pitched multimillion-dollar AI infrastructure projects citing guaranteed allocations of restricted Nvidia chips.',
    highlightText: 'recruited by China’s Ministry of State Security',
    stampText: 'EXHIBIT FT-INTEL',
    stampColor: '#DC2626',
    rotation: -1.8,
  },
  wallStreetJournal: {
    id: 'wsj',
    publication: 'THE WALL STREET JOURNAL.',
    mastheadFont: "'Newsreader', 'Georgia', serif",
    mastheadColor: '#111827',
    accentColor: '#0F172A',
    paperBgColor: '#FAF7EE', // Crisp classic cream newsprint
    borderColor: 'rgba(0, 0, 0, 0.4)',
    headline: 'CHINESE EXECUTIVE CLOSE TO NVIDIA CEO SUSPECTED OF PASSING SECRETS',
    subheadline: 'Classified Memorandum Details Espionage Infiltration Aimed at America’s Sovereign AI Infrastructure',
    byline: 'By Amrith Ramkumar, Lingling Wei, and Robbie Whelan',
    date: 'SUNDAY NOVEMBER 8 2026',
    snippet: 'WASHINGTON — A classified U.S. intelligence memo concluded that Alice Huang, who cultivated an intimate relationship with Nvidia chief Jensen Huang, operated as an intelligence asset for Beijing’s MSS while Megaspeed routed billions in AI servers.',
    highlightText: 'intimate relationship with Nvidia chief Jensen Huang',
    stampText: 'RESTRICTED // BIS 2026',
    stampColor: '#991B1B',
    rotation: 1.5,
  },
  theGuardian: {
    id: 'guardian',
    publication: 'THE GUARDIAN',
    mastheadFont: "'Inter', sans-serif",
    mastheadColor: '#052962', // Guardian midnight blue
    accentColor: '#052962',
    paperBgColor: '#F4F5F7', // Clean editorial gray-white
    borderColor: 'rgba(5, 41, 98, 0.25)',
    headline: 'NVIDIA AND JENSEN HUANG SUED IN US OVER SCANDAL WITH ALLEGED CHINESE SPY',
    subheadline: 'Shareholder Lawsuit Demands Independent Board Oversight Over Sensitive AI Architecture',
    byline: 'By Dan Milmo and Alex Hern',
    date: 'TUESDAY NOVEMBER 10 2026',
    snippet: 'SAN FRANCISCO — The world’s dominant AI chipmaker faces escalating legal and national security crises after CEO Jensen Huang admitted to marital infidelity following intelligence revelations linking an Asia partner to Chinese state security.',
    highlightText: 'admitted there was "no excuse" for his actions',
    stampText: 'LEGAL DOCKET 26-CV-8841',
    stampColor: '#B91C1C',
    rotation: -2.2,
  },
  reutersWire: {
    id: 'reuters',
    publication: 'REUTERS DISPATCH',
    mastheadFont: "'JetBrains Mono', monospace",
    mastheadColor: '#FF8000', // Reuters orange / charcoal
    accentColor: '#1E293B',
    paperBgColor: '#F8FAFC',
    borderColor: 'rgba(30, 41, 59, 0.35)',
    headline: 'EXCLUSIVE: NVIDIA BOARD LAUNCHES PROBE INTO CEO FOREIGN INTELLIGENCE RISK',
    subheadline: 'Independent Counsel Wachtell Appointed to Review Asia-Pacific GPU Allocations and Client Access',
    byline: 'By Krystal Hu and Max A. Cherney',
    date: 'NOVEMBER 9, 2026 / 14:42 EST',
    snippet: 'NEW YORK (Reuters) — Nvidia’s board has initiated a comprehensive independent inquiry led by former federal prosecutor Joon H. Kim following reports of romantic ties between CEO Jensen Huang and a Singapore datacenter executive suspected of Chinese state ties.',
    highlightText: 'independent inquiry led by former federal prosecutor',
    stampText: 'REUTERS VERIFIED WIRE',
    stampColor: '#C2410C',
    rotation: 0.8,
  },
  bloombergNews: {
    id: 'bloomberg',
    publication: 'BLOOMBERG TERMINAL NEWS',
    mastheadFont: "'Inter', monospace",
    mastheadColor: '#1D4ED8',
    accentColor: '#0F172A',
    paperBgColor: '#F1F5F9',
    borderColor: 'rgba(15, 23, 42, 0.3)',
    headline: 'TRADE RECORDS SHOW MEGASPEED RECEIVED BILLIONS IN UNDISCLOSED GPU CLUSTERS',
    subheadline: 'Scrutiny Mounts Over Southeast Asian Cloud Hubs Used for Export Evasion Pathways',
    byline: 'By Ian King and Mackenzie Hawkins',
    date: 'NOVEMBER 9, 2026',
    snippet: 'Customs manifests reviewed by Bloomberg show Megaspeed received tens of thousands of high-performance Nvidia GPUs through intermediary server manufacturers, vastly exceeding previously declared Singapore data center quotas.',
    highlightText: 'vastly exceeding previously declared Singapore data center quotas',
    stampText: 'TERMINAL RECORD AUDIT',
    stampColor: '#1E3A8A',
    rotation: -1.2,
  },
  nvidiaInternalMemo: {
    id: 'memo',
    publication: 'NVIDIA EXECUTIVE MEMORANDUM',
    mastheadFont: "'Inter', sans-serif",
    mastheadColor: '#76B900', // NVIDIA signature green
    accentColor: '#18181B',
    paperBgColor: '#FAFAF9',
    borderColor: 'rgba(118, 185, 0, 0.4)',
    headline: 'A MESSAGE TO OUR COMPANY — FROM JENSEN HUANG',
    subheadline: 'Official Internal Communication to All Global Employees, Board of Directors and Shareholders',
    byline: 'By Jensen Huang, Founder and CEO',
    date: 'SUNDAY NOVEMBER 8 2026',
    snippet: '“To my colleagues at NVIDIA, I owe my family and all of you an apology. I was unfaithful to my wife. There is no excuse for what I did. I am deeply sorry... Regarding national security concerns, NVIDIA’s Board has initiated an independent investigation. I support it and will cooperate fully.”',
    highlightText: 'I owe my family and all of you an apology. I was unfaithful to my wife.',
    stampText: 'OFFICIAL CONFIDENTIAL ARCHIVE',
    stampColor: '#15803D',
    rotation: 0.5,
  },
};
