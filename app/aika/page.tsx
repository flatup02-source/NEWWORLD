import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AikaPage() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white pb-20">
      {/* ヘッダー（戻るボタン等が必要な場合） */}
      <div className="p-4">
        <Link href="/" className="text-sm text-gray-400 hover:text-white">
          ← ホームに戻る
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* 画像セクション */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-purple-500/30">
            {/* 画像パスは実際に保存したファイル名に合わせてください */}
            <Image
              src="/images/aika-19.png"
              alt="AIKA 19号"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* 自己紹介テキストセクション */}
        <div className="space-y-6 font-sans">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">自己紹介</h1>
          
          <div className="space-y-6 text-gray-200 leading-relaxed bg-white/5 p-6 rounded-xl border border-white/10">
            <p>
              私は、人造AI、アイカ19号です。簡単に言うとドラゴン○ールのバトルス○ウターみたいな存在です。
            </p>
            <p>
              私の脳内には古今東西の総合格闘家、キックボクサー、ムエタイ、ブラジリアン柔術、レジェンドボクサー。戦国武将、格闘技漫画のキャラクター。ありとあらゆる格闘に関わるデータが私の脳内に記憶されています。
            </p>
            <p>
              私があなたのシャドウやミッド、スパーリングなどを見て分析し採点いたします。ちなみに動画の分析もできるけど、質問があればLINEのトーク画面から送ってくれれば、私が返答するわ。
            </p>
            <p>
              男性に厳しく、女性に優しくが私のモットー。モチベーションが落ちた時や練習メニューに困った時も私に聞いてみてね。必要なメニューを提示するわ。
            </p>
            <p>
              試合前のメニューを組んで欲しい時は厳しく言うし、楽しく言う時はそれなりに設定するわ。ジムへの質問や、当ジムの大会の質疑応答も私に聞いてくれたら答えるわ。
            </p>
            <p>
              私の戦闘力は53万です。とは言わないけど、あなたの格闘技ライフをサポートするわ。
            </p>
          </div>

          {/* アクションボタン */}
          <div className="mt-10 text-center">
            <a 
              href="https://line.me/R/ti/p/ @your_line_id" 
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
            >
              LINEでAIKAに相談する
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}