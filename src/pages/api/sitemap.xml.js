import { apiClient } from "@/lib/api-client";

export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/xml");
  const baseUrl = `https://${req.headers.host}`;
  const staticPages = [
    "",
    "about-us",
    "contact-us",
    "blogs",
    "travel-news",
    "gallery",
    "disclaimer-policy",
    "privacy-policy",
    "terms-and-conditions",
    "cookies-policy",
    "login-and-signup",
    "signup",
    "travel-by-mood",
    "offbeat-trips-in-india",
    "upcoming-trips",
    "cancellation-policy",
    "travel-by-season",
    "travel-by-region",
    // "trails/all",
    "travel-by-season/winter-trips",
    "travel-by-season/summer-trips",
    "travel-by-season/autumn-trips",
    "travel-by-season/monsoon-trips",
  ];

  let blogs;
  try {
    const blogResponse = await apiClient.get("blogs/all/travel?type=blog&status=Published");
    const data = blogResponse.data.blogs;

    if (Array.isArray(data)) {
      const obj = {};
      blogs = data.map((item) => (obj.page = `blogs/${item?.uid}`));
    }
  } catch (error) {
    console.log("Error fetching blogs:", error);
  }
  let news;
  try {
    const blogResponse = await apiClient.get("blogs/all/travel?type=news&status=Published");
    const data = blogResponse.data.blogs;

    if (Array.isArray(data)) {
      const obj = {};
      news = data.map((item) => (obj.page = `travel-news/${item?.uid}`));
    }
  } catch (error) {
    console.log("Error fetching blogs:", error);
  }
  let category = [];
  try {
    const moodbasedResponse = await apiClient.get("Moodbasejourney");
    const data = moodbasedResponse.data.data;

    if (Array.isArray(data)) {
      category = data.map((item) => {
        const slug = item.title
          .toLowerCase()
          .replace(/&/g, "and")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");

        return `travel-by-mood/${slug}`;
      });
    }
  } catch (error) {
    console.log("Error fetching category data:", error);
  }

  let statearray;
  try {
    const statelist = await apiClient.get(`travel-packages/travel/all-states`);
    const allState = statelist?.data?.states;
    if (Array.isArray(allState)) {
      statearray = allState.map((item) => {
        return `travel-by-region/${item.toLowerCase()}`;
      });
    }
  } catch (error) {
    console.log("Error fetching category data:", error);
  }

  let tours;
  try {
    const tourResponse = await apiClient.get(
      "/travel-packages/travel/getalltravelpackage?page=1&limit=1000"
    );
    const tourData = tourResponse.data.data;
    if (Array.isArray(tourData)) {
      const obj = {};
      tours = tourData.map((val) => (obj.page = `trail/${val.slug}`));
    }
  } catch (error) {
    console.log("Error fetching tours:", error);
  }
  // let subservices;
  // try {
  //   const subservicesResponse = await apiClient.get("api/service/AllServicePages/event");
  //   const subservicesData = subservicesResponse.data;
  //   if (Array.isArray(subservicesData)) {
  //     const obj = {};
  //     subservices  = subservicesData.map(
  //       (val) => (obj.page = `services/${val.uid}`)
  //     );
  //   }
  // } catch (error) {
  //   console.log("Error fetching subservices:", error);
  // }
  const allUrls = staticPages.concat(blogs,news, category, tours,statearray, );

  const urls = allUrls.map((page) => {
    return `
  <url>
    <loc>${baseUrl}/${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
  ${urls.join("")}
</urlset>`;

  res.status(200).send(sitemap.trim());
}

// let blogs = [];
// try {
//   const blogResponse = await apiClient.get("blogs/all/travel");
//   const data = blogResponse.data.blogs;

//   if (Array.isArray(data)) {
//     blogs = data.map((item) => `blogs/${item?.uid}`);
//   }
// } catch (error) {
//   console.log("Error fetching blogs:", error);
// }
