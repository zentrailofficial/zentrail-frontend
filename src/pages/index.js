import dynamic from "next/dynamic";
import FAQ from "@/comman-component/commonFaq";
import SEO from "@/comman-component/Seo";
import Feedback from "@/component/homepage/Feedback";
import HomeAboutUs from "@/component/homepage/HomeAboutUs";
import HomeBanner from "@/component/homepage/HomeBanner";
import JournalBlog from "@/component/homepage/JournalBlog";
const LastSection = dynamic(() => import("@/component/homepage/LastSection"), {
  ssr: false,
});
import HomeCountryList from "@/component/homepage/HomeCountryList";
import MoodBasedJourneys from "@/component/homepage/MoodBasedJourneys";
import PerfectTrial from "@/component/homepage/PerfectTrial";
import SeasonList from "@/component/homepage/SeasonList";
import UpcommingTrips from "@/component/homepage/UpcommingTrips";
import axios from "axios";
import { BASE_URL_API } from "@/lib/common";

const faqData = [
  {
    question: "Which destinations do you cover?",
    answer:
      "We operate tours to Himachal Pradesh (Spiti, Jibhi, Kasol), Uttarakhand (Chopta, Rishikesh), Rajasthan (Jawai), Ladakh, and Varanasi.",
  },
  {
    question: "Are the trips beginner-friendly?",
    answer:
      "Yes! Most trips are designed for first-timers with experienced guides and comfortable stays.",
  },
  {
    question: "Are your trips safe for solo female travelers?",
    answer:
      "Absolutely. We prioritize safety with verified stays, trained trip captains, and small groups.",
  },
  {
    question: "How many people are in a group tour?",
    answer:
      "Our groups typically have 10–20 travelers for personalized experiences.",
  },
  {
    question: "How do I book a trip with ZenTrail?",
    answer:
      "Select a package, choose dates, pay online, and get instant confirmation. Or WhatsApp us at +91-8287316546.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "LocalBusiness"],
  "@id": "https://www.zentrail.in/#organization",
  name: "ZenTrail",
  alternateName: "Zentrail",
  url: "https://www.zentrail.in/",
  description:
    "ZenTrail is a Delhi-based travel company offering offbeat tour packages, treks, and group trips to Himachal Pradesh, Uttarakhand, Rajasthan, and Ladakh for young travelers.",
  slogan: "Travel Beyond the Ordinary",
  foundingDate: "2024",
  founder: {
    "@type": "Person",
    name: "Girdhar Sharma",
    jobTitle: "Founder",
    email: "girdharsharma2306@gmail.com",
  },
  email: "info@zentrail.in",
  telephone: "+91-8287316546",
  priceRange: "$$",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Bank Transfer",
  areaServed: [
    {
      "@type": "Country",
      name: "India",
    },
  ],
  serviceArea: [
    {
      "@type": "State",
      name: "Himachal Pradesh",
    },
    {
      "@type": "State",
      name: "Uttarakhand",
    },
    {
      "@type": "State",
      name: "Rajasthan",
    },
    {
      "@type": "State",
      name: "Ladakh",
    },
    {
      "@type": "State",
      name: "Uttar Pradesh",
    },
  ],
  knowsAbout: [
    "Offbeat Travel",
    "Group Tours",
    "Himalayan Treks",
    "Weekend Trips",
    "Adventure Travel",
    "Budget Travel",
    "Backpacking",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "ZenTrail Tour Packages",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Himachal Pradesh Tours",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "TouristTrip",
              name: "Spiti Valley Tour Package",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "TouristTrip",
              name: "Jibhi Tour Package",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Uttarakhand Tours",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "TouristTrip",
              name: "Chopta Tungnath Trek",
            },
          },
        ],
      },
    ],
  },
  logo: {
    "@type": "ImageObject",
    "@id": "https://www.zentrail.in/#logo",
    url: "https://www.zentrail.in/logo.png",
    contentUrl: "https://www.zentrail.in/logo.png",
    caption: "ZenTrail Logo",
    width: 512,
    height: 512,
  },
  image: {
    "@type": "ImageObject",
    url: "https://www.zentrail.in/logo.png",
    width: 512,
    height: 512,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No 500, Kakrola Housing Complex, Dwarka Mor",
    addressLocality: "Delhi",
    addressRegion: "DL",
    postalCode: "110079",
    addressCountry: {
      "@type": "Country",
      name: "IN",
    },
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.6217,
    longitude: 77.03,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8287316546",
    contactType: "Customer Support",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
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
  sameAs: [
    "https://www.facebook.com/profile.php?id=61578691529317",
    "https://www.linkedin.com/company/zentrail/",
    "https://www.instagram.com/zentrailofficial/",
    "https://x.com/Zentrail_India",
    "https://www.pinterest.com/zentrailofficial/",
    "https://www.youtube.com/@Zentrail-official",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.zentrail.in/#website",
  url: "https://www.zentrail.in/",
  name: "ZenTrail",
  description:
    "ZenTrail is an offbeat travel company in India offering group tours, treks, and weekend trips to Himachal, Uttarakhand, Rajasthan, and Ladakh.",
  inLanguage: "en-IN",
  publisher: {
    "@id": "https://www.zentrail.in/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.zentrail.in/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.zentrail.in/#webpage",
  url: "https://www.zentrail.in/",
  name: "Offbeat Group Tours & Trips Across India - ZenTrail",
  description:
    "Book Himachal & Uttarakhand tour packages from Delhi. Weekend trips to Spiti, Jibhi, Kasol & offbeat destinations. Group tours for young travelers.",
  inLanguage: "en-IN",
  datePublished: "2024-07-01",
  dateModified: "2026-04-16",
  isPartOf: {
    "@id": "https://www.zentrail.in/#website",
  },
  about: {
    "@id": "https://www.zentrail.in/#organization",
  },
  publisher: {
    "@id": "https://www.zentrail.in/#organization",
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://www.zentrail.in/banner.jpg",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.zentrail.in/#breadcrumb",
  name: "Breadcrumbs",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.zentrail.in/",
    },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://www.zentrail.in/#upcoming-trips",
  name: "Upcoming Tour Packages",
  description: "Featured tour packages and trips from ZenTrail",
  numberOfItems: 4,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "TouristTrip",
        "@id": "https://www.zentrail.in/bir-barot-tour-package",
        name: "Bir Barot Tour Package 2026",
        description:
          "Experience paragliding in Bir Billing and explore the serene Barot Valley on this adventure tour from Delhi.",
        touristType: [
          "Adventure tourists",
          "Young travelers",
          "Solo travelers",
          "Group travelers",
        ],
        itinerary: {
          "@type": "ItemList",
          name: "Bir Barot Tour Itinerary",
          description: "Complete day-by-day itinerary for Bir Barot tour",
        },
        offers: {
          "@type": "Offer",
          url: "https://www.zentrail.in/bir-barot-tour-package",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          validFrom: "2026-01-01",
        },
        provider: {
          "@id": "https://www.zentrail.in/#organization",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "TouristTrip",
        "@id": "https://www.zentrail.in/spiti-tour-package",
        name: "Spiti Valley Tour Package 2026",
        description:
          "Complete Spiti Valley circuit tour covering Kaza, Key Monastery, Chandratal Lake, Chicham Bridge, and more. 7-day adventure from Delhi.",
        touristType: [
          "Adventure tourists",
          "Young travelers",
          "Photography enthusiasts",
          "Group travelers",
        ],
        itinerary: {
          "@type": "ItemList",
          name: "Spiti Valley Tour Itinerary",
          numberOfItems: 7,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Delhi to Shimla/Narkanda",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Shimla to Chitkul via Sangla",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Chitkul to Kaza via Nako",
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "Kaza - Key Monastery, Kibber, Chicham",
            },
            {
              "@type": "ListItem",
              position: 5,
              name: "Kaza - Langza, Komic, Hikkim",
            },
            {
              "@type": "ListItem",
              position: 6,
              name: "Kaza to Chandratal to Manali",
            },
            { "@type": "ListItem", position: 7, name: "Manali to Delhi" },
          ],
        },
        offers: {
          "@type": "Offer",
          url: "https://www.zentrail.in/spiti-tour-package",
          price: "14999",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          validFrom: "2026-01-01",
          priceValidUntil: "2026-12-31",
        },
        provider: {
          "@id": "https://www.zentrail.in/#organization",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "TouristTrip",
        "@id": "https://www.zentrail.in/sangla-holi-tour-package",
        name: "Sangla Holi Tour Package 2026",
        description:
          "Celebrate the unique Holi festival in Sangla Valley, Himachal Pradesh. Experience local traditions and snow-capped mountain views.",
        touristType: [
          "Cultural tourists",
          "Festival enthusiasts",
          "Young travelers",
          "Group travelers",
        ],
        itinerary: {
          "@type": "ItemList",
          name: "Sangla Holi Tour Itinerary",
          description:
            "Complete day-by-day itinerary for Sangla Holi celebration",
        },
        offers: {
          "@type": "Offer",
          url: "https://www.zentrail.in/sangla-holi-tour-package",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          validFrom: "2026-01-01",
        },
        provider: {
          "@id": "https://www.zentrail.in/#organization",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "TouristTrip",
        "@id": "https://www.zentrail.in/shoja-tour-package",
        name: "Shoja Tour Package 2026",
        description:
          "Escape to the hidden gem of Shoja in Tirthan Valley. Perfect winter getaway with snow, Jalori Pass trek, and cozy homestays.",
        touristType: [
          "Nature lovers",
          "Peace seekers",
          "Young travelers",
          "Couples",
        ],
        itinerary: {
          "@type": "ItemList",
          name: "Shoja Tour Itinerary",
          description: "Complete day-by-day itinerary for Shoja tour",
        },
        offers: {
          "@type": "Offer",
          url: "https://www.zentrail.in/shoja-tour-package",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          validFrom: "2026-01-01",
        },
        provider: {
          "@id": "https://www.zentrail.in/#organization",
        },
      },
    },
  ],
};

const navigationSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  "@id": "https://www.zentrail.in/#navigation",
  name: "Main Navigation",
  hasPart: [
    {
      "@type": "WebPage",
      name: "About Us",
      url: "https://www.zentrail.in/about",
    },
    {
      "@type": "WebPage",
      name: "Tours",
      url: "https://www.zentrail.in/tours",
    },
    {
      "@type": "WebPage",
      name: "Treks",
      url: "https://www.zentrail.in/treks",
    },
    {
      "@type": "WebPage",
      name: "Blog",
      url: "https://www.zentrail.in/blogs",
    },
    {
      "@type": "WebPage",
      name: "Contact",
      url: "https://www.zentrail.in/contact",
    },
  ],
};

export default function Home({
  upcommingTrips,
  Moodbasejourney,
  allState,
  blogs,
}) {
  return (
    <>
      <SEO
        metaTitle="Tour Packages from Delhi | Himachal & Uttarakhand Trips - ZenTrail"
        metaDescription="Book Himachal & Uttarakhand tour packages from Delhi. Weekend trips to Spiti, Jibhi, Kasol & offbeat destinations. Group tours | 5000+ happy travelers."
        keywords="himachal tour packages, uttarakhand tours, weekend trips from delhi, spiti valley tour package, jibhi trip, kasol tour package, group tours from delhi, offbeat travel india, trekking in india, adventure tours india"
        ogTitle="Tour Packages from Delhi | Himachal & Uttarakhand Trips - ZenTrail"
        ogDescription="Book Himachal & Uttarakhand tour packages from Delhi. Weekend trips to Spiti, Jibhi, Kasol & offbeat destinations. Group tours | 5000+ happy travelers."
        twitterTitle="Tour Packages from Delhi | Himachal & Uttarakhand Trips - ZenTrail"
        twitterDescription="Book Himachal & Uttarakhand tour packages from Delhi. Weekend trips to Spiti, Jibhi, Kasol & offbeat destinations. Group tours | 5000+ happy travelers."
        robots="index, follow"
        isHomePage={true}
        externalSchemas={[
          organizationSchema,
          websiteSchema,
          webpageSchema,
          breadcrumbSchema,
          itemListSchema,
          navigationSchema,
        ]}
      />
      <div>
        <HomeBanner />
        <div id="upcomming">
          <UpcommingTrips upcommingTrips={upcommingTrips} />
        </div>
        <MoodBasedJourneys Moodbasejourney={Moodbasejourney} />
        <SeasonList />
        <HomeCountryList allState={allState} />
        <HomeAboutUs />
        <PerfectTrial />
        <JournalBlog blogs={blogs} />
        <Feedback />
        <FAQ faqData={faqData} />
        <LastSection />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get(
    `${BASE_URL_API}travel-packages/travel/getalltravelpackage?page=1&limit=4`,
  );
  var upcommingTrips = res?.data?.data || [];

  upcommingTrips = upcommingTrips.sort((a, b) => {
    if (a.title === "Dev Diwali Tour– Varanasi 2025") return -1;
    if (b.title === "Dev Diwali Tour– Varanasi 2025") return 1;
    return 0;
  });
  const res2 = await axios.get(`${BASE_URL_API}Moodbasejourney`);
  const Moodbasejourney = res2?.data?.data;

  const res3 = await axios.get(
    `${BASE_URL_API}travel-packages/travel/all-states`,
  );
  const allState = res3?.data?.states;

  const blog = await axios.get(
    `${BASE_URL_API}blogs/all/travel?type=blog&page=1&limit=4`,
  );
  const blogs = blog?.data?.blogs;

  return {
    props: { upcommingTrips, Moodbasejourney, allState, blogs },
    revalidate: 60,
  };
}
