
'use client';


import SEO from '@/components/SEO';
import { breadcrumbJsonLd } from '@/lib/json-ld';

export default function Contact() {
  const contactBreadcrumbs = breadcrumbJsonLd([
    { name: 'Home', url: 'https://flat-up.jp/' },
    { name: 'お問い合わせ', url: 'https://flat-up.jp/contact' },
  ]);

  return (
    <div className="min-h-screen">
      <SEO
        title="お問い合わせ｜無料体験レッスンのお申し込み - FLATUPGYM"
        description="FLATUPGYMの無料体験レッスンのお申し込みはこちらから。LINE登録後、Googleフォームにて簡単にお申し込みいただけます。ご不明な点もお気軽にお問い合わせください。"
        jsonLd={contactBreadcrumbs}
      />
      

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] bg-cover bg-center flex items-center justify-center text-center" style={{ backgroundImage: "url('https://ik.imagekit.io/FLATUPGYM/blog-placeholder.jpg?tr=q-auto,f-auto')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">お問い合わせ</h1>
            <p className="text-xl md:text-2xl">無料体験レッスンのお申し込みはこちら</p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8">無料体験レッスンのお申し込み手順</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-pink-700 mb-4">STEP 1: LINE公式アカウントを友だち追加</h3>
                <p className="text-gray-700 leading-relaxed mb-4">まずはFLATUPGYMのLINE公式アカウントを友だち追加してください。最新情報やお得なキャンペーン情報も受け取れます。</p>
                <a
                  href="https://lin.ee/21ape6V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-xl font-bold transition-transform duration-300 cursor-pointer shadow-lg transform hover:scale-105 animate-bounce"
                >
                  <i className="ri-line-fill w-6 h-6 inline-block align-middle mr-2"></i>
                  LINEで友だち追加
                </a>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">STEP 2: Googleフォームで体験レッスンを申し込む</h3>
                <p className="text-gray-700 leading-relaxed mb-4">LINEの友だち追加後、メッセージに表示されるGoogleフォームのリンクから、必要事項をご記入の上、体験レッスンをお申し込みください。</p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSein6DGBmLo1DO1ErFK_vxvefNrs4Y733QLMaNTSkHeDibQeA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-purple-500 to-red-600 hover:from-purple-600 hover:to-red-700 text-white px-8 py-4 rounded-full text-xl font-bold transition-transform duration-300 cursor-pointer shadow-lg transform hover:scale-105"
                >
                  <i className="ri-form-fill w-6 h-6 inline-block align-middle mr-2"></i>
                  Googleフォームで申し込む
                </a>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">STEP 3: 予約完了！</h3>
                <p className="text-gray-700 leading-relaxed">お申し込み内容を確認後、FLATUPGYMからご連絡いたします。ご予約完了です！当日、ジムでお会いできるのを楽しみにしています。</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">ご不明な点はお気軽にお問い合わせください</h2>
              <p className="text-xl text-gray-700 mb-8">LINEチャットまたはお電話にて、お気軽にご質問ください。</p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="https://lin.ee/21ape6V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-xl font-bold transition-transform duration-300 cursor-pointer shadow-lg transform hover:scale-105"
                >
                  <i className="ri-line-fill w-6 h-6 inline-block align-middle mr-2"></i>
                  LINEで質問する
                </a>
                <a
                  href="tel:070-9035-3485"
                  className="inline-block bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-full text-xl font-bold transition-transform duration-300 cursor-pointer shadow-lg transform hover:scale-105"
                >
                  <i className="ri-phone-fill w-6 h-6 inline-block align-middle mr-2"></i>
                  電話で質問する
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      
    </div>
  );
}
