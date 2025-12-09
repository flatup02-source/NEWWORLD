'use client';

import { useState } from 'react';
import styles from '@/styles/ai.module.css';

const faqData = [
    {
        question: 'AIはどのように戦闘力を数値化しますか？',
        answer: 'AIは過去のトレーニングデータと現在のパフォーマンスを分析し、独自のスコアリングアルゴリズムで戦闘力を算出します。',
    },
    {
        question: 'カロリー計算はリアルタイムですか？',
        answer: 'トレーニング中の心拍数や消費エネルギーを元に、リアルタイムでカロリーを算出し、アプリ上に表示します。',
    },
    {
        question: 'テキストアドバイスはどのくらいの頻度で受け取れますか？',
        answer: 'トレーニングごとにAIが分析し、即時に改善ポイントをテキストでフィードバックします。',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section className={styles.faq}>
            <h2 className={styles.sectionTitle}>よくある質問</h2>
            <div className={styles.faqContainer}>
                {faqData.map((item, idx) => (
                    <div key={idx} className={styles.faqItem}>
                        <button className={styles.question} onClick={() => toggle(idx)}>
                            {item.question}
                        </button>
                        {openIndex === idx && <p className={styles.answer}>{item.answer}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
}
