
import OptimizedImage from '@/components/OptimizedImage';

const ThoughtsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-8">
            💝 私たちの想い 💝
          </h2>
        </div>
        <div className="bg-gradient-to-br from-white to-green-50 p-12 rounded-3xl shadow-2xl border-4 border-green-200">
          <div className="text-center mb-12">
            <OptimizedImage
              width={128}
              height={128}
              src="https://ik.imagekit.io/FLATUPGYM/_AIKA%20x.jpg?updatedAt=1756928160496"
              alt="女性オーナーあいか"
              className="w-32 h-32 rounded-full object-cover object-top border-8 border-green-400 mx-auto mb-6"
            />
            <h3 className="text-2xl font-bold text-gray-800">女性オーナー AIKA</h3>
            <p className="text-lg text-green-600 font-medium mt-2">「みんなが笑顔になれる場所を作りたい！」</p>
          </div>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              「格闘技は怖い」…そんな思い込みを、FLATUPGYMが覆します。
            </p>
            <p>
              私がこのジムを創ったのは、すべての人が自分らしく輝ける場所を作りたかったから。
              格闘技は自分と向き合い、心も体も強くしてくれる素晴らしいものです。
            </p>
            <p>
              特に女性や子どもたちには、護身術として、そして自信をつけるツールとして、格闘技の素晴らしさを知ってほしいのです。
            </p>
            <p className="text-xl font-bold text-green-600">
              あなたが笑顔になれる場所、それがFLATUPGYMです。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThoughtsSection;
