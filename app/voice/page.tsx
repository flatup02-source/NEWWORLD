import { NextPage } from 'next';



import SEO from '../../components/SEO';
import { breadcrumbJsonLd } from '../../lib/json-ld';
import OptimizedImage from '../../components/OptimizedImage';

const VoicePage: NextPage = () => {
  const pageTitle = "お客様の声｜成田の女性・初心者向けキックボクシングジムFLATUPGYM";
  const pageDescription = "FLATUPGYMに実際に通われている会員様のリアルな声をご紹介します。「自分に自信が持てるようになった」「ストレス発散に最高！」など、喜びの声が続々。";

  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', url: 'https://flat-up.jp' },
    { name: 'お客様の声', url: 'https://flat-up.jp/voice' },
  ]);

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} jsonLd={breadcrumbs} />

      <main className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">お客様の声</h1>
                <p className="mt-2 text-lg text-gray-600">会員様のリアルな声</p>
            </div>

            <div className="space-y-12">
                <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col sm:flex-row items-center gap-6">
                    <OptimizedImage alt="M.Iさん" width={100} height={100} className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                         src="https://ik.imagekit.io/FLATUPGYM/VOICE1.png?updatedAt=1756897198273"/>
                    <div className="text-center sm:text-left">
                        <h3 className="text-xl font-bold text-gray-800">M.Iさん (30代女性)</h3>
                        <p className="mt-1 text-lg font-semibold text-pink-600">自分に自信が持てるようになりました！</p>
                        <p className="mt-3 text-gray-700 leading-relaxed">運動経験が全くなく不安でしたが、トレーナーさんが優しく丁寧に教えてくれるので、楽しく続けられています。体重が減っただけでなく、気持ちも前向きになり、自分に自信が持てるようになりました。</p>
                    </div>
                </div>

                <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col sm:flex-row items-center gap-6">
                    <OptimizedImage alt="K.Tさん" width={100} height={100} className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                         src="https://ik.imagekit.io/FLATUPGYM/VOICE2.png?updatedAt=1756897200414"/>
                    <div className="text-center sm:text-left">
                        <h3 className="text-xl font-bold text-gray-800">K.Tさん (20代女性)</h3>
                        <p className="mt-1 text-lg font-semibold text-pink-600">ストレス発散に最高です！</p>
                        <p className="mt-3 text-gray-700 leading-relaxed">仕事のストレスが溜まっていましたが、キックボクシングのミット打ちは最高のストレス発散になります。今では週2回通うのが楽しみです。</p>
                    </div>
                </div>

                <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col sm:flex-row items-center gap-6">
                    <OptimizedImage alt="S.Yさん" width={100} height={100} className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                         src="https://ik.imagekit.io/FLATUPGYM/VOICE3.png?updatedAt=1756897201430"/>
                    <div className="text-center sm:text-left">
                        <h3 className="text-xl font-bold text-gray-800">S.Yさん (40代女性)</h3>
                        <p className="mt-1 text-lg font-semibold text-pink-600">産後の体型戻しに成功しました</p>
                        <p className="mt-3 text-gray-700 leading-relaxed">産後太りがなかなか解消されませんでしたが、キックボクシングトレーニングで効率的に体を絞ることができました。子連れでもOKなのが嬉しいです。</p>
                    </div>
                </div>
            </div>
        </div>
    </main>

    </>
  );
};

export default VoicePage;
