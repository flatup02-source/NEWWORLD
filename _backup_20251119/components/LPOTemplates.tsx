'use client';

import { useState } from 'react';

// 広告経路別のメッセージテンプレート
const adMessageTemplates = {
  google: {
    title: '成田市のキックボクシングジム | 初心者・女性大歓迎',
    description: '女性オーナーが運営する安心のジム。無料体験実施中！',
    cta: '無料体験を予約する',
    urgency: '今月限定キャンペーン'
  },
  instagram: {
    title: '💖 新しい自分に出会う場所 💖',
    description: '蛍光色のTシャツで楽しくトレーニング！',
    cta: '体験レッスンに参加',
    urgency: '女性限定クラス'
  },
  facebook: {
    title: '成田市で話題のキックボクシングジム',
    description: '子連れOK・夜遅くまで営業',
    cta: '詳細を見る',
    urgency: '駐車場無料'
  },
  youtube: {
    title: 'キックボクシングで人生が変わった！',
    description: '実際の体験談を動画で紹介',
    cta: '動画を見る',
    urgency: '限定公開'
  }
};

// 流入経路別の感情設計
const emotionalDesignBySource = {
  google: {
    act1: '「成田市 ジム」で検索したあなたへ',
    act2: '女性オーナーだから安心',
    act3: '無料体験でお試しください'
  },
  instagram: {
    act1: '美しく強くなりたいあなたへ',
    act2: '楽しく続けられる環境',
    act3: '今すぐ体験予約'
  },
  facebook: {
    act1: '子育て中のママでも通える',
    act2: '時間に縛られない自由な通い方',
    act3: 'まずは見学から'
  },
  youtube: {
    act1: '実際の変化を見てください',
    act2: '多くの方が変化を実感',
    act3: 'あなたも次の成功者に'
  }
};

interface LPOTemplateProps {
  source: keyof typeof adMessageTemplates;
  isVisible: boolean;
  onClose: () => void;
}

export const LPOTemplate = ({ source, isVisible, onClose }: LPOTemplateProps) => {
  const [activeSection, setActiveSection] = useState<'hero' | 'benefits' | 'testimonials' | 'cta'>('hero');

  if (!isVisible) return null;

  const template = adMessageTemplates[source];
  const emotionalDesign = emotionalDesignBySource[source];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {source.toUpperCase()} 広告用ランディングページ
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-xl p-2"
            >
              ×
            </button>
          </div>

          {/* セクションナビゲーション */}
          <div className="flex border-b border-gray-200 mb-6">
            {(['hero', 'benefits', 'testimonials', 'cta'] as const).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-3 font-medium capitalize ${
                  activeSection === section
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {section === 'hero' ? 'ヒーロー' : 
                 section === 'benefits' ? 'メリット' :
                 section === 'testimonials' ? 'お客様の声' : 'CTA'}
              </button>
            ))}
          </div>

          {/* ヒーローセクション */}
          {activeSection === 'hero' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">ヒーローセクション</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">メインタイトル</label>
                    <input
                      type="text"
                      defaultValue={template.title}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">サブタイトル</label>
                    <input
                      type="text"
                      defaultValue={template.description}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">緊急性メッセージ</label>
                    <input
                      type="text"
                      defaultValue={template.urgency}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-4">感情設計メッセージ</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">第1幕（共感）</label>
                    <input
                      type="text"
                      defaultValue={emotionalDesign.act1}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">第2幕（希望）</label>
                    <input
                      type="text"
                      defaultValue={emotionalDesign.act2}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">第3幕（行動）</label>
                    <input
                      type="text"
                      defaultValue={emotionalDesign.act3}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* メリットセクション */}
          {activeSection === 'benefits' && (
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">メリットセクション</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-bold text-gray-800 mb-2">女性オーナー</h4>
                    <p className="text-sm text-gray-600">安心して通える環境</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-bold text-gray-800 mb-2">初心者歓迎</h4>
                    <p className="text-sm text-gray-600">経験不要、丁寧に指導</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-bold text-gray-800 mb-2">子連れOK</h4>
                    <p className="text-sm text-gray-600">お子様と一緒に通えます</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-bold text-gray-800 mb-2">夜遅くまで営業</h4>
                    <p className="text-sm text-gray-600">仕事帰りでも通えます</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* お客様の声セクション */}
          {activeSection === 'testimonials' && (
            <div className="space-y-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">お客様の声セクション</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mr-3">
                        <span className="text-pink-700 font-bold">A</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">田中美咲さん（28歳）</h4>
                        <p className="text-sm text-gray-600">-8kg達成！自信も200%UP</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm italic">
                      「『私なんて』が口癖だった私が、今では鏡の前でファイティングポーズをとるのが一番の楽しみになりました」
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTAセクション */}
          {activeSection === 'cta' && (
            <div className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">CTAセクション</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">メインCTAボタン</label>
                    <input
                      type="text"
                      defaultValue={template.cta}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">セカンダリCTA</label>
                    <input
                      type="text"
                      defaultValue="詳細を見る"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">安心感メッセージ</label>
                    <input
                      type="text"
                      defaultValue="無料体験なので安心です"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* プレビューボタン */}
          <div className="mt-6 flex justify-end space-x-4">
            <button className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
              プレビュー
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              テンプレート保存
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// LPOテンプレート選択コンポーネント
export const LPOTemplateSelector = () => {
  const [selectedSource, setSelectedSource] = useState<keyof typeof adMessageTemplates | null>(null);
  const [showTemplate, setShowTemplate] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">LPOテンプレート選択</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {Object.keys(adMessageTemplates).map((source) => (
          <button
            key={source}
            onClick={() => {
              setSelectedSource(source as keyof typeof adMessageTemplates);
              setShowTemplate(true);
            }}
            className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            <div className="text-center">
              <div className="text-2xl mb-2">
                {source === 'google' && '🔍'}
                {source === 'instagram' && '📷'}
                {source === 'facebook' && '📘'}
                {source === 'youtube' && '📺'}
              </div>
              <div className="font-medium text-gray-800 capitalize">{source}</div>
            </div>
          </button>
        ))}
      </div>

      {selectedSource && showTemplate && (
        <LPOTemplate
          source={selectedSource}
          isVisible={showTemplate}
          onClose={() => setShowTemplate(false)}
        />
      )}
    </div>
  );
};