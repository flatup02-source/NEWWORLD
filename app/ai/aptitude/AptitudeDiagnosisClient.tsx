'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowLeft, Loader2, MessageCircle } from 'lucide-react';
import Link from 'next/link';
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

export default function AptitudeDiagnosisClient() {
    const [currentStep, setCurrentStep] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

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

    const handleSubmitToAI = async () => {
        setError(null);
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/diagnostic/start', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'aptitude',
                    payload: {
                        totalScore,
                        answers: questions.map((q, idx) => ({
                            questionId: q.id,
                            questionText: q.text,
                            // Note: We don't track individual answers, but we can send the score
                        }))
                    }
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || '診断の送信に失敗しました');
            }

            setIsSubmitted(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'エラーが発生しました');
        } finally {
            setIsSubmitting(false);
        }
    };

    const result = getResult();

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-kawaii-cream via-white to-kawaii-lavender py-20 px-4 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-soft p-8 border-4 border-purple-400/30 text-center"
                >
                    <div className="text-6xl mb-6">✨</div>
                    <h2 className="text-2xl font-bold text-kawaii-text mb-4 font-rounded">
                        診断を送信しました！
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        より詳しい診断結果はLINEでお送りします。<br />
                        公式LINEに友達追加して、結果を受け取りましょう。
                    </p>
                    <a
                        href="https://lin.ee/21ape6V"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mb-4"
                    >
                        <KawaiiButton variant="secondary" className="w-full">
                            <MessageCircle className="w-5 h-5 mr-2" />
                            LINE公式アカウントを追加
                        </KawaiiButton>
                    </a>
                    <Link href="/ai" className="text-kawaii-pink hover:underline text-sm">
                        他の診断も見る
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-kawaii-cream via-white to-kawaii-lavender py-20 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <Link href="/ai" className="inline-flex items-center text-kawaii-pink hover:underline mb-4">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        診断一覧に戻る
                    </Link>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center shadow-lg">
                            <Sparkles className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-kawaii-text font-rounded">
                                格闘技適性診断
                            </h1>
                            <p className="text-gray-600">あなたに最適な格闘技スタイルを診断します</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-soft p-8 border-4 border-purple-400/30 relative overflow-hidden">
                    {/* Background Decoration */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 blur-xl"></div>

                    <AnimatePresence mode='wait'>
                        {!showResult ? (
                            <motion.div
                                key={currentStep}
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -50, opacity: 0 }}
                                className="space-y-6 relative z-10"
                            >
                                <h2 className="text-xl font-bold text-center text-gray-700">
                                    {questions[currentStep].text}
                                </h2>
                                <div className="space-y-4">
                                    {questions[currentStep].options.map((option, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleAnswer(option.score)}
                                            className="w-full p-4 rounded-xl bg-kawaii-cream border-2 border-purple-400/50 text-gray-700 font-bold hover:bg-purple-400 hover:text-white transition-all duration-200 transform hover:scale-102 shadow-sm"
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex justify-center mt-4 space-x-2">
                                    {questions.map((_, idx) => (
                                        <div key={idx} className={`w-3 h-3 rounded-full ${idx === currentStep ? 'bg-purple-400' : 'bg-gray-200'}`} />
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-center space-y-6 relative z-10"
                            >
                                <p className="text-lg text-gray-600">あなたのタイプは...</p>
                                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 py-2">
                                    ✨ {result.type} ✨
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    {result.desc}
                                </p>

                                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6 mt-6">
                                    <p className="font-bold text-gray-700 mb-4">
                                        もっと詳しく知りたい？<br />
                                        AIがより詳細な診断をします！
                                    </p>
                                    
                                    {error && (
                                        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 text-red-600 mb-4 text-sm">
                                            {error}
                                        </div>
                                    )}

                                    <button
                                        onClick={handleSubmitToAI}
                                        disabled={isSubmitting}
                                        className="w-full py-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mb-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                送信中...
                                            </>
                                        ) : (
                                            <>
                                                <MessageCircle className="w-5 h-5" />
                                                LINEで詳細診断を受け取る
                                            </>
                                        )}
                                    </button>
                                    <p className="text-xs text-gray-500">
                                        ※ 友達登録して診断結果を受け取るだけ！
                                    </p>
                                </div>

                                <button
                                    onClick={() => {
                                        setTotalScore(0);
                                        setCurrentStep(0);
                                        setShowResult(false);
                                        setError(null);
                                    }}
                                    className="text-gray-400 text-sm hover:text-purple-400 underline"
                                >
                                    もう一度診断する
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}


