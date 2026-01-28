import styles from '@/styles/ai.module.css';

const features = [
    {
        title: '戦闘力数値化',
        description: 'AIがあなたの現在の戦闘力を数値化し、目標達成までのロードマップを提示します。',
        icon: '⚔️',
    },
    {
        title: 'カロリー計算',
        description: 'トレーニング中の消費カロリーと食事のカロリーをリアルタイムで算出し、最適な栄養バランスを提案します。',
        icon: '🔥',
    },
    {
        title: 'テキストアドバイス',
        description: 'AIがフォームやメニュー改善点をテキストでフィードバックし、効果的な練習をサポートします。',
        icon: '💡',
    },
];

export default function Features() {
    return (
        <section className={styles.features}>
            <h2 className={styles.sectionTitle}>AIが提供する3つのサポート</h2>
            <div className={styles.cardContainer}>
                {features.map((f) => (
                    <div key={f.title} className={styles.card}>
                        <div className={styles.icon}>{f.icon}</div>
                        <h3 className={styles.cardTitle}>{f.title}</h3>
                        <p className={styles.cardDesc}>{f.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
