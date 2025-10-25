'use client';

import dynamic from 'next/dynamic';

// ClientContentを動的にインポートし、クライアントサイドでのみレンダリング
const ClientContent = dynamic(() => import('@/components/home/ClientContent'), {
  ssr: false,
  // オプションでローディングコンポーネントも指定可能
  // loading: () => <p>Loading...</p>,
});

export default function ClientContentWrapper() {
  return <ClientContent />;
}
