import OptimizedImage from '../OptimizedImage';

/**
 * Renders the "Women's Self-Defense Class" section of the homepage.
 * It's a simple section with a title and an image.
 * @returns {JSX.Element} The rendered SelfDefenseSection component.
 */
const SelfDefenseSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">女性向け護身術クラス</h2>
        </div>
        <OptimizedImage src="https://ik.imagekit.io/FLATUPGYM/bjj2.png?updatedAt=1756897178742" alt="女性向け護身術クラス" width={800} height={400} className="mx-auto rounded-lg shadow-lg" sizes="(max-width: 768px) 100vw, 800px" quality={80} />
      </div>
    </section>
  );
};

export default SelfDefenseSection;
