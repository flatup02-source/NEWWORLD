'use client';

import Link from 'next/link';
import { MessageSquare, Phone, Map, ChevronRight, Box, Trophy, MapPin } from 'lucide-react';
import LineIcon from './ui/LineIcon';
import OptimizedImage from './OptimizedImage';


export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mt-20 relative overflow-hidden">
      {/* 背景の洗練されたデコレーション */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-pink-500/10 to-purple-600/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-500/10 to-green-600/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-6 group">
              <span className="text-3xl font-['Pacifico'] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 transform group-hover:scale-105 transition-transform duration-300">
                FLAT-UP
              </span>
            </Link>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              女性オーナーが創る、世界一優しい格闘技ジム。<br />
              あなたのペースで、あなたらしく。<br />
              ここは、あなたが主役になれる場所です。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://lin.ee/JUxTlYr" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-full transition-all duration-500 cursor-pointer flex items-center justify-center space-x-2 whitespace-nowrap transform hover:scale-105 shadow-xl">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" fill="currentColor"><title>LINE</title><path d="M18.213 13.322c.38-.503.66-1.057.838-1.647.19-.628.285-1.28.285-1.957s-.095-1.33-.285-1.957c-.178-.59-.458-1.144-.838-1.647-.38-.503-.844-.92-1.39-1.252-.545-.332-1.15-.58-1.81-.743-.66-.163-1.36-.244-2.09-.244-1.52 0-2.91.34-4.16.99-.06.03-.1.06-.16.09-.53.25-.99.59-1.39 1.02-.4.43-.71.93-.93 1.5-.22.57-.33 1.2-.33 1.89s.11 1.32.33 1.89c.22.57.53 1.07.93 1.5.4.43.86.77 1.39 1.02.05.03.1.06.15.09 1.25.65 2.64.99 4.17.99.73 0 1.43-.08 2.09-.24.66-.16 1.26-.41 1.8-.74.55-.34.99-.75 1.39-1.25zM12.005 0C5.375 0 0 4.97 0 11.11c0 5.23 3.69 9.62 8.51 10.83.32.08.64.13.96.16 1.03.09 2.06.14 3.09.14.56 0 1.12-.02 1.68-.07.18-.02.36-.03.54-.06 1.3-.13 2.54-.49 3.65-1.05.31-.16.6-.33.88-.52 1.6-1.09 2.74-2.73 3.2-4.6.05-.2.1-.4.14-.61.06-.3.1-.6.14-.91.03-.2.05-.39.07-.59.13-.98.2-2 .2-3.03.01-5.99-4.82-10.82-10.82-10.82z"/></svg>
                <span>LINEで体験申し込み</span>
              </a>
            </div>
          </div>
          
          <div className="group">
            <h3 className="font-bold text-white mb-6 text-lg flex items-center">
              <Map className="w-5 h-5 text-pink-700 mr-2" />
              サイトマップ
            </h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-pink-600 transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-2">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                ホーム
              </Link></li>
              
              <li><Link href="/voice" className="text-gray-300 hover:text-pink-400 transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-2">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                お客様の声
              </Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-pink-400 transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-2">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                料金・システム
              </Link></li>
              <li><Link href="/schedule" className="text-gray-300 hover:text-pink-400 transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-2">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                スケジュール
              </Link></li>
              <li><Link href="/trainers" className="text-gray-300 hover:text-pink-400 transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-2">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                トレーナー紹介
              </Link></li>
              <li><Link href="/access" className="text-gray-300 hover:text-pink-400 transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-2">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                アクセス・体験申込
              </Link></li>
            </ul>
          </div>
          
          <div className="group">
            <h3 className="font-bold text-white mb-6 text-lg flex items-center">
              <Box className="w-5 h-5 text-purple-500 mr-2" />
              クラス一覧
            </h3>
            <ul className="space-y-3">
              <li><Link href="/kids-girls" className="text-gray-300 hover:text-purple-400 transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-2">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                キッズクラス（女の子向け）
              </Link></li>
              <li><Link href="/kids-boys" className="text-gray-300 hover:text-purple-400 transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-2">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                キッズクラス（男の子向け）
              </Link></li>
              <li><Link href="/ladies" className="text-gray-300 hover:text-purple-400 transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-2">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                レディース
              </Link></li>
              <li><Link href="/postpartum" className="text-gray-300 hover:text-purple-400 transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-2">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                産後ママ
              </Link></li>
              <li><Link href="/senior" className="text-gray-300 hover:text-purple-400 transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-2">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                シニア
              </Link></li>
              <li><Link href="/athlete" className="text-gray-300 hover:text-purple-400 transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-2">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                選手育成
              </Link></li>
              <li><Link href="/bjj" className="text-gray-300 hover:text-purple-400 transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-2">
                <ChevronRight className="w-4 h-4 opacity.0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                BJJ（ブラジリアン柔術）
              </Link></li>
              <li><Link href="/uizin" className="text-red-400 hover:text-red-300 transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-2 font-bold animate-pulse">
                <Trophy className="w-4 h-4 mr-1" />
                🏆 UIZIN大会
              </Link></li>
            </ul>
          </div>
        </div>
        
        {/* 洗練された区切り線 */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-300 text-sm">
              © 2024 FLAT-UP GYM. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1 text-pink-700" />
                千葉県成田市土屋516-4 2F
              </span>
              <span className="hidden sm:block">|</span>
              <span className="flex items-center">
                <Phone className="w-4 h-4 mr-1 text-purple-500" />
                070-9035-3485
              </span>
              <span className="hidden sm:block">|</span>
              <a href="https://lin.ee/21ape6V" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-green-400 transition-colors">
                <LineIcon className="w-5 h-5 mr-1 text-green-500" />
                LINE
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-400 leading-relaxed">
              FLAT-UP GYMは、すべての人が安心して通える格闘技ジムです。初心者の方から経験者まで、あなたのペースに合わせて優しく指導いたします。
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
