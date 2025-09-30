'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PersonaProvider } from '../components/PersonaContext';
import SEO, { gymJsonLd } from '../components/SEO';
import { breadcrumbJsonLd } from '../lib/json-ld';
import OptimizedImage from '../components/OptimizedImage';
import dynamic from 'next/dynamic';
import HeroSection from '../components/home/HeroSection';

const ServicesSection = dynamic(() => import('../components/home/ServicesSection'));
const PainPointSection = dynamic(() => import('../components/home/PainPointSection'));
const TestimonialsSection = dynamic(() => import('../components/home/TestimonialsSection'));
const FinalCtaSection = dynamic(() => import('../components/home/FinalCtaSection'));
const ReasonsSection = dynamic(() => import('../components/home/ReasonsSection'));
const ThoughtsSection = dynamic(() => import('../components/home/ThoughtsSection'));

export default function Home() {
  const homeBreadcrumbs = breadcrumbJsonLd([
    { name: 'Home', url: 'https://flat-up.jp/' },
  ]);

  return (
    <PersonaProvider>
      <SEO
        title="FLATUPGYM（フラットアップジム）- 成田の女性・初心者向け格闘技ジム"
        description='成田の女性に優しい格闘技ジム「FLATUPGYM」。女性オーナーによる初心者向けキックボクシング、ブラジリアン柔術、総合格闘技を学べます。24時間利用可能、無料体験レッスン実施中。'
        jsonLd={{ ...gymJsonLd, ...homeBreadcrumbs }}
      />
      <div className="min-h-screen relative bg-white">

        <main className="flex min-h-screen flex-col items-center justify-between">
      
          <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            <video
              src="https://ik.imagekit.io/FLATUPGYM/output_compressed.mp4?updatedAt=1758848662650"
              poster="https://ik.imagekit.io/FLATUPGYM/TOPP.png?updatedAt=1756928058451"
              autoPlay
              loop
              muted
              playsInline
              style={{ position: 'absolute', top: '50%', left: '50%', width: 'auto', height: 'auto', minWidth: '100%', minHeight: '100%', transform: 'translate(-50%, -50%)', zIndex: 0 }}
            />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              textAlign: 'center',
              zIndex: 1,
              textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
              padding: '20px',
              borderRadius: '10px',
              width: '90%',
              maxWidth: '800px'
            }}>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                殴り合う場所だと思ってた。<br />本当は、昨日までの自分とサヨナラする場所だった。
              </h1>
              <p style={{ fontSize: '1.2rem' }}>
                運動不足の私が、一番ハマった場所。鏡を見るのが、少し好きになる。世界一優しい格闘技ジムへGO
              </p>
            </div>
          </div>

          <ServicesSection />

          <PainPointSection />

          <ReasonsSection />

          <ThoughtsSection />

          <TestimonialsSection />

          <FinalCtaSection />

        </main>

        


      </div>
    </PersonaProvider>
  );
}