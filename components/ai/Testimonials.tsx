import Image from 'next/image';
import styles from '@/styles/ai.module.css';

const testimonials = [
    {
        name: '山田 花子',
        comment: 'AIが提案してくれたメニューで体力が劇的に向上しました！',
        avatar: '/images/avatar1.png',
    },
    {
        name: '鈴木 次郎',
        comment: 'カロリー計算が正確で、食事管理が楽になりました。',
        avatar: '/images/avatar2.png',
    },
    {
        name: '佐藤 美咲',
        comment: 'テキストアドバイスが具体的で、フォームが改善できました。',
        avatar: '/images/avatar3.png',
    },
];

export default function Testimonials() {
    return (
        <section className={styles.testimonials}>
            <h2 className={styles.sectionTitle}>利用者の声</h2>
            <div className={styles.testimonialContainer}>
                {testimonials.map((t) => (
                    <div key={t.name} className={styles.testimonialCard}>
                        <Image src={t.avatar} alt={t.name} width={80} height={80} className={styles.avatar} />
                        <p className={styles.comment}>"{t.comment}"</p>
                        <p className={styles.name}>- {t.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
