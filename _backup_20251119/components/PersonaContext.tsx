'use client';

import { createContext, useContext, ReactNode } from 'react';

// ペルソナ定義
export interface Persona {
  name: string;
  age: number;
  gender: string;
  occupation: string;
  painPoints: string[];
  goals: string[];
  motivations: string[];
  fears: string[];
  searchKeywords: string[];
}

// カスタマージャーニー
export interface CustomerJourney {
  stage: string;
  emotions: string[];
  touchpoints: string[];
  needs: string[];
  actions: string[];
}

// 感情設計の三幕構成
export interface EmotionalDesign {
  act1: {
    empathy: string[];
    painPoints: string[];
    triggers: string[];
  };
  act2: {
    hope: string[];
    solutions: string[];
    transformations: string[];
  };
  act3: {
    action: string[];
    urgency: string[];
    reassurance: string[];
  };
}

// メインペルソナ：佐藤恵美（32歳・女性・会社員）
export const mainPersona: Persona = {
  name: '佐藤恵美',
  age: 32,
  gender: '女性',
  occupation: '会社員',
  painPoints: [
    '運動不足で体力が落ちている',
    '自己肯定感が低下気味',
    'ジムはハードルが高いと感じている',
    '時間がない',
    '一人で運動するのが続かない'
  ],
  goals: [
    '無理なく続けられる運動習慣を作りたい',
    '心も前向きになりたい',
    '自信を取り戻したい',
    '健康的な体型を維持したい'
  ],
  motivations: [
    '変化を求めている',
    '自分を変えたい',
    '新しいことに挑戦したい',
    '仲間と一緒に頑張りたい'
  ],
  fears: [
    '失敗するのではないか',
    '続けられないのではないか',
    'お金を無駄にするのではないか',
    '周りについていけないのではないか'
  ],
  searchKeywords: [
    '成田市 ジム',
    '女性専用 ジム',
    '初心者 ジム',
    'キックボクシング ジム',
    '無料体験 ジム',
    '子連れ ジム',
    '夜遅くまで ジム'
  ]
};

// カスタマージャーニーマップ
export const customerJourney: CustomerJourney[] = [
  {
    stage: '認知',
    emotions: ['不安', '興味', '期待'],
    touchpoints: ['Google検索', 'SNS', '口コミ'],
    needs: ['信頼できる情報', '安心感'],
    actions: ['サイト訪問', '情報収集']
  },
  {
    stage: '検討',
    emotions: ['迷い', '比較', '期待'],
    touchpoints: ['サイト閲覧', '料金確認', '体験談'],
    needs: ['詳細情報', '比較材料', '成功事例'],
    actions: ['複数ページ閲覧', '料金比較', '体験談確認']
  },
  {
    stage: '決断',
    emotions: ['緊張', '決意', '期待'],
    touchpoints: ['体験予約', '問い合わせ', '来店'],
    needs: ['安心感', 'サポート', '明確な手順'],
    actions: ['体験予約', '問い合わせ', '来店準備']
  },
  {
    stage: '体験',
    emotions: ['緊張', '楽しさ', '達成感'],
    touchpoints: ['来店', '体験レッスン', 'カウンセリング'],
    needs: ['歓迎感', '適切な指導', '安心感'],
    actions: ['体験参加', '質問', '入会検討']
  },
  {
    stage: '入会',
    emotions: ['決意', '期待', '安心'],
    touchpoints: ['入会手続き', '初回レッスン', 'フォローアップ'],
    needs: ['スムーズな手続き', '継続サポート', 'コミュニティ'],
    actions: ['入会手続き', '初回レッスン参加', '継続']
  }
];

// 感情設計の三幕構成
export const emotionalDesign: EmotionalDesign = {
  act1: {
    empathy: [
      '「もう一人で頑張れない」そう思ったことはありませんか？',
      '「運動が苦手」「ジムは怖い」そんな自分を変えたいあなたへ',
      'あなたのその気持ち、私たちがいちばん分かります',
      '一人で頑張らなくても大丈夫です'
    ],
    painPoints: [
      '運動不足で体力が落ちている',
      '自己肯定感が低下気味',
      '時間がない',
      '続けられるか不安'
    ],
    triggers: [
      '鏡を見るのが嫌になった',
      '階段を上るのが辛くなった',
      '同僚に「最近疲れてる？」と言われた',
      '昔の写真を見てショックを受けた'
    ]
  },
  act2: {
    hope: [
      'ここなら変われる！',
      'あなたのペースで、無理なく続けられます',
      '同じ悩みを乗り越えた先輩たちがいます',
      'FLATUPGYMが最後のジムになります'
    ],
    solutions: [
      '女性オーナーだから安心',
      '初心者専用クラス',
      '子連れ参加OK',
      '夜遅くまで営業'
    ],
    transformations: [
      '体力が戻り、毎日が楽しくなった',
      '自信を取り戻し、前向きになった',
      '新しい友達ができた',
      '家族から「最近輝いてる」と言われた'
    ]
  },
  act3: {
    action: [
      '新しい自分への第一歩、たった60分から',
      'まずは話を聞かせてください',
      '今なら入会金無料',
      '無理な勧誘は一切ありません'
    ],
    urgency: [
      '今月残り2名様限定',
      '春のキャンペーン期間限定',
      '体験レッスン枠が残りわずか',
      'この機会を逃すと次は来月まで'
    ],
    reassurance: [
      '無料体験なので安心',
      '入会の義務はありません',
      'お気軽にお越しください',
      '一人でも大丈夫です'
    ]
  }
};

// コンテキスト
interface PersonaContextType {
  persona: Persona;
  journey: CustomerJourney[];
  emotionalDesign: EmotionalDesign;
  getEmotionalCopy: (act: keyof EmotionalDesign, type: string) => string;
  getPersonaBasedContent: (contentType: string) => string;
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

export const PersonaProvider = ({ children }: { children: ReactNode }) => {
  const getEmotionalCopy = (act: keyof EmotionalDesign, type: string): string => {
    const actData = emotionalDesign[act];
    const content = actData[type as keyof typeof actData] as string[];
    if (Array.isArray(content) && content.length > 0) {
      return content[Math.floor(Math.random() * content.length)];
    }
    return '';
  };

  const getPersonaBasedContent = (contentType: string): string => {
    switch (contentType) {
      case 'hero_title':
        return 'サンドバッグを震わす乾いた衝撃音';
      case 'hero_subtitle':
        return '💖 新しい自分に出会う場所 💖';
      case 'hero_description':
        return '身体で感じる場所だ。グローブをはめた瞬間、あなたは自ら未来を切り拓く主役へと変わる。';
      case 'cta_button':
        return '💖「新しい私」への覚悟💖';
      default:
        return '';
    }
  };

  return (
    <PersonaContext.Provider
      value={{
        persona: mainPersona,
        journey: customerJourney,
        emotionalDesign,
        getEmotionalCopy,
        getPersonaBasedContent
      }}
    >
      {children}
    </PersonaContext.Provider>
  );
};

export const usePersona = () => {
  const context = useContext(PersonaContext);
  if (context === undefined) {
    throw new Error('usePersona must be used within a PersonaProvider');
  }
  return context;
};
