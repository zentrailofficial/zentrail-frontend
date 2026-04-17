import Image from "next/image";
import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const data = [
  {
    title: "Weekend Getaways",
    subtitle: "Short escapes near Delhi.",
    image: "/icons/trialicon1.svg",
  },
  {
    title: "Treks & Circuits",
    subtitle: "From beginner-friendly to challenging adventures.",
    image: "/icons/trialicon2.svg",
  },
  {
    title: "Offbeat Places",
    subtitle: " Hidden gems far from the crowds.",
    image: "/icons/trialicon3.svg",
  },
  {
    title: "Mindful Retreats",
    subtitle: "Healing, slow, and soulful journeys.",
    image: "/icons/trialicon4.svg",
  },
];

const PerfectTrial = () => {
  const splideRef = useRef(null);
  return (
    <div className="bg-[#DEF2FC] py-6 md:py-10">
      <div className="custom-container">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center lg:text-start lg:col-span-3 md:p-6">
            <h2 className="responsiveheading2 dm_sans mb-3">{`Find Your Perfect Trip`}</h2>
            <p className="dm_sans text-[#4D5D60] text-[14px]">{`Filter by mood, season, duration, or travel style and uncover journeys that feel made just for you.`}</p>
          </div>
          <div className="col-span-12 lg:col-span-9 mt-5 lg:mt-0">
            <Splide
              ref={splideRef}
              options={{
                type: "loop",
                perPage: 4,
                perMove: 1,
                autoplay: true,
                interval: 3000,
                pauseOnHover: true,
                arrows: false,
                pagination: false,
                accessibility: false,
                breakpoints: {
                  1224: { perPage: 3 },
                  750: { perPage: 2 },
                  500: { perPage: 1 },
                },
              }}
              aria-label="Explore More Trips"
            >
              {data.map((val, index) => (
                <SplideSlide
                  key={val.id}
                  className="m-2"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${val.title} – Slide ${index + 1} of ${data.length}`}
                >
                  <div className="m-2 flex justify-center">
                    <div
                      className=" group relative cursor-pointer w-[200px]  transition-transform duration-300 ease-in-out
                        hover:-translate-y-2 focus:-translate-y-2 active:-translate-y-1"
                    >
                      <div>
                        <div
                          className="m-auto w-[100px] aspect-square mb-[-20%] rounded-full bg-[#35C0F0] transition-all duration-300 ease-in-out
                          group-hover:bg-[#37863F] group-focus:bg-[#37863F] group-active:bg-[#2E6F34]"
                        >
                          <Image
                            src={val.image}
                            width={index === 1 ? 25 : index === 3 ? 30 : 35}
                            height={index === 1 ? 25 : index === 3 ? 30 : 35}
                            quality={100}
                            className="m-auto pt-4"
                            alt={`${val.title} icon`}
                          />
                          <Image
                            src="/homepage/arrowvector.png"
                            width={100}
                            height={100}
                            quality={100}
                            alt={`${val.title} icons`}
                            className="  m-auto pt-4 absolute top-[-35px] left-0
                            opacity-0 transition-opacity duration-300
                            group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100"
                          />
                        </div>
                        <div
                          className="bg-white shadow-sm rounded-[12px] h-[120px] p-5 w-[200px]
                          border border-transparent 
                          transition-all duration-300 ease-in-out
                          group-hover:shadow-none group-hover:border-[#37863F]
                          group-focus:shadow-none group-focus:border-[#37863F]
                          group-active:shadow-none group-active:border-[#2E6F34]"
                        >
                          <p className="dm_sans responsive-text text-center text-[#1A2E33] line-clamp-2">
                            {val.title}
                          </p>
                          <p className="dm_sans text-[14px] text-[#4D5D60] text-center line-clamp-2">
                            {val.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfectTrial;
