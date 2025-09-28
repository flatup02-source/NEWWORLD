import Icon from '../Icon';

/**
 * Renders the "Pain Point" section of the homepage.
 * This section addresses common user concerns and pain points that the gym can solve.
 * It's a stateless, server component.
 * @returns {JSX.Element} The rendered PainPointSection component.
 */
const PainPointSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-12">こんなお悩みありませんか？</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-red-200">
            <Icon name="EmotionSadLine" className="text-5xl text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">運動が続かない…</h3>
            <p className="text-gray-600">「三日坊主」で終わってしまう。一人だとモチベーションが続かない。</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-yellow-200">
            <Icon name="QuestionLine" className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">ジムって怖い？</h3>
            <p className="text-gray-600">格闘技ジムは男性ばかりで、厳しそう…初心者でも大丈夫？</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-200">
            <Icon name="TimeLine" className="text-5xl text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">時間がない！</h3>
            <p className="text-gray-600">仕事や家事、育児で忙しくて、自分の時間がなかなか取れない。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointSection;
