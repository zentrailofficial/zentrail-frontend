import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import ConnectUsModal from "@/comman-component/connectUsModal/ConnectUsModal";
import { useRouter } from "next/navigation";
import LinkButton from "@/comman-component/LinkButtton/LinkButton";

const ContactSection3 = () => {
  const data = [
    {
      id: 1,
      image: "/contact/contact5.svg",
      title: "Instagram",
      url: "https://www.instagram.com/zentrailofficial/",
    },
    {
      id: 2,
      image: "/contact/contact6.svg",
      title: "YouTube",
      url: "https://www.youtube.com/@Zentrail-official",
    },
    {
      id: 3,
      image: "/contact/contact7.svg",
      title: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61578691529317",
    },
    {
      id: 4,
      image: "/contact/contact8.svg",
      title: "Pinterest",
      url: "https://www.pinterest.com/zentrailofficial/",
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-[#DEF2FCBD]">
        <ConnectUsModal open={open} setOpen={setOpen} />
        <div className="custom-container py-6 md:py-10">
          <p className="responsive-text text-center sm:text-left">{`Follow us for travel tips, soulful destinations, and real stories:`}</p>
          <div className="block sm:grid grid-cols-2 items-center pt-8  gap-1 sm:gap-10 md:gap-10 lg:gap-40 xl:gap-80">
            <div className="grid grid-cols-2 gap-10 md:pr-20">
              {data?.map((val) => (
                <div key={val.id} className="flex flex-col items-center">
                  <Link
                    href={val.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="items-center  flex flex-col"
                    // className="hover:opacity-70 cursor-pointer transition-opacity relative w-[28px] h-[28px] sm:w-[33px] sm:h-[33px]"
                  >
                    <Image
                      src={val.image}
                      height={55}
                      width={55}
                      alt="contact image"
                    />
                    <p className="responsive-text mt-4">{val.title}</p>
                  </Link>
                </div>
              ))}
            </div>
            <div className="">
              <h2 className="responsiveheading2 text-center sm:text-left mt-10 sm:mt-0">
                {`Follow Our Trails, Feel the Journey`}
              </h2>
              <p className="responsive-text text-center mt-2 sm:text-left">{`Stay close to nature, even on your screen.`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-container py-6 md:py-10">
        <h2 className="responsiveheading2">{`Let’s Discover Where Your Mood Wants to Go`}</h2>
        <p className="responsive-text mt-2 mb-5">{`Not sure where to begin? Just tell us how you feel, and we’ll suggest the perfect trail — quiet forests, healing retreats, or hidden Himalayan gems.`}</p>

        <Link href="/upcoming-trips">
          <LinkButton text="Start Planning My ZenTrail" />
        </Link>
      </div>
    </>
  );
};

export default ContactSection3;
