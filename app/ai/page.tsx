import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from '@/components/ai/Hero';
import Features from '@/components/ai/Features';
// import DemoSlider from '@/components/ai/DemoSlider';
// import CTA from '@/components/ai/CTA';
// import Testimonials from '@/components/ai/Testimonials';
// import FAQ from '@/components/ai/FAQ';
import Footer from '@/components/Footer';

// Dynamic Imports (Code Splitting)
// 初期ロード時のJSサイズを削減するため、ファーストビュー外のコンポーネントを遅延読み込み
const DemoSlider = dynamic(() => import('@/components/ai/DemoSlider'));
const CTA = dynamic(() => import('@/components/ai/CTA'));
const Testimonials = dynamic(() => import('@/components/ai/Testimonials'));
const FAQ = dynamic(() => import('@/components/ai/FAQ'));

// SEOメタデータ設定（Google検索最適化）
export const metadata: Metadata = {
    title: 'AI格闘技トレーニング | FLAT-UP GYM 成田',
    description: 'AIがあなたの格闘技スキルを数値化し、最適なトレーニングメニューを提案。成田市のFLAT-UP GYMが提供する最新のAIトレーニングツールです。無料体験受付中。',
    alternates: {
        canonical: 'https://flatupnarita.jp/ai',
    },
    openGraph: {
        title: 'AI格闘技トレーニング | FLAT-UP GYM',
        description: 'AI技術で格闘技上達を加速させる。自分の戦闘力を計測してみませんか？',
        url: 'https://flatupnarita.jp/ai',
        siteName: 'FLAT-UP GYM',
        images: [
            {
                url: 'https://flatupnarita.jp/images/ai_page_visual.png',
                width: 1200,
                height: 630,
                alt: 'AIトレーニングビジュアル',
            },
        ],
        locale: 'ja_JP',
        type: 'website',
    },
};

export default function AiPage() {
    // 構造化データ (JSON-LD)
    // SoftwareApplication: アプリとしての機能をGoogleに通知
    // FAQPage: よくある質問を検索結果に表示
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'SoftwareApplication',
                'name': 'FLAT-UP AI Trainer',
                'applicationCategory': 'HealthHealthApplication',
                'operatingSystem': 'Web',
                'offers': {
                    '@type': 'Offer',
                    'price': '0',
                    'priceCurrency': 'JPY'
                },
                'description': 'AIが格闘技のフォームを解析し、最適なトレーニングメニューを提案するWebアプリケーション。'
            },
            {
                '@type': 'FAQPage',
                'mainEntity': [
                    {
                        '@type': 'Question',
                        'name': 'AIはどのように戦闘力を数値化しますか？',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'AIは過去のトレーニングデータと現在のパフォーマンスを分析し、独自のスコアリングアルゴリズムで戦闘力を算出します。'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': 'カロリー計算はリアルタイムですか？',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'トレーニング中の心拍数や消費エネルギーを元に、リアルタイムでカロリーを算出し、アプリ上に表示します。'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': 'テキストアドバイスはどのくらいの頻度で受け取れますか？',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'トレーニングごとにAIが分析し、即時に改善ポイントをテキストでフィードバックします。'
                        }
                    }
                ]
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main>
                <Hero />
                <Features />
                <DemoSlider />
                <CTA />
                <Testimonials />
                <FAQ />
            </main>
            <Footer />
        </>
    );
}
