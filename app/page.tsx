import ClientContentWrapper from '@/components/home/ClientContentWrapper';
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <ClientContentWrapper />
    </main>
  );
}
