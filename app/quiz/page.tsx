'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, RefreshCw, MessageCircle } from 'lucide-react';

// Quiz Questions Data
const questions = [
    {
        id: 1,
        question: "運動経験はありますか？ 💪",
        options: [
            { label: "まったくない 🔰", score: { kick: 1, bjj: 1, diet: 2 } },
            { label: "少しある 🏃‍♀️", score: { kick: 2, bjj: 2, diet: 1 } },
            { label: "定期的にしている 🏋️‍♀️", score: { kick: 3, bjj: 3, diet: 0 } },
        ]
    },
    {
        id: 2,
        question: "今の目標は？ 🎯",
        options: [
            { label: "ダイエット・シェイプアップ 👙", score: { kick: 3, bjj: 1, diet: 3 } },
            { label: "自分を守る力をつけたい 🛡️", score: { kick: 1, bjj: 3, diet: 0 } },
            { label: "ストレス発散！ 💥", score: { kick: 3, bjj: 0, diet: 1 } },
            { label: "体を動かして気分転換 🌈", score: { kick: 2, bjj: 3, diet: 0 } },
        ]
    },
    {
        id: 3,
        question: "性格はどっち？ 🌸",
        options: [
            { label: "穏やかでマイペース 😌", score: { kick: 1, bjj: 3, diet: 1 } },
            { label: "活発で元気！ 😆", score: { kick: 3, bjj: 1, diet: 2 } },
            { label: "コツコツ派 📚", score: { kick: 1, bjj: 3, diet: 1 } },
            { label: "みんなでワイワイ 🎉", score: { kick: 3, bjj: 1, diet: 2 } },
        ]
    },
    {
        id: 4,
        question: "どんな運動に興味がある？ ✨",
        options: [
            { label: "リズムに合わせて体を動かす 💃", score: { kick: 3, bjj: 0, diet: 2 } },
            { label: "頭を使って体を動かす 🧩", score: { kick: 0, bjj: 3, diet: 0 } },
            { label: "とにかく痩せたい 💦", score: { kick: 2, bjj: 1, diet: 3 } },
            { label: "まだわからない 🤔", score: { kick: 1, bjj: 1, diet: 1 } },
        ]
    }
];

export default function QuizPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState({ kick: 0, bjj: 0, diet: 0 });
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (score: { kick: number, bjj: number, diet: number }) => {
        setScores(prev => ({
            kick: prev.kick + score.kick,
            bjj: prev.bjj + score.bjj,
            diet: prev.diet + score.diet
        }));

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            setShowResult(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScores({ kick: 0, bjj: 0, diet: 0 });
        setShowResult(false);
    };

    const getResult = () => {
        if (scores.kick >= scores.bjj && scores.kick >= scores.diet) {
            return {
                title: "楽しい全身運動クラス",
                description: "リズムに合わせて体を動かすだけで、ストレス発散・シェイプアップ・体力アップが叶います！楽しく続けられる運動です♡",
                image: "💃",
                color: "from-pink-400 to-red-400",
                link: "/program#kickboxing"
            };
        } else if (scores.bjj > scores.kick && scores.bjj >= scores.diet) {
            return {
                title: "頭を使う運動クラス",
                description: "まるでパズルのような運動で、頭を使って体を動かします。力に頼らず、コツを掴めば誰でも楽しめます♡",
                image: "🧘",
                color: "from-blue-400 to-indigo-400",
                link: "/program#bjj"
            };
        } else {
            return {
                title: "ダイエット・フィットネス",
                description: "まずは楽しく体を動かすことから！無理なく続けられるプログラムで理想のボディを目指しましょう♡",
                image: "✨",
                color: "from-green-400 to-teal-400",
                link: "/program"
            };
        }
    };

    const result = getResult();

    return (
        <div className="min-h-screen bg-gradient-to-br from-kawaii-cream via-white to-kawaii-lavender py-20 px-4 flex items-center justify-center">
            <div className="max-w-md w-full">
                <AnimatePresence mode="wait">
                    {!showResult ? (
                        <motion.div
                            key="question"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-white/80 backdrop-blur-md rounded-3xl shadow-cute p-8 border border-white"
                        >
                            {/* Progress Bar */}
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
                                <div
                                    className="bg-kawaii-pink h-2.5 rounded-full transition-all duration-500"
                                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                                ></div>
                            </div>

                            <h2 className="text-2xl font-bold text-kawaii-text mb-8 text-center font-rounded">
                                Q{currentQuestion + 1}. {questions[currentQuestion].question}
                            </h2>

                            <div className="space-y-4">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <motion.button
                                        key={index}
                                        whileHover={{ scale: 1.02, backgroundColor: '#FFF9F5' }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleAnswer(option.score)}
                                        className="w-full p-4 text-left rounded-xl border-2 border-kawaii-pink/30 hover:border-kawaii-pink text-kawaii-text font-medium transition-colors bg-white shadow-sm"
                                    >
                                        {option.label}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white/90 backdrop-blur-md rounded-3xl shadow-cute p-8 border-2 border-kawaii-pink text-center relative overflow-hidden"
                        >
                            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${result.color}`}></div>

                            <div className="text-6xl mb-4 animate-bounce">{result.image}</div>

                            <h3 className="text-lg text-gray-500 mb-2 font-bold">あなたにピッタリなのは...</h3>
                            <h2 className={`text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${result.color}`}>
                                {result.title}
                            </h2>

                            <p className="text-gray-600 mb-8 leading-relaxed">
                                {result.description}
                            </p>

                            <div className="space-y-4">
                                <a
                                    href="https://lin.ee/21ape6V"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-4 bg-[#06C755] text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                                >
                                    <MessageCircle size={24} />
                                    LINEで無料相談・予約
                                </a>

                                <Link
                                    href={result.link}
                                    className="block w-full py-4 bg-white border-2 border-kawaii-pink text-kawaii-pink rounded-full font-bold hover:bg-kawaii-pink hover:text-white transition-colors"
                                >
                                    クラスの詳細を見る
                                </Link>

                                <button
                                    onClick={resetQuiz}
                                    className="flex items-center justify-center gap-2 text-gray-400 hover:text-gray-600 mx-auto text-sm mt-4"
                                >
                                    <RefreshCw size={16} />
                                    もう一度診断する
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
