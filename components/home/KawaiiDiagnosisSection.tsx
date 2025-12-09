'use client';

import React from 'react';
import { motion } from 'framer-motion';
import KawaiiButton from '@/components/kawaii/KawaiiButton';
import OptimizedImage from '@/components/OptimizedImage';

const KawaiiDiagnosisSection = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-kawaii-cream overflow-hidden relative">
            {/* Decorative Background Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-kawaii-pink rounded-full opacity-20 animate-bounce" style={{ animationDuration: '3s' }}></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-kawaii-mint rounded-full opacity-20 animate-pulse" style={{ animationDuration: '4s' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white rounded-3xl shadow-soft p-8 md:p-12 border-4 border-kawaii-pink/20 flex flex-col md:flex-row items-center gap-8 md:gap-12">

                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block bg-kawaii-pink text-white px-4 py-1 rounded-full text-sm font-bold mb-4 shadow-sm">
                                ✨ 2025年最新 ✨
                            </span>
                            <h2 className="text-3xl md:text-4xl font-kawaii font-bold text-kawaii-text mb-4 leading-tight">
                                あなたにピッタリの<br />
                                <span className="text-kawaii-pink">運動スタイル</span>は？
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                「私にもできるかな？」「どんなクラスが合ってる？」<br />
                                そんな不安を30秒で解決！<br />
                                簡単な質問に答えるだけで、あなたにぴったりの運動が見つかります♡
                            </p>

                            <KawaiiButton href="/quiz" variant="primary" className="w-full md:w-auto">
                                ✨ 今すぐ診断してみる！
                            </KawaiiButton>
                        </motion.div>
                    </div>

                    {/* Image/Visual */}
                    <div className="flex-1 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-kawaii-mint rounded-full transform rotate-6 opacity-20 blur-lg"></div>
                            <OptimizedImage
                                src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=800&auto=format&fit=crop"
                                alt="楽しく運動する女性たち"
                                width={600}
                                height={400}
                                className="rounded-3xl shadow-lg relative z-10 transform transition-transform hover:scale-105 duration-500"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KawaiiDiagnosisSection;
