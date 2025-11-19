import Link from 'next/link';
import OptimizedImage from '../OptimizedImage';

/**
 * Renders the "Testimonials" section of the homepage.
 * It displays a few customer testimonials and a link to a page with more reviews.
 * @returns {JSX.Element} The rendered TestimonialsSection component.
 */
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'M.Iさん',
      age: '30代女性',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
      text: '運動経験が全くなく不安でしたが、トレーナーさんが優しく丁寧に教えてくれるので、楽しく続けられています。体重が減っただけでなく、気持ちも前向きになり、自分に自信が持てるようになりました。',
    },
    {
      name: 'K.Tさん',
      age: '20代女性',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
      text: '仕事のストレスが溜まっていましたが、キックボクシングのミット打ちは最高のストレス発散になります。今では週2回通うのが楽しみです。',
    },
    {
      name: 'S.Yさん',
      age: '40代女性',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
      text: '産後太りがなかなか解消されませんでしたが、キックボクシングトレーニングで効率的に体を絞ることができました。子連れでもOKなのが嬉しいです。',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 font-rounded">お客様の声</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-[20px] shadow-soft transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden mr-4 flex-shrink-0 border-4 border-pastel-pink">
                  <OptimizedImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800 font-rounded">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.age}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">{testimonial.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/voice" className="inline-block bg-gradient-to-r from-pastel-pink to-pink-400 hover:from-pink-400 hover:to-pink-500 text-white px-8 py-4 rounded-full font-bold transition-transform duration-300 cursor-pointer shadow-lg transform hover:scale-105">
            もっとお客様の声を見る
          </Link>
        </div>
        <div className="mt-8 text-center">
          <Link href="/trial-lesson" className="inline-block bg-gradient-to-r from-mint-green to-green-400 hover:from-green-400 hover:to-green-500 text-white px-8 py-4 rounded-full font-bold transition-transform duration-300 cursor-pointer shadow-lg transform hover:scale-105">
            無料体験レッスンを予約する
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
