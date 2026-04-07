import CustomBanner1 from "@/comman-component/customBanner1";
import SEO from "@/comman-component/Seo";
import SignupForm from "@/component/signup/SignupForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const signup = () => {
  return (
    <>
      <SEO
        // url="http://localhost:3000/signup"
        metaTitle="Signup in Zentrail | Join offbeat travel community in India"
        metaDescription="Sign up on Zentrail to join offbeat, mood-based, Mindful travel trails across India. Begin your soulful journey today with a simple & secure account creation."
        keywords="Signup in Zentrail, create travel account, mindful travel login, join offbeat travel, India travel signup"
        // canonical="http://localhost:3000/signup"
        ogTitle="Signup in Zentrail | Join offbeat travel community in India"
        ogDescription="Sign up on Zentrail to join offbeat, mood-based, Mindful travel trails across India. Begin your soulful journey today with a simple & secure account creation."
        ogImage={`${SITE_URL}/og-image.jpg`}
        twitterTitle="Signup in Zentrail | Join offbeat travel community in India"
        twitterDescription="Sign up on Zentrail to join offbeat, mood-based, Mindful travel trails across India. Begin your soulful journey today with a simple & secure account creation."
        twitterImage={`${SITE_URL}/logoo.jpg`}
        robots="index, follow"
      />
      <CustomBanner1
        title="Create Your ZenTrail Account"
        description="Your journey to offbeat, soulful travel starts here."
      />
      <div className="custom-container py-6 md:py-10">
        <h2 className="dm_sans responsiveheading2">{`Let’s begin your travel story.`}</h2>
        <p className="responsive-text text-[#4D5D60] mt-3 md:mt-6">{`Welcome to ZenTrail - where every journey begins with
                    a feeling. Whether you're in search of peace, thrill, or just something new - we help you discover destinations that match your mood.`}</p>
        <p className="responsive-text text-[#4D5D60] mt-2">{`Just sign up in a few simple steps and unlock a world of authentic, unexplored trails.`}</p>
      </div>
      <div className="bg-[#E8F8E1] py-6 md:py-10">
        <div className="custom-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="order-2 sm:order-1">
              <SignupForm />
              <p className="dm_sans font-medium text-[16px] leading-[25px] mt-2 text-slate-700">{`Already have an Account?`} <Link href="login-and-signup"><u className="font-bold text-[#39BEEF]">{`Log In`}</u></Link></p>
            </div>
            <div className="order-1 sm:order-2">
              <h2 className="dm_sans responsiveheading2 ">
                {`Let’s begin your travel story.`}
              </h2>
              <p className="responsive-text text-[#4D5D60] mt-4">
                {`Sign up in a few simple steps to unlock a world of authentic,
                unexplored trails.`}
              </p>

              {/* Image responsive scaling */}
              <div className="flex justify-center">
                <Image
                  src="/signup.svg"
                  alt="Signup Illustration"
                  className="mt-8 w-full max-w-md lg:max-w-xl"
                  width={510}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default signup;
