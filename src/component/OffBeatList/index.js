import Banner from "@/comman-component/banner";
import FAQ from "@/comman-component/commonFaq";
import SEO from "@/comman-component/Seo";
import TripCards from "@/comman-component/TripCards";
import React from "react";

const OffBeatList = ({offbeat,categoryDetails}) => {
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
          { name: categoryDetails[0]?.name || "Offbeat", url: `/${categoryDetails[0]?.uid}` }
        ]}
      />
      <Banner
        bgImage={categoryDetails[0]?.image}
        title={`${categoryDetails[0]?.name}`}
        breadcom={[{ title: categoryDetails[0]?.uid }]}
        description={categoryDetails[0]?.bannertitle}
      />
      <div className="custom-container">
        <div className="responsive-text quillistEditor dm_sans my-6" dangerouslySetInnerHTML={{ __html: categoryDetails[0]?.description }}/>
      </div>
      <div className="bg-[#DEF2FC]  py-6 md:py-10">
    
        {offbeat?.length > 0 && (
          <div className="custom-container">
            <div className="flex justify-between">
              <h3 className=" dm_sans responsiveheading2 mb-4">{`Offbeat Trips`}</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5">
              {offbeat?.map((val, i) => (
                <TripCards val={val} key={i} />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="custom-container  pt-2 md:pt-3 ">
        <FAQ faqData={categoryDetails[0]?.faq} />
      </div>
    </div>
  );
};

export default OffBeatList;
