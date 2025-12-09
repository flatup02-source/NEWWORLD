import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        prideRed: '#D32F2F',
        prideBlack: '#212121',
        prideGold: '#FFD700',
        prideGray: '#424242',
        'pastel-pink': '#F8C8DC',
        'mint-green': '#B2E4D8',
        'off-white': '#fffaf7',
        'sakura-pink': '#F8C8DC',
        'sakura-hover': '#FF9EC9',
        // 2025 Kawaii Palette
        'kawaii-pink': '#FFB6D9',
        'kawaii-pink-light': '#FFEBF5',
        'kawaii-lavender': '#D4A5FF',
        'kawaii-mint': '#B4E7D6',
        'kawaii-mint-light': '#E0F7FA',
        'kawaii-sky': '#B3E5FC',
        'kawaii-yellow': '#FFF9C4',
        'kawaii-cream': '#FFF9F5',
        'kawaii-text': '#5A4A6A',
        'kawaii-accent': '#FFE5B4',
        'asken-green': '#DFF8E1',
      },
      fontFamily: {
        sans: ['var(--font-zen-kaku)', 'sans-serif'],
        kawaii: ['var(--font-m-plus)', 'sans-serif'],
        rounded: ['var(--font-m-plus)', 'sans-serif'],
        special: ['var(--font-kosugi-maru)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, #FFE5E5 0%, #D4A5FF 100%)',
        'gradient-cta': 'linear-gradient(135deg, #FFB6D9 0%, #FF9EC9 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
      },
      borderRadius: {
        lg: '20px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '40px',
        '4xl': '50px',
      },
      boxShadow: {
        'soft': '0 12px 32px rgba(0,0,0,0.07)',
        'cute': '0 8px 32px rgba(255, 182, 217, 0.2)',
        'glow': '0 0 20px rgba(255, 182, 217, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
