export interface DesignConcept {
  title: string;
  palette: string[];
  style: string;
  svgPattern: string;
  tag: string;
}

const DESIGNS: Record<string, DesignConcept[]> = {
  tiger: [{
    title: 'Neon Tiger', palette: ['#ff6b35', '#1a1a2e', '#e94560'], style: 'illustrative', tag: 'Limited',
    svgPattern: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#1a1a2e"/><circle cx="100" cy="85" r="45" fill="#ff6b35" opacity="0.9"/><path d="M70,75 Q100,55 130,75 Q130,110 100,125 Q70,110 70,75Z" fill="#e94560"/><line x1="72" y1="78" x2="60" y2="68" stroke="#1a1a2e" stroke-width="3"/><line x1="80" y1="73" x2="72" y2="60" stroke="#1a1a2e" stroke-width="3"/><line x1="90" y1="70" x2="86" y2="56" stroke="#1a1a2e" stroke-width="3"/><line x1="128" y1="78" x2="140" y2="68" stroke="#1a1a2e" stroke-width="3"/><line x1="120" y1="73" x2="128" y2="60" stroke="#1a1a2e" stroke-width="3"/><circle cx="88" cy="88" r="5" fill="#1a1a2e"/><circle cx="112" cy="88" r="5" fill="#1a1a2e"/><path d="M92,100 Q100,108 108,100" fill="none" stroke="#1a1a2e" stroke-width="2.5" stroke-linecap="round"/><circle cx="100" cy="150" r="25" fill="#ff6b35" opacity="0.3"/><circle cx="100" cy="150" r="15" fill="#e94560" opacity="0.5"/></svg>`
  }],
  ocean: [{
    title: 'Midnight Wave', palette: ['#0077b6', '#00b4d8', '#caf0f8'], style: 'abstract', tag: 'AI Drop 01',
    svgPattern: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#caf0f8"/><path d="M0,120 Q25,95 50,120 Q75,145 100,120 Q125,95 150,120 Q175,145 200,120 L200,200 L0,200Z" fill="#0077b6" opacity="0.8"/><path d="M0,140 Q25,115 50,140 Q75,165 100,140 Q125,115 150,140 Q175,165 200,140 L200,200 L0,200Z" fill="#00b4d8" opacity="0.6"/><circle cx="100" cy="70" r="30" fill="#0077b6" opacity="0.2"/><circle cx="100" cy="70" r="18" fill="#0077b6" opacity="0.4"/><path d="M85,70 Q100,55 115,70 Q100,85 85,70Z" fill="#0077b6"/></svg>`
  }],
  space: [{
    title: 'Cosmic Drift', palette: ['#240046', '#7b2d8b', '#ff9ef5'], style: 'geometric', tag: 'Collab',
    svgPattern: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#240046"/><circle cx="100" cy="100" r="70" fill="none" stroke="#7b2d8b" stroke-width="1" opacity="0.5"/><circle cx="100" cy="100" r="50" fill="none" stroke="#7b2d8b" stroke-width="1" opacity="0.7"/><circle cx="100" cy="100" r="30" fill="#7b2d8b" opacity="0.4"/><circle cx="100" cy="100" r="12" fill="#ff9ef5"/><circle cx="40" cy="50" r="3" fill="white" opacity="0.8"/><circle cx="160" cy="40" r="2" fill="white" opacity="0.6"/><circle cx="170" cy="150" r="3" fill="white" opacity="0.7"/><circle cx="30" cy="160" r="2" fill="white" opacity="0.5"/><circle cx="150" cy="170" r="2" fill="white" opacity="0.6"/><circle cx="60" cy="140" r="1.5" fill="white" opacity="0.4"/><ellipse cx="100" cy="100" rx="80" ry="20" fill="none" stroke="#ff9ef5" stroke-width="1" opacity="0.4"/></svg>`
  }],
  zen: [{
    title: 'Still Garden', palette: ['#606c38', '#dda15e', '#fefae0'], style: 'botanical', tag: 'Classic',
    svgPattern: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#fefae0"/><circle cx="100" cy="100" r="55" fill="none" stroke="#606c38" stroke-width="1.5"/><circle cx="100" cy="100" r="35" fill="none" stroke="#606c38" stroke-width="1" opacity="0.6"/><line x1="100" y1="45" x2="100" y2="155" stroke="#606c38" stroke-width="1" opacity="0.3"/><line x1="45" y1="100" x2="155" y2="100" stroke="#606c38" stroke-width="1" opacity="0.3"/><circle cx="100" cy="100" r="8" fill="#dda15e"/><path d="M100,65 Q110,80 100,90 Q90,80 100,65Z" fill="#606c38"/><path d="M100,110 Q110,120 100,135 Q90,120 100,110Z" fill="#606c38" opacity="0.7"/><path d="M65,100 Q80,90 90,100 Q80,110 65,100Z" fill="#606c38"/><path d="M110,100 Q120,90 135,100 Q120,110 110,100Z" fill="#606c38" opacity="0.7"/></svg>`
  }],
  floral: [{
    title: 'Bloom Drop', palette: ['#ff85a1', '#ffc2d1', '#2d6a4f'], style: 'botanical', tag: 'New',
    svgPattern: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#fff5f7"/><circle cx="100" cy="100" r="18" fill="#ff85a1"/>${Array.from({length:6},(_,i)=>{const a=i*60*Math.PI/180;const x=100+Math.cos(a)*30;const y=100+Math.sin(a)*30;return `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="14" ry="9" fill="#ffc2d1" transform="rotate(${i*60} ${x.toFixed(1)} ${y.toFixed(1)})"/>`}).join('')}<line x1="100" y1="118" x2="100" y2="160" stroke="#2d6a4f" stroke-width="2.5"/><path d="M100,145 Q120,135 125,120" fill="none" stroke="#2d6a4f" stroke-width="2"/><path d="M100,138 Q80,128 75,113" fill="none" stroke="#2d6a4f" stroke-width="2"/></svg>`
  }],
  geometric: [{
    title: 'Grid Theory', palette: ['#111111', '#6b7cff', '#f5f5f5'], style: 'geometric', tag: 'AI Drop 01',
    svgPattern: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#f5f5f5"/><rect x="50" y="50" width="100" height="100" fill="none" stroke="#111111" stroke-width="2"/><rect x="65" y="65" width="70" height="70" fill="none" stroke="#6b7cff" stroke-width="1.5"/><rect x="80" y="80" width="40" height="40" fill="#6b7cff" opacity="0.2"/><line x1="50" y1="50" x2="150" y2="150" stroke="#111111" stroke-width="1.5"/><line x1="150" y1="50" x2="50" y2="150" stroke="#111111" stroke-width="1.5"/><circle cx="100" cy="100" r="8" fill="#6b7cff"/></svg>`
  }],
};

const FALLBACK_KEYS = Object.keys(DESIGNS);

function matchDesign(prompt: string): DesignConcept {
  const p = prompt.toLowerCase();
  for (const key of FALLBACK_KEYS) {
    if (p.includes(key)) return DESIGNS[key][0];
  }
  // Generate a unique design based on prompt hash
  const hue = Math.abs(prompt.split('').reduce((a, c) => a + c.charCodeAt(0), 0)) % 360;
  const hue2 = (hue + 137) % 360;
  const hue3 = (hue + 214) % 360;
  const c1 = `hsl(${hue},65%,55%)`;
  const c2 = `hsl(${hue2},65%,55%)`;
  const c3 = `hsl(${hue3},65%,55%)`;
  const tags = ['AI Drop 01', 'Limited', 'Collab', 'New', 'Classic'];
  const styles = ['geometric', 'abstract', 'illustrative', 'botanical'];
  const idx = prompt.length % 5;
  return {
    title: prompt.split(' ').slice(0, 3).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    palette: [c1, c2, c3],
    style: styles[idx % styles.length],
    tag: tags[idx],
    svgPattern: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#fafafa"/>
      <circle cx="100" cy="100" r="70" fill="none" stroke="${c1}" stroke-width="2"/>
      <circle cx="100" cy="100" r="50" fill="none" stroke="${c2}" stroke-width="1.5" opacity="0.7"/>
      <circle cx="100" cy="100" r="30" fill="${c3}" opacity="0.15"/>
      <path d="M30,100 Q65,${50+idx*8} 100,100 Q135,${150-idx*8} 170,100" fill="none" stroke="${c1}" stroke-width="3"/>
      <path d="M30,80 Q65,${30+idx*8} 100,80 Q135,${130-idx*8} 170,80" fill="none" stroke="${c2}" stroke-width="1.5" opacity="0.5"/>
      <circle cx="100" cy="100" r="12" fill="${c1}" opacity="0.9"/>
      <circle cx="60" cy="70" r="5" fill="${c2}" opacity="0.6"/>
      <circle cx="140" cy="130" r="5" fill="${c3}" opacity="0.6"/>
    </svg>`,
  };
}

export async function generateDesign(prompt: string): Promise<DesignConcept> {
  // Simulate AI generation delay
  await new Promise(res => setTimeout(res, 1800));
  return matchDesign(prompt);
}