import HeroSection from '@/components/HeroSection';
import dynamic from 'next/dynamic';

// ClientContentを動的にインポートし、サーバーサイドレンダリングを無効にする
const ClientContent = dynamic(() => import('@/components/home/ClientContent'), { ssr: false });

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      {/* 動的にインポートされるセクションをClientContentコンポーネント内にラップします */}
      <ClientContent />
    </main>
  );
}
