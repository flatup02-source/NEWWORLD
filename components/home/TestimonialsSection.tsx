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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border-2 border-gray-200 text-left">
              <div className="flex items-center mb-4">
                  <OptimizedImage alt="M.Iさんアバター" width={64} height={64} className="w-16 h-16 rounded-full mr-4 object-cover" sizes="64px"
                       src="https://i.pravatar.cc/64?u=mi" />
                  <div>
                      <h3 className="text-lg font-bold text-gray-800">M.Iさん (30代女性)</h3>
                      <p className="text-sm text-gray-600">自分に自信が持てるようになりました！</p>
                  </div>
              </div>
              <p className="text-gray-700 leading-relaxed">運動経験が全くなく不安でしたが、トレーナーさんが優しく丁寧に教えてくれるので、楽しく続けられています。体重が減っただけでなく、気持ちも前向きになり、自分に自信が持てるようになりました。</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border-2 border-gray-200 text-left">
              <div className="flex items-center mb-4">
<OptimizedImage alt="K.Tさんアバター" width={64} height={64} className="w-16 h-16 rounded-full mr-4 object-cover" sizes="64px" src="https://i.pravatar.cc/64?u=kt" />
                  <div>
                      <h3 className="text-lg font-bold text-gray-800">K.Tさん (20代女性)</h3>
                      <p className="text-sm text-gray-600">ストレス発散に最高です！</p>
                  </div>
              </div>
              <p className="text-gray-700 leading-relaxed">仕事のストレスが溜まっていましたが、キックボクシングのミット打ちは最高のストレス発散になります。今では週2回通うのが楽しみです。</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border-2 border-gray-200 text-left">
              <div className="flex items-center mb-4">
<OptimizedImage alt="S.Yさんアバター" width={64} height={64} className="w-16 h-16 rounded-full mr-4 object-cover" sizes="64px" src="https://i.pravatar.cc/64?u=sy" />
                  <div>
                      <h3 className="text-lg font-bold text-gray-800">S.Yさん (40代女性)</h3>
                      <p className="text-sm text-gray-600">産後の体型戻しに成功しました</p>
                  </div>
              </div>
              <p className="text-gray-700 leading-relaxed">産後太りがなかなか解消されませんでしたが、キックボクシングトレーニングで効率的に体を絞ることができました。子連れでもOKなのが嬉しいです。</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link href="/voice" className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold transition-transform duration-300 cursor-pointer shadow-lg transform hover:scale-105">
            もっとお客様の声を見る
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
