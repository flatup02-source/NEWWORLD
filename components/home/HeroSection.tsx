import React from 'react';
import Link from 'next/link';
import OptimizedImage from '../OptimizedImage';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[100dvh] min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src="https://ik.imagekit.io/FLATUPGYM/hero-bg.jpg"
          alt="FLATUPGYM Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* オーバーレイ: Sakura Pink Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-pastel-pink/10 to-pastel-pink/20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[rgba(248,200,220,0.12)]"></div>
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-white font-bold tracking-tight mb-8 font-rounded" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.35)' }}>
          <span className="block text-2xl sm:text-3xl md:text-4xl mb-6 font-medium tracking-widest">
            新しい自分へ、心と身体で優しく変わる。
          </span>
          <span className="block leading-tight" style={{ fontSize: 'clamp(3.8rem, 9.5vw, 7.5rem)' }}>
            その一振りが、<br className="sm:hidden" />
            あなたの未来を<br className="lg:hidden" />
            優しく変える。
          </span>
        </h1>

        <p className="mt-8 text-xl sm:text-2xl md:text-3xl text-white font-bold mb-12 leading-relaxed font-rounded" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.35)' }}>
          💖 成田市No.1 女性・初心者大歓迎ジム ♡ 更衣室完備で安心 💖
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-soft flex items-center transform hover:scale-105 transition-transform duration-300">
            <span className="text-pastel-pink font-bold text-xl mr-2">♥</span>
            <span className="text-gray-800 font-bold text-lg">女性会員 82%</span>
          </div>
          <div className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-soft flex items-center transform hover:scale-105 transition-transform duration-300">
            <span className="text-mint-green font-bold text-xl mr-2">🔰</span>
            <span className="text-gray-800 font-bold text-lg">初心者率 91%</span>
          </div>
          <div className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-soft flex items-center transform hover:scale-105 transition-transform duration-300">
            <span className="text-yellow-400 font-bold text-xl mr-2">☺</span>
            <span className="text-gray-800 font-bold text-lg">キッズクラスあり♡</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/trial-lesson"
            className="inline-flex items-center justify-center px-10 py-5 border border-transparent text-xl font-bold rounded-full text-white bg-gradient-to-r from-pastel-pink to-pink-400 hover:from-pink-400 hover:to-pink-500 transition-all duration-300 shadow-lg transform hover:scale-105 min-h-[64px] animate-pulse"
          >
            今すぐ無料体験予約する
          </Link>
          <Link
            href="/line"
            className="inline-flex items-center justify-center px-10 py-5 border border-transparent text-xl font-bold rounded-full text-white bg-[#06C755] hover:bg-[#05b34c] transition-all duration-300 shadow-lg transform hover:scale-105 min-h-[64px]"
          >
            LINEで相談する
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;