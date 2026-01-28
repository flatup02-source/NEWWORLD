import Icon from '../Icon';

/**
 * Renders the "Benefits" section of the homepage.
 * This section highlights the positive outcomes of joining the gym.
 * @returns {JSX.Element} The rendered BenefitsSection component.
 */
const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-12">FLATUPGYMで変わる未来</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-purple-200">
            <Icon name="SparklingLine" className="text-5xl text-purple-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">自信がつく</h3>
            <p className="text-gray-600">できなかったことができるようになる喜びで、自己肯定感が向上します。</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-pink-200">
            <Icon name="EmotionHappyLine" className="text-5xl text-pink-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">ストレス解消</h3>
            <p className="text-gray-600">ミット打ちで日頃のストレスを吹き飛ばし、心身ともにリフレッシュ。</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-200">
            <Icon name="HeartPulseLine" className="text-5xl text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">健康的な体へ</h3>
            <p className="text-gray-600">楽しく運動を続けながら、理想の体型と健康を手に入れられます。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
