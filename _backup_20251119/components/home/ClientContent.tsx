// components/home/ClientContent.tsx
'use client'; // これがClient Componentであることを示すディレクティブ

import dynamic from 'next/dynamic';

// ここで動的インポートを定義します
const DynamicServicesSection = dynamic(() => import('@/components/home/ServicesSection'), { ssr: false });
const DynamicThoughtsSection = dynamic(() => import('@/components/home/ThoughtsSection'), { ssr: false });
const DynamicTestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection'), { ssr: false });
// 他の動的インポートが必要なコンポーネントもここに追加します

export default function ClientContent() {
  return (
    <>
      {/* ここで動的インポートされたコンポーネントをレンダリングします */}
      <DynamicServicesSection />
      <DynamicThoughtsSection />
      <DynamicTestimonialsSection />
      {/* 他の動的インポートされたコンポーネントも同様にレンダリング */}
    </>
  );
}
