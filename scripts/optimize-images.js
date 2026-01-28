import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './public';
const imageExtensions = ['.png', '.jpg', '.jpeg'];

async function optimizeImage(filePath) {
  // line_add_friends.png は常にスキップ
  if (path.basename(filePath) === 'line_add_friends.png') {
    console.log(`Skipping line_add_friends.png from optimization.`);
    return;
  }

  const extension = path.extname(filePath).toLowerCase();
  const baseName = path.parse(filePath).name;
  const dirName = path.dirname(filePath);

  // 画像拡張子を持つファイルのみを処理
  if (!imageExtensions.includes(extension)) {
    console.log(`Skipping non-image file: ${filePath}`);
    return;
  }

    // WebPへの変換 (品質80) - 元のファイルはそのままに、新しいファイルとして保存
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(path.join(dirName, `${baseName}.webp`));

    // AVIFへの変換 (品質60) - 元のファイルはそのままに、新しいファイルとして保存
    await sharp(filePath)
      .avif({ quality: 60 })
      .toFile(path.join(dirName, `${baseName}.avif`));
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
