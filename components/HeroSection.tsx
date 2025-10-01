'use client';

import { memo } from 'react';

const HeroSection = memo(() => {
  return (
    <section
      data-hero
      className="relative h-[50vh] bg-cover bg-center bg-no-repeat flex items-center overflow-hidden"
      aria-label="メインヒーロー"
    >
      {/* RobustImageの代わりにvideoタグを配置 */}
      <video
        src="https://ik.imagekit.io/FLATUPGYM/output_compressed.mp4?updatedAt=1758848662650"
        poster="https://ik.imagekit.io/FLATUPGYM/output_compressed.mp4/ik-thumbnail.jpg?tr=f-auto&updatedAt=1758848662650"
        title="ImageKit video player"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover z-0"
      ></video>
      
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
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;