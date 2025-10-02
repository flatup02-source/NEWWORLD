import React from 'react';
import RobustImage from './RobustImage';

interface NotScaryLPOSectionProps {
  headline?: string;
  subheadline?: string;
  imageUrl?: string;
  ctaText?: string;
  ctaLink?: string;
  features?: string[];
}

const NotScaryLPOSection: React.FC<NotScaryLPOSectionProps> = ({
  headline = '格闘技ジムは怖いと思っていませんか？',
  subheadline = 'FLAT-UP ジムは、あなたの不安を「楽しい！」に変える場所です。',
  imageUrl = '/NEWTOP.png',
  ctaText = '今すぐ体験を予約する',
  ctaLink = 'https://lin.ee/21ape6V',
  features = [],
}) => {
  return (
    <section className="relative w-full min-h-screen flex items-start justify-center text-center overflow-hidden bg-gray-100 pt-24 sm:pt-0">
      <div className="absolute inset-0 z-0">
        <RobustImage
          src={imageUrl}
          alt="FLAT-UP GYM welcoming atmosphere"
          fill
          priority
          className="object-cover object-bottom brightness-75"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-orange-200/20"></div>
      </div>

      <div className="relative z-10 p-8 max-w-xl sm:max-w-4xl mx-auto text-white text-left sm:text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500">
          {headline}
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-orange-300">
          {subheadline}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map((feature, index) => (
            <span
              key={index}
              className="bg-white bg-opacity-20 backdrop-blur-sm text-white text-lg px-4 py-2 rounded-full shadow-md"
            >
              {feature}
            </span>
          ))}
        </div>

        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-xl md:text-2xl font-bold px-10 py-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
};

export default NotScaryLPOSection;
