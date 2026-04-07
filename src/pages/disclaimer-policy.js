import CustomBanner1 from '@/comman-component/customBanner1'
import { Disclaimer } from '@/component/disclaimer/disclaimer';
import SEO from "@/comman-component/Seo";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;


import React from 'react'

const disclaimer = () => {
  return (
    <>
     <SEO
        url="http://www.zentrail.in/disclaimer-policy"
        metaTitle="Disclaimer Policy | Zentrail tours and trekking in India   "
        metaDescription=" Read the disclaimer of Zentrail to understand the limitations of liability, use of information, external links, travel content, and insurance policies."
        keywords=" Disclaimer of Zentrail, Offbeat travel Services in India, trekking in India, tour and trekking "
        canonical="http://www.zentrail.in/disclaimer-policy"
        ogTitle="Disclaimer Policy | Zentrail tours and trekking in India  "
        ogDescription=" 	Read the disclaimer of Zentrail to understand the limitations of liability, use of information, external links, travel content, and insurance policies."
        ogImage={`${SITE_URL}/og-image.jpg`}
        twitterTitle="Disclaimer Policy | Zentrail tours and trekking in India  "
        twitterDescription="Read the disclaimer of Zentrail to understand the limitations of liability, use of information, external links, travel content, and insurance policies."
        twitterImage={`${SITE_URL}/logoo.jpg`}
        robots="index, follow"
        breadcrumbItems={[
          { name: "Disclaimer Policy", url: "/disclaimer-policy" }
        ]}
      />
    <CustomBanner1 title={"Disclaimer"} breadcom="disclaimer-policy"
 />
<Disclaimer></Disclaimer>
    </>
  )
}

export default disclaimer;