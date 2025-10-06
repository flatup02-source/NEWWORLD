import { useEffect, useCallback } from 'react';

export const usePerformance = () => {

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    // LCP (Largest Contentful Paint) の監視
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    });

    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // FID (First Input Delay) の監視
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (entry.processingStart) {
          console.log('FID:', entry.processingStart - entry.startTime);
        }
      });
    });

    fidObserver.observe({ entryTypes: ['first-input'] });

    // CLS (Cumulative Layout Shift) の監視
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      console.log('CLS:', clsValue);
    });

    clsObserver.observe({ entryTypes: ['layout-shift'] });

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  const measureCustomMetrics = useCallback(() => {
    if (typeof window === 'undefined') return;

    // ページ読み込み時間の測定
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      console.log('DOM Content Loaded:', navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart);
      console.log('Load Complete:', navigationEntry.loadEventEnd - navigationEntry.loadEventStart);
    }

    // リソース読み込み時間の測定
    const resourceEntries = performance.getEntriesByType('resource');
    resourceEntries.forEach((entry) => {
      console.log(`Resource ${entry.name}:`, entry.duration);
    });
  }, []);

  useEffect(() => {
    const cleanup = measurePerformance();
    measureCustomMetrics();

    return cleanup;
  }, [measurePerformance, measureCustomMetrics]);

  return {
    measurePerformance,
    measureCustomMetrics,
  };
};
