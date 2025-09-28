'use client';


import OptimizedImage from '@/components/OptimizedImage';
import SEO from '@/components/SEO';
import { breadcrumbJsonLd } from '@/lib/json-ld';

export default function Athlete() {
  const athleteBreadcrumbs = breadcrumbJsonLd([
    { name: 'Home', url: 'https://flat-up.jp/' },
    { name: 'Athlete', url: 'https://flat-up.jp/athlete' },
  ]);

  return (
    <div className="min-h-screen">
      <SEO
        title="選手育成クラス｜成田でプロを目指す！キックボクシング・柔術"
        description="成田のFLATUPGYM選手育成クラスで、プロの格闘家を目指しませんか？経験豊富なトレーナーが、あなたの才能を開花させ、夢の舞台へと導きます。本気で強くなりたい方を募集しています。"
        jsonLd={athleteBreadcrumbs}
      />
      

      <main>
        {/* ヒーローセクション - トップ画像差し替え */}
        <section
          className="relative min-h-screen bg-cover bg-center flex items-center"
          style={{
            backgroundImage: "url('https://ik.imagekit.io/FLATUPGYM/MASAKIPRO3jpg.jpg?updatedAt=1756928056510')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 via-orange-500/20 to-yellow-400/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                これを目指せプロ選手<br />
                🏆 チャンピオン育成クラス 🏆
              </h1>
              <p className="text-2xl md:text-3xl text-white/95 mb-12 leading-relaxed font-medium">
                頂点を目指せ！<br />
                真のチャンピオンへの道♪
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <i className="ri-trophy-fill w-8 h-8 flex items-center justify-center text-white"></i>
                  </div>
                  <span className="text-white font-bold text-lg">プロ技術習得♪</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0.2s' }}>
                    <i className="ri-medal-fill w-8 h-8 flex items-center justify-center text-white"></i>
                  </div>
                  <span className="text-white font-bold text-lg">大会出場サポート♪</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0.4s' }}>
                    <i className="ri-fire-fill w-8 h-8 flex items-center justify-center text-white"></i>
                  </div>
                  <span className="text-white font-bold text-lg">限界突破トレーニング♪</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0.6s' }}>
                    <i className="ri-star-fill w-8 h-8 flex items-center justify-center text-white"></i>
                  </div>
                  <span className="text-white font-bold text-lg">プロ選手への道♪</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
                <a
                  href="https://lin.ee/21ape6V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-600 hover:from-red-600 hover:via-orange-600 hover:to-yellow-700 text-white px-12 py-6 rounded-full text-xl font-bold transition-all duration-300 cursor-pointer text-center whitespace-nowrap shadow-2xl transform hover:scale-105 animate-pulse"
                >
                  🏆 チャンピオン体験レッスン！ 🏆
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* プログラム詳細 */}
        <section className="py-24 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 mb-8">
                🏆 チャンピオン育成プログラム 🏆
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="bg-gradient-to-br from-red-100 to-orange-200 p-10 rounded-3xl shadow-2xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                  <i className="ri-boxing-fill w-12 h-12 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  🥊 技術向上・プロ技術習得
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  世界レベルの技術を習得。基礎から応用まで、プロ選手レベルの技術を身につけます。
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-100 to-yellow-200 p-10 rounded-3xl shadow-2xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                  <i className="ri-medal-fill w-12 h-12 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  🏅 大会出場・試合サポート
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  アマチュア大会からプロ戦まで、試合に向けた戦略的トレーニングと全面サポート。
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-red-200 p-10 rounded-3xl shadow-2xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-spin" style={{ animationDuration: '3s' }}>
                  <i className="ri-star-fill w-12 h-12 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  ⭐ プロ選手志向・キャリアサポート
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  プロ選手を目指す方への本格指導。キャリア構築から契約まで全面バックアップ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 対象・クラス情報 */}
        <section className="py-24 bg-gradient-to-r from-red-500 via-orange-600 to-yellow-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                🏆 選手クラス情報 🏆
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gradient-to-br from-white to-red-100 p-10 rounded-3xl shadow-lg border-4 border-red-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="ri-medal-fill w-8 h-8 flex items-center justify-center text-red-600 mr-3"></i>
                  対象・レベル
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-white"></i>
                    </div>
                    <span className="text-gray-700 font-medium">プロ志向の方</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-white"></i>
                    </div>
                    <span className="text-gray-700 font-medium">大会出場希望者</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-white"></i>
                    </div>
                    <span className="text-gray-700 font-medium">本格的な技術習得希望</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-white"></i>
                    </div>
                    <span className="text-gray-700 font-medium">高い目標を持つ方</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-white to-orange-100 p-10 rounded-3xl shadow-lg border-4 border-orange-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="ri-time-fill w-8 h-8 flex items-center justify-center text-orange-600 mr-3"></i>
                  スケジュール
                </h3>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">平日クラス</h4>
                    <p className="text-gray-700">火・木曜日 20:00-21:00</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">土曜クラス</h4>
                    <p className="text-gray-700">土曜日 11:00-12:00</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">レッスン時間</h4>
                    <p className="text-gray-700">1回60分（本格指導）</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 選手・参加者の声 */}
        <section className="py-20 bg-gradient-to-br from-yellow-100 via-red-50 to-orange-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 mb-6">
                🥊 チャンピオンたちの声 🥊
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-100 to-orange-200 p-6 rounded-2xl shadow-xl border-4 border-red-300">
                <div className="flex items-center mb-4">
                  <OptimizedImage
                    width={100}
                    height={100}
                    src="/DSC07483.png"
                    alt="選手の声"
                    className="w-16 h-16 rounded-full object-cover object-top mr-4 border-4 border-red-400"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">田中選手（22歳・アマチュア）</h4>
                    <p className="text-sm text-gray-600">🏆 通って2年</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed bg-white/70 rounded-xl p-4">
                  「ここで基礎から本格的に学んで、地区大会で優勝できました！技術だけでなく、メンタル面もしっかりサポートしてもらえます♪」
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-100 to-yellow-200 p-6 rounded-2xl shadow-xl border-4 border-orange-300">
                <div className="flex items-center mb-4">
                  <OptimizedImage
                    width={100}
                    height={100}
                    src="/batch_IMG_9594%202.JPG"
                    alt="選手の声"
                    className="w-16 h-16 rounded-full object-cover object-top mr-4 border-4 border-orange-400"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">佐藤選手（26歳・プロ志望）</h4>
                    <p className="text-sm text-gray-600">⭐ 通って3年</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed bg-white/70 rounded-xl p-4">
                  「プロデビューが決まりました！試合に向けた戦略的なトレーニングと、精神面でのサポートが本当に心強いです♪」
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 体験レッスン案内 */}
        <section className="py-20 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-red-400/20 to-orange-400/20 animate-pulse"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              🏆 無料体験レッスン開催中！ 🏆
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              チャンピオンへの第一歩を踏み出そう！<br />
              本格的なトレーニングを体験してみませんか？
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
              <a
                href="https://lin.ee/21ape6V"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-red-500 hover:from-yellow-500 hover:to-red-600 text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-2xl transform hover:scale-105 border-4 border-yellow-300 animate-bounce"
              >
                🥊 今すぐ体験申込 🥊
              </a>
            </div>
          </div>
        </section>

        {/* フローティングLINEボタン */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://lin.ee/21ape6V"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl cursor-pointer transform hover:scale-110 transition-all duration-300 animate-bounce"
          >
            <div className="ri-line-fill w-8 h-8 flex items-center justify-center"></div>
          </a>
        </div>
      </main>

      
    </div>
  );
}
