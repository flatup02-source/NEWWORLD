'use client';


import SEO from '@/components/SEO';
import { breadcrumbJsonLd } from '@/lib/json-ld';

export default function Pricing() {
  const pricingBreadcrumbs = breadcrumbJsonLd([
    { name: 'Home', url: 'https://flat-up.jp/' },
    { name: 'Pricing', url: 'https://flat-up.jp/pricing' },
  ]);

  return (
    <div className="min-h-screen">
      <SEO
        title="プログラム・料金｜成田の女性・初心者向けキックボクシングジムFLATUPGYM"
        description="あなたの目的やライフスタイルに合わせた最適なプランをご提案。キックボクシング、ブラジリアン柔術、キッズクラスなど、多彩なプログラムをご用意しています。"
        jsonLd={pricingBreadcrumbs}
      />
      

      <main>
        {/* ヒーローセクション */}
        <section
          className="relative min-h-screen bg-cover bg-center flex items-center"
          style={{
            backgroundImage: "url('https://ik.imagekit.io/FLATUPGYM/tr:q-auto,f-auto/ryoukinn.png')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-green-500/20 to-yellow-400/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                料金・システム
                <br />
                明朗会計で安心 
              </h1>
              <p className="text-2xl md:text-3xl text-white/95 mb-12 leading-relaxed font-medium">
                分かりやすい料金設定で
                <br />
                あなたに合ったプランを♪
              </p>
            </div>
          </div>
        </section>

        {/* 料金プラン */}
        <section className="py-24 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-8">
                料金プラン
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                入会金・年会費なし！月額制で安心して続けられます♪
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* キッズプラン */}
              <div className="bg-gradient-to-br from-pink-100 to-purple-200 p-10 rounded-3xl shadow-2xl border-4 border-pink-300 transform hover:scale-105 transition-all duration-300">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <i className="ri-emotion-happy-fill w-10 h-10 flex items-center justify-center text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4"> キッズプラン</h3>
                  <p className="text-sm text-gray-600 mb-6">小学1年生〜6年生（男女共通）</p>
                  <div className="text-4xl font-bold text-pink-700 mb-2">¥7,700</div>
                  <p className="text-gray-600">月額（税込）</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-pink-700"></i>
                    <span className="text-gray-700">週2回レッスン</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-pink-700"></i>
                    <span className="text-gray-700">護身術・体力向上</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-pink-700"></i>
                    <span className="text-gray-700">礼儀・マナー指導</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-pink-700"></i>
                    <span className="text-gray-700">グローブ・プロテクター込み</span>
                  </li>
                </ul>
                <a
                  href="https://lin.ee/21ape6V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 rounded-full font-bold transition-all duration-300 cursor-pointer text-center block whitespace-nowrap"
                >
                  強くて優しい、新しい自分に会いに行く
                </a>
              </div>

              {/* レディースプラン */}
              <div className="bg-gradient-to-br from-blue-100 to-green-200 p-10 rounded-3xl shadow-2xl border-4 border-blue-300 transform hover:scale-105 transition-all duration-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    人気No.1
                  </span>
                </div>
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <i className="ri-women-fill w-10 h-10 flex items-center justify-center text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">レディースプラン</h3>
                  <p className="text-sm text-gray-600 mb-6">女性専用</p>
                  <div className="text-4xl font-bold text-blue-600 mb-2">¥8,800</div>
                  <p className="text-gray-600">月額（税込）</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-blue-600"></i>
                    <span className="text-gray-700">月3回レッスン（月水金）</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-blue-600"></i>
                    <span className="text-gray-700">護身術・ストレス解消</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-blue-600"></i>
                    <span className="text-gray-700">美容・シェイプアップ</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-blue-600"></i>
                    <span className="text-gray-700">女性専用時間帯</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-blue-600"></i>
                    <span className="text-gray-700">子連れ参加OK</span>
                  </li>
                </ul>
                <a
                  href="https://lin.ee/21ape6V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-700 text-white py-3 rounded-full font-bold transition-all duration-300 cursor-pointer text-center block whitespace-nowrap"
                >
                  強くて優しい、新しい自分に会いに行く
                </a>
              </div>

              {/* 男性プラン */}
              <div className="bg-gradient-to-br from-gray-100 to-blue-200 p-10 rounded-3xl shadow-2xl border-4 border-gray-300 transform hover:scale-105 transition-all duration-300">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-gray-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 animate-spin" style={{ animationDuration: '3s' }}>
                    <i className="ri-boxing-fill w-10 h-10 flex items-center justify-center text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">メンズプラン</h3>
                  <p className="text-sm text-gray-600 mb-6">高校生以上の男性</p>
                  <div className="text-4xl font-bold text-gray-700 mb-2">¥9,900</div>
                  <p className="text-gray-600">月額（税込）</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-gray-600"></i>
                    <span className="text-gray-700">週3回レッスン</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-gray-600"></i>
                    <span className="text-gray-700">本格キックボクシング</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-gray-600"></i>
                    <span className="text-gray-700">筋力アップ・ダイエット</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-gray-600"></i>
                    <span className="text-gray-700">ストレス発散効果</span>
                  </li>
                </ul>
                <a
                  href="https://lin.ee/21ape6V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-gray-600 to-blue-700 hover:from-gray-700 hover:to-blue-800 text-white py-3 rounded-full font-bold transition-all duration-300 cursor-pointer text-center block whitespace-nowrap"
                >
                  強くて優しい、新しい自分に会いに行く
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ビジター・回数券システム */}
        <section className="py-24 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                ビジター・回数券システム
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                まずは気軽に体験したい方におすすめ！
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* ビジタープラン */}
              <div className="bg-gradient-to-br from-white to-yellow-100 p-10 rounded-3xl shadow-2xl border-4 border-yellow-300 transform hover:scale-105 transition-all duration-300">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <i className="ri-ticket-fill w-10 h-10 flex items-center justify-center text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">ビジター</h3>
                  <p className="text-sm text-gray-600 mb-6">1回だけ体験したい方</p>
                  <div className="text-4xl font-bold text-yellow-600 mb-2">¥3,000</div>
                  <p className="text-gray-600">1回（税込）</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-yellow-600"></i>
                    <span className="text-gray-700">全クラス参加可能</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-yellow-600"></i>
                    <span className="text-gray-700">グローブレンタル込み</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-yellow-600"></i>
                    <span className="text-gray-700">当日予約OK</span>
                  </li>
                </ul>
                <a
                  href="https://lin.ee/21ape6V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white py-3 rounded-full font-bold transition-all duration-300 cursor-pointer text-center block whitespace-nowrap"
                >
                  強くて優しい、新しい自分に会いに行く
                </a>
              </div>

              {/* 回数券6回 */}
              <div className="bg-gradient-to-br from-white to-green-100 p-10 rounded-3xl shadow-2xl border-4 border-green-300 transform hover:scale-105 transition-all duration-300">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <i className="ri-coupon-3-fill w-10 h-10 flex items-center justify-center text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">回数券（6回）</h3>
                  <p className="text-sm text-gray-600 mb-6">半年間有効</p>
                  <div className="text-4xl font-bold text-green-600 mb-2">¥15,000</div>
                  <p className="text-gray-600">6回分（税込）</p>
                  <p className="text-sm text-green-600 font-bold mt-2">1回あたり¥2,500</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-green-600"></i>
                    <span className="text-gray-700">自由なペースで通える</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-green-600"></i>
                    <span className="text-gray-700">ビジターより500円お得</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-green-600"></i>
                    <span className="text-gray-700">半年間ゆっくり使える</span>
                  </li>
                </ul>
                <a
                  href="https://lin.ee/21ape6V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-3 rounded-full font-bold transition-all duration-300 cursor-pointer text-center block whitespace-nowrap"
                >
                  強くて優しい、新しい自分に会いに行く
                </a>
              </div>

              {/* 回数券12回 */}
              <div className="bg-gradient-to-br from-white to-purple-100 p-10 rounded-3xl shadow-2xl border-4 border-purple-300 transform hover:scale-105 transition-all duration-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-red-400 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    最もお得
                  </span>
                </div>
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-spin" style={{ animationDuration: '3s' }}>
                    <i className="ri-vip-crown-2-fill w-10 h-10 flex items-center justify-center text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">回数券（12回）</h3>
                  <p className="text-sm text-gray-600 mb-6">1年間有効</p>
                  <div className="text-4xl font-bold text-purple-600 mb-2">¥30,000</div>
                  <p className="text-gray-600">12回分（税込）</p>
                  <p className="text-sm text-purple-600 font-bold mt-2">1回あたり¥2,500</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-purple-600"></i>
                    <span className="text-gray-700">1年間たっぷり使える</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-purple-600"></i>
                    <span className="text-gray-700">ビジターより6,000円お得</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-purple-600"></i>
                    <span className="text-gray-700">月会費より安い場合も</span>
                  </li>
                </ul>
                <a
                  href="https://lin.ee/21ape6V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-purple-500 to-red-600 hover:from-purple-600 hover:to-red-700 text-white py-3 rounded-full font-bold transition-all duration-300 cursor-pointer text-center block whitespace-nowrap"
                >
                  強くて優しい、新しい自分に会いに行く
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* システム・特典 */}
        <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
                安心のシステム・特典
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              <div className="bg-white/90 p-8 rounded-3xl shadow-2xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-gift-fill w-8 h-8 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">入会金半額</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  通常¥10,000の入会金が今なら半額！始めやすい料金設定です。
                </p>
                <div className="bg-yellow-100 p-3 rounded-xl border-2 border-yellow-300">
                  <p className="text-sm text-yellow-800 font-bold">
                    体験からそのまま入会で入会金半額！
                  </p>
                </div>
              </div>

              <div className="bg-white/90 p-8 rounded-3xl shadow-2xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-hand-heart-fill w-8 h-8 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">体験時は手ぶらでOK</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  グローブ・プロテクターは無料レンタル。タオルと飲み物だけお持ちください。
                </p>
                <div className="bg-red-100 p-3 rounded-xl border-2 border-red-300">
                  <p className="text-sm text-red-800 font-bold">
                    入会後はマイグローブが必要です
                  </p>
                </div>
              </div>

              <div className="bg-white/90 p-8 rounded-3xl shadow-2xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-chat-heart-fill w-8 h-8 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">ひとりにさせません</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  いつでもジム公式LINEで相談・サポート可能。ひとりで悩まず气軽にお声がけください。
                </p>
                <div className="bg-green-100 p-3 rounded-xl border-2 border-green-300">
                  <p className="text-sm text-green-800 font-bold">
                    24時間LINEサポート対応
                  </p>
                </div>
              </div>

              <div className="bg-white/90 p-8 rounded-3xl shadow-2xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <i className="ri-boxing-fill w-8 h-8 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">グローブプレゼント</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  入会後グローブを購入していただきますが、毎月先着5名様限定でプレゼント！
                </p>
                <div className="bg-purple-100 p-3 rounded-xl border-2 border-purple-300">
                  <p className="text-sm text-purple-800 font-bold">
                    ひとりにはさせません！
                  </p>
                </div>
              </div>
            </div>

            {/* 体験レッスンについて */}
            <div className="bg-gradient-to-br from-white to-blue-50 p-12 rounded-3xl shadow-2xl border-4 border-blue-200 max-w-4xl mx-auto mt-16">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
                <i className="ri-information-fill w-8 h-8 flex items-center justify-center text-blue-600 mr-3"></i>
                体験レッスンについて
              </h3>
              <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-300 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
                  <span className="font-bold text-blue-600">無料体験レッスンは1回限り</span>ですが、不安な方は<span className="font-bold text-orange-600">有料体験レッスン（1回¥3,000）</span>も受けられます。<br />
                  <span className="font-bold text-green-600">納得してからの入会をおすすめします。</span>
                </p>
                <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-300 mb-6">
                  <h4 className="font-bold text-gray-800 mb-3 text-center">体験レッスン時間変更のお知らせ</h4>
                  <p className="text-center text-gray-700">
                    <span className="line-through text-gray-500">体験時間：60分間</span><br />
                    <span className="font-bold text-red-600 text-lg">↓ 変更 ↓</span><br />
                    <span className="font-bold text-green-600 text-xl">体験時間：30分間</span>
                  </p>
                  <p className="text-sm text-gray-600 text-center mt-2">
                    より気軽に体験していただけるようになりました♪
                  </p>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg border-2 border-yellow-300">
                  <p className="text-center font-bold text-green-800 text-lg">
                    グローブプレゼント（先着10名様限定）
                  </p>
                  <p className="text-center text-gray-700">
                    信頼の証として
                  </p>
                </div>
                <div className="text-center mt-6">
                  <a
                    href="https://lin.ee/21ape6V"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-xl"
                  >
                    強くて優しい、新しい自分に会いに行く
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* お支払い方法 */}
        <section className="py-24 bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-600 mb-8">
                お支払い方法
              </h2>
              <div className="bg-blue-100 p-6 rounded-2xl border-2 border-blue-300 max-w-3xl mx-auto mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">会費PAYシステム導入</h3>
                <p className="text-gray-700 leading-relaxed">
                  システムの関係で、<span className="font-bold text-red-600">退会・休会される場合は前月の末までにお伝えください</span>
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white to-blue-50 p-12 rounded-3xl shadow-2xl border-4 border-blue-200 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <i className="ri-bank-card-fill w-8 h-8 flex items-center justify-center text-blue-600 mr-3"></i>
                    口座引き落とし
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center space-x-3">
                      <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-blue-600"></i>
                      <span>毎月27日自動引き落とし</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-blue-600"></i>
                      <span>各種銀行・信用金庫対応</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-blue-600"></i>
                      <span>手数料無料</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <i className="ri-bank-card-2-fill w-8 h-8 flex items-center justify-center text-purple-600 mr-3"></i>
                    クレジットカード払い
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center space-x-3">
                      <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-purple-600"></i>
                      <span>レッスン時にお支払いOK</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-purple-600"></i>
                      <span>VISA・MasterCard・JCB対応</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <i className="ri-check-fill w-5 h-5 flex items-center justify-center text-purple-600"></i>
                      <span>手数料無料</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 体験レッスン案内 */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-green-400/20 animate-pulse"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              強くて優しい、新しい自分に会いに行く
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              料金やシステムについて詳しく説明いたします。<br />
              不安な点は何でもお聞きください♪
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
              <a
                href="https://lin.ee/21ape6V"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-2xl transform hover:scale-105 border-4 border-yellow-300 animate-bounce"
              >
                強くて優しい、新しい自分に会いに行く
              </a>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}