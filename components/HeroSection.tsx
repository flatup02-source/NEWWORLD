'use client';

import { memo } from 'react';

const HeroSection = memo(() => {
  return (
    <section
      data-hero
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center overflow-hidden"
      aria-label="メインヒーロー"
    >
      {/* RobustImageの代わりにvideoタグを配置 */}
      <video
        src="/newTOP.mov"
        autoPlay
        loop
        muted
        playsInline
        preload="auto" // これを追加
        poster="https://ik.imagekit.io/FLATUPGYM/tr:q-auto,f-auto/TOPP.png"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <track kind="captions" src="/captions.vtt" srcLang="ja" label="日本語字幕" />
        Your browser does not support the video tag.
      </video>
      
      {/* 洗練されたオーバーレイグラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

      {/* 動的パーティクル効果 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-2 h-2 bg-pink-400/30 rounded-full animate-ping" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
        <div className="absolute w-3 h-3 bg-yellow-400/20 rounded-full animate-pulse" style={{ top: '60%', left: '80%', animationDelay: '1s' }}></div>
        <div className="absolute w-1 h-1 bg-purple-400/40 rounded-full animate-bounce" style={{ top: '40%', left: '70%', animationDelay: '2s' }}></div>
        <div className="absolute w-2 h-2 bg-blue-400/25 rounded-full animate-pulse" style={{ top: '80%', left: '20%', animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center min-h-screen flex flex-col justify-center">
          <div className="mb-24 transform transition-all duration-1000 ease-out">
            {/* タイポグラフィの芸術的配置 */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-16 leading-[0.85] drop-shadow-2xl tracking-wider">
              <div className="text-white text-3xl sm:text-5xl md:text-6xl font-bold mb-8 drop-shadow-lg tracking-wide">
                世界一優しい格闘技ジム FLATUPGYM
              </div>
              <div className="text-pink-500 animate-bounce mb-8 drop-shadow-2xl transform hover:scale-105 transition-transform duration-500 cursor-default">
                <span className="inline-block transform hover:rotate-1 transition-transform duration-300">サ</span>
                <span className="inline-block transform hover:rotate-1 transition-transform duration-300 delay-75">ン</span>
                <span className="inline-block transform hover:rotate-1 transition-transform duration-300 delay-150">ド</span>
                <span className="inline-block transform hover:rotate-1 transition-transform duration-300 delay-225">バ</span>
                <span className="inline-block transform hover:rotate-1 transition-transform duration-300 delay-300">ッ</span>
                <span className="inline-block transform hover:rotate-1 transition-transform duration-300 delay-375">グ</span>
                <span className="inline-block transform hover:rotate-1 transition-transform duration-300 delay-450">を</span>
                <span className="inline-block transform hover:rotate-1 transition-transform duration-300 delay-525">震</span>
                <span className="inline-block transform hover:rotate-1 transition-transform duration-300 delay-600">わ</span>
                <span className="inline-block transform hover:rotate-1 transition-transform duration-300 delay-675">す</span>
              </div>
              <div className="text-yellow-400 text-shadow-xl mb-12 drop-shadow-2xl transform hover:scale-105 transition-transform duration-500 cursor-default">
                <span className="inline-block transform hover:-rotate-1 transition-transform duration-300">乾</span>
                <span className="inline-block transform hover:-rotate-1 transition-transform duration-300 delay-75">い</span>
                <span className="inline-block transform hover:-rotate-1 transition-transform duration-300 delay-150">た</span>
                <span className="inline-block transform hover:-rotate-1 transition-transform duration-300 delay-225">衝</span>
                <span className="inline-block transform hover:-rotate-1 transition-transform duration-300 delay-300">撃</span>
                <span className="inline-block transform hover:-rotate-1 transition-transform duration-300 delay-375">音</span>
              </div>
            </h1>

            {/* 感情に訴える洗練されたメッセージボックス */}
            <div className="relative bg-white/15 backdrop-blur-lg p-8 sm:p-12 md:p-16 rounded-3xl shadow-2xl mb-16 sm:mb-24 md:mb-32 border border-white/20 max-w-6xl mx-auto transform hover:scale-[1.02] transition-all duration-500 group">
              {/* 微細なアニメーション要素 */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-pink-400/50 rounded-full animate-pulse group-hover:animate-bounce"></div>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400/50 rounded-full animate-pulse group-hover:animate-spin" style={{ animationDuration: '3s' }}></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400/50 rounded-full animate-pulse group-hover:animate-ping"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-blue-400/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>

              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-black mb-6 sm:mb-8 md:mb-10 leading-tight drop-shadow-2xl tracking-wide">
                💖 新しい自分に出会う場所 💖
              </p>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-black animate-pulse mb-6 sm:mb-8 md:mb-10 tracking-wide drop-shadow-2xl">
                身体で感じる場所だ。
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold leading-relaxed tracking-wide drop-shadow-2xl">
                グローブをはめた瞬間、あなたは
                <br className="hidden sm:block" />
                <span className="text-pink-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-4 drop-shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-default">
                  自ら未来を切り拓く主役へと変わる。
                </span>
              </p>
            </div>
          </div>

          {/* スクロールで表示される洗練されたCTAボタン */}
          <div className="mb-20">
            <div className={`transition-all duration-1000 transform opacity-100 translate-y-0`}>
              <a
                href="https://lin.ee/21ape6V"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 hover:from-pink-600 hover:via-purple-700 hover:to-pink-600 text-white px-8 sm:px-12 md:px-16 py-4 sm:py-6 md:py-8 rounded-full text-lg sm:text-2xl md:text-3xl font-black transition-all duration-500 cursor-pointer shadow-2xl transform hover:scale-110 animate-bounce border-8 border-pink-300/80 tracking-wider overflow-hidden"
                style={{ minWidth: '250px' }}
              >
                {/* ボタンの洗練されたエフェクト */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="relative z-10">💖「新しい私」への覚悟💖</div>
              </a>
            </div>

            {/* 洗練された下向き矢印アニメーション */}
            <div className="mt-8 sm:mt-12 md:mt-16 animate-bounce">
              <div className="relative">
                <i className="ri-arrow-down-double-fill w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center text-pink-400/70 mx-auto text-4xl sm:text-5xl md:text-6xl transform hover:scale-110 transition-transform duration-300 cursor-pointer"></i>
                <div className="absolute inset-0 bg-pink-400/20 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;