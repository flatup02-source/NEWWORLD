'use client';

import Footer from '@/components/Footer';
import OptimizedImage from '@/components/OptimizedImage';
import { useEffect } from 'react';
import SEO from '@/components/SEO';
import { breadcrumbJsonLd } from '@/lib/json-ld';

export default function Uizin() {
  useEffect(() => {
    // Critical performance optimizations
    const prefetchResources = () => {
      const linkElements = [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://static.readdy.ai' },
        { rel: 'dns-prefetch', href: 'https://docs.google.com' }
      ];

      linkElements.forEach(({ rel, href }) => {
        if (!document.querySelector(`link[href="${href}"]`)) {
          const link = document.createElement('link');
          link.rel = rel;
          link.href = href;
          document.head.appendChild(link);
        }
      });
    };

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements with animation class
    document.querySelectorAll('.observe-animation').forEach((el) => {
      observer.observe(el);
    });

    prefetchResources();

    return () => {
      observer.disconnect();
    };
  }, []);

  const uizinBreadcrumbs = breadcrumbJsonLd([
    { name: 'Home', url: 'https://flat-up.jp/' },
    { name: 'UIZIN', url: 'https://flat-up.jp/uizin' },
  ]);

  return (
    <div id="uizin-lp-wrapper" className="min-h-screen">
      <SEO
        title="UIZIN 格闘技大会｜成田で開催！初心者・女性・キッズ大歓迎"
        description="FLATUPGYM主催の格闘技大会「UIZIN」。初心者、女性、キッズも安心して参加できるアマチュアキックボクシング大会です。熱い戦いと感動を体験しよう。"
        jsonLd={uizinBreadcrumbs}
      />

      <main>
        {/* ヒーローセクション - 新しい画像を使用 */}
        <section
          className="relative min-h-screen bg-cover bg-center flex items-center observe-animation"
          style={{ 
            backgroundImage: "url('https://ik.imagekit.io/FLATUPGYM/UIZIN2.png.png?updatedAt=1756928062857')",
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-red-600/20 to-black/20 will-change-transform"></div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-4 sm:mb-8 leading-tight transform transition-transform duration-700">
                UIZIN
              </h1>
              <div className="text-2xl sm:text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 mb-4 sm:mb-8">
                格闘技大会
              </div>
              <p className="text-lg sm:text-2xl md:text-3xl text-white/95 mb-6 sm:mb-8 leading-relaxed font-medium px-4">
                熱い戦いが今、始まる<br />
                夢と情熱がぶつかり合う舞台
              </p>
              <div className="bg-yellow-400/90 text-black p-4 sm:p-6 rounded-2xl max-w-full sm:max-w-3xl mx-4 sm:mx-auto mb-8 sm:mb-12 border-4 border-yellow-300 shadow-2xl">
                <h3 className="text-xl sm:text-2xl font-bold mb-4"> UIZIN-初陣 </h3>
                <p className="text-sm sm:text-lg font-medium">
                  格闘技未経験の人が初めてリングに上がる舞台がUIZIN-初陣です<br className="hidden sm:block" />
                  初出場のキッズ・女性大歓迎！
                </p>
              </div>

              {/* 第1のGoogleフォームCTA - 最も目立つメインボタン */}
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 px-4 mb-8">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSein6DGBmLo1DO1ErFK_vxvefNrs4Y733QLMaNTSkHeDibQeA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white px-8 sm:px-16 py-6 sm:py-8 rounded-full text-xl sm:text-2xl font-bold transition-all duration-300 cursor-pointer text-center whitespace-nowrap shadow-2xl transform hover:scale-105 animate-pulse border-4 border-white"
                >
                  🥊 大会エントリーはこちら 🥊
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 大会写真セクション - 新しい画像を追加 */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-900 via-red-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                UIZIN大会の熱気
              </h2>
              <p className="text-lg text-gray-300">
                リングで繰り広げられる感動のドラマ
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <OptimizedImage
                  fill
                  src="/UIZIN1.png?updatedAt=1756928062826"
                  alt="熱戦が繰り広げられるリング"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-bold text-lg">熱戦が繰り広げられるリング</h3>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <OptimizedImage
                  fill
                  src="/DSC07248.png?updatedAt=1756928097886"
                  alt="未来のチャンピオンたち"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-bold text-lg">未来のチャンピオンたち</h3>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <OptimizedImage
                  fill
                  src="/DSC07240.png?updatedAt=1756928097730"
                  alt="栄光の瞬間"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-bold text-lg">栄光の瞬間</h3>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <OptimizedImage
                  fill
                  src="/UIZIN0.png?updatedAt=1756928062644"
                  alt="UIZIN大会の様子"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-bold text-lg">UIZIN大会の様子</h3>
                </div>
              </div>
            </div>

            {/* 第2のGoogleフォームCTA - 中間セクション用 */}
            <div className="text-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSein6DGBmLo1DO1ErFK_vxvefNrs4Y733QLMaNTSkHeDibQeA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 cursor-pointer shadow-xl transform hover:scale-105 border-3 border-blue-300"
              >
                📝 参加申込フォーム
              </a>
            </div>
          </div>
        </section>

        {/* 大会概要 - より明るく親しみやすく調整 */}
        <section className="py-12 sm:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 observe-animation">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-16">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-8">
                UIZIN大会概要
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
                アマチュアキックボクシング大会として、全ての参加者が安全かつ公平に競技を楽しめる環境を提供します
              </p>
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 text-gray-800 p-6 sm:p-8 rounded-3xl max-w-full lg:max-w-5xl mx-auto border-4 border-pink-200 shadow-2xl">
                <h3 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6 text-purple-700"> 🌟 初心者・女性・キッズ大歓迎！ 🌟 </h3>
                <p className="text-sm sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  UIZINでは選手の安全を最優先に考えた環境を徹底し、格闘技の魅力を安全かつ公平に体験していただけます。初めての方でも安心して参加できる、温かい雰囲気の大会です。経験豊富なスタッフがサポートし、一人ひとりの挑戦を応援します。
                </p>
                <p className="text-sm sm:text-lg leading-relaxed font-bold text-pink-700">
                  観客の皆さまには、選手たちの熱意と努力が甲子園で戦う高校球児のように映り、感動を与えることでしょう。この大会を通じ、格闘技への理解と情熱がさらに広がり、新しい自分に挑戦する勇気を見つけていただけることを心から願っております。
                </p>
                <p className="text-sm sm:text-lg text-gray-700 mt-4">
                  皆さまの温かいご支援に深く感謝申し上げます。一緒に素晴らしい大会を作り上げましょう！
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-6 sm:p-10 rounded-3xl shadow-2xl border-4 border-pink-200 transform transition-transform duration-500 hover:scale-105">
                <h3 className="text-xl sm:text-3xl font-bold text-purple-700 mb-6 sm:mb-8 flex items-center">
                  <i className="ri-heart-fill w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center text-pink-500 mr-3"></i>
                  大会の特徴
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-shield-star-fill w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2 text-sm sm:text-lg">安全第一の運営</h4>
                      <p className="text-gray-700 text-sm sm:text-base">経験豊富なレフェリーと医療スタッフが常駐し、選手の安全を最優先に運営。初心者の方も安心してご参加いただけます</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-team-fill w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2 text-sm sm:text-lg">レベル別階級制</h4>
                      <p className="text-gray-700 text-sm sm:text-base">初心者からプロまで、それぞれのレベルに応じた階級でフェアな試合を実現。女性やキッズも楽しく参加できます</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-gift-fill w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2 text-sm sm:text-lg">充実した賞金・賞品</h4>
                      <p className="text-gray-700 text-sm sm:text-base">各階級優勝者には賞金とトロフィー、参加者全員に記念品をプレゼント。頑張った分だけ報われます</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 sm:p-10 rounded-3xl shadow-2xl border-4 border-blue-200 transform transition-transform duration-500 hover:scale-105">
                <h3 className="text-xl sm:text-3xl font-bold text-indigo-700 mb-6 sm:mb-8 flex items-center">
                  <i className="ri-calendar-event-fill w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center text-blue-500 mr-3"></i>
                  開催情報
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 sm:p-6 rounded-2xl border-2 border-blue-200">
                    <h4 className="font-bold text-indigo-700 mb-3 text-lg sm:text-xl">📅 開催日程</h4>
                    <p className="text-gray-700 text-sm sm:text-lg">2025年春〜夏予定</p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2">※詳細日程は決定次第発表いたします</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 sm:p-6 rounded-2xl border-2 border-green-200">
                    <h4 className="font-bold text-emerald-700 mb-3 text-lg sm:text-xl">🏟️ 開催会場</h4>
                    <p className="text-gray-700 text-sm sm:text-lg">千葉県内特設会場</p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2">※会場詳細は参加者に個別通知いたします</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 sm:p-6 rounded-2xl border-2 border-purple-200">
                    <h4 className="font-bold text-purple-700 mb-3 text-lg sm:text-xl">💰 エントリー費</h4>
                    <p className="text-gray-700 text-sm sm:text-lg">とてもリーズナブルな価格設定</p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2">※詳細はお気軽にお問い合わせください</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 競技種目・階級 - より明るく調整 */}
        <section className="py-12 sm:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-16">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-8">
                🥊 アマチュアキックボクシング競技
              </h2>
              <div className="bg-gradient-to-r from-orange-100 to-pink-100 p-6 sm:p-8 rounded-2xl border-2 border-orange-200 max-w-full lg:max-w-4xl mx-auto mb-8 sm:mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-orange-700 mb-4 sm:mb-6"> 🌈 競技ルール - 安全で楽しく！ </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 rounded-xl border-2 border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-3 text-sm sm:text-base"> ⏰ 試合時間 </h4>
                    <ul className="space-y-1 sm:space-y-2 text-gray-700 text-xs sm:text-sm">
                      <li>• 男性：2分2R（インターバル60秒）</li>
                      <li>• 女性：90秒2R（インターバル60秒）</li>
                      <li>• キッズ：90秒2R（インターバル60秒）</li>
                      <li>• 延長なし（トーナメントは1分延長）</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-4 sm:p-6 rounded-xl border-2 border-green-200">
                    <h4 className="font-bold text-emerald-600 mb-3 text-sm sm:text-base"> ✨ 有効打・技術 </h4>
                    <ul className="space-y-1 sm:space-y-2 text-gray-700 text-xs sm:text-sm">
                      <li>• 顔面への攻撃あり</li>
                      <li>• 回転技あり</li>
                      <li>• ハイキック</li>
                      <li>• 首相撲膝１回（ワンキャッチワンアクション）</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-rose-100 p-4 sm:p-6 rounded-xl border-2 border-pink-200">
                    <h4 className="font-bold text-rose-600 mb-3 text-sm sm:text-base"> ⚠️ 禁止技 </h4>
                    <ul className="space-y-1 sm:space-y-2 text-gray-700 text-xs sm:text-sm">
                      <li>• 顔面への膝蹴り</li>
                      <li>• 肘による攻撃</li>
                      <li>• 頭突き</li>
                      <li>• 投げ技・関節技・タックル</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8 bg-gradient-to-r from-yellow-50 to-orange-100 p-4 sm:p-6 rounded-xl border-2 border-yellow-200">
                  <h4 className="font-bold text-orange-600 mb-3 text-sm sm:text-base"> 🏆 勝敗・判定 </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-xs sm:text-sm">
                    <ul className="space-y-1 sm:space-y-2">
                      <li>• 3名のジャッジによる旗判定</li>
                      <li>• ジャッジ2票以上で勝利</li>
                      <li>• ドローあり（ワンマッチは延長なし）</li>
                      <li>• トーナメント決勝は延長戦ありでマスト判定</li>
                    </ul>
                    <ul className="space-y-1 sm:space-y-2">
                      <li>• 2ノックダウン制（全ラウンド通じて）</li>
                      <li>• 2回目のダウンでKO負け</li>
                      <li>• 10カウント以内にファイティングポーズ要</li>
                      <li>• 評価順：ダウン→ダメージ→クリーンヒット</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-10 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 sm:p-8 rounded-3xl shadow-2xl border-4 border-purple-200">
                <div className="text-center mb-6">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-boxing-fill w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center text-white"></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4">💪 アマチュアキックボクシング</h3>
                  <p className="text-xs sm:text-sm text-gray-700 mb-4">※安全第一！楽しく競技するキックボクシングルールです</p>
                </div>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>🌱 初心者クラス（〜1年）- 初めての方大歓迎！</li>
                  <li>🌿 中級者クラス（1〜3年）- レベルアップしたい方に</li>
                  <li>🌳 上級者クラス（3年〜）- 本格的な競技を楽しみたい方に</li>
                  <li>👧👦 キッズ・女性クラス - 安心安全な環境で挑戦！</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 参加選手・ジム - より親しみやすく調整 */}
        <section className="py-12 sm:py-24 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-16">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-8">
                🤝 参加予定選手・ジム
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
                FLAT-UP GYMが親交のあるジム及び千葉県キックボクシング協会加盟ジムの皆様と一緒に、素晴らしい大会を作り上げます
              </p>
              <div className="bg-gradient-to-r from-cyan-100 to-blue-100 p-6 sm:p-8 rounded-2xl border-2 border-cyan-200 max-w-full lg:max-w-4xl mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-700 mb-4 sm:mb-6"> 🌟 参加条件・注意事項 </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left">
                  <div>
                    <h4 className="font-bold text-blue-600 mb-3 text-sm sm:text-base">✅ 参加条件</h4>
                    <ul className="space-y-1 sm:space-y-2 text-gray-700 text-xs sm:text-sm">
                      <li>• ジムに属している選手（安全管理のため）</li>
                      <li>• 防具着用でアマチュアキックボクシングとして競技</li>
                      <li>• 初出場のキッズ・女性大歓迎！🎉</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-600 mb-3 text-sm sm:text-base">📝 注意事項</h4>
                    <ul className="space-y-1 sm:space-y-2 text-gray-700 text-xs sm:text-sm">
                      <li>• 刺青・タトゥー不可</li>
                      <li>• 地下格闘技選手不可</li>
                      <li>• 反社組織不可</li>
                    </ul>
                  </div>
                </div>
                <p className="text-center text-indigo-600 font-bold mt-4 sm:mt-6 text-sm sm:text-lg">
                  🌈 みんなで楽しく、安全に格闘技の素晴らしさを体験しましょう！
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-4 sm:p-6 rounded-2xl shadow-xl border-2 border-pink-200 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-rose-700 mb-3">🌸 FLAT-UP GYM</h3>
                <p className="text-gray-700 text-xs sm:text-sm">成田市・女性オーナージム</p>
                <div className="mt-4">
                  <span className="bg-pink-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs">主催ジム</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-4 sm:p-6 rounded-2xl shadow-xl border-2 border-blue-200 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-indigo-700 mb-3">🏅 千葉県キック協会</h3>
                <p className="text-gray-700 text-xs sm:text-sm">加盟ジム</p>
                <div className="mt-4">
                  <span className="bg-blue-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs">参加予定</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 sm:p-6 rounded-2xl shadow-xl border-2 border-green-200 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-emerald-700 mb-3">🤝 親交ジム</h3>
                <p className="text-gray-700 text-xs sm:text-sm">関東近郊</p>
                <div className="mt-4">
                  <span className="bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs">参加予定</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-4 sm:p-6 rounded-2xl shadow-xl border-2 border-purple-200 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-violet-700 mb-3">✨ その他多数</h3>
                <p className="text-gray-700 text-xs sm:text-sm">続々エントリー中</p>
                <div className="mt-4">
                  <span className="bg-purple-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs">募集中</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* エントリー方法 - Googleフォーム中心に変更 */}
        <section className="py-12 sm:py-24 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-16">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 sm:mb-8">
                エントリー方法
              </h2>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
                参加をご希望の選手・ジム関係者の皆様は以下のフォームからお申し込みください
              </p>
            </div>

            <div className="bg-white/90 p-6 sm:p-12 rounded-3xl shadow-2xl max-w-full lg:max-w-4xl mx-auto mb-8 sm:mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                    <i className="ri-file-list-3-fill w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center text-red-600 mr-3"></i>
                    必要書類・参加費
                  </h3>
                  <div className="space-y-4 mb-8">
                    <div className="bg-red-50 p-4 rounded-xl">
                      <h4 className="font-bold text-gray-800 mb-3 text-sm sm:text-base"> 参加費（税込） </h4>
                      <ul className="space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                        <li> ワンマッチ：¥4,000 </li>
                        <li> トーナメント：¥5,000 </li>
                      </ul>
                      <p className="text-xs sm:text-sm text-gray-600 mt-2">※ 入場曲を指定する場合は、Apple Musicのリンクをお送りください。</p>
                    </div>
                    <ul className="space-y-2 sm:space-y-4">
                      <li className="flex items-start space-x-3">
                        <i className="ri-check-fill w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center text-red-600 mt-1"></i>
                        <span className="text-gray-700 text-sm sm:text-base">保護者同意書</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="ri-check-fill w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center text-red-600 mt-1"></i>
                        <span className="text-gray-700 text-sm sm:text-base">メディカルチェックシート</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="ri-check-fill w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center text-red-600 mt-1"></i>
                        <span className="text-gray-700 text-sm sm:text-base">誓約書</span>
                      </li>
                    </ul>
                    <div className="bg-yellow-50 p-4 rounded-xl">
                      <h4 className="font-bold text-gray-800 mb-3 text-sm sm:text-base"> お支払いについて </h4>
                      <p className="text-gray-700 text-xs sm:text-sm">
                        エントリーフォーム送信後、申込者へ振込先情報をご案内いたします。<br />
                        ⚠ 48時間経っても返信がない場合は、迷惑メールボックスをご確認ください。
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                    <i className="ri-smartphone-fill w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center text-orange-600 mr-3"></i>
                    申込方法
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    {/* 第3のGoogleフォームCTA - エントリー方法セクション用 */}
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 sm:p-8 rounded-3xl border-4 border-green-300 shadow-xl">
                      <h4 className="font-bold text-gray-800 mb-4 text-lg sm:text-xl text-center">🌟 オンライン申込 🌟</h4>
                      <p className="text-gray-700 mb-6 text-sm sm:text-base text-center">最も確実で迅速な申込方法です</p>
                      <div className="text-center">
                        <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLSein6DGBmLo1DO1ErFK_vxvefNrs4Y733QLMaNTSkHeDibQeA/viewform"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-gradient-to-r from-green-600 to-blue-700 hover:from-green-700 hover:to-blue-800 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl transition-all duration-300 cursor-pointer whitespace-nowrap shadow-2xl transform hover:scale-105 animate-pulse"
                        >
                          <div className="ri-google-fill w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center mr-3 inline-block"></div>
                          エントリーフォームへ
                        </a>
                      </div>
                    </div>
                    <div className="bg-orange-50 p-4 sm:p-6 rounded-2xl">
                      <h4 className="font-bold text-gray-800 mb-3 text-sm sm:text-base">お電話での申込</h4>
                      <p className="text-gray-700 mb-2 text-sm sm:text-base">070-9035-3485</p>
                      <p className="text-xs sm:text-sm text-gray-600">平日 10:00-21:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* はじめに・注意事項 - レスポンシブ改善 */}
            <div className="bg-gradient-to-br from-white to-blue-50 p-6 sm:p-12 rounded-3xl shadow-2xl border-4 border-blue-200 max-w-full lg:max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center flex items-center justify-center">
                <i className="ri-information-fill w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center text-blue-600 mr-3"></i>
                はじめに
              </h3>
              <div className="bg-blue-50 p-6 sm:p-8 rounded-2xl border-2 border-blue-300 mb-8">
                <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  このイベントは、子どもたちがスポーツとしての格闘技の素晴らしさを体験し、互いに競い合う機会を提供することを目的としています。
                  保護者の皆さまのご協力とご参加に、心より感謝申し上げます。
                </p>
                <p className="text-sm sm:text-lg text-gray-700 leading-relaxed font-bold text-red-600">
                  試合は、エントリーフォームにご記入いただいた内容をもとにマッチメイクを行います。
                  正確な情報をご入力いただき、虚偽申請はご遠慮ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* スポンサー・協賛 - レスポンシブ改善 */}
        <section className="py-12 sm:py-24 bg-gradient-to-br from-gray-900 via-black to-red-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-16">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 sm:mb-8">
                スポンサー・協賛募集
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                UIZIN大会を一緒に盛り上げていただけるスポンサー様を募集しています
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
              <div className="bg-gradient-to-br from-yellow-800/50 to-black/70 p-6 sm:p-8 rounded-3xl shadow-2xl border-4 border-yellow-500/50">
                <div className="text-center mb-6">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-vip-crown-fill w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center text-white"></i>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-4">ゴールドスポンサー</h3>
                </div>
                <ul className="text-gray-300 space-y-1 sm:space-y-2 text-center text-sm sm:text-base">
                  <li>• メインスポンサー表示</li>
                  <li>• 会場内看板設置</li>
                  <li>• プログラム全面広告</li>
                  <li>• 特別席ご招待</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-600/50 to-black/70 p-6 sm:p-8 rounded-3xl shadow-2xl border-4 border-gray-500/50">
                <div className="text-center mb-6">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-medal-2-fill w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center text-white"></i>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-4">シルバースポンサー</h3>
                </div>
                <ul className="text-gray-300 space-y-1 sm:space-y-2 text-center text-sm sm:text-base">
                  <li>• 協賛スポンサー表示</li>
                  <li>• 会場内ポスター掲示</li>
                  <li>• プログラム広告</li>
                  <li>• 観戦チケット進呈</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-800/50 to-black/70 p-6 sm:p-8 rounded-3xl shadow-2xl border-4 border-orange-500/50 md:col-span-2 lg:col-span-1">
                <div className="text-center mb-6">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-award-fill w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center text-white"></i>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-4">ブロンズスポンサー</h3>
                </div>
                <ul className="text-gray-300 space-y-1 sm:space-y-2 text-center text-sm sm:text-base">
                  <li>• 協賛企業として表示</li>
                  <li>• プログラム企業名掲載</li>
                  <li>• 公式SNSでの紹介</li>
                  <li>• 記念品進呈</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>
        {`
          /* Critical CSS - Inlined for performance */
          #uizin-lp-wrapper {
            isolation: isolate;
          }

          #uizin-lp-wrapper * {
            box-sizing: border-box;
          }

          /* Performance optimized animations */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out forwards;
          }

          /* Optimize will-change for GPU acceleration */
          .observe-animation {
            will-change: transform, opacity;
          }

          /* Responsive images optimization */
          #uizin-lp-wrapper img {
            max-width: 100%;
            height: auto;
            display: block;
          }

          /* Mobile-first flexbox */
          #uizin-lp-wrapper .flex {
            display: flex;
          }

          #uizin-lp-wrapper .flex-col {
            flex-direction: column;
          }

          @media (min-width: 640px) {
            #uizin-lp-wrapper .sm\:flex-row {
              flex-direction: row;
            }
          }

          /* Performance animations */
          #uizin-lp-wrapper .animate-pulse,
          #uizin-lp-wrapper .animate-bounce {
            animation-duration: 2s;
            animation-iteration-count: infinite;
          }

          /* WordPress compatibility */
          #uizin-lp-wrapper .wp-block-image,
          #uizin-lp-wrapper .wp-block-gallery {
            margin: 0 !important;
          }

          /* Critical performance styles */
          #uizin-lp-wrapper .bg-cover {
            background-size: cover;
          }

          #uizin-lp-wrapper .bg-center {
            background-position: center;
          }

          /* Reduce layout shifts */
          #uizin-lp-wrapper .aspect-ratio-16-9 {
            aspect-ratio: 16 / 9;
          }

          /* Optimize font loading */
          #uizin-lp-wrapper {
            font-display: swap;
          }
        `}
      </style>
    </div>
  );
}