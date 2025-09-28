'use client';

import { useState } from 'react';

// ブランドボイスガイドライン
const brandVoiceGuidelines = {
  tone: {
    primary: '親しみやすく、励ましの気持ちを込めた',
    secondary: '専門的すぎず、初心者にも分かりやすい',
    tertiary: '前向きで、希望を与える'
  },
  vocabulary: {
    recommended: [
      'サポートします',
      '一緒に頑張りましょう',
      'あなたのペースで',
      '安心してください',
      '楽しみながら',
      '無理なく',
      'ゆっくりと',
      '丁寧に',
      '優しく',
      '親切に'
    ],
    avoid: [
      '必ず',
      '絶対に',
      '確実に',
      '完璧に',
      '最強',
      '最高',
      '究極',
      '日本一'
    ]
  },
  examples: {
    good: [
      'あなたのペースで無理なく続けられます',
      '一緒に楽しくトレーニングしましょう',
      '安心してご参加ください',
      '丁寧にサポートいたします',
      'ゆっくりと上達していけます'
    ],
    bad: [
      '必ず痩せます',
      '絶対に強くなれます',
      '確実に成功します',
      '完璧な体になれます',
      '世界一のジムです'
    ]
  }
};

// お客様の声編集テンプレート
const testimonialTemplate = {
  structure: {
    before: '入会前の悩みや状況',
    during: 'ジムでの体験や変化',
    after: '現在の心境や成果',
    quote: '印象的な一言'
  },
  examples: {
    before: [
      '運動不足で体力が落ちていました',
      '自己肯定感が低下していました',
      '時間がなくて運動できませんでした',
      '一人で運動するのが続きませんでした',
      'ジムはハードルが高いと感じていました'
    ],
    during: [
      '優しい指導で安心して通えました',
      '同じ悩みを持つ仲間と出会えました',
      '自分のペースで無理なく続けられました',
      '楽しく運動できるようになりました',
      '段階的に上達していけました'
    ],
    after: [
      '体力が戻り、毎日が楽しくなりました',
      '自信を取り戻し、前向きになりました',
      '新しい友達ができました',
      '家族から「最近輝いてる」と言われました',
      '健康的な生活習慣が身につきました'
    ]
  }
};

interface OperationManualProps {
  isVisible: boolean;
  onClose: () => void;
}

export const OperationManual = ({ isVisible, onClose }: OperationManualProps) => {
  const [activeTab, setActiveTab] = useState<'brand' | 'testimonial' | 'content'>('brand');

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">FLAT-UP GYM 運用マニュアル</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-xl p-2"
            >
              ×
            </button>
          </div>

          {/* タブナビゲーション */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              onClick={() => setActiveTab('brand')}
              className={`px-4 py-3 font-medium ${
                activeTab === 'brand'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              ブランドボイス
            </button>
            <button
              onClick={() => setActiveTab('testimonial')}
              className={`px-4 py-3 font-medium ${
                activeTab === 'testimonial'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              お客様の声編集
            </button>
            <button
              onClick={() => setActiveTab('content')}
              className={`px-4 py-3 font-medium ${
                activeTab === 'content'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              コンテンツ更新
            </button>
          </div>

          {/* ブランドボイスガイドライン */}
          {activeTab === 'brand' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">ブランドボイスガイドライン</h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">トーン</h4>
                  <ul className="space-y-2 text-blue-700">
                    <li>• {brandVoiceGuidelines.tone.primary}</li>
                    <li>• {brandVoiceGuidelines.tone.secondary}</li>
                    <li>• {brandVoiceGuidelines.tone.tertiary}</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-2">推奨する表現</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-green-800 mb-2">使用推奨</h5>
                    <ul className="space-y-1 text-green-700 text-sm">
                      {brandVoiceGuidelines.vocabulary.recommended.map((word, index) => (
                        <li key={index}>• {word}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-bold text-red-800 mb-2">避けるべき表現</h5>
                    <ul className="space-y-1 text-red-700 text-sm">
                      {brandVoiceGuidelines.vocabulary.avoid.map((word, index) => (
                        <li key={index}>• {word}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-2">例文</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-green-800 mb-2">良い例</h5>
                    <ul className="space-y-2 text-green-700 text-sm">
                      {brandVoiceGuidelines.examples.good.map((example, index) => (
                        <li key={index}>• {example}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-bold text-red-800 mb-2">悪い例</h5>
                    <ul className="space-y-2 text-red-700 text-sm">
                      {brandVoiceGuidelines.examples.bad.map((example, index) => (
                        <li key={index}>• {example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* お客様の声編集テンプレート */}
          {activeTab === 'testimonial' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">お客様の声編集テンプレート</h3>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-800 mb-2">構成要素</h4>
                  <div className="grid grid-cols-2 gap-4 text-yellow-700">
                    <div>
                      <h5 className="font-bold">Before（入会前）</h5>
                      <p className="text-sm">{testimonialTemplate.structure.before}</p>
                    </div>
                    <div>
                      <h5 className="font-bold">During（ジムでの体験）</h5>
                      <p className="text-sm">{testimonialTemplate.structure.during}</p>
                    </div>
                    <div>
                      <h5 className="font-bold">After（現在の状況）</h5>
                      <p className="text-sm">{testimonialTemplate.structure.after}</p>
                    </div>
                    <div>
                      <h5 className="font-bold">Quote（印象的な一言）</h5>
                      <p className="text-sm">{testimonialTemplate.structure.quote}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-2">表現例</h4>
                <div className="space-y-4">
                  {Object.entries(testimonialTemplate.examples).map(([key, examples]) => (
                    <div key={key} className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-800 mb-2 capitalize">{key}</h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        {examples.map((example, index) => (
                          <li key={index}>• {example}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* コンテンツ更新ガイド */}
          {activeTab === 'content' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">コンテンツ更新ガイド</h3>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-2">WordPress更新手順</h4>
                    <ol className="space-y-2 text-blue-700 text-sm">
                      <li>1. ログイン → ダッシュボード</li>
                      <li>2. 投稿/固定ページ → 編集したいページを選択</li>
                      <li>3. ブランドボイスガイドラインに従って編集</li>
                      <li>4. プレビューで確認</li>
                      <li>5. 公開</li>
                    </ol>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">画像更新のポイント</h4>
                    <ul className="space-y-2 text-green-700 text-sm">
                      <li>• 高解像度（1200px以上）を推奨</li>
                      <li>• ファイルサイズは1MB以下に圧縮</li>
                      <li>• alt属性は必ず設定</li>
                      <li>• 明るく、前向きな画像を選択</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800 mb-2">SEO対策</h4>
                    <ul className="space-y-2 text-purple-700 text-sm">
                      <li>• タイトルは30文字以内</li>
                      <li>• メタディスクリプションは120文字以内</li>
                      <li>• 見出し（H1-H6）を適切に使用</li>
                      <li>• 内部リンクを適切に設定</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};