ステップ2：追加CSSにコードを貼り付ける

次に、以下のCSSコードをコピーして、WordPressの「追加CSS」に貼り付けます。

▼ コピーするCSSコード

.youtube-container {

  position: relative;

  width: 100%;

  padding-top: 56.25%; /* 16:9 Aspect Ratio (9 / 16 = 0.5625) */

  overflow: hidden;

}

  

.youtube-container iframe {

  position: absolute;

  top: 0;

  left: 0;

  width: 100%;

  height: 100%;

  border: 0;

}

  

▼ 貼り付け手順

 * WordPressのダッシュボードから [外観] → [カスタマイズ] を選択します。

 * カスタマイザーメニューの中から [追加CSS] をクリックします。

 * 表示された入力欄に、上記のCSSコードを貼り付けます。

 * 右上の [公開] ボタンを押して保存します。

なぜこれで解決するのか？

このCSSは、<iframe> を囲む div (.youtube-container) に対して、横幅いっぱいに広がり、かつ高さが常に横幅の56.25%（アスペクト比16:9）になるように設定します。

これにより、中のYouTube動画がまだ読み込まれていなくても、ブラウザはあらかじめ正しいサイズの表示領域を確保します。その結果、動画が表示されたときにページの高さがガクッと変わることがなくなり、スムーズなスクロールが実現できます。

もし改善しない場合

もしこのCSSを適用してもカクつきが改善されない場合は、他の原因が考えられます。

 * 他のJavaScriptの干渉: テーマやプラグインが導入している他のJavaScriptが、スクロール時の処理を重くしている可能性があります。特に画像最適化プラグインや、アニメーションを追加するプラグインが影響していないか確認してみてください。

 * キャッシュの問題: キャッシュ系のプラグインやサーバーのキャッシュが原因で、変更が反映されていない可能性もあります。一度キャッシュをクリアしてから再度確認してみてください。

まずは追加CSSの方法をお試しください。これで解決する可能性が最も高いです。
  承知いたしました。これまでの意図を汲み取り、AIに「世界一優しい格闘技ジム」のサイト校閲を依頼するために、あなたが求める「最高のWeb編集者」像を言語化します。

以下をコピーして、AIへの指示（プロンプト）としてお使いください。/* Tailwind CSS ユーティリティクラス */

.hover\:to-yellow-300:hover {

  --tw-gradient-to: #fde047;

}

  

.hover\:text-green-600:hover {

  --tw-text-opacity: 1;

  color: rgb(22 163 74 / var(--tw-text-opacity));

}

  

.hover\:shadow-2xl:hover {

  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);

  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

}

  

.whitespace-nowrap {

  white-space: nowrap;

}

  

.object-contain {

  -o-object-fit: contain;

  object-fit: contain;

}

  

.object-cover {

  -o-object-fit: cover;

  object-fit: cover;

}

  

.object-top {

  -o-object-position: top;

  object-position: top;

}

  

.flex {

  display: flex;

}

  

.hidden {

  display: none;

}

  

/* --- レスポンシブスタイル (ブレークポイント) --- */

  

/* 640px以上 (sm) */

@media (min-width: 640px) {

  .sm\:px-6 {

    padding-left: 1.5rem;

    padding-right: 1.5rem;

  }

  .sm\:col-span-2 {

    grid-column: span 2 / span 2;

  }

  .sm\:flex-row {

    flex-direction: row;

  }

  .sm\:justify-start {

    justify-content: flex-start;

  }

  .sm\:space-x-6 > :not([hidden]) ~ :not([hidden]) {

    --tw-space-x-reverse: 0;

    margin-right: calc(1.5rem * var(--tw-space-x-reverse));

    margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));

  }

  .sm\:space-y-0 > :not([hidden]) ~ :not([hidden]) {

    --tw-space-y-reverse: 0;

    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));

    margin-bottom: calc(0px * var(--tw-space-y-reverse));

  }

}

  

/* 768px以上 (md) */

@media (min-width: 768px) {

  .md\:grid-cols-2 {

    grid-template-columns: repeat(2, minmax(0, 1fr));

  }

  .md\:col-span-2 {

    grid-column: span 2 / span 2;

  }

  .md\:text-5xl {

    font-size: 3rem;

    line-height: 1;

  }

  .md\:text-7xl {

    font-size: 4.5rem;

    line-height: 1;

  }

  .md\:text-3xl {

    font-size: 1.875rem;

    line-height: 2.25rem;

  }

  .md\:hidden {

    display: none;

  }

  .md\:flex {

    display: flex;

  }

}

  

/* 1024px以上 (lg) */

@media (min-width: 1024px) {

  .lg\:px-8 {

    padding-left: 2rem;

    padding-right: 2rem;

  }

  .lg\:grid-cols-2 {

    grid-template-columns: repeat(2, minmax(0, 1fr));

  }

  .lg\:grid-cols-3 {

    grid-template-columns: repeat(3, minmax(0, 1fr));

  }

  .lg\:col-span-1 {

    grid-column: span 1 / span 1;

  }

  .lg\:flex-row {

    flex-direction: row;

  }

  .lg\:space-x-12 > :not([hidden]) ~ :not([hidden]) {

    --tw-space-x-reverse: 0;

    margin-right: calc(3rem * var(--tw-space-x-reverse));

    margin-left: calc(3rem * calc(1 - var(--tw-space-x-reverse)));

  }

  .lg\:space-y-0 > :not([hidden]) ~ :not([hidden]) {

    --tw-space-y-reverse: 0;

    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));

    margin-bottom: calc(0px * var(--tw-space-y-reverse));

  }

  .lg\:text-left {

    text-align: left;

  }

}

  

/* スクロールアニメーション用の追加CSS */

.scroll-animate {

  opacity: 0;

  transform: translateY(40px);

  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

}

  

.scroll-animate.is-visible {

  opacity: 1;

  transform: translateY(0);

}

  

/* 画像をレスポンシブ＆中央表示 */

.entry-content img,

.widget img,

.wp-block-image img {

  max-width: 100%;

  height: auto;

  display: block;

  margin: 0 auto;

}

多分足りない  
/* -----------------------------

   Utility

----------------------------- */

.whitespace-nowrap { white-space: nowrap; }

.object-contain { -o-object-fit: contain; object-fit: contain; }

.object-cover { -o-object-fit: cover; object-fit: cover; }

.object-top { -o-object-position: top; object-position: top; }

.flex { display: flex; }

.hidden { display: none; }

  

/* Hover utilities */

.hover\:to-yellow-300:hover { --tw-gradient-to:#fde047; }

.hover\:text-green-600:hover { --tw-text-opacity:1; color: rgb(22 163 74 / var(--tw-text-opacity)); }

.hover\:shadow-2xl:hover {

  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);

  box-shadow: var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow);

}

  

/* -----------------------------

   Responsive (sm ≥640)

----------------------------- */

@media (min-width:640px){

  .sm\:px-6 { padding-left:1.5rem; padding-right:1.5rem; }

  .sm\:col-span-2 { grid-column: span 2 / span 2; }

  .sm\:flex-row { flex-direction: row; }

  .sm\:justify-start { justify-content: flex-start; }

  .sm\:space-x-6 > :not([hidden]) ~ :not([hidden]) {

    --tw-space-x-reverse: 0;

    margin-right: calc(1.5rem * var(--tw-space-x-reverse));

    margin-left: calc(1.5rem * (1 - var(--tw-space-x-reverse)));

  }

  .sm\:space-y-0 > :not([hidden]) ~ :not([hidden]) {

    --tw-space-y-reverse: 0;

    margin-top: 0;

    margin-bottom: 0;

  }

}

  

/* -----------------------------

   Responsive (md ≥768)

----------------------------- */

@media (min-width:768px){

  .md\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }

  .md\:col-span-2 { grid-column: span 2 / span 2; }

  .md\:text-5xl { font-size: 3rem; line-height: 1; }

  .md\:text-7xl { font-size: 4.5rem; line-height: 1; }

  .md\:text-3xl { font-size: 1.875rem; line-height: 2.25rem; }

  .md\:hidden { display: none; }

  .md\:flex { display: flex; }

}

  

/* -----------------------------

   Responsive (lg ≥1024)

----------------------------- */

@media (min-width:1024px){

  .lg\:px-8 { padding-left:2rem; padding-right:2rem; }

  .lg\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }

  .lg\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }

  .lg\:col-span-1 { grid-column: span 1 / span 1; }

  .lg\:flex-row { flex-direction: row; }

  .lg\:space-x-12 > :not([hidden]) ~ :not([hidden]) {

    --tw-space-x-reverse: 0;

    margin-right: calc(3rem * var(--tw-space-x-reverse));

    margin-left: calc(3rem * (1 - var(--tw-space-x-reverse)));

  }

  .lg\:space-y-0 > :not([hidden]) ~ :not([hidden]) {

    --tw-space-y-reverse: 0;

    margin-top: 0;

    margin-bottom: 0;

  }

  .lg\:text-left { text-align: left; }

}

  

/* -----------------------------

   Effects

----------------------------- */

.scroll-animate {

  opacity: 0;

  transform: translateY(40px);

  transition: opacity .8s ease-out, transform .8s ease-out;

}

.scroll-animate.is-visible {

  opacity: 1;

  transform: translateY(0);

}

  

/* -----------------------------

   Images (responsive + centered)

----------------------------- */

.entry-content img,

.widget img,

.wp-block-image img {

  max-width: 100%;

  height: auto;

  display: block;

  margin-inline: auto;

}**シンカスタムCSS  
/***

 *** ==========================================================================**

 *** ユーティリティクラス**

 *** ==========================================================================**

 ***/**

  

**.flex {**

  **display: flex;**

**}**

  

**.hidden {**

  **display: none;**

**}**

  

**.whitespace-nowrap {**

  **white-space: nowrap;**

**}**

  

**/* Object Fit */**

**.object-contain {**

  **object-fit: contain;**

**}**

  

**.object-cover {**

  **object-fit: cover;**

**}**

  

**.object-top {**

  **object-position: top;**

**}**

  

**/***

 *** ==========================================================================**

 *** ホバー効果**

 *** ==========================================================================**

 ***/**

  

**.hover\:to-yellow-300:hover {**

  **--tw-gradient-to: #fde047;**

**}**

  

**.hover\:text-green-600:hover {**

  **--tw-text-opacity: 1;**

  **color: rgb(22 163 74 / var(--tw-text-opacity));**

**}**

  

**.hover\:shadow-2xl:hover {**

  **--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);**

  **--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);**

  **box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);**

**}**

  

**/***

 *** ==========================================================================**

 *** レスポンシブスタイル**

 *** ==========================================================================**

 ***/**

  

**/* sm (640px) 以上 */**

**@media (min-width: 640px) {**

  **.sm\:px-6 {**

    **padding-inline: 1.5rem; /* padding-left と right を統合 */**

  **}**

  **.sm\:col-span-2 {**

    **grid-column: span 2 / span 2;**

  **}**

  **.sm\:flex-row {**

    **flex-direction: row;**

  **}**

  **.sm\:justify-start {**

    **justify-content: flex-start;**

  **}**

  **.sm\:space-x-6 > :not([hidden]) ~ :not([hidden]) {**

    **--tw-space-x-reverse: 0;**

    **margin-right: calc(1.5rem * var(--tw-space-x-reverse));**

    **margin-left: calc(1.5rem * (1 - var(--tw-space-x-reverse)));**

  **}**

  **.sm\:space-y-0 > :not([hidden]) ~ :not([hidden]) {**

    **--tw-space-y-reverse: 0;**

    **margin-block: 0; /* margin-top と bottom を統合 */**

  **}**

**}**

  

**/* md (768px) 以上 */**

**@media (min-width: 768px) {**

  **.md\:grid-cols-2 {**

    **grid-template-columns: repeat(2, minmax(0, 1fr));**

  **}**

  **.md\:col-span-2 {**

    **grid-column: span 2 / span 2;**

  **}**

  **.md\:text-5xl {**

    **font-size: 3rem; /* 48px */**

    **line-height: 1;**

  **}**

  **.md\:text-7xl {**

    **font-size: 4.5rem; /* 72px */**

    **line-height: 1;**

  **}**

  **.md\:text-3xl {**

    **font-size: 1.875rem; /* 30px */**

    **line-height: 2.25rem; /* 36px */**

  **}**

  **.md\:hidden {**

    **display: none;**

  **}**

  **.md\:flex {**

    **display: flex;**

  **}**

**}**

  

**/* lg (1024px) 以上 */**

**@media (min-width: 1024px) {**

  **.lg\:px-8 {**

    **padding-inline: 2rem; /* padding-left と right を統合 */**

  **}**

  **.lg\:grid-cols-2 {**

    **grid-template-columns: repeat(2, minmax(0, 1fr));**

  **}**

  **.lg\:grid-cols-3 {**

    **grid-template-columns: repeat(3, minmax(0, 1fr));**

  **}**

  **.lg\:col-span-1 {**

    **grid-column: span 1 / span 1;**

  **}**

  **.lg\:flex-row {**

    **flex-direction: row;**

  **}**

  **.lg\:space-x-12 > :not([hidden]) ~ :not([hidden]) {**

    **--tw-space-x-reverse: 0;**

    **margin-right: calc(3rem * var(--tw-space-x-reverse));**

    **margin-left: calc(3rem * (1 - var(--tw-space-x-reverse)));**

  **}**

  **.lg\:space-y-0 > :not([hidden]) ~ :not([hidden]) {**

    **--tw-space-y-reverse: 0;**

    **margin-block: 0; /* margin-top と bottom を統合 */**

  **}**

  **.lg\:text-left {**

    **text-align: left;**

  **}**

**}**

  

**/***

 *** ==========================================================================**

 *** アニメーション効果**

 *** ==========================================================================**

 ***/**

  

**.scroll-animate {**

  **opacity: 0;**

  **transform: translateY(40px);**

  **transition: opacity 0.8s ease-out, transform 0.8s ease-out;**

**}**

  

**.scroll-animate.is-visible {**

  **opacity: 1;**

  **transform: translateY(0);**

**}**

  

**/***

 *** ==========================================================================**

 *** 画像スタイル (レスポンシブ & 中央寄せ)**

 *** ==========================================================================**

 ***/**

  

**.entry-content img,**

**.widget img,**

**.wp-block-image img {**

  **max-width: 100%;**

  **height: auto;**

  **display: block;**

  **margin-inline: auto; /* 論理プロパティで左右マージンをまとめて指定 */**

**}**

  

**/***

 *** ==========================================================================**

 *** コンポーネント: LINEボタン**

 *** ==========================================================================**

 ***/**

  

**/* フッター内などに配置する標準ボタン */**

**.footer-line-button {**

  **display: inline-block;**

  **padding: 12px 20px;**

  **border-radius: 50px;**

  **background: #06C755;**

  **color: #fff;**

  **font-weight: bold;**

  **text-decoration: none;**

  **box-shadow: 0 2px 4px rgba(0,0,0,0.2);**

  **transition: opacity 0.2s;**

**}**

  

**.footer-line-button:hover {**

  **opacity: 0.9;**

**}**

  

**/* 画面右下に固定するボタン */**

**.fixed-line-button {**

  **position: fixed;**

  **bottom: 20px;**

  **right: 20px;**

  **z-index: 9999;**

  **padding: 12px 20px;**

  **border-radius: 50px;**

  **background: #06C755;**

  **color: #fff;**

  **font-weight: bold;**

  **text-decoration: none;**

  **box-shadow: 0px 3px 6px rgba(0,0,0,0.3);**

  **transition: opacity 0.2s;**

**}**

  

**.fixed-line-button:hover {**

  **opacity: 0.9;**

**}**

  

**/* 600px 以下 */**

**@media (max-width: 600px) {**

  **.fixed-line-button {**

    **bottom: 10px;**

    **right: 10px;**

    **padding: 10px 14px;**

    **font-size: 1rem;**

  **}**

**}**