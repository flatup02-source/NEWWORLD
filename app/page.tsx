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
      
          <HeroSection />

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