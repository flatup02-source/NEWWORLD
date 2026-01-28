// components/OptimizedImage.tsx
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  [key: string]: any;
}

const OptimizedImage = ({ src, alt, width, height, fill, priority, ...props }: OptimizedImageProps) => {
  // The ImageKit loader is global. Just use the Image component directly.
  // The loader will handle constructing the full URL.
  // Next.js's Image component will handle generating `srcset` for different resolutions automatically.
  // ImageKit will handle format optimization (avif/webp) on the fly.
  if (fill) {
    return <Image src={src} alt={alt} fill priority={priority} {...props} />;
  }

  return <Image src={src} alt={alt} width={width!} height={height!} priority={priority} {...props} />;
};

export default OptimizedImage;