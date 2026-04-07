

import Banner from "@/comman-component/banner";
import SEO from "@/comman-component/Seo";
import ContactForm from "@/component/contactus/ContactForm";
import ContactSection1 from "@/component/contactus/ContactSection1";
import ContactSection2 from "@/component/contactus/ContactSection2";
import ContactSection3 from "@/component/contactus/ContactSection3";

const Contactus = () => {
  return (
    <>
      <SEO
        metaTitle="Contact Zentrail- Plan offbeat travel destinations in india"
        metaDescription="Reach out Zentrail to plan peaceful getaways & offbeat travel destinations in India. Call, WhatsApp, or message us today to start your mindful travel in India. "
        keywords="offbeat travel destinations in india, Contact Zentrail, mindful travel in India"
        ogTitle="Contact Zentrail- Plan offbeat travel destinations in india"
        ogDescription="Reach out Zentrail to plan peaceful getaways & offbeat travel destinations in India. Call, WhatsApp, or message us today to start your mindful travel in India. "
        twitterTitle="Contact Zentrail- Plan offbeat travel destinations in india"
        twitterDescription="Reach out Zentrail to plan peaceful getaways & offbeat travel destinations in India. Call, WhatsApp, or message us today to start your mindful travel in India. "
        robots="index, follow"
        breadcrumbItems={[
          { name: "Contact Us", url: "/contact-us" }
        ]}
      />
      <Banner
        bgImage="/contact/contactbanner.webp"
        title="Let’s Start Your Trail to Peace, Nature & Discovery"
        breadcom={[{ title: "contact-us" }]}
      />
      <ContactSection1 />
      <ContactForm />
      <ContactSection2 />
      <ContactSection3 />
    </>
  );
};

export default Contactus;
