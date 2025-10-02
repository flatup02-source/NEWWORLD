'use client';

import { useState, useEffect } from 'react';

/**
 * A button that appears when the user scrolls to the bottom of the page,
 * allowing them to return to the homepage.
 * This is a client component because it uses state and effects to interact with browser events.
 */
const BackToHomeButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const backToHome = () => {
    window.location.href = '/';
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      id="backToTopBtn"
      onClick={backToHome}
      style={{
        display: isVisible ? 'block' : 'none',
        position: 'fixed',
        right: '24px',
        bottom: '90px',
        zIndex: 9998,
        padding: '12px 24px',
        backgroundColor: '#0073aa',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'opacity 0.3s',
        opacity: isVisible ? 1 : 0,
      }}
    >
      ホームに戻る
    </button>
  );
};

export default BackToHomeButton;
