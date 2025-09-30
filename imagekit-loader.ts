// For debugging purposes
const IS_DEV = process.env.NODE_ENV === 'development';

export default function imagekitLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  // Add a console log to see what src is being passed in development
  if (IS_DEV) {
    console.log(`Imagekit Loader received src: ${src}`);
  }

  const urlEndpoint = 'https://ik.imagekit.io/FLATUPGYM';

  // Define known base URLs to strip them from the src
  const knownBaseUrls = [
    "https://static.readdy.ai",
    "https://ik.imagekit.io/FLATUPGYM"
  ];

  let isKnownUrl = false;
  for (const baseUrl of knownBaseUrls) {
    if (src.startsWith(baseUrl)) {
      isKnownUrl = true;
      break;
    }
  }

  // If it's an absolute URL but not a known one, return it as is.
  if (src.startsWith('http') && !isKnownUrl) {
    return src;
  }

  let imagePath = src;

  // If it is a known URL, strip the base part.
  if (isKnownUrl) {
    for (const baseUrl of knownBaseUrls) {
      if (src.startsWith(baseUrl)) {
        imagePath = src.substring(baseUrl.length);
        break; // Stop after finding the first match
      }
    }
  }

  // Build transformation parameters
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  // Always add auto-format for modern image optimization
  params.push('f-auto');

  const paramsString = params.join(',');
  
  // Ensure the final path always starts with a slash
  if (!imagePath.startsWith('/')) {
    imagePath = '/' + imagePath;
  }

  // Remove any existing query parameters from the path to avoid conflicts
  const pathWithoutParams = imagePath.split('?')[0];

  return `${urlEndpoint}${pathWithoutParams}?tr=${paramsString}`;
}111