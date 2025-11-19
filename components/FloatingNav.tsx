'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const FloatingNav: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Floating Navigation Buttons */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
                {/* Phone Button */}
                <a
                    href="tel:070-9035-3485"
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-pastel-pink to-pink-400 hover:from-pink-400 hover:to-pink-500 text-white flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300"
                    aria-label="電話する"
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </a>

                {/* LINE Button */}
                <Link
                    href="/line"
                    className="w-16 h-16 rounded-full bg-[#06C755] hover:bg-[#05b34c] text-white flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300"
                    aria-label="LINE"
                >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                    </svg>
                </Link>

                {/* Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-mint-green to-green-400 hover:from-green-400 hover:to-green-500 text-white flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300"
                    aria-label="メニュー"
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Fullscreen Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[100] bg-gradient-to-br from-pastel-pink/95 to-mint-green/95 backdrop-blur-md">
                    <div className="absolute top-6 right-6">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-300"
                            aria-label="閉じる"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="h-full flex items-center justify-center">
                        <nav className="text-center">
                            <ul className="space-y-6">
                                <li>
                                    <Link
                                        href="/"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-4xl md:text-5xl font-bold text-white hover:text-yellow-300 transition-colors duration-300 font-rounded"
                                    >
                                        ホーム
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/ladies"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-4xl md:text-5xl font-bold text-white hover:text-yellow-300 transition-colors duration-300 font-rounded"
                                    >
                                        女性向けクラス
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/kids-boys"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-4xl md:text-5xl font-bold text-white hover:text-yellow-300 transition-colors duration-300 font-rounded"
                                    >
                                        キッズクラス
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/bjj"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-4xl md:text-5xl font-bold text-white hover:text-yellow-300 transition-colors duration-300 font-rounded"
                                    >
                                        柔術
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/pricing"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-4xl md:text-5xl font-bold text-white hover:text-yellow-300 transition-colors duration-300 font-rounded"
                                    >
                                        料金
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/access"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-4xl md:text-5xl font-bold text-white hover:text-yellow-300 transition-colors duration-300 font-rounded"
                                    >
                                        アクセス
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/trial-lesson"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="inline-block mt-8 px-12 py-5 bg-white text-pastel-pink text-3xl font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                    >
                                        無料体験予約
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
};

export default FloatingNav;
