"use client";

import dynamic from 'next/dynamic';

const DynamicFooter = dynamic(() => import('./Footer'), {
  ssr: false,
});

export default DynamicFooter;
