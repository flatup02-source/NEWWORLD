"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import fightersData from '@/src/data/fightersData.json';

interface Fighter {
  id: number;
  name: string;
  nickname: string[];
  image: string;
  entrance_theme_name: string;
  entrance_theme_audio: string;
  bio: string;
  major_fights: { opponent: string; result: string; event: string }[];
}

export default function FightersPage() {
  const [selectedFighter, setSelectedFighter] = useState<Fighter | null>(null);
  const modalAudioRef = useRef<HTMLAudioElement | null>(null);

  const playGongSound = () => {
    const gongSound = new Audio('/sounds/gong.mp3');
    gongSound.play();
  };

  const openModal = (fighter: Fighter) => {
    playGongSound();
    setSelectedFighter(fighter);
    if (modalAudioRef.current) {
      modalAudioRef.current.pause();
      modalAudioRef.current.currentTime = 0;
    }
    modalAudioRef.current = new Audio(fighter.entrance_theme_audio);
    modalAudioRef.current.volume = 0.8;
    modalAudioRef.current.play().catch(e => console.error("Error playing fighter entrance theme:", e));
  };

  const closeModal = () => {
    playGongSound();
    if (modalAudioRef.current) {
      modalAudioRef.current.pause();
      modalAudioRef.current.currentTime = 0;
    }
    setSelectedFighter(null);
  };

  useEffect(() => {
    return () => {
      if (modalAudioRef.current) {
        modalAudioRef.current.pause();
        modalAudioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-prideBlack text-white overflow-hidden p-4">
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

      <div className="relative z-10 w-full max-w-6xl p-6 bg-prideBlack bg-opacity-80 rounded-lg shadow-lg border-4 border-prideGold mt-8 mb-8">
        <h1 className="text-pride-title text-4xl font-bold mb-8 text-center">選手名鑑</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fightersData.map((fighter) => (
            <div
              key={fighter.id}
              onClick={() => openModal(fighter)}
              className="relative bg-prideGray border-2 border-prideGold rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer
                         hover:bg-prideRed transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              <Image
                src={fighter.image}
                alt={fighter.name}
                width={150}
                height={150}
                objectFit="cover"
                className="rounded-full border-2 border-prideGold mb-4"
              />
              <h2 className="text-pride-title text-xl font-bold text-center">{fighter.name}</h2>
              <p className="text-sm text-gray-300 text-center">{fighter.nickname[0]}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedFighter && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-prideBlack border-4 border-prideGold rounded-lg shadow-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-prideRed transition-colors duration-200"
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Image
                src={selectedFighter.image}
                alt={selectedFighter.name}
                width={200}
                height={200}
                objectFit="cover"
                className="rounded-full border-4 border-prideGold flex-shrink-0"
              />
              <div className="text-center md:text-left">
                <h2 className="text-pride-title text-4xl font-bold mb-2">{selectedFighter.name}</h2>
                <p className="text-pride-title text-xl mb-4">{selectedFighter.nickname.join(' / ')}</p>
                <p className="text-lg mb-4"><strong>入場曲:</strong> {selectedFighter.entrance_theme_name}</p>
                <p className="text-md mb-4">{selectedFighter.bio}</p>
                <h3 className="text-pride-title text-2xl font-bold mb-2">主な戦績:</h3>
                <ul className="list-disc list-inside ml-4">
                  {selectedFighter.major_fights.map((fight, index) => (
                    <li key={index} className="mb-1">
                      {fight.event}: vs {fight.opponent} ({fight.result})
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}