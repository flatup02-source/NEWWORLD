import { Metadata } from 'next';
import AptitudeDiagnosisClient from './AptitudeDiagnosisClient';

export const metadata: Metadata = {
    title: '格闘技適性診断 | AI診断 - FLAT-UP GYM',
    description: 'あなたの性格やライフスタイルから、最適な格闘技スタイルを診断します。',
};

export default function AptitudeDiagnosisPage() {
    return <AptitudeDiagnosisClient />;
}


