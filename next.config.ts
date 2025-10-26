import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 静的エクスポートに変更
  output: 'export',

  // 画像リモートパターンの設定
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },

  // 必要に応じて publicRuntimeConfig / env などを追加
};

export default nextConfig;
