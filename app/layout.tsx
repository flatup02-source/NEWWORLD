import type { Metadata, Viewport } from 'next';
import { Inter, Pacifico } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import { Partytown } from '@builder.io/partytown/react';
import Header from '../components/Header'; // Import the Header component
import DynamicFooter from '../components/DynamicFooter';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  fallback: ['Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', 'Noto Sans JP', 'Arial', 'sans-serif'],
});

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', 'Noto Sans JP', 'Arial', 'sans-serif'],
});

export const metadata: Metadata = {
  title: 'FLATUPGYM（フラットアップジム）- 成田の女性・初心者向け格闘技ジム',
  description: '成田市の女性・初心者向けキックボクシングジムFLATUP。ダイエットやストレス解消に最適。強くて優しい、新しい自分に会いに来ませんか？無料体験受付中。',
  keywords: '成田,格闘技,ジム,女性,フィットネス,キックボクシング,ブラジリアン柔術,総合格闘技,24時間ジム,初心者,ダイエット,FLATUPGYM,フラットアップジム',
  authors: [{ name: 'FLATUPGYM' }],
  creator: 'FLATUPGYM',
  publisher: 'FLATUPGYM',
  robots: 'index, follow',
  openGraph: {
    title: 'FLATUPGYM（フラットアップジム）- 成田の格闘技ジム',
    description: '成田市の女性・初心者向けキックボクシングジムFLATUP。ダイエットやストレス解消に最適。強くて優しい、新しい自分に会いに来ませんか？無料体験受付中。',
    url: 'https://flat-up.jp',
    siteName: 'FLATUPGYM（フラットアップジム）',
    images: [
      {
        url: 'https://ik.imagekit.io/FLATUPGYM/og-image.jpg?tr=q-auto,f-auto',
        width: 1200,
        height: 630,
        alt: 'FLATUPGYMのトレーニング風景',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLATUPGYM（フラットアップジム）- 成田の格闘技ジム',
    description: '成田市の女性・初心者向けキックボクシングジムFLATUP。ダイエットやストレス解消に最適。強くて優しい、新しい自分に会いに来ませんか？無料体験受付中。',
    images: ['https://flat-up.jp/og-image.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <Partytown debug={false} forward={['dataLayer.push']} />
        <script id="gtm-script" type="text/partytown" dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M5TLG6T7');
          `,
        }} />
        <link rel="dns-prefetch" href="//static.readdy.ai" />
        <link rel="dns-prefetch" href="//lin.ee" />
        <link rel="dns-prefetch" href="//maps.google.com" />
        <link rel="preload" as="image" href="https://ik.imagekit.io/FLATUPGYM/tr:q-auto,f-auto/TOPP.png" fetchPriority="high" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Script id="structured-data" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "世界一優しい格闘技ジム FLATUPGYM",
              "description": "成田の女性に優しい格闘技ジム「FLATUPGYM」。女性オーナーによる初心者向けキックボクシング、ブラジリアン柔術、総合格闘技を学べます。24時間利用可能、無料体験レッスン実施中。",
              "url": "https://flat-up.jp",
              "telephone": "070-9035-3485",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "土屋516-4 2F",
                "addressLocality": "成田市",
                "addressRegion": "千葉県",
                "postalCode": "286-0021",
                "addressCountry": "JP"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 35.7661,
                "longitude": 140.3178
              },
              "openingHours": [
                "Mo-Sa 09:00-21:00",
                "Su 09:00-18:00"
              ],
              "sameAs": [
                "https://lin.ee/JUxTlYr",
                "https://www.instagram.com/flatup.narita"
              ],
              "sport": "Kickboxing",
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Parking",
                  "value": "Free parking available"
                },
                {
                  "@type": "LocationFeatureSpecification", 
                  "name": "Child-friendly",
                  "value": "Children welcome"
                }
              ]
            }
          `}
        </Script>
      </head>
      <body className={`${inter.className} ${pacifico.className}`}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M5TLG6T7"
height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        <Header />
        <main>
          {children}
        </main>
        <Script id="line-click-tracking">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              document.querySelectorAll('a[href*="line.me"]').forEach(function(el) {
                el.addEventListener('click', function() {
                  gtag('event', 'line_click', {
                    'event_category': 'engagement',
                    'event_label': 'LINE公式誘導',
                    'page_path': window.location.pathname
                  });
                });
              });
            });
          `}
        </Script>
        <DynamicFooter />
      </body>
    </html>
  );
}