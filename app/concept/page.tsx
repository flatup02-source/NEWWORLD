'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function Concept() {
  useEffect(() => {
    redirect('/');
  }, []);

  return null;
}