import OptimizedImage from '../OptimizedImage';
import CheckboxCircleLine from '../icons/CheckboxCircleLine';

/**
 * Renders the "24-hour system" section of the homepage.
 * It highlights the gym's 24-hour accessibility.
 * It's a stateless, server component.
 * @returns {JSX.Element} The rendered TwentyFourHourSystemSection component.
 */
const TwentyFourHourSystemSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">24時間使えるシステム</h2>
          <p className="text-xl text-gray-600 mt-4">格闘技ジムでは珍しい24時間アクセス可能なシステム。あなたのライフスタイルに合わせて、いつでも理想の体作りができます。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <ul className="text-lg text-gray-700 space-y-4">
              <li className="flex items-start"><CheckboxCircleLine className="text-green-500 mr-2 mt-1 w-6 h-6 flex-shrink-0" /><span>早朝・深夜も利用可能</span></li>
              <li className="flex items-start"><CheckboxCircleLine className="text-green-500 mr-2 mt-1 w-6 h-6 flex-shrink-0" /><span>セキュリティ万全</span></li>
              <li className="flex items-start"><CheckboxCircleLine className="text-green-500 mr-2 mt-1 w-6 h-6 flex-shrink-0" /><span>忙しい方でも継続しやすい</span></li>
            </ul>
          </div>
          <div>
            {/* Placeholder for electronic key image */}
            <OptimizedImage src="https://ik.imagekit.io/FLATUPGYM/tiny.png?updatedAt=1757331481711" alt="24時間使えるシステム" width={500} height={300} className="mx-auto rounded-lg shadow-lg" sizes="(max-width: 768px) 100vw, 500px" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwentyFourHourSystemSection;
