'use client';

import React from 'react';
import Image from 'next/image';

const TestPage = () => {
  return (
    <div>
      <h1>Test Page</h1>
      <Image
        src="https://via.placeholder.com/150"
        alt="placeholder"
        width={150}
        height={150}
      />
    </div>
  );
};

export default TestPage;
