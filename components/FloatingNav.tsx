'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const FloatingNav: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Floating Navigation Buttons */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
                {/* Trial Booking Button */}
                <Link
                    href="/trial-lesson"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-pastel-pink to-pink-400 hover:from-pink-400 hover:to-pink-500 text-white flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300 font-bold text-sm whitespace-nowrap animate-pulse"
                    aria-label="無料体験予約"
                >
                    今すぐ無料体験♡
                </Link>

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
