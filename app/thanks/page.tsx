'use client';


import Link from 'next/link';
import SEO from '@/components/SEO';
import { breadcrumbJsonLd } from '@/lib/json-ld';

export default function Thanks() {
  const thanksBreadcrumbs = breadcrumbJsonLd([
    { name: 'Home', url: 'https://flat-up.jp/' },
    { name: 'お申し込み完了', url: 'https://flat-up.jp/thanks' },
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="お申し込み完了 - FLATUPGYM"
        description="FLATUPGYMへのお申し込みが完了しました。ご連絡をお待ちください。"
        jsonLd={thanksBreadcrumbs}
      />
      

      <main className="flex-grow flex items-center justify-center py-24 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-xl text-center">
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            🎉 お申し込みありがとうございます！ 🎉
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            お申し込みが完了いたしました。
            <br />
            担当者より改めてご連絡させていただきますので、今しばらくお待ちください。
          </p>
          <Link href="/" className="text-blue-600 hover:underline">
            ホームに戻る
          </Link>
        </div>
      </main>

      
    </div>
  );
}
