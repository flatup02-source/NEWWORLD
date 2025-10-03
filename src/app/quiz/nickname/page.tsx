"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import quizData from '@/src/data/quizData.json';

interface QuizItem {
  id: number;
  type: string;
  question: string;
  correct_answer: string;
  options: string[];
  category: string;
  trivia: string;
}

export default function NicknameQuizPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState<QuizItem[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const feedbackTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const correctSoundRef = useRef<HTMLAudioElement | null>(null);
  const incorrectSoundRef = useRef<HTMLAudioElement | null>(null);
  const decisionSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    correctSoundRef.current = new Audio('/sounds/correct.mp3');
    incorrectSoundRef.current = new Audio('/sounds/incorrect.mp3');
    decisionSoundRef.current = new Audio('/sounds/decision.mp3');

    // Filter nickname quizzes and shuffle to get 10 questions
    const nicknameQuizzes = quizData.filter(q => q.type === 'nickname');
    const shuffledQuizzes = nicknameQuizzes.sort(() => 0.5 - Math.random());
    setQuizQuestions(shuffledQuizzes.slice(0, 10));
  }, []);

  const playSound = useCallback((soundRef: React.MutableRefObject<HTMLAudioElement | null>) => {
    if (soundRef.current) {
      soundRef.current.currentTime = 0; // Rewind to start
      soundRef.current.play().catch(e => console.error("Error playing sound:", e));
    }
  }, []);

  const handleAnswer = (answer: string) => {
    if (selectedAnswer || showFeedback) return; // Prevent multiple answers or answering during feedback

    setSelectedAnswer(answer);
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correct_answer;

    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
      setFeedback('correct');
      playSound(correctSoundRef);
    } else {
      setFeedback('incorrect');
      playSound(incorrectSoundRef);
    }
    setShowFeedback(true);

    feedbackTimeoutRef.current = setTimeout(() => {
      playSound(decisionSoundRef);
      setShowFeedback(false);
      setSelectedAnswer(null);
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      } else {
        // Quiz finished, redirect to results page
        router.push(`/results?score=${score + (isCorrect ? 1 : 0)}&type=nickname`);
      }
    }, 1500);
  };

  useEffect(() => {
    return () => {
      if (feedbackTimeoutRef.current) {
        clearTimeout(feedbackTimeoutRef.current);
      }
    };
  }, []);

  if (quizQuestions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-prideBlack text-white">
        <p className="text-pride-title text-2xl">クイズデータを読み込み中...</p>
      </div>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-prideBlack text-white overflow-hidden p-4">
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

      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl p-6 bg-prideBlack bg-opacity-80 rounded-lg shadow-lg border-4 border-prideGold">
        <h2 className="text-pride-title text-3xl font-bold mb-4">
          異名当てクイズ
        </h2>
        <p className="text-xl mb-6">問題 {currentQuestionIndex + 1} / {quizQuestions.length}</p>

        <div className="w-full mb-8 p-4 bg-prideGray rounded-md border-2 border-prideGold text-center">
          <p className="text-pride-title text-2xl font-bold">{currentQuestion.question}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={showFeedback}
              className={`relative px-6 py-3 text-xl font-bold text-white border-4 rounded-lg shadow-md
                         transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95
                         ${selectedAnswer === option
                            ? (feedback === 'correct' ? 'bg-green-700 border-green-500' : 'bg-red-700 border-red-500')
                            : 'bg-prideRed border-prideGold hover:bg-prideGold hover:text-prideBlack'}
                         ${showFeedback && option === currentQuestion.correct_answer ? 'bg-green-700 border-green-500 animate-pulse-green' : ''}
                         ${showFeedback && selectedAnswer === option && feedback === 'incorrect' ? 'animate-shake' : ''}
                         focus:outline-none focus:ring-4 focus:ring-prideGold focus:ring-opacity-75
                         overflow-hidden group`}
            >
              <span className="relative z-10 text-pride-title">{option}</span>
              <span className="absolute inset-0 bg-prideGold opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </button>
          ))}
        </div>

        {showFeedback && (
          <div className={`mt-8 text-3xl font-bold ${feedback === 'correct' ? 'text-green-400' : 'text-red-400'}`}>
            {feedback === 'correct' ? '正解！' : '不正解！'}
          </div>
        )}
      </div>
    </div>
  );
}