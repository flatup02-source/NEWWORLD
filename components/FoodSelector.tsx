"use client";

import React from 'react';
import foodOptions from '../src/data/foodOptions.json';

interface FoodSelectorProps {
    selectedCategory: string | null;
    onSelect: (id: string) => void;
}

const FoodSelector: React.FC<FoodSelectorProps> = ({ selectedCategory, onSelect }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {foodOptions.map((option) => (
                <button
                    key={option.id}
                    onClick={() => onSelect(option.id)}
                    className={`
            flex flex-col items-center justify-center
            p-4 rounded-xl transition-all duration-200
            border-2
            ${selectedCategory === option.id
                            ? 'bg-kawaii-pink-light border-kawaii-pink shadow-cute scale-105'
                            : 'bg-white border-transparent hover:border-kawaii-pink-light hover:shadow-soft'
                        }
          `}
                >
                    <span className="text-4xl mb-2 filter drop-shadow-sm">{option.icon}</span>
                    <span className="text-sm font-bold text-kawaii-text">{option.label}</span>
                </button>
            ))}
        </div>
    );
};

export default FoodSelector;
