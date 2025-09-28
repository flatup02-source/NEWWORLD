
import OptimizedImage from '@/components/OptimizedImage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'シニアクラス｜成田で健康長寿を目指すキックボクシング・格闘技',
  description: '成田のFLATUPGYMシニアクラスで、健康維持、転倒防止、認知症予防を目的とした無理のない運動を始めませんか？50歳以上の方対象。無料体験レッスン実施中。',
};

export default function Senior() {
  return (
    <div className="min-h-screen">
      

      <main>
        {/* ヒーローセクション - グローブ着用のシニア画像に差し替え */}
        <section
          className="relative min-h-screen flex items-center"
        >
          <img
            src="https://via.placeholder.com/1920x1080?text=Senior+Hero+Image"
            alt="シニアクラス ヒーロー画像"
            className="object-cover brightness-50 z-0 w-full h-full absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 via-yellow-500/20 to-green-400/20 z-10"></div>
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                健康長寿クラス
              </h1>
              <p className="text-2xl md:text-3xl text-white/95 mb-12 leading-relaxed font-medium">
                最高齢７４歳在籍
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <i className="ri-heart-pulse-fill w-8 h-8 flex items-center justify-center text-white"></i>
                  </div>
                  <span className="text-white font-bold text-lg">健康維持で元気♪</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0.2s' }}>
                    <i className="ri-shield-star-fill w-8 h-8 flex items-center justify-center text-white"></i>
                  </div>
                  <span className="text-white font-bold text-lg">転倒防止で安心♪</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0.4s' }}>
                    <i className="ri-brain-fill w-8 h-8 flex items-center justify-center text-white"></i>
                  </div>
                  <span className="text-white font-bold text-lg">脳トレで認知症予防♪</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0.6s' }}>
                    <i className="ri-team-fill w-8 h-8 flex items-center justify-center text-white"></i>
                  </div>
                  <span className="text-white font-bold text-lg">仲間と楽しく♪</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
                <a
                  href="https://lin.ee/21ape6V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-500 via-yellow-500 to-green-600 hover:from-orange-600 hover:via-yellow-600 hover:to-green-700 text-white px-12 py-6 rounded-full text-xl font-bold transition-all duration-300 cursor-pointer text-center whitespace-nowrap shadow-2xl transform hover:scale-105 animate-pulse"
                >
                  🌟 健康体験レッスン参加！ 🌟
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* プログラム詳細 */}
        <section className="py-24 bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600 mb-8">
                🌟 シニアが輝くプログラム 🌟
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="bg-gradient-to-br from-orange-100 to-yellow-200 p-10 rounded-3xl shadow-2xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                  <i className="ri-heart-pulse-fill w-12 h-12 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  💖 健康維持・体力向上
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  無理のない範囲で体を動かし、心臓機能や筋力を維持。いつまでも元気な体を保ちます。
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-green-200 p-10 rounded-3xl shadow-2xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                  <i className="ri-shield-star-fill w-12 h-12 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  🛡️ 転倒防止・バランス改善
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  体幹を鍛えてバランス感覚を向上。転倒リスクを減らし、安全な日常生活をサポートします。
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-blue-200 p-10 rounded-3xl shadow-2xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-spin" style={{ animationDuration: '3s' }}>
                  <i className="ri-brain-fill w-12 h-12 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  🧠 認知症予防・脳トレ
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  複雑な動きで脳を刺激し、認知機能を維持。楽しみながら脳の健康をサポートします。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 対象年齢・クラス情報 */}
        <section className="py-24 bg-gradient-to-r from-orange-400 via-red-500 to-pink-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-8">
                🌟 クラス情報 🌟
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gradient-to-br from-white to-orange-100 p-10 rounded-3xl shadow-lg border-4 border-orange-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="ri-user-heart-fill w-8 h-8 flex items-center justify-center text-orange-600 mr-3"></i>
                  対象・レベル
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-white"></i>
                    </div>
                    <span className="text-gray-700 font-medium">50歳以上の方</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-white"></i>
                    </div>
                    <span className="text-gray-700 font-medium">運動初心者大歓迎</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-white"></i>
                    </div>
                    <span className="text-gray-700 font-medium">膝・腰に不安がある方もOK</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-white"></i>
                    </div>
                    <span className="text-gray-700 font-medium">自分のペースでOK</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-white to-red-100 p-10 rounded-3xl shadow-lg border-4 border-red-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="ri-time-fill w-8 h-8 flex items-center justify-center text-red-600 mr-3"></i>
                  スケジュール
                </h3>
                <div className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">シニアクラス</h4>
                    <p className="text-gray-700">火・土曜日 10:00-10:30</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">レッスン時間</h4>
                    <p className="text-gray-700">1回30分（安全第一ペース）</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 参加者の声 */}
        <section className="py-20 bg-gradient-to-br from-yellow-100 via-orange-50 to-green-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600 mb-6">
                <span className="animate-pulse">👴👵</span> 元気なシニアの声 <span className="animate-pulse">👴👵</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-100 to-yellow-200 p-6 rounded-2xl shadow-xl border-4 border-orange-300">
                <div className="flex items-center mb-4">
                  <img
                    width={100}
                    height={100}
                    src="https://via.placeholder.com/256x256?text=Yamada+Avatar"
                    alt="シニアの声"
                    className="w-16 h-16 rounded-full object-cover object-top mr-4 border-4 border-orange-400"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">山田さん（65歳）</h4>
                    <p className="text-sm text-gray-600">🌟 通って1年半</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed bg-white/70 rounded-xl p-4">
                  「膝が痛くて歩くのが辛かったのですが、ここで体を動かすようになってから調子が良くなりました。仲間もできて毎日が楽しいです♪」
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-green-200 p-6 rounded-2xl shadow-xl border-4 border-yellow-300">
                <div className="flex items-center mb-4">
                  <img
                    width={100}
                    height={100}
                    src="https://via.placeholder.com/256x256?text=Sato+Avatar"
                    alt="シニアの声"
                    className="w-16 h-16 rounded-full object-cover object-top mr-4 border-4 border-yellow-400"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">佐藤さん（72歳）</h4>
                    <p className="text-sm text-gray-600">⚡ 通って2年</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed bg-white/70 rounded-xl p-4">
                  「定年後、家にこもりがちでしたが、ここに通い始めて体力がつきました。頭の体操にもなって、物忘れも減った気がします♪」
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 体験レッスン案内 */}
        <section className="py-20 bg-gradient-to-r from-orange-600 via-yellow-600 to-green-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 via-orange-400/20 to-yellow-400/20 animate-pulse"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              🌟 無料体験レッスン開催中！ 🌟
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              人生100年時代を元気に楽しく！<br />
              まずは気軽に体験レッスンにお越しください♪
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
              <a
                href="https://lin.ee/21ape6V"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-400 to-orange-500 hover:from-red-500 hover:to-orange-600 text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-2xl transform hover:scale-105 border-4 border-red-300 animate-bounce"
              >
                🌟 今すぐ体験申込 🌟
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


