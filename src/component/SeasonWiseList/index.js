import Banner from "@/comman-component/banner";
import FAQ from "@/comman-component/commonFaq";
import CustomButton from "@/comman-component/customButton";
import LinkButton from "@/comman-component/LinkButtton/LinkButton";
import SEO from "@/comman-component/Seo";
import TripCards from "@/comman-component/TripCards";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const slugToTitle = (slug) => {
  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const SeasonWiseList = ({
  seasonwisetour,
  categoryDetails
}) => {
  const router = useRouter();
  return (
    <div>
      <SEO
        metaTitle={categoryDetails[0]?.metaTitle}
        metaDescription={categoryDetails[0]?.metaDescription}
        keywords={categoryDetails[0]?.metaKeyword}
        ogTitle={categoryDetails[0].metaTitle}
        ogDescription={categoryDetails[0]?.metaDescription}
        twitterTitle={categoryDetails[0]?.metaTitle}
        twitterDescription={categoryDetails[0]?.metaDescription}
        robots="index, follow"
        breadcrumbItems={[
          { name: categoryDetails[0]?.name || "Travel by Season", url: `/${categoryDetails[0]?.uid}` }
        ]}
      />
      <Banner
        bgImage={categoryDetails[0]?.image}
        title={`${categoryDetails[0]?.name}`}
        breadcom={[{ title: categoryDetails[0]?.uid }]}
        description={categoryDetails[0]?.bannertitle}
      />
      <div className="custom-container">
        <div className="responsive-text dm_sans my-6 quillistEditor" dangerouslySetInnerHTML={{ __html: categoryDetails[0]?.description }} />
      </div>
      <div className="bg-[#DEF2FC]  py-6 md:py-10">
        <div className="custom-container">
          <h2 className="responsiveheading2 dm_sans text-center">{`Popular Seasonal Travel Destinations`}</h2>
          <div className="w-full h-1 bg-[#9ee0f7] my-5" />
          {seasonwisetour?.map((val, i) => {
            return (
              <div key={i}>
                <div className="flex justify-between">
                  <h3 className=" dm_sans responsiveheading3 mb-4">
                    {slugToTitle(val?.name)}
                  </h3>
                  <Link href={`/travel-by-region/${val.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <LinkButton text=" View More" />
                  </Link>
                  {/* <CustomButton onClick={() => router.push(`/travel-by-region/${val.name.toLowerCase().replace(/\s+/g, "-")}`)} height={35} width={120}>
                    View More
                  </CustomButton> */}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {val?.packages?.map((val, i) => (
                    <div key={i}><TripCards val={val} /></div>
                  ))}
                </div>
                <div className="w-full h-1 bg-[#9ee0f7] my-5" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="custom-container  pt-2 md:pt-3">
        <FAQ faqData={categoryDetails[0]?.faq} />
      </div>
    </div>
  );
};
export default SeasonWiseList