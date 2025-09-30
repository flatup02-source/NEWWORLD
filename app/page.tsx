// app/page.tsx

import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import ThoughtsSection from '@/components/home/ThoughtsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
// 他に必要なコンポーネントがあれば、ここにインポート文を追加してください
// import SomeOtherSection from '@/components/home/SomeOtherSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ThoughtsSection />
      <TestimonialsSection />
      {/* 他のセクションコンポーネントをここに追加します */}
      {/* <SomeOtherSection /> */}
    </main>
  );
}