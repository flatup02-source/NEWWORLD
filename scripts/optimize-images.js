import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './public';
const outputDir = './public/images/optimized';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const imageExtensions = ['.png', '.jpg', '.jpeg'];

fs.readdirSync(inputDir).forEach(file => {
  const inputPath = path.join(inputDir, file);

  // Skip if it's not a file or if it's a macOS resource fork file
  if (!fs.statSync(inputPath).isFile() || file.startsWith('._')) {
    return;
  }

  const extension = path.extname(file).toLowerCase();

  if (imageExtensions.includes(extension)) {
    const baseName = path.parse(file).name;

    // WebPへの変換 (品質80)
    sharp(inputPath)
     .webp({ quality: 80 })
     .toFile(path.join(outputDir, `${baseName}.webp`));

    // AVIFへの変換 (品質60)
    sharp(inputPath)
     .avif({ quality: 60 })
     .toFile(path.join(outputDir, `${baseName}.avif`));
  }
});

console.log('Image optimization complete.');
