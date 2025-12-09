# FLAT-UP GYM AI診断機能 実装エクスポート

## 📋 実装概要

FLAT-UP GYM公式サイトに、以下の3種類のAI診断機能を実装しました：

1. **食事（ダイエット）診断** - 体質・目標に基づく最適な食事プラン提案
2. **格闘技フォーム診断** - 動画を送るだけでフォーム分析・改善提案
3. **格闘技適性診断** - 性格・ライフスタイルから最適な格闘技スタイルを診断

診断結果はLINE公式アカウント経由でDify（AIワークフロー）から自動応答が返る仕組みです。

---

## 📁 実装ファイル一覧

### フロントエンド（UI）

```
app/
├── ai/
│   ├── page.tsx                          # AI診断トップページ（メタデータ）
│   ├── AITopClient.tsx                   # AI診断トップページ（クライアントコンポーネント）
│   ├── meal/
│   │   ├── page.tsx                      # 食事診断ページ（メタデータ）
│   │   └── MealDiagnosisClient.tsx      # 食事診断フォーム
│   ├── form/
│   │   ├── page.tsx                      # フォーム診断ページ（メタデータ）
│   │   └── FormDiagnosisClient.tsx      # フォーム診断フォーム
│   └── aptitude/
│       ├── page.tsx                      # 適性診断ページ（メタデータ）
│       └── AptitudeDiagnosisClient.tsx  # 適性診断クイズ
```

### バックエンド（API Routes）

```
app/api/
├── diagnostic/
│   └── start/
│       └── route.ts                      # 診断フォーム送信API
└── line/
    └── webhook/
        └── route.ts                      # LINE webhook受信API
```

### ユーティリティ・型定義

```
lib/
├── types/
│   └── diagnostic.ts                     # 診断関連の型定義
├── dify.ts                               # Dify連携ユーティリティ
├── line.ts                               # LINE Messaging API連携ユーティリティ
└── firestore.ts                          # Firestoreスキーマ定義（プレースホルダー）
```

### ナビゲーション

```
lib/
└── navigation.ts                         # ナビゲーションリンク（「🤖 AI診断」追加済み）
```

---

## 🔧 各ファイルの役割

### 1. AI診断トップページ (`app/ai/`)

**役割**: 3つの診断タイプを選択できるランディングページ

**主要機能**:
- 3つの診断カード（食事・フォーム・適性）を表示
- 各診断へのリンク
- 使い方の説明
- LINE公式アカウントへの誘導

**URL**: `/ai`

---

### 2. 食事診断フォーム (`app/ai/meal/`)

**役割**: 食事・ダイエット診断の入力フォーム

**入力項目**:
- 年齢（必須）
- 性別（必須）
- 身長（cm、必須）
- 体重（kg、必須）
- 活動レベル（必須）
- 目標（必須）

**送信先**: `/api/diagnostic/start` (POST)

**URL**: `/ai/meal`

---

### 3. フォーム診断ページ (`app/ai/form/`)

**役割**: 格闘技フォーム診断のリクエストフォーム

**入力項目**:
- 診断したい技（パンチ/キック/ガード/その他）
- 動画の説明（任意）
- 動画URL（任意）

**送信先**: `/api/diagnostic/start` (POST)

**URL**: `/ai/form`

**注意**: 動画はLINEで送信する方式もサポート

---

### 4. 適性診断ページ (`app/ai/aptitude/`)

**役割**: 格闘技適性診断のクイズ形式フォーム

**機能**:
- 3問のクイズ形式
- スコア計算
- 結果表示
- AI診断への送信オプション

**送信先**: `/api/diagnostic/start` (POST)

**URL**: `/ai/aptitude`

---

### 5. 診断API (`app/api/diagnostic/start/route.ts`)

**役割**: 診断フォーム送信を受け取り、Difyに転送

**エンドポイント**: `POST /api/diagnostic/start`

**リクエスト例**:
```json
{
  "type": "meal",
  "payload": {
    "age": 35,
    "sex": "female",
    "height_cm": 165,
    "weight_kg": 60,
    "activity_level": "light",
    "goals": "lose_weight"
  },
  "userId": "LINE_USER_ID_OPTIONAL",
  "callback": {
    "channel": "line",
    "replyToken": "abc123"
  }
}
```

**レスポンス例**:
```json
{
  "success": true,
  "diagnosis_id": "dfy_20251128_001",
  "summary": "あなたは1日に約2000kcalが適正...",
  "message": "診断が完了しました。LINEで結果を受け取るには..."
}
```

---

### 6. LINE Webhook API (`app/api/line/webhook/route.ts`)

**役割**: LINE webhookイベントを受信し、診断への誘導

**エンドポイント**: `POST /api/line/webhook`

**機能**:
- LINE署名検証
- メッセージタイプ別の分岐処理
- 診断への誘導メッセージ送信

**対応コマンド**:
- 「診断」「ダイエット」「食事」→ 食事診断へ誘導
- 「フォーム」「動画」→ フォーム診断へ誘導
- 「適性」「診断」→ 適性診断へ誘導
- その他 → デフォルトメッセージ

---

### 7. Dify連携 (`lib/dify.ts`)

**役割**: Dify workflow webhook呼び出し

**主要関数**:
- `callDifyWorkflow(type, payload)` - Dify workflowを呼び出し
- `validateDifyWebhookSecret(secret)` - Webhook secret検証
- `parseDifyResponse(data)` - Difyレスポンスを標準形式に変換

**環境変数**:
- `DIFY_TRIGGER_URL` - Dify webhook URL
- `DIFY_API_KEY` - Dify APIキー
- `DIFY_WEBHOOK_SECRET` - Webhook secret
- `DIFY_WORKFLOW_MEAL_ID` - 食事診断ワークフローID
- `DIFY_WORKFLOW_FORM_ID` - フォーム診断ワークフローID
- `DIFY_WORKFLOW_APTITUDE_ID` - 適性診断ワークフローID

---

### 8. LINE連携 (`lib/line.ts`)

**役割**: LINE Messaging APIとの連携

**主要関数**:
- `replyLineMessage(replyToken, messages)` - 返信メッセージ送信
- `pushLineMessage(userId, messages)` - プッシュメッセージ送信
- `validateLineSignature(body, signature)` - 署名検証
- `formatDiagnosticMessage(result)` - 診断結果をLINEメッセージ形式に変換

**環境変数**:
- `LINE_CHANNEL_ACCESS_TOKEN` - LINE Channel Access Token
- `LINE_CHANNEL_SECRET` - LINE Channel Secret

---

### 9. 型定義 (`lib/types/diagnostic.ts`)

**役割**: 診断関連のTypeScript型定義

**主要型**:
- `DiagnosticType` - 診断タイプ（'meal' | 'form' | 'aptitude'）
- `DiagnosticRequest` - 診断リクエスト
- `MealPayload` - 食事診断ペイロード
- `FormPayload` - フォーム診断ペイロード
- `AptitudePayload` - 適性診断ペイロード
- `DifyResponse` - Difyレスポンス
- `DiagnosticRecord` - Firestore保存用レコード

---

## ⚙️ 環境変数設定

`.env.local` ファイルを作成し、以下の環境変数を設定してください：

```bash
# Dify Configuration
DIFY_TRIGGER_URL=https://api.dify.ai/v1
DIFY_API_KEY=your_dify_api_key_here
DIFY_WEBHOOK_SECRET=your_webhook_secret_here
DIFY_WORKFLOW_MEAL_ID=meal_diagnosis
DIFY_WORKFLOW_FORM_ID=form_evaluation
DIFY_WORKFLOW_APTITUDE_ID=aptitude_test

# LINE Messaging API Configuration
LINE_CHANNEL_ACCESS_TOKEN=your_line_channel_access_token_here
LINE_CHANNEL_SECRET=your_line_channel_secret_here
```

---

## ⚠️ 重要な注意事項

### 1. Next.js設定の確認

現在の `next.config.mjs` が静的エクスポート（`output: 'export'`）になっている場合、**API Routesが動作しません**。

**解決策**:
- API Routesを使用する場合: `next.config.mjs` から `output: 'export'` を削除またはコメントアウト
- Cloud Functionsを使用する場合: 別プロジェクトでCloud Functionsを実装し、Next.js API Routesの代わりに使用

### 2. 依存関係

既存のプロジェクトに以下の依存関係が含まれていることを確認：
- `next` (^14.0.0)
- `react` (^18.3.1)
- `framer-motion` (^12.23.24)
- `lucide-react` (^0.542.0)

追加の依存関係は不要です。

### 3. コンポーネント依存

以下の既存コンポーネントを使用しています：
- `@/components/kawaii/KawaiiButton` - ボタンコンポーネント
- `@/components/ui/LineIcon` - LINEアイコン

これらが存在することを確認してください。

---

## 🚀 次のステップ（実装者への指示）

### フェーズ0（MVP）完了項目 ✅

- [x] AI診断トップページ作成
- [x] 3種類の診断フォーム作成
- [x] Next.js API Routes実装
- [x] Dify連携ユーティリティ実装
- [x] LINE連携ユーティリティ実装
- [x] 型定義作成
- [x] ナビゲーションにリンク追加

### フェーズ1（次に実装すべき項目）

#### 1. 環境変数の設定

`.env.local` ファイルを作成し、上記の環境変数を設定してください。

#### 2. Difyワークフローの作成

Difyで以下の3つのワークフローを作成：

**a) 食事診断ワークフロー (`meal_diagnosis`)**
- 入力: age, sex, height_cm, weight_kg, activity_level, goals
- 出力: diagnosis_id, summary, recommendations, confidence, raw_text

**b) フォーム診断ワークフロー (`form_evaluation`)**
- 入力: description, technique, videoUrl
- 出力: diagnosis_id, summary, recommendations, confidence, raw_text

**c) 適性診断ワークフロー (`aptitude_test`)**
- 入力: totalScore, answers
- 出力: diagnosis_id, summary, recommendations, confidence, raw_text

各ワークフローのWebhook URLを取得し、環境変数に設定してください。

#### 3. LINE Webhook設定

LINE Developers Consoleで以下を設定：

1. **Webhook URL**: `https://your-domain.com/api/line/webhook`
2. **Webhookを有効化**
3. **Channel Access Token** と **Channel Secret** を取得し、環境変数に設定

#### 4. Next.js設定の確認

`next.config.mjs` を確認し、API Routesが動作する設定になっているか確認：

```javascript
// ❌ 静的エクスポート（API Routesが動作しない）
const nextConfig = {
  output: 'export',
  // ...
};

// ✅ API Routesを使用する場合
const nextConfig = {
  // output: 'export', // コメントアウトまたは削除
  // ...
};
```

#### 5. Firestore実装（オプション）

`lib/firestore.ts` のプレースホルダーを実装：

- Firebase Admin SDKの設定
- `saveDiagnosticRecord()` の実装
- `getDiagnosticRecord()` の実装
- `updateDiagnosticStatus()` の実装
- `getUserDiagnostics()` の実装

#### 6. テスト

以下のテストを実施：

1. **単体テスト**
   - 各診断フォームからの送信テスト
   - API Routesの動作確認

2. **統合テスト**
   - Difyワークフローの呼び出し確認
   - LINEメッセージ送信確認

3. **セキュリティテスト**
   - LINE署名検証の確認
   - Dify webhook secret検証の確認

4. **UXテスト**
   - モバイルでの表示確認
   - LINE連携フローの確認

---

## 📝 実装時のチェックリスト

- [ ] 環境変数を `.env.local` に設定
- [ ] Difyで3つのワークフローを作成
- [ ] DifyワークフローのWebhook URLを取得
- [ ] LINE Developers ConsoleでWebhookを設定
- [ ] LINE Channel Access TokenとSecretを取得
- [ ] `next.config.mjs` でAPI Routesが有効か確認
- [ ] 開発サーバーで動作確認（`npm run dev`）
- [ ] 各診断フォームから送信テスト
- [ ] LINE webhookの動作確認
- [ ] Firestore実装（必要に応じて）

---

## 🔗 参考URL

- **Dify公式ドキュメント**: https://docs.dify.ai/
- **LINE Developers Console**: https://developers.line.biz/console/
- **LINE Messaging API ドキュメント**: https://developers.line.biz/ja/docs/messaging-api/

---

## 📞 サポート

実装中に問題が発生した場合：

1. エラーログを確認（ブラウザコンソール、サーバーログ）
2. 環境変数が正しく設定されているか確認
3. Difyワークフローの出力形式が正しいか確認
4. LINE webhookの署名検証が正しく動作しているか確認

---

## 📅 実装日

**実装完了日**: 2024年11月28日

**実装バージョン**: MVP (フェーズ0)

**次のフェーズ**: フェーズ1（UX改善＋安定化）

---

以上が実装エクスポート内容です。次の実装者に引き継いでください。

