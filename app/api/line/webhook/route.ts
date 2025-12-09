// API Route: /api/line/webhook
// Handles LINE webhook events

import { NextRequest, NextResponse } from 'next/server';
import { validateLineSignature } from '@/lib/line';
import { callDifyWorkflow } from '@/lib/dify';
import { formatDiagnosticMessage, replyLineMessage } from '@/lib/line';

interface LineWebhookEvent {
    type: string;
    replyToken?: string;
    source: {
        userId?: string;
        type: string;
    };
    message?: {
        type: string;
        text?: string;
        id?: string;
    };
}

interface LineWebhookBody {
    events: LineWebhookEvent[];
}

export async function POST(request: NextRequest) {
    try {
        // Get raw body for signature validation
        const bodyText = await request.text();
        const signature = request.headers.get('x-line-signature') || '';

        // Validate signature
        const isValid = await validateLineSignature(bodyText, signature);
        if (!isValid) {
            return NextResponse.json(
                { error: 'Invalid signature' },
                { status: 401 }
            );
        }

        const body: LineWebhookBody = JSON.parse(bodyText);

        // Process each event
        for (const event of body.events) {
            if (event.type === 'message' && event.message?.type === 'text') {
                const userId = event.source.userId;
                const text = event.message.text || '';
                const replyToken = event.replyToken;

                // Simple command detection (can be enhanced)
                if (text.includes('診断') || text.includes('ダイエット') || text.includes('食事')) {
                    // Trigger meal diagnosis
                    try {
                        // For now, send a simple response
                        // In production, you'd parse the message and call Dify
                        if (replyToken) {
                            await replyLineMessage(replyToken, [
                                {
                                    type: 'text',
                                    text: '診断を開始します！\n\n以下のリンクから詳細な診断フォームにアクセスしてください：\nhttps://flat-up.jp/ai/meal',
                                },
                            ]);
                        }
                    } catch (error) {
                        console.error('LINE reply failed:', error);
                    }
                } else if (text.includes('フォーム') || text.includes('動画')) {
                    // Trigger form diagnosis
                    if (replyToken) {
                        await replyLineMessage(replyToken, [
                            {
                                type: 'text',
                                text: 'フォーム診断を開始します！\n\n動画を送信するか、以下のリンクから診断フォームにアクセスしてください：\nhttps://flat-up.jp/ai/form',
                            },
                        ]);
                    }
                } else if (text.includes('適性') || text.includes('診断')) {
                    // Trigger aptitude diagnosis
                    if (replyToken) {
                        await replyLineMessage(replyToken, [
                            {
                                type: 'text',
                                text: '適性診断を開始します！\n\n以下のリンクから診断にアクセスしてください：\nhttps://flat-up.jp/ai/aptitude',
                            },
                        ]);
                    }
                } else {
                    // Default response
                    if (replyToken) {
                        await replyLineMessage(replyToken, [
                            {
                                type: 'text',
                                text: 'こんにちは！FLAT-UP GYMです。\n\n以下の診断が利用できます：\n\n🍽️ 食事診断\n🥊 フォーム診断\n✨ 適性診断\n\n詳しくはこちら：https://flat-up.jp/ai',
                            },
                        ]);
                    }
                }
            }
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('LINE webhook error:', error);
        return NextResponse.json(
            {
                error: error instanceof Error ? error.message : 'Webhook processing failed',
            },
            { status: 500 }
        );
    }
}


