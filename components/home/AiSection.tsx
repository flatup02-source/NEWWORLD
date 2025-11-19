'use client';

import React from 'react';
import Link from 'next/link';
import OptimizedImage from '../OptimizedImage';
import { motion } from 'framer-motion';

const AiSection = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-pink-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left: Character Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 flex justify-center"
                    >
                        <div className="relative w-64 h-64 md:w-96 md:h-96">
                            {/* Placeholder for AIKA18号 - User needs to upload image to /images/aika18.png */}
                            <div className="absolute inset-0 bg-gradient-to-br from-sakura-pink/20 to-mint-green/20 rounded-full animate-pulse blur-xl"></div>
                            <OptimizedImage
                                src="/images/aika18.png"
                                alt="AIKA18号"
                                width={400}
                                height={400}
                                className="relative z-10 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-1/2 text-center md:text-left"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-rounded leading-tight">
                            <span className="text-pink-500">AIKA18号</span>が<br />
                            24時間なんでも答えます♡
                        </h2>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center bg-white p-4 rounded-2xl shadow-sm border border-pink-100 transform hover:scale-105 transition-transform duration-300">
                                <span className="text-2xl mr-4">📊</span>
                                <p className="text-lg font-bold text-gray-700">習得度に応じて<span className="text-pink-500">戦闘力数値化！</span></p>
                            </div>
                            <div className="flex items-center bg-white p-4 rounded-2xl shadow-sm border border-pink-100 transform hover:scale-105 transition-transform duration-300">
                                <span className="text-2xl mr-4">💬</span>
                                <p className="text-lg font-bold text-gray-700">ダイエット・モチベ・テクニック<br /><span className="text-pink-500">なんでも無料相談OK</span></p>
                            </div>
                            <div className="flex items-center bg-white p-4 rounded-2xl shadow-sm border border-pink-100 transform hover:scale-105 transition-transform duration-300">
                                <span className="text-2xl mr-4">⏰</span>
                                <p className="text-lg font-bold text-gray-700">24時間いつでも<span className="text-pink-500">即レス返信します♡</span></p>
                            </div>
                        </div>

                        <Link
                            href="/line"
                            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sakura-pink to-pink-400 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-pulse"
                        >
                            <span className="mr-2">⚡</span>
                            戦闘力診断やってみる
                        </Link>
                        <p className="mt-3 text-sm text-gray-500">※LINE公式アカウントで無料でできます</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AiSection;
