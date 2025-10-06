'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import NavLink from './NavLink';

import { navLinks, classLinks } from '../lib/navigation';

/**
 * Desktop navigation component.
 */
export default function DesktopNav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="hidden md:flex items-center space-x-8 flex-nowrap">
      {navLinks.map((link) => (
        <NavLink key={link.href} {...link} />
      ))}
      
      {/* Classes dropdown */}
      <div className="relative group">
        <button
          className="relative text-gray-700 hover:text-pink-700 transition-colors cursor-pointer font-medium py-2 flex items-center"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          onBlur={() => setTimeout(() => setIsDropdownOpen(false), 150)} // Close on blur with a delay
        >
          クラス一覧
          <ChevronDown
            className={`w-4 h-4 ml-1 transition-transform duration-300 ${
              isDropdownOpen ? 'rotate-180' : ''
            }`}
          />
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-2xl border-2 border-gray-200 py-4 min-w-48 z-50 transform transition-all duration-300 opacity-100 translate-y-0">
            {classLinks.map(link => (
               <Link
                  key={link.href}
                  href={link.href}
                  className="block px-6 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-700 transition-colors font-medium"
                  onClick={() => setIsDropdownOpen(false)}
               >
                 {link.label}
               </Link>
            ))}
          </div>
        )}
      </div>
      <NavLink href="/uizin" label="🏆 UIZIN大会" className="text-red-600 hover:text-red-700 font-bold animate-pulse" />
    </div>
  );
}
