import Head from "next/head";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const SEO = ({
  metaTitle,
  metaDescription = "",
  keywords = "",
  ogTitle,
  ogDescription,
  // ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
  robots = "index, follow",
  favicon = "/favicon.ico",
  orgaizationName = "Zentrail",
  orgaizationLogo = "https://www.zentrail.in/logo.png",
  breadcrumbItems = [],
  pageName = "",
  isHomePage = false,
  isBlogList = false,
  blogPosts = [],
  externalSchemas = [],
}) => {
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.zentrail.in";

  const path = router.asPath === "/" ? "" : router.asPath;
  const url = `${baseUrl}${path}`;
  const finalOgImage = "https://www.zentrail.in/logo.png";

  if (!metaTitle) {
    return null;
  }
  // Build breadcrumb list - ALWAYS include at least 2 items
  const breadcrumbList = [];

  // Always add Home as first item
  breadcrumbList.push({
    "@type": "ListItem",
    position: 1,
    name: "Home",
    item: "https://www.zentrail.in/",
  });

  // If custom breadcrumb items provided, use them
  if (breadcrumbItems && breadcrumbItems.length > 0) {
    breadcrumbItems.forEach((item, index) => {
      breadcrumbList.push({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: item.url.startsWith("http")
          ? item.url
          : `https://www.zentrail.in${item.url}`,
      });
    });
  } else if (router.asPath !== "/") {
    // If not homepage and no custom items, add current page
    const currentPageName =
      pageName ||
      decodeURIComponent(router.asPath.split("/").filter(Boolean).pop()) ||
      "Page";
    breadcrumbList.push({
      "@type": "ListItem",
      position: 2,
      name: currentPageName,
      item: url,
    });
  } else {
    // On homepage, add a generic second item
    breadcrumbList.push({
      "@type": "ListItem",
      position: 2,
      name: "Travel Experiences",
      item: "https://www.zentrail.in/#experiences",
    });
  }

  // Structured Data with all schemas
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // Organization Schema
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": "https://www.zentrail.in/#organization",
        name: "Zentrail",
        alternateName: "ZenTrail",
        url: "https://www.zentrail.in",
        logo: {
          "@type": "ImageObject",
          "@id": "https://www.zentrail.in/#logo",
          url: "https://www.zentrail.in/logo.png",
          contentUrl: "https://www.zentrail.in/logo.png",
          caption: "Zentrail Logo",
          width: 512,
          height: 512,
        },
        image: {
          "@type": "ImageObject",
          url: "https://www.zentrail.in/logo.png",
          width: 512,
          height: 512,
        },
        description:
          "Zentrail is an offbeat and mood-based travel company in India, founded by Girdhar Sharma, offering soulful treks, mindful retreats, and unexplored journeys across India.",
        email: "info@zentrail.in",
        telephone: "+918287316546",
        founder: {
          "@type": "Person",
          name: "Girdhar Sharma",
          jobTitle: "Founder",
          email: "girdharsharma2306@gmail.com",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-8287316546",
          contactType: "Customer Support",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Plot No 500, Kakrola Housing Complex, Dwarka Mor",
          addressLocality: "Delhi",
          addressRegion: "DL",
          postalCode: "110079",
          addressCountry: "IN",
        },
        sameAs: [
          "https://www.facebook.com/profile.php?id=61578691529317",
          "https://www.linkedin.com/company/zentrail/",
          "https://www.instagram.com/zentrailofficial/",
          "https://x.com/Zentrail_India",
          "https://www.pinterest.com/zentrailofficial/",
          "https://www.youtube.com/@Zentrail-official",
        ],
        geo: {
          "@type": "GeoCoordinates",
          latitude: "28.6217",
          longitude: "77.0300",
        },
        priceRange: "$$",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "10:00",
          closes: "18:00",
        },
      },
      // Website Schema
      {
        "@type": "WebSite",
        "@id": "https://www.zentrail.in/#website",
        url: "https://www.zentrail.in",
        name: "Zentrail",
        description:
          "Zentrail is an offbeat and mood-based travel company in India offering soulful treks, mindful retreats, and unique travel experiences across unexplored destinations.",
        publisher: {
          "@id": "https://www.zentrail.in/#organization",
        },
        inLanguage: "en-IN",
      },
      // WebPage Schema - Only for homepage
      ...(isHomePage
        ? [
            {
              "@type": "WebPage",
              "@id": "https://www.zentrail.in/#webpage",
              url: "https://www.zentrail.in/",
              name: metaTitle,
              description: metaDescription,
              inLanguage: "en-IN",
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.zentrail.in/#website",
              },
              about: {
                "@type": "Organization",
                "@id": "https://www.zentrail.in/#organization",
              },
              publisher: {
                "@type": "Organization",
                name: "Zentrail",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.zentrail.in/logo.png",
                },
                url: "https://www.zentrail.in",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.zentrail.in/banner.jpg",
              },
              datePublished: "2024-07-01",
              dateModified: new Date().toISOString().split("T")[0],
            },
          ]
        : []),
      // CollectionPage Schema - Only for blog list page
      ...(isBlogList && blogPosts.length > 0
        ? [
            {
              "@type": "CollectionPage",
              "@id": `${url}#collectionpage`,
              url: url,
              name: metaTitle,
              description: metaDescription,
              inLanguage: "en-IN",
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.zentrail.in/#website",
              },
              about: {
                "@type": "Organization",
                "@id": "https://www.zentrail.in/#organization",
              },
              publisher: {
                "@type": "Organization",
                name: "Zentrail",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.zentrail.in/logo.png",
                },
                url: "https://www.zentrail.in",
              },
              hasPart: blogPosts.map((blog) => ({
                "@type": "BlogPosting",
                headline: blog.title,
                url: `https://www.zentrail.in/blogs/${blog.uid}`,
                datePublished: blog.createdAt
                  ? blog.createdAt.includes("T")
                    ? blog.createdAt
                    : `${blog.createdAt}T00:00:00+05:30`
                  : new Date().toISOString(),
                author: {
                  "@type": "Organization",
                  name: "Zentrail",
                  url: "https://www.zentrail.in",
                },
                description: blog.description || "",
                image:
                  blog.featuredImage?.url || "https://www.zentrail.in/logo.png",
              })),
            },
          ]
        : []),
      // BreadcrumbList Schema - Always include
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb    `,
        name: "Breadcrumbs",
        itemListElement: breadcrumbList,
      },
    ],
  };

  return (
    <Head>
      {/* General Meta */}
      <title>{metaTitle}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" href={favicon} type="image/x-icon" />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={ogTitle || metaTitle} />
      <meta
        property="og:description"
        content={ogDescription || metaDescription}
      />
      <meta property="og:image" content={finalOgImage} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={twitterTitle || metaTitle} />
      <meta
        name="twitter:description"
        content={twitterDescription || metaDescription}
      />
      {twitterImage && <meta name="twitter:image" content={finalOgImage} />}
      {/* 
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /> */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            externalSchemas.length ? externalSchemas : structuredData,
          ),
        }}
      />
    </Head>
  );
};

export default SEO;
