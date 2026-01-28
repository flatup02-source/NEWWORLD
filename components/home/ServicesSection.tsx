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
    <section className="py-20 bg-gradient-to-b from-white to-kawaii-cream relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl opacity-10 animate-bounce">🌸</div>
        <div className="absolute bottom-20 right-10 text-6xl opacity-10 animate-pulse">✨</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-kawaii-text mb-4 font-kawaii">
            <span className="inline-block transform hover:rotate-2 transition-transform duration-300">提</span>
            <span className="inline-block transform hover:-rotate-2 transition-transform duration-300">供</span>
            <span className="inline-block transform hover:rotate-2 transition-transform duration-300">サ</span>
            <span className="inline-block transform hover:-rotate-2 transition-transform duration-300">ー</span>
            <span className="inline-block transform hover:rotate-2 transition-transform duration-300">ビ</span>
            <span className="inline-block transform hover:-rotate-2 transition-transform duration-300">ス</span>
          </h2>
          <p className="text-xl text-gray-600 font-rounded">あなたに合ったプログラムがきっと見つかる♡</p>
          <div className="w-24 h-2 bg-kawaii-pink mx-auto mt-6 rounded-full opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Kickboxing */}
          <div className="bg-white/80 backdrop-blur-sm rounded-[32px] shadow-cute hover:shadow-lg p-6 sm:p-8 text-center transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border-2 border-white hover:border-kawaii-pink">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center font-rounded">
              <span className="text-3xl mr-2">💪</span>
              楽しい全身運動
            </h3>
            <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl mb-6 shadow-md relative group">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop"
                alt="楽しく運動する女性たち"
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={80}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kawaii-pink/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-left">
              <span className="block font-bold text-kawaii-pink mb-2 text-center">【楽しく続けられる全身運動】</span>
              リズムに合わせて体を動かすだけで、ストレス発散・シェイプアップ・体力アップが叶います。女性オーナーが優しくサポートするので、運動初心者の方も安心して始められます♡
            </p>
            <Link href="/ladies" className="inline-block w-full py-3 px-6 bg-kawaii-cream hover:bg-kawaii-pink text-kawaii-text hover:text-white font-bold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md">
              詳しく見る <i className="ri-arrow-right-line ml-1"></i>
            </Link>
          </div>

          {/* BJJ */}
          <div className="bg-white/80 backdrop-blur-sm rounded-[32px] shadow-cute hover:shadow-lg p-6 sm:p-8 text-center transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border-2 border-white hover:border-kawaii-lavender">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center font-rounded">
              <span className="text-3xl mr-2">🧘</span>
              頭を使う運動
            </h3>
            <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl mb-6 shadow-md relative group">
              <OptimizedImage
                src="/images/bjj-women.png"
                alt="楽しく体を動かす女性たち"
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={80}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kawaii-lavender/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-left">
              <span className="block font-bold text-kawaii-lavender mb-2 text-center">【年齢・体力問わず楽しめる】</span>
              頭を使って体を動かす、まるでパズルのような運動です。力に頼らず、コツを掴めば誰でも楽しめます。女性やシニアの方にも大人気！体力に自信がなくても大丈夫です♡
            </p>
            <Link href="/bjj" className="inline-block w-full py-3 px-6 bg-kawaii-cream hover:bg-kawaii-lavender text-kawaii-text hover:text-white font-bold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md">
              詳しく見る <i className="ri-arrow-right-line ml-1"></i>
            </Link>
          </div>

          {/* Kids Class */}
          <div className="bg-white/80 backdrop-blur-sm rounded-[32px] shadow-cute hover:shadow-lg p-6 sm:p-8 text-center transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border-2 border-white hover:border-kawaii-accent">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center font-rounded">
              <span className="text-3xl mr-2">👶</span>
              キッズクラス
            </h3>
            <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl mb-6 shadow-md relative group">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=2000&auto=format&fit=crop"
                alt="楽しく運動する子どもたち"
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={80}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kawaii-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-left">
              <span className="block font-bold text-yellow-500 mb-2 text-center">【5歳から中学生まで対応】</span>
              楽しく体を動かしながら、礼儀や協調性も自然に身につきます。体力づくりや集中力アップにも最適！保護者見学も可能なので安心です♡
            </p>
            <Link href="/kids-boys" className="inline-block w-full py-3 px-6 bg-kawaii-cream hover:bg-kawaii-accent text-kawaii-text hover:text-white font-bold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md">
              詳しく見る <i className="ri-arrow-right-line ml-1"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
