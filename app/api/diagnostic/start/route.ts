// API Route: /api/diagnostic/start
// Handles diagnostic form submissions and forwards to Dify

import { NextRequest, NextResponse } from 'next/server';
import { callDifyWorkflow } from '@/lib/dify';
import { pushLineMessage, formatDiagnosticMessage } from '@/lib/line';
import { DiagnosticRequest } from '@/lib/types/diagnostic';

export async function POST(request: NextRequest) {
    try {
        const body: DiagnosticRequest = await request.json();

        // Validate request
        if (!body.type || !body.payload) {
            return NextResponse.json(
                { error: 'Invalid request: type and payload are required' },
                { status: 400 }
            );
        }

        // Call Dify workflow
        const difyResponse = await callDifyWorkflow(body.type, body.payload);

        // If LINE callback is requested, send message
        if (body.callback?.channel === 'line' && body.userId) {
            try {
                const messages = formatDiagnosticMessage(difyResponse);
                await pushLineMessage(body.userId, messages);
            } catch (lineError) {
                console.error('LINE message send failed:', lineError);
                // Continue even if LINE send fails
            }
        }

        // Return success response
        return NextResponse.json({
            success: true,
            diagnosis_id: difyResponse.diagnosis_id,
            summary: difyResponse.summary,
            message: body.callback?.channel === 'line'
                ? '診断結果をLINEで送信しました'
                : '診断が完了しました。LINEで結果を受け取るには、公式アカウントに友達追加してください。',
        });
    } catch (error) {
        console.error('Diagnostic API error:', error);
        return NextResponse.json(
            {
                error: error instanceof Error ? error.message : '診断処理中にエラーが発生しました',
            },
            { status: 500 }
        );
    }
}


