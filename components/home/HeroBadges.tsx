'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroBadges = () => {
    const badges = [
        { text: "女性会員82%", icon: "👩" },
        { text: "初心者91%", icon: "🔰" },
        { text: "キッズOK♡", icon: "👶" },
    ];

    return (
        <div className="w-full bg-white py-6 border-b border-pink-100">
            <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-4 md:gap-8">
                {badges.map((badge, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="flex items-center space-x-2 px-6 py-3 bg-sakura-pink/10 rounded-full border border-sakura-pink shadow-sm"
                    >
                        <span className="text-2xl">{badge.icon}</span>
                        <span className="text-lg md:text-xl font-bold text-pink-600 font-sans-japanese">
                            {badge.text}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default HeroBadges;
