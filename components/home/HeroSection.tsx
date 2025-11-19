import React from 'react';
import Link from 'next/link';
import OptimizedImage from '../OptimizedImage';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[100dvh] min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* 背景画像: Unsplash High Quality Gym Image */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070&auto=format&fit=crop"
          alt="FLATUPGYM Kickboxing & BJJ"
          fill
          priority
          className="object-cover object-center"
        />
        {/* オーバーレイ: Sakura Pink Gradient with better visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-pastel-pink/20 to-purple-500/20 mix-blend-overlay"></div>
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h1 className="text-white font-bold tracking-tight mb-8 font-rounded drop-shadow-lg">
          <span className="block text-xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 font-medium tracking-widest text-pink-100">
            新しい自分へ、心と身体で優しく変わる。
          </span>
          <span className="block leading-tight font-extrabold" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            その一振りが、<br className="sm:hidden" />
            あなたの未来を<br className="lg:hidden" />
            優しく変える。
          </span>
        </h1>

        <p className="mt-6 sm:mt-8 text-lg sm:text-2xl md:text-3xl text-white font-bold mb-10 sm:mb-12 leading-relaxed font-rounded drop-shadow-md">
          <span className="bg-pink-600/80 px-4 py-2 rounded-full backdrop-blur-sm inline-block mb-2 sm:mb-0">
            💖 成田市No.1 女性・初心者大歓迎 💖
          </span>
          <br className="hidden sm:block" />
          <span className="inline-block mt-2">更衣室完備で安心の格闘技ジム</span>
        </p>

        {/* Trust Badges - Responsive Grid */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-10 sm:mb-16">
          <div className="bg-white/95 backdrop-blur-md px-6 py-3 rounded-full shadow-lg flex items-center transform hover:scale-105 transition-transform duration-300 border-2 border-pink-100">
            <span className="text-pastel-pink font-bold text-xl mr-2">♥</span>
            <span className="text-gray-800 font-bold text-sm sm:text-lg">女性会員 82%</span>
          </div>
          <div className="bg-white/95 backdrop-blur-md px-6 py-3 rounded-full shadow-lg flex items-center transform hover:scale-105 transition-transform duration-300 border-2 border-green-100">
            <span className="text-mint-green font-bold text-xl mr-2">🔰</span>
            <span className="text-gray-800 font-bold text-sm sm:text-lg">初心者率 91%</span>
          </div>
          <div className="bg-white/95 backdrop-blur-md px-6 py-3 rounded-full shadow-lg flex items-center transform hover:scale-105 transition-transform duration-300 border-2 border-yellow-100">
            <span className="text-yellow-400 font-bold text-xl mr-2">☺</span>
            <span className="text-gray-800 font-bold text-sm sm:text-lg">キッズクラスあり</span>
          </div>
        </div>

        {/* CTA Buttons - Responsive Stack */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none mx-auto">
          <Link
            href="/trial-lesson"
            className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 border border-transparent text-lg sm:text-xl font-bold rounded-full text-white bg-gradient-to-r from-pastel-pink to-pink-500 hover:from-pink-400 hover:to-pink-600 transition-all duration-300 shadow-[0_0_20px_rgba(248,200,220,0.6)] transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
            <span className="relative flex items-center">
              <i className="ri-calendar-check-fill mr-2"></i>
              今すぐ無料体験予約
            </span>
          </Link>
          <Link
            href="/line"
            className="inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 border border-transparent text-lg sm:text-xl font-bold rounded-full text-white bg-[#06C755] hover:bg-[#05b34c] transition-all duration-300 shadow-lg transform hover:scale-105 hover:-translate-y-1"
          >
            <i className="ri-line-fill mr-2 text-2xl"></i>
            LINEで相談する
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;