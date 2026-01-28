'use client';


import OptimizedImage from '@/components/OptimizedImage';
import SEO from '@/components/SEO';
import { breadcrumbJsonLd } from '@/lib/json-ld';

export default function KidsBoys() {
  const kidsBoysBreadcrumbs = breadcrumbJsonLd([
    { name: 'Home', url: 'https://flat-up.jp/' },
    { name: 'Kids Boys', url: 'https://flat-up.jp/kids-boys' },
  ]);

  return (
    <div className="min-h-screen">
      <SEO
        title="キッズクラス（男の子向け）｜成田の格闘技ジムで心身を鍛える"
        description="成田のFLATUPGYMキッズクラス（男の子向け）で、礼儀、集中力、体力を養い、自信を育みます。5歳から中学生まで、初心者も大歓迎。無料体験レッスン実施中."
        jsonLd={kidsBoysBreadcrumbs}
      />
      

      <main>
        {/* ヒーローセクション */}
        <section 
          className="relative min-h-screen bg-cover bg-center flex items-center"
        >
          <OptimizedImage
            src="https://ik.imagekit.io/FLATUPGYM/batch_IMG_9597%202.JPG"
            alt="キッズクラス（男の子）の背景画像"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300/30 via-transparent to-blue-300/30"></div>
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-blue-500/30 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-3xl border-4 border-blue-300/50 shadow-2xl">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 md:mb-8 leading-tight drop-shadow-2xl">
                  <span className="text-blue-300 block mb-2 sm:mb-4 animate-pulse">💪 心のエンジンを点火する 💪</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-semibold drop-shadow-lg mb-6">
                  世界一優しい格闘技ジム
                </p>
                
                <div className="space-y-3 sm:space-y-4 md:space-y-6 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl font-bold text-yellow-300 drop-shadow-2xl">
                    キッズクラス
                  </h2>
                  <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-blue-200 drop-shadow-2xl">
                    小学1年生〜6年生対象（男女共通）
                  </p>
                  <p className="text-base sm:text-lg md:text-2xl text-white/95 font-semibold drop-shadow-lg">
                    男の子は肉体的にも強くなるようフィジカルもガンガン鍛えます♪
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4 md:space-y-6 text-white drop-shadow-2xl">
                  <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold leading-relaxed">
                    グローブをはめて、初めてミットを叩いた瞬間。
                  </p>
                  <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold leading-relaxed">
                    乾いた衝撃音と一緒に、「僕はできる」という心のエンジンが点火する。
                  </p>
                  <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-black text-yellow-300 mt-4 sm:mt-6 md:mt-8 drop-shadow-2xl">
                    男の子が強くなることは、「本当のかっこよさ」を知ることです。
                  </p>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-200 leading-relaxed">
                    ここで学ぶのは、ただの格闘技ではありません。<br />
                    人生を思いっきり楽しむための心の筋肉です。
                  </p>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white leading-relaxed">
                    強い男の子は、困っている友達を助け、<br />
                    「僕は君を守る」と堂々と言える男性に成長します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 成長データセクション */}
        <section className="py-24 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-8 leading-tight">
                キッズクラス
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-medium max-w-3xl mx-auto">
                【5歳から中学生まで対応】<br/>
                礼儀や協調性も身につく、楽しい格闘技体験。体力づくりや集中力アップにも最適です。保護者見学も可能で安心。
              </p>
              <div className="flex justify-center flex-wrap gap-4">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">5歳〜中学生</span>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">週3回まで利用可能</span>
                  <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">保護者見学OK</span>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl text-center border-4 border-green-300">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-green-600 mb-2 sm:mb-4">97%</div>
                <p className="text-xs sm:text-sm md:text-base font-bold text-gray-800">
                  「運動が好きになった」<br />
                  <span className="text-xs text-gray-600">保護者評価</span>
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl text-center border-4 border-blue-300">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-blue-600 mb-2 sm:mb-4">94%</div>
                <p className="text-xs sm:text-sm md:text-base font-bold text-gray-800">
                  「礼儀正しくなった」<br />
                  <span className="text-xs text-gray-600">学校の先生評価</span>
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl text-center border-4 border-purple-300">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-purple-600 mb-2 sm:mb-4">91%</div>
                <p className="text-xs sm:text-sm md:text-base font-bold text-gray-800">
                  「お友達を助ける<br />優しさが育った」
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl text-center border-4 border-orange-300">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-orange-600 mb-2 sm:mb-4">100%</div>
                <p className="text-xs sm:text-sm md:text-base font-bold text-gray-800">
                  「もっと強くなりたい」<br />
                  <span className="text-xs text-gray-600">本人の意欲</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 保護者様FAQ */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-4 sm:mb-6 md:mb-8">
                👨‍👩‍👦 保護者様からよくある質問TOP3 👨‍👩‍👦
              </h2>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border-4 border-red-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-500 text-white rounded-full p-3 flex-shrink-0">
                    <span className="font-bold text-lg">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">暴力的にならない？</h3>
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-500 text-white rounded-full p-3 flex-shrink-0">
                        <span className="font-bold text-lg">A</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">逆に礼儀を重視。正義感が育ちます</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border-4 border-blue-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full p-3 flex-shrink-0">
                    <span className="font-bold text-lg">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">集中力が続くか心配</h3>
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-500 text-white rounded-full p-3 flex-shrink-0">
                        <span className="font-bold text-lg">A</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">ゲーム感覚で楽しく。30分集中トレーニング</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border-4 border-purple-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full p-3 flex-shrink-0">
                    <span className="font-bold text-lg">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">他の習い事と両立できる？</h3>
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-500 text-white rounded-full p-3 flex-shrink-0">
                        <span className="font-bold text-lg">A</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">週2回から。体幹も鍛わり他競技にも活用</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 料金・時間割セクション */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4 sm:mb-6 md:mb-8">
                💰 料金・時間割 💰
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl border-4 border-blue-300 text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">👦</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">キッズクラス</h3>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-3 sm:mb-4">¥7,700</div>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">月額（税込）</p>
                <ul className="text-left space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-sm sm:text-base">
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-blue-600"></i>
                    <span>週3回レッスン（火/木/土）</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-blue-600"></i>
                    <span>礼儀・マナー指導</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-blue-600"></i>
                    <span>フィジカル強化</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-blue-600"></i>
                    <span>グローブ無料貸出</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl border-4 border-purple-300">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">⏰ キッズクラス時間割</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-blue-100 p-3 sm:p-4 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-sm sm:text-base">火曜日</span>
                      <span className="text-blue-600 font-bold text-sm sm:text-base">18:00-19:00</span>
                    </div>
                  </div>
                  <div className="bg-green-100 p-3 sm:p-4 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-sm sm:text-base">木曜日</span>
                      <span className="text-green-600 font-bold text-sm sm:text-base">18:00-19:00</span>
                    </div>
                  </div>
                  <div className="bg-purple-100 p-3 sm:p-4 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-sm sm:text-base">土曜日</span>
                      <span className="text-purple-600 font-bold text-sm sm:text-base">13:00-14:00</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-yellow-50 rounded-xl">
                  <p className="text-xs sm:text-sm text-gray-600 text-center">
                    ※男女共通のクラスです<br />
                    ※体験レッスンはいつでもOK
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-500 via-purple-600 to-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
              💪 息子さんの「心のエンジン」を点火しませんか？ 💪
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto">
              強く、優しく、かっこいい男性へ。<br className="hidden sm:block" />
              その第一歩を、一緒に踏み出しましょう！
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              <a
                href="https://lin.ee/21ape6V"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-300 to-green-400 hover:from-blue-400 hover:to-green-500 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 rounded-full text-base sm:text-lg md:text-xl lg:text-2xl font-bold transition-all duration-300 cursor-pointer shadow-2xl transform hover:scale-105 border-4 border-blue-300/80 animate-bounce whitespace-nowrap"
              >
                💪 無料体験レッスン予約 💪
              </a>
              
              <p className="text-white text-sm sm:text-base md:text-lg">
                ↓ LINEで簡単予約 ↓
              </p>
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
            <i className="ri-line-fill w-8 h-8 flex items-center justify-center"></i>
          </a>
        </div>
      </main>

      
    </div>
  );
}