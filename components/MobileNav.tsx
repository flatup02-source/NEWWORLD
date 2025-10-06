'use client';

import Link from 'next/link';
import NavLink from './NavLink';
import { navLinks, classLinks } from '../lib/navigation';

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

/**
 * Mobile menu component.
 */
export default function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  if (!isOpen) return null;

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden overflow-hidden transition-all duration-500 ease-out z-60">
      <div className="py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md rounded-b-xl">
        <div className="flex flex-col space-y-2 px-4">
          {navLinks.map(link => (
              <NavLink 
                key={link.href} 
                {...link} 
                onClick={closeMenu} 
                className={`px-4 py-4 rounded-lg hover:bg-pink-50 transform hover:translate-x-2 transition-transform duration-300 ${
                  link.href === '/schedule' ? 'bg-purple-100 text-purple-700 font-extrabold text-lg' : ''
                }`}
              />
          ))}

          {/* Mobile classes list */}
          <div className="px-4 py-2">
            <div className="text-gray-700 font-medium border-b border-gray-200 mb-2 pb-2">
              クラス一覧
            </div>
            <div className="pl-2 space-y-1">
               {classLinks.map(link => (
                  <Link
                      key={link.href}
                      href={link.href}
                      className="block text-gray-600 hover:text-pink-700 transition-colors cursor-pointer py-2 text-sm transform hover:translate-x-2 transition-transform duration-300"
                      onClick={closeMenu}
                  >
                      {link.label}
                  </Link>
               ))}
            </div>
          </div>

          {/* UIZIN Link */}
          <Link
              href="/uizin"
              className="text-red-600 hover:text-red-700 transition-colors cursor-pointer font-bold px-4 py-3 rounded-lg hover:bg-red-50 animate-pulse transform hover:translate-x-2 transition-transform duration-300"
              onClick={closeMenu}
          >
              🏆 UIZIN大会
          </Link>

          {/* Mobile CTA */}
          <div className="pt-4 border-t border-gray-200">
            <Link
              href="https://lin.ee/21ape6V"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-4 rounded-full transition-all duration-500 cursor-pointer text-center font-bold text-lg shadow-xl transform hover:scale-105 block overflow-hidden"
              onClick={closeMenu}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">LINEで無料体験</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
