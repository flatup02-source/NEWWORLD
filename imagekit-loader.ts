const IS_DEV = process.env.NODE_ENV === 'development';

export default function imagekitLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {


  const urlEndpoint = 'https://ik.imagekit.io/FLATUPGYM';

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

  if (src.startsWith('http') && !isKnownUrl) {
    return src;
  }

  let imagePath = src;

  if (isKnownUrl) {
    for (const baseUrl of knownBaseUrls) {
      if (src.startsWith(baseUrl)) {
        imagePath = src.substring(baseUrl.length);
        break;
      }
    }
  }

  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  params.push('f-auto');

  const paramsString = params.join(',');
  
  if (!imagePath.startsWith('/')) {
    imagePath = '/' + imagePath;
  }

  const pathWithoutParams = imagePath.split('?')[0];

  return `${urlEndpoint}${pathWithoutParams}?tr=${paramsString}`;
}