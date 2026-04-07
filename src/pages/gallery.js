import Banner from "@/comman-component/banner";
import SEO from "@/comman-component/Seo";
import GalleryFilter from "@/component/gallery/GalleryFilter";
import { BASE_URL_API } from "@/lib/common";
import axios from "axios";
import React from "react";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const Gallery = ({ Gallery ,Moodbasejourney, allState}) => {
  return (
    <>
      <SEO
        // url="http://localhost:3000/aboutus"
        metaTitle="Zentrail Trekking Gallery | Batch Trek Photos & Videos"
        metaDescription="Dive into real moments from Zentrail's trekking batches. Browse authentic trek photos & videos from Kedarkantha, Deoriatal, Nag Tibba & more. Filter by trek category."
        keywords="Disclaimer of Zentrail, Offbeat travel Services in India, trekking in India, tour and trekking"
        // canonical="http://localhost:3000/aboutus"
        ogTitle="Zentrail Trekking Gallery | Batch Trek Photos & Videos"
        ogDescription="Dive into real moments from Zentrail's trekking batches. Browse authentic trek photos & videos from Kedarkantha, Deoriatal, Nag Tibba & more. Filter by trek category."
        ogImage={`${SITE_URL}/og-image.jpg`}
        twitterTitle="Zentrail Trekking Gallery | Batch Trek Photos & Videos"
        twitterDescription="Dive into real moments from Zentrail's trekking batches. Browse authentic trek photos & videos from Kedarkantha, Deoriatal, Nag Tibba & more. Filter by trek category."
        twitterImage={`${SITE_URL}/logoo.jpg`}
        robots="index, follow"
        breadcrumbItems={[
          { name: "Gallery", url: "/gallery" }
        ]}
      />
      <Banner bgImage="/gallery/gallerybanner.png" title="Gallery" breadcom={[{ title: "gallery" }]} />
      <GalleryFilter Gallery={Gallery}  Moodbasejourney={Moodbasejourney} allState={allState} />
    </>
  );
};

export default Gallery;



export async function getStaticProps() {
const res = await axios.get(`${BASE_URL_API}travel-packages/travel/gallery?page=1&limit=10`);
  const Gallery = res?.data;

  const res2 = await axios.get(`${BASE_URL_API}Moodbasejourney`);
  const Moodbasejourney = res2?.data?.data;

  const res3 = await axios.get(
    `${BASE_URL_API}travel-packages/travel/all-states`
  );
  const allState = res3?.data?.states;

return {
    props: { Gallery,Moodbasejourney, allState },
    revalidate: 60,
  };
}