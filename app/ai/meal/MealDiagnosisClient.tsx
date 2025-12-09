'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UtensilsCrossed, ArrowLeft, Loader2, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import KawaiiButton from '@/components/kawaii/KawaiiButton';

interface FormData {
    age: string;
    sex: 'male' | 'female' | 'other';
    height_cm: string;
    weight_kg: string;
    activity_level: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
    goals: 'lose_weight' | 'maintain' | 'gain_weight' | 'build_muscle';
    lineUserId?: string;
}

const activityLevels = [
    { value: 'sedentary', label: 'ほとんど運動しない（デスクワーク中心）' },
    { value: 'light', label: '軽い運動（週1-3回）' },
    { value: 'moderate', label: '中程度の運動（週3-5回）' },
    { value: 'active', label: '活発な運動（週6-7回）' },
    { value: 'very_active', label: '非常に活発（1日2回以上）' }
];

const goals = [
    { value: 'lose_weight', label: '体重を減らしたい' },
    { value: 'maintain', label: '現状維持' },
    { value: 'gain_weight', label: '体重を増やしたい' },
    { value: 'build_muscle', label: '筋肉をつけたい' }
];

export default function MealDiagnosisClient() {
    const [formData, setFormData] = useState<FormData>({
        age: '',
        sex: 'female',
        height_cm: '',
        weight_kg: '',
        activity_level: 'light',
        goals: 'lose_weight'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/diagnostic/start', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'meal',
                    payload: {
                        age: parseInt(formData.age),
                        sex: formData.sex,
                        height_cm: parseInt(formData.height_cm),
                        weight_kg: parseFloat(formData.weight_kg),
                        activity_level: formData.activity_level,
                        goals: formData.goals
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

    const updateField = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-kawaii-cream via-white to-kawaii-lavender py-20 px-4 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-soft p-8 border-4 border-kawaii-pink/30 text-center"
                >
                    <div className="text-6xl mb-6">✨</div>
                    <h2 className="text-2xl font-bold text-kawaii-text mb-4 font-rounded">
                        診断を送信しました！
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        診断結果はLINEでお送りします。<br />
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
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-red-400 flex items-center justify-center shadow-lg">
                            <UtensilsCrossed className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-kawaii-text font-rounded">
                                食事（ダイエット）診断
                            </h1>
                            <p className="text-gray-600">あなたに最適な食事プランを提案します</p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onSubmit={handleSubmit}
                    className="bg-white/90 backdrop-blur-md rounded-3xl shadow-soft p-8 border-4 border-kawaii-pink/30"
                >
                    <div className="space-y-6">
                        {/* Age */}
                        <div>
                            <label className="block text-kawaii-text font-bold mb-2">
                                年齢 <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                min="10"
                                max="100"
                                required
                                value={formData.age}
                                onChange={(e) => updateField('age', e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border-2 border-kawaii-pink/30 focus:border-kawaii-pink focus:outline-none transition-colors"
                                placeholder="例: 30"
                            />
                        </div>

                        {/* Sex */}
                        <div>
                            <label className="block text-kawaii-text font-bold mb-2">
                                性別 <span className="text-red-500">*</span>
                            </label>
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { value: 'female', label: '女性' },
                                    { value: 'male', label: '男性' },
                                    { value: 'other', label: 'その他' }
                                ].map((option) => (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => updateField('sex', option.value)}
                                        className={`px-4 py-3 rounded-xl border-2 transition-all ${
                                            formData.sex === option.value
                                                ? 'border-kawaii-pink bg-kawaii-pink/10 text-kawaii-pink font-bold'
                                                : 'border-gray-200 hover:border-kawaii-pink/50'
                                        }`}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Height & Weight */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-kawaii-text font-bold mb-2">
                                    身長 (cm) <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    min="100"
                                    max="250"
                                    required
                                    value={formData.height_cm}
                                    onChange={(e) => updateField('height_cm', e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-kawaii-pink/30 focus:border-kawaii-pink focus:outline-none transition-colors"
                                    placeholder="例: 165"
                                />
                            </div>
                            <div>
                                <label className="block text-kawaii-text font-bold mb-2">
                                    体重 (kg) <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    min="30"
                                    max="200"
                                    step="0.1"
                                    required
                                    value={formData.weight_kg}
                                    onChange={(e) => updateField('weight_kg', e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-kawaii-pink/30 focus:border-kawaii-pink focus:outline-none transition-colors"
                                    placeholder="例: 60.5"
                                />
                            </div>
                        </div>

                        {/* Activity Level */}
                        <div>
                            <label className="block text-kawaii-text font-bold mb-2">
                                活動レベル <span className="text-red-500">*</span>
                            </label>
                            <div className="space-y-2">
                                {activityLevels.map((level) => (
                                    <button
                                        key={level.value}
                                        type="button"
                                        onClick={() => updateField('activity_level', level.value)}
                                        className={`w-full px-4 py-3 rounded-xl border-2 text-left transition-all ${
                                            formData.activity_level === level.value
                                                ? 'border-kawaii-pink bg-kawaii-pink/10 text-kawaii-pink font-bold'
                                                : 'border-gray-200 hover:border-kawaii-pink/50'
                                        }`}
                                    >
                                        {level.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Goals */}
                        <div>
                            <label className="block text-kawaii-text font-bold mb-2">
                                目標 <span className="text-red-500">*</span>
                            </label>
                            <div className="grid md:grid-cols-2 gap-4">
                                {goals.map((goal) => (
                                    <button
                                        key={goal.value}
                                        type="button"
                                        onClick={() => updateField('goals', goal.value)}
                                        className={`px-4 py-3 rounded-xl border-2 transition-all ${
                                            formData.goals === goal.value
                                                ? 'border-kawaii-pink bg-kawaii-pink/10 text-kawaii-pink font-bold'
                                                : 'border-gray-200 hover:border-kawaii-pink/50'
                                        }`}
                                    >
                                        {goal.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 text-red-600">
                                {error}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-gradient-to-r from-kawaii-pink to-purple-400 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    送信中...
                                </>
                            ) : (
                                <>
                                    <MessageCircle className="w-5 h-5" />
                                    LINEで診断結果を受け取る
                                </>
                            )}
                        </button>

                        <p className="text-xs text-gray-500 text-center">
                            ※ 診断結果はLINE公式アカウントに友達追加後、お送りします
                        </p>
                    </div>
                </motion.form>
            </div>
        </div>
    );
}


