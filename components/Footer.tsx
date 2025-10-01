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
                FLATUP
              </span>
            </Link>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              女性オーナーが創る、世界一優しい格闘技ジム。<br />
              あなたのペースで、あなたらしく。<br />
              ここは、あなたが主役になれる場所です。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:070-9035-3485" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition-transform duration-300 transform hover:scale-105">
                <Phone className="w-5 h-5 mr-2" />
                電話で無料体験を予約
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
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                BJJ（ブラジリアン柔術）
              </Link></li>
              <li><Link href="/uizin" className="text-red-400 hover:text-red-300 transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-2 font-bold animate-pulse">
                <Trophy className="w-4 h-4 mr-1" />
                🏆 UIZIN大会
              </Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-300 text-sm">
              © 2024 FLATUPGYM. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1 text-pink-700" />
                千葉県成田市土屋516-4 2F
              </span>
              <span className="hidden sm:block">|</span>
              <a href="tel:070-9035-3485" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800">
                <Phone className="w-4 h-4 mr-2" />
                070-9035-3485
              </a>
              <span className="hidden sm:block">|</span>
              <a href="https://lin.ee/21ape6V" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-green-400 transition-colors">
                <OptimizedImage
  src="https://ik.imagekit.io/FLATUPGYM/%E2%AD%90%EF%B8%8F%E3%83%95%E3%83%83%E3%82%BF%E3%83%BCGemini_Generated_Image_5ugsey5ugsey5ugs.png?updatedAt=1759296686588"
  alt="LINEで問い合わせ"
  width={32}
  height={32}
  className="h-8 w-8 md:h-10 md:w-10"
/>
                LINE
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-400 leading-relaxed">
              FLATUPGYMは、すべての人が安心して通える格闘技ジムです。初心者の方から経験者まで、あなたのペースに合わせて優しく指導いたします。
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}