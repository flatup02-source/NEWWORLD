// components/RobustImage.tsx
import { useState } from 'react';
import Image from 'next/image';

interface RobustImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  fallbackSrc?: string;
  [key: string]: any;
}

const RobustImage = ({ src, alt, width, height, fill, fallbackSrc = "/images/placeholder.png", ...props }: RobustImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  if (fill) {
    return <Image src={imgSrc} alt={alt} fill onError={handleError} loading="lazy" {...props} />;
  }

  return <Image src={imgSrc} alt={alt} width={width!} height={height!} onError={handleError} loading="lazy" {...props} />;
};

export default RobustImage;
