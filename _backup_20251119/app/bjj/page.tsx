
'use client';


import OptimizedImage from '@/components/OptimizedImage';
import SEO from '@/components/SEO';
import { breadcrumbJsonLd } from '@/lib/json-ld';

export default function BJJ() {
  const bjjBreadcrumbs = breadcrumbJsonLd([
    { name: 'Home', url: 'https://flat-up.jp/' },
    { name: 'BJJ', url: 'https://flat-up.jp/bjj' },
  ]);

  return (
    <div className="min-h-screen">
      <SEO
        title="ブラジリアン柔術（BJJ）｜成田で護身術と知的格闘技を学ぶ"
        description="成田のFLATUPGYMでブラジリアン柔術（BJJ）を始めませんか？体格や力に関係なく、技術で相手を制する「人間チェス」。護身術にも最適で、初心者から経験者まで楽しめます。"
        jsonLd={bjjBreadcrumbs}
      />
      

      <main>
        {/* ヒーローセクション */}
        <section 
          className="relative min-h-screen bg-cover bg-center flex items-center"
          style={{
            backgroundImage: "url('https://static.readdy.ai/image/2b67e91b93297abf46fa657fa406cc3b/fb1cbf13043a9fcd8a4b7f315e39a548.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-8 sm:p-12 md:p-16 rounded-3xl border-2 border-white/30 shadow-2xl max-w-2xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 sm:mb-8 leading-tight drop-shadow-2xl">
                  BJJ<br />
                  <span className="text-purple-300">ブラジリアン柔術</span>
                </h1>
                
                <div className="space-y-4 sm:space-y-6 text-white drop-shadow-lg">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold">
                    「人間チェス」と呼ばれる知的格闘技
                  </p>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    体格や力に関係なく、技術で勝利する喜び
                  </p>
                  <div className="bg-purple-500/30 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-purple-300/50">
                    <p className="text-lg sm:text-xl font-bold text-purple-200 mb-2">🛡️ 護身術に最適</p>
                    <p className="text-sm sm:text-base text-purple-100">
                      実用的な技術で、いざという時に身を守れます
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* テキストセクション - 画像と分離 */}
        <section className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-8 leading-tight">
                ブラジリアン柔術 (BJJ)
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-medium max-w-3xl mx-auto">
                【年齢・体力問わず楽しめる柔術】<br/>
                護身術や頭脳プレーを学べるブラジリアン柔術。女性やシニアにも人気の格闘技です。体力に自信がなくても技術で勝負できるのが魅力。
              </p>
              <div className="flex justify-center flex-wrap gap-4">
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">初心者〜上級者</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">年齢制限なし</span>
                  <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-semibold">24時間利用可能</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">奥深い技術の世界</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ブラジリアン柔術（BJJ）は、力に頼らず技術で相手を制する格闘技です。
                  体格や力の差を技術で覆すことができる、まさに「人間チェス」と呼ばれる奥深いスポーツです。
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-white"></i>
                    </div>
                    <span className="text-gray-700">体格差を技術で覆す</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-white"></i>
                    </div>
                    <span className="text-gray-700">冷静な判断力が身につく</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-white"></i>
                    </div>
                    <span className="text-gray-700">護身術としても実用的</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-white"></i>
                    </div>
                    <span className="text-gray-700">年齢問わず楽しめる</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">🎯 BJJの特徴</h3>
                <div className="space-y-6">
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-purple-800 mb-2">🧠 知的スポーツ</h4>
                    <p className="text-gray-700 text-sm">相手の動きを読み、最適な技を選択する「人間チェス」</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-blue-800 mb-2">⚖️ 体格差無関係</h4>
                    <p className="text-gray-700 text-sm">小柄な人でも大柄な相手を制することができる</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-indigo-800 mb-2">🛡️ 実用的護身術</h4>
                    <p className="text-gray-700 text-sm">実際の危険な状況でも役立つ実戦的な技術</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 担当トレーナー紹介 */}
        <section className="py-24 bg-gradient-to-br from-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-8">
                🥋 専門指導者 🥋
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-white to-purple-50 p-10 rounded-3xl shadow-2xl border-4 border-purple-200">
                <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8">
                  <div className="flex-shrink-0">
                    <OptimizedImage
                      width={160}
                      height={160}
                      src="/miichi%20-%20%E7%B7%A8%E9%9B%86%E6%B8%88%E3%81%BF.jpg"
                      alt="柔術専門トレーナー MIICHI"
                      className="w-40 h-40 rounded-2xl object-cover object-top border-6 border-purple-400 shadow-xl"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-800 mb-3">MIICHI</h3>
                    <p className="text-lg text-purple-600 font-bold mb-4">柔術・BJJ専門インストラクター</p>
                    <p className="text-sm text-purple-700 font-medium mb-4">ブラジリアン柔術（今成柔術の正統継承者）</p>

                    <div className="bg-purple-50 p-4 rounded-xl mb-6">
                      <p className="text-gray-700 leading-relaxed">
                        奥深い足関節の技術と哲学を丁寧に指導。
                        体格や力に関係なく、技術で勝利する喜びをとても優しく教えてくれます。
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <i className="ri-medal-fill w-5 h-5 flex items-center justify-center text-purple-600"></i>
                        <span className="text-gray-700">BJJ有段者・今成柔術継承者</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="ri-brain-fill w-5 h-5 flex items-center justify-center text-purple-600"></i>
                        <span className="text-gray-700">技術重視の指導スタイル</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="ri-zen-fill w-5 h-5 flex items-center justify-center text-purple-600"></i>
                        <span className="text-gray-700">精神面も重視した指導</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="ri-foot-print-fill w-5 h-5 flex items-center justify-center text-purple-600"></i>
                        <span className="text-gray-700">足関節技術のスペシャリスト</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* クラススケジュール */}
        <section className="py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                📅 BJJクラススケジュール 📅
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/90 p-8 rounded-3xl shadow-2xl border-4 border-purple-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
                  <i className="ri-calendar-fill w-8 h-8 flex items-center justify-center text-purple-600 mr-3"></i>
                  金曜日クラス
                </h3>
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">20:00 - 21:00</div>
                    <div className="text-lg text-gray-700">60分間の本格指導</div>
                  </div>
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">📋 内容</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• 基本的な技術習得</li>
                      <li>• スパーリング練習</li>
                      <li>• 足関節技術特訓</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 p-8 rounded-3xl shadow-2xl border-4 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
                  <i className="ri-calendar-fill w-8 h-8 flex items-center justify-center text-blue-600 mr-3"></i>
                  土曜日クラス
                </h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">11:00 - 12:00</div>
                    <div className="text-lg text-gray-700">60分間の本格指導</div>
                  </div>
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">📋 内容</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• 技術練習とドリル</li>
                      <li>• ポジション練習</li>
                      <li>• 実戦的スパーリング</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-white/90 p-8 rounded-3xl shadow-2xl max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 初心者も安心</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  初めての方でも大丈夫！基礎から丁寧に指導いたします。
                  柔術着のレンタルもありますので、動きやすい服装でお越しください。
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="bg-purple-50 px-4 py-2 rounded-full">
                    <span className="text-purple-600 font-medium">👕 柔術着レンタル有</span>
                  </div>
                  <div className="bg-blue-50 px-4 py-2 rounded-full">
                    <span className="text-blue-600 font-medium">🔰 初心者歓迎</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BJJの効果・メリット */}
        <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
                🎯 BJJで得られる効果 🎯
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white to-purple-100 p-8 rounded-3xl shadow-xl border-2 border-purple-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-brain-fill w-8 h-8 flex items-center justify-center text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">思考力・判断力向上</h3>
                </div>
                <p className="text-gray-700 text-center leading-relaxed">
                  相手の動きを先読みし、最適な技を選択する能力が身につきます。日常生活でも冷静な判断ができるように。
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-blue-100 p-8 rounded-3xl shadow-xl border-2 border-blue-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-shield-check-fill w-8 h-8 flex items-center justify-center text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">実用的護身術</h3>
                </div>
                <p className="text-gray-700 text-center leading-relaxed">
                  体格差があっても身を守ることができる実戦的な技術。万が一の状況でも冷静に対処できる自信がつきます。
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-indigo-100 p-8 rounded-3xl shadow-xl border-2 border-indigo-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-heart-pulse-fill w-8 h-8 flex items-center justify-center text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">体力・柔軟性向上</h3>
                </div>
                <p className="text-gray-700 text-center leading-relaxed">
                  全身を使った運動で体力アップ。関節の可動域も広がり、日常動作がスムーズになります。
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-green-100 p-8 rounded-3xl shadow-xl border-2 border-green-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-mental-health-fill w-8 h-8 flex items-center justify-center text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">メンタル強化</h3>
                </div>
                <p className="text-gray-700 text-center leading-relaxed">
                  プレッシャーの中で冷静さを保つ訓練により、ストレス耐性が向上。精神的にタフになります。
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-yellow-100 p-8 rounded-3xl shadow-xl border-2 border-yellow-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-group-fill w-8 h-8 flex items-center justify-center text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">コミュニティ形成</h3>
                </div>
                <p className="text-gray-700 text-center leading-relaxed">
                  技術を教え合い、共に成長する仲間との絆。年齢や職業を超えた友情が生まれます。
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-pink-100 p-8 rounded-3xl shadow-xl border-2 border-pink-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-trophy-fill w-8 h-8 flex items-center justify-center text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">達成感・自信</h3>
                </div>
                <p className="text-gray-700 text-center leading-relaxed">
                  新しい技術を習得するたびに得られる達成感。自分の成長を実感できる喜びがあります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 体験レッスン案内 */}
        <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-pink-400/20 animate-pulse"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              🥋 BJJ無料体験レッスン開催中！ 🥋
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              技術で勝負する格闘技の奥深さを体感してみませんか？<br />
              初心者の方も安心してご参加いただけます♪
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
              <a
                href="https://lin.ee/21ape6V"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-2xl transform hover:scale-105 border-4 border-yellow-300 animate-bounce"
              >
                🥋 今すぐBJJ体験申込 🥋
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
