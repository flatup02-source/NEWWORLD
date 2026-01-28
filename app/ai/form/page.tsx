import { Metadata } from 'next';
import FormDiagnosisClient from './FormDiagnosisClient';

export const metadata: Metadata = {
    title: '格闘技フォーム診断 | AI診断 - FLAT-UP GYM',
    description: '動画を送るだけで、あなたのフォームをAIが分析・改善提案します。',
};

export default function FormDiagnosisPage() {
    return <FormDiagnosisClient />;
}


