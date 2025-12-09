import React from 'react';

interface KawaiiCardProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'pink' | 'mint' | 'white';
}

const KawaiiCard: React.FC<KawaiiCardProps> = ({ children, className = '', variant = 'white' }) => {
    const bgColors = {
        pink: 'bg-kawaii-pink-light',
        mint: 'bg-kawaii-mint-light',
        white: 'bg-white',
    };

    return (
        <div
            className={`
        ${bgColors[variant]}
        rounded-2xl
        shadow-soft
        hover:shadow-cute
        transition-shadow
        duration-300
        p-6
        border
        border-white/50
        backdrop-blur-sm
        ${className}
      `}
        >
            {children}
        </div>
    );
};

export default KawaiiCard;
