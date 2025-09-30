
'use client';


import OptimizedImage from '@/components/OptimizedImage';
import SEO from '@/components/SEO';
import { breadcrumbJsonLd } from '@/lib/json-ld';

export default function Schedule() {
  const scheduleData = {
    月: [
      { time: '10:30-11:00', class: '産後クラス', trainer: 'AIKA', color: 'bg-pink-100 border-pink-300 text-pink-800' },
      { time: '11:00-12:00', class: 'レディースクラス', trainer: 'AIKA', color: 'bg-green-100 border-green-300 text-green-800' },
      { time: '18:00-21:00', class: '初心者キックボクシング', trainer: 'AIKA', color: 'bg-purple-100 border-purple-300 text-purple-800' },
    ],
    火: [
      { time: '10:30-11:00', class: 'シニアクラス', trainer: 'HITOSHI', color: 'bg-orange-100 border-orange-300 text-orange-800' },
      { time: '11:00-12:00', class: '初心者MMAクラス', trainer: 'HITOSHI', color: 'bg-red-100 border-red-300 text-red-800' },
      { time: '18:00-19:00', class: 'キッズクラス', trainer: 'MASAKI', color: 'bg-blue-100 border-blue-300 text-blue-800' },
      { time: '20:00-21:00', class: '選手クラス', trainer: 'HITOSHI', color: 'bg-red-100 border-red-300 text-red-800' },
    ],
    水: [
      { time: '10:30-11:00', class: '産後クラス', trainer: 'AIKA', color: 'bg-pink-100 border-pink-300 text-pink-800' },
      { time: '11:00-12:00', class: 'レディースクラス', trainer: 'AIKA', color: 'bg-green-100 border-green-300 text-green-800' },
      { time: '18:00-21:00', class: '初心者キックボクシング', trainer: 'AIKA', color: 'bg-purple-100 border-purple-300 text-purple-800' },
    ],
    木: [
      { time: '18:00-19:00', class: 'キッズクラス', trainer: 'MASAKI', color: 'bg-blue-100 border-blue-300 text-blue-800' },
      { time: '20:00-21:00', class: '選手クラス', trainer: 'HITOSHI', color: 'bg-red-100 border-red-300 text-red-800' },
    ],
    金: [
      { time: '10:30-11:00', class: '産後クラス', trainer: 'AIKA', color: 'bg-pink-100 border-pink-300 text-pink-800' },
      { time: '11:00-12:00', class: '初心者キックボクシング', trainer: 'AIKA', color: 'bg-purple-100 border-purple-300 text-purple-800' },
      { time: '18:00-19:00', class: '女子選手クラス', trainer: 'AIKA', color: 'bg-green-100 border-green-300 text-green-800' },
      { time: '20:00-21:00', class: 'BJJクラス', trainer: 'MIICHI', color: 'bg-purple-100 border-purple-300 text-purple-800' },
    ],
    土: [
      { time: '10:30-11:00', class: 'シニアクラス', trainer: 'HITOSHI', color: 'bg-orange-100 border-orange-300 text-orange-800' },
      { time: '11:00-12:00', class: 'BJJクラス', trainer: 'MIICHI', color: 'bg-purple-100 border-purple-300 text-purple-800' },
      { time: '13:00-14:00', class: 'キッズクラス', trainer: 'MASAKI', color: 'bg-blue-100 border-blue-300 text-blue-800' },
      { time: '14:00-15:00', class: 'レディース', trainer: 'AIKA', color: 'bg-green-100 border-green-300 text-green-800' },
    ],
    日: []
  };

  const dayOrder = ['月', '火', '水', '木', '金', '土', '日'];

  const scheduleBreadcrumbs = breadcrumbJsonLd([
    { name: 'Home', url: 'https://flat-up.jp/' },
    { name: 'Schedule', url: 'https://flat-up.jp/schedule' },
  ]);

  return (
    <div className="min-h-screen">
      <SEO
        title="週間スケジュール・クラス時間割｜成田の格闘技ジム FLATUPGYM"
        description="FLATUPGYMの最新週間スケジュールとクラス時間割をご確認いただけます。キックボクシング、柔術、キッズクラスなど、あなたのライフスタイルに合わせたクラスを見つけてください。無料体験レッスンも受付中."
        jsonLd={scheduleBreadcrumbs}
      />
      

      <main>
        {/* ヒーローセクション */}
        <section
          className="relative min-h-screen flex items-center overflow-hidden"
        >
          <OptimizedImage
            src="https://ik.imagekit.io/FLATUPGYM/DSC07248.png?tr=w-3840,f-auto"
            alt="ジムのトレーニング風景"
            className="object-cover object-center brightness-75 w-full h-full absolute inset-0"
            width={1920}
            height={1080}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-green-500/20 to-purple-400/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                📅 週間スケジュール 📅<br />
                クラス時間割
              </h1>
              <p className="text-2xl md:text-3xl text-white/95 mb-12 leading-relaxed font-medium">
                あなたのライフスタイルに合わせて<br />
                最適なクラスを選択できます♪
              </p>
            </div>
          </div>
        </section>

        {/* メインスケジュール表 */}
        <section className="py-24 bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-8">
                🗓️ 月間スケジュール（最終版） 🗓️
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                各クラスの時間と担当トレーナーをご確認ください
              </p>
            </div>

            {/* 週間スケジュール表 - レスポンシブ対応改善 */}
            <div className="bg-white/90 p-4 sm:p-6 lg:p-8 rounded-3xl shadow-2xl border-4 border-blue-200 mb-12">
              <div className="overflow-x-auto">
                <div className="min-w-full">
                  {/* モバイル表示 */}
                  <div className="block sm:hidden space-y-4">
                    {dayOrder.map((day) => (
                      <div key={day} className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-4">
                        <h3 className={`text-lg font-bold text-center py-2 rounded-lg mb-4 ${day === '日' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                          {day}曜日
                        </h3>
                        <div className="space-y-3">
                          {scheduleData[day as keyof typeof scheduleData].length > 0 ? (
                            scheduleData[day as keyof typeof scheduleData].map((lesson, index) => (
                              <div
                                key={index}
                                className={`p-3 rounded-xl border-2 ${lesson.color} shadow-md hover:shadow-lg transition-shadow duration-300`}
                              >
                                <div className="font-bold text-sm mb-1">{lesson.time}</div>
                                <div className="font-semibold text-base mb-1">{lesson.class}</div>
                                <div className="text-sm opacity-80">担当: {lesson.trainer}</div>
                              </div>
                            ))
                          ) : (
                            <div className="text-center text-gray-400 py-8">
                              <i className="ri-rest-time-fill w-8 h-8 flex items-center justify-center mx-auto mb-2 opacity-50"></i>
                              <span className="text-sm">休み</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* デスクトップ表示 */}
                  <table className="hidden sm:table w-full border-collapse">
                    <thead>
                      <tr>
                        {dayOrder.map((day) => (
                          <th
                            key={day}
                            className={`p-2 md:p-4 text-center font-bold text-sm md:text-lg border-2 border-gray-300 ${day === '日' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}
                          >
                            {day}曜日
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {dayOrder.map((day) => (
                          <td key={day} className="p-2 md:p-4 border-2 border-gray-300 align-top bg-white w-1/7" style={{ minHeight: '300px' }}>
                            <div className="space-y-2 md:space-y-3">
                              {scheduleData[day as keyof typeof scheduleData].length > 0 ? (
                                scheduleData[day as keyof typeof scheduleData].map((lesson, index) => (
                                  <div
                                    key={index}
                                    className={`p-2 md:p-3 rounded-xl border-2 ${lesson.color} shadow-md hover:shadow-lg transition-shadow duration-300`}
                                  >
                                    <div className="font-bold text-xs md:text-sm mb-1">{lesson.time}</div>
                                    <div className="font-semibold text-sm md:text-base mb-1">{lesson.class}</div>
                                    <div className="text-xs md:text-sm opacity-80">担当: {lesson.trainer}</div>
                                  </div>
                                ))
                              ) : (
                                <div className="text-center text-gray-400 py-4 md:py-8">
                                  <i className="ri-rest-time-fill w-6 md:w-8 h-6 md:h-8 flex items-center justify-center mx-auto mb-2 opacity-50"></i>
                                  <span className="text-xs md:text-sm">休み</span>
                                </div>
                              )}
                            </div>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 担当講師一覧 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-gradient-to-br from-pink-100 to-purple-200 p-6 rounded-3xl shadow-xl border-4 border-pink-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-user-heart-fill w-8 h-8 flex items-center justify-center text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">AIKA</h3>
                  <p className="text-sm text-pink-700 font-medium">代表・ダイエットインストラクター</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="bg-white/70 p-2 rounded-lg">
                    <span className="font-bold">担当:</span> 産後・レディース
                  </div>
                  <div className="bg-white/70 p-2 rounded-lg">
                    <span className="font-bold">曜日:</span> 月・水・金・土
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-100 to-orange-200 p-6 rounded-3xl shadow-xl border-4 border-red-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-boxing-fill w-8 h-8 flex items-center justify-center text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">HITOSHI</h3>
                  <p className="text-sm text-red-600 font-medium">キック・総合格闘技・MMA</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="bg-white/70 p-2 rounded-lg">
                    <span className="font-bold">担当:</span> シニア・選手育成
                  </div>
                  <div className="bg-white/70 p-2 rounded-lg">
                    <span className="font-bold">曜日:</span> 火・木・土
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-indigo-200 p-6 rounded-3xl shadow-xl border-4 border-purple-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-sword-fill w-8 h-8 flex items-center justify-center text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">MIICHI</h3>
                  <p className="text-sm text-purple-600 font-medium">柔術・BJJ専門</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="bg-white/70 p-2 rounded-lg">
                    <span className="font-bold">担当:</span> BJJ
                  </div>
                  <div className="bg-white/70 p-2 rounded-lg">
                    <span className="font-bold">曜日:</span> 金曜日
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-cyan-200 p-6 rounded-3xl shadow-xl border-4 border-blue-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-team-fill w-8 h-8 flex items-center justify-center text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">MASAKI</h3>
                  <p className="text-sm text-blue-600 font-medium">キッズクラスインストラクター</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="bg-white/70 p-2 rounded-lg">
                    <span className="font-bold">担当:</span> キッズクラス
                  </div>
                  <div className="bg-white/70 p-2 rounded-lg">
                    <span className="font-bold">曜日:</span> 火・木・土
                  </div>
                </div>
              </div>
            </div>

            {/* クラス詳細情報 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-3xl shadow-xl border-2 border-pink-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="ri-parent-fill w-8 h-8 flex items-center justify-center text-pink-700 mr-3"></i>
                  産後クラス
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">📅 スケジュール</h4>
                    <p className="text-gray-700">月・水・金 AM10:30-11:00</p>
                    <p className="text-sm text-gray-600">レッスン時間: 30分</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">👩🏫 担当講師</h4>
                    <p className="text-gray-700">AIKA（代表トレーナー）</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">💡 内容</h4>
                    <p className="text-gray-700 text-sm">産後の体力回復・骨盤矯正・ストレス解消</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-3xl shadow-xl border-2 border-orange-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="ri-elderly-fill w-8 h-8 flex items-center justify-center text-orange-600 mr-3"></i>
                  シニアクラス
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">📅 スケジュール</h4>
                    <p className="text-gray-700">火・土 AM10:30-11:00</p>
                    <p className="text-sm text-gray-600">レッスン時間: 30分</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">👨🏫 担当講師</h4>
                    <p className="text-gray-700">HITOSHI</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">💡 内容</h4>
                    <p className="text-gray-700 text-sm">健康維持・認知症予防・仲間作り</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl shadow-xl border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="ri-emotion-happy-fill w-8 h-8 flex items-center justify-center text-blue-600 mr-3"></i>
                  キッズクラス
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">📅 スケジュール</h4>
                    <p className="text-gray-700">火・木 PM18:00-19:00</p>
                    <p className="text-gray-700">土 PM13:00-14:00</p>
                    <p className="text-sm text-gray-600">レッスン時間: 60分</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">👨🏫 担当講師</h4>
                    <p className="text-gray-700">MASAKI</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">💡 内容</h4>
                    <p className="text-gray-700 text-sm">礼儀・体力向上・護身術・自信育成</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl shadow-xl border-2 border-green-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="ri-women-fill w-8 h-8 flex items-center justify-center text-green-600 mr-3"></i>
                  レディースクラス
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">📅 スケジュール</h4>
                    <p className="text-gray-700">土 PM14:00-15:00</p>
                    <p className="text-sm text-gray-600">レッスン時間: 60分</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">👩🏫 担当講師</h4>
                    <p className="text-gray-700">AIKA（代表トレーナー）</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">💡 内容</h4>
                    <p className="text-gray-700 text-sm">ダイエット・美容・護身術・ストレス解消</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-3xl shadow-xl border-2 border-red-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="ri-trophy-fill w-8 h-8 flex items-center justify-center text-red-600 mr-3"></i>
                  選手クラス
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">📅 スケジュール</h4>
                    <p className="text-gray-700">火・木 20:00-21:00</p>
                    <p className="text-gray-700">土 11:00-12:00</p>
                    <p className="text-sm text-gray-600">レッスン時間: 60分</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">👨🏫 担当講師</h4>
                    <p className="text-gray-700">HITOSHI</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">💡 内容</h4>
                    <p className="text-gray-700 text-sm">競技指向・大会参加・本格的技術向上</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl shadow-xl border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="ri-sword-fill w-8 h-8 flex items-center justify-center text-purple-600 mr-3"></i>
                  BJJ（柔術）
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">📅 スケジュール</h4>
                    <p className="text-gray-700">金 20:00-21:00</p>
                    <p className="text-gray-700">土 11:00-12:00</p>
                    <p className="text-sm text-gray-600">レッスン時間: 60分</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">👨🏫 担当講師</h4>
                    <p className="text-gray-700">MIICHI</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">💡 内容</h4>
                    <p className="text-gray-700 text-sm">ブラジリアン柔術・グラップリング技術</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 注意事項・お知らせ */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-8 rounded-3xl shadow-xl border-4 border-yellow-300 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
                <i className="ri-information-fill w-8 h-8 flex items-center justify-center text-orange-600 mr-3"></i>
                スケジュールに関するお知らせ
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/70 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <i className="ri-calendar-check-fill w-6 h-6 flex items-center justify-center text-green-600 mr-2"></i>
                    振替制度について
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    急な予定変更でも安心。翌月まで振替可能で無駄がありません。事前にご連絡ください。
                  </p>
                </div>
                <div className="bg-white/70 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <i className="ri-time-fill w-6 h-6 flex items-center justify-center text-blue-600 mr-2"></i>
                    レッスン時間
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    産後・シニアクラス：30分<br />
                    その他のクラス：60分<br />
                    体験レッスン：30分
                  </p>
                </div>
                <div className="bg-white/70 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <i className="ri-phone-fill w-6 h-6 flex items-center justify-center text-purple-600 mr-2"></i>
                    予約・お問い合わせ
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    LINE：@flatupgym<br />
                    電話：070-9035-3485<br />
                    お気軽にご相談ください
                  </p>
                </div>
                <div className="bg-white/70 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <i className="ri-calendar-todo-fill w-6 h-6 flex items-center justify-center text-red-600 mr-2"></i>
                    休館日
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    日曜・祝日<br />
                    年末年始・お盆期間<br />
                    その他臨時休館あり
                  </p>
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
              📅 スケジュールを確認して体験予約しませんか？ 📅
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              あなたのライフスタイルに合う時間帯を見つけて<br />
              まずは無料体験レッスンからスタート♪
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
              <a
                href="https://lin.ee/21ape6V"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-2xl transform hover:scale-105 border-4 border-yellow-300 animate-bounce"
              >
                ⏰ 今すぐ体験予約する ⏰
              </a>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}
