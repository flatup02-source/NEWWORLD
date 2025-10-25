import ClientContentWrapper from '@/components/home/ClientContentWrapper';
import HeroSection from '@/components/HeroSection';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <ClientContentWrapper />
    </main>
  );
}
