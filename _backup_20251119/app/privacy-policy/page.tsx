'use client';


import SEO from '@/components/SEO';
import { breadcrumbJsonLd } from '@/lib/json-ld';

export default function PrivacyPolicy() {
  const privacyPolicyBreadcrumbs = breadcrumbJsonLd([
    { name: 'Home', url: 'https://flat-up.jp/' },
    { name: 'プライバシーポリシー', url: 'https://flat-up.jp/privacy-policy' },
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="プライバシーポリシー - FLATUPGYM"
        description="FLATUPGYMのプライバシーポリシーについてご案内します。"
        jsonLd={privacyPolicyBreadcrumbs}
      />
      

      <main className="flex-grow py-24 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
        <section className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            プライバシーポリシー
          </h1>
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p>
              FLATUPGYM（以下、「当ジム」といいます。）は、お客様の個人情報の重要性を認識し、個人情報保護に関する法令を遵守し、以下のプライバシーポリシーに基づき、お客様からお預かりした個人情報の適切な取り扱いと保護に努めます。
            </p>
            <h2 className="text-xl md:text-2xl font-bold">1. 個人情報の取得</h2>
            <p>
              当ジムは、適法かつ公正な手段によって、お客様の個人情報を取得いたします。
            </p>
            <h2 className="text-xl md:text-2xl font-bold">2. 個人情報の利用目的</h2>
            <p>
              当ジムは、お客様からお預かりした個人情報を、以下の目的のために利用いたします。
            </p>
            <ul>
              <li>お問い合わせへの対応</li>
              <li>サービスのご案内、提供</li>
              <li>イベント情報等のご案内</li>
              <li>その他、お客様への連絡のため</li>
            </ul>
            <h2 className="text-xl md:text-2xl font-bold">3. 個人情報の第三者提供</h2>
            <p>
              当ジムは、法令に定める場合を除き、個人情報を事前にお客様の同意を得ることなく、第三者に提供いたしません。
            </p>
            <h2 className="text-xl md:text-2xl font-bold">4. 個人情報の管理</h2>
            <p>
              当ジムは、個人情報の正確性を保ち、これを安全に管理いたします。個人情報の紛失、破壊、改ざん及び漏洩などを防止するため、不正アクセス、コンピューターウイルス等に対する適正な情報セキュリティ対策を講じます。
            </p>
            <h2 className="text-xl md:text-2xl font-bold">5. 個人情報の開示・訂正・利用停止・消去</h2>
            <p>
              当ジムは、お客様がご自身の個人情報の開示、訂正、利用停止、消去等を希望される場合には、ご本人であることを確認の上、法令に従って速やかに対応いたします。
            </p>
            <h2 className="text-xl md:text-2xl font-bold">6. プライバシーポリシーの変更</h2>
            <p>
              当ジムは、本プライバシーポリシーを適宜見直し、改善を図ってまいります。変更があった場合は、当ウェブサイトにてお知らせいたします。
            </p>
            <h2 className="text-xl md:text-2xl font-bold">7. お問い合わせ</h2>
            <p>
              当ジムの個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
            </p>
            <p>FLATUPGYM<br />電話番号：070-9035-3485<br />メールアドレス：flatupgym@gmail.com</p>
          </div>
        </section>
      </main>

      
    </div>
  );
}