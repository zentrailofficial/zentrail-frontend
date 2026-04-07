import React from "react";
import axios from "axios";
import { BASE_URL_API } from "@/lib/common";
import SeasonWiseList from "@/component/SeasonWiseList";
import ReasonWiseList from "@/component/ReasonWiseList";
import MoodBasedWiseList from "@/component/MoodBasedWiseList";
import OffBeatList from "@/component/OffBeatList";
import UpcommingWiseList from "@/component/UpcommingWiseList";

export default function DynamicPage(props) {
  const { type } = props;

  if (type === "season") {
    return <SeasonWiseList {...props} />;
  }
  if (type === "region") {
    return <ReasonWiseList {...props} />;
  }
  if (type == "travel-by-mood") {
    return <MoodBasedWiseList {...props} />;
  }
  if (type == "upcoming") {
    return <UpcommingWiseList {...props} />;
  }
  if (type == "offbeat") {
    return <OffBeatList {...props} />;
  }
  return <div>404 | Page not found</div>;
}

export async function getServerSideProps(context) {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400",
  );

  const { slug } = context.params || {};
  let type = null;
  try {
    //////// ye category ka seo  fetch ke liye api call ///////////
    const categoryList = await axios.get(
      `${BASE_URL_API}category/getuserpanel/travel`,
    );
    const categoryDetails = categoryList?.data?.filter(
      (val) => val?.uid == slug,
    );

    if (slug === "travel-by-season") {
      type = "season";
      const seasonRes = await axios.get(
        `${BASE_URL_API}travel-packages/travel/subcategorygroup/travel-by-season`,
      );
      const seasonwisetour = seasonRes?.data?.data;
      return {
        props: {
          type,
          seasonwisetour: seasonwisetour,
          categoryDetails: categoryDetails,
        },
      };
    }
    if (slug === "travel-by-region") {
      type = "region";
      const regionsRes = await axios.get(
        `${BASE_URL_API}travel-packages/travel/subcategorygroup/travel-by-region`,
      );
      const regionswisetour = regionsRes?.data?.data;
      return {
        props: {
          type,
          regionswisetour: regionswisetour,
          categoryDetails: categoryDetails,
        },
      };
    }
    if (slug === "travel-by-mood") {
      type = "travel-by-mood";
      const res2 = await axios.get(
        `${BASE_URL_API}travel-packages/travel/subcategorygroup/travel-by-mood`,
      );
      // const Moodbasejourney = res2?.data?.data;
      // const res2 = await axios.get(`${BASE_URL_API}Moodbasejourney`);
      let Moodbasejourney = res2?.data?.data;

      Moodbasejourney = Moodbasejourney.sort((a, b) => {
        if (a.title === "Tirthan Valley Tour Package") return -1;
        if (b.title === "Tirthan Valley Tour Package") return 1;
        return 0;
      });
      //  const res2 = await axios.get(`${BASE_URL_API}travel-packages/travel/subcategorygroup/travel-by-mood`);
      //     const Moodbasejourney = res2?.data?.data;
      //     const res2 = await axios.get(`${BASE_URL_API}Moodbasejourney`);
      //     let Moodbasejourney = res2?.data?.data;

      //       Moodbasejourney = Moodbasejourney.sort((a, b) => {
      //   if (a.title === "Dev Diwali Tour– Varanasi 2025") return -1;
      //   if (b.title === "Dev Diwali Tour– Varanasi 2025") return 1;
      //   return 0;
      // });

      return {
        props: {
          type,
          moodbased: Moodbasejourney,
          categoryDetails: categoryDetails,
        },
      };
    }
    if (slug === "offbeat-trips-in-india") {
      type = "offbeat";
      const offbeat = await axios.get(
        `${BASE_URL_API}travel-packages/travel/offbeat`,
      );
      const offbeatsData = offbeat?.data?.data;
      return {
        props: {
          type,
          offbeat: offbeatsData,
          categoryDetails: categoryDetails,
        },
      };
    }
    if (slug === "upcoming-trips") {
      type = "upcoming";

      const upcommingtripsRes = await axios.get(
        `${BASE_URL_API}travel-packages/travel/getalltravelpackage?page=1&limit=8`,
      );

      let upcommingtrips = upcommingtripsRes?.data?.data || [];

      upcommingtrips = upcommingtrips.sort((a, b) => {
        if (a.title === "Tirthan Valley Tour Package") return -1;
        if (b.title === "Tirthan Valley Tour Package") return 1;
        return 0;
      });

      return {
        props: {
          type,
          // upcoming: upcommingtrips ,
          upcoming: upcommingtripsRes?.data,
          categoryDetails: categoryDetails,
        },
      };
    }
  } catch (err) {
    console.error("SSR error:", err.message);
  }
  return { notFound: true };
}
