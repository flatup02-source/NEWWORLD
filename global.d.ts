declare namespace JSX {
  interface IntrinsicElements {
    video: React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> & {
      fetchpriority?: 'high' | 'low' | 'auto';
    };
  }
}
