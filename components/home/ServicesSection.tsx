import Link from 'next/link';
import OptimizedImage from '../OptimizedImage';

/**
 * Renders the services section of the homepage.
 * It showcases the main programs offered by the gym: Kickboxing, BJJ, and Kids Classes.
 * This is a server component by default, as it doesn't require any client-side interactivity.
 * @returns {JSX.Element} The rendered ServicesSection component.
 */
const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-rounded">提供サービス</h2>
          <p className="text-xl text-gray-600">あなたに合ったプログラムがきっと見つかる</p>
          <div className="w-24 h-1 bg-pastel-pink mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Kickboxing */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl p-6 sm:p-8 text-center transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <span className="text-3xl mr-2">🥊</span>
              キックボクシング
            </h3>
            <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl mb-6 shadow-md relative group">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop"
                alt="キックボクシング"
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={80}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-left">
              <span className="block font-bold text-pink-600 mb-2 text-center">【女性に最適な全身運動】</span>
              ストレス発散、筋力アップ、脂肪燃焼、そして何より自信がつきます。女性オーナーによる丁寧な指導で、運動が苦手な方も安心してスタート。
            </p>
            <Link href="/ladies" className="inline-block w-full py-3 px-6 bg-gray-100 hover:bg-pink-50 text-gray-800 hover:text-pink-600 font-bold rounded-xl transition-colors duration-300">
              詳しく見る <i className="ri-arrow-right-line ml-1"></i>
            </Link>
          </div>

          {/* BJJ */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl p-6 sm:p-8 text-center transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <span className="text-3xl mr-2">🥋</span>
              ブラジリアン柔術
            </h3>
            <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl mb-6 shadow-md relative group">
              <OptimizedImage
                src="/images/bjj-women.png"
                alt="ブラジリアン柔術"
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={80}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-left">
              <span className="block font-bold text-blue-600 mb-2 text-center">【年齢・体力問わず楽しめる】</span>
              護身術や頭脳プレーを学べるブラジリアン柔術。女性やシニアにも人気の格闘技です。体力に自信がなくても技術で勝負できるのが魅力。
            </p>
            <Link href="/bjj" className="inline-block w-full py-3 px-6 bg-gray-100 hover:bg-blue-50 text-gray-800 hover:text-blue-600 font-bold rounded-xl transition-colors duration-300">
              詳しく見る <i className="ri-arrow-right-line ml-1"></i>
            </Link>
          </div>

          {/* Kids Class */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl p-6 sm:p-8 text-center transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <span className="text-3xl mr-2">🐣</span>
              キッズクラス
            </h3>
            <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl mb-6 shadow-md relative group">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=2000&auto=format&fit=crop"
                alt="キッズクラス"
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={80}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-left">
              <span className="block font-bold text-yellow-500 mb-2 text-center">【5歳から中学生まで対応】</span>
              礼儀や協調性も身につく、楽しい格闘技体験。体力づくりや集中力アップにも最適です。保護者見学も可能で安心。
            </p>
            <Link href="/kids-boys" className="inline-block w-full py-3 px-6 bg-gray-100 hover:bg-yellow-50 text-gray-800 hover:text-yellow-600 font-bold rounded-xl transition-colors duration-300">
              詳しく見る <i className="ri-arrow-right-line ml-1"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
