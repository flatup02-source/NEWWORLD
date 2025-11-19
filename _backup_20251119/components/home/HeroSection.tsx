import React, { useEffect, useRef } from 'react';
import OptimizedImage from '@/components/OptimizedImage'; // Assuming OptimizedImage component exists

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
    }
  }, []);

  // Manually optimized poster URL
  const posterUrl = "https://ik.imagekit.io/flatup/FLATUPGYM/output_compressed.mp4/ik-thumbnail.jpg?tr=w-463,h-823,q-80";

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-black">
      {/* [Requirement #1] Video Display Fix:
        - The background image is now hidden.
        - The video is brought to the foreground with a higher z-index.
      */}
      <OptimizedImage
        src="https://ik.imagekit.io/flatup/FLATUPGYM/output_compressed.mp4/ik-thumbnail.jpg"
        alt="Background"
        fill
        priority
        className="object-cover w-full h-full z-0 hidden" // hidden class added to hide the image overlay
        // [Requirement #3] Overflow Fix: sizes="100vw" removed to prevent horizontal scroll
      />
      
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster={posterUrl}
        className="absolute top-0 left-0 w-full h-full object-cover z-10" // z-index increased
      >
        <source src="https://ik.imagekit.io/flatup/FLATUPGYM/output_compressed.mp4" type="video/mp4" />
        {/* [Requirement #4] Captions Fix:
          - Added track element to display subtitles.
        */}
        <track
          kind="subtitles"
          src="/captions.vtt"
          srcLang="ja"
          label="日本語"
          default
        />
        Your browser does not support the video tag.
      </video>

      {/* [Requirement #2] CTA Optimization:
        - The original text elements are now hidden.
      */}
      <div className="relative z-20 text-white p-4 hidden">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg">
          昨日までの自分と、<br />未来の自分が入れ替わる場所。
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-shadow">
          乾いた衝撃音、心と身体で感じる。その一振りが、未来を変える。
        </p>
      </div>

      {/* [Requirement #2] CTA Optimization:
        - A new button is added at the bottom center of the screen.
      */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
        <a
          href="#contact" // Link to the contact/trial section
          className="bg-pink-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-pink-600 transition-transform transform hover:scale-105"
        >
          新しい自分を始める
        </a>
      </div>
    </section>
  );
};

export default HeroSection;