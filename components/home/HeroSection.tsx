'use client';

import { useRef, useEffect } from 'react';
import OptimizedImage from '../OptimizedImage';

/**
 * Renders the hero section with a background video.
 * This component is client-side rendered ('use client') because it uses the useEffect and useRef hooks
 * to manage the video playback, ensuring it autoplays correctly across different browsers.
 * @returns {JSX.Element} The rendered HeroSection component.
 */
const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // This effect handles the automatic playback of the background video.
  // It ensures that the play() command is only called when the video is ready,
  // preventing potential race condition errors on slower connections.
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const playVideo = () => {
      // The play() method returns a promise. We handle potential rejections
      // to avoid unhandled promise rejection errors in the console.
      const playPromise = videoElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Video autoplay failed:", error);
        });
      }
    };

    // Check if the video is already in a state where it can play.
    // readyState >= 3 means HAVE_FUTURE_DATA or HAVE_ENOUGH_DATA.
    if (videoElement.readyState >= 3) {
      playVideo();
    } else {
      // If not ready, wait for the 'canplaythrough' event which indicates
      // the video can be played without interruption.
      videoElement.addEventListener('canplaythrough', playVideo, { once: true });
    }

    // Cleanup function to remove the event listener when the component unmounts.
    return () => {
      videoElement.removeEventListener('canplaythrough', playVideo);
    };
  }, []);

  return (
    <div className="hero-video-wrap">
      <video ref={videoRef} className="hero-video" autoPlay muted playsInline loop preload="metadata" poster="https://ik.imagekit.io/FLATUPGYM/tr:q-auto,f-auto/TOPP.png" fetchpriority="high">
        <source src="https://ik.imagekit.io/FLATUPGYM/output_compressed.mp4?updatedAt=1758848662650" type="video/mp4" />
        <track kind="captions" src="/captions.vtt" srcLang="ja" label="日本語字幕" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            昨日までの自分と、サヨナラする場所。
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            ほんの少しの好奇心で、新しい自分に出会える。
          </p>
          <a href="https://lin.ee/EcVg03t" target="_blank" rel="noopener noreferrer">
            <OptimizedImage
              src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
              alt="友だち追加"
              width={232}
              height={72}
              className="h-18 w-auto mx-auto"
              priority
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;