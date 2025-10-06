# FLAT-UP GYM 公式ウェブサイト

これは、千葉県成田市にある女性・初心者向けの格闘技ジム「FLAT-UP GYM」の公式ウェブサイトのソースコードです。

**公式サイト:** [https://flat-up.jp](https://flat-up.jp)

## プロジェクトの目的

このプロジェクトの主な目的は、ジムの魅力を伝え、新規顧客（特に女性、格闘技初心者、子供、シニア層）を獲得することです。ウェブサイトを通じて、以下の情報を提供します。

*   ジムのコンセプトと特徴
*   提供プログラム（キックボクシング、ブラジリアン柔術、キッズクラスなど）の詳細
*   料金、スケジュール、アクセス情報
*   体験レッスンの申し込み促進

## 使用技術

このプロジェクトは、モダンなWeb技術スタックで構築されています。

*   **フレームワーク:** [Next.js](https://nextjs.org/) (App Router)
*   **言語:** [TypeScript](https://www.typescriptlang.org/)
*   **UI:** [React](https://reactjs.org/)
*   **スタイリング:** [Tailwind CSS](https://tailwindcss.com/)
*   **UIコンポーネント:** [shadcn/ui](https://ui.shadcn.com/)
*   **画像最適化:** [ImageKit](https://imagekit.io/)
*   **デプロイ:** [Netlify](https://www.netlify.com/)

## プロジェクト構成

主要なディレクトリの役割は以下の通りです。

```
/
├── app/                  # 各ページのコンポーネントとルーティング定義
│   ├── (pages)/          # 各ページのディレクトリ
│   └── layout.tsx        # 全体レイアウト
├── components/           # 共通UIコンポーネント
│   ├── home/             # ホームページを構成するセクション別コンポーネント
│   └── ui/               # shadcn/ui によって生成された基本UIパーツ
├── lib/                  # ヘルパー関数、ユーティリティ、ナビゲーション定義
├── public/               # 静的アセット（画像、フォントなど）
└── README.md             # このファイル
```

## セットアップと開発

### 必要なもの

*   [Node.js](https://nodejs.org/) (v18.0.0 以上)
*   [npm](https://www.npmjs.com/) (v9.0.0 以上)

### インストール

プロジェクトをローカル環境にクローンし、依存関係をインストールします。

```bash
git clone https://github.com/flatupgym/website.git
cd website
npm install
```

### 開発サーバーの起動

以下のコマンドを実行すると、開発サーバーが `http://localhost:3000` で起動します。ファイルの変更は自動的に反映されます。

```bash
npm run dev
```

## 利用可能なスクリプト

`package.json`には、開発やデプロイに役立つ以下のスクリプトが定義されています。

*   `npm run dev`: 開発サーバーを起動します。
*   `npm run build`: 本番用のビルドを実行します。
*   `npm run start`: 本番ビルドをローカルで実行します。
*   `npm run lint`: ESLintによるコード静的解析を実行します。
*   `npm run analyze`: Webpack Bundle Analyzerを起動し、バンドルサイズを分析します。
*   `npm run sitemap`: ビルド後にサイトマップを生成します。

## 今後の作業予定（TODO）

*   **パフォーマンス監視:** `web-vitals`を活用し、Core Web Vitalsの継続的な監視と改善を行う。
*   **テスト拡充:** `jest`と`@testing-library/react`を用いたコンポーネントテストと結合テストを拡充する。
*   **ブログ機能の強化:** 現在静的なブログ記事を、ヘッドレスCMS（Contentful, MicroCMSなど）と連携し、動的に更新できるようにする。
*   **予約機能の統合:** 外部の予約システムとのAPI連携を検討する。