// app/page.tsx

import dynamic from 'next/dynamic';
import HeroSection from '@/components/HeroSection';

const DynamicServicesSection = dynamic(() => import('@/components/home/ServicesSection'), { ssr: false });
const DynamicThoughtsSection = dynamic(() => import('@/components/home/ThoughtsSection'), { ssr: false });
const DynamicTestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection'), { ssr: false });
// 他に必要なコンポーネントがあれば、ここにインポート文を追加してください
// import SomeOtherSection from '@/components/home/SomeOtherSection';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <DynamicServicesSection />
      <DynamicThoughtsSection />
      <DynamicTestimonialsSection />
      {/* 他のセクションコンポーネントをここに追加します */}
      {/* <SomeOtherSection /> */}
    </main>
  );
}
