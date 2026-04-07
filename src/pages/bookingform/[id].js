import SEO from '@/comman-component/Seo'
import { BookingForm } from '@/component/bookingform/bookingForm'
import { BASE_URL_API } from '@/lib/common';
import axios from 'axios';
import React from 'react'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const Bookingform = ({apiData}) => {
  return (
    <>
      <SEO
        url="http://www.zentrail.in/booking"
        metaTitle="Book Your Adventure with Zentrail Tours and Trekking in India  "
        metaDescription="Fill in your details to book your trekking batch with Zentrail tour and trekking in India. Simple, secure, and seamless booking online. Travel for inner peace!"
        keywords="book trek online, trekking batch booking, Zentrail tours, secure trekking seat, group trek booking, trekking in India, best treks in India"
        canonical="http://www.zentrail.in/booking"
        ogTitle="Book Your Adventure with Zentrail Tours and Trekking in India"
        ogDescription="Fill in your details to book your trekking batch with Zentrail tour and trekking in India. Simple, secure, and seamless booking online. Travel for inner peace!"
        ogImage={`${SITE_URL}/og-image.jpg`}
        twitterTitle="Book Your Adventure with Zentrail Tours and Trekking in India"
        twitterDescription="Fill in your details to book your trekking batch with Zentrail tour and trekking in India. Simple, secure, and seamless booking online. Travel for inner peace!"
        twitterImage={`${SITE_URL}/logoo.jpg`}
        robots="index, follow"
      />
      <BookingForm apiData={apiData}></BookingForm>
    </>
  )
}

export default Bookingform

export async function getServerSideProps({ params }) {
  const tourid = params.id;
  try {
    const tourdata = await axios.get(
      `${BASE_URL_API}travel-packages/travel/packages/slug?slug=${tourid}`
    );
    return {
      props: {
        apiData: tourdata?.data?.data || [],
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error.message);
    return {
      notFound: true,
    };
  }
  // let apiData = []
  // const token = context.req.cookies?.zentrail_user_token;
  //   if (!token) {
  //   return {
  //     redirect: {
  //       destination: "/",
  //       permanent: false,
  //     },
  //   };
  // }
  // let apiData = null;


  // return {
  //   props: { apiData }, // passed to component as props
  // };
}