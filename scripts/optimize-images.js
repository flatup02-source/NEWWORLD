import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './public';
const imageExtensions = ['.png', '.jpg', '.jpeg'];

async function optimizeImage(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  const baseName = path.parse(filePath).name;
  const dirName = path.dirname(filePath);

  if (imageExtensions.includes(extension)) {
    console.log(`Optimizing ${filePath}...`);

    // 元の画像を圧縮 (JPEG/PNG)
    if (extension === '.jpg' || extension === '.jpeg') {
      await sharp(filePath)
        .jpeg({ quality: 80, progressive: true })
        .toFile(filePath);
    } else if (extension === '.png') {
      await sharp(filePath)
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(filePath);
    }

    // WebPへの変換 (品質80)
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(path.join(dirName, `${baseName}.webp`));

    // AVIFへの変換 (品質60)
    await sharp(filePath)
      .avif({ quality: 60 })
      .toFile(path.join(dirName, `${baseName}.avif`));
  }
}

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath); // サブディレクトリを再帰的に処理
    } else if (stat.isFile()) {
      await optimizeImage(filePath);
    }
  }
}

processDirectory(inputDir)
  .then(() => console.log('Image optimization complete.'))
  .catch(err => console.error('Image optimization failed:', err));
