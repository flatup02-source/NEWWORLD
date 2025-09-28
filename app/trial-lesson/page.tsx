'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { breadcrumbJsonLd } from '@/lib/json-ld';

export default function TrialLesson() {
  const trialLessonBreadcrumbs = breadcrumbJsonLd([
    { name: 'Home', url: 'https://flat-up.jp/' },
    { name: 'Trial Lesson', url: 'https://flat-up.jp/trial-lesson' },
  ]);

  return (
    <div className="min-h-screen">
      <SEO
        title="無料体験お申し込み｜新しい自分への第一歩 - 成田のキックボクシングジム FLATUPGYM"
        description="成田のFLATUPGYMで無料体験レッスンを。初心者や女性も安心して始められる30分間の体験。手ぶらでOK、グローブ・プロテクター無料レンタル。新しい自分への第一歩を踏み出しましょう."
        jsonLd={trialLessonBreadcrumbs}
      />
      <Header />

      <main>
        {/* ヒーローセクション */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-6 sm:mb-8">
                ✨ 体験レッスン ✨
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                あなたの新しい可能性を発見する30分間
              </p>
            </div>

            {/* 体験レッスン内容 */}
            <div className="bg-gradient-to-br from-white to-pink-50 p-8 sm:p-12 rounded-3xl shadow-2xl border-4 border-pink-200 mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
                <i className="ri-information-fill w-8 h-8 flex items-center justify-center text-pink-700 mr-3"></i>
                体験レッスン内容
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                {/* 体験内容の詳細 */}
                <div className="space-y-6">
                  <div className="bg-pink-100 p-6 rounded-2xl border-2 border-pink-300">
                    <div className="flex items-center mb-4">
                      <i className="ri-time-fill w-8 h-8 flex items-center justify-center text-pink-700 mr-3"></i>
                      <h3 className="text-xl font-bold text-gray-800">体験時間：30分間</h3>
                    </div>
                    <p className="text-gray-700">お一人お一人のペースに合わせた丁寧な指導で、格闘技の基本を楽しく体験</p>
                  </div>

                  <div className="bg-green-100 p-6 rounded-2xl border-2 border-green-300">
                    <div className="flex items-center mb-4">
                      <i className="ri-money-dollar-circle-fill w-8 h-8 flex items-center justify-center text-green-600 mr-3"></i>
                      <h3 className="text-xl font-bold text-gray-800">参加費：完全無料</h3>
                    </div>
                    <p className="text-gray-700">初回体験は完全無料！費用を気にせず気軽にお試しいただけます</p>
                  </div>

                  <div className="bg-blue-100 p-6 rounded-2xl border-2 border-blue-300">
                    <div className="flex items-center mb-4">
                      <i className="ri-t-shirt-fill w-8 h-8 flex items-center justify-center text-blue-600 mr-3"></i>
                      <h3 className="text-xl font-bold text-gray-800">持ち物</h3>
                    </div>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 動きやすい服装（Tシャツ・ジャージなど）</li>
                      <li>• タオル</li>
                      <li>• 飲み物</li>
                    </ul>
                  </div>

                  <div className="bg-purple-100 p-6 rounded-2xl border-2 border-purple-300">
                    <div className="flex items-center mb-4">
                      <i className="ri-gift-fill w-8 h-8 flex items-center justify-center text-purple-600 mr-3"></i>
                      <h3 className="text-xl font-bold text-gray-800">レンタル</h3>
                    </div>
                    <p className="text-gray-700">グローブ・プロテクター無料レンタル！手ぶらでお越しいただけます</p>
                  </div>
                </div>

                {/* 体験の流れ */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">体験の流れ</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-pink-500">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                        <div>
                          <h4 className="font-bold text-gray-800">カウンセリング（5分）</h4>
                          <p className="text-sm text-gray-600">目標や体調について簡単なヒアリング</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-blue-500">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                        <div>
                          <h4 className="font-bold text-gray-800">ウォーミングアップ（5分）</h4>
                          <p className="text-sm text-gray-600">軽いストレッチと準備運動</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-green-500">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                        <div>
                          <h4 className="font-bold text-gray-800">基本動作練習（15分）</h4>
                          <p className="text-sm text-gray-600">パンチ・キックの基本フォーム</p>
                          <div className="mt-4">
                            <h5 className="font-bold text-gray-800 mb-2">体験レッスンの内容</h5>
                            <ul className="text-sm text-gray-600 space-y-2">
                              <li>
                                <span className="font-bold">キックボクシング（初心者）:</span>
                                ストレッチ、縄跳び5分、シャドーボクシング（構えをレクチャー）、サンドバッグ2R、ミット2R
                              </li>
                              <li>
                                <span className="font-bold">キックボクシング（中級者）:</span>
                                HEETトレーニング（短時間で強力な）、スパーリング（インストラクターと軽めのマススパーリング）
                              </li>
                              <li>
                                <span className="font-bold">キックボクシング（プロ選手向け）:</span>
                                ワットバイク（プロアスリート並のトレーニング）も選択可能です
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-purple-500">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                        <div>
                          <h4 className="font-bold text-gray-800">クールダウン・相談（5分）</h4>
                          <p className="text-sm text-gray-600">質問やご相談にお答えします</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 申込方法セクション */}
            <div className="bg-gradient-to-br from-white to-blue-50 p-8 sm:p-12 rounded-3xl shadow-2xl border-4 border-blue-200 mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-center">
                📝 申込方法
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {/* LINEでの申込 */}
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 sm:p-8 rounded-2xl border-4 border-green-300 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="ri-line-fill w-10 h-10 flex items-center justify-center text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">LINEで簡単申込</h3>
                  <p className="text-gray-700 mb-6 text-sm">一番おすすめの申込方法です</p>
                  <a
                    href="https://lin.ee/21ape6V"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 cursor-pointer text-center block whitespace-nowrap shadow-lg transform hover:scale-105"
                  >
                    🌟 LINEで体験申込 🌟
                  </a>
                </div>

                {/* メールでの申込 */}
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 sm:p-8 rounded-2xl border-4 border-blue-300 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="ri-mail-fill w-10 h-10 flex items-center justify-center text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">メールでの申込</h3>
                  <p className="text-gray-700 mb-4 text-sm">flatupgym@gmail.com</p>
                  <p className="text-gray-700 mb-6 text-sm">お気軽にメールでお申し込みください</p>
                  <a
                    href="mailto:flatupgym@gmail.com"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 cursor-pointer text-center block whitespace-nowrap shadow-lg transform hover:scale-105"
                  >
                    📧 メールで申込
                  </a>
                </div>

                {/* 電話での申込 */}
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-6 sm:p-8 rounded-2xl border-4 border-orange-300 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="ri-phone-fill w-10 h-10 flex items-center justify-center text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">お電話での申込</h3>
                  <p className="text-gray-700 mb-4 text-lg font-bold">070-9035-3485</p>
                  <p className="text-gray-700 mb-6 text-sm">営業時間内にお電話ください</p>
                  <a
                    href="tel:070-9035-3485"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 cursor-pointer text-center block whitespace-nowrap shadow-lg transform hover:scale-105"
                  >
                    📞 電話で申込
                  </a>
                </div>
              </div>
            </div>

            {/* よくある質問 */}
            <div className="bg-gradient-to-br from-white to-yellow-50 p-8 sm:p-12 rounded-3xl shadow-2xl border-4 border-yellow-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-center">
                ❓ よくある質問
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h4 className="font-bold text-gray-800 mb-3">Q. 運動経験がなくても大丈夫？</h4>
                  <p className="text-gray-700">A. もちろんです！お一人お一人のレベルに合わせて丁寧に指導いたします。</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h4 className="font-bold text-gray-800 mb-3">Q. 女性でも安心して参加できる？</h4>
                  <p className="text-gray-700">A. 女性オーナーが運営しており、女性の方も安心してご参加いただけます。</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h4 className="font-bold text-gray-800 mb-3">Q. 子供も体験できる？</h4>
                  <p className="text-gray-700">A. 小学生から体験可能です。キッズ専用の時間もご用意しております。</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h4 className="font-bold text-gray-800 mb-3">Q. 駐車場はある？</h4>
                  <p className="text-gray-700">A. 無料駐車場を完備しております。お車でもお気軽にお越しください。</p>
                </div>
              </div>
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

      <Footer />
    </div>
  );
}