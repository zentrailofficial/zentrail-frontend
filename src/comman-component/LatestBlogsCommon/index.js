"use client";
import React, { useEffect, useRef, useState } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import BlogCard from "../blog/BlogCard";

const LatestBlogsCommon = ({ blogs }) => {
  const splideRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(false);

  useEffect(() => {
    if (!splideRef.current) return;

    const splide = splideRef.current.splide;

    const checkArrows = () => {
      if (splide) {
        const perPage = splide.options.perPage;
        const total = splide.length;
        setShowArrows(total > perPage);

        // update first/last states
        setIsFirst(splide.index === 0);
        setIsLast(splide.index >= total - perPage);
      }
    };

    checkArrows();

    splide.on("moved", checkArrows);
    window.addEventListener("resize", checkArrows);

    return () => {
      splide.off("moved", checkArrows);
      window.removeEventListener("resize", checkArrows);
    };
  }, [blogs]);

  return (
    <div className="custom-container py-5 md:py-10">
      <h3 className="responsiveheading2 text-center dm_sans mb-5">
        Recent Blogs
      </h3>
      <Splide
        ref={splideRef}
        options={{
          // type: "loop",
          perPage: 4,
          perMove: 1,
          autoplay: true,
          interval: 3000,
          pauseOnHover: true,
          arrows: false,
          pagination: false,
          breakpoints: {
            1024: { perPage: 3 },
            640: { perPage: 2 },
            500: { perPage: 1 },
          },
        }}
        aria-label="Explore More Trips"
      >
        {blogs?.map((val, i) => (
          <SplideSlide key={val?.uid} role="listitem">
            <div className="py-5 m-3 border-[1.2px] border-[#7A9195] rounded-[10px] hover:shadow-md hover:bg-[#DEF2FC] hover:transform-gpu transition">
              <BlogCard blogData={val} border={false} />
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {showArrows && (
        <div className="flex justify-center gap-5 mt-4">
          <button
            onClick={() => splideRef.current.splide.go("<")}
            disabled={isFirst}
            aria-label="Previous Slide"
            className={`p-2 rounded-full border text-[#37863F] border-[#37863F] cursor-pointer hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            <MdOutlineArrowBackIos size={20} />
          </button>
          <button
            onClick={() => splideRef.current.splide.go(">")}
            disabled={isLast}
            aria-label="Next Slide"
            className={`p-2 rounded-full border text-[#37863F] border-[#37863F] cursor-pointer hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            <MdOutlineArrowForwardIos size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default LatestBlogsCommon;
