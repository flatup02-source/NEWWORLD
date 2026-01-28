import React, { lazy, Suspense } from 'react';

interface IconProps {
  name: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
  const LazyIcon = lazy(() => import(`./icons/${name}`))

  return (
    <Suspense fallback={<svg className={className} />}>
      <LazyIcon />
    </Suspense>
  );
};

export default Icon;
