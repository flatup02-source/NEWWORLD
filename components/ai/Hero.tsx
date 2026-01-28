import Image from 'next/image';
import styles from '@/styles/ai.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>AIが導く、あなたの最高のパフォーマンス</h1>
        <p className={styles.subtitle}>AIがいますぐあなたのトレーニングをサポートします</p>
        <a
          href="https://liff.line.me/2008276179-XxwM2QQD"
          className={styles.ctaButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          AI体験予約
        </a>
      </div>
      <div className={styles.heroImage}>
        <Image
          src="/images/ai_page_visual.png"
          alt="AIトレーニングビジュアル"
          width={800}
          height={600}
          priority
        />
      </div>
    </section>
  );
}
