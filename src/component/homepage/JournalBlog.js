import BlogCard from "@/comman-component/blog/BlogCard";
import React, { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const JournalBlog = ({ blogs }) => {
  // console.log(blogs)
  const splideRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    if (!splideRef.current) return;

    const splide = splideRef.current.splide;

    const checkArrows = () => {
      if (splide) {
        const perPage = splide.options.perPage;
        const total = splide.length;
        setShowArrows(total > perPage);
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
    <div className="custom-container py-6 md:py-10 dm_sans">
      <h2 className="responsiveheading2 text-center mb-1.5">
        {`Travel Guides & Tips`}
      </h2>
      <p className="responsive-text text-[#4D5D60] text-center mb-4">
        {` Travel tips, soulful stories, and guides to India’s hidden gems.`}
      </p>
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
          <SplideSlide key={i}>
            <div
              className=" py-5 m-3  border border-[#7A9195]   rounded-[10px]    transition-all duration-300 ease-in-out 
              hover:-translate-y-2 hover:scale-[1.02]  hover:bg-[#DEF2FC] hover:shadow-lg  focus:-translate-y-2 focus:scale-[1.02] 
              focus:bg-[#DEF2FC] focus:shadow-lg  active:scale-[0.98]"
            >
              <BlogCard key={i} blogData={val} border={false} />
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {showArrows && (
        <div className="flex justify-center gap-5 mt-4">
          <button
            onClick={() => splideRef.current.splide.go("<")}
            // disabled={isFirst}
            aria-label="Previous slide"
            className={`p-2 rounded-full border text-[#37863F] border-[#37863F] cursor-pointertransition-all duration-200  hover:bg-gray-100 active:scale-95 `}
          >
            <MdOutlineArrowBackIos size={20} />
          </button>
          <button
            onClick={() => splideRef.current.splide.go(">")}
            // disabled={isLast}
            aria-label="Next slide"
            className={`p-2 rounded-full border text-[#37863F] border-[#37863F] cursor-pointertransition-all duration-200  hover:bg-gray-100 active:scale-95`}
          >
            <MdOutlineArrowForwardIos size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default JournalBlog;
