import Banner from "@/comman-component/banner";
import FAQ from "@/comman-component/commonFaq";
import SEO from "@/comman-component/Seo";
import BlogDescription from "@/component/blog/BlogDescription";
import SingleBlogSuggested from "@/component/blog/SingleBlogSuggested";
import { apiClient } from "@/lib/api-client";
import { BASE_URL_API } from "@/lib/common";
import axios from "axios";
import React from "react";

const defaultContent = {
  heading: "Suggested News",
};
const SingleBlock = ({ blog, suggestedBlogs }) => {
  const faqData = blog?.faq || [];

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const getSuffix = (d) => {
      if (d >= 11 && d <= 13) return "th";
      switch (d % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };
    return `${month} ${day}${getSuffix(day)}, ${year}`;
  }

  return (
    <>
      <SEO
        metaTitle={blog.meta?.title}
        metaDescription={blog.meta?.description}
        keywords={blog.meta?.keywords}
        ogTitle={blog.ogTags?.title}
        ogDescription={blog.ogTags?.description}
        twitterTitle={blog.meta?.title}
        twitterDescription={blog.meta?.description}
        robots="index, follow"
      />
      <div className="relative">
        <Banner
          bgImage={blog?.featuredImage?.url || "/blog/blogbanner.webp"}
          title={blog?.title}
          breadcom={[
            { id: 1, title: "news", url: "/travel-news" },
            {
              id: 2,
              title: ` ${blog?.uid}` || "News Detail",
              // url: `/blogs/${blog?.slug}`,
            },
          ]}
          date={formatDate(blog?.createdAt)}
        />
        <div className="bg-[#00000018]  inset-0" />
      </div>
      <BlogDescription blog={blog} />
      {Array.isArray(faqData) && faqData?.[0]?.question?.length > 0 && (
        <FAQ faqData={faqData} />
      )}
      <SingleBlogSuggested
        content={defaultContent}
        path="travel-news"
        suggestedBlogs={suggestedBlogs}
      />
    </>
  );
};
export default SingleBlock;

export async function getStaticPaths() {
  const res = await fetch(
    `${BASE_URL_API}blogs/all/travel?type=news&status=Published`,
  );
  const newsPosts = await res.json();

  const paths = newsPosts?.blogs?.map((post) => ({
    params: { id: post.uid },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const slug = params.id;
  try {
    const [blogRes, suggestedRes] = await Promise.all([
      axios.get(`${BASE_URL_API}blogs/${slug}/travel`),
      axios.get(
        `${BASE_URL_API}blogs/all/travel?type=news&status=Published&page=1&limit=4`,
      ),
    ]);

    return {
      props: {
        blog: blogRes?.data?.blog,
        suggestedBlogs: suggestedRes?.data?.blogs || [],
      },
      revalidate: 1800,
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error.message);
    return {
      notFound: true,
    };
  }
}
