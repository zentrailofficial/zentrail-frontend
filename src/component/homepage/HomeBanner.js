import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Image from "next/image";

import { useRouter } from "next/navigation";
import Link from "next/link";
import LinkButton from "@/comman-component/LinkButtton/LinkButton";

const bannnerList = [
  {
    id: 1,
    image: "/homepage/tirthan.png",
    discription:
      " Experience Jibhi’s Mini Thailand vibes, Shoja’s dreamy sunsets, and Rahgarh Fort’s ancient charm — all wrapped into one magical Tirthan Valley weekend getaway.",
    title: "Dive into the charm of Jibhi’s “Mini Thailand“",
    caption: " Tirthan Valley Trip - A weekend Getaway",
    goesto: "trail/tirthan-valley-tour",
  },
  {
    id: 2,
    image: "/homepage/homebanner1.webp",
    discription:
      "Seek thrill in alpine adventures, glide above mountains, chase paragliding adventures & high-altitude expedition tours.",
    title: "Explore Adventure Travel in India",
    caption: "Thrill Seekers",
    goesto: "/travel-by-mood/for-adventure",
  },
  {
    id: 3,
    image: "/homepage/homebanner2.webp",
    discription:
      "Rediscover balance in soulful retreats, escape to tranquil hideaways, recharge with wellness travel & mindful destinations.",
    title: "Find Peaceful Journeys for Mind & Soul",
    caption: "Soulful Escapes",
    goesto: "/travel-by-mood/peace-and-calm",
  },
  {
    id: 4,
    image: "/homepage/homebanner3.webp",
    discription:
      " Connect with nature under starry skies, camp in serene tents, explore offbeat trekking trails and eco-retreat escapes.",
    title: " Offbeat Camping & Trekking Trails",
    caption: "Nature Connect",
    goesto: "/travel-by-mood/offbeat-trips-in-india",
  },
];

const HomeBanner = () => {
  const splideRef = useRef(null);
  const router = useRouter();

  return (
    <div className="relative overflow-hidden w-full h-[350px] sm:h-[370px] md:h-[500px]">
      <h1 className="sr-only">{`Find Journeys That Match Your Soul - Travel By Mood`}</h1>
      <Splide
        ref={splideRef}
        options={{
          type: "loop",
          perPage: 1,
          perMove: 1,
          autoplay: true,
          interval: 6000,
          pauseOnHover: true,
          arrows: false,
          pagination: false,
        }}
        aria-label="Explore More Trips"
      >
        {bannnerList.map((val) => (
          <SplideSlide
            key={val.id}
            className="w-full h-[350px] sm:h-[370px] md:h-[500px] relative overflow-hidden"
          >
            <div className="w-full h-[350px] sm:h-[370px] md:h-[500px] relative overflow-hidden">
              {/* Background image */}
              <div className="w-full h-[350px] sm:h-[370px] md:h-[500px] relative">
                <Image
                  fill
                  src={val.image}
                  alt={val.title}
                  className="object-cover object-bottom"
                  priority={val.id === 1}
                  fetchPriority={val.id === 1 ? "high" : "auto"}
                  sizes="100vw"
                  quality={80}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10"></div>

              {/* Text content */}
              <div className="absolute inset-0">
                <div className=" custom-container text-white flex-1 h-[300px] sm:h-[350px] md:h-[450px] flex flex-col justify-center select-text">
                  <p
                    style={{ fontFamily: "licorice" }}
                    className="text-[25px] md:text-[60px] drop-shadow-md"
                  >
                    {val.caption}
                  </p>
                  <h2 className="responsive-heading dm_sans">{val.title}</h2>
                  <p className="responsive-text mt-3 mb-5">{val.discription}</p>
                  <Link href={val.goesto}>
                    <LinkButton
                      text="Start Your Journey"
                      className="bg-black"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* Custom arrows */}
      <div className=" mt-4 absolute bottom-[20px] left-0 custo  w-full">
        <div className="custom-container w-full flex justify-end gap-3">
          <button
            onClick={() => splideRef.current.splide.go("<")}
            aria-label="Previous slide"
            className="p-[2px] rounded-full border-2 border-[#f2f2f2] cursor-pointer"
          >
            <MdOutlineArrowBackIos size={20} color="#fff" />
          </button>
          <button
            onClick={() => splideRef.current.splide.go(">")}
            aria-label="Next slide"
            className="p-[2px] rounded-full border-2 border-[#f2f2f2] cursor-pointer"
          >
            <MdOutlineArrowForwardIos size={20} color="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
