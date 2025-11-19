'use client';

import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  jsonLd?: object;
}

export default function SEO({
  title = 'FLAT-UP - 世界一優しい格闘技ジム | 千葉県成田市',
  description = '千葉県成田市の女性オーナーが創る、世界一優しい格闘技ジム。キッズからシニアまで、あなたのペースで楽しく通えます。無料体験レッスン受付中！',
  keywords = 'キックボクシング,格闘技,ジム,成田市,女性,キッズ,シニア,産後,ダイエット,護身術',
  ogImage = 'https://flat-up.jp/og-image.jpg',
  ogType = 'website',
  canonicalUrl,
  noindex = false,
  jsonLd
}: SEOProps) {
  const siteUrl = 'https://flat-up.jp';
  const fullTitle = title.includes('FLAT-UP') ? title : `${title} | FLAT-UP GYM`;

  return (
    <Head>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="FLAT-UP GYM" />
      <meta name="creator" content="FLAT-UP GYM" />
      <meta name="publisher" content="FLAT-UP GYM" />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow" />}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl || siteUrl} />
      <meta property="og:site_name" content="FLAT-UP GYM" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="FLAT-UP GYM" />
      <meta property="og:locale" content="ja_JP" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional meta tags for Japanese sites */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="FLAT-UP" />
      
      {/* Structured Data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      
      {/* Prefetch DNS */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//static.readdy.ai" />
      <link rel="dns-prefetch" href="//lin.ee" />
      <link rel="dns-prefetch" href="//maps.google.com" />
      
      {/* Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
}

// Predefined JSON-LD schemas
export const gymJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "FLAT-UP GYM",
  "description": "千葉県成田市の世界一優しい格闘技ジム",
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
  "sameAs": ["https://lin.ee/21ape6V"],
  "sport": "Kickboxing"
};

