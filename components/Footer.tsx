'use client';

import Link from 'next/link';
import { MessageSquare, Phone, Map, ChevronRight, Box, Trophy, MapPin } from 'lucide-react';
import LineIcon from './ui/LineIcon';
import OptimizedImage from './OptimizedImage';


export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 mt-20 relative overflow-hidden">
      {/* 背景の洗練されたデコレーション */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-kawaii-pink/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-kawaii-mint/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {/* ブランド情報 & CTA */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="flex items-center mb-6 group">
                <span className="text-4xl font-kawaii font-bold text-transparent bg-clip-text bg-gradient-to-r from-kawaii-pink via-purple-400 to-kawaii-pink transform group-hover:scale-105 transition-transform duration-300">
                  FLATUP
                </span>
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed text-base">
                女性オーナーが創る、世界一優しい格闘技ジム。<br />
                あなたのペースで、あなたらしく。<br />
                ここは、あなたが主役になれる場所です。
              </p>
              <p className="text-sm text-gray-400 leading-relaxed mb-8">
                FLATUPGYMは、すべての人が安心して通える格闘技ジムです。初心者の方から経験者まで、あなたのペースに合わせて優しく指導いたします。
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-auto">
              <Link
                href="/trial-lesson"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-sakura-pink hover:bg-sakura-hover transition-all duration-300 shadow-lg transform hover:scale-105 animate-pulse"
              >
                <span className="mr-2">💖</span>
                無料体験を予約する
              </Link>
              <a href="tel:070-9035-3485" aria-label="電話で無料体験を予約" className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-base font-medium rounded-full text-gray-300 hover:bg-gray-800 transition-colors duration-300">
                <Phone className="w-5 h-5 mr-2" />
                電話で質問する
              </a>
            </div>
          </div>

          {/* サイトマップ */}
          <div className="col-span-1">
            <h3 className="font-bold text-white mb-6 text-xl flex items-center">
              <Map className="w-6 h-6 text-sakura-pink mr-2" />
              サイトマップ
            </h3>
            <ul className="space-y-3 text-base">
              <li><Link href="/" className="text-gray-300 hover:text-sakura-hover transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-1">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                ホーム
              </Link></li>
              <li><Link href="/voice" className="text-gray-300 hover:text-sakura-hover transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-1">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                お客様の声
              </Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-sakura-hover transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-1">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                料金・システム
              </Link></li>
              <li><Link href="/schedule" className="text-gray-300 hover:text-sakura-hover transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-1">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                スケジュール
              </Link></li>
              <li><Link href="/trainers" className="text-gray-300 hover:text-sakura-hover transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-1">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                トレーナー紹介
              </Link></li>
              <li><Link href="/access" className="text-gray-300 hover:text-sakura-hover transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-1">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                アクセス・体験申込
              </Link></li>
              <li><Link href="/aika" className="text-gray-300 hover:text-sakura-hover transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-1">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                AIKA 19号
              </Link></li>
            </ul>
          </div>

          {/* クラス一覧 & 連絡先 */}
          <div className="col-span-1">
            <h3 className="font-bold text-white mb-6 text-xl flex items-center">
              <Box className="w-6 h-6 text-purple-500 mr-2" />
              クラス一覧
            </h3>
            <ul className="space-y-3 text-base">
              <li><Link href="/kids-girls" className="text-gray-300 hover:text-purple-400 transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-1">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                キッズクラス（女の子向け）
              </Link></li>
              <li><Link href="/kids-boys" className="text-gray-300 hover:text-purple-400 transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-1">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                キッズクラス（男の子向け）
              </Link></li>
              <li><Link href="/ladies" className="text-gray-300 hover:text-purple-400 transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-1">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                レディース
              </Link></li>
              <li><Link href="/postpartum" className="text-gray-300 hover:text-purple-400 transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-1">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                産後ママ
              </Link></li>
              <li><Link href="/senior" className="text-gray-300 hover:text-purple-400 transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-1">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                シニア
              </Link></li>
              <li><Link href="/athlete" className="text-gray-300 hover:text-purple-400 transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-1">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                選手育成
              </Link></li>
              <li><Link href="/bjj" className="text-gray-300 hover:text-purple-400 transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-1">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                BJJ（ブラジリアン柔術）
              </Link></li>
              <li><Link href="/uizin" className="text-red-400 hover:text-red-300 transition-all duration-300 cursor-pointer flex items-center group transform hover:translate-x-1 font-bold animate-pulse">
                <Trophy className="w-4 h-4 mr-1" />
                🏆 UIZIN大会
              </Link></li>
            </ul>

            {/* 連絡先情報 */}
            <div className="mt-8">
              <h3 className="font-bold text-white mb-4 text-xl flex items-center">
                <Phone className="w-6 h-6 text-sakura-pink mr-2" />
                お問い合わせ
              </h3>
              <p className="text-gray-300 text-base flex items-center mb-2">
                <MapPin className="w-5 h-5 mr-2 text-sakura-pink" />
                千葉県成田市土屋516-4 2F
              </p>
              <a href="tel:070-9035-3485" aria-label="電話番号 070-9035-3485" className="text-gray-300 text-base flex items-center hover:text-sakura-hover transition-colors mb-4">
                <Phone className="w-5 h-5 mr-2 text-sakura-pink" />
                070-9035-3485
              </a>
              <Link
                href="/line"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-full text-white bg-[#00C300] hover:bg-[#00B000] transition-colors duration-300 shadow-md transform hover:scale-105"
              >
                <LineIcon className="w-6 h-6 mr-2 text-white" />
                LINEで無料体験・お問い合わせ
              </Link>
            </div>
          </div>
        </div>

        {/* 著作権表示 */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 FLATUPGYM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}