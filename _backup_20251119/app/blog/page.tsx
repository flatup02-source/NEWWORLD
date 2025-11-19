'use client';


import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import SEO from '@/components/SEO';
import { breadcrumbJsonLd } from '@/lib/json-ld';

export default function Blog() {
  const blogBreadcrumbs = breadcrumbJsonLd([
    { name: 'Home', url: 'https://flat-up.jp/' },
    { name: 'ブログ', url: 'https://flat-up.jp/blog' },
  ]);

  return (
    <div className="min-h-screen">
      <SEO
        title="ブログ｜理想の自分になるためのヒント集 - 成田のキックボクシングジム FLATUPGYM"
        description="ダイエットやトレーニングに関する専門的な知識から、モチベーションを維持するコツまで。あなたの「変わりたい」を応援するお役立ち情報を発信しています。"
        jsonLd={blogBreadcrumbs}
      />
      

      <main>
        <section className="py-24 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-8">
                ブログ
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                理想の自分になるためのヒント集
              </p>
            </div>

            {/* Placeholder for blog post list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Example Blog Post Card */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                {/* TODO: Replace /images/blog-placeholder.jpg with your actual optimized image in the public directory for better performance. */}
                <OptimizedImage src="https://ik.imagekit.io/FLATUPGYM/blog-placeholder.jpg?tr=q-auto,f-auto" alt="Blog Post Image" width={300} height={200} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-bold mb-2">ブログ記事タイトル1</h3>
                <p className="text-gray-600 text-sm mb-4">2025年8月26日 | カテゴリ</p>
                <p className="text-gray-700 text-sm">
                  記事の要約がここに表示されます。読者を惹きつける魅力的な内容を簡潔にまとめます。
                </p>
                <Link href="/blog/blog-post-1" className="text-blue-600 hover:underline mt-4 inline-block">
                  続きを読む
                </Link>
              </div>
              {/* Repeat for more posts */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                {/* TODO: Replace /images/blog-placeholder.jpg with your actual optimized image in the public directory for better performance. */}
                <OptimizedImage src="https://ik.imagekit.io/FLATUPGYM/blog-placeholder.jpg?tr=q-auto,f-auto" alt="Blog Post Image" width={300} height={200} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-bold mb-2">ブログ記事タイトル2</h3>
                <p className="text-gray-600 text-sm mb-4">2025年8月25日 | カテゴリ</p>
                <p className="text-gray-700 text-sm">
                  記事の要約がここに表示されます。読者を惹きつける魅力的な内容を簡潔にまとめます。
                </p>
                <Link href="/blog/blog-post-2" className="text-blue-600 hover:underline mt-4 inline-block">
                  続きを読む
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                {/* TODO: Replace /images/blog-placeholder.jpg with your actual optimized image in the public directory for better performance. */}
                <OptimizedImage src="https://ik.imagekit.io/FLATUPGYM/blog-placeholder.jpg?tr=q-auto,f-auto" alt="Blog Post Image" width={300} height={200} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-bold mb-2">ブログ記事タイトル3</h3>
                <p className="text-gray-600 text-sm mb-4">2025年8月24日 | カテゴリ</p>
                <p className="text-gray-700 text-sm">
                  記事の要約がここに表示されます。読者を惹きつける魅力的な内容を簡潔にまとめます。
                </p>
                <Link href="/blog/blog-post-3" className="text-blue-600 hover:underline mt-4 inline-block">
                  続きを読む
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}