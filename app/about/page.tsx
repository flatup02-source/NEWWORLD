
import { NextPage } from 'next';


import SEO from '../../components/SEO';
import { breadcrumbJsonLd } from '../../lib/json-ld';
import OptimizedImage from '../../components/OptimizedImage';

const AboutPage: NextPage = () => {
  const pageTitle = "私たちの想い";
  const pageDescription = "FLATUPGYMが選ばれる理由、私たちの想いをご紹介します。";

  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', url: 'https://flat-up.jp' },
    { name: '私たちの想い', url: 'https://flat-up.jp/about' },
  ]);

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} jsonLd={breadcrumbs} />

      <main className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-pink-500">💖 選ばれる理由 💖</h2>
                <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">なぜFLAT-UPが愛されるのか</h1>
                <p className="mt-4 text-lg text-gray-600">その秘密をお教えします♪</p>
            </div>

            <div className="mt-8">
                <OptimizedImage src="https://ik.imagekit.io/FLATUPGYM/batch_IMG_7571%E3%81%AE%E3%82%B3%E3%83%92%E3%82%9A%E3%83%BC.jpeg?updatedAt=1756928163875" alt="FLATUPGYMヒーロー画像" width={1200} height={600} className="rounded-2xl shadow-xl w-full h-auto object-cover" />
            </div>

            <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="prose lg:prose-lg text-gray-700">
                    <h3 className="text-2xl font-bold">FLATUPGYMのご紹介</h3>
                    <p>世界一優しい格闘技ジム「FLATUPGYM」。女性オーナーによる初心者向けキックボクシング、ブラジリアン柔術、総合格闘技を学べます。24時間いつでも利用可能で、あなたのライフスタイルに合わせてトレーニングできます。女性専用クラスもあり、運動が苦手な方も安心してスタートできます。無料体験レッスンで、あなたの「新しい私」を見つけませんか？</p>
                </div>
                <div>
                    <OptimizedImage src="https://ik.imagekit.io/FLATUPGYM/about-gym.jpg" alt="FLATUPGYMのジム内の様子" width={600} height={400} className="rounded-2xl shadow-xl w-full h-auto object-cover" />
                </div>
            </section>
            
            <section className="mt-20">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-pink-500">💖 私たちが選ばれる理由 💖</h2>
                    <p className="mt-2 text-lg text-gray-600">なぜFLAT-UPが愛され続けるのか、その秘密をお教えします</p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-gray-50 p-6 rounded-lg border"><h4>24時間使えるシステム</h4><ul className="mt-2 list-disc list-inside"><li>早朝・深夜も利用可能</li><li>セキュリティ万全</li><li>忙しい方でも継続しやすい</li></ul>
                        <OptimizedImage src="https://ik.imagekit.io/FLATUPGYM/MISAKI3.jpg?updatedAt=1756897191157" alt="24時間使えるシステム" width={300} height={200} className="mt-4 rounded-lg shadow-md w-full h-auto object-cover" />
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border"><h4>女性クラスが充実</h4><ul className="mt-2 list-disc list-inside"><li>レディース専用時間帯</li><li>産後ママクラス</li><li>護身術専門クラス</li></ul></div>
                    <div className="bg-gray-50 p-6 rounded-lg border"><h4>女性向けのジム内環境</h4><ul className="mt-2 list-disc list-inside"><li>明るく清潔な更衣室</li><li>女性専用設備完備</li><li>アメニティも充実</li></ul></div>
                    <div className="bg-gray-50 p-6 rounded-lg border"><h4>実用的な護身術クラス</h4><ul className="mt-2 list-disc list-inside"><li>痴漢対策の実践的技術</li><li>危険察知能力の向上</li><li>自信につながる心の強さ</li></ul>
                        <OptimizedImage src="https://ik.imagekit.io/FLATUPGYM/MISAKI2.png?updatedAt=1756897204004" alt="女性向け護身術クラス" width={300} height={200} className="mt-4 rounded-lg shadow-md w-full h-auto object-cover" />
                    </div>
                </div>
            </section>
            
            <section className="mt-20 text-center">
                <h2 className="text-2xl font-bold text-blue-500">🎉 ジムでのイベントも数多くあります 🎉</h2>
                 <p className="mt-2 text-lg text-gray-600">ただトレーニングするだけでなく、みんなで楽しめるイベントが盛りだくさん！</p>
                 <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div><OptimizedImage src="https://ik.imagekit.io/FLATUPGYM/event-party.jpg" alt="懇親会の様子" width={400} height={300} className="rounded-lg shadow-md w-full h-48 object-cover" /><h4 className="mt-4 font-bold">懇親会</h4><p className="text-sm">会員同士の絆を深めます。</p></div>
                    <div>
                        <h4 className="font-bold">UIZINスパーリング大会</h4>
                        <p className="text-sm">日頃の練習の成果を発揮！</p>
                        <div className="grid grid-cols-2 gap-2 mt-4">
                            <OptimizedImage src="https://ik.imagekit.io/FLATUPGYM/UIZIN1.png?updatedAt=1756928062826" alt="UIZINスパーリング大会1" width={200} height={150} className="rounded-lg shadow-md" />
                            <OptimizedImage src="https://ik.imagekit.io/FLATUPGYM/DSC07248.png?updatedAt=1756928097886" alt="UIZINスパーリング大会2" width={200} height={150} className="rounded-lg shadow-md" />
                            <OptimizedImage src="https://ik.imagekit.io/FLATUPGYM/UIZIN0.png?updatedAt=1756928062644" alt="UIZINスパーリング大会3" width={200} height={150} className="rounded-lg shadow-md" />
                            <OptimizedImage src="https://ik.imagekit.io/FLATUPGYM/DSC07240.png?updatedAt=1756928097730" alt="UIZINスパーリング大会4" width={200} height={150} className="rounded-lg shadow-md" />
                        </div>
                    </div>
                    <div><OptimizedImage src="https://ik.imagekit.io/FLATUPGYM/event-watching.jpg" alt="プロ興業の観戦" width={400} height={300} className="rounded-lg shadow-md w-full h-48 object-cover" /><h4 className="mt-4 font-bold">プロ興業の観戦</h4><p className="text-sm">モチベーションもアップします。</p></div>
                 </div>
            </section>

            <section className="mt-20 bg-pink-50 p-8 md:p-12 rounded-3xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1">
                        <OptimizedImage src="https://ik.imagekit.io/FLATUPGYM/AIKA.png?updatedAt=1756897178646" alt="女性オーナー AIKA" width={192} height={192} className="rounded-full shadow-xl w-48 h-48 mx-auto object-cover" />
                        <h3 className="mt-4 text-center text-xl font-bold">女性オーナー AIKA</h3>
                    </div>
                    <div className="md:col-span-2 prose lg:prose-lg">
                        <h2 className="text-2xl font-bold text-pink-600">💝 私たちの想い 💝</h2>
                        <blockquote>
                            <p className="text-2xl font-semibold">「みんなが笑顔になれる場所を作りたい！」</p>
                        </blockquote>
                        <p>私がFLAT-UPGYMを作った理由、それは「すべての人が自分らしく輝ける場所を作りたい」という想いからです。</p>
                        <p>格闘技というと「男性のもの」「怖い」「きつい」というイメージを持たれがちですが、実際はそうではありません。格闘技は自分と向き合い、心も体も強くしてくれる素晴らしいものです。特に女性や子どもたちには、護身術として、そして自信をつけるツールとして、格闘技の素晴らしさを知ってほしいのです。</p>
                        <p className="font-bold">あなたが笑顔になれる場所、それがFLAT-UPGYMです。</p>
                    </div>
                </div>
            </section>

        </div>
      </main>

    </>
  );
};

export default AboutPage;
