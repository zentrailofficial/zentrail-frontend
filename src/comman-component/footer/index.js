import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiTelegram2Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { apiClient } from "@/lib/api-client";
import { CircularProgress } from "@mui/material";
const Footer = () => {
  const footerData = {
    brand: {
      name: "ZEN TRAIL",
      description:
        "Discover mood-based travel experiences designed for peace, romance, adventure, and healing. Wander with purpose. Travel with feeling.",
      logo: "/footerlogo.png",
    },
    quickLinks1: [
      { label: "Home", url: "/" },
      { label: "About us", url: "/about-us" },
      { label: "Contact us", url: "/contact-us" },
      { label: "Blogs", url: "/blogs" },
      { label: "News", url: "/travel-news" },
      { label: "Gallery", url: "/gallery" },

    ],

    contactInfo: {
      phone: "+91 8287316546",
      email: "info@zentrail.in",
    },
    socialMedia: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/zentrailofficial/",
        icon: "/socialmedia/instagram.svg",
        alt: "Instagram",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=61578691529317",
        icon: "/socialmedia/facebook.svg",
        alt: "Facebook",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/zentrail",
        icon: "/socialmedia/linkedln.svg",
        alt: "LinkedIn",
      },
      {
        name: "X (Twitter)",
        url: "https://x.com/Zentrail_India",
        icon: "/socialmedia/X.svg",
        alt: "X (Twitter)",
      },
    ],
    bottomLinks: [
      { label: "Privacy Policy", url: "/privacy-policy" },
      { label: "Terms & Conditions", url: "/terms-and-conditions" },
      { label: "Cancellation Policy", url: "/cancellation-policy" },
      { label: "Disclaimer", url: "/disclaimer-policy" },
      { label: "Cookies", url: "/cookies-policy" },
    ],
    copyright: " Zentrail.in",
  };
  const pathname = usePathname();
  const [quickLinks2, setquickLinks2] = useState([]);
  const [loading, setloading] = useState(false);

  const initApi = async () => {
    setloading(true);
    try {
      const categorys = await apiClient("category/travel/non-blog-categories");
      const categorylist = categorys?.data?.slice(0, 5)
      //       const submenu = categorylist?.map((item, i) => ({
      //         label: item.name,
      //         icon: array[i],
      //         link: `/${item.uid}`,
      //       }));
      // const categorylist = await apiClient("category/travel/non-blog-categories");
      setquickLinks2(categorylist);
    } catch (error) {
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    initApi();
  }, []);
  return (
    <footer className="bg-[#17361E] text-white w-full">
      <div className="custom-container px-4 sm:px-6 lg:px-2 py-10">
        <div className="grid grid-cols-12 border-b border-gray-500 pb-8 gap-3.5  md:gap-4 lg:gap-8">
          <div className="col-span-12 sm:col-span-12  lg:col-span-5  lg:mr:28 xl:mr-32">
            <Link href="/">
              <div className="relative w-[90px] sm:w-[110px] md:w-[118px] h-[100px] sm:h-[110px] md:h-[117px] mb-2 sm:mb-4 ">
                <Image
                  src={footerData.brand.logo}
                  alt="ZEN TRAIL Logo"
                  fill
                  className=" object-contain"
                />
              </div>
            </Link>
            <div className="text-lg md:text-xl font-bold font-responsive">
              <Link href="/">{footerData.brand.name}</Link>
            </div>
            <p className="mt-5 text-[16px] footer_commanText font-responsive">
              {footerData.brand.description}
            </p>
          </div>
          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <div className=" mb-2  text-[20px]  text-[(rgba(255, 255, 255, 1))] dm_sans">{`Quick Links`}</div>
            <ol className=" list-inside space-y-1 text-[16px] text-[(rgba(255, 255, 255, 1))]">
              {footerData.quickLinks1.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.url}
                    className={`hover:underline  capitalize ${pathname === link.url ? "underline" : ""
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
          <div className="col-span-6 sm:col-span-3  lg:col-span-2">
            <div className=" text-[20px] mb-2 dm_sans">{`Category`}</div>
            {loading ? (
              <p className="flex items-center gap-2">
                <CircularProgress size={20} /> {`loading...`}
              </p>
            ) : (
              <ol className=" list-inside space-y-1   text-[16px] text-[(rgba(255, 255, 255, 1))]">
                {quickLinks2?.map((link, i) => {
                  return (
                    <li key={i}>
                      <Link
                        href={`${link.uid}`}
                        className={`hover:underline capitalize ${pathname === link.link ? "underline" : ""
                          }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ol>
            )}
          </div>
          <div className="col-span-12 sm:col-span-5  lg:col-span-3 ">
            <div className=" mb-1  sm:mb-5 text-[20px] dm_sans">{`Contact Info`}</div>
            <div className="flex items-center gap-3.5 text-sm md:text-base font-responsive ">
              <div className="relative">
                <IoLogoWhatsapp size={28} />
              </div>
              <Link
                href={`https://wa.me/${footerData.contactInfo.phone.replace(
                  /\s/g,
                  ""
                )} `}
                target="_blank"
                rel="noopener noreferrer"
                className="dm_sans hover:underline cursor-pointer"
              >
                {footerData.contactInfo.phone}
              </Link>
            </div>
            <div className="flex items-center gap-3.5 text-sm md:text-base mt-3 font-responsive  ">
              <div className="relative">
                <RiTelegram2Fill size={28} />
              </div>
              <Link
                href={`mailto:${footerData.contactInfo.email}`}
                className="dm_sans hover:underline cursor-pointer text-sm md:text-sm lg:text-md "
              >
                {footerData.contactInfo.email}
              </Link>
            </div>
            <div className="flex gap-1 sm:gap-2 mt-3.5 sm:mt-5 md:mt-6">
              {footerData.socialMedia.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 cursor-pointer transition-opacity relative w-[28px] h-[28px] sm:w-[33px] sm:h-[33px]"
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    fill
                    className="object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row   justify-between items-center text-sm md:text-base mt-4 lg:mt-7 space-y-2 md:space-y-2 lg:space-y-0">
          <div className=" text-[16px] flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[rgba(222,242,252,1)]">
            © {new Date().getFullYear()}
            <Link href="/" className="hover:underline">
              {footerData.copyright}
            </Link>
            <span className="hidden md:inline text-[#37863F]">|</span>
            <div className="flex items-center gap-2">
              <span>
                {`Developed by`}{" "}
                <Link
                  href="https://vyomedge.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="decoration-none hover:underline"
                >
                  Vyomedge
                </Link>
              </span>
              <Link
                href="https://vyomedge.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/icons/vyomedgelogo.png"}
                  alt="Vyomedge Website"
                  width={25}
                  height={25}
                  className="rounded-full "
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap  justify-center sm:justify-end text-[rgba(232,248,225,1)]">
            {footerData.bottomLinks.map((link, i) => (
              <span key={i} className="flex items-center">
                <Link
                  href={link.url}
                  className={`hover:underline capitalize ${pathname === link.url ? "underline" : ""
                    }`}
                >
                  {link.label}
                </Link>
                {i < footerData.bottomLinks.length - 1 && (
                  <span className="mx-1 sm:mx-2">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
