'use client';


import OptimizedImage from '../../components/OptimizedImage';
import { useState } from 'react';
import SEO, { gymJsonLd } from '../../components/SEO';
import { breadcrumbJsonLd } from '../../lib/json-ld';

export default function Access() {
  const [activeTab, setActiveTab] = useState('map');
  

  const accessBreadcrumbs = breadcrumbJsonLd([
    { name: 'Home', url: 'https://flat-up.jp/' },
    { name: 'Access', url: 'https://flat-up.jp/access' },
  ]);

  return (
    <div className="min-h-screen">
      <SEO
        title="店舗案内・アクセス｜JR成田駅・京成成田駅 徒歩5分 - FLATUPGYM"
        description="京成成田駅から車で12分。清潔感あふれる空間で、あなたをお待ちしています。写真付きの詳しい道順や、施設の内部もご覧いただけます。"
        jsonLd={{ ...gymJsonLd, ...accessBreadcrumbs }}
      />
      

      <main>
        {/* ヒーローセクション - 120点レベルに昇華 */}
        <section
          className="relative min-h-screen bg-cover bg-center flex items-center overflow-hidden"
        >
          <OptimizedImage
            src="https://ik.imagekit.io/FLATUPGYM/Gemini_Generated_Image_32g1lx32g1lx32g1.png"
            alt="アクセスページの背景画像"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* 洗練されたオーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-green-500/20 to-yellow-400/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
          
          {/* 動的エフェクト */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{ top: '15%', left: '20%', animationDelay: '0s' }}></div>
            <div className="absolute w-3 h-3 bg-yellow-300/40 rounded-full animate-bounce" style={{ top: '70%', left: '80%', animationDelay: '1s' }}></div>
            <div className="absolute w-1 h-1 bg-green-300/50 rounded-full animate-ping" style={{ top: '30%', left: '90%', animationDelay: '2s' }}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              {/* Hero section title and subtitle updated by Agent based on user request */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight transform hover:scale-105 transition-transform duration-500 cursor-default">
                <span className="block mb-4 animate-fadeInUp">アクセス</span>
                <span className="text-4xl md:text-6xl text-yellow-300 animate-pulse">🗺️ アクセスマップ 🗺️</span>
              </h1>
              <p className="text-2xl md:text-3xl text-white/95 mb-12 leading-relaxed font-medium transform hover:scale-105 transition-transform duration-300">
                お気軽にお越しください♪<br />
                まずは無料体験から始めませんか？
              </p>
              
              {/* 洗練されたクイックアクションボタン群 */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="https://lin.ee/21ape6V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl text-xl font-bold transition-all duration-500 cursor-pointer shadow-2xl transform hover:scale-105 overflow-hidden animate-bounce"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10 flex items-center justify-center">
                    <i className="ri-line-fill w-6 h-6 flex items-center justify-center mr-3"></i>
                    強くて優しい、新しい自分に会いに行く
                  </span>
                </a>
                <a
                  href="tel:070-9035-3485"
                  className="group bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-full text-xl font-bold transition-all duration-500 cursor-pointer shadow-2xl transform hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10 flex items-center justify-center">
                    <i className="ri-phone-fill w-6 h-6 flex items-center justify-center mr-3"></i>
                    今すぐ電話
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* インタラクティブタブセクション - 120点レベル */}
        <section className="py-24 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 relative overflow-hidden">
          {/* 背景デコレーション */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-green-300/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* インタラクティブタブナビゲーション */}
            <div className="flex justify-center mb-16">
              <div className="bg-white/80 backdrop-blur-lg rounded-full p-2 shadow-2xl border border-white/30">
                <div className="flex space-x-2">
                  {[
                    { id: 'info', label: '基本情報', icon: 'ri-information-fill' },
                    { id: 'map', label: 'アクセス', icon: 'ri-map-fill' },
                    { id: 'booking', label: '予約', icon: 'ri-calendar-check-fill' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative px-6 py-3 rounded-full font-bold transition-all duration-500 ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                          : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                      }`}
                    >
                      <i className={`${tab.icon} w-5 h-5 flex items-center justify-center mr-2 inline-block`}></i>
                      {tab.label}
                      {activeTab === tab.id && (
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* タブコンテンツ */}
            <div className="min-h-[600px]">
              {/* 基本情報タブ */}
              {activeTab === 'info' && (
                <div className="animate-fadeIn grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="bg-gradient-to-br from-white to-blue-50 p-10 rounded-3xl shadow-2xl border-4 border-blue-200 transform hover:scale-[1.02] transition-all duration-500">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                      <i className="ri-map-pin-fill w-8 h-8 flex items-center justify-center text-blue-600 mr-3"></i>
                      基本情報
                    </h3>
                    <div className="space-y-6">
                      <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <i className="ri-home-4-fill w-6 h-6 flex items-center justify-center text-white"></i>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">住所</h4>
                          {/* Address updated by Agent based on user request */}
                          <p className="text-gray-700 text-lg">〒286-0021 千葉県成田市土屋516-4 青柳ビル 2F</p>
                        </div>
                      </div>
                      <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-green-50 transition-colors duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <i className="ri-phone-fill w-6 h-6 flex items-center justify-center text-white"></i>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">電話番号</h4>
                          <p className="text-gray-700 text-lg">070-9035-3485</p>
                          <p className="text-sm text-gray-600">お気軽にお電話ください</p>
                        </div>
                      </div>
                      <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-yellow-50 transition-colors duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <i className="ri-car-fill w-6 h-6 flex items-center justify-center text-white"></i>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">駐車場</h4>
                          <p className="text-gray-700 text-lg">大型駐車場無料で完備</p>
                          <p className="text-sm text-gray-600">大型車両でも安心してご利用いただけます</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white to-green-50 p-10 rounded-3xl shadow-2xl border-4 border-green-200 transform hover:scale-[1.02] transition-all duration-500">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                      <i className="ri-image-fill w-8 h-8 flex items-center justify-center text-green-600 mr-3"></i>
                      ジム外観・駐車場
                    </h3>
                    <div className="w-full overflow-hidden rounded-2xl shadow-xl group">
                      <OptimizedImage
                        width={600}
                        height={400}
                        src="https://ik.imagekit.io/FLATUPGYM/%E5%A4%96%E8%A6%B3.png"
                        alt="FLAT-UPGYMの外観と大型駐車場"
                        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="mt-6 text-center">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        清潔感のある外観と、ゆったりとした大型駐車場で<br />
                        どなたでも安心してお越しいただけます<br />
                        <span className="text-sm text-gray-600 font-medium">当ジムは２Fにございます</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* マップタブ - 洗練されたインタラクティブマップ */}
              {activeTab === 'map' && (
                <div className="animate-fadeIn">
                  <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-2xl border-4 border-blue-200">
                    <div className="text-center mb-8">
                      <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-4">
                        🗺️ アクセスマップ 🗺️
                      </h2>
                    </div>
                    
                    <div className="relative">
            <div className="responsive-iframe-container mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.593143597535!2d140.3152220762999!3d35.78493192583973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60228a63381a256d%3A0x8f7a1c3b9b1d953f!2z5LiW55WM5LiA5oSb44GX44GE44GN44KL5qCq6K2J5oqA44K444OgIEZMQVRVUEdZTSDvvIjlhYjnlJ_kvobvvIjpnZPlpKfljrvvvIjvvIjlupTpgZTvvIjvvIjkvZPvvIjvvIjkvY3vvIjvvIjkvobvvIjvvIjkvZPvvIjvvIjkvY0!5e0!3m2!1sen!2sjp!4v1722236789123!5m2!1sen!2sjp"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              ></iframe>
            </div>
                      
                      {/* アクセス方法 */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-2xl border-2 border-blue-200 transform hover:scale-105 transition-all duration-300">
                          <h4 className="font-bold text-gray-800 mb-4 flex items-center text-xl">
                            <i className="ri-car-fill w-6 h-6 flex items-center justify-center text-blue-600 mr-3"></i>
                            お車でお越しの方
                          </h4>
                          <ul className="text-gray-700 space-y-3 text-left">
                            <li className="flex items-center space-x-2">
                              <i className="ri-check-line w-4 h-4 flex items-center justify-center text-blue-500"></i>
                              <span>成田ICから約10分</span>
                            </li>
                            <li className="flex items-center space-x-2">
                              <i className="ri-check-line w-4 h-4 flex items-center justify-center text-blue-500"></i>
                              <span>国道51号線沿い</span>
                            </li>
                            <li className="flex items-center space-x-2">
                              <i className="ri-check-line w-4 h-4 flex items-center justify-center text-blue-500"></i>
                              <span>専用駐車場完備（無料）</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl border-2 border-green-200 transform hover:scale-105 transition-all duration-300">
                          <h4 className="font-bold text-gray-800 mb-4 flex items-center text-xl">
                            <i className="ri-train-fill w-6 h-6 flex items-center justify-center text-green-600 mr-3"></i>
                            電車でお越しの方
                          </h4>
                          <ul className="text-gray-700 space-y-3 text-left">
                            <li className="flex items-center space-x-2">
                              <i className="ri-check-line w-4 h-4 flex items-center justify-center text-green-500"></i>
                              <span>JR成田駅から車で15分</span>
                            </li>
                            <li className="flex items-center space-x-2">
                              <i className="ri-check-line w-4 h-4 flex items-center justify-center text-green-500"></i>
                              <span>京成成田駅から車で12分</span>
                            </li>
                            <li className="flex items-center space-x-2">
                              <i className="ri-check-line w-4 h-4 flex items-center justify-center text-green-500"></i>
                              <span>タクシーをご利用ください</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 予約タブ - 洗練されたフォーム */}
              {activeTab === 'booking' && (
                <div className="animate-fadeIn">
                  <div className="bg-gradient-to-br from-white to-pink-50 p-10 rounded-3xl shadow-2xl border-4 border-pink-200 max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                      <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4">
                        🎉 無料体験レッスン予約 🎉
                      </h2>
                      <p className="text-xl text-gray-700">初めての方でも安心！まずは気軽に体験してみませんか？</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                      <div className="bg-gradient-to-br from-pink-50 to-rose-100 p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <div className="ri-line-fill w-8 h-8 flex items-center justify-center text-white"></div>
                        </div>
                        <h4 className="font-bold text-gray-800 mb-3">LINEで簡単予約</h4>
                        <p className="text-gray-600 mb-4 text-sm">一番おすすめの予約方法</p>
                        <a
                          href="https://lin.ee/21ape6V"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-xl"
                        >
                          強くて優しい、新しい自分に会いに行く
                        </a>
                      </div>
                      
                      <div className="bg-gradient-to-br from-purple-50 to-indigo-100 p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <i className="ri-mail-fill w-8 h-8 flex items-center justify-center text-white"></i>
                        </div>
                        <h4 className="font-bold text-gray-800 mb-3">メールで予約</h4>
                        <p className="text-gray-600 mb-4 text-sm">flatupgym@gmail.com</p>
                        <a
                          href="mailto:flatupgym@gmail.com"
                          className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-xl"
                        >
                          メール送信
                        </a>
                      </div>
                      
                      <div className="bg-gradient-to-br from-orange-50 to-yellow-100 p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <i className="ri-phone-fill w-8 h-8 flex items-center justify-center text-white"></i>
                        </div>
                        <h4 className="font-bold text-gray-800 mb-3">お電話で予約</h4>
                        <p className="text-gray-600 mb-4 text-sm">070-9035-3485</p>
                        <a
                          href="tel:070-9035-3485"
                          className="inline-block bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-xl"
                        >
                          電話する
                        </a>
                      </div>
                    </div>
                    
                    {/* 体験レッスン詳細 */}
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl border-2 border-yellow-200">
                      <h4 className="font-bold text-gray-800 mb-6 text-2xl text-center">✨ 体験レッスン詳細 ✨</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <i className="ri-time-fill w-5 h-5 flex items-center justify-center text-yellow-600"></i>
                            <div>
                              <span className="font-bold text-gray-800">体験時間：</span>
                              <span className="text-gray-700 ml-2">30分間</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <i className="ri-money-dollar-circle-fill w-5 h-5 flex items-center justify-center text-green-600"></i>
                            <div>
                              <span className="font-bold text-gray-800">参加費：</span>
                              <span className="text-gray-700 ml-2 font-bold text-green-600">完全無料</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <i className="ri-t-shirt-fill w-5 h-5 flex items-center justify-center text-blue-600"></i>
                            <div>
                              <span className="font-bold text-gray-800">持ち物：</span>
                              <span className="text-gray-700 ml-2">動きやすい服装・タオル・飲み物</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <i className="ri-hand-heart-fill w-5 h-5 flex items-center justify-center text-purple-600"></i>
                            <div>
                              <span className="font-bold text-gray-800">レンタル：</span>
                              <span className="text-gray-700 ml-2 font-bold text-purple-600">グローブ・プロテクター無料</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        

        {/* 最終CTA - 120点レベルの感動的デザイン */}
        <section className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 relative overflow-hidden">
          {/* 動的背景エフェクト */}
          <div className="absolute inset-0">
            <div className="absolute w-96 h-96 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ top: '10%', left: '10%' }}></div>
            <div className="absolute w-80 h-80 bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse" style={{ top: '60%', right: '10%', animationDelay: '1s' }}></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 transform hover:scale-105 transition-transform duration-500 cursor-default">
              🌟 新しい自分に出会いに来ませんか？ 🌟
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              FLAT-UPGYMで、あなたらしく輝く第一歩を<br />
              一緒に踏み出しましょう♪
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://lin.ee/21ape6V"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 hover:from-yellow-500 hover:via-orange-600 hover:to-yellow-500 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-bold transition-all duration-500 cursor-pointer whitespace-nowrap shadow-2xl transform hover:scale-110 border-4 border-yellow-300/80 animate-bounce overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10 flex items-center">
                  <i className="ri-map-pin-fill w-5 h-5 flex items-center justify-center mr-2"></i>
                  強くて優しい、新しい自分に会いに行く
                </span>
              </a>
            </div>
          </div>
        </section>

      </main>

      
      
      {/* 洗練されたCSSアニメーション */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}