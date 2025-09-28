import { NextPage } from 'next';
import Link from 'next/link';


import SEO from '../../components/SEO';
import { breadcrumbJsonLd } from '../../lib/json-ld';
import { CheckCircle, Star } from 'lucide-react';

const PricingPage: NextPage = () => {
  const pageTitle = "料金・システム";
  const pageDescription = "FLATUPGYMの料金プランとシステムのご案内です。明朗会計で安心、あなたに合ったプランをお選びいただけます。";

  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', url: 'https://flat-up.jp' },
    { name: '料金・システム', url: 'https://flat-up.jp/pricing' },
  ]);

  const monthlyPlans = [
    {
      title: "キッズプラン",
      target: "小学1年生〜6年生（男女共通）",
      price: "7,700",
      features: ["週3回レッスン/通い放題", "護身術・体力向上", "アマチュア選手育成", "礼儀・マナー指導"],
      buttonText: "体験レッスンを予約",
      badge: null,
    },
    {
      title: "レディースプラン",
      target: "女性専用",
      price: "8,800",
      features: ["週3回レッスン", "護身術・ストレス解消", "美容・シェイプアップ", "女性専用時間帯", "子連れ参加OK"],
      buttonText: "体験レッスンを予約",
      badge: "人気No.1",
    },
    {
      title: "メンズプラン",
      target: "高校生以上の男性",
      price: "9,900",
      features: ["週3回レッスン🟰通い放題", "本格キックボクシング", "MMA総合格闘技", "BJJ柔術", "フィットネス／ダイエット〜", "アスリートプロ選手の練習としても最適なメニューを提案", "筋力アップ・ダイエット", "ストレス発散効果"],
      buttonText: "体験レッスンを予約",
      badge: null,
    },
  ];

  const ticketPlans = [
    {
      title: "ビジター",
      target: "1回だけ体験したい方",
      price: "3,000",
      priceUnit: "1回（税込）",
      features: ["全クラス参加可能", "グローブレンタル込み", "当日予約OK"],
      buttonText: "ビジター予約",
      badge: null,
    },
    {
      title: "回数券（6回）",
      target: "半年間有効",
      price: "15,000",
      priceUnit: "6回分（税込）",
      features: ["1回あたり¥2,500", "自由なペースで通える", "ビジターより500円お得", "半年間ゆっくり使える"],
      buttonText: "回数券購入",
      badge: null,
    },
    {
      title: "回数券（12回）",
      target: "1年間有効",
      price: "30,000",
      priceUnit: "12回分（税込）",
      features: ["1回あたり¥2,500", "1年間たっぷり使える", "ビジターより6,000円お得", "月会費より安い場合も"],
      buttonText: "回数券購入",
      badge: "最もお得",
    },
  ];

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} jsonLd={breadcrumbs} />
      
      <main className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative h-80 flex items-center justify-center text-white text-center px-4">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://ik.imagekit.io/FLATUPGYM/tr:q-auto,f-auto/ryoukinn.png")' }}
          ></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold">{pageTitle}</h1>
            <p className="mt-4 text-xl md:text-2xl font-semibold">明朗会計で安心</p>
            <p className="mt-2 text-lg">分かりやすい料金設定であなたに合ったプランを♪</p>
          </div>
        </section>

        {/* Monthly Plans Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-4">料金プラン</h2>
            <p className="text-center text-gray-600 mb-12">入会金・年会費なし！月額制で安心して続けられます♪</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {monthlyPlans.map((plan) => (
                <div key={plan.title} className="bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col relative border-2 border-transparent hover:border-pink-500 transition-all duration-300 transform hover:-translate-y-2">
                  {plan.badge && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pink-500 text-white text-sm font-bold px-4 py-1 rounded-full flex items-center">
                      <Star className="w-4 h-4 mr-1" /> {plan.badge}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{plan.target}</p>
                  <p className="text-4xl font-extrabold mb-1">¥{plan.price}</p>
                  <p className="text-sm font-medium text-gray-600 mb-6">月額（税込）</p>
                  <ul className="space-y-3 text-left mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-auto block w-full py-3 px-6 rounded-lg bg-pink-500 text-white font-bold text-lg hover:bg-pink-600 transition-colors duration-300">
                    {plan.buttonText}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ticket Plans Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-4">ビジター・回数券システム</h2>
            <p className="text-center text-gray-600 mb-12">まずは気軽に体験したい方におすすめ！</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ticketPlans.map((plan) => (
                <div key={plan.title} className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center flex flex-col relative border-2 border-gray-200 hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2">
                   {plan.badge && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-white text-sm font-bold px-4 py-1 rounded-full flex items-center">
                      <Star className="w-4 h-4 mr-1" /> {plan.badge}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{plan.target}</p>
                  <p className="text-4xl font-extrabold mb-1">¥{plan.price}</p>
                  <p className="text-sm font-medium text-gray-600 mb-6">{plan.priceUnit}</p>
                  <ul className="space-y-3 text-left mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-auto block w-full py-3 px-6 rounded-lg bg-gray-800 text-white font-bold text-lg hover:bg-gray-900 transition-colors duration-300">
                    {plan.buttonText}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Info Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-12">安心のシステム・特典</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="font-bold text-lg">入会金半額</h3><p>通常¥10,000の入会金が今なら半額！体験からそのまま入会でさらにお得に。</p></div>
                <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="font-bold text-lg">体験時は手ぶらでOK</h3><p>グローブ・プロテクターは無料レンタル。タオルと飲み物だけお持ちください。</p></div>
                <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="font-bold text-lg">ひとりにさせません</h3><p>いつでもGYM公式LINEで相談・サポート可能。24時間対応。</p></div>
                <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="font-bold text-lg">グローブプレゼント</h3><p>毎月先着5名様限定で新品グローブをプレゼント！</p></div>
            </div>
            <div className="mt-16 bg-blue-50 p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-bold mb-4">体験レッスンについて</h3>
                <p className="mb-4">より気軽に体験していただけるよう、体験時間が<span className="font-bold">60分</span>から<span className="font-bold text-xl text-pink-700">30分</span>に変更になりました♪</p>
                <p>無料体験は1回限りですが、不安な方は有料体験(¥3,000)も可能です。納得してからの入会をおすすめします。</p>
            </div>
            <div className="mt-16">
                <h3 className="text-2xl font-bold text-center mb-8">お支払い方法</h3>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="text-center"> <h4 className="font-bold text-lg">会費PAYシステム</h4> <p>前月末までのお手続きで退会・休会可能</p></div>
                    <div className="text-center"> <h4 className="font-bold text-lg">口座引き落とし</h4> <p>毎月27日自動引き落とし</p></div>
                    <div className="text-center"> <h4 className="font-bold text-lg">クレジットカード</h4> <p>VISA / MasterCard / JCB対応</p></div>
                </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-pink-500 text-white text-center py-16">
            <h2 className="text-xl md:text-2xl font-bold mb-4">まずは無料体験から始めませんか？</h2>
            <p className="mb-8">料金やシステムについて詳しく説明いたします。<br/>不安な点は何でもお聞きください♪</p>
            <Link href="/contact" className="bg-white text-pink-700 font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300">
                無料体験・相談予約
            </Link>
        </section>
      </main>
      
    </>
  );
};

export default PricingPage;