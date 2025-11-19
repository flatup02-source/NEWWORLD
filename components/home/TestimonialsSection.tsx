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
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-12">お客様の声</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow-xl text-left flex flex-col h-full border border-pink-50 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center mr-4 flex-shrink-0 border-2 border-pink-200">
                <span className="text-pink-500 text-3xl font-bold">MI</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">M.Iさん (30代女性)</h3>
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
              </div>
            </div>
            <div className="flex-grow">
              <p className="text-lg font-bold text-pink-600 mb-3">自分に自信が持てるように！</p>
              <p className="text-gray-600 leading-relaxed text-base">運動経験が全くなく不安でしたが、トレーナーさんが優しく丁寧に教えてくれるので、楽しく続けられています。体重が減っただけでなく、気持ちも前向きになり、自分に自信が持てるようになりました。</p>
            </div>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-xl text-left flex flex-col h-full border border-purple-50 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0 border-2 border-purple-200">
                <span className="text-purple-500 text-3xl font-bold">KT</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">K.Tさん (20代女性)</h3>
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
              </div>
            </div>
            <div className="flex-grow">
              <p className="text-lg font-bold text-purple-600 mb-3">ストレス発散に最高です！</p>
              <p className="text-gray-600 leading-relaxed text-base">仕事のストレスが溜まっていましたが、キックボクシングのミット打ちは最高のストレス発散になります。今では週2回通うのが楽しみです。</p>
            </div>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-xl text-left flex flex-col h-full border border-blue-50 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0 border-2 border-blue-200">
                <span className="text-blue-500 text-3xl font-bold">SY</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">S.Yさん (40代女性)</h3>
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
              </div>
            </div>
            <div className="flex-grow">
              <p className="text-lg font-bold text-blue-600 mb-3">産後の体型戻しに成功</p>
              <p className="text-gray-600 leading-relaxed text-base">産後太りがなかなか解消されませんでしたが、キックボクシングトレーニングで効率的に体を絞ることができました。子連れでもOKなのが嬉しいです。</p>
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
