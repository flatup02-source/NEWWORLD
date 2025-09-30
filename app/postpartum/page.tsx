'use client';


import SEO from '@/components/SEO';
import { breadcrumbJsonLd } from '@/lib/json-ld';
import OptimizedImage from '@/components/OptimizedImage';

export default function Postpartum() {
  const postpartumBreadcrumbs = breadcrumbJsonLd([
    { name: 'Home', url: 'https://flat-up.jp/' },
    { name: 'Postpartum', url: 'https://flat-up.jp/postpartum' },
  ]);

  return (
    <div className="min-h-screen">
      <SEO
        title="産後ママ向けキックボクシング｜成田で体型戻し・ストレス解消"
        description="成田のFLATUPGYM産後ママ向けキックボクシングで、無理なく体型を戻し、育児のストレスを解消しませんか？お子様連れOK、体力に自信がなくても安心。無料体験レッスン実施中."
        jsonLd={postpartumBreadcrumbs}
      />
      
      <main>
        {/* ヒーローセクション */}
        <section
          className="relative min-h-screen flex items-center overflow-hidden"
        >
          <OptimizedImage
            src="https://ik.imagekit.io/FLATUPGYM/%E7%94%A3%E5%BE%8C%E3%82%AF%E3%83%A9%E3%82%B9%E3%81%AETOP.png?updatedAt=1756924825619"
            alt="産後クラスのトレーニング風景"
            className="object-cover z-0 w-full h-full absolute inset-0"
            width={1920}
            height={1080}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 via-blue-500/20 to-purple-400/20 z-10"></div>
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left sm:text-center">
            {/* This div was unclosed in the original file. Adding content here. */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              産後ママのための<br />
              キックボクシング
            </h1>
            <p className="text-2xl md:text-3xl text-white/95 mb-12 leading-relaxed font-medium">
              無理なく、楽しく、<br />
              新しい自分に出会う場所
            </p>
          </div>
        </section>

        {/* 新しい画像セクション - メッセージ付き */}
        <section className="py-24 bg-gradient-to-br from-pink-50 via-white to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-8">
                💖 産後の女性の為のキックボクシングメソッド 💖
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                ママの新しい挑戦を応援します！体も心も軽やかになれる特別なプログラム
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-pink-50 p-8 rounded-3xl shadow-2xl border-4 border-pink-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-gradient-to-r from-pink-100 to-yellow-100 p-8 rounded-2xl border-4 border-pink-300 shadow-xl">
                    <OptimizedImage
                      src="https://ik.imagekit.io/FLATUPGYM/%E7%94%A3%E5%BE%8C%E3%82%AF%E3%83%A9%E3%82%B9%E3%81%AETOP.png?updatedAt=1756924825619"
                      alt="産後の女性の為のキックボクシングメソッド"
                      width={500}
                      height={500}
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 space-y-8">
                  <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-2xl border-4 border-green-300 shadow-xl">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                      <i className="ri-heart-3-fill w-8 h-8 flex items-center justify-center text-pink-700 mr-3"></i>
                      太ってると老けて見える
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      産後の体型変化に悩むママたちへ。あなたの気持ち、とてもよく分かります。
                      でも大丈夫！優しく、着実に理想の自分に近づけます。
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-8 rounded-2xl border-4 border-yellow-300 shadow-xl">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                      <i className="ri-magic-fill w-8 h-8 flex items-center justify-center text-orange-600 mr-3"></i>
                      新たな自分を輝かせる
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      産後という新しいステージで、あなたらしく輝ける方法を一緒に見つけましょう。
                      ママだからこそ持てる新しい魅力を発見できます！
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl border-4 border-purple-300 shadow-xl">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                      <i className="ri-trophy-fill w-8 h-8 flex items-center justify-center text-purple-600 mr-3"></i>
                      25kg減量成功！
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      実際にこのメソッドで大幅な減量に成功されたママもいらっしゃいます！
                    </p>
                    <p className="text-pink-700 font-bold text-xl">
                      あなたも必ず変われます✨
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* プログラム詳細 */}
        <section className="py-24 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-8">
                🌸 ママが輝くプログラム 🌸
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="bg-gradient-to-br from-green-100 to-blue-200 p-10 rounded-3xl shadow-2xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                  <i className="ri-body-scan-fill w-12 h-12 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  🏃‍♀️ 体型戻し・シェイプアップ
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  産後の体に優しいエクササイズで、無理なく理想の体型を取り戻しましょう。
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-200 p-10 rounded-3xl shadow-2xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                  <i className="ri-battery-2-charge-fill w-12 h-12 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  ⚡ 体力回復・エネルギーチャージ
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  育児で疲れた体に活力を！適度な運動で体力と気力をしっかり回復させます。
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-pink-200 p-10 rounded-3xl shadow-2xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-spin" style={{ animationDuration: '3s' }}>
                  <i className="ri-parent-fill w-12 h-12 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  👩‍👩‍👧‍👧 ママ友作り・コミュニティ
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  同じ境遇のママたちと出会い、支え合える素敵な仲間を見つけましょう。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 対象・クラス情報 */}
        <section className="py-24 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-8">
                🌸 クラス情報 🌸
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gradient-to-br from-white to-green-100 p-10 rounded-3xl shadow-lg border-4 border-green-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="ri-parent-fill w-8 h-8 flex items-center justify-center text-green-600 mr-3"></i>
                  対象・条件
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-white"></i>
                    </div>
                    <span className="text-gray-700 font-medium">産後2ヶ月〜のママ</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-white"></i>
                    </div>
                    <span className="text-gray-700 font-medium">医師の運動許可がある方</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-white"></i>
                    </div>
                    <span className="text-gray-700 font-medium">お子様連れ大歓迎</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-white"></i>
                    </div>
                    <span className="text-gray-700 font-medium">運動初心者でもOK</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-white to-blue-100 p-10 rounded-3xl shadow-lg border-4 border-blue-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="ri-time-fill w-8 h-8 flex items-center justify-center text-blue-600 mr-3"></i>
                  スケジュール
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">産後クラス</h4>
                    <p className="text-gray-700">月・水・金曜日 10:00-10:30</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">レッスン時間</h4>
                    <p className="text-gray-700">1回30分（ゆったりペース）</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ママたちの声 */}
        <section className="py-20 bg-gradient-to-br from-yellow-100 via-green-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-6">
                👶 キラキラママたちの声 👶
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-100 to-blue-200 p-6 rounded-2xl shadow-xl border-4 border-green-300">
                <div className="flex items-center mb-4">
                  <OptimizedImage
                    src="/sango2.png?tr=q-auto,f-auto"
                    alt="ママの声"
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover object-top mr-4 border-4 border-green-400"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">鈴木ママ（29歳・1歳児ママ）</h4>
                    <p className="text-sm text-gray-600">🌸 通って6ヶ月</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed bg-white/70 rounded-xl p-4">
                  「産後太りが気になってましたが、子連れで通えるここに出会えて本当に良かった！体型も戻って、ママ友もできて毎日が楽しいです♪」
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-200 p-6 rounded-2xl shadow-xl border-4 border-blue-300">
                <div className="flex items-center mb-4">
                  <OptimizedImage
                    src="https://ik.imagekit.io/FLATUPGYM/B.png"
                    alt="ママの声"
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover object-top mr-4 border-4 border-blue-400"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">田中ママ（31歳・双子ママ）</h4>
                    <p className="text-sm text-gray-600">⚡ 通って4ヶ月</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed bg-white/70 rounded-xl p-4">
                  「双子の育児で疲れ切っていましたが、ここで体を動かすと元気が出ます！同じママたちと話せる時間も貴重で、心の支えになってます♪」
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 体験レッスン案内 */}
        <section className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-pink-400/20 to-green-400/20 animate-pulse"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              🌸 無料体験レッスン開催中！ 🌸
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              ママの笑顔が家族の幸せ♪<br />
              お子様と一緒に、新しい一歩を踏み出しませんか？
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
              <a
                href="https://lin.ee/21ape6V"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-2xl transform hover:scale-105 border-4 border-yellow-300 animate-bounce"
              >
                👶 今すぐ体験申込 👶
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