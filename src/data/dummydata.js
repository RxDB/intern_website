const createProductImage = (label, background, accent) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 320">
      <defs>
        <linearGradient id="panel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${background}" />
          <stop offset="100%" stop-color="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="480" height="320" rx="28" fill="url(#panel)" />
      <circle cx="360" cy="90" r="72" fill="${accent}" opacity="0.18" />
      <rect x="72" y="220" width="336" height="10" rx="5" fill="rgba(255,255,255,0.15)" />
      <text x="72" y="144" fill="#f8fafc" font-family="Poppins, Arial, sans-serif" font-size="38" font-weight="700">
        ${label}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const dummyProducts = [
  {
    id: 'prod-h-series',
    name: 'H-Series Wireless',
    stock: 0,
    price: 499,
    description: 'Wireless over-ear headphones for premium listening sessions.',
    category: 'Electronic',
    region: 'India',
    customizable: false,
    returnable: true,
    image: createProductImage('H-Series', '#1d4ed8', '#ef4444'),
  },
  {
    id: 'prod-s-line',
    name: 'S-Line Chrono',
    stock: 8,
    price: 320,
    description: 'Minimal smartwatch with fitness and calendar tracking.',
    category: 'Electronic',
    region: 'Europe',
    customizable: true,
    returnable: true,
    image: createProductImage('S-Line', '#0f766e', '#f59e0b'),
  },
  {
    id: 'prod-pro-gamer',
    name: 'Pro Gamer X',
    stock: 72,
    price: 210,
    description: 'Low-latency gaming headset designed for streaming setups.',
    category: 'Electronic',
    region: 'US',
    customizable: false,
    returnable: false,
    image: createProductImage('Gamer X', '#111827', '#22c55e'),
  },
  {
    id: 'prod-sprint-runner',
    name: 'Sprint Runner Pro',
    stock: 55,
    price: 315,
    description: 'High-performance running shoes for training and road races.',
    category: 'Sports',
    region: 'Europe',
    customizable: false,
    returnable: true,
    image: createProductImage('Runner Pro', '#7c3aed', '#38bdf8'),
  },
  {
    id: 'prod-titan-x',
    name: 'Titan X Laptop',
    stock: 0,
    price: 1299,
    description: 'Portable workstation laptop for design and editing teams.',
    category: 'Electronic',
    region: 'US',
    customizable: true,
    returnable: false,
    image: createProductImage('Titan X', '#374151', '#ef4444'),
  },
  {
    id: 'prod-omni-phone',
    name: 'OmniPhone 15',
    stock: 8,
    price: 899,
    description: 'Flagship smartphone with all-day battery and OLED display.',
    category: 'Electronic',
    region: 'Asia',
    customizable: false,
    returnable: true,
    image: createProductImage('OmniPhone', '#0284c7', '#facc15'),
  },
];

export const dummyWishlistIds = [
  'prod-h-series',
  'prod-s-line',
  'prod-pro-gamer',
];
