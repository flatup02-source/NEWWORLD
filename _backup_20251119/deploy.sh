#!/bin/bash
# Netlifyのビルドキャッシュをクリアして本番環境にデプロイするスクリプト

echo "Netlifyのビルドキャッシュをクリアしています..."
netlify build --clear-cache

echo "本番環境にデプロイしています..."
netlify deploy --prod