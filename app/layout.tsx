import { Zen_Kaku_Gothic_New, M_PLUS_Rounded_1c } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionBar from '@/components/FloatingActionBar';
import ClientLayout from '@/components/ClientLayout';
import './globals.css';

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-zen-kaku',
});

const mPlusRounded1c = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  display: 'swap',
  variable: '--font-m-plus',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${zenKakuGothicNew.variable} ${mPlusRounded1c.variable}`}>
      <body className="bg-[#fffaf7]">
        <Header />
        <ClientLayout>{children}</ClientLayout>
        <Footer />
        <FloatingActionBar />
      </body>
    </html>
  );
}