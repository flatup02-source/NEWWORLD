import { Zen_Kaku_Gothic_New, M_PLUS_Rounded_1c, Kosugi_Maru } from 'next/font/google';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';

const FloatingNav = dynamic(() => import('@/components/FloatingNav'), { ssr: false });
import ClientLayout from '@/components/ClientLayout';
import './globals.css';
import './sparkle.css';
import './animations.css';

export const metadata: Metadata = {
  title: 'FLAT-UP GYM - 成田市で女性・初心者も安心の格闘技ジム',
  description: 'FLAT-UP GYMは、千葉県成田市にある女性オーナーが運営する格闘技ジムです。キックボクシング、ブラジリアン柔術、キッズクラスなど、初心者からプロまで安心して楽しめるプログラムを提供。無料体験受付中！',
};

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-zen-kaku',
});

const mPlus = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  display: 'swap',
  variable: '--font-m-plus',
});

const kosugiMaru = Kosugi_Maru({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-kosugi-maru',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${zenKaku.variable} ${mPlus.variable} ${kosugiMaru.variable}`}>
      <body>
        <Header />
        <ClientLayout>{children}</ClientLayout>
        <Footer />
        <FloatingNav />
      </body>
    </html>
  );
}