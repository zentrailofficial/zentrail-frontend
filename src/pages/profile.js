import CustomBanner1 from "@/comman-component/customBanner1";
import SEO from "@/comman-component/Seo";
import { PreviousBooking } from "@/component/profiles/profile/previousBooking";
import { ProfilePage } from "@/component/profiles/profile/ProfilePage";
import { YourCart } from "@/component/profiles/profile/yourCart";
import { BASE_URL_API } from "@/lib/common";
import axios from "axios";
import React from "react";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const profile = ({ apiData }) => {
  return (
    <>
      <SEO
        url="http://www.zentrail.in/profile"
        metaTitle="Zentrail Profile- Personal Dashboard of Mindful Offbeat Travel"
        metaDescription="Manage your Zentrail profile details. Update contact info, preferences, and more on your travel dashboard for booking the upcoming best offbeat treks in India."
        keywords=" ZenTrail profile, travel dashboard, edit travel account, update user profile Zentrail, best offbeat treks in India."
        canonical="http://www.zentrail.in/profile"
        ogTitle="Zentrail Profile- Personal Dashboard of Mindful Offbeat Travel"
        ogDescription=" Manage your Zentrail profile details. Update contact info, preferences, and more on your travel dashboard for booking the upcoming best offbeat treks in India."
        ogImage={`${SITE_URL}/og-image.jpg`}
        twitterTitle="Zentrail Profile- Personal Dashboard of Mindful Offbeat Travel"
        twitterDescription=" Manage your Zentrail profile details. Update contact info, preferences, and more on your travel dashboard for booking the upcoming best offbeat treks in India."
        twitterImage={`${SITE_URL}/logoo.jpg`}
        robots="index, follow"
      />
      <CustomBanner1
        title="Your ZenTrail Profile"
        description="Personalize your travel experience with accurate profile details."
      />
      <ProfilePage profile={apiData?.user}></ProfilePage>
      {/* <PreviousBooking></PreviousBooking>
      <YourCart></YourCart> */}
    </>
  );
};

export default profile;

// export async function getServerSideProps({ req }) {
//   const token = req.cookies?.zentrail_user_token;
//   console.log(token);

//   if (!token) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   let apiData = "nj";
//   try {
//     const res = await axios.get(
//       `https://admin-backend-prod-xvpb.onrender.com/api/userAuth/travel/user/profile`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`, // if needed
//         },
//       }
//     );
//     console.log("res");
//     apiData = res;
//   } catch (error) {
//     console.error("Profile API error:", error.message);
//     // apiData stays null instead of crashing
//   }

//   return {
//     props: { apiData },
//   };
// }
export async function getServerSideProps(context) {
  const token = context.req.cookies?.zentrail_user_token;
  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  let apiData = null;

  try {
    const res = await axios.get(`${BASE_URL_API}userAuth/travel/user/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    apiData = res?.data;
  } catch (err) {
    console.error("SSR API error:", err.message);
  }

  return {
    props: { apiData }, // passed to component as props
  };
}
