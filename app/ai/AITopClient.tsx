'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { UtensilsCrossed, Video, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import KawaiiButton from '@/components/kawaii/KawaiiButton';

const diagnosisTypes = [
    {
        id: 'meal',
        title: '食事（ダイエット）診断',
        description: 'あなたの体質や目標に合わせた最適な食事プランをAIが提案します',
        icon: UtensilsCrossed,
        color: 'from-pink-400 to-red-400',
        bgColor: 'bg-pink-50',
        href: '/ai/meal',
        features: ['カロリー計算', '栄養バランス分析', 'パーソナライズされた食事プラン']
    },
    {
        id: 'form',
        title: '格闘技フォーム診断',
        description: '動画を送るだけで、あなたのフォームをAIが分析・改善提案します',
        icon: Video,
        color: 'from-blue-400 to-indigo-400',
        bgColor: 'bg-blue-50',
        href: '/ai/form',
        features: ['フォーム分析', '改善ポイント', 'パーソナライズされたアドバイス']
    },
    {
        id: 'aptitude',
        title: '格闘技適性診断',
        description: 'あなたの性格やライフスタイルから、最適な格闘技スタイルを診断します',
        icon: Sparkles,
        color: 'from-purple-400 to-pink-400',
        bgColor: 'bg-purple-50',
        href: '/ai/aptitude',
        features: ['性格分析', '適性判定', 'おすすめプログラム提案']
    }
];

export default function AITopClient() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-kawaii-cream via-white to-kawaii-lavender py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-kawaii-text mb-6 font-rounded">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-kawaii-pink to-purple-400">
                            AI診断
                        </span>
                        で<br className="md:hidden" />
                        あなたの可能性を発見
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        FLAT-UP GYMのAIが、あなたの体質・フォーム・適性を分析。<br />
                        パーソナライズされたアドバイスをLINEで受け取れます。
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <MessageCircle className="w-5 h-5" />
                        <span>診断結果はLINEで受け取れます</span>
                    </div>
                </motion.div>

                {/* Diagnosis Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {diagnosisTypes.map((type, index) => {
                        const Icon = type.icon;
                        return (
                            <motion.div
                                key={type.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Link href={type.href}>
                                    <div className={`${type.bgColor} rounded-3xl p-8 h-full border-4 border-white shadow-soft hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden`}>
                                        {/* Background Gradient */}
                                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${type.color} rounded-full opacity-10 blur-2xl transform translate-x-1/2 -translate-y-1/2`}></div>
                                        
                                        {/* Icon */}
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6 relative z-10 shadow-lg`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>

                                        {/* Content */}
                                        <h2 className="text-2xl font-bold text-kawaii-text mb-4 relative z-10 font-rounded">
                                            {type.title}
                                        </h2>
                                        <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                                            {type.description}
                                        </p>

                                        {/* Features */}
                                        <ul className="space-y-2 mb-6 relative z-10">
                                            {type.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center text-sm text-gray-600">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-kawaii-pink mr-2"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA */}
                                        <div className="flex items-center text-kawaii-pink font-bold relative z-10 group">
                                            <span>診断を始める</span>
                                            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* How It Works */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border-4 border-kawaii-pink/30 shadow-soft mb-12"
                >
                    <h2 className="text-2xl font-bold text-center text-kawaii-text mb-8 font-rounded">
                        📱 使い方
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { step: '1', title: '診断を選択', desc: '上記から診断タイプを選びます' },
                            { step: '2', title: '情報を入力', desc: '簡単な質問に答えるだけ' },
                            { step: '3', title: 'LINEで結果を受け取る', desc: 'AIが分析した結果をLINEで受け取れます' }
                        ].map((item, idx) => (
                            <div key={idx} className="text-center">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-kawaii-pink to-purple-400 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-kawaii-text mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* LINE CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border-4 border-green-200 shadow-soft">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 font-rounded">
                            LINEで診断を受ける
                        </h3>
                        <p className="text-gray-600 mb-6">
                            公式LINEに友達追加して、AI診断を始めましょう！
                        </p>
                        <a
                            href="https://lin.ee/21ape6V"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <KawaiiButton variant="secondary" className="w-full md:w-auto">
                                <MessageCircle className="w-5 h-5 mr-2" />
                                LINE公式アカウントを追加
                            </KawaiiButton>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}


