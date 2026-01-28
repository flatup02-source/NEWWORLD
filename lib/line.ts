// LINE Messaging API Integration

const LINE_CHANNEL_ACCESS_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN || '';
const LINE_CHANNEL_SECRET = process.env.LINE_CHANNEL_SECRET || '';

export interface LineMessage {
    type: 'text' | 'template';
    text?: string;
    template?: any;
}

export interface LineReplyRequest {
    replyToken: string;
    messages: LineMessage[];
}

export interface LinePushRequest {
    to: string;
    messages: LineMessage[];
}

/**
 * Send reply message via LINE Messaging API
 */
export async function replyLineMessage(
    replyToken: string,
    messages: LineMessage[]
): Promise<void> {
    if (!LINE_CHANNEL_ACCESS_TOKEN) {
        throw new Error('LINE_CHANNEL_ACCESS_TOKEN is not configured');
    }

    const response = await fetch('https://api.line.me/v2/bot/message/reply', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({
            replyToken,
            messages,
        }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`LINE API error: ${response.status} - ${errorText}`);
    }
}

/**
 * Send push message via LINE Messaging API
 */
export async function pushLineMessage(
    userId: string,
    messages: LineMessage[]
): Promise<void> {
    if (!LINE_CHANNEL_ACCESS_TOKEN) {
        throw new Error('LINE_CHANNEL_ACCESS_TOKEN is not configured');
    }

    const response = await fetch('https://api.line.me/v2/bot/message/push', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({
            to: userId,
            messages,
        }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`LINE API error: ${response.status} - ${errorText}`);
    }
}

/**
 * Validate LINE webhook signature
 */
export async function validateLineSignature(
    body: string,
    signature: string
): Promise<boolean> {
    if (!LINE_CHANNEL_SECRET) {
        throw new Error('LINE_CHANNEL_SECRET is not configured');
    }

    const crypto = await import('crypto');
    const hash = crypto
        .createHmac('sha256', LINE_CHANNEL_SECRET)
        .update(body)
        .digest('base64');

    return hash === signature;
}

/**
 * Format diagnostic result as LINE message
 */
export function formatDiagnosticMessage(result: {
    summary: string;
    recommendations?: Array<{ type: string; text: string }>;
}): LineMessage[] {
    const messages: LineMessage[] = [
        {
            type: 'text',
            text: `✨ 診断結果が届きました！\n\n${result.summary}`,
        },
    ];

    if (result.recommendations && result.recommendations.length > 0) {
        const recommendationsText = result.recommendations
            .map((rec, idx) => `${idx + 1}. ${rec.text}`)
            .join('\n');
        
        messages.push({
            type: 'text',
            text: `📋 おすすめポイント\n\n${recommendationsText}`,
        });
    }

    // Add CTA buttons
    messages.push({
        type: 'template',
        template: {
            type: 'buttons',
            text: 'もっと詳しく知りたい方はこちら',
            actions: [
                {
                    type: 'uri',
                    label: 'トライアルクラス予約',
                    uri: 'https://flat-up.jp/trial-lesson',
                },
                {
                    type: 'uri',
                    label: 'トレーナー相談',
                    uri: 'https://lin.ee/21ape6V',
                },
            ],
        },
    });

    return messages;
}


