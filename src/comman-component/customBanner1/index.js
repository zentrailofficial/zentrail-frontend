import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { IoHome } from "react-icons/io5";

const CustomBanner1 = ({ title, description,breadcom }) => {
  return (
    <div className="bg-[#4D5D60]">
      <div className="custom-container flex items-center h-[200px] relative">
        <div className="flex flex-col md:flex-row w-full md:gap-10 ">
         {!description&&<div className="w-full  p-2 self-center">
            <h1 className="text-[#DEF2FC] text-center responsive-heading font-medium leading-tight">
              {title}
            </h1>
          </div>}

          {description&&<div className="w-full md:w-1/2 self-center">
            <h1 className="text-[#DEF2FC] responsive-heading font-medium leading-tight">
              {title}
            </h1>
          </div>}

          {description&&<div className="w-full md:w-1/2 self-center">
            <p className="text-[#DEF2FC] text-base responsive-text">
              {description}
            </p>
          </div>}
          
           {breadcom && (
            <div className="w-full absolute left-0 bottom-2 m-auto flex justify-center">
          <div className="flex items-center gap-1.5 text-white text-sm">
            <Link href="/">
              <IoHome color="rgba(255, 255, 255)" size={16} />

            </Link>
            
            <span className="text-white text-lg select-none">
              <IoMdArrowBack />
            </span>
            <p className=" dm_sans text-[15px] text-white m-0">{breadcom}</p>
          </div>
        </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default CustomBanner1;
