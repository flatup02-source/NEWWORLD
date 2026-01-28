'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface KawaiiButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'accent';
    className?: string;
}

const KawaiiButton: React.FC<KawaiiButtonProps> = ({
    children,
    href,
    onClick,
    variant = 'primary',
    className = ''
}) => {
    const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-full font-kawaii font-bold text-lg shadow-soft transition-all duration-300";

    const variants = {
        primary: "bg-kawaii-pink text-white hover:bg-sakura-hover border-4 border-white",
        secondary: "bg-kawaii-mint text-white hover:bg-green-400 border-4 border-white",
        accent: "bg-kawaii-cream text-kawaii-text hover:bg-yellow-200 border-4 border-kawaii-pink",
    };

    const content = (
        <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </motion.span>
    );

    if (href) {
        return (
            <Link href={href} onClick={onClick}>
                {content}
            </Link>
        );
    }

    return (
        <button onClick={onClick}>
            {content}
        </button>
    );
};

export default KawaiiButton;
