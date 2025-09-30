'use client';

import { useRef, useEffect } from 'react';
import OptimizedImage from '../OptimizedImage';

/**
 * Renders the hero section with a background video and primary call-to-action buttons.
 */
const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // This effect handles the automatic playback of the background video.
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const playVideo = () => {
      const playPromise = videoElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Video autoplay failed:", error);
        });
      }
    };

    if (videoElement.readyState >= 3) {
      playVideo();
    } else {
      videoElement.addEventListener('canplaythrough', playVideo, { once: true });
    }

    return () => {
      videoElement.removeEventListener('canplaythrough', playVideo);
    };
  }, []);

  return (
    <div className="hero-video-wrap">
      <video
ref={videoRef}
className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
src="https://ik.imagekit.io/FLATUPGYM/output_compressed.mp4?updatedAt=1758848662650"
autoPlay
loop
muted
playsInline
poster="https://ik.imagekit.io/FLATUPGYM/TOPP.png?updatedAt=1756928058451"
>
<source src="https://ik.imagekit.io/FLATUPGYM/output_compressed.mp4?updatedAt=1758848662650" type="video/mp4" />
Your browser does not support the video tag.
</video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            昨日までの自分と、サヨナラする場所。
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            ほんの少しの好奇心で、新しい自分に出会える。
          </p>
          
          {/* ▼▼▼ ここからが修正後のボタンエリアです ▼▼▼ */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            {/* Pink LINE Button */}
            <a 
              href="https://lin.ee/JUxTlYr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block transform hover:scale-105 transition-transform duration-300"
            >
              <OptimizedImage
                src="https://ik.imagekit.io/FLATUPGYM/Gemini_Generated_Image_tk1gjctk1gjctk1g.png?updatedAt=1759015745806"
                alt="LINEで無料体験はこちら"
                width={250}
                height={86} // Adjusted for aspect ratio
                className="h-auto"
                style={{ width: '250px' }}
              />
            </a>
            
            {/* Orange Phone Button */}
            <a 
              href="tel:070-9035-3485" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300 transform hover:scale-105"
            >
              070-9035-3485
            </a>
          </div>
          {/* ▲▲▲ ここまでが修正後のボタンエリアです ▲▲▲ */}

        </div>
      </div>
    </div>
  );
};

export default HeroSection;