import buttonStyle from "@/comman-component/customButton/buttonStyle";
import CustomButton2 from "@/comman-component/customButton2";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import SEO from "@/comman-component/Seo";
import Link from "next/link";
import LinkButton from "@/comman-component/LinkButtton/LinkButton";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const NotFound = () => {
  const router = useRouter();





  return (

    <>
      <SEO
        // url="http://localhost:3000/signup"
        metaTitle="Error, 404 - Page Not Found | Zentrail"
        metaDescription="It seems like the page you're looking for has wandered off the trail. Head back to Zentrail’s home or explore our treks."
        keywords="404 - Page Not Found"
        // canonical="http://localhost:3000/signup"
        ogTitle="Error, 404 - Page Not Found | Zentrail"
        ogDescription="It seems like the page you're looking for has wandered off the trail. Head back to Zentrail’s home or explore our treks."
        ogImage={`${SITE_URL}/og-image.jpg`}
        twitterTitle="Error, 404 - Page Not Found | Zentrail"
        twitterDescription="It seems like the page you're looking for has wandered off the trail. Head back to Zentrail’s home or explore our treks."
        twitterImage={`${SITE_URL}/logoo.jpg`}
        robots="index, follow"
      />
      <div className="bg-[#DEF2FC]">
        <div className=" custom-container py-4 md:py-8">
          <div className="flex flex-col items-center justify-center text-center gap-2 sm:gap-5">
            <div className=" relative mt-2 sm:mt-16 md:mt-20 w-full sm:w-[500px] md:w-[738px] h-[150px] sm:h-[180px] md:h-[214px] mx-auto">
              <Image
                src="/404image.png"
                alt="404image "
                fill
                className="object-contain"
              />
            </div>
            <div className=" dm_sans ">
              <h1 className="responsive-heading text-[#1A2E33]">
                <span className="font-bold ">{`Oops!`}</span>{" "}
                {`Lost in the Trails?`}
              </h1>
              <h4 className="responsive-h4 text-[#4D5D60] font-medium ">
                {`This page took a wrong turn and doesn’t exist.`}
              </h4>
              <h6 className="responsive-text mt-2 md:mt-5.5 text-[#4D5D60]">
                {`But don’t worry — your next adventure is just a click away.`}
              </h6>
            </div>
            <div className="flex flex-wrap justify-center md:justify-normal  gap-1 sm:gap-2 py-1 sm:py-1.5 md:py-2.5">
              <div>
                <Link href="/">
                  <LinkButton text="Back to Home" />
                </Link>


                {/* <CustomButton2 onClick={() => router.push("/")} sx={buttonStyle.notfoundButton} >
                  Back to Home
                </CustomButton2> */}

              </div>
              <div>
                <Link href="/">
                  <LinkButton text="Explore Tour Packages" className="bg-black" />
                </Link>

                {/* <CustomButton2 onClick={() => router.push("/")} sx={buttonStyle.notfoundButton1}>
                  Explore Tour Packages
                </CustomButton2> */}

              </div>
              <div>
                <Link href="/contact-us">
                  <LinkButton text="Contact Support" className="bg-black" />
                </Link>
                {/* <CustomButton2 onClick={() => router.push("/contact-us")} sx={buttonStyle.notfoundButton2}>
                  Contact Support
                </CustomButton2> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
