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
        'pastel-pink': '#FFD1DC', // Gentle Pastel Pink
        'mint-green': '#BDFCC9', // Fresh Mint Green
      },
      fontFamily: {
        sans: ['var(--font-zen-kaku)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
    },
  },
  plugins: [],
};

export default config;
