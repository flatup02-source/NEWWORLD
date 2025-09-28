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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">提供サービス</h2>
          <p className="text-xl text-gray-600 mt-4">あなたに合ったプログラムがきっと見つかる</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Kickboxing */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">キックボクシング</h3>
            <OptimizedImage src="/kick1.png" alt="キックボクシング" width={300} height={200} className="mx-auto mb-4 rounded-lg" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            <p className="text-gray-600 leading-relaxed mb-6">【女性に最適なキックボクシング】<br/>ストレス発散、筋力アップ、脂肪燃焼、そして何より自信がつきます。女性オーナーによる丁寧な指導で、運動が苦手な方も安心してスタート。</p>
            <Link href="/ladies" className="text-pink-700 font-bold hover:underline">詳しく見る</Link>
          </div>
          {/* BJJ */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">ブラジリアン柔術（BJJ）</h3>
            <OptimizedImage src="https://ik.imagekit.io/FLATUPGYM/bjj2.png?updatedAt=1756897178742" alt="ブラジリアン柔術" width={300} height={200} className="mx-auto mb-4 rounded-lg" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            <p className="text-gray-600 leading-relaxed mb-6">【年齢・体力問わず楽しめる柔術】<br/>護身術や頭脳プレーを学べるブラジリアン柔術。女性やシニアにも人気の格闘技です。体力に自信がなくても技術で勝負できるのが魅力。</p>
            <Link href="/bjj" className="text-pink-700 font-bold hover:underline">詳しく見る</Link>
          </div>
          {/* Kids Class */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">キッズクラス</h3>
            <OptimizedImage src="/%E3%81%8D%E3%81%A3%E3%81%99%E3%82%99%E5%A5%B3%E3%81%AE%E5%AD%90%E3%82%AF%E3%83%A9%E3%82%B9TOP.png" alt="キッズクラス" width={300} height={200} className="mx-auto mb-4 rounded-lg" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            <p className="text-gray-600 leading-relaxed mb-6">【5歳から中学生まで対応】<br/>礼儀や協調性も身につく、楽しい格闘技体験。体力づくりや集中力アップにも最適です。保護者見学も可能で安心。</p>
            <Link href="/kids-boys" className="text-pink-700 font-bold hover:underline">詳しく見る</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
