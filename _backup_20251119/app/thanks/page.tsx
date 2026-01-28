import Link from 'next/link';
import SEO from '@/components/SEO';
import { breadcrumbJsonLd } from '@/lib/json-ld';
import OptimizedImage from '@/components/OptimizedImage';

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
        <div className="max-w-2xl mx-auto p-8 sm:p-12 bg-white rounded-2xl shadow-2xl text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            扉が開かれました
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            お申し込み、誠にありがとうございます！
          </p>
          
          <div className="my-8">
            <OptimizedImage
              src="https://ik.imagekit.io/FLATUPGYM/6b740781-fd30-4ede-b37a-fb323a45f96f.png"
              alt="新しい自分への扉が開かれました"
              width={1200}
              height={675}
              className="rounded-lg shadow-lg"
            />
          </div>

          <p className="text-lg text-gray-700 mb-8">
            担当者より改めてご連絡させていただきます。
            <br />
            新しいあなたにお会いできることを楽しみにしています。
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
            ホームに戻る
          </Link>
        </div>
      </main>

      
    </div>
  );
}
