// Diagnostic Types

export type DiagnosticType = 'meal' | 'form' | 'aptitude';

export interface DiagnosticRequest {
    userId?: string;
    type: DiagnosticType;
    payload: MealPayload | FormPayload | AptitudePayload;
    callback?: {
        channel: 'line';
        replyToken?: string;
    };
}

export interface MealPayload {
    age: number;
    sex: 'male' | 'female' | 'other';
    height_cm: number;
    weight_kg: number;
    activity_level: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
    goals: 'lose_weight' | 'maintain' | 'gain_weight' | 'build_muscle';
}

export interface FormPayload {
    description?: string;
    technique: 'punch' | 'kick' | 'guard' | 'other';
    videoUrl?: string;
}

export interface AptitudePayload {
    totalScore: number;
    answers: Array<{
        questionId: number;
        questionText: string;
    }>;
}

export interface DifyResponse {
    diagnosis_id: string;
    summary: string;
    recommendations: Array<{
        type: string;
        text: string;
    }>;
    confidence?: number;
    raw_text?: string;
}

export interface DiagnosticRecord {
    id?: string;
    userId?: string;
    type: DiagnosticType;
    payload: MealPayload | FormPayload | AptitudePayload;
    status: 'pending' | 'processing' | 'done' | 'failed';
    resultSummary?: DifyResponse;
    rawResponse?: any;
    createdAt: Date;
    updatedAt: Date;
}


