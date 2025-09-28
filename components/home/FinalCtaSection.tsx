import OptimizedImage from '../OptimizedImage';

/**
 * Renders the final Call To Action (CTA) section of the homepage.
 * It encourages users to book a trial lesson.
 * @returns {JSX.Element} The rendered FinalCtaSection component.
 */
const FinalCtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl md:text-2xl font-bold mb-8">さあ、次はあなたの番。新しい自分に出会う一歩を踏み出そう！</h2>
        <a href="https://lin.ee/EcVg03t" target="_blank" rel="noopener noreferrer">
          <OptimizedImage
            src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
            alt="友だち追加"
            width={232}
            height={72}
            className="h-18 w-auto mx-auto"
          />
        </a>
      </div>
    </section>
  );
};

export default FinalCtaSection;