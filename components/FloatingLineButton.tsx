// components/FloatingLineButton.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';

const FloatingLineButton = () => {
  return (
    <Link
      href="https://page.line.me/jfl0054o?oat_content=url&openQrModal=true"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 transform hover:scale-110 transition-transform duration-300"
      aria-label="LINEで無料体験はこちら"
    >
      <Image
        src="https://ik.imagekit.io/FLATUPGYM/%E2%AD%90%EF%B8%8F%E3%83%95%E3%83%83%E3%82%BF%E3%83%BCGemini_Generated_Image_5ugsey5ugsey5ugs.png?updatedAt=1759296686588"
        alt="LINEで無料体験はこちら"
        width={32} // 画像の表示幅
        height={34} // 画像の表示高さ
        priority // 常に表示される重要な要素なので、優先的に読み込みます
      />
    </Link>
  );
};

export default FloatingLineButton;