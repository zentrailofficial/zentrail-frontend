import Banner from "@/comman-component/banner";
import FAQ from "@/comman-component/commonFaq";
import LatestBlogsCommon from "@/comman-component/LatestBlogsCommon";
import SEO from "@/comman-component/Seo";
import DiscriptionGallery from "@/component/discription/DiscriptionGallery";
import ExploreMore from "@/component/tourlist/ExploreMore";
import TourListFilter from "@/component/tourlist/TourListFilter";
import { BASE_URL_API } from "@/lib/common";
import axios from "axios";
import React from "react";
import style from "./../styles/blogdescription.module.css";
// import { slugsdata } from "@/json/Statejson"

const faqData = [
  {
    question: "What are the best treks in India for beginners?",
    answer:
      "We regularly publish guides on beginner-friendly treks like Triund, Kedarkantha, and Nag Tibba with details on duration, difficulty, and preparation.Keep checking out and reading about the best treks from Zentrail Travel and Trekking in India for more info.",
  },
  {
    question: "How should I prepare for a high-altitude trek?",
    answer:
      "Our Fitness & Prep blogs cover training routines, nutrition tips, and acclimatization techniques to help you get trek-ready.",
  },
  {
    question: "What should I pack for a Himalayan trek?",
    answer:
      "Check our Travel Tips section for a complete packing checklist — from must-have gear and clothing layers to safety essentials.",
  },
];

const TourList = ({ apiData, blogs, latestTreaks, seoContent, slug }) => {
  return (
    <>
      {seoContent?.metaTitle ? (
        <SEO
          metaTitle={seoContent?.metaTitle}
          metaDescription={seoContent?.metaDescription}
          keywords={seoContent?.metaKeyword}
          ogTitle={seoContent?.metaTitle}
          ogDescription={seoContent?.metaDescription}
          twitterTitle={seoContent?.metaTitle}
          twitterDescription={seoContent?.metaDescription}
          robots="index, follow"
          breadcrumbItems={[
            { name: slug[0], url: `/${slug[0]}` },
            {
              name: seoContent?.title || slug[1],
              url: `/${slug[0]}/${slug[1]}`,
            },
          ]}
        />
      ) : (
        <SEO
          metaTitle="ZenTrail | Tours & Trekking in India | Mood-Based Travel"
          metaDescription="Discover tours & trekking in India with ZenTrail. Mood-based journeys, Himalayan treks, mindful retreats & hidden escapes curated for peace, love & adventure."
          keywords="offbeat travel destinations in India, mood based travel, unexplored places in India, hidden gems in India for travel, mindful travel India, slow travel India, nature retreats in India, spiritual travel destinations India, best offbeat treks in India, digital detox getaways India, trekking places, best trekking places in India, budget tour packages, trekking in India, adventure travel India, best travel agencies in India, contact Zentrail, about Zentrail"
          ogTitle="ZenTrail | Tours & Trekking in India | Mood-Based Travel"
          ogDescription="Discover tours & trekking in India with ZenTrail. Mood-based journeys, Himalayan treks, mindful retreats & hidden escapes curated for peace, love & adventure."
          twitterTitle="ZenTrail | Tours & Trekking in India | Mood-Based Travel"
          twitterDescription="Discover tours & trekking in India with ZenTrail. Mood-based journeys, Himalayan treks, mindful retreats & hidden escapes curated for peace, love & adventure."
          robots="index, follow"
          breadcrumbItems={[
            { name: slug[0], url: `/${slug[0]}` },
            { name: slug[1], url: `/${slug[0]}/${slug[1]}` },
          ]}
        />
      )}
      <Banner
        bgImage={seoContent?.image || "/discription/hamptapass.webp"}
        title={`${seoContent?.title || slug[1]}`}
        description={seoContent?.bannertitle}
        breadcom={[
          { id: 1, title: slug[0], url: `/${slug[0]}` },
          {
            id: 2,
            title: slug[1],
          },
        ]}
      />
      <div className="custom-container">
        <div
          className={`${style.descriptionContent}  text-slate-700 dm_sans my-6`}
          dangerouslySetInnerHTML={{ __html: seoContent?.description }}
        />
      </div>

      <TourListFilter tourlist={apiData} />
      <ExploreMore latestTreaks={latestTreaks} />
      <div className="pt-5=2 md:pt-3">
        <FAQ faqData={seoContent?.faq || faqData} />
      </div>
      <DiscriptionGallery
        images={apiData?.data?.map((val) => val?.featuredImage?.url)}
      />
      <LatestBlogsCommon blogs={blogs} />
    </>
  );
};

export default TourList;

export async function getServerSideProps(context) {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400",
  );
  const { slug } = context.params || {};
  let apiData = null;
  let blogs = null;
  let latestTreaks = null;
  let seoContent = null;

  // if (!slugsdata.includes(slug[1])) {
  //   return {
  //     notFound: true,
  //   };
  // }

  try {
    // Fetch latest blogs
    const res2 = await axios.get(
      `${BASE_URL_API}blogs/all/travel?type=blog&page=1&limit=4`,
    );
    blogs = res2?.data?.blogs || [];

    const latest = await axios.get(
      `${BASE_URL_API}travel-packages/travel/getalltravelpackage?page=1&limit=4`,
    );
    latestTreaks = latest?.data;

    if (slug && slug.length > 0 && slug[0] !== "all") {
      const res = await axios.get(
        `${BASE_URL_API}travel-packages/travel/getalltravelpackage/${
          slug[1] == "all" ? "" : slug[1]
        }?page=1&limit=6`,
      );
      apiData = res?.data;
    } else {
      const res = await axios.get(
        `${BASE_URL_API}travel-packages/travel/getalltravelpackage?page=1&limit=6`,
      );
      apiData = res?.data;
    }

    const seoCont = await axios.get(
      `${BASE_URL_API}subcategory/travel/${slug[1] == "all" ? "" : slug[1]}`,
    );
    seoContent = seoCont?.data || [];
  } catch (err) {
    console.error("SSR API error:", err.message);
  }

  const redirectMap = {
    "for-peace-and-calm": "peace-and-calm",
    "for-love-and-romance": "/",
  };

  const currentSlug = slug?.[1];

  if (currentSlug && redirectMap[currentSlug]) {
    const newSlugArray = [...slug];
    newSlugArray[1] = redirectMap[currentSlug];

    return {
      redirect: {
        destination: `/${newSlugArray.join("/")}`,
        permanent: true,
      },
    };
  }

  if (!seoContent) {
    return {
      notFound: true,
    };
  }
  return {
    props: { apiData, blogs, latestTreaks, seoContent, slug },
  };
}
