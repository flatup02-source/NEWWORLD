'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Video, ArrowLeft, Loader2, MessageCircle, Upload } from 'lucide-react';
import Link from 'next/link';
import KawaiiButton from '@/components/kawaii/KawaiiButton';

interface FormData {
    videoUrl?: string;
    description: string;
    technique: 'punch' | 'kick' | 'guard' | 'other';
    lineUserId?: string;
}

const techniques = [
    { value: 'punch', label: 'パンチ' },
    { value: 'kick', label: 'キック' },
    { value: 'guard', label: 'ガード' },
    { value: 'other', label: 'その他' }
];

export default function FormDiagnosisClient() {
    const [formData, setFormData] = useState<FormData>({
        description: '',
        technique: 'punch'
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
                    type: 'form',
                    payload: {
                        description: formData.description,
                        technique: formData.technique,
                        videoUrl: formData.videoUrl
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

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-kawaii-cream via-white to-kawaii-lavender py-20 px-4 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-soft p-8 border-4 border-blue-400/30 text-center"
                >
                    <div className="text-6xl mb-6">🎥</div>
                    <h2 className="text-2xl font-bold text-kawaii-text mb-4 font-rounded">
                        診断リクエストを送信しました！
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        動画をLINEで送信してください。<br />
                        AIがあなたのフォームを分析し、改善提案をお送りします。
                    </p>
                    <a
                        href="https://lin.ee/21ape6V"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mb-4"
                    >
                        <KawaiiButton variant="secondary" className="w-full">
                            <MessageCircle className="w-5 h-5 mr-2" />
                            LINEで動画を送る
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
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center shadow-lg">
                            <Video className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-kawaii-text font-rounded">
                                格闘技フォーム診断
                            </h1>
                            <p className="text-gray-600">あなたのフォームをAIが分析します</p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onSubmit={handleSubmit}
                    className="bg-white/90 backdrop-blur-md rounded-3xl shadow-soft p-8 border-4 border-blue-400/30"
                >
                    <div className="space-y-6">
                        {/* Technique */}
                        <div>
                            <label className="block text-kawaii-text font-bold mb-2">
                                診断したい技 <span className="text-red-500">*</span>
                            </label>
                            <div className="grid md:grid-cols-2 gap-4">
                                {techniques.map((tech) => (
                                    <button
                                        key={tech.value}
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, technique: tech.value as any }))}
                                        className={`px-4 py-3 rounded-xl border-2 transition-all ${
                                            formData.technique === tech.value
                                                ? 'border-blue-400 bg-blue-400/10 text-blue-600 font-bold'
                                                : 'border-gray-200 hover:border-blue-400/50'
                                        }`}
                                    >
                                        {tech.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-kawaii-text font-bold mb-2">
                                動画の説明（任意）
                            </label>
                            <textarea
                                value={formData.description}
                                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl border-2 border-blue-400/30 focus:border-blue-400 focus:outline-none transition-colors"
                                placeholder="例: ストレートパンチのフォームを見てほしいです。右肩が上がりやすいのが気になります。"
                            />
                        </div>

                        {/* Video URL (Optional) */}
                        <div>
                            <label className="block text-kawaii-text font-bold mb-2">
                                動画URL（任意）
                            </label>
                            <input
                                type="url"
                                value={formData.videoUrl || ''}
                                onChange={(e) => setFormData(prev => ({ ...prev, videoUrl: e.target.value }))}
                                className="w-full px-4 py-3 rounded-xl border-2 border-blue-400/30 focus:border-blue-400 focus:outline-none transition-colors"
                                placeholder="例: https://youtube.com/watch?v=..."
                            />
                            <p className="text-xs text-gray-500 mt-2">
                                ※ 動画はLINEで送信することもできます
                            </p>
                        </div>

                        {/* Info Box */}
                        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                            <h3 className="font-bold text-blue-800 mb-2">📹 動画の送り方</h3>
                            <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
                                <li>フォームを送信後、LINE公式アカウントに友達追加</li>
                                <li>動画をLINEで送信（最大10秒程度推奨）</li>
                                <li>AIが分析して改善提案をお送りします</li>
                            </ol>
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
                            className="w-full py-4 bg-gradient-to-r from-blue-400 to-indigo-400 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    送信中...
                                </>
                            ) : (
                                <>
                                    <Upload className="w-5 h-5" />
                                    診断リクエストを送信
                                </>
                            )}
                        </button>
                    </div>
                </motion.form>
            </div>
        </div>
    );
}


