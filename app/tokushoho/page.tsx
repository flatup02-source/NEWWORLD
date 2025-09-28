'use client';


import SEO from '@/components/SEO';
import { breadcrumbJsonLd } from '@/lib/json-ld';

export default function Tokushoho() {
  const tokushohoBreadcrumbs = breadcrumbJsonLd([
    { name: 'Home', url: 'https://flat-up.jp/' },
    { name: '特定商取引法に基づく表記', url: 'https://flat-up.jp/tokushoho' },
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="特定商取引法に基づく表記 - FLATUPGYM"
        description="FLATUPGYMの特定商取引法に基づく表記です。"
        jsonLd={tokushohoBreadcrumbs}
      />
      

      <main className="flex-grow py-24 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
        <section className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            特定商取引法に基づく表記
          </h1>
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <h2 className="text-xl md:text-2xl font-bold">販売業者</h2>
            <p>FLATUPGYM</p>

            <h2 className="text-xl md:text-2xl font-bold">運営統括責任者</h2>
            <p>[氏名]</p>

            <h2 className="text-xl md:text-2xl font-bold">所在地</h2>
            <p>〒286-0021 千葉県成田市土屋516−4 ２F</p>

            <h2 className="text-xl md:text-2xl font-bold">電話番号</h2>
            <p>070-9035-3485</p>

            <h2 className="text-xl md:text-2xl font-bold">メールアドレス</h2>
            <p>flatupgym@gmail.com</p>

            <h2 className="text-xl md:text-2xl font-bold">商品代金以外の必要料金</h2>
            <p>消費税、振込手数料（銀行振込の場合）</p>

            <h2 className="text-xl md:text-2xl font-bold">お支払い方法</h2>
            <p>口座引き落とし、クレジットカード払い</p>

            <h2 className="text-xl md:text-2xl font-bold">役務の提供時期</h2>
            <p>各サービスの利用規約に準じます。</p>

            <h2 className="text-xl md:text-2xl font-bold">返品・交換・キャンセル等</h2>
            <p>
              サービスの性質上、返品・交換は承っておりません。
              キャンセルについては、各サービスの利用規約をご確認ください。
            </p>

            <h2 className="text-xl md:text-2xl font-bold">その他</h2>
            <p>
              本表記に定めのない事項については、当ジムの利用規約に準じます。
            </p>
          </div>
        </section>
      </main>

      
    </div>
  );
}