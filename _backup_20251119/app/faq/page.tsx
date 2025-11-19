import { NextPage } from 'next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import SEO from '../../components/SEO';
import { breadcrumbJsonLd } from '../../lib/json-ld';

/**
 * FAQ item structure.
 * @typedef {object} FaqItem
 * @property {string} question - The question.
 * @property {string} answer - The answer.
 */
const faqItems = [
  {
    question: "必要な持ち物はありますか？",
    answer: "動きやすい服装とタオル、着替え、飲み物があればOKです！体験レッスンではグローブの無料レンタルもございます。",
  },
  // Add more FAQ items here in the future
];

/**
 * FAQ Page component.
 * Displays a list of frequently asked questions and answers using an accordion.
 * @returns {JSX.Element} The rendered FAQ page.
 */
const FaqPage: NextPage = () => {
  const pageTitle = "よくある質問｜成田の女性・初心者向けキックボクシングジムFLATUPGYM";
  const pageDescription = "「持ち物は？」「初心者でも大丈夫？」FLATUPGYMに寄せられるよくあるご質問にお答えします。見学や無料体験もお気軽にどうぞ。";

  // JSON-LD for breadcrumbs
  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', url: 'https://flat-up.jp' },
    { name: 'よくある質問', url: 'https://flat-up.jp/faq' },
  ]);

  // JSON-LD for FAQ Page
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  // Combine schemas using @graph
  const combinedJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [breadcrumbs, faqSchema],
  };

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        jsonLd={combinedJsonLd}
      />
      
      <main className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="bg-gray-100 py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold">{pageTitle}</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">{pageDescription}</p>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto px-4 py-12 md:py-20">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="text-lg font-semibold text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      
    </>
  );
};

export default FaqPage;
