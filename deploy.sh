#!/bin/bash
# ワンクリックデプロイスクリプト

echo "🧹 古いビルドを削除中..."
rm -rf .next out

echo "⚡️ 静的サイトをビルド中..."
npm run build

echo "🚀 Netlify にデプロイ中..."
# 注意: Netlify CLIがインストールされ、ログインしている必要があります。
npx netlify deploy --prod --dir=out

echo "✅ デプロイ完了！"
