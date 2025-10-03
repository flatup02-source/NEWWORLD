import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zen-kaku-gothic-new",
});

export const metadata: Metadata = {
  title: "俺たちのPRIDE伝説",
  description: "PRIDE黄金期を懐かしむ異名当てクイズアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${zenKakuGothicNew.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
