import Banner from "@/comman-component/banner";
import SEO from "@/comman-component/Seo";
import BlogLastSection from "@/component/blog/BlogLastSection";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL_API } from "@/lib/common";
import NewsCategory from "@/component/news/NewsCategory";
const content = {
  heading: "Ready to Take the First Step?",
  paragraph:
    "Our Travel News is just the beginning. Head over to the Tours Page and find your next adventure with a batch that fits your vibe.",
};
const News = ({ posts: initialPosts, category }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState(() => initialPosts?.blogs);
  const [loading, setLoading] = useState(false);

  // 🔎 call backend search API
  const filterBlogPost = async (query) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${BASE_URL_API}blogs/travel/search/allblog?&status=Published&query=${query}`,
      );
      const results = res?.data?.results || [];
      setPosts(results);
    } catch (err) {
      console.error("Error fetching search results:", err);
    } finally {
      setLoading(false); // stop loading
    }
  };

  useEffect(() => {
    if (searchTerm.length > 2) {
      filterBlogPost(searchTerm);
    } else {
      // reset back to initial posts if query is short
      setPosts(initialPosts?.blogs);
    }
  }, [searchTerm, initialPosts?.blogs]);

  return (
    <div>
      <SEO
        metaTitle="Zentrail Travel News: Latest Travel Updates & Trends"
        metaDescription="Stay updated with Zentrail Travel News — get the latest travel updates, trending destinations, and inspiring stories from travelers across India."
        keywords="travel news, latest travel updates, India travel news, travel trends, adventure travel news, trekking updates, offbeat destinations India, travel stories, travel advisories, new trekking routes, eco tourism trends, travel inspiration, latest tourism news, sustainable travel India, Zentrail travel news, weekly travel updates, travel newsletter India, adventure travel tips, destination updates, Indian travelers news"
        ogTitle="Zentrail Travel News: Latest Travel Updates & Trends"
        ogDescription="Stay updated with Zentrail Travel News — get the latest travel updates, trending destinations, and inspiring stories from travelers across India."
        twitterTitle="Zentrail Travel News: Latest Travel Updates & Trends"
        twitterDescription="Stay updated with Zentrail Travel News — get the latest travel updates, trending destinations, and inspiring stories from travelers across India."
        robots="index, follow"
      />
      <Banner
        bgImage="/blog/blogbanner.webp"
        title="Travel News: Discover, Stay Updated & Get Inspired"
        description="Your one-stop space for all things travel — from the latest updates on destinations and travel trends to  inspiring stories from explorers across India."
        // search={<TextField size="small" type="search" placeholder="Search here" sx={{ ...formStyle.input, }}/> }
        breadcom={[{ title: "News" }]}
      />
      <NewsCategory
        category={category}
        posts={initialPosts}
        path="travel-news"
      />
      <BlogLastSection content={content} />
    </div>
  );
};

export default News;

export async function getStaticProps() {
  const res = await axios.get(
    `${BASE_URL_API}blogs/all/travel?type=news&status=Published&page=1&limit=8`,
  );
  const posts = res?.data;

  const res2 = await axios.get(
    `${BASE_URL_API}category/travel/blog-categories`,
  );
  const category = res2?.data;

  return {
    props: { posts, category },
    revalidate: 1800,
  };
}
