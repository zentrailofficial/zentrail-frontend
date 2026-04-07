import Discription from "@/component/discription/Discription";
import React from "react";
import Banner from "@/comman-component/banner";
import CustomButton from "@/comman-component/customButton";
import TripDetails from "@/component/discription/TripDetails";
import DiscriptionGallery from "@/component/discription/DiscriptionGallery";
import Itinerary from "@/component/discription/Itinerary";
import { Inclusions } from "@/component/discription/Inclusions";
import FAQ from "@/comman-component/commonFaq";
import Link from "next/link";
import ExploreMoreDiscription from "@/component/discription/ExploreMoreDiscription";
import LastSection from "@/component/discription/LastSection";
import axios from "axios";
import { BASE_URL_API } from "@/lib/common";
import SEO from "@/comman-component/Seo";
import { useRouter } from "next/navigation";
import LinkButton from "@/comman-component/LinkButtton/LinkButton";

const DiscriptionPage = ({ apiData, upcommingTrips }) => {
  const router = useRouter();
  return (
    <>
      <SEO
        metaTitle={apiData?.seo?.metaTitle}
        metaDescription={apiData?.seo?.metaDescription}
        keywords={apiData?.seo?.keywords}
        ogTitle={apiData?.seo?.metaTitle}
        ogDescription={apiData?.seo?.metaDescription}
        twitterTitle={apiData?.seo?.metaTitle}
        twitterDescription={apiData?.seo?.metaDescription}
        robots="index, follow"
      />
      <Banner
        bgImage={apiData?.featuredImage?.url}
        title={apiData?.title}
        description={apiData?.subtitle}
        button={
          <Link href={`/bookingform/${apiData?.slug}`}>
            <LinkButton text="Book Now" />
          </Link>
          // <CustomButton ariaLabel={"Book Now"} onClick={() => router.push(`/bookingform/${apiData?.slug}`)}>{`Book Now`}</CustomButton>
        }
        breadcom={[{ title: `${apiData?.slug}` }]}
      />
      <Discription apiData={apiData}></Discription>
      <TripDetails description={apiData?.description} />
      <Itinerary apiData={apiData?.itinerary} />
      <Inclusions
        inclusions={apiData?.inclusions}
        exclusions={apiData?.exclusions}
      />
      <DiscriptionGallery
        images={apiData?.gallery}
        // images={apiData?.gallery?.map((val) => val.url)}
        //  alttext={apiData?.gallery?.map((val) => val.alt)}
      />
      <ExploreMoreDiscription upcommingTrips={upcommingTrips} />
      <FAQ faqData={apiData?.faq} />
      <LastSection />
    </>
  );
};

export default DiscriptionPage;

export async function getServerSideProps(context) {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400",
  );

  const { slug } = context.params; // 👈 get slug value from URL
  let apiData = null;
  let upcommingTrips = null;

  try {
    const res = await axios.get(
      `${BASE_URL_API}travel-packages/travel/packages/slug?slug=${slug}`,
    );

    const res2 = await axios.get(
      `${BASE_URL_API}travel-packages/travel/getalltravelpackage?page=1&limit=4`,
    );
    upcommingTrips = res2?.data?.data;
    apiData = res?.data?.data;
  } catch (err) {
    console.error("SSR API error:", err.message);
  }
  if (!apiData) {
    return {
      notFound: true,
    };
  }
  return {
    props: { apiData, upcommingTrips },
  };
}
