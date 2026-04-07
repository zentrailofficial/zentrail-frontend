import { Avatar, IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import CustomButton from "../customButton";
import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useAuth } from "@/context/AuthContext";
import { apiClient } from "@/lib/api-client";
import { FaArrowRightLong } from "react-icons/fa6";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LinkButton from "../LinkButtton/LinkButton";
import HeadBar from "../headBar/HeadBar";

export default function Navbar() {
  const { user } = useAuth();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [opensubmenu, setopensubmenu] = useState(false);
  const sidebarRef = useRef(null);
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isItemActive = (href) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const [menuItems, setMenuItems] = useState([
    {
      label: "about Us",
      icon: "/icons/about.webp",
      link: "/about-us",
    },
    {
      label: "Category",
      icon: "/icons/category.webp",
      link: "#",
      submenu: [],
    },
    {
      label: "Resources",
      icon: "/icons/resources.webp",
      link: "#",
      submenu: [
        {
          label: "Blogs",
          icon: "/icons/blog.webp",
          link: "/blogs",
        },
        {
          label: "News",
          icon: "/icons/news.webp",
          link: "/travel-news",
        },
        {
          label: "Gallery",
          icon: "/icons/gallery.webp",
          link: "/gallery",
        },
      ],
    },
    {
      label: "Contact",
      icon: "/icons/contact.webp",
      link: "/contact-us",
    },
  ]);

  const array = [
    "/icons/moodbased1.svg",
    "/icons/moodbased2.svg",
    "/icons/moodbased3.svg",
    "/icons/moodbased4.svg",
    "/icons/moodbased5.svg",
    "/icons/moodbased1.svg",
    "/icons/moodbased2.svg",
    "/icons/moodbased3.svg",
    "/icons/moodbased4.svg",
    "/icons/moodbased5.svg",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
          setopensubmenu(false);
          setIsOpen(false);
        } else {
          if (!isVisible) {
            setTimeout(() => {
              setIsVisible(true);
            }, 10);
          }
        }
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [lastScrollY, isVisible]);

  const toggleSubmenu = (label) => {
    setopensubmenu((prev) => (prev === label ? null : label));
  };

  const initApi = async () => {
    try {
      const categorys = await apiClient("category/travel/non-blog-categories");
      const categorylist = categorys?.data?.slice(0, 5);
      let submenu = categorylist?.map((item, i) => ({
        label: item.name,
        icon: array[i],
        link: `/${item.uid}`,
      }));
      submenu = submenu?.sort((a, b) => {
        if (a.label.toLowerCase().includes("upcoming")) return -1;
        if (b.label.toLowerCase().includes("upcoming")) return 1;
        return 0;
      });
      setMenuItems((prev) =>
        prev.map((menu) =>
          menu.label === "Category" ? { ...menu, submenu } : menu
        )
      );
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    initApi();
  }, []);

  return (
    <div className="w-full bg-white shadow-sm h-[80px]  ">
      <HeadBar />
      <nav
        className={`w-full bg-[#fff] shadow-sm fixed z-40  top-[40px] h-[80px] sm:h-[100px]
         ${isVisible
            ? "translate-y-0 transition-transform duration-100 ease-in-out"
            : "-translate-y-full transition-transform duration-900 ease-in-out"
          }`}
      >
        <div className="custom-container flex items-center justify-between px-2 py-1">
          <Link href={"/"} className="flex flex-col items-center text-center">
            <div className="flex flex-col w-12  relative">
              <Image
                src="/zantraillogo.png"
                alt="logo"
                layout="responsive"
                width={100}
                height={100}
                quality={100}
              />
            </div>
            <span className="text-base text-[14px] sm:text-[16px] mt-1 font-bold text[#1A2D1A] dm_sans">
              ZEN TRAIL
            </span>
          </Link>

          <div className=" hidden md:flex  md:gap-[20px] lg:gap-[65px] items-center text-center capitalize">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setopensubmenu(item.label)}
                onMouseLeave={() => setopensubmenu(null)}
              >
                {item.submenu ? (
                  <div className="flex flex-col items-center cursor-pointer h-[80px] justify-center">
                    <Image
                      width={100}
                      quality={100}
                      height={100}
                      src={item.icon}
                      alt={`${item.label}logos`}
                      className="w-[30px] h-[30px] mb-0.5"
                    />
                    <span
                      className={`dm_sans capitalize font-medium ${
                        isItemActive(item.link)
                        ? "text-[#35C0F0]"
                        : "text-[#1A2E33]"
                        }`}
                    >
                      {item.label}
                    </span>
                  </div>
                ) : (
                  <Link
                    href={item.link}
                    className="flex flex-col items-center text-[14px] xl:text-[16px] h-[80px] justify-center"
                  >
                    <Image
                      width={100}
                      quality={100}
                      height={100}
                      src={item.icon}
                      alt={`${item.label}logos`}
                      className="w-[30px] h-[30px] mb-0.5"
                    />
                    <span
                      className={`dm_sans font-medium capitalize ${
                        isItemActive(item.link)
                        ? "text-[#35C0F0]"
                        : "text-[#1A2E33]"
                        }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                )}

                {/* Submenu */}
                {item.submenu && opensubmenu === item.label && (
                  <div className="absolute top-[75px] bg-white w-[300px] shadow-lg z-50 transition-all duration-300 ease-in-out">
                    {item.submenu.map((val) => (
                      <Link
                        key={val.label}
                        href={val.link}
                        className="flex group items-center gap-3 responsive-text py-1 px-3 hover:bg-indigo-50 border-b border-[#ccc]"
                        onClick={() => setopensubmenu(null)}
                      >
                        <Image
                          width={24}
                          height={24}
                          src={val.icon}
                          alt={`${item.label}logos`}
                        />
                        <div className="flex justify-between w-full capitalize items-center">
                          <span
                            className={`dm_sans text-[14px] font-medium capitalize ${
                              isItemActive(val.link)
                              ? "text-[#35C0F0]"
                              : "text-[#1A2E33]"
                              }`}
                          >
                            {val.label}
                          </span>
                          <FaArrowRightLong
                            color="green"
                            className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={`https://wa.me/${"+91 8287316546".replace(/\s/g, "")} `}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline cursor-pointer"
            >
              <Image
                src="/icons/whatsup.png"
                alt="WhatsApp"
                width={28}
                height={28}
              />
            </Link>
            {!user?.isLoggedIn && (
              <Link href="/signup">
                <LinkButton text="Your Trail" />
              </Link>
            )}
            {user?.isLoggedIn && (
              <div>
                {user?.profile?.profilePic && user?.profile?.profilePic !== "undefined" ? (
                  <div
                    onClick={() => router.push("/profile")}
                    className="relative size-12 cursor-pointer overflow-hidden rounded-full"
                  >
                    <Image src={user?.profile?.profilePic} fill alt="Image" className="object-cover" />
                  </div>
                ) : (
                  <Avatar
                    onClick={() => router.push("/profile")}
                    title="Profile"
                    sizes="large"
                    className="cursor-pointer"
                  >
                    {user?.profile?.fullName.charAt(0).toUpperCase()}
                  </Avatar>
                )}
              </div>
            )}
            <div className="md:hidden">
              <IconButton aria-label="open" onClick={() => setIsOpen(true)}>
                <MdOutlineMenu />
              </IconButton>
            </div>
          </div>

          {isOpen && (
            <div
              className="fixed inset-0 z-40 
               bg-gradient-to-br from-black/60 via-black/40 to-transparent"
              onClick={() => setIsOpen(false)}
            ></div>
          )}

          <div
            ref={sidebarRef}
            className={`fixed top-0 right-0 h-[calc(100vh+100px)] w-80 bg-[white] shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
              isOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <div className="flex justify-between p-4">
              <Link href={"/"} onClick={() => setIsOpen(false)}>
                <div className="size-[60px] relative shrink-0">
                  <Image
                    src="/zantraillogo.png"
                    alt="Zen Trail logoo"
                    layout="responsive"
                    width={100}
                    height={100}
                    quality={100}
                  />
                </div>
              </Link>
              <IconButton aria-label="close" onClick={() => setIsOpen(false)}>
                <MdClose />
              </IconButton>
            </div>
            <div className="flex flex-col items-start px-6 gap-6 mt-4">
              {menuItems.map((item) => (
                <div key={item.label} className="relative">
                  {/* Menu item */}
                  {item.submenu ? (
                    <div
                      className="flex gap-5 items-center cursor-pointer"
                      // onClick={() => setopensubmenu((prev) => !prev)}
                      onClick={() => toggleSubmenu(item.label)}
                    >
                      <Image
                        width={24}
                        height={24}
                        src={item.icon}
                        alt={`${item.label}logos`}
                        className="w-[35px] h-[35px] mb-0.5"
                      />
                      <span
                        className={`dm_sans font-medium capitalize ${
                          isItemActive(item.link)
                          ? "text-[#35C0F0]"
                          : "text-[#1A2E33]"
                          }`}
                      >
                        {item.label}
                      </span>
                      {opensubmenu === item.label ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.link}
                      className="flex gap-5 items-center text-[14px] xl:text-[16px]"
                      onClick={() => setIsOpen(false)}
                    >
                      <Image
                        width={24}
                        height={24}
                        src={item.icon}
                        alt={`${item.label}logos`}
                        className="w-[35px] h-[35px] mb-0.5"
                      />
                      <span
                        className={`dm_sans font-medium capitalize ${
                          isItemActive(item.link)
                          ? "text-[#35C0F0]"
                          : "text-[#1A2E33]"
                          }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  )}

                  {/* Submenu */}
                  {item.submenu && opensubmenu === item.label && (
                    <div className="mt-3">
                      {item.submenu.map((val) => (
                        <Link
                          key={val.label}
                          href={val.link}
                          className="flex items-center gap-5 responsive-text px-5 p-3 hover:bg-indigo-50 border-b border-[#ccc]"
                          onClick={() => {
                            setIsOpen(false);
                            setopensubmenu(false);
                          }} // close submenu after click
                        >
                          <Image
                            width={20}
                            height={20}
                            src={val.icon}
                            alt={`${item.label}logos`}
                          />
                          <span
                            className={`dm_sans font-medium capitalize ${
                              isItemActive(val.link)
                              ? "text-[#35C0F0]"
                              : "text-[#1A2E33]"
                              }`}
                          >
                            {val.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
