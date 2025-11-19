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
      },
      fontFamily: {
        sans: ['"Zen Kaku Gothic New"', 'sans-serif'], // Default sans-serif to Zen Kaku Gothic New
        // You can add more specific fonts if needed
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
