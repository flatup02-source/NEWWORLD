import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import ThoughtsSection from '@/components/home/ThoughtsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';


export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ThoughtsSection />
      <TestimonialsSection />

    </main>
  );
}
