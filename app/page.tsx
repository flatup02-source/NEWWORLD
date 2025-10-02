import HeroSection from '@/components/HeroSection';
import ClientContent from '@/components/home/ClientContent'; // 新しいClient Componentをインポート

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      {/* 動的にインポートされるセクションをClientContentコンポーネント内にラップします */}
      <ClientContent />
    </main>
  );
}
