'use client';

import OptimizedImage from '@/components/OptimizedImage';
import SEO from '@/components/SEO';
import { breadcrumbJsonLd } from '@/lib/json-ld';
import { MessageSquare, Clock, Calendar, ShieldCheck } from 'lucide-react';

export default function LinePage() {
    const lineBreadcrumbs = breadcrumbJsonLd([
        { name: 'Home', url: 'https://flat-up.jp/' },
        { name: 'LINE公式アカウント', url: 'https://flat-up.jp/line' },
    ]);

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="LINE公式アカウント｜AIチャットで24時間サポート - FLATUPGYM"
                description="FLATUPGYMのLINE公式アカウントでは、AIチャットボットが24時間365日、あなたの質問にお答えします。体験予約やクラスの確認もスムーズに。"
                jsonLd={lineBreadcrumbs}
            />

            <main>
                {/* Hero Section */}
                <section className="relative py-20 bg-gradient-to-br from-green-50 to-emerald-100 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center max-w-3xl mx-auto">
                            <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-6 border border-green-200">
                                NEW FEATURE
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                                    LINE AI
                                </span>
                                が<br />
                                あなたをサポート
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                                FLATUPGYMの公式LINEが進化しました。<br />
                                AIチャットボットが、24時間365日、<br className="sm:hidden" />
                                あなたの疑問や質問に即座にお答えします。
                            </p>
                            <a
                                href="https://lin.ee/21ape6V"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-[#06C755] rounded-full shadow-lg hover:bg-[#05b34c] hover:shadow-xl transform hover:-translate-y-1 group"
                            >
                                <MessageSquare className="w-6 h-6 mr-2 group-hover:animate-bounce" />
                                今すぐ友だち追加する
                            </a>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Feature 1 */}
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                    <Clock className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">24時間365日対応</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    深夜でも早朝でも、気になったその時に。AIが即座に回答するので、返信を待つストレスがありません。
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                                    <ShieldCheck className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">初心者でも安心</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    「何を持っていけばいい？」「未経験でも大丈夫？」など、聞きにくい質問もAIになら気軽に相談できます。
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6 text-pink-600">
                                    <Calendar className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">体験予約もスムーズ</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    体験レッスンの申し込みもLINEから簡単に。スケジュール確認から予約まで、スマホひとつで完結します。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QR Code Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            QRコードから友だち追加
                        </h2>
                        <div className="bg-white p-8 rounded-3xl shadow-lg inline-block max-w-sm w-full">
                            <div className="relative aspect-square w-full mb-6">
                                <OptimizedImage
                                    src="/images/line_add_friends.png"
                                    alt="LINE友だち追加QRコード"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-gray-500 text-sm mb-6">
                                スマホのカメラで読み取るか、<br />
                                下のボタンをタップしてください
                            </p>
                            <a
                                href="https://lin.ee/21ape6V"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-3 px-6 text-center font-bold text-white bg-[#06C755] rounded-xl hover:bg-[#05b34c] transition-colors"
                            >
                                友だち追加
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
