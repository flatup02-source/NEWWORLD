'use client';

import SEO, { gymJsonLd } from '../../components/SEO';
import OptimizedImage from '../../components/OptimizedImage';
import { breadcrumbJsonLd } from '../../lib/json-ld';

export default function Concept() {
  const conceptBreadcrumbs = breadcrumbJsonLd([
    { name: 'Home', url: 'https://flat-up.jp/' },
    { name: 'Concept', url: 'https://flat-up.jp/concept' },
  ]);

  return (
    <div className="bg-white text-gray-800">
      <SEO
        title="コンセプト｜成田の女性・初心者向けキックボクシングジムFLATUPGYM"
        description="FLATUPGYMが選ばれる理由をご紹介。成田で女性や初心者でも安心して通えるキックボクシングジムです。女性専用クラスや護身術も学べます。"
        jsonLd={{ ...gymJsonLd, ...conceptBreadcrumbs }}
      />

      {/* Page Header */}
      <header className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">コンセプト</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">FLATUPGYMが選ばれる理由</p>
        </div>
      </header>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

          {/* Section 1: Women's Classes */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-4">女性クラスが充実</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">格闘技ジムでは珍しい女性専用クラスを多数ご用意。女性が安心して楽しめる環境を徹底しています。</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-pink-50 p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-pink-800 mb-2">レディース専用時間帯</h3>
              </div>
              <div className="bg-pink-50 p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-pink-800 mb-2">産後ママクラス</h3>
              </div>
              <div className="bg-pink-50 p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-pink-800 mb-2">護身術専門クラス</h3>
              </div>
            </div>
          </section>

          {/* Section 2: Self-Defense Class */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">実用的な護身術クラス</h2>
              <p className="text-lg text-gray-600 mb-6">日常で本当に使える護身術を、女性の視点で分かりやすく指導します。</p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> 痴漢対策の実践的技術</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> 危険察知能力の向上</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> 自信につながる心の強さ</li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <OptimizedImage src="https://ik.imagekit.io/FLATUPGYM/IMG_9514%202.png?updatedAt=1756928103065" alt="実用的な護身術クラス" width={600} height={400} className="rounded-lg shadow-xl" />
            </div>
          </section>

          {/* Section 3: Gym Environment */}
          <section className="text-center bg-gray-50 py-16 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">女性向けのジム内環境</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">清潔で明るく、女性が「通いたくなる」空間作りにこだわりました。</p>
          </section>

          {/* Section 4: Owner's Message */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <OptimizedImage src="https://ik.imagekit.io/FLATUPGYM/batch_IMG_7569%E3%81%AE%E3%82%B3%E3%83%92%E3%82%9A%E3%83%BC.jpeg?updatedAt=1756928163913" alt="女性オーナー AIKA" width={600} height={600} className="rounded-full shadow-2xl mx-auto" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">💝 私たちの想い 💝</h2>
              <h3 className="text-2xl font-semibold text-pink-600 mb-4">女性オーナー AIKA</h3>
              <p className="text-2xl text-gray-700 leading-relaxed">「みんなが笑顔になれる場所を作りたい！」</p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
