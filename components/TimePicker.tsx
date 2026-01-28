"use client";

import React from 'react';

interface TimePickerProps {
    selectedTime: string;
    onTimeChange: (time: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ selectedTime, onTimeChange }) => {
    const presets = [
        { label: '朝ごはん', time: '07:00' },
        { label: '昼ごはん', time: '12:00' },
        { label: '夜ごはん', time: '19:00' },
        { label: 'おやつ', time: '15:00' },
    ];

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap gap-2 justify-center">
                {presets.map((preset) => (
                    <button
                        key={preset.label}
                        onClick={() => onTimeChange(preset.time)}
                        className="px-4 py-2 rounded-full bg-kawaii-mint-light text-kawaii-text text-sm font-bold hover:bg-kawaii-mint transition-colors"
                    >
                        {preset.label}
                    </button>
                ))}
            </div>
            <div className="flex justify-center">
                <input
                    type="time"
                    value={selectedTime}
                    onChange={(e) => onTimeChange(e.target.value)}
                    className="px-6 py-3 rounded-xl border-2 border-kawaii-pink-light text-2xl font-bold text-kawaii-text focus:outline-none focus:border-kawaii-pink focus:ring-2 focus:ring-kawaii-pink/20 bg-white"
                />
            </div>
        </div>
    );
};

export default TimePicker;
