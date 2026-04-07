import FAQ from "@/comman-component/commonFaq";
import SEO from "@/comman-component/Seo";
import Feedback from "@/component/homepage/Feedback";
import HomeAboutUs from "@/component/homepage/HomeAboutUs";
import HomeBanner from "@/component/homepage/HomeBanner";
import JournalBlog from "@/component/homepage/JournalBlog";
import LastSection from "@/component/homepage/LastSection";
import HomeCountryList from "@/component/homepage/HomeCountryList";
import MoodBasedJourneys from "@/component/homepage/MoodBasedJourneys";
import PerfectTrial from "@/component/homepage/PerfectTrial";
import SeasonList from "@/component/homepage/SeasonList";
import UpcommingTrips from "@/component/homepage/UpcommingTrips";
import axios from "axios";
import { BASE_URL_API } from "@/lib/common";

const faqData = [
  {
    question: "What is mood-based travel?",
    answer:
      "Mood-based travel means choosing journeys that match your state of mind—whether you seek peace, adventure, love, or healing.",
  },
  {
    question: "Does ZenTrail focus only on treks?",
    answer:
      " No, we curate everything from weekend getaways and nature retreats to offbeat cultural trails.",
  },
  {
    question: "Are the trips beginner-friendly?",
    answer:
      "Absolutely! Many of our treks and retreats are designed for beginners, with guides to ensure safety and comfort.",
  },
  {
    question: "Can I customize my journey?",
    answer:
      "Yes. You can personalize itineraries based on mood, duration, and travel style.",
  },
  {
    question: "Why should I choose ZenTrail?",
    answer:
      " Because we focus on soulful, offbeat, and mindful travel that goes beyond sightseeing.",
  },
];



export default function Home({ upcommingTrips, Moodbasejourney, allState, blogs }) {
  return (
    <>
      <SEO
        metaTitle="ZenTrail | Tours & Trekking in India | Mood-Based Travel"
        metaDescription="Discover tours & trekking in India with ZenTrail. Mood-based journeys, Himalayan treks, mindful retreats & hidden escapes curated for peace, love & adventure."
        keywords="offbeat travel destinations in India, mood based travel, unexplored places in India, hidden gems in India for travel, mindful travel India, slow travel India, nature retreats in India, spiritual travel destinations India, best offbeat treks in India, digital detox getaways India, trekking places, best trekking places in India, budget tour packages, trekking in India, adventure travel India, best travel agencies in India, contact Zentrail, about Zentrail"
        ogTitle="ZenTrail | Tours & Trekking in India | Mood-Based Travel"
        ogDescription="Discover tours & trekking in India with ZenTrail. Mood-based journeys, Himalayan treks, mindful retreats & hidden escapes curated for peace, love & adventure."
        twitterTitle="ZenTrail | Tours & Trekking in India | Mood-Based Travel"
        twitterDescription="Discover tours & trekking in India with ZenTrail. Mood-based journeys, Himalayan treks, mindful retreats & hidden escapes curated for peace, love & adventure."
        robots="index, follow"
        isHomePage={true}
      />
      <div
      >
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
    `${BASE_URL_API}travel-packages/travel/getalltravelpackage?page=1&limit=4`
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
    `${BASE_URL_API}travel-packages/travel/all-states`
  );
  const allState = res3?.data?.states;

  const blog = await axios.get(
    `${BASE_URL_API}blogs/all/travel?type=blog&page=1&limit=4`
  );
  const blogs = blog?.data?.blogs;

  return {
    props: { upcommingTrips, Moodbasejourney, allState, blogs },
    revalidate: 60,
  };
}