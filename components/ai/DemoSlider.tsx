import Image from 'next/image';
import styles from '@/styles/ai.module.css';

// 簡易スライダー（自動再生なし）
const demoItems = [
    {
        src: '/images/hero_image_gym.png',
        alt: 'ジム全体像',
    },
    {
        src: '/images/ai_page_visual.png',
        alt: 'AIトレーニングビジュアル',
    },
    {
        src: '/images/kids_training_visual.png',
        alt: 'キッズトレーニング風景',
    },
];

export default function DemoSlider() {
    return (
        <section className={styles.demoSlider}>
            <h2 className={styles.sectionTitle}>AI体験デモ</h2>
            <div className={styles.sliderContainer}>
                {demoItems.map((item, idx) => (
                    <div key={idx} className={styles.slide}>
                        <Image
                            src={item.src}
                            alt={item.alt}
                            width={800}
                            height={450}
                            sizes="(max-width: 768px) 100vw, 800px"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
