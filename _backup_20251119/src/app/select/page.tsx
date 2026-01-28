"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SelectPage() {
  const router = useRouter();

  const playGongSound = () => {
    const gongSound = new Audio('/sounds/gong.mp3');
    gongSound.play();
  };

  const handleNavigation = (path: string) => {
    playGongSound();
    router.push(path);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-prideBlack text-white overflow-hidden p-4">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/pride_background.jpg" // Placeholder for a PRIDE background image
          alt="PRIDE Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-8">
        <h1 className="text-pride-title text-5xl md:text-6xl font-bold mb-8">
          クイズ選択
        </h1>

        <button
          onClick={() => handleNavigation('/quiz/nickname')}
          className="relative px-10 py-4 text-2xl font-bold text-white bg-prideRed border-4 border-prideGold rounded-lg shadow-lg
                     hover:bg-prideGold hover:text-prideBlack transition-all duration-300 ease-in-out
                     transform hover:scale-105 active:scale-95
                     focus:outline-none focus:ring-4 focus:ring-prideGold focus:ring-opacity-75
                     overflow-hidden group w-full max-w-md"
        >
          <span className="relative z-10 text-pride-title">異名当てクイズ</span>
          <span className="absolute inset-0 bg-prideGold opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          <span className="absolute inset-0 border-4 border-transparent group-hover:border-prideGold animate-border-glow"></span>
        </button>

        <button
          onClick={() => handleNavigation('/quiz/entrance-theme')}
          className="relative px-10 py-4 text-2xl font-bold text-white bg-prideRed border-4 border-prideGold rounded-lg shadow-lg
                     hover:bg-prideGold hover:text-prideBlack transition-all duration-300 ease-in-out
                     transform hover:scale-105 active:scale-95
                     focus:outline-none focus:ring-4 focus:ring-prideGold focus:ring-opacity-75
                     overflow-hidden group w-full max-w-md"
        >
          <span className="relative z-10 text-pride-title">入場曲当てクイズ</span>
          <span className="absolute inset-0 bg-prideGold opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          <span className="absolute inset-0 border-4 border-transparent group-hover:border-prideGold animate-border-glow"></span>
        </button>

        <button
          onClick={() => handleNavigation('/fighters')}
          className="relative px-10 py-4 text-2xl font-bold text-white bg-prideGray border-4 border-prideGold rounded-lg shadow-lg
                     hover:bg-prideGold hover:text-prideBlack transition-all duration-300 ease-in-out
                     transform hover:scale-105 active:scale-95
                     focus:outline-none focus:ring-4 focus:ring-prideGold focus:ring-opacity-75
                     overflow-hidden group w-full max-w-md"
        >
          <span className="relative z-10 text-pride-title">選手名鑑を見る</span>
          <span className="absolute inset-0 bg-prideGold opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          <span className="absolute inset-0 border-4 border-transparent group-hover:border-prideGold animate-border-glow"></span>
        </button>
      </div>
    </div>
  );
}