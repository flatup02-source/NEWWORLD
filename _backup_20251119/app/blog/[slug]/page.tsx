

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import SEO from '@/components/SEO';
import { breadcrumbJsonLd } from '@/lib/json-ld'; // Import from new location

// This is a placeholder for a dynamic blog post page.
// In a real application, you would fetch blog post data based on the 'slug'.
// For now, we'll use placeholder content.

// Function to generate static params for pre-rendering
export async function generateStaticParams() {
  // In a real application, you would fetch all blog post slugs from your CMS (e.g., WordPress API)
  const slugs = ['blog-post-1', 'blog-post-2', 'blog-post-3']; // Dummy slugs for static export

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function BlogPost({ params }: { params: any }) {
  const { slug } = params;

  // Placeholder data for a blog post
  const blogPost = {
    title: `ブログ記事: ${slug.replace(/-/g, ' ')}`,
    description: `この記事は${slug.replace(/-/g, ' ')}に関する詳細な情報を提供します。`,
    content: `
      <p>これはブログ記事「${slug.replace(/-/g, ' ')}」のプレースホルダーコンテンツです。</p>
      <p>ここにWordPressから取得した記事の本文が表示されます。</p>
      <p>記事のキーワードや解決策に関する詳細な情報が続きます。</p>
    `,
    imageUrl: 'https://ik.imagekit.io/FLATUPGYM/blog-placeholder.jpg?tr=q-auto,f-auto',
    publishDate: '2025年8月26日',
    category: 'トレーニング',
    keywords: '記事のキーワード, 解決策',
  };

  const blogPostBreadcrumbs = breadcrumbJsonLd([
    { name: 'Home', url: 'https://flat-up.jp/' },
    { name: 'ブログ', url: 'https://flat-up.jp/blog' },
    { name: blogPost.title, url: `https://flat-up.jp/blog/${slug}` },
  ]);

  return (
    <div className="min-h-screen">
      <SEO
        title={`${blogPost.title} - 成田のキックボクシングジム FLATUPGYM`}
        description={`${blogPost.description}。この記事では、${blogPost.keywords}の原因と、自宅で簡単にできる解決策をプロのトレーナーが分かりやすく解説します。`}
        jsonLd={blogPostBreadcrumbs}
      />
      <Header />

      <main>
        <section className="py-24 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-8">
                {blogPost.title}
              </h1>
              <p className="text-gray-600 text-sm mb-4">
                公開日: {blogPost.publishDate} | カテゴリ: {blogPost.category}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <OptimizedImage src={blogPost.imageUrl} alt={blogPost.title} width={800} height={400} className="w-full h-auto object-cover rounded-md mb-8" />
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} className="prose max-w-none" />
            </div>

            <div className="text-center mt-12">
              <Link href="/blog" className="text-blue-600 hover:underline">
                ← ブログ記事一覧に戻る
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
