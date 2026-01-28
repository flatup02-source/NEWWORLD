import { Metadata } from 'next';
import DiagnosisClient from './DiagnosisClient';

export const metadata: Metadata = {
    title: 'キックボクシング適性診断 | FLAT-UP GYM 成田',
    description: 'あなたの性格やライフスタイルから、ぴったりの格闘技スタイルを診断します！30秒でわかる無料診断実施中。',
    openGraph: {
        title: 'キックボクシング適性診断 | FLAT-UP GYM 成田',
        description: 'あなたの才能が見つかるかも？30秒でわかる無料格闘技診断！',
        images: ['/images/diagnosis-og.jpg'], // Assuming a default or we can leave it to fallback
    },
};

export default function DiagnosisPage() {
    return <DiagnosisClient />;
}
