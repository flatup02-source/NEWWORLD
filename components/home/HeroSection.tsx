import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import OptimizedImage from '../OptimizedImage'; // Assuming OptimizedImage component exists

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
    }
  }, []);

  // Manually optimized poster URL
  const posterUrl = "https://ik.imagekit.io/flatup/FLATUPGYM/output_compressed.mp4/ik-thumbnail.jpg?tr=w-463,h-823,q-80";

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-black">
      {/* [Requirement #1] Video Display Fix:
        - The background image is now hidden.
        - The video is brought to the foreground with a higher z-index.
      */}
      <OptimizedImage
        src="https://ik.imagekit.io/flatup/FLATUPGYM/output_compressed.mp4/ik-thumbnail.jpg"
        alt="Background"
        fill
        priority
        className="object-cover w-full h-full z-0 hidden" // hidden class added to hide the image overlay
      // [Requirement #3] Overflow Fix: sizes="100vw" removed to prevent horizontal scroll
      />

      <video
        ref={videoRef}
        autoPlay
        loop
        muted
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* 背景画像 */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="https://ik.imagekit.io/FLATUPGYM/hero-bg.jpg" // 実際の画像パスに合わせて変更してください
            alt="FLATUPGYM Hero Background"
            fill
            priority
            className="object-cover object-center"
          />
          {/* オーバーレイ: rgba(0,0,0,0.15) */}
          <div className="absolute inset-0 bg-black/15"></div>
        </div>

        {/* コンテンツ */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-white font-bold tracking-tight mb-6" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.4)' }}>
            <span className="block text-2xl sm:text-3xl md:text-4xl mb-4 font-medium">
              女性・初心者大歓迎♡ 安心して始められます
            </span>
            <span className="block text-5xl sm:text-6xl md:text-8xl leading-relaxed">
              強くなる、<br className="sm:hidden" />
              美しくなる。
            </span>
          </h1>

          <p className="mt-6 text-xl sm:text-2xl md:text-3xl text-white font-medium mb-10 leading-relaxed" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.4)' }}>
            キックボクシングで、<br className="sm:hidden" />
            新しい自分に出会う。
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg flex items-center">
              <span className="text-pink-500 font-bold text-lg mr-2">♥</span>
              <span className="text-gray-800 font-bold">女性会員 80%以上</span>
            </div>
            <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg flex items-center">
              <span className="text-green-500 font-bold text-lg mr-2">🔰</span>
              <span className="text-gray-800 font-bold">初心者率 90%</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              href="/trial-lesson"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-pink-500 hover:bg-pink-600 transition-all duration-300 shadow-lg transform hover:scale-105 min-h-[48px]"
            >
              無料体験を予約する
            </Link>
            <Link
              href="/line"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-[#06C755] hover:bg-[#05b34c] transition-all duration-300 shadow-lg transform hover:scale-105 min-h-[48px]"
            >
              LINEで相談する
            </Link>
          </div>
        </div>
      </section>
      );
};

      export default HeroSection;