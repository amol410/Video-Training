const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'public/assets');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 1. Financial Times: Alice Huang's Tangled Web of Connections
const ftSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <filter id="shadow" x="-10%" y="-10%" width="125%" height="125%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="rgba(0,0,0,0.35)" />
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="rgba(0,0,0,0.2)" />
    </filter>
    <linearGradient id="ftPaper" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF2E8" />
      <stop offset="50%" stop-color="#FDE8D7" />
      <stop offset="100%" stop-color="#F9DFC7" />
    </linearGradient>
    <linearGradient id="tapeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="rgba(255,255,230,0.6)" />
      <stop offset="100%" stop-color="rgba(240,240,210,0.4)" />
    </linearGradient>
  </defs>

  <!-- Scotch Tape Top Left -->
  <rect x="60" y="8" width="90" height="32" rx="2" fill="url(#tapeGrad)" transform="rotate(-6, 105, 24)" />
  <!-- Scotch Tape Top Right -->
  <rect x="650" y="12" width="90" height="32" rx="2" fill="url(#tapeGrad)" transform="rotate(8, 695, 28)" />

  <!-- Main Torn Newspaper Body -->
  <g filter="url(#shadow)">
    <path d="M 40,35 
             Q 200,32 400,36 Q 600,33 760,35
             Q 763,180 758,320 Q 762,460 759,565
             Q 580,562 380,567 Q 190,563 41,565
             Q 38,410 42,270 Q 37,140 40,35 Z" 
          fill="url(#ftPaper)" stroke="rgba(60,40,20,0.2)" stroke-width="1.5" />
    
    <!-- Paper Fiber / Aged Stain Accents -->
    <circle cx="120" cy="80" r="140" fill="rgba(210,160,110,0.06)" />
    <circle cx="680" cy="480" r="160" fill="rgba(200,150,90,0.05)" />

    <!-- Content Inset -->
    <g transform="translate(75, 55)">
      <!-- Top Dateline / Edition Header -->
      <line x1="0" y1="28" x2="650" y2="28" stroke="#2B2826" stroke-width="2.5" />
      <text x="325" y="20" font-family="'Times New Roman', Georgia, serif" font-size="28" font-weight="900" letter-spacing="0.18em" fill="#1C1815" text-anchor="middle">FINANCIAL TIMES</text>
      
      <g font-family="'Courier New', monospace" font-size="9" font-weight="bold" fill="#524840">
        <text x="0" y="40">No. 50,422</text>
        <text x="325" y="40" text-anchor="middle">MONDAY NOVEMBER 9 2026</text>
        <text x="650" y="40" text-anchor="end">ASIA-PACIFIC EDITION ★★★</text>
      </g>
      <line x1="0" y1="46" x2="650" y2="46" stroke="#2B2826" stroke-width="1" />

      <!-- Kicker -->
      <rect x="0" y="58" width="165" height="18" fill="#1C1815" rx="2" />
      <text x="82" y="71" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" font-weight="800" letter-spacing="0.14em" fill="#FFF2E8" text-anchor="middle">SPECIAL INVESTIGATION</text>

      <!-- Headline -->
      <text x="0" y="112" font-family="'Times New Roman', Georgia, serif" font-size="30" font-weight="900" fill="#110E0C" letter-spacing="-0.01em">
        Alice Huang’s tangled web of connections
      </text>

      <!-- Subdeck -->
      <text x="0" y="138" font-family="Georgia, serif" font-size="14" font-weight="600" font-style="italic" fill="#3D352E">
        How Singapore cloud firm Megaspeed gained access to restricted Nvidia AI hardware
      </text>
      <text x="0" y="158" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" font-weight="700" fill="#66594F">
        By Zijing Wu in Hong Kong and Eleanor Olcott in Singapore
      </text>

      <line x1="0" y1="168" x2="650" y2="168" stroke="rgba(43,40,38,0.3)" stroke-width="1" />

      <!-- Dual Column Article Body -->
      <g transform="translate(0, 182)" font-family="Georgia, serif" font-size="11.5" line-height="1.45" fill="#241E1A">
        <!-- Column 1 -->
        <text x="0" y="14">SINGAPORE — United States intelligence officials have concluded</text>
        <text x="0" y="32">that Alice Huang, a senior executive at cloud-computing company</text>
        <text x="0" y="50">Megaspeed International, was targeted and utilized as an intelligence</text>
        
        <!-- Yellow Marker Highlight on critical phrase -->
        <rect x="0" y="56" width="310" height="18" fill="rgba(255, 230, 0, 0.65)" rx="2" />
        <text x="0" y="68" font-weight="bold" fill="#000">asset by China’s Ministry of State Security (MSS),</text>
        
        <text x="0" y="86">raising profound corporate governance and national security alarms</text>
        <text x="0" y="104">across Washington and allied semiconductor capitals.</text>
        <text x="0" y="128">Corporate records reveal Alice Huang pitched multimillion-dollar</text>
        <text x="0" y="146">data-center clusters to regional financiers, repeatedly boasting</text>
        <text x="0" y="164">unhindered priority allocations of Nvidia Blackwell and Hopper GPUs.</text>

        <!-- Column 2 -->
        <g transform="translate(335, 0)">
          <text x="0" y="14">The findings follow an extraordinary internal memo released</text>
          <text x="0" y="32">by Nvidia chief executive Jensen Huang, who admitted to an</text>
          <text x="0" y="50">extramarital relationship with Ms. Huang while insisting no</text>
          <text x="0" y="68">proprietary product roadmaps or secrets were compromised.</text>
          
          <text x="0" y="98">Nvidia’s board of directors, guided by lead director Stephen</text>
          <text x="0" y="116">Neal, has appointed former federal prosecutor Joon H. Kim of</text>
          <text x="0" y="134">Wachtell, Lipton, Rosen &amp; Katz to lead an independent audit into</text>
          <text x="0" y="152">global distribution pathways and regulatory compliance.</text>
        </g>
      </g>

      <!-- Archival Rubber Stamp -->
      <g transform="translate(470, 395) rotate(-11)">
        <rect x="0" y="0" width="165" height="42" rx="4" fill="rgba(254,226,226,0.6)" stroke="#DC2626" stroke-width="3" stroke-dasharray="8,2" />
        <text x="82" y="25" font-family="'Courier New', monospace" font-size="13" font-weight="900" fill="#DC2626" letter-spacing="0.12em" text-anchor="middle">EXHIBIT FT-INTEL</text>
      </g>
    </g>
  </g>
</svg>`;

// 2. The Wall Street Journal: Chinese Executive Close to Nvidia CEO
const wsjSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <filter id="wsjShadow" x="-10%" y="-10%" width="125%" height="125%">
      <feDropShadow dx="0" dy="14" stdDeviation="18" flood-color="rgba(0,0,0,0.4)" />
    </filter>
    <linearGradient id="wsjPaper" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCFAF2" />
      <stop offset="50%" stop-color="#FAF6EA" />
      <stop offset="100%" stop-color="#F4EEE0" />
    </linearGradient>
  </defs>

  <!-- Scotch Tape -->
  <rect x="90" y="10" width="85" height="30" rx="2" fill="rgba(255,255,225,0.65)" transform="rotate(-5, 132, 25)" />
  <rect x="630" y="12" width="85" height="30" rx="2" fill="rgba(255,255,225,0.65)" transform="rotate(6, 672, 27)" />

  <g filter="url(#wsjShadow)">
    <path d="M 45,35 
             Q 220,33 420,36 Q 620,32 755,35
             Q 759,180 754,330 Q 758,470 755,565
             Q 570,563 380,567 Q 190,564 45,565
             Q 41,410 46,270 Q 40,140 45,35 Z" 
          fill="url(#wsjPaper)" stroke="rgba(30,30,30,0.25)" stroke-width="1.5" />

    <g transform="translate(80, 55)">
      <!-- WSJ Classic Masthead -->
      <text x="320" y="24" font-family="'Times New Roman', Georgia, serif" font-size="31" font-weight="900" letter-spacing="0.08em" fill="#111" text-anchor="middle">THE WALL STREET JOURNAL.</text>
      <line x1="0" y1="32" x2="640" y2="32" stroke="#111" stroke-width="3" />
      
      <g font-family="'Times New Roman', serif" font-size="9.5" fill="#333">
        <text x="0" y="44">© 2026 Dow Jones &amp; Company. All Rights Reserved.</text>
        <text x="320" y="44" text-anchor="middle">SUNDAY, NOVEMBER 8, 2026</text>
        <text x="640" y="44" text-anchor="end">VOL. CCXCII NO. 110 ★★★★ $5.00</text>
      </g>
      <line x1="0" y1="50" x2="640" y2="50" stroke="#111" stroke-width="1" />

      <!-- 3-Line WSJ Headline -->
      <g transform="translate(0, 85)">
        <text x="0" y="0" font-family="'Times New Roman', Georgia, serif" font-size="27" font-weight="900" fill="#0A0A0A" letter-spacing="-0.02em">
          Chinese Executive Close to Nvidia CEO
        </text>
        <text x="0" y="32" font-family="'Times New Roman', Georgia, serif" font-size="27" font-weight="900" fill="#0A0A0A" letter-spacing="-0.02em">
          Suspected of Giving China Information
        </text>
        
        <text x="0" y="60" font-family="Georgia, serif" font-size="13" font-style="italic" fill="#2E2E2E">
          Classified U.S. memorandum examines ties between Jensen Huang and Megaspeed executive
        </text>
        <text x="0" y="80" font-family="'Helvetica Neue', sans-serif" font-size="11" font-weight="bold" fill="#555">
          By Amrith Ramkumar, Lingling Wei and Robbie Whelan
        </text>
      </g>

      <line x1="0" y1="180" x2="640" y2="180" stroke="#888" stroke-width="0.8" />

      <!-- Columns -->
      <g transform="translate(0, 196)" font-family="Georgia, serif" font-size="11.5" line-height="1.45" fill="#1F1F1F">
        <text x="0" y="14">WASHINGTON — A classified U.S. intelligence</text>
        <text x="0" y="32">memorandum has concluded that Alice Huang, who</text>
        <text x="0" y="50">developed an intimate relationship with Nvidia chief</text>
        
        <!-- Highlight -->
        <rect x="0" y="56" width="305" height="18" fill="rgba(254, 240, 138, 0.75)" rx="2" />
        <text x="0" y="68" font-weight="bold" fill="#000">Jensen Huang, was acting as an asset for Beijing’s</text>
        
        <text x="0" y="86">Ministry of State Security while Singapore-based cloud</text>
        <text x="0" y="104">provider Megaspeed acquired billions in restricted chips.</text>
        <text x="0" y="126">The disclosure has triggered emergency reviews across the</text>
        <text x="0" y="144">Commerce Department’s Bureau of Industry and Security</text>
        <text x="0" y="162">regarding AI chip smuggling pipelines into mainland China.</text>

        <g transform="translate(330, 0)">
          <text x="0" y="14">Mr. Huang released an internal memo to all staff</text>
          <text x="0" y="32">acknowledging infidelity in his 40-year marriage,</text>
          <text x="0" y="50">writing there was “no excuse” for his conduct.</text>
          <text x="0" y="74">Nvidia’s board affirmed that independent outside</text>
          <text x="0" y="92">counsel has been retained to audit whether national</text>
          <text x="0" y="110">security secrets were compromised.</text>
          <text x="0" y="138">Chinese embassy officials vigorously rejected the</text>
          <text x="0" y="156">allegations, characterizing them as political smears.</text>
        </g>
      </g>

      <!-- Stamp -->
      <g transform="translate(460, 400) rotate(9)">
        <rect x="0" y="0" width="170" height="40" rx="3" fill="rgba(254,226,226,0.7)" stroke="#991B1B" stroke-width="2.8" stroke-dasharray="9,2" />
        <text x="85" y="24" font-family="'Courier New', monospace" font-size="12" font-weight="900" fill="#991B1B" letter-spacing="0.1em" text-anchor="middle">RESTRICTED // BIS 2026</text>
      </g>
    </g>
  </g>
</svg>`;

// 3. The Guardian: Nvidia and Jensen Huang Sued in US Over Affair
const guardianSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <filter id="gShadow" x="-10%" y="-10%" width="125%" height="125%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="rgba(0,0,0,0.38)" />
    </filter>
  </defs>

  <!-- Tape -->
  <rect x="80" y="12" width="90" height="30" rx="2" fill="rgba(255,255,225,0.6)" transform="rotate(-7, 125, 27)" />
  <rect x="640" y="14" width="90" height="30" rx="2" fill="rgba(255,255,225,0.6)" transform="rotate(7, 685, 29)" />

  <g filter="url(#gShadow)">
    <path d="M 45,35 
             Q 220,33 420,35 Q 620,33 755,35
             Q 758,180 754,330 Q 758,470 755,565
             Q 570,563 380,566 Q 190,564 45,565
             Q 42,410 46,270 Q 41,140 45,35 Z" 
          fill="#F6F7F8" stroke="rgba(5,41,98,0.2)" stroke-width="1.5" />

    <g transform="translate(80, 50)">
      <!-- Guardian Dark Blue Header Bar -->
      <rect x="0" y="0" width="640" height="48" fill="#052962" rx="3" />
      <text x="20" y="32" font-family="'Guardian Egyptian Web', Georgia, serif" font-size="28" font-weight="900" fill="#FFF">The Guardian</text>
      <text x="620" y="30" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" font-weight="700" fill="#FFE500" text-anchor="end">TECHNOLOGY &amp; SECURITY</text>

      <!-- Headline -->
      <g transform="translate(0, 75)">
        <text x="0" y="24" font-family="'Guardian Headline', Arial, sans-serif" font-size="26" font-weight="900" fill="#121212" letter-spacing="-0.02em">
          Nvidia and Jensen Huang sued in US over
        </text>
        <text x="0" y="56" font-family="'Guardian Headline', Arial, sans-serif" font-size="26" font-weight="900" fill="#121212" letter-spacing="-0.02em">
          affair with alleged Chinese spy
        </text>
        
        <text x="0" y="86" font-family="Georgia, serif" font-size="14" font-weight="600" fill="#333">
          Shareholder lawsuit follows CEO’s confession and intelligence warnings of tech compromise
        </text>
        <text x="0" y="108" font-family="'Helvetica Neue', sans-serif" font-size="11" font-weight="bold" fill="#767676">
          Dan Milmo Global technology editor • Tue 10 Nov 2026 14.15 EST
        </text>
      </g>

      <line x1="0" y1="195" x2="640" y2="195" stroke="#DCDCDC" stroke-width="1.5" />

      <!-- Body -->
      <g transform="translate(0, 212)" font-family="Georgia, serif" font-size="12" line-height="1.45" fill="#333">
        <text x="0" y="14">SAN FRANCISCO — Nvidia and its chief executive, Jensen Huang,</text>
        <text x="0" y="32">have been named in a high-profile shareholder class action following</text>
        <text x="0" y="50">revelations of his relationship with a woman suspected by U.S. intelligence</text>
        
        <!-- Yellow Marker -->
        <rect x="0" y="56" width="315" height="18" fill="rgba(255, 230, 0, 0.7)" rx="2" />
        <text x="0" y="68" font-weight="bold" fill="#000">of working as an asset for Beijing’s state security service.</text>
        
        <text x="0" y="88">In an emotional company-wide memo, Huang apologized to staff</text>
        <text x="0" y="106">and his family, admitting there was “no excuse” for his actions.</text>

        <g transform="translate(340, 0)">
          <text x="0" y="14">The scandal lands as Washington steps up its battle</text>
          <text x="0" y="32">to stop cutting-edge artificial intelligence semiconductors</text>
          <text x="0" y="50">reaching China through third-party hubs in Southeast Asia.</text>
          <text x="0" y="74">Huang has pledged complete transparency and full</text>
          <text x="0" y="92">cooperation with an independent board audit.</text>
        </g>
      </g>

      <!-- Stamp -->
      <g transform="translate(450, 390) rotate(-8)">
        <rect x="0" y="0" width="180" height="42" rx="4" fill="rgba(254,226,226,0.6)" stroke="#B91C1C" stroke-width="3" />
        <text x="90" y="25" font-family="'Courier New', monospace" font-size="11.5" font-weight="900" fill="#B91C1C" letter-spacing="0.08em" text-anchor="middle">LEGAL DOCKET 26-CV-8841</text>
      </g>
    </g>
  </g>
</svg>`;

// 4. Bloomberg News: Trade Records Reveal Megaspeed Hardware Flows
const bloombergSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <filter id="bShadow" x="-10%" y="-10%" width="125%" height="125%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="rgba(0,0,0,0.4)" />
    </filter>
  </defs>

  <rect x="75" y="12" width="85" height="30" rx="2" fill="rgba(255,255,225,0.6)" transform="rotate(-6, 117, 27)" />
  <rect x="645" y="12" width="85" height="30" rx="2" fill="rgba(255,255,225,0.6)" transform="rotate(6, 687, 27)" />

  <g filter="url(#bShadow)">
    <path d="M 45,35 
             Q 220,33 420,35 Q 620,33 755,35
             Q 758,180 754,330 Q 758,470 755,565
             Q 570,563 380,566 Q 190,564 45,565
             Q 42,410 46,270 Q 41,140 45,35 Z" 
          fill="#F1F5F9" stroke="rgba(15,23,42,0.25)" stroke-width="1.5" />

    <g transform="translate(80, 50)">
      <!-- Bloomberg Terminal Ticker Header -->
      <rect x="0" y="0" width="640" height="38" fill="#0F172A" rx="2" />
      <text x="16" y="24" font-family="'Helvetica Neue', Arial, sans-serif" font-size="20" font-weight="900" fill="#FFF" letter-spacing="0.05em">Bloomberg</text>
      <text x="145" y="24" font-family="'Courier New', monospace" font-size="12" font-weight="bold" fill="#38BDF8">TERMINAL DISPATCH // NVDA US $148.20 ▲ +2.4%</text>

      <g transform="translate(0, 60)">
        <text x="0" y="22" font-family="'Helvetica Neue', Arial, sans-serif" font-size="24" font-weight="900" fill="#0F172A" letter-spacing="-0.02em">
          Nvidia Counsel Contacted Commerce Officials Over
        </text>
        <text x="0" y="52" font-family="'Helvetica Neue', Arial, sans-serif" font-size="24" font-weight="900" fill="#0F172A" letter-spacing="-0.02em">
          Singapore Detention of Megaspeed Executive
        </text>
        
        <text x="0" y="80" font-family="Georgia, serif" font-size="13.5" font-style="italic" fill="#475569">
          Trade records indicate advanced AI chip sales through partners exceeded regional quotas
        </text>
        <text x="0" y="100" font-family="'Helvetica Neue', sans-serif" font-size="11" font-weight="bold" fill="#64748B">
          By Ian King and Mackenzie Hawkins • November 9, 2026
        </text>
      </g>

      <line x1="0" y1="170" x2="640" y2="170" stroke="#CBD5E1" stroke-width="1.5" />

      <g transform="translate(0, 186)" font-family="Georgia, serif" font-size="11.5" line-height="1.45" fill="#1E293B">
        <text x="0" y="14">SANTA CLARA — Nvidia’s top legal officer reached out to U.S.</text>
        <text x="0" y="32">Commerce Department officials inquiring about the status of</text>
        <text x="0" y="50">Megaspeed executive Alice Huang following her temporary</text>
        
        <!-- Highlight -->
        <rect x="0" y="56" width="310" height="18" fill="rgba(186, 230, 253, 0.75)" rx="2" />
        <text x="0" y="68" font-weight="bold" fill="#0369A1">detention in Singapore amid federal chip-smuggling probes.</text>
        
        <text x="0" y="88">Customs manifests reviewed by Bloomberg show Megaspeed</text>
        <text x="0" y="106">imported billions in Hopper GPUs via Southeast Asian channels.</text>

        <g transform="translate(335, 0)">
          <text x="0" y="14">Jensen Huang earlier defended the partnership as routine</text>
          <text x="0" y="32">commercial cloud infrastructure development, stating that</text>
          <text x="0" y="50">Nvidia maintains stringent end-user compliance controls.</text>
          <text x="0" y="74">Washington regulators continue auditing supply paths</text>
          <text x="0" y="92">to prevent unauthorized sovereign AI cluster builds.</text>
        </g>
      </g>

      <g transform="translate(460, 395) rotate(-6)">
        <rect x="0" y="0" width="165" height="40" rx="3" fill="rgba(224,242,254,0.7)" stroke="#0284C7" stroke-width="2.8" stroke-dasharray="8,2" />
        <text x="82" y="24" font-family="'Courier New', monospace" font-size="11" font-weight="900" fill="#0369A1" letter-spacing="0.1em" text-anchor="middle">TERMINAL RECORD AUDIT</text>
      </g>
    </g>
  </g>
</svg>`;

// 5. Official Internal Nvidia Memo: A Message to Our Company
const memoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 650" width="800" height="650">
  <defs>
    <filter id="mShadow" x="-10%" y="-10%" width="125%" height="125%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="rgba(0,0,0,0.4)" />
    </filter>
  </defs>

  <rect x="75" y="10" width="85" height="30" rx="2" fill="rgba(255,255,225,0.7)" transform="rotate(-4, 117, 25)" />
  <rect x="645" y="10" width="85" height="30" rx="2" fill="rgba(255,255,225,0.7)" transform="rotate(5, 687, 25)" />

  <g filter="url(#mShadow)">
    <path d="M 45,35 
             Q 220,33 420,35 Q 620,33 755,35
             Q 758,190 754,350 Q 758,500 755,615
             Q 570,613 380,616 Q 190,614 45,615
             Q 42,460 46,310 Q 41,170 45,35 Z" 
          fill="#FAF9F6" stroke="rgba(118,185,0,0.3)" stroke-width="2" />

    <g transform="translate(80, 50)">
      <!-- Nvidia Green Header Badge -->
      <rect x="0" y="0" width="120" height="26" fill="#76B900" rx="3" />
      <text x="60" y="18" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" font-weight="900" fill="#000" text-anchor="middle" letter-spacing="0.1em">NVIDIA</text>
      <text x="135" y="18" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" font-weight="800" fill="#71717A" letter-spacing="0.14em">EXECUTIVE MEMORANDUM</text>
      <text x="640" y="18" font-family="'Courier New', monospace" font-size="11" font-weight="bold" fill="#A1A1AA" text-anchor="end">SUNDAY, NOV 8, 2026</text>

      <line x1="0" y1="34" x2="640" y2="34" stroke="#E4E4E7" stroke-width="2" />

      <g transform="translate(0, 50)">
        <text x="0" y="18" font-family="'Helvetica Neue', Arial, sans-serif" font-size="23" font-weight="900" fill="#18181B">
          A Message to Our Company
        </text>
        <text x="0" y="38" font-family="Georgia, serif" font-size="13" font-weight="600" fill="#52525B">
          From: Jensen Huang, Founder &amp; Chief Executive Officer
        </text>
        <text x="0" y="56" font-family="Georgia, serif" font-size="12" font-style="italic" fill="#71717A">
          To: All NVIDIA Employees, Board of Directors, Partners, and Shareholders Worldwide
        </text>
      </g>

      <line x1="0" y1="120" x2="640" y2="120" stroke="#76B900" stroke-width="2" />

      <!-- Memo Body Text -->
      <g transform="translate(0, 140)" font-family="Georgia, serif" font-size="12" line-height="1.5" fill="#27272A">
        <text x="0" y="14">To my colleagues at NVIDIA,</text>
        <text x="0" y="38">I owe my family and all of you an apology.</text>

        <!-- Yellow Marker Highlight -->
        <rect x="0" y="44" width="220" height="20" fill="rgba(254, 240, 138, 0.85)" rx="2" />
        <text x="0" y="58" font-weight="bold" fill="#000">I was unfaithful to my wife.</text>

        <text x="0" y="78">My actions hurt her and our children.</text>
        
        <rect x="0" y="84" width="360" height="20" fill="rgba(254, 240, 138, 0.85)" rx="2" />
        <text x="0" y="98" font-weight="bold" fill="#000">There is no excuse for what I did. I am deeply sorry.</text>

        <text x="0" y="124">Throughout my life, my family has given me love and support. They deserve my</text>
        <text x="0" y="144">honesty and loyalty. Instead, I let them down and damaged the life we built</text>
        <text x="0" y="164">together. I take full responsibility for what I did and the hurt I caused.</text>

        <text x="0" y="194">To my colleagues at NVIDIA, and to our board, partners, and shareholders:</text>
        <text x="0" y="214">you deserve better from me. Leading NVIDIA is the privilege of my life.</text>

        <text x="0" y="244">Regarding the national security concerns raised in news reports,</text>
        <text x="0" y="264">NVIDIA’s Board of Directors has initiated an independent investigation.</text>
        <text x="0" y="284">I support the investigation and will cooperate fully. I love our country and</text>
        <text x="0" y="304">our company. I am committed to protecting NVIDIA and America’s national security.</text>

        <text x="0" y="340" font-weight="bold" fill="#18181B">Sincerely,</text>
        <text x="0" y="360" font-family="'Times New Roman', cursive, serif" font-size="20" font-style="italic" fill="#09090B">Jensen Huang</text>
        <text x="0" y="380" font-size="11" fill="#71717A">Founder &amp; CEO, NVIDIA Corporation</text>
      </g>

      <!-- Stamp -->
      <g transform="translate(450, 470) rotate(5)">
        <rect x="0" y="0" width="180" height="42" rx="4" fill="rgba(240,253,244,0.8)" stroke="#15803D" stroke-width="3" stroke-dasharray="9,2" />
        <text x="90" y="25" font-family="'Courier New', monospace" font-size="11" font-weight="900" fill="#15803D" letter-spacing="0.1em" text-anchor="middle">OFFICIAL ARCHIVE // CONFIDENTIAL</text>
      </g>
    </g>
  </g>
</svg>`;

fs.writeFileSync(path.join(outputDir, 'newspaper_ft_alice_huang.svg'), ftSvg);
fs.writeFileSync(path.join(outputDir, 'newspaper_wsj_chinese_exec.svg'), wsjSvg);
fs.writeFileSync(path.join(outputDir, 'newspaper_guardian_lawsuit.svg'), guardianSvg);
fs.writeFileSync(path.join(outputDir, 'newspaper_bloomberg_megaspeed.svg'), bloombergSvg);
fs.writeFileSync(path.join(outputDir, 'nvidia_memo_jensen_apology.svg'), memoSvg);

console.log('Successfully generated 5 authentic SVG newspaper and memo assets in public/assets/');
