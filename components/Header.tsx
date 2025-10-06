'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import DesktopNav from './DesktopNav';
import dynamic from 'next/dynamic';

const MobileNav = dynamic(() => import('./MobileNav'), { ssr: false });

/**
 * サイト全体のメインヘッダーコンポーネント。
 * デスクトップ用とモバイル用のナビゲーションを統括し、スクロール時のスタイル変更（スティッキーヘッダー）や
 * モバイルメニューの開閉状態を管理します。
 * 'use client' を指定しているのは、useState や useEffect といったクライアントサイドで動作するフックを使用しているためです。
 */
export default function Header() {
  // ユーザーがページをスクロールしたかどうかを追跡する状態。
  // これにより、スクロール量に応じてヘッダーの背景や影のスタイルを動的に変更できます。
  const [scrolled, setScrolled] = useState(false);

  // モバイルメニューが開いているかどうかの状態。
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // このuseEffectは、スクロールイベントを監視するために使用されます。
  // ページがマウントされた時に一度だけイベントリスナーを登録し、
  // ユーザーが50px以上スクロールしたら `scrolled` 状態をtrueに設定します。
  // これにより、ヘッダーがコンテンツに重なった際に、背景を不透明にするなどの視覚的なフィードバックを提供します。
  // パフォーマンス向上のため、`passive: true` を指定しています。
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // クリーンアップ関数：コンポーネントがアンマウントされる際にイベントリスナーを削除します。
    // これにより、メモリリークを防ぎます。
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // 空の依存配列は、このeffectがマウント時に一度だけ実行されることを意味します。

  return (
    <header
      // `scrolled` 状態に基づいて、ヘッダーのスタイルを動的に変更します。
      // スクロールされている場合は、背景の透明度を下げ、影を濃くしてコンテンツとの境界を明確にします。
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/90 backdrop-blur-sm shadow-sm'
      } border-b border-gray-100`}
    >
      <nav className="px-4 sm:px-6 lg:px-8 font-sans-japanese">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" aria-label="FLATUPGYM ホームページへ" className="flex items-center group flex-shrink-0">
            <span
              className="text-2xl md:text-3xl font-['Pacifico'] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 transform group-hover:scale-105 transition-transform duration-300 inline-block align-middle whitespace-nowrap"
            >
              FLATUPGYM
            </span>
          </Link>

          {/* デスクトップ用ナビゲーション */}
          <DesktopNav />

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="https://lin.ee/21ape6V"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-green-800 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap font-bold text-base shadow-lg transform hover:scale-105"
            >
              <span className="relative z-10">LINE 友だち追加</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 cursor-pointer rounded-lg hover:bg-gray-100 transition-colors group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="メニューを開閉する"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* モバイル用ナビゲーションメニュー */}
        <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      </nav>
    </header>
  );
}
