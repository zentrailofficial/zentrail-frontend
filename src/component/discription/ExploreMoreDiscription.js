"use client";
import React, { useRef } from "react";
import TripCards from "@/comman-component/TripCards";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const ExploreMoreDiscription = ({ upcommingTrips }) => {
  const splideRef = useRef(null);

  return (
    <div className="custom-container py-2 md:py-5">
      <h3 className="responsiveheading2 mb-2">Explore more</h3>

      <Splide
        ref={splideRef}
        options={{
          type: "loop", // infinite loop
          perPage: 4, // default desktop
          perMove: 1, // slide one card at a time
          autoplay: true,
          gap: "0.5rem",
          interval: 3000,
          pauseOnHover: true,
          arrows: false, // remove default arrows
          pagination: false, // remove dots
          breakpoints: {
            1024: { perPage: 3 },
            640: { perPage: 2 },
            340: { perPage: 2 },
          },
        }}
        aria-label="Explore More Trips"
      >
        {upcommingTrips?.map((val) => (
          <SplideSlide key={val.id}>
            <div className="py-5">
              <TripCards val={val} />
            </div>
          </SplideSlide>
        ))}
      </Splide>

      <div className="flex justify-center gap-5 ">
        <button
          aria-label="Previous Slide"
          onClick={() => splideRef.current.splide.go("<")}
          className="p-3 rounded-full border-1 text-[#37863F] border-[#37863F] cursor-pointer hover:bg-gray-100 disabled:opacity-50"
        >
          <MdOutlineArrowBackIos size={20} aria-hidden="true" />
        </button>
        <button
          aria-label="Next Slide"
          onClick={() => splideRef.current.splide.go(">")}
          className="p-3 rounded-full border-1 text-[#37863F] border-[#37863F] cursor-pointer hover:bg-gray-100 disabled:opacity-50"
        >
          <MdOutlineArrowForwardIos size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default ExploreMoreDiscription;
