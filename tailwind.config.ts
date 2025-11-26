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
        prideRed: '#D32F2F', // Deep Red
        prideBlack: '#212121', // Dark Black
        prideGold: '#FFD700', // Gold
        prideGray: '#424242', // Dark Gray for contrast
        'pastel-pink': '#F8C8DC', // Sakura Pink
        'mint-green': '#B2E4D8', // Mint Green
        'off-white': '#fffaf7', // Warm Off-white
        'sakura-pink': '#F8C8DC', // Sakura Pink (Primary)
        'sakura-hover': '#FF9EC9', // Sakura Pink (Hover)
        // 2025 Kawaii Palette
        'kawaii-pink': '#FFB7C5', // Cherry Blossom
        'kawaii-mint': '#BCE2D0', // Soft Mint
        'kawaii-lavender': '#E6E6FA', // Lavender
        'kawaii-cream': '#FFFDD0', // Cream
        'kawaii-text': '#4A4A4A', // Soft Black
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)', 'sans-serif'],
        kawaii: ['var(--font-zen-maru)', 'sans-serif'],
        rounded: ['var(--font-m-plus)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: '20px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '40px',
      },
      boxShadow: {
        'soft': '0 12px 32px rgba(0,0,0,0.07)',
      },
    },
  },
  plugins: [],
};

export default config;
