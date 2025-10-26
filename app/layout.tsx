"use client";

import PageTransition from "@/components/PageTransition";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}