'use client';


import OptimizedImage from '@/components/OptimizedImage';
import SEO from '@/components/SEO';
import { breadcrumbJsonLd } from '@/lib/json-ld';

export default function Ladies() {
  const ladiesBreadcrumbs = breadcrumbJsonLd([
    { name: 'Home', url: 'https://flat-up.jp/' },
    { name: 'Ladies', url: 'https://flat-up.jp/ladies' },
  ]);

  return (
    <div className="min-h-screen">
      <SEO
        title="レディースクラス｜女性専用で安心！成田のキックボクシング・柔術ジム"
        description="成田のFLATUPGYMレディースクラスで、女性だけの安心空間でキックボクシングや柔術を始めませんか？ストレス解消、シェイプアップ、護身術にも最適。初心者大歓迎です。"
        jsonLd={ladiesBreadcrumbs}
      />
      

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
          <OptimizedImage
            src="/reddy.png?tr=q-auto,f-auto"
            alt="レディースクラスでトレーニングに励む女性"
            fill
            sizes="100vw"
            className="object-cover z-0 brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
          <div className="relative z-20 max-w-4xl mx-auto px-4 text-white">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
              強さは美しさ
              <br />
              しなやかに私をアップデート
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto drop-shadow-md tracking-wide">
              新しい自分へ。成田のFLATUPレディースクラスで、最高の私を見つけよう。
            </p>
            <a
              href="/trial-lesson"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-transform duration-300 cursor-pointer shadow-2xl transform hover:scale-105 animate-bounce"
            >
              強くて優しい、新しい自分に会いに行く
            </a>
          </div>
        </section>

        {/* Empathy Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">こんな気持ち、ありませんか？</h2>
              <p className="text-xl text-gray-600">変わりたいのに、何から始めればいいか分からない...</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                <i className="ri-smartphone-line text-5xl text-pink-500 mb-6 inline-block"></i>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">SNSと比べて落ち込む</h3>
                <p className="text-gray-600 leading-relaxed">キラキラした投稿を見るたび、自分だけが取り残されている気がする。</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                <i className="ri-emotion-unhappy-line text-5xl text-purple-500 mb-6 inline-block"></i>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">ストレスで笑顔が減った</h3>
                <p className="text-gray-600 leading-relaxed">仕事や人間関係のストレスで、心から笑える瞬間が少なくなった。</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                <i className="ri-question-mark text-5xl text-gray-500 mb-6 inline-block"></i>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">自分に自信が持てない</h3>
                <p className="text-gray-600 leading-relaxed">「私なんて」が口癖。新しい挑戦や出会いに臆病になっている。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">日常が輝き出す3つの理由</h2>
              <p className="text-xl text-gray-600">FLATUPが、あなたの「変わりたい」を全力でサポートします。</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="border-t-4 border-pink-500 pt-8">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-sparkling-2-fill text-4xl text-pink-700"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">心と身体を解放する爽快感</h3>
                <p className="text-gray-600 leading-relaxed">サンドバッグに打ち込むたび、ストレスも過去の悩みも吹き飛ぶ。運動後の心地よい疲労感は、最高のデトックスです。</p>
              </div>
              <div className="border-t-4 border-purple-500 pt-8">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-award-fill text-4xl text-purple-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">自信がオーラに変わる</h3>
                <p className="text-gray-600 leading-relaxed">できなかった動きができるようになる。小さな成功体験が、内側から輝く本物の自信に変わります。</p>
              </div>
              <div className="border-t-4 border-gray-500 pt-8">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-women-fill text-4xl text-gray-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">女性だけの安心できる空間</h3>
                <p className="text-gray-600 leading-relaxed">周りの目を気にせず、思いっきり汗を流せる。同じ目標を持つ仲間と励まし合えるから、一人じゃありません。</p>
              </div>
            </div>
          </div>
        </section>

        {/* New Section: Women's Gym Environment */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">女性が「通いたくなる」空間</h2>
              <p className="text-xl text-gray-600">清潔で明るく、細部までこだわった女性専用のジム環境です。</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
            <OptimizedImage
              width={1200}
              height={800}
              src="https://ik.imagekit.io/FLATUPGYM/reddy.png?tr=w-3840,f-auto"
              alt="女性向けジムのトレーニング風景"
              className="w-full h-full object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-500"
            />
              </div>
              <div>
                {/* The list items are removed from here */}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800">「人生が変わった」の声</h2>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
                <div className="md:flex items-center gap-8">
                    <div className="md:w-1/3 text-center mb-6 md:mb-0">
                        <OptimizedImage
                            src="/MISAKI3.jpg?tr=q-auto,f-auto"
                            alt="田中美咲さん"
                            width={150}
                            height={150}
                            className="w-36 h-36 rounded-full object-cover object-top mx-auto border-4 border-pink-400 shadow-lg"
                            sizes="150px"
                        />
                        <h4 className="font-bold text-gray-800 text-lg mt-4">田中美咲さん</h4>
                        <p className="text-sm text-gray-500">(28歳・IT企業勤務)</p>
                    </div>
                    <div className="md:w-2/3">
                        <i className="ri-double-quotes-l text-4xl text-pink-300 mb-4"></i>
                        <p className="text-gray-700 text-lg italic leading-relaxed mb-4">
                          「自分と向き合う時間が増えて、心も体もスッキリ。以前よりずっと前向きになれました！」
                        </p>
                        <i className="ri-double-quotes-r text-4xl text-pink-300 float-right"></i>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">さあ、次はあなたの番。</h2>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
              必要なのは、ほんの少しの勇気だけ。最高の自分が、あなたを待っています。
            </p>
            <a
              href="/trial-lesson"
              className="inline-block bg-white text-pink-700 px-12 py-5 rounded-full text-xl font-bold transition-transform duration-300 cursor-pointer shadow-2xl transform hover:scale-105"
            >
              強くて優しい、新しい自分に会いに行く
            </a>
          </div>
        </section>
      </main>

      
    </div>
  );
}