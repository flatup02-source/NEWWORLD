const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // PurgeCSSを本番環境でのみ実行
    ...(process.env.NODE_ENV === 'production'
      ? {
          '@fullhuman/postcss-purgecss': {
            content: [
              './app/**/*.{js,jsx,ts,tsx}',
              './components/**/*.{js,jsx,ts,tsx}',
            ],
            defaultExtractor: (content) =>
              content.match(/[^\s"'<>`]*[^\s"'<>`:]/g) || [],
          },
        }
      : {}),
  },
};

export default config;
