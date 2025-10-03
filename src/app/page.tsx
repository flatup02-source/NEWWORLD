
"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioPlayed, setAudioPlayed] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio('/sounds/opening.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.7;

    const playAudio = () => {
      if (audioRef.current && !audioPlayed) {
        audioRef.current.play().then(() => {
          setAudioPlayed(true);
        }).catch(error => {
          console.log("Audio play prevented:", error);
        });
      }
    };

    // Attempt to play audio on user interaction
    document.addEventListener('click', playAudio, { once: true });
    document.addEventListener('keydown', playAudio, { once: true });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      document.removeEventListener('click', playAudio);
      document.removeEventListener('keydown', playAudio);
    };
  }, [audioPlayed]);

  const handleStartQuiz = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    const gongSound = new Audio('/sounds/gong.mp3');
    gongSound.play();
    router.push('/select');
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-prideBlack text-white overflow-hidden">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/pride_background.jpg" // Placeholder for a PRIDE background image
          alt="PRIDE Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
        {/* You can add a video here later if needed */}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center p-4">
        <h1 className="text-pride-title text-6xl md:text-8xl font-bold mb-8 animate-pulse">
          PRIDE 伝説
        </h1>
        <h2 className="text-pride-title text-4xl md:text-6xl font-bold mb-12 animate-pulse">
          再構築
        </h2>
        <button
          onClick={handleStartQuiz}
          className="relative px-12 py-4 text-3xl font-bold text-white bg-prideRed border-4 border-prideGold rounded-lg shadow-lg
                     hover:bg-prideGold hover:text-prideBlack transition-all duration-300 ease-in-out
                     transform hover:scale-105 active:scale-95
                     focus:outline-none focus:ring-4 focus:ring-prideGold focus:ring-opacity-75
                     overflow-hidden group"
        >
          <span className="relative z-10 text-pride-title">入場！</span>
          {/* Glowing effect on hover */}
          <span className="absolute inset-0 bg-prideGold opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          {/* Border glow */}
          <span className="absolute inset-0 border-4 border-transparent group-hover:border-prideGold animate-border-glow"></span>
        </button>
      </div>
    </div>
  );
}
