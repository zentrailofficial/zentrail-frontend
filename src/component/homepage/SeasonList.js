import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const imagelist = [
  "/homepage/homeseasonbanner.webp",
  "/homepage/homeseasonbanner2.webp",
  "/homepage/homeseasonbanner3.webp",
  "/homepage/homeseasonbanner1.webp",
];

const data = [
  {
    title: "Autumn Trails",
    image: "/icons/autumn.svg",
    img: "/homepage/homeseasonbanner1.webp",
    value: "autumn-trips"
  },
  {
    title: "Winter Peaks",
    image: "/icons/snowfall.svg",
    img: "/homepage/homeseasonbanner3.webp",
    value: "winter-trips"
  },
  {
    title: "Monsoon Magic",
    image: "/icons/monsoon.svg",
    img: "/homepage/homeseasonbanner.webp",
    value: "monsoon-trips"
  },
  {
    title: "Summer Treks",
    image: "/icons/summer.svg",
    img: "/homepage/homeseasonbanner2.webp",
    value: "summer-trips"
  },
];

const SeasonList = () => {
  // const [selected, setSelected] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSelected((prev) => (prev + 1) % imagelist.length);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);
  const [selected, setSelected] = useState(0);
  const intervalRef = useRef(null); // store interval id

  // Function to start auto rotation
  const startRotation = () => {
    intervalRef.current = setInterval(() => {
      setSelected((prev) => (prev + 1) % imagelist.length);
    }, 5000);
  };

  // Function to stop auto rotation
  const stopRotation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startRotation();
    return () => stopRotation();
  }, []);

  return (
    <div className="custom-container pt-6 md:pt-10 ">
      <h2 className="responsiveheading2 dm_sans text-center md:mb-5">
        Seasons of Adventure
      </h2>

      <div className="flex flex-col md:flex-row w-full items-center justify-center gap-6 lg:gap-10 overflow-hidden py-5">
        {/* Banner Section */}
        <div className="relative w-full max-w-[350px] sm:max-w-[500px] md:max-w-[450px] lg:max-w-[600px] h-[220px] sm:h-[300px] lg:h-[350px]">
          <Image
            key={selected}
            src={data[selected]?.img}
            alt={data[selected]?.value}
            fill
            quality={100}
            tabIndex={0}
            className="object-cover rounded-[20px] transition-opacity duration-700   hover:scale-105 focus:scale-105 active:scale-105"
          />
        </div>

        {/* Rotating Circle Section */}
        <div className="relative md:ml-[-70px] lg:ml-[-100px] mt-[-80px] md:mt-[0px] w-[280px] sm:w-[360px] md:w-[300px] lg:w-[350px] aspect-square grid grid-cols-2 rotate-45">
          {data?.map((val, idx) => (
            <Link href={`travel-by-season/${val.value}`}
              key={idx}
              // onMouseEnter={() => setSelected(idx)}
              onMouseEnter={() => {
                stopRotation();
                setSelected(idx);
              }}
              onMouseLeave={() => {
                startRotation();
              }}
              className={`size-[100px] sm:size-[105px] md:size-[105px] lg:size-[105px] rotate-[-45deg] rounded-full p-2 cursor-pointer border-[3px] self-center justify-self-center transition-all duration-500  hover:scale-110 focus:scale-110 active:scale-110
                ${selected === idx
                ? "bg-[#35C0F0] border-[#35C0F0] shadow-lg"
                : "bg-white border-[#DEF2FC]"
                }`}
            >
              <div
                className={`size-[78px] sm:size-[85px] md:size-[85px] lg:size-[85px] rounded-full p-2 flex flex-col items-center justify-center   hover:scale-110 focus:scale-110 active:scale-110 ${selected === idx
                  ? "border-[4px] border-white"
                  : "border-[4px] border-[#35C0F0]"
                  }`}
              >
                <Image src={val.image} alt={`season of ${val.title}`} width={28} height={28} />
                <p
                  className={`dm_sans text-center text-[12px] sm:text-[13px] leading-[15px] ${selected === idx ? "text-white" : "text-black"
                    }`}
                >
                  {val.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeasonList;
