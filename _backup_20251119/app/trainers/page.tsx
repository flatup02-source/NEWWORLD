
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/OptimizedImage';
import RobustImage from '@/components/RobustImage';
import SEO from '@/components/SEO';
import { breadcrumbJsonLd } from '@/lib/json-ld';

export default function Trainers() {
  const trainersBreadcrumbs = breadcrumbJsonLd([
    { name: 'Home', url: 'https://flat-up.jp/' },
    { name: 'Trainers', url: 'https://flat-up.jp/trainers' },
  ]);

  return (
    <div className="min-h-screen">
      <SEO
        title="トレーナー紹介｜あなたの気持ちがわかるプロが伴走します - FLATUPGYM"
        description="私たちも過去には同じ悩みを持っていました。あなたの心と身体に本気で向き合う、経験豊富なトレーナー陣をご紹介します。"
        jsonLd={trainersBreadcrumbs}
      />
      

      <main>
        {/* ヒーローセクション - 画像差し替え */}
        <section
          className="relative min-h-screen bg-cover bg-center flex items-center"
        >
          <OptimizedImage
            src="https://ik.imagekit.io/FLATUPGYM/batch_Triumphant%20Joy%20_%20the%20Portrait%20of%20Celebratory%20Bliss.png"
            alt="トレーナー紹介ページの背景画像"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 via-blue-500/20 to-purple-400/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                プロフェッショナル<br />
                🥊 トレーナー紹介 🥊
              </h1>
              <p className="text-2xl md:text-3xl text-white/95 mb-12 leading-relaxed font-medium">
                経験豊富な指導者が<br />
                あなたの目標達成をサポート♪
              </p>
            </div>
          </div>
        </section>

        {/* メイントレーナー - 女性オーナーAIKA */}
        <section className="py-24 bg-gradient-to-br from-pink-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-8">
                💖 FLAT-UP代表・女性オーナー 💖
              </h2>
            </div>

            <div className="bg-gradient-to-br from-white to-pink-50 p-8 sm:p-12 rounded-3xl shadow-2xl border-4 border-pink-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div>
                    <RobustImage
                      src="/batch_%E3%82%B7%E3%82%99%E3%83%A0%E3%80%80.JPG?updatedAt=1756928110310"
                      alt="AIKA代表・女性オーナー"
                      width={400}
                      height={500}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>

                <div className="order-1 lg:order-2 space-y-8">
                  <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-8 rounded-2xl border-4 border-pink-300 shadow-xl">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                      <i className="ri-heart-3-fill w-8 h-8 flex items-center justify-center text-pink-700 mr-3"></i>
                      AIKA
                    </h3>
                    <p className="text-xl text-gray-700 mb-4 font-medium">代表・女性オーナー</p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      <b>「強くなりたい」と願う、すべての女性のために。</b><br/><br/>
                      はじめまして、FLATUPGYM代表のAIKAです。<br/><br/>
                      私が初めてグローブをはめた日、まさか自分が格闘技ジムのオーナーになるなんて、夢にも思っていませんでした。<br/><br/>
                      かつての私は、周りの目を気にしてばかりで、自分に自信が持てない、ごく普通の会社員でした。「どうせ私なんて…」が口癖で、新しいことに挑戦する勇気もありませんでした。<br/><br/>
                      <b>転機は、一本の映画でした。</b><br/><br/>
                      スクリーンの中で、自分の弱さと向き合い、力強く立ち向かっていく主人公の姿に、私は心を奪われました。「私も、変わりたい」。そう強く思ったのが、すべての始まりです。<br/><br/>
                      勇気を出して格闘技ジムの門を叩いたものの、そこは男性ばかりの空間。正直、最初は怖かったです。でも、トレーナーの丁寧な指導と、汗を流す仲間たちの姿に、私の不安は少しずつ消えていきました。<br/><br/>
                      サンドバッグを打つ音、ミットに響く乾いた衝撃音。それは、昨日までの弱い自分との決別の音でした。できなかったことができるようになる喜び、自分の限界を超えていく達成感。格闘技は、私に「自信」という最高のプレゼントをくれました。<br/><br/>
                      <b>「この感動を、かつての私と同じように悩んでいる女性たちに届けたい」</b><br/><br/>
                      その想いが、FLATUPGYMの原点です。<br/><br/>
                      FLATUPGYMは、ただ体を鍛える場所ではありません。ここは、あなたが本来持っている強さと美しさを引き出し、心から自分を好きになれる場所です。<br/><br/>
                      「怖い」というイメージを「楽しい！」に。「不安」を「自信」に。<br/><br/>
                      私自身が経験してきたからこそ、あなたの気持ちが痛いほどわかります。だから、絶対に一人にはさせません。<br/><br/>
                      FLATUPGYMで、一緒に、新しい自分を見つけませんか？
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* サブトレーナー紹介 */}
        <section className="py-24 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-8">
                🥊 専門トレーナー陣 🥊
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* キッズ専門トレーナー MASAKI */}
              <div className="bg-gradient-to-br from-white to-blue-50 p-10 rounded-3xl shadow-2xl border-4 border-blue-200">
                <div className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0 mb-6">
                    <OptimizedImage
                      src="/MASAKIPRO3jpg.jpg?updatedAt=1756928056510"
                      alt="キッズクラスインストラクター MASAKI"
                      width={192}
                      height={192}
                      className="w-48 h-48 rounded-2xl object-cover object-top border-6 border-blue-400 shadow-xl"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">キッズクラスインストラクター MASAKI</h3>
                    <p className="text-lg text-blue-600 font-bold mb-4">空手・キックボクシング専門</p>
                  </div>
                </div>
              </div>

              {/* 総合格闘技専門トレーナー HITOSHI */}
              <div className="bg-gradient-to-br from-white to-red-50 p-10 rounded-3xl shadow-2xl border-4 border-red-200">
                <div className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0 mb-6">
                    <OptimizedImage
                      width={192}
                      height={192}
                      src="/matumotohitosi.jpg"
                      alt="総合格闘技専門トレーナー HITOSHI"
                      className="w-48 h-48 rounded-2xl object-cover object-top border-6 border-red-400 shadow-xl"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">総合格闘技専門トレーナー HITOSHI</h3>
                    <p className="text-lg text-red-600 font-bold mb-4">キックボクシング・総合格闘技・MMA専門</p>
                  </div>
                </div>
              </div>

              {/* 柔術専門トレーナー MIICHI */}
              <div className="bg-gradient-to-br from-white to-purple-50 p-10 rounded-3xl shadow-2xl border-4 border-purple-200">
                <div className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0 mb-6">
                    <OptimizedImage
                      src="/miichi%20-%20%E7%B7%A8%E9%9B%86%E6%B8%88%E3%81%BF.jpg"
                      alt="柔術専門トレーナー MIICHI"
                      width={192}
                      height={192}
                      className="w-48 h-48 rounded-2xl object-cover object-top border-6 border-purple-400 shadow-xl"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">柔術専門トレーナー MIICHI</h3>
                    <p className="text-lg text-purple-600 font-bold mb-4">柔術・BJJ専門</p>
                    <p className="text-gray-700 leading-relaxed">
                      ブラジリアン柔術（今成柔術の正統継承者）奥深い足関節の技術と哲学を丁寧に指導。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* チャンピオン育成セクション */}
        <section className="py-24 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 mb-12">
              これを目指せプロ選手 🏆 チャンピオン育成クラス
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
              <div className="lg:w-1/2">
                <OptimizedImage
                  src="/MASAKIPRO3jpg.jpg?updatedAt=1756928056510"
                  alt="チャンピオン育成クラス"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl border-4 border-red-300"
                />
              </div>
              <div className="lg:w-1/2 text-left space-y-6">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                  FLATUPGYMでは、プロの舞台を目指す選手のための育成プログラムを提供しています。
                  経験豊富なトレーナー陣が、あなたの夢と情熱を全力でサポート。基礎から応用、メンタル強化まで、チャンピオンになるために必要な全てを指導します。
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <i className="ri-check-double-line text-green-500 text-2xl mr-2"></i>
                    <span>個別のトレーニングプラン</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-double-line text-green-500 text-2xl mr-2"></i>
                    <span>実践的なスパーリング指導</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-double-line text-green-500 text-2xl mr-2"></i>
                    <span>栄養・コンディショニング指導</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-double-line text-green-500 text-2xl mr-2"></i>
                    <span>メンタルサポート</span>
                  </li>
                </ul>
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-bold">
                  熱い戦いが今、始まる。夢と情熱がぶつかり合う舞台へ、私たちと一緒に挑戦しましょう！
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  詳細を見る・問い合わせる
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}
