import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 画像最適化
  images: {
    loader: 'custom',
    loaderFile: './imagekit-loader.ts',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.readdy.ai',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'readdy.ai',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scdn.line-apps.com',
        port: '',
        pathname: '/**',
      },
    {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // コンパイル最適化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // 実験的機能
  experimental: {
    optimizePackageImports: ['react-icons', 'lucide-react'],
  },
  
  // 圧縮設定
  compress: true,
  
  // リダイレクト設定
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
  
  // ビルド最適化
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // 出力設定
  output: 'export',
  
  // パフォーマンス監視
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;