import Banner from "@/comman-component/banner";
import SEO from "@/comman-component/Seo";
import formStyle from "@/comman-component/TextInput/inputStyle";
import SearchInput from "@/comman-component/TextInput/SearchInput";
import BlogCategory from "@/component/blog/BlogCategory";
import BlogLastSection from "@/component/blog/BlogLastSection";
import { BASE_URL_API } from "@/lib/common";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Blog = ({ posts: initialPosts, category }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState(() => initialPosts?.blogs);
  const [loading, setLoading] = useState(false);

  // 🔎 call backend search API
  const filterBlogPost = async (query) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${BASE_URL_API}blogs/travel/search/allblog?type=blog&status=Published&query=${query}`,
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
        metaTitle="Adventure Travel Blogs from Zentrail | Best Trekking Guides |"
        metaDescription="Explore curated blogs on treks, gear tips, trail guides, and batch travel stories with Zentrail. Stay updated on the best group adventure experiences in india."
        keywords="trekking in india, travel blogs, adventure blogs, Best travel destinations in india, Trips planning in india, Zentrail travel services"
        ogTitle="Adventure Travel Blogs from Zentrail | Best Trekking Guides |"
        ogDescription="Explore curated blogs on treks, gear tips, trail guides, and batch travel stories with Zentrail. Stay updated on the best group adventure experiences in india."
        twitterTitle="Adventure Travel Blogs from Zentrail | Best Trekking Guides |"
        twitterDescription="Explore curated blogs on treks, gear tips, trail guides, and batch travel stories with Zentrail. Stay updated on the best group adventure experiences in india."
        robots="index, follow"
        // blogPosts={initialPosts?.blogs || []}  dynamically data
        isBlogList={true}
        blogPosts={[
          {
            title: "Top Winter Treks in India: A Complete Guide by Zentrail",
            uid: "best-winter-treks-in-india",
            createdAt: "2025-10-22",
            description:
              "Find detailed guides on the best winter treks in India. Know routes, difficulty, weather, and travel tips for top snow treks in Himachal & Uttarakhand.",
            image: "https://www.zentrail.in/blog/blogbanner.webp",
          },
          {
            title:
              "Dev Diwali 2025 – Date, Story, Celebration, and Travel Guide",
            uid: "dev-diwali-2025-date-story-celebration-and-travel-guide",
            createdAt: "2025-10-13",
            description:
              "Dev Diwali 2025 in Varanasi: Learn the date, rituals, story, and best spots to enjoy the divine Ganga aarti and lighting ceremony.",
            image: "https://www.zentrail.in/blog/blogbanner.webp",
          },
          {
            title:
              "What Is Dev Diwali? — The Divine Spectacle You Can't Miss in Varanasi",
            uid: "what-is-dev-diwali",
            createdAt: "2025-10-07",
            description:
              "Curious what is Dev Diwali? Explore Varanasi 2025 with glowing ghats, Ganga Aarti, boat rides, and a journey of spirituality and serenity with Zentrail.",
            image: "https://www.zentrail.in/blog/blogbanner.webp",
          },
          {
            title:
              "Discover Meghalaya: Top 7 Tourist Spots Beyond the Ordinary",
            uid: "best-places-to-visit-in-meghalaya-2025",
            createdAt: "2025-10-01",
            description:
              "Discover the best places to visit in Meghalaya with Zentrail – from Shillong and Cherrapunji waterfalls to Dawki's clear river & more famous spots you can't miss.",
            image: "https://www.zentrail.in/blog/blogbanner.webp",
          },
          {
            title: "Best Trekking Places in India for Beginners in 2025",
            uid: "beginner-trek-in-india-2025",
            createdAt: "2025-09-15",
            description:
              "New to trekking? Discover the 10 best beginner treks in India like Triund, Kedarkantha, and Valley of Flowers with Zentrail.",
            image: "https://www.zentrail.in/blog/blogbanner.webp",
          },
          {
            title:
              "Weekend Travel Packing Tips: travel-size essentials for short getaways",
            uid: "weekend-travel-packing-tips-zentrail-2025",
            createdAt: "2025-09-15",
            description:
              "Smart weekend travel packing tips by Zentrail! Seasonal packing lists for men & women, with essentials and accessories for stress-free getaways.",
            image: "https://www.zentrail.in/blog/blogbanner.webp",
          },
          {
            title:
              "Places to Visit in Rajasthan in September 2025 – Monsoon Special",
            uid: "places-to-visit-in-rajasthan-september-2025",
            createdAt: "2025-09-12",
            description:
              "Discover the best places to visit in Rajasthan this September with Zentrail – from Udaipur's lakes to Jawai's leopards, forts & monsoon escapes.",
            image: "https://www.zentrail.in/blog/blogbanner.webp",
          },
          {
            title:
              "Best Places to Visit in India This September – Travel Guide by Zentrail",
            uid: "best-places-to-visit-september-india-2025",
            createdAt: "2025-09-08",
            description:
              "Planning a trip? Discover the 6 best places to visit in India in September 2025. Explore Kerala, Spiti Valley, Udaipur, Goa, Ziro Valley & Ooty with Zentrail.",
            image: "https://www.zentrail.in/blog/blogbanner.webp",
          },
        ]}
      />
      <Banner
        bgImage="/blog/blogbanner.webp"
        title="Trail Talks: Explore, Learn & Go Beyond"
        description="Your go-to space for everything batch-based travel- from expert trekking tips and destination breakdowns to real stories from the mountains."
        // search={<TextField size="small" type="search" placeholder="Search here" sx={{ ...formStyle.input, }}/> }
        search={
          <div className="relative">
            <SearchInput
              sx={formStyle.input}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {!loading ? (
              <>
                {searchTerm.length > 2 && (
                  <div className="absolute bg-white top-[45px] rounded-[6px] w-full overflow-hidden">
                    {posts?.length > 0 ? (
                      posts?.map((val, i) => (
                        <Link
                          key={i}
                          onClick={() => setSearchTerm("")}
                          className={`line-clamp-1 p-1 dm_sans px-4 hover:bg-slate-200 ${i < posts?.length - 1 && "border-b-1 border-slate-300"} `}
                          href={`/blogs/${val?.uid}`}
                        >
                          {val?.title}
                        </Link>
                      ))
                    ) : (
                      <p className="w-full p-2 text-center">{`No blog found`}</p>
                    )}
                  </div>
                )}
              </>
            ) : (
              <p className="absolute bg-white top-[45px] rounded-[6px] w-full text-center">
                <CircularProgress size={15} />
                {/*<span className="ms-3">Loading...</span>*/}
              </p>
            )}
          </div>
        }
        breadcom={[{ title: "blogs" }]}
      />
      <BlogCategory category={category} posts={initialPosts} />

      <BlogLastSection />
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
  const res = await axios.get(
    `${BASE_URL_API}blogs/all/travel?type=blog&status=Published&page=1&limit=8`,
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
