// Dify Integration Utilities

import { DiagnosticRequest, DifyResponse } from './types/diagnostic';

const DIFY_TRIGGER_URL = process.env.DIFY_TRIGGER_URL || '';
const DIFY_API_KEY = process.env.DIFY_API_KEY || '';
const DIFY_WEBHOOK_SECRET = process.env.DIFY_WEBHOOK_SECRET || '';

interface DifyWebhookPayload {
    inputs: Record<string, any>;
    query?: string;
    response_mode?: 'blocking' | 'streaming';
    user?: string;
}

/**
 * Call Dify workflow webhook
 */
export async function callDifyWorkflow(
    type: 'meal' | 'form' | 'aptitude',
    payload: any
): Promise<DifyResponse> {
    if (!DIFY_TRIGGER_URL) {
        throw new Error('DIFY_TRIGGER_URL is not configured');
    }

    // Map diagnostic type to workflow ID
    const workflowMap: Record<string, string> = {
        meal: process.env.DIFY_WORKFLOW_MEAL_ID || 'meal_diagnosis',
        form: process.env.DIFY_WORKFLOW_FORM_ID || 'form_evaluation',
        aptitude: process.env.DIFY_WORKFLOW_APTITUDE_ID || 'aptitude_test',
    };

    const workflowId = workflowMap[type];
    const webhookUrl = `${DIFY_TRIGGER_URL}/workflows/${workflowId}/trigger`;

    // Prepare Dify webhook payload
    const difyPayload: DifyWebhookPayload = {
        inputs: {
            ...payload,
            diagnostic_type: type,
        },
        response_mode: 'blocking',
        user: payload.userId || 'anonymous',
    };

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${DIFY_API_KEY}`,
                'X-Webhook-Secret': DIFY_WEBHOOK_SECRET,
            },
            body: JSON.stringify(difyPayload),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Dify API error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();

        // Parse Dify response to our format
        return parseDifyResponse(data);
    } catch (error) {
        console.error('Dify API call failed:', error);
        throw error;
    }
}

/**
 * Parse Dify response to standardized format
 */
function parseDifyResponse(data: any): DifyResponse {
    // Dify response structure may vary, adjust based on your workflow output
    if (data.data && data.data.outputs) {
        const outputs = data.data.outputs;
        return {
            diagnosis_id: outputs.diagnosis_id || `dfy_${Date.now()}`,
            summary: outputs.summary || outputs.text || '診断が完了しました',
            recommendations: outputs.recommendations || [],
            confidence: outputs.confidence,
            raw_text: outputs.raw_text || outputs.text,
        };
    }

    // Fallback parsing
    return {
        diagnosis_id: `dfy_${Date.now()}`,
        summary: data.text || data.message || '診断が完了しました',
        recommendations: [],
        raw_text: JSON.stringify(data),
    };
}

/**
 * Validate Dify webhook secret
 */
export function validateDifyWebhookSecret(secret: string): boolean {
    return secret === DIFY_WEBHOOK_SECRET;
}

