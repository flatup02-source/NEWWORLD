"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FoodLogContextType {
    image: string | null;
    setImage: (image: string | null) => void;
    selectedCategory: string | null;
    setSelectedCategory: (category: string | null) => void;
    selectedTime: string;
    setSelectedTime: (time: string) => void;
    resetLog: () => void;
}

const FoodLogContext = createContext<FoodLogContextType | undefined>(undefined);

export const FoodLogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [image, setImage] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string>('');

    const resetLog = () => {
        setImage(null);
        setSelectedCategory(null);
        setSelectedTime('');
    };

    return (
        <FoodLogContext.Provider
            value={{
                image,
                setImage,
                selectedCategory,
                setSelectedCategory,
                selectedTime,
                setSelectedTime,
                resetLog,
            }}
        >
            {children}
        </FoodLogContext.Provider>
    );
};

export const useFoodLog = () => {
    const context = useContext(FoodLogContext);
    if (context === undefined) {
        throw new Error('useFoodLog must be used within a FoodLogProvider');
    }
    return context;
};
