import { Metadata } from 'next';
import MealDiagnosisClient from './MealDiagnosisClient';

export const metadata: Metadata = {
    title: '食事（ダイエット）診断 | AI診断 - FLAT-UP GYM',
    description: 'あなたの体質や目標に合わせた最適な食事プランをAIが提案します。',
};

export default function MealDiagnosisPage() {
    return <MealDiagnosisClient />;
}


