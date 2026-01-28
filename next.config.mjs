const nextConfig = {
  // 静的エクスポートに変更
  output: 'export',

  // URLの末尾にスラッシュを付ける（/ai -> /ai/index.html）
  // これによりサーバーがディレクトリとして認識し、確実にページを表示する
  trailingSlash: true,

  // 画像リモートパターンの設定
  images: {
    unoptimized: true, // 静的エクスポート時は画像最適化を無効化
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },

  // 必要に応じて publicRuntimeConfig / env などを追加
};

export default nextConfig;
