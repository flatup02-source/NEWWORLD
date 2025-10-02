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
  if (fill) {
    return <Image src={src} alt={alt} fill priority={priority} {...props} />;
  }

  return <Image src={src} alt={alt} width={width!} height={height!} priority={priority} {...props} />;
};

export default OptimizedImage;