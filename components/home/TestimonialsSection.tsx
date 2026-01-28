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
    <section className="py-20 bg-gradient-to-b from-kawaii-cream to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 text-8xl opacity-5 animate-pulse text-kawaii-pink">♥</div>
        <div className="absolute bottom-10 left-10 text-6xl opacity-10 animate-bounce text-kawaii-lavender">✨</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-kawaii-text mb-12 font-kawaii">
          <span className="text-kawaii-pink inline-block animate-bounce">♥</span> お客様の声 <span className="text-kawaii-pink inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>♥</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm p-8 rounded-[32px] shadow-cute hover:shadow-lg transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-kawaii-pink">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden mr-4 flex-shrink-0 border-4 border-kawaii-pink shadow-md">
                  <OptimizedImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-xl text-gray-800 font-rounded">{testimonial.name}</h3>
                  <p className="text-sm text-kawaii-text font-medium bg-kawaii-cream px-2 py-1 rounded-full inline-block mt-1">{testimonial.age}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg drop-shadow-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-base text-left font-medium">
                <span className="text-2xl text-kawaii-pink opacity-50 font-serif">"</span>
                {testimonial.text}
                <span className="text-2xl text-kawaii-pink opacity-50 font-serif">"</span>
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/voice" className="inline-block bg-gradient-to-r from-kawaii-pink to-pink-400 hover:from-pink-400 hover:to-pink-500 text-white px-10 py-4 rounded-full font-bold transition-all duration-300 cursor-pointer shadow-lg transform hover:scale-105 hover:-translate-y-1">
            もっとお客様の声を見る 💕
          </Link>
        </div>
        <div className="mt-8 text-center">
          <Link href="/trial-lesson" className="inline-block bg-gradient-to-r from-kawaii-mint to-green-400 hover:from-green-400 hover:to-green-500 text-white px-10 py-4 rounded-full font-bold transition-all duration-300 cursor-pointer shadow-lg transform hover:scale-105 hover:-translate-y-1">
            無料体験レッスンを予約する 🍀
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
