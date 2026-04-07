import Banner from "@/comman-component/banner";
import CustomButton from "@/comman-component/customButton";
import LinkButton from "@/comman-component/LinkButtton/LinkButton";
import SEO from "@/comman-component/Seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
// Lazy load sections
const AboutSection2 = dynamic(() =>
  import("@/component/aboutus/AboutSection2")
);
const AboutSection3 = dynamic(() =>
  import("@/component/aboutus/AboutSection3")
);
const AboutSection4 = dynamic(() =>
  import("@/component/aboutus/AboutSection4")
);
const HeroSectionAbout = dynamic(() =>
  import("@/component/aboutus/HeroSectionAbout")
);

const AboutUs = () => {
  const router = useRouter()
  return (
    <>
      <SEO
        metaTitle="About Zentrail | Adventure Travel India | By Girdhar Sharma"
        metaDescription="Discover About Zentrail– a soulful adventure travel company founded by Girdhar Sharma to offer mood based, and offbeat travel destinations across India."
        keywords="Adventure travel India, About Zentrail, mood based travel, offbeat travel destinations in India"
        ogTitle="About Zentrail | Adventure Travel India | By Girdhar Sharma"
        ogDescription="Discover About Zentrail– a soulful adventure travel company founded by Girdhar Sharma to offer mood based, and offbeat travel destinations across India."
        twitterTitle="About Zentrail | Adventure Travel India | By Girdhar Sharma"
        twitterDescription="Discover About Zentrail– a soulful adventure travel company founded by Girdhar Sharma to offer mood based, and offbeat travel destinations across India."
        robots="index, follow"
        breadcrumbItems={[
          { name: "About Us", url: "/about-us" }
        ]}
      />

      <Banner
        bgImage="/about/aboutbanner.webp"
        title="The Story Behind ZenTrail"
        description="Where Peaceful Journeys Begin with a Real Dreamer"
        button={
            <Link href="/upcoming-trips">
                  <LinkButton text="Discover Our Journeys"  />
                </Link>
          // <CustomButton onClick={() => router.push("/upcoming-trips")}>{`Discover Our Journeys`}</CustomButton>
          }
        breadcom={[{ title: "about Us" }]}
      />
      <HeroSectionAbout />
      <AboutSection2 />
      <AboutSection3 />
      <AboutSection4 />
    </>
  );
};

export default AboutUs;
