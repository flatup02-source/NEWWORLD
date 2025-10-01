const critical = require('critical');
const path = require('path');

// ビルド後の 'out' ディレクトリを基準に設定
const baseDir = path.join(__dirname, '..', 'out');

async function generateCriticalCSS() {
  try {
    // まずトップページのクリティカルCSSを生成
    await critical.generate({
      inline: true,
      base: baseDir,
      src: 'index.html',
      target: {
        html: 'index.html',
      },
      width: 1300,
      height: 900,
    });
    console.log('Critical CSS generated for index.html');
    
    // 他の主要なページも追加できます（例: access.html）
    // await critical.generate({ ... });

  } catch (err) {
    console.error('Error generating critical CSS:', err);
    process.exit(1);
  }
}

generateCriticalCSS();
