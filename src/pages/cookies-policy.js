import CustomBanner1 from '@/comman-component/customBanner1'
import Cookies from '@/component/cookies/Cookies';
import SEO from "@/comman-component/Seo";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

import React from 'react'

const cookies = () => {
  return (
    <>
      <SEO
        url="http://www.zentrail.in/cookies-policy"
        metaTitle=" Cookies & Tracking Policy | Zentrail Tour and Trekking in India   "
        metaDescription=" Learn how Zentrail uses cookies to enhance your experience. Understand our tracking, data usage, and consent policies to ensure safe booking online with Zentrail tour and trekking. "
        keywords="Cookies & Tracking Policy,Tour and Trekking in India, Zentrail travel and trekking in india, consent and policies "
        canonical="http://www.zentrail.in/cookies-policy"
        ogTitle="  Cookies & Tracking Policy | Zentrail Tour and Trekking in India  "
        ogDescription=" 	Learn how Zentrail uses cookies to enhance your experience. Understand our tracking, data usage, and consent policies to ensure safe booking online with Zentrail tour and trekking. 	"
        ogImage={`${SITE_URL}/og-image.jpg`}
        twitterTitle="Cookies & Tracking Policy | Zentrail Tour and Trekking in India   "
        twitterDescription="Learn how Zentrail uses cookies to enhance your experience. Understand our tracking, data usage, and consent policies to ensure safe booking online with Zentrail tour and trekking.  "
        twitterImage={`${SITE_URL}/logoo.jpg`}
        robots="index, follow"
        breadcrumbItems={[
          { name: "Cookies & Tracking Policy", url: "/cookies-policy" }
        ]}
      />
      <CustomBanner1 title={"Cookies & Consent Policy"} breadcom="cookies-policy"
      />
      <Cookies></Cookies>
    </>
  )
}

export default cookies;