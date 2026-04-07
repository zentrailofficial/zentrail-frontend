import CustomBanner1 from '@/comman-component/customBanner1'
import PrivacyPolicy from '@/component/privacypolicy/PrivacyPolicy';
import SEO from "@/comman-component/Seo";
import React from 'react'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const privacypolicy = () => {
  return (
    <>
      <SEO
        url="http://www.zentrail.in/privacy-policy"
        metaTitle="Zentrail Privacy Policy | Best Travel Adventures in India. "
        metaDescription="Read Privacy Policy of Zentrail to know how we collect, use, and protect your personal data during bookings and browsing online. Transparency is our priority."
        keywords="Zentrail Privacy Policy, Best Travel Adventures in India, book trek online, adventure Travel India, trekking in India |"
        canonical="http://www.zentrail.in/privacy-policy"
        ogTitle="Zentrail Privacy Policy | Best Travel Adventures in India."
        ogDescription="Read Privacy Policy of Zentrail to know how we collect, use, and protect your personal data during bookings and browsing online. Transparency is our priority."
        ogImage={`${SITE_URL}/og-image.jpg`}
        twitterTitle="Zentrail Privacy Policy | Best Travel Adventures in India."
        twitterDescription="Read Privacy Policy of Zentrail to know how we collect, use, and protect your personal data during bookings and browsing online. Transparency is our priority."
        twitterImage={`${SITE_URL}/logoo.jpg`}
        robots="index, follow"
        breadcrumbItems={[
          { name: "Privacy Policy", url: "/privacy-policy" }
        ]}
      />
      <CustomBanner1 title={"Privacy Policy"} breadcom="privacy-policy"
      />
      <PrivacyPolicy></PrivacyPolicy>
    </>
  )
}

export default privacypolicy;