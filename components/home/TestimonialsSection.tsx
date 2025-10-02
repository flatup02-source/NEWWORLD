import Link from 'next/link';
import OptimizedImage from '../OptimizedImage';

/**
 * Renders the "Testimonials" section of the homepage.
 * It displays a few customer testimonials and a link to a page with more reviews.
 * @returns {JSX.Element} The rendered TestimonialsSection component.
 */
const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-12">お客様の声（テスト）</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-pink-300 text-left flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white text-2xl font-bold">MI</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">M.Iさん (30代女性)</h3>
                </div>
              </div>
              <div className="flex-grow">
                <p className="text-lg font-semibold text-pink-600 mb-2">自分に自信が持てるようになりました！</p>
                <p className="text-gray-700 leading-relaxed">運動経験が全くなく不安でしたが、トレーナーさんが優しく丁寧に教えてくれるので、楽しく続けられています。体重が減っただけでなく、気持ちも前向きになり、自分に自信が持てるようになりました。</p>
              </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-purple-300 text-left flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white text-2xl font-bold">KT</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">K.Tさん (20代女性)</h3>
                </div>
              </div>
              <div className="flex-grow">
                <p className="text-lg font-semibold text-purple-600 mb-2">ストレス発散に最高です！</p>
                <p className="text-gray-700 leading-relaxed">仕事のストレスが溜まっていましたが、キックボクシングのミット打ちは最高のストレス発散になります。今では週2回通うのが楽しみです。</p>
              </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-300 text-left flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white text-2xl font-bold">SY</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">S.Yさん (40代女性)</h3>
                </div>
              </div>
              <div className="flex-grow">
                <p className="text-lg font-semibold text-blue-600 mb-2">産後の体型戻しに成功しました</p>
                <p className="text-gray-700 leading-relaxed">産後太りがなかなか解消されませんでしたが、キックボクシングトレーニングで効率的に体を絞ることができました。子連れでもOKなのが嬉しいです。</p>
              </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link href="/voice" className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold transition-transform duration-300 cursor-pointer shadow-lg transform hover:scale-105">
            もっとお客様の声を見る
          </Link>
        </div>
        <div className="mt-8 text-center">
          <Link href="/trial-lesson" className="inline-block bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-bold transition-transform duration-300 cursor-pointer shadow-lg transform hover:scale-105">
            無料体験レッスンを予約する
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
