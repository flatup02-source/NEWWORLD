'use client';

import React from 'react';
import OptimizedImage from '../OptimizedImage';

const FacilitiesSection: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-pastel-pink/20 to-mint-green/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-rounded">
                        清潔で快適な施設
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        女性が安心して通える環境づくりにこだわっています。<br />
                        更衣室は清潔で明るく、プライベート空間も完備。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* 更衣室 */}
                    <div className="bg-white rounded-[20px] shadow-soft overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <div className="aspect-[4/3] relative">
                            <OptimizedImage
                                src="https://ik.imagekit.io/FLATUPGYM/facilities-changing-room.jpg"
                                alt="清潔な更衣室"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-rounded">清潔な更衣室</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                明るく清潔な更衣室を完備。鏡やドライヤーもご用意しており、トレーニング後も快適にお過ごしいただけます。
                            </p>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center">
                                    <span className="text-pastel-pink mr-2">✓</span>
                                    個別ロッカー完備
                                </li>
                                <li className="flex items-center">
                                    <span className="text-pastel-pink mr-2">✓</span>
                                    ドライヤー・鏡あり
                                </li>
                                <li className="flex items-center">
                                    <span className="text-pastel-pink mr-2">✓</span>
                                    清潔で明るい空間
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* プライベート空間 */}
                    <div className="bg-white rounded-[20px] shadow-soft overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <div className="aspect-[4/3] relative">
                            <OptimizedImage
                                src="https://ik.imagekit.io/FLATUPGYM/facilities-private.jpg"
                                alt="プライベート空間"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-rounded">安心のプライベート空間</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                女性専用時間帯や個別指導も可能。初めての方でも安心してトレーニングに集中できる環境です。
                            </p>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center">
                                    <span className="text-mint-green mr-2">✓</span>
                                    女性専用時間あり
                                </li>
                                <li className="flex items-center">
                                    <span className="text-mint-green mr-2">✓</span>
                                    個別指導対応
                                </li>
                                <li className="flex items-center">
                                    <span className="text-mint-green mr-2">✓</span>
                                    落ち着いた雰囲気
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FacilitiesSection;
