import Head from "next/head";

const FaqSchema = ({
  faqData,
  pageName = "Frequently Asked Questions - Zentrail",
  pageUrl = "https://www.zentrail.in",
}) => {
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    "url": pageUrl,
    name: pageName,
    alternateName: "FAQs - Zentrail",
    mainEntity: faqData?.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Head>
  );
};

export default FaqSchema;
