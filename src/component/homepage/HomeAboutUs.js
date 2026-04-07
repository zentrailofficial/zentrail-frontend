import LinkButton from "@/comman-component/LinkButtton/LinkButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeAboutUs = () => {

  return (
    <div className="py-6 md:py-10">
      <div className="custom-container">
        <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-20 ">
          <div className="w-full h-52 sm:h-80 relative">
            <Image
              src="/homepage/homeaboutus.png"
              alt="homeaboutus"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-full  flex flex-col justify-center gap-5">
            <h2 className="responsiveheading2">{`About Us`}</h2>
            <p className="responsive-text text-[#1A2E33]">{`At ZenTrail, we believe travel is more than moving places it’s about moving within. Founded by Girdhar Sharma, ZenTrail curates mood-based journeys across India: from quiet Himalayan trails to soulful retreats.`}</p>
            <div>
              <Link href="/about-us">
                <LinkButton text="Know More About Us" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
