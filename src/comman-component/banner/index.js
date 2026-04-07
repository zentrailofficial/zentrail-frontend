import React from "react";
import classess from "./banner.module.css";
import Link from "next/link";
import { MdOutlineDateRange } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import Image from "next/image";
const Banner = (props) => {
  const { bgImage, title, description, button, search, breadcom, date } = props;
  return (
    <div
      className={`${classess.bannersbg} relative h-[320px]`}
      // style={{
      //   backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${bgImage})`
      // }}
    >
      <div className="h-[320px] w-full absolute inset-0">
        <Image src={bgImage} fill className="object-cover absolute inset-0" alt={title} quality={90} priority sizes="100vw"/>
      </div>
      <div className="custom-container flex flex-col justify-center sm:h-[320px] h-[320px] items-center relative">
        {date && <div className="flex items-center gap-2 text-white font-light dm_sans mb-5 "><MdOutlineDateRange size={22} /><span>{date}</span></div>}
        {title && (
          <h1 className="responsive-heading text-white text-center capitalize">{title}</h1>
        )}
        {description && (
          <h2 className="responsive-text text-white text-center">
            {description}
          </h2>
        )}
        {button && <div className="my-6 ">{button}</div>}
        {search && (
          <div className="mt-6">
            {search}
          </div>
        )}
        {breadcom?.length > 0 && (
          <div className="flex items-center gap-1.5 text-white text-sm absolute bottom-3 px-5">
            <Link href="/" aria-label="home icon">
              <IoHome color="rgba(255, 255, 255)" size={16} />
            </Link>
            <span className="text-white text-lg select-none">
              <IoMdArrowBack />
            </span>
            {breadcom?.map((item, index) => {
              return item?.url ? (
                <Link
                  href={item?.url}
                  key={index}
                  className="dm_sans flex gap-1 items-center text-[15px] text-white"
                >
                  <span>{item.title}</span> <IoMdArrowBack />
                </Link>
              ) : (
                <p className="dm_sans text-[15px] text-white m-0 line-clamp-1"> {item.title}</p>
              );
            })}
            {/* <p className="responsive-text text-white m-0">{breadcom}</p> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
