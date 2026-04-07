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

// const ExploreMoreDiscription = () => {
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

// export default ExploreMoreDiscription;

"use client";
import React, { useRef } from "react";
import TripCards from "@/comman-component/TripCards";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Button } from "@mui/material";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const ExploreMoreDiscription = ({upcommingTrips}) => {
  const splideRef = useRef(null);
  const data = [
    {
      id: 1,
      day: "5 days / 4 nights",
      price: 14499,
      offer: 2000,
      title1: "Hampta Pass Trek:",
      title2: "Gateway to Spiti",
      image: "/discription/descriptioncardimage1.png",
    },
    {
      id: 2,
      day: "5 days / 4 nights",
      price: 14499,
      offer: 3000,
      title1: "Hampta Pass Trek:",
      title2: "Gateway to Spiti",
      image: "/discription/descriptioncardimage1.png",
    },
    {
      id: 3,
      day: "5 days / 4 nights",
      price: 14499,
      offer: 5000,
      title1: "Hampta Pass Trek:",
      title2: "Gateway to Spiti",
      image: "/discription/descriptioncardimage1.png",
    },
    {
      id: 4,
      day: "7 days / 6 nights",
      price: 18499,
      offer: 4000,
      title1: "Kashmir Great Lakes:",
      title2: "Himalayan Beauty",
      image: "/discription/descriptioncardimage1.png",
    },
    {
      id: 5,
      day: "6 days / 5 nights",
      price: 16499,
      offer: 2500,
      title1: "Valley of Flowers:",
      title2: "Nature’s Paradise",
      image: "/discription/descriptioncardimage1.png",
    },
  ];

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
