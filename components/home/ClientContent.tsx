// components/home/ClientContent.tsx
'use client'; // これがClient Componentであることを示すディレクティブ

import dynamic from 'next/dynamic';
import HeroBadges from './HeroBadges';
import AiSection from './AiSection';

// ここで動的インポートを定義します
const DynamicServicesSection = dynamic(() => import('@/components/home/ServicesSection'), { ssr: false });
const DynamicThoughtsSection = dynamic(() => import('@/components/home/ThoughtsSection'), { ssr: false });
const DynamicTestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection'), { ssr: false });
const DynamicKawaiiDiagnosisSection = dynamic(() => import('@/components/home/KawaiiDiagnosisSection'), { ssr: false });

export default function ClientContent() {
  return (
    <>
      {/* ここで動的インポートされたコンポーネントをレンダリングします */}
      <HeroBadges />
      <DynamicKawaiiDiagnosisSection />
      <AiSection />
      <DynamicServicesSection />
      <DynamicThoughtsSection />
      <DynamicTestimonialsSection />
      {/* 他の動的インポートされたコンポーネントも同様にレンダリング */}
    </>
  );
}
