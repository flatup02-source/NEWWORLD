'use client';

import { useState, useEffect, useMemo } from 'react';
import { usePersona } from '../PersonaContext';
import { Button, Headline, Text } from '../DesignSystem';
import ArrowDownDoubleFill from '../icons/ArrowDownDoubleFill';

export const EmotionalHeroText = () => {
  const { getEmotionalCopy } = usePersona();
  const [currentEmpathyIndex, setCurrentEmpathyIndex] = useState(0);
  const [currentHopeIndex, setCurrentHopeIndex] = useState(0);

  // 感情的なメッセージのローテーション
  useEffect(() => {
    const empathyInterval = setInterval(() => {
      setCurrentEmpathyIndex(prev => (prev + 1) % 4);
    }, 4000);

    const hopeInterval = setInterval(() => {
      setCurrentHopeIndex(prev => (prev + 1) % 4);
    }, 5000);

    return () => {
      clearInterval(empathyInterval);
      clearInterval(hopeInterval);
    };
  }, []);

  // メモ化された感情メッセージ
  const empathyMessage = useMemo(() => 
    getEmotionalCopy('act1', 'empathy')[currentEmpathyIndex], [getEmotionalCopy, currentEmpathyIndex]
  );

  const hopeMessage = useMemo(() => 
    getEmotionalCopy('act2', 'hope')[currentHopeIndex], [getEmotionalCopy, currentHopeIndex]
  );

  const actionMessage = useMemo(() => 
    getEmotionalCopy('act3', 'action'), [getEmotionalCopy]
  );

  return (
    <div className="bg-black text-white text-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="relative z-20 w-full max-w-7xl mx-auto">
            <div className="text-center min-h-screen flex flex-col justify-center items-center">
            <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-24 transform transition-all duration-1000 ease-out">
                
                {/* 第1幕：共感強化 */}
                <div className="mb-8 sm:mb-12">
                <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-white/20 mb-6">
                    <Text variant="lead" className="text-white/90 font-medium">
                    {empathyMessage}
                    </Text>
                </div>
                </div>

                {/* NEW TEXT */}
                <div className="text-white text-3xl md:text-5xl font-bold mb-8 drop-shadow-lg tracking-wide">
                <p>世界一優しい格闘技ジム</p>
                <p>FLATUPGYM</p>
                </div>
                {/* メインタイトル */}
                <Headline level={1} variant="centered" className="text-white mb-8 sm:mb-12 md:mb-16 leading-[0.85] drop-shadow-2xl tracking-wider">
                <div className="text-pink-400 animate-bounce mb-4 sm:mb-6 md:mb-8 drop-shadow-2xl transform hover:scale-105 transition-transform duration-500 cursor-default">
                    <span className="inline-block transform hover:rotate-1 transition-transform duration-300">サ</span>
                    <span className="inline-block transform hover:rotate-1 transition-transform duration-300 delay-75">ン</span>
                    <span className="inline-block transform hover:rotate-1 transition-transform duration-300 delay-150">ド</span>
                    <span className="inline-block transform hover:rotate-1 transition-transform duration-300 delay-225">バ</span>
                    <span className="inline-block transform hover:rotate-1 transition-transform duration-300 delay-300">ッ</span>
                    <span className="inline-block transform hover:rotate-1 transition-transform duration-300 delay-375">グ</span>
                    <span className="inline-block transform hover:rotate-1 transition-transform duration-300 delay-450">を</span>
                    <span className="inline-block transform hover:rotate-1 transition-transform duration-300 delay-525">震</span>
                    <span className="inline-block transform hover:rotate-1 transition-transform duration-300 delay-600">わ</span>
                    <span className="inline-block transform hover:rotate-1 transition-transform duration-300 delay-675">す</span>
                </div>
                <div className="text-yellow-300 text-shadow-xl mb-6 sm:mb-8 md:mb-12 drop-shadow-2xl transform hover:scale-105 transition-transform duration-500 cursor-default">
                    <span className="inline-block transform hover:-rotate-1 transition-transform duration-300">乾</span>
                    <span className="inline-block transform hover:-rotate-1 transition-transform duration-300 delay-75">い</span>
                    <span className="inline-block transform hover:-rotate-1 transition-transform duration-300 delay-150">た</span>
                    <span className="inline-block transform hover:-rotate-1 transition-transform duration-300 delay-225">衝</span>
                    <span className="inline-block transform hover:-rotate-1 transition-transform duration-300 delay-300">撃</span>
                    <span className="inline-block transform hover:-rotate-1 transition-transform duration-300 delay-375">音</span>
                </div>
                </Headline>

                {/* 第2幕：希望提示 */}
                <div className="relative bg-white/15 backdrop-blur-lg p-6 sm:p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl mb-8 sm:mb-12 md:mb-16 lg:mb-24 border border-white/20 max-w-4xl sm:max-w-5xl lg:max-w-6xl mx-auto transform hover:scale-[1.02] transition-all duration-500 group">
                {/* 装飾要素 */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-pink-400/50 rounded-full animate-pulse group-hover:animate-bounce"></div>
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400/50 rounded-full animate-pulse group-hover:animate-spin" style={{ animationDuration: '3s' }}></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400/50 rounded-full animate-pulse group-hover:animate-ping"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-blue-400/50 rounded-full animate-pulse group-hover:animate-bounce" style={{ animationDelay: '0.5s' }}></div>

                <Headline level={2} variant="centered" className="text-white mb-4 sm:mb-6 md:mb-8 leading-tight drop-shadow-2xl tracking-wide">
                    💖 新しい自分に出会う場所 💖
                </Headline>
                
                <Headline level={3} variant="centered" className="text-white animate-pulse mb-4 sm:mb-6 md:mb-8 tracking-wide drop-shadow-2xl">
                    身体で感じる場所だ。
                </Headline>
                
                <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-white/20 mb-6">
                    <Text variant="lead" className="text-white/90 font-medium">
                    {hopeMessage}
                    </Text>
                </div>
                
                <Text variant="body" className="text-white font-bold leading-relaxed tracking-wide drop-shadow-2xl">
                    グローブをはめた瞬間、あなたは
                    <br className="hidden sm:block" />
                    <span className="text-pink-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl block mt-2 sm:mt-4 drop-shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-default">
                    自ら未来を切り拓く主役へと変わる。
                    </span>
                </Text>
                </div>
            </div>

            {/* 第3幕：行動促進 */}
            <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                
                {/* 緊急性と安心感のメッセージ */}
                <div className="bg-red-100/95 backdrop-blur-sm p-4 sm:p-6 rounded-2xl max-w-2xl mx-auto mb-6 sm:mb-8 border-4 border-red-400/80">
                    <Text variant="body" className="text-red-800 font-bold text-center">
                    ⚠️ 今月残り2名様限定 ⚠️
                    <br />
                    個別カウンセリング付き無料体験の枠が残りわずか
                    </Text>
                </div>

                {/* メインCTAボタン */}
                <Button
                    href="https://lin.ee/21ape6V"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="xl"
                    className="animate-bounce border-4 sm:border-6 lg:border-8 border-pink-300/80 tracking-wider"
                >
                    💖「新しい私」への覚悟💖
                </Button>

                {/* 安心感のメッセージ */}
                <div className="mt-4 sm:mt-6">
                    <Text variant="small" className="text-white/80 text-center">
                    {actionMessage}
                    </Text>
                </div>
                </div>

                {/* 下向き矢印 */}
                <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 animate-bounce">
                <button
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    aria-label="次のセクションへスクロール"
                    className="relative focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 rounded-full"
                >
                    <ArrowDownDoubleFill className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 flex items-center justify-center text-pink-400/70 mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl transform hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-pink-400/20 rounded-full animate-ping"></div>
                </button>
                </div>
            </div>
        </div>
    </div>
  );
};
