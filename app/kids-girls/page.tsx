'use client';


import OptimizedImage from '@/components/OptimizedImage';
import SEO from '@/components/SEO';
import { breadcrumbJsonLd } from '@/lib/json-ld';

export default function KidsGirls() {
  const kidsGirlsBreadcrumbs = breadcrumbJsonLd([
    { name: 'Home', url: 'https://flat-up.jp/' },
    { name: 'Kids Girls', url: 'https://flat-up.jp/kids-girls' },
  ]);

  return (
    <div className="min-h-screen">
      <SEO
        title="キッズクラス（女の子向け）｜成田の格闘技ジムで自信を育む"
        description="成田のFLATUPGYMキッズクラス（女の子向け）で、護身術を学び、自信を育みます。5歳から中学生まで、初心者も大歓迎。無料体験レッスン実施中."
        jsonLd={kidsGirlsBreadcrumbs}
      />
      

      <main>
        {/* ヒーローセクション - レスポンシブ最適化 */}
        <section 
          className="relative min-h-screen flex items-center overflow-hidden"
        >
          <OptimizedImage
            src="/%E3%81%8D%E3%81%A3%E3%81%99%E3%82%99%E5%A5%B3%E3%81%AE%E5%AD%90%E3%82%AF%E3%83%A9%E3%82%B9TOP.png"
            alt="キッズクラス"
            fill
            sizes="100vw"
            className="object-cover z-0"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-300/30 via-transparent to-pink-300/30 z-10"></div>
          <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-pink-500/20 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-3xl border-4 border-pink-300/50 shadow-2xl">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 md:mb-8 leading-tight drop-shadow-2xl">
                  <span className="text-pink-300 block mb-2 sm:mb-4 animate-pulse">🌸 保護者の皆様へ 🌸</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-semibold drop-shadow-lg mb-6">
                  世界一優しい格闘技ジム
                </p>
                
                <div className="space-y-3 sm:space-y-4 md:space-y-6 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl font-bold text-yellow-300 drop-shadow-2xl">
                    キッズクラス
                  </h2>
                  <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-pink-200 drop-shadow-2xl">
                    一生モノのお守りを手に入れる
                  </p>
                  <p className="text-base sm:text-lg md:text-2xl text-white/95 font-semibold drop-shadow-lg">
                    小学1年生〜6年生対象（男女共通）
                  </p>
                  <p className="text-sm sm:text-base md:text-xl text-pink-100 font-medium drop-shadow-lg">
                    女の子は精神的に強くなるよう優しくサポートします♪
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4 md:space-y-6 text-white drop-shadow-2xl">
                  <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold leading-relaxed">
                    グローブをはめた瞬間、「私は強い」という実感が芽生える。
                  </p>
                  <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold leading-relaxed">
                    ミットに響く乾いた音が、「私にはできる」という自信を育てる。
                  </p>
                  <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-black text-yellow-300 mt-4 sm:mt-6 md:mt-8 drop-shadow-2xl">
                    ここで学ぶのは、ただの格闘技ではありません。<br className="hidden sm:block" />
                    一生モノのお守りを手に入れることです。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 安心して通える理由 - グリッドレスポンシブ対応 */}
        <section className="py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-8 leading-tight">
                キッズクラス
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-medium max-w-3xl mx-auto">
                【5歳から中学生まで対応】<br/>
                礼儀や協調性も身につく、楽しい格闘技体験。体力づくりや集中力アップにも最適です。保護者見学も可能で安心。
              </p>
              <div className="flex justify-center flex-wrap gap-4">
                  <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full font-semibold">5歳〜中学生</span>
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">週3回まで利用可能</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">保護者見学OK</span>
              </div>
            </div>

            {/* レスポンシブグリッド - 1列→2列→3列 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-12 sm:mb-16">
              <div className="bg-gradient-to-br from-pink-100 to-red-200 p-6 sm:p-8 rounded-3xl shadow-xl border-4 border-pink-300 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <i className="ri-women-fill w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">女性オーナーの視点</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  同じ女性として、女の子特有の悩みや不安を理解。きめ細やかなサポートで安心して通えます。
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-100 to-pink-200 p-6 sm:p-8 rounded-3xl shadow-xl border-4 border-purple-300 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <i className="ri-shield-star-fill w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">実用的護身術</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  「いざ」という時に本当に使える技術を、女の子にも分かりやすく指導します。
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-100 to-purple-200 p-6 sm:p-8 rounded-3xl shadow-xl border-4 border-blue-300 text-center md:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <i className="ri-heart-3-fill w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">自信と優しさ</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  強さと同時に、人への優しさや思いやりも大切に育てます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 成長データ - モバイルでも見やすく */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-4 sm:mb-6 md:mb-8">
                📊 女の子たちの成長データ 📊
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700">
                数字で見える、確かな成長
              </p>
            </div>

            {/* レスポンシブ統計カード */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl text-center border-4 border-pink-300">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-pink-700 mb-2 sm:mb-4">98%</div>
                <p className="text-xs sm:text-sm md:text-base font-bold text-gray-800">
                  自信がついた
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl text-center border-4 border-orange-300">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-orange-600 mb-2 sm:mb-4">95%</div>
                <p className="text-xs sm:text-sm md:text-base font-bold text-gray-800">
                  継続率
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl text-center border-4 border-purple-300">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-purple-600 mb-2 sm:mb-4">100%</div>
                <p className="text-xs sm:text-sm md:text-base font-bold text-gray-800">
                  保護者満足度
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl text-center border-4 border-green-300">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-green-600 mb-2 sm:mb-4">0件</div>
                <p className="text-xs sm:text-sm md:text-base font-bold text-gray-800">
                  トラブル報告
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 保護者様の声 - カードレイアウト改善 */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-4 sm:mb-6 md:mb-8">
                👪 保護者様の声 👪
              </h2>
            </div>

            {/* 縦並び→横並びレスポンシブ */}
            <div className="space-y-6 md:space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12">
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border-4 border-pink-300">
                <div className="text-center mb-4 sm:mb-6">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800">田中様（小3女の子のママ）</h4>
                  <p className="text-sm sm:text-base text-pink-700 font-bold">「娘が変わりました！」</p>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  「人見知りで泣き虫だった娘が、今では堂々と発表できるようになりました。
                  女性オーナーのAIKA先生が優しく指導してくださるおかげで、
                  娘も『強くなった！』と自信満々です。護身術も覚えて、親として安心しています。」
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border-4 border-blue-300">
                <div className="text-center mb-4 sm:mb-6">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800">佐藤様（小5女の子のママ）</h4>
                  <p className="text-sm sm:text-base text-blue-600 font-bold">「安心して預けられます」</p>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  「女性オーナーということで安心して通わせています。
                  娘も『今日はキックの練習！』と楽しみにしていて、
                  運動不足解消にもなって一石二鳥。
                  何より、困った時に自分を守れる技術を身につけてほしいと思っていたので、とても満足です。」
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 料金・時間 - シンプル表示 */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4 sm:mb-6 md:mb-8">
                💰 料金・時間割 💰
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* 料金カード */}
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl border-4 border-pink-300 text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">👧</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">キッズクラス</h3>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-700 mb-3 sm:mb-4">¥7,700</div>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">月額（税込）</p>
                <ul className="text-left space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-sm sm:text-base">
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-pink-700"></i>
                    <span>週3回レッスン（火/木/土）</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-pink-700"></i>
                    <span>礼儀・マナー指導</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-pink-700"></i>
                    <span>護身術指導</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-pink-700"></i>
                    <span>グローブ無料貸出</span>
                  </li>
                </ul>
              </div>

              {/* 時間割カード */}
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl border-4 border-purple-300">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">⏰ キッズクラス時間割</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-pink-100 p-3 sm:p-4 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-sm sm:text-base">火曜日</span>
                      <span className="text-pink-700 font-bold text-sm sm:text-base">18:00-19:00</span>
                    </div>
                  </div>
                  <div className="bg-blue-100 p-3 sm:p-4 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-sm sm:text-base">木曜日</span>
                      <span className="text-blue-600 font-bold text-sm sm:text-base">18:00-19:00</span>
                    </div>
                  </div>
                  <div className="bg-green-100 p-3 sm:p-4 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-sm sm:text-base">土曜日</span>
                      <span className="text-green-600 font-bold text-sm sm:text-base">13:00-14:00</span>
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

        {/* CTA - レスポンシブボタン */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
              💖 お嬢様の「一生モノのお守り」を 💖
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto">
              強く、優しく、自信に満ちた女性へ。<br className="hidden sm:block" />
              その第一歩を、一緒に踏み出しませんか？
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              <a
                href="https://lin.ee/21ape6V"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-pink-300 to-purple-400 hover:from-pink-400 hover:to-purple-500 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 rounded-full text-base sm:text-lg md:text-xl lg:text-2xl font-bold transition-all duration-300 cursor-pointer shadow-2xl transform hover:scale-105 border-4 border-pink-300/80 animate-bounce whitespace-nowrap"
              >
                🌸 無料体験レッスン予約 🌸
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
            <div className="ri-line-fill w-8 h-8 flex items-center justify-center"></div>
          </a>
        </div>
      </main>

      
    </div>
  );
}