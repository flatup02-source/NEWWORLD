// components/home/HeroSection.tsx

'use client';

import { useRef, useEffect } from 'react';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // コンポーネントが読み込まれた後に再生を試みる
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        // 自動再生が失敗した場合のログ（デバッグ用）
        console.error("Video autoplay was prevented:", error);
      });
    }
  }, []);

    return (
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-black">
        <div
          className="absolute top-0 left-0 w-full h-full bg-black z-10"
          style={{
            backgroundImage: `url('https://ik.imagekit.io/FLATUPGYM/6b740781-fd30-4ede-b37a-fb323a45f96f.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
            animation: 'pulse-light 5s infinite',
          }}
        ></div>
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          poster="https://ik.imagekit.io/FLATUPGYM/TOPP.png?updatedAt=1756928058451"
        >
          <source src="https://ik.imagekit.io/FLATUPGYM/output_compressed.mp4?updatedAt=1758848662650" type="video/mp4" />
          お使いのブラウザはビデオタグをサポートしていません。
        </video>
        <div className="relative z-20 px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight shadow-lg mb-4">
            昨日までの自分と、サヨナラする場所。
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto shadow-md">
            ほんの少しの好奇心で、新しい自分に出会える。
          </p>
        </div>
        <style jsx>{`
          @keyframes pulse-light {
            0%, 100% {
              opacity: 0.45;
            }
            50% {
              opacity: 0.6;
            }
          }
        `}</style>
      </section>
    );};

export default HeroSection;