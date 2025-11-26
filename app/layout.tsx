import { Noto_Sans_JP, Zen_Maru_Gothic } from 'next/font/google';
import type { Metadata } from 'next'; // ここを修正
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';

const FloatingNav = dynamic(() => import('@/components/FloatingNav'), { ssr: false });
import ClientLayout from '@/components/ClientLayout';
import './globals.css';
import './sparkle.css'; // ここを追加
import './animations.css'; // ここを追加

export const metadata: Metadata = {
  title: 'FLAT-UP GYM - 成田市で女性・初心者も安心の格闘技ジム',
  description: 'FLAT-UP GYMは、千葉県成田市にある女性オーナーが運営する格闘技ジムです。キックボクシング、ブラジリアン柔術、キッズクラスなど、初心者からプロまで安心して楽しめるプログラムを提供。無料体験受付中！',
  // その他のメタデータもここに追加可能
};

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-zen-maru',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${zenMaruGothic.variable}`}>
      <body>
        <Header />
        <ClientLayout>{children}</ClientLayout>
        <Footer />
        <FloatingNav />
      </body>
    </html>
  );
}