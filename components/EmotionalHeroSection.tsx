'use client';

import RobustImage from './RobustImage';

export const EmotionalHeroSection = () => {

  return (
    <section
      className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-black"
      aria-label="メインヒーロー"
    >
      {/* 背景画像 */}
      <RobustImage
        src="/TOPTOP.png?tr=q-auto,f-auto"
        alt="メインヒーロー画像"
        fill
        style={{ objectFit: 'cover' }}
        priority
        className="z-0"
        sizes="100vw"
        quality={85}
      />
      
      {/* 感情的なオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/40 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>

      {/* 動的パーティクル効果 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute w-2 h-2 bg-pink-400/40 rounded-full animate-ping" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
        <div className="absolute w-3 h-3 bg-yellow-400/30 rounded-full animate-pulse" style={{ top: '60%', left: '80%', animationDelay: '1s' }}></div>
        <div className="absolute w-1 h-1 bg-purple-400/50 rounded-full animate-bounce" style={{ top: '40%', left: '70%', animationDelay: '2s' }}></div>
        <div className="absolute w-2 h-2 bg-blue-400/35 rounded-full animate-pulse" style={{ top: '80%', left: '20%', animationDelay: '1.5s' }}></div>
      </div>
    </section>
  );
};
