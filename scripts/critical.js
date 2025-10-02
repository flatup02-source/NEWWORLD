import { generate } from 'critical';
import path from 'path';
import { fileURLToPath } from 'url';

// ESMでは__dirnameは使えないので、fileURLToPathとimport.meta.urlを使って同等の機能を実現
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ビルド後の 'out' ディレクトリを基準に設定
const baseDir = path.join(__dirname, '..', 'out');

async function generateCriticalCSS() {
  try {
    // トップページのクリティカルCSSを生成
    await generate({
      inline: true,
      base: baseDir,
      src: 'index.html',
      target: {
        html: 'index.html',
      },
      width: 1300,
      height: 900,
      puppeteerOptions: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
    });
    console.log('Critical CSS generated for index.html');

  } catch (err) {
    console.error('Error generating critical CSS:', err);
    process.exit(1);
  }
}

generateCriticalCSS();