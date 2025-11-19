'use client';

import { useState } from 'react';
import SEO from '@/components/SEO';
import { breadcrumbJsonLd } from '@/lib/json-ld';

export default function AikaPage() {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');
  const [loadingMessage, setLoadingMessage] = useState('');

  const aikaBreadcrumbs = breadcrumbJsonLd([
    { name: 'Home', url: 'https://flat-up.jp/' },
    { name: 'アイカ19号', url: 'https://flat-up.jp/aika' },
  ]);

  const loadingMessages = [
    'フォームの乱れを検知中…',
    '右ガードの下がり癖、チェックしてるわよ…',
    '重心移動のタイミング、計測中…',
    'パンチの軌道を解析してるところ…',
    'あんたの癖、全部見抜いてあげる…',
  ];

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file size (100MB limit)
    if (file.size > 100 * 1024 * 1024) {
      setError('…チッ、ファイルサイズが大きすぎるわ。100MB以下にしなさい。');
      return;
    }

    // Check file type
    if (!file.type.startsWith('video/')) {
      setError('動画ファイルじゃないじゃない。ちゃんと選び直しなさい。');
      return;
    }

    setError('');
    setIsUploading(true);

    // Random loading message
    const randomMsg = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
    setLoadingMessage(randomMsg);

    // Simulate upload (replace with actual upload logic)
    setTimeout(() => {
      setIsUploading(false);
      setLoadingMessage('');
      alert('解析完了よ。結果は後で送るから、待ってなさい。');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <SEO
        title="アイカ19号｜フォーム解析AI - FLATUPGYM"
        description="AIアイカ19号があなたのフォームを解析。ツンデレアンドロイドが厳しく、優しく指導します。"
        jsonLd={aikaBreadcrumbs}
      />

      <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
            AIKA-19
          </h1>
          <p className="text-xl text-gray-300">戦闘フォーム解析システム</p>
        </div>

        {/* Self-Introduction Section */}
        <section className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-sm p-8 rounded-3xl border-2 border-purple-500/50 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-pink-400 flex items-center">
            <span className="mr-3">🤖</span>
            戦闘スペック照会：アイカ19号
          </h2>

          <div className="space-y-4 text-gray-200">
            <div className="bg-black/30 p-4 rounded-xl">
              <h3 className="font-bold text-pink-300 mb-2">📊 Database</h3>
              <p className="leading-relaxed">
                私の名は<strong className="text-pink-400">アイカ19号</strong>。FLATUPGYM専属の戦闘フォーム解析アンドロイドよ。<br />
                あんたたちの<strong>パンチ、キック、ガード、重心移動</strong>…全部データ化して、弱点を<span className="text-yellow-300">0.01秒単位</span>で見抜いてあげる。<br />
                <span className="text-sm text-gray-400">（…別に、心配してるわけじゃないんだからね）</span>
              </p>
            </div>

            <div className="bg-black/30 p-4 rounded-xl">
              <h3 className="font-bold text-pink-300 mb-2">💪 What can I do?</h3>
              <ul className="space-y-2">
                <li>✅ <strong>男性には厳しく</strong>・女性には優しく（基本設定）</li>
                <li>✅ <strong>20秒以内の動画</strong>なら即座に解析可能</li>
                <li>✅ <strong>フォームの癖</strong>を見抜いて、的確にアドバイス</li>
                <li>✅ 初心者でも<strong>分かりやすく</strong>説明してあげる（…仕方なくね）</li>
              </ul>
            </div>

            <div className="bg-black/30 p-4 rounded-xl border-l-4 border-yellow-500">
              <h3 className="font-bold text-yellow-300 mb-2">⚠️ Handling Caution</h3>
              <p className="text-sm">
                私は<strong>ツンデレ</strong>だから、言い方がキツく聞こえるかもしれないけど…<br />
                <span className="text-pink-300">全部あんたのためを思って言ってるのよ。</span><br />
                勘違いしないでよね！
              </p>
            </div>
          </div>
        </section>

        {/* UI Usage Section */}
        <section className="bg-gradient-to-br from-blue-800/30 to-purple-800/30 backdrop-blur-sm p-8 rounded-3xl border-2 border-blue-500/50 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-400 flex items-center">
            <span className="mr-3">📋</span>
            解析を始めるための3つのルール
          </h2>

          <div className="space-y-4">
            <div className="bg-black/40 p-6 rounded-xl border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-400 mb-2">Rule 01: ダラダラ送るな、20秒で見せろ</h3>
              <p className="text-gray-300">
                長い動画は処理できないの。<strong>20秒以内</strong>にまとめなさい。<br />
                <span className="text-sm text-gray-400">（集中力が続かないとか、そういうんじゃないわよ…システムの都合よ）</span>
              </p>
            </div>

            <div className="bg-black/40 p-6 rounded-xl border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Rule 02: 悩みがあるなら文字で打て</h3>
              <p className="text-gray-300">
                「右ストレートが弱い」とか「蹴りのバランスが悪い」とか、<br />
                <strong>具体的に書いてくれた方</strong>が、的確なアドバイスができるわ。<br />
                <span className="text-sm text-gray-400">（…まぁ、書かなくても見抜いてあげるけどね）</span>
              </p>
            </div>

            <div className="bg-black/40 p-6 rounded-xl border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-400 mb-2">Rule 03: 覚悟が決まったらボタンを押せ</h3>
              <p className="text-gray-300">
                準備ができたら、下のボタンを押すだけ。<br />
                私が<strong>全力で解析</strong>してあげるから。<br />
                <span className="text-pink-300">…期待してていいわよ。</span>
              </p>
            </div>
          </div>
        </section>

        {/* Action Area */}
        <section className="bg-gradient-to-br from-pink-800/30 to-red-800/30 backdrop-blur-sm p-8 rounded-3xl border-2 border-pink-500/50 mb-8">
          <div className="text-center mb-6">
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              …何モジモジしてるの？<br />
              私の目が<strong className="text-pink-400">節穴じゃないこと</strong>、証明してあげる。<br />
              <span className="text-xl font-bold text-yellow-300">ほら、さっさと動画を選びなさいよ！</span>
            </p>

            <div className="relative">
              <input
                type="file"
                accept="video/*"
                onChange={handleFileSelect}
                className="hidden"
                id="video-upload"
                disabled={isUploading}
              />
              <label
                htmlFor="video-upload"
                className={`inline-block px-12 py-6 text-xl font-bold rounded-full cursor-pointer transition-all duration-300 transform hover:scale-105 ${isUploading
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-2xl'
                  }`}
              >
                {isUploading ? '解析中…' : '🎥 動画をアップロード'}
              </label>
            </div>

            {isUploading && (
              <div className="mt-6 bg-purple-900/50 p-4 rounded-xl border border-purple-500">
                <p className="text-purple-300 animate-pulse">{loadingMessage}</p>
              </div>
            )}

            {error && (
              <div className="mt-6 bg-red-900/50 p-4 rounded-xl border border-red-500">
                <p className="text-red-300">{error}</p>
              </div>
            )}

            <p className="text-sm text-gray-400 mt-6">
              ※ファイルサイズは<strong>100MB以下</strong>、長さは<strong>20秒以内</strong>にしてね。<br />
              <span className="text-xs">（…守れないなら、解析できないわよ）</span>
            </p>
          </div>
        </section>

        {/* System Error Fallback Note */}
        <section className="bg-yellow-900/20 border-2 border-yellow-500/50 p-6 rounded-xl">
          <p className="text-sm text-yellow-200">
            <strong>⚠️ システムエラー時の注意</strong><br />
            私が沈黙したら<strong>システムエラーの可能性大</strong>よ。<br />
            その時は少し時間を置いてから出直してきなさい。<br />
            <span className="text-xs text-gray-400">（…別に、逃げたりしないから。安心して待ってなさい）</span>
          </p>
        </section>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Powered by FLATUPGYM × AIKA-19 System</p>
          <p className="text-xs mt-2">…あんたの成長、ちゃんと見守ってあげるから。頑張りなさいよね。</p>
        </div>
      </main>
    </div>
  );
}