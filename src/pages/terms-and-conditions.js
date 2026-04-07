import CustomBanner1 from '@/comman-component/customBanner1'
import { TermsAndConditons } from '@/component/termsandconditions/termsAndConditons';
import React from 'react'
import SEO from "@/comman-component/Seo";
// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const termsandconditions = () => {
  return (
    <>
      <SEO
        url="http://www.zentrail.in/terms-and-conditions"
        metaTitle="Terms & Conditions of Zentrail | Offbeat travel Services in India  "
        metaDescription=" Read the terms and conditions of Zentrail to understand your rights, responsibilities, and our travel service policies before booking your trip."
        keywords=" Terms & Conditions of Zentrail, Offbeat travel Services in India, trekking in India, Travel service policies.|"
        canonical="http://www.zentrail.in/terms-and-conditions"
        ogTitle="Terms & Conditions of Zentrail | Offbeat travel Services in India "
        ogDescription=" 	Read the terms and conditions of Zentrail to understand your rights, responsibilities, and our travel service policies before booking your trip."
        // ogImage={`${SITE_URL}/og-image.jpg`}
        twitterTitle="Terms & Conditions of Zentrail | Offbeat travel Services in India "
        twitterDescription="Read the terms and conditions of Zentrail to understand your rights, responsibilities, and our travel service policies before booking your trip."
        // twitterImage={`${SITE_URL}/logoo.jpg`}
        robots="index, follow"
        breadcrumbItems={[
          { name: "Terms & Conditions", url: "/terms-and-conditions" }
        ]}
      />
    <CustomBanner1 title={"Terms & Conditions"} breadcom="terms-and-conditions"
 />
    <TermsAndConditons />
    </>
  )
}

export default termsandconditions;