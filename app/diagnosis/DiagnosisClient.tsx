'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KawaiiButton from '@/components/kawaii/KawaiiButton';
import LineIcon from '@/components/ui/LineIcon';

// Quiz Data
const questions = [
    {
        id: 1,
        text: "Q1. 普段の運動頻度は？",
        options: [
            { label: "ほぼ毎日！", score: 3 },
            { label: "週1〜2回かな", score: 2 },
            { label: "息をするのが精一杯...", score: 1 },
        ]
    },
    {
        id: 2,
        text: "Q2. 好きな音楽のテンポは？",
        options: [
            { label: "爆速EDM！", score: 3 },
            { label: "ノリの良いJ-POP", score: 2 },
            { label: "ゆったりバラード", score: 1 },
        ]
    },
    {
        id: 3,
        text: "Q3. ストレス発散方法は？",
        options: [
            { label: "大声で歌う！", score: 3 },
            { label: "美味しいものを食べる", score: 2 },
            { label: "寝る！", score: 1 },
        ]
    }
];

export default function DiagnosisPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (score: number) => {
        const newScore = totalScore + score;
        setTotalScore(newScore);

        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setShowResult(true);
        }
    };

    const getResult = () => {
        if (totalScore >= 8) return { type: "スピードクイーン", desc: "あなたは生まれながらのアスリート！キックボクシングで才能が開花するかも！？" };
        if (totalScore >= 5) return { type: "バランスファイター", desc: "心身のバランスが整ったあなた。マイペースに強くなれる素質があります！" };
        return { type: "癒やしのポテンシャル", desc: "今はまだ眠れる獅子...。FLAT-UPで隠された才能を目覚めさせましょう！" };
    };

    const result = getResult();

    return (
        <div className="min-h-screen bg-off-white font-kawaii flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-soft p-8 border-4 border-kawaii-pink/30 relative overflow-hidden">

                {/* Background Decoration */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-kawaii-mint rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-kawaii-pink rounded-full opacity-20 blur-xl"></div>

                <h1 className="text-2xl font-bold text-center text-kawaii-text mb-8 relative z-10">
                    🥊 キックボクシング適性診断 🥊
                </h1>

                <AnimatePresence mode='wait'>
                    {!showResult ? (
                        <motion.div
                            key={currentStep}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -50, opacity: 0 }}
                            className="space-y-6"
                        >
                            <h2 className="text-xl font-bold text-center text-gray-700">
                                {questions[currentStep].text}
                            </h2>
                            <div className="space-y-4">
                                {questions[currentStep].options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswer(option.score)}
                                        className="w-full p-4 rounded-xl bg-kawaii-cream border-2 border-kawaii-pink/50 text-gray-700 font-bold hover:bg-kawaii-pink hover:text-white transition-all duration-200 transform hover:scale-102 shadow-sm"
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                            <div className="flex justify-center mt-4 space-x-2">
                                {questions.map((_, idx) => (
                                    <div key={idx} className={`w-3 h-3 rounded-full ${idx === currentStep ? 'bg-kawaii-pink' : 'bg-gray-200'}`} />
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center space-y-6"
                        >
                            <p className="text-lg text-gray-600">あなたのタイプは...</p>
                            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-kawaii-pink to-purple-400 py-2">
                                ✨ {result.type} ✨
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                {result.desc}
                            </p>

                            <div className="bg-kawaii-mint/20 p-6 rounded-2xl mt-6">
                                <p className="font-bold text-gray-700 mb-4">
                                    もっと詳しく知りたい？<br />
                                    AIがあなたの動きを分析します！
                                </p>
                                <KawaiiButton href="/line" className="w-full text-sm">
                                    <LineIcon className="w-5 h-5 mr-2" />
                                    LINEで動画を送って診断
                                </KawaiiButton>
                                <p className="text-xs text-gray-500 mt-2">
                                    ※ 友達登録して動画を送るだけ！
                                </p>
                            </div>

                            <button
                                onClick={() => {
                                    setTotalScore(0);
                                    setCurrentStep(0);
                                    setShowResult(false);
                                }}
                                className="text-gray-400 text-sm hover:text-kawaii-pink underline"
                            >
                                もう一度診断する
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
