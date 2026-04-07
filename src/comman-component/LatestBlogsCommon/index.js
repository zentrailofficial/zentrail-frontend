// import TripCards from "@/comman-component/TripCards";
// import { Button } from "@mui/material";
// import React from "react";

// const data = [
//     {
//         id:1,
//         day:"5 days / 4 nights",
//         price:14499,
//         offer:2000,
//         title1:"Hampta Pass Trek:",
//         title2:"Gateway to Spiti",
//     },
//      {
//         id:1,
//         day:"5 days / 4 nights",
//         price:14499,
//         offer:3000,
//         title1:"Hampta Pass Trek:",
//         title2:"Gateway to Spiti",
//     },
//      {
//         id:1,
//         day:"5 days / 4 nights",
//         price:14499,
//         offer:5000,
//         title1:"Hampta Pass Trek:",
//         title2:"Gateway to Spiti",
//     }
// ]

// const LatestBlogsCommon = () => {
//   return (
//     <div className="custom-container py-6 md:py-10">
//       <h3 className="responsiveheading2 mb-5">{`Explore more`}</h3>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
//         {data.map((val) => (
//           <TripCards val={val}/>
//         ))}
//       </div>

//       <div className="flex gap-10 justify-center my-4">
//         <Button variant="contained">left</Button>
//         <Button variant="contained">right</Button>
//       </div>
//     </div>
//   );
// };

// export default LatestBlogsCommon;

"use client";
import React, { useEffect, useRef, useState } from "react";
import TripCards from "@/comman-component/TripCards";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Button } from "@mui/material";
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
      <h3 className="responsiveheading2 text-center dm_sans mb-5">Recent Blogs</h3>
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
