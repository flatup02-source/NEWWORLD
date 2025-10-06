"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function ResultsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const score = searchParams.get('score');
  const type = searchParams.get('type');
  const [comment, setComment] = useState('');
  const endingSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    endingSoundRef.current = new Audio('/sounds/ending.mp3');
    endingSoundRef.current.loop = true;
    endingSoundRef.current.volume = 0.7;
    endingSoundRef.current.play().catch(e => console.error("Error playing ending sound:", e));

    return () => {
      if (endingSoundRef.current) {
        endingSoundRef.current.pause();
        endingSoundRef.current.currentTime = 0;
      }
    };
  }, []);

  useEffect(() => {
    if (score !== null && type !== null) {
      const numericScore = parseInt(score, 10);
      let resultComment = '';

      if (type === 'nickname') {
        if (numericScore === 10) {
          resultComment = 'PRIDEの異名マスター！お見事！';
        } else if (numericScore >= 7) {
          resultComment = '素晴らしい！PRIDE愛を感じます！';
        } else if (numericScore >= 4) {
          resultComment = 'まだまだこれから！PRIDEの歴史は深い！';
        } else {
          resultComment = 'もっとPRIDEを観よう！';
        }
      } else if (type === 'entrance-theme') {
        if (numericScore === 10) {
          resultComment = 'お前はPRIDEの音職人か！完璧！';
        } else if (numericScore >= 7) {
          resultComment = '入場曲もバッチリ！素晴らしい！';
        } else if (numericScore >= 4) {
          resultComment = 'もう少し！あの頃の熱狂を思い出せ！';
        } else {
          resultComment = 'PRIDEのテーマ曲から聴き直そう！';
        }
      }
      setComment(resultComment);
    }
  }, [score, type]);

  const playGongSound = () => {
    const gongSound = new Audio('/sounds/gong.mp3');
    gongSound.play();
  };

  const handleRetry = () => {
    playGongSound();
    router.push('/select');
  };

  const handleGoHome = () => {
    playGongSound();
    router.push('/');
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

      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl p-6 bg-prideBlack bg-opacity-80 rounded-lg shadow-lg border-4 border-prideGold">
        <h1 className="text-pride-title text-4xl font-bold mb-6">結果発表！</h1>
        <p className="text-pride-title text-5xl font-bold mb-8">スコア: {score} / 10</p>
        <p className="text-xl text-center mb-10">{comment}</p>

        <div className="flex flex-col space-y-4 w-full max-w-md">
          <button
            onClick={handleRetry}
            className="relative px-8 py-3 text-xl font-bold text-white bg-prideRed border-4 border-prideGold rounded-lg shadow-lg
                       hover:bg-prideGold hover:text-prideBlack transition-all duration-300 ease-in-out
                       transform hover:scale-105 active:scale-95
                       focus:outline-none focus:ring-4 focus:ring-prideGold focus:ring-opacity-75
                       overflow-hidden group"
          >
            <span className="relative z-10 text-pride-title">もう一度挑戦</span>
            <span className="absolute inset-0 bg-prideGold opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </button>

          <button
            onClick={handleGoHome}
            className="relative px-8 py-3 text-xl font-bold text-white bg-prideGray border-4 border-prideGold rounded-lg shadow-lg
                       hover:bg-prideGold hover:text-prideBlack transition-all duration-300 ease-in-out
                       transform hover:scale-105 active:scale-95
                       focus:outline-none focus:ring-4 focus:ring-prideGold focus:ring-opacity-75
                       overflow-hidden group"
          >
            <span className="relative z-10 text-pride-title">トップに戻る</span>
            <span className="absolute inset-0 bg-prideGold opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </div>
  );
}