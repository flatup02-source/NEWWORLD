import { Noto_Sans_JP } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientLayout from '@/components/ClientLayout';
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body>
        <Header />
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
}