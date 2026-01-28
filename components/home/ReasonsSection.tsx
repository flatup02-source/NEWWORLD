
import OptimizedImage from '@/components/OptimizedImage';

const ReasonsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-kawaii-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-kawaii-text mb-6 font-kawaii">
            💖 私たちが選ばれる理由 💖
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-rounded">
            なぜFLAT-UPが愛され続けるのか、その秘密をお教えします♡
          </p>
        </div>

        {/* 24時間システム & 女性クラス充実 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-lg transition-opacity duration-300"></div>
            <OptimizedImage
              width={800}
              height={600}
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop"
              alt="24時間使えるアクセスシステム"
              className="relative w-full h-96 object-cover object-center rounded-3xl shadow-2xl border-4 border-white"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
              priority
            />
          </div>
          <div className="space-y-8">
            {/* 24h System */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-l-8 border-blue-400 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-600 rounded-full flex items-center justify-center mr-4 shadow-md">
                  <i className="ri-time-fill w-6 h-6 flex items-center justify-center text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">24時間使えるシステム</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                24時間アクセス可能なシステム。あなたのライフスタイルに合わせて、いつでも理想の体作りができます。
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-center space-x-3">
                  <i className="ri-checkbox-circle-fill text-green-500 text-xl"></i>
                  <span className="font-medium">早朝・深夜も利用可能</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="ri-checkbox-circle-fill text-green-500 text-xl"></i>
                  <span className="font-medium">セキュリティ万全</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="ri-checkbox-circle-fill text-green-500 text-xl"></i>
                  <span className="font-medium">忙しい方でも継続しやすい</span>
                </li>
              </ul>
              <div className="h-40 w-full rounded-xl overflow-hidden shadow-inner">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                  alt="24時間使えるシステム"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  quality={80}
                />
              </div>
            </div>

            {/* Women Class */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-l-8 border-pink-400 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4 shadow-md">
                  <i className="ri-women-fill w-6 h-6 flex items-center justify-center text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">女性クラスが充実</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                女性専用クラスを多数ご用意。女性が安心して楽しめる環境を徹底しています。
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-center space-x-3">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl"></i>
                  <span className="font-medium">レディース専用時間帯</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl"></i>
                  <span className="font-medium">産後ママクラス</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl"></i>
                  <span className="font-medium">護身術専門クラス</span>
                </li>
              </ul>
              <div className="h-40 w-full rounded-xl overflow-hidden shadow-inner">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
                  alt="女性クラスが充実"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  quality={80}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 女性向けジム環境 & 護身術クラス */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-l-8 border-red-400 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mr-4 shadow-md">
                  <i className="ri-shield-star-fill w-6 h-6 flex items-center justify-center text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">実用的な護身術クラス</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                日常で本当に使える護身術を、女性の視点で分かりやすく指導します。
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-3">
                  <i className="ri-checkbox-circle-fill text-red-500 text-xl"></i>
                  <span className="font-medium">痴漢対策の実践的技術</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="ri-checkbox-circle-fill text-red-500 text-xl"></i>
                  <span className="font-medium">危険察知能力の向上</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="ri-checkbox-circle-fill text-red-500 text-xl"></i>
                  <span className="font-medium">自信につながる心の強さ</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-4 bg-gradient-to-l from-red-400 to-pink-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-lg transition-opacity duration-300"></div>
            <OptimizedImage
              width={800}
              height={600}
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
              alt="女性向け護身術クラス"
              className="relative w-full h-96 object-cover object-center rounded-3xl shadow-2xl border-4 border-white"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
