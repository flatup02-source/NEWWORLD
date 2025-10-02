
import OptimizedImage from '@/components/OptimizedImage';

const ReasonsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-8">
            💖 私たちが選ばれる理由 💖
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            なぜFLAT-UPが愛され続けるのか、その秘密をお教えします
          </p>
        </div>

        {/* 24時間システム & 女性クラス充実 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <OptimizedImage
              width={800}
              height={600}
              src="https://ik.imagekit.io/FLATUPGYM/%E5%A4%96%E8%A6%B3.png?updatedAt=1757337702845"
              alt="24時間使えるアクセスシステム"
              className="w-full h-96 object-cover object-top rounded-3xl shadow-2xl border-4 border-green-300"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-100 to-green-200 p-8 rounded-3xl shadow-xl border-4 border-blue-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-time-fill w-6 h-6 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">24時間使えるシステム</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                格闘技ジムでは珍しい24時間アクセス可能なシステム。あなたのライフスタイルに合わせて、いつでも理想の体作りができます。
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-center space-x-2">
                  <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-green-600"></i>
                  <span>早朝・深夜も利用可能</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-green-600"></i>
                  <span>セキュリティ万全</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-green-600"></i>
                  <span>忙しい方でも継続しやすい</span>
                </li>
              </ul>
              <OptimizedImage
                src="https://ik.imagekit.io/FLATUPGYM/tiny.png?updatedAt=1757331481711"
                alt="24時間使えるシステム"
                width={300}
                height={200}
                className="mt-4 rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>

            <div className="bg-gradient-to-br from-pink-100 to-purple-200 p-8 rounded-3xl shadow-xl border-4 border-pink-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-women-fill w-6 h-6 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">女性クラスが充実</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                格闘技ジムでは珍しい女性専用クラスを多数ご用意。女性が安心して楽しめる環境を徹底しています。
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-center space-x-2">
                  <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-pink-700"></i>
                  <span>レディース専用時間帯</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-pink-700"></i>
                  <span>産後ママクラス</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-pink-700"></i>
                  <span>護身術専門クラス</span>
                </li>
              </ul>
              <OptimizedImage
                src="https://ik.imagekit.io/FLATUPGYM/MISAKI2.png?updatedAt=1756897204004"
                alt="女性クラスが充実"
                width={300}
                height={200}
                className="mt-4 rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* 女性向けジム環境 & 護身術クラス */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="bg-gradient-to-br from-yellow-100 to-orange-200 p-8 rounded-3xl shadow-xl border-4 border-yellow-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-home-heart-fill w-6 h-6 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">女性向けのジム内環境</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                清潔で明るく、女性が「通いたくなる」空間作りにこだわりました。
              </p>

            </div>

            <div className="bg-gradient-to-br from-red-100 to-pink-200 p-8 rounded-3xl shadow-xl border-4 border-red-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-shield-star-fill w-6 h-6 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">実用的な護身術クラス</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                日常で本当に使える護身術を、女性の視点で分かりやすく指導します。
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-red-600"></i>
                  <span>痴漢対策の実践的技術</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-red-600"></i>
                  <span>危険察知能力の向上</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-red-600"></i>
                  <span>自信につながる心の強さ</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <OptimizedImage
              width={800}
              height={600}
              src="https://ik.imagekit.io/FLATUPGYM/reddy.png?tr=w-3840,f-auto"
              alt="女性向け護身術クラス"
              className="w-full h-96 object-cover object-top rounded-3xl shadow-2xl border-4 border-red-300"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
