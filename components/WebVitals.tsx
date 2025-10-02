'use client';

import { useEffect } from 'react';
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

const WebVitals = () => {
  useEffect(() => {


    // カスタムメトリクス
    const observer = new PerformanceObserver((list) => {

    });

    observer.observe({ entryTypes: ['measure', 'navigation'] });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default WebVitals;
