export interface FeaturedDrop {
  id: string;
  tag: string;
  title: string;
  palette: string[];
  svgPattern: string;
  price: number;
}

export const FEATURED_DROPS: FeaturedDrop[] = [
  {
    id: '1',
    tag: 'AI Drop 01',
    title: 'Neon Jungle',
    price: 349,
    palette: ['#6b7cff', '#a8ff78', '#111111'],
    svgPattern: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#f0f2ff"/>
      <line x1="0" y1="0" x2="200" y2="200" stroke="#6b7cff" stroke-width="0.5" opacity="0.3"/>
      <line x1="200" y1="0" x2="0" y2="200" stroke="#6b7cff" stroke-width="0.5" opacity="0.3"/>
      <circle cx="100" cy="100" r="60" fill="none" stroke="#6b7cff" stroke-width="2"/>
      <circle cx="100" cy="100" r="40" fill="none" stroke="#6b7cff" stroke-width="1.5" opacity="0.5"/>
      <circle cx="100" cy="100" r="20" fill="#6b7cff" opacity="0.15"/>
      <path d="M40,100 Q70,60 100,100 Q130,140 160,100" fill="none" stroke="#a8ff78" stroke-width="2.5"/>
    </svg>`,
  },
  {
    id: '2',
    tag: 'Limited',
    title: 'Solar Bloom',
    price: 399,
    palette: ['#ff6b6b', '#ffb347', '#fff8f0'],
    svgPattern: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#fff8f0"/>
      <circle cx="100" cy="100" r="50" fill="#ff6b6b" opacity="0.12"/>
      <circle cx="100" cy="100" r="35" fill="#ff6b6b" opacity="0.18"/>
      <circle cx="100" cy="100" r="18" fill="#ff6b6b" opacity="0.7"/>
      ${Array.from({length:8}, (_,i) => {
        const angle = (i * 45) * Math.PI / 180;
        const x1 = 100 + Math.cos(angle) * 22;
        const y1 = 100 + Math.sin(angle) * 22;
        const x2 = 100 + Math.cos(angle) * 55;
        const y2 = 100 + Math.sin(angle) * 55;
        return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#ffb347" stroke-width="2"/>`;
      }).join('')}
    </svg>`,
  },
  {
    id: '3',
    tag: 'Collab',
    title: 'Void Signal',
    price: 429,
    palette: ['#111111', '#444444', '#f5f5f5'],
    svgPattern: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#f9f9f9"/>
      ${Array.from({length:10}, (_,i) => 
        `<line x1="${i*22}" y1="0" x2="${i*22}" y2="200" stroke="#111111" stroke-width="0.4" opacity="${0.05 + i*0.04}"/>`
      ).join('')}
      <rect x="60" y="60" width="80" height="80" fill="none" stroke="#111111" stroke-width="2"/>
      <rect x="75" y="75" width="50" height="50" fill="#111111" opacity="0.08"/>
      <line x1="60" y1="60" x2="140" y2="140" stroke="#111111" stroke-width="1.5"/>
      <line x1="140" y1="60" x2="60" y2="140" stroke="#111111" stroke-width="1.5"/>
      <circle cx="100" cy="100" r="12" fill="#111111"/>
    </svg>`,
  },
];
