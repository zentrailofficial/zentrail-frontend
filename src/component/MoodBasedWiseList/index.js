import Banner from "@/comman-component/banner";
import FAQ from "@/comman-component/commonFaq";
import CustomButton from "@/comman-component/customButton";
import SEO from "@/comman-component/Seo";
import TripCards from "@/comman-component/TripCards";
import { apiClient } from "@/lib/api-client";
import React, { useEffect, useState } from "react";
import style from "../../styles/blogdescription.module.css";
import { useRouter } from "next/router";
import LinkButton from "@/comman-component/LinkButtton/LinkButton";
import Link from "next/link";

const travel_experiences = [
  {
    title: "Digital Detox",
    tagline: "Switch Off & Reconnect With Life",
    description:
      "<span>In a world full of screens and endless scrolling, a <b>digital detox travel experience</b> is the best gift you can give yourself. Our carefully curated getaways take you deep into <b>quiet Himalayan villages, riverside forest stays,</b> and <b>eco-retreats</b> where you can unplug and recharge.<br/>Here, you’ll swap Wi-Fi for waterfalls, emails for sunsets, and stress for serenity. It’s not just a trip — it’s a chance to <b>reconnect with nature, yourself, and what truly matters.</b></span>",
  },
  {
    title: "Exploration",
    tagline: "Go Beyond the Usual",
    description:
      "<span>If your heart beats for discovery, our <b>exploration travel packages</b> are made for you. Go beyond guidebooks and step into the unknown — trek through <b>untouched trails</b>, wander in <b>ancient villages</b>, and uncover <b>offbeat destinations</b> that most travelers miss.<br/>Every journey is designed to feed your curiosity and give you stories worth sharing. It’s time to travel deeper, not farther.</span>",
  },
  {
    title: "Peace & Calm",
    tagline: "Find Your Inner Balance",
    description:
      "<span>Sometimes, the best journeys are the ones that help you slow down. Our <b>peace and calm retreats</b> are perfect for those seeking mental clarity, emotional balance, and spiritual healing.<br/>Imagine meditating in the Himalayas at sunrise, practicing yoga in a forest as birds sing, or simply reading by a lake with zero distractions. These soul-soothing getaways help you disconnect from chaos and reconnect with inner peace.</span>",
  },
  {
    title: "For Adventure",
    tagline: "Live the Thrill",
    description:
      "<span>Ready to push your limits? Our <b>adventure travel packages</b> bring you closer to nature’s most thrilling experiences — from <b>Himalayan snow treks</b> and <b>river rafting</b> to <b>desert safaris</b> and <b>mountain biking</b><br/>Whether you’re an adrenaline junkie or trying adventure travel for the first time, these trips are designed to excite, challenge, and inspire you — all with expert guides and curated safety.</span>",
  },
  {
    title: "Curiosity",
    tagline: "Travel That Teaches You Something",
    description:
      "<span>If you believe travel is about learning, our <b>curiosity-driven journeys</b> are perfect for you. These experiences are designed for travelers who love to <b>understand cultures, taste local cuisines</b>, and <b>dive into history</b>.<br/>From <b>heritage walks in Rajasthan</b> to <b>eco-learning tours in the Western Ghats</b>, each trip is a journey into stories, traditions, and wisdom that stay with you long after you return.</span>",
  },
];

const MoodBasedWiseList = ({ moodbased, categoryDetails }) => {
  const router = useRouter();
  const slug = (val) => {
    const slug = val
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    return slug;
  };

  return (
    <div>
      <SEO
        metaTitle={categoryDetails[0]?.metaTitle}
        metaDescription={categoryDetails[0]?.metaDescription}
        keywords={categoryDetails[0]?.metaKeyword}
        ogTitle={categoryDetails[0]?.metaTitle}
        ogDescription={categoryDetails[0]?.metaDescription}
        twitterTitle={categoryDetails[0]?.metaTitle}
        twitterDescription={categoryDetails[0]?.metaDescription}
        robots="index, follow"
        breadcrumbItems={[
          { name: categoryDetails[0]?.name || "Travel by Mood", url: `/${categoryDetails[0]?.uid}` }
        ]}
      />
      <Banner
        bgImage={categoryDetails[0]?.image}
        title={`${categoryDetails[0]?.name}`}
        breadcom={[{ title: categoryDetails[0]?.uid }]}
        description={categoryDetails[0]?.bannertitle}
      />
      <div className="custom-container">
        <div
          className="responsive-text dm_sans my-6 quillistEditor"
          dangerouslySetInnerHTML={{ __html: categoryDetails[0]?.description }}
        />
      </div>

      <div className="bg-[#DEF2FC]  py-6 md:py-10">
        <div className="custom-container">
          {moodbased?.map((val, index) => {
            const matchedExperience = travel_experiences.find(
              (exp) => exp.title.toLowerCase() === val?.name?.toLowerCase()
            );
            return <div key={index} className="mt-5">
              <div className="flex justify-between items-center mb-3 md:mb-2">
                <h3
                  className=" dm_sans responsiveheading3 text-[#222] "
                  style={{ fontWeight: 600 }}
                >
                  {val?.name}
                </h3>

                <Link href={`/travel-by-mood/${slug(val?.name)}`}>
                  <LinkButton text=" View More" />
                </Link>
                {/* <CustomButton
                  onClick={() => {
                    router.push(`/travel-by-mood/${slug(val?.name)}`);
                  }}
                  height={35}
                  width={120}
                >
                  View More
                </CustomButton> */}
              </div>
              <div className="w-full h-1 bg-[#9ee0f7] mb-5" />
              <div> {matchedExperience && (
                <>
                  <h4 className=" dm_sans responsiveheading5 mb-2 text-[#222]">
                    {matchedExperience.tagline}
                  </h4>
                  <div
                    className={`responsive-text quillistEditor dm_sans mb-5`}
                    dangerouslySetInnerHTML={{
                      __html: matchedExperience.description,
                    }}
                  />
                </>
              )}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5">
                {val?.packages?.map((cardval, i) => <div key={i}><TripCards val={cardval} /></div>)
                }
              </div>

            </div>
          })}
        </div>
      </div>

      <div className="custom-container pt-5 md:pt-10">
        <h2 className="responsiveheading2 dm_sans text-center mb-4">{`Why We Created “Travel by Mood”`}</h2>
        <p className="responsive-text dm_sans text-[#555]">{`We created ZenTrail’s Travel by Mood to make travel more personal and meaningful. Instead of scrolling through endless destinations, you simply choose how you want to feel — and we do the rest. Our mood-based journeys are designed to help you heal, explore, grow, and reconnect with life in a way that’s deeply fulfilling.`}</p>
      </div>
      <div className="custom-container pt-2 md:pt-3">
        <FAQ faqData={categoryDetails[0]?.faq} />
      </div>
    </div>
  );
};

export default MoodBasedWiseList;
