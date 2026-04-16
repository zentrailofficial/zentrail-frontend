import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PinDropIcon from "@mui/icons-material/PinDrop";
import { apiClient } from "@/lib/api-client";
import MiniLoader from "@/comman-component/MiniLoader";
import LinkButton from "@/comman-component/LinkButtton/LinkButton";

const UpcommingTrips = ({ upcommingTrips }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [selected, setselected] = useState("");
  const [loading, setloading] = useState(false);

  const data = filteredData;

  useEffect(() => {
    if (upcommingTrips) {
      setFilteredData(upcommingTrips);
    }
  }, [upcommingTrips]);

  const filterTour = async (val) => {
    setloading(true);
    setselected(val);
    const res = await apiClient.get(
      `travel-packages/travel/getalltravelpackage?type=${val}&page=1&limit=4`,
    );
    setFilteredData(res?.data?.data);
    setloading(false);
  };

  const seasonIcons = {
    "summer-trips": "/icons/summer.svg",
    "winter-trips": "/icons/snowfall.svg",
    "monsoon-trips": "/icons/monsoon.svg",
    "autumn-trips": "/icons/autumn.svg",
  };
  const seasonName = {
    "summer-trips": "Summer",
    "winter-trips": "Winter",
    "monsoon-trips": "Monsoon",
    "autumn-trips": "Autumn",
  };

  return (
    <div className="bg-[#DEF2FC]">
      <h1 className="responsiveheading2 dm_sans  text-center pt-5">
        Group Tours & Weekend Trips from Delhi
      </h1>
      <div className="custom-container py-6 md:py-10">
        <div className="flex justify-between flex-wrap gap-3 items-center">
          <h2 className="responsiveheading2 dm_sans">{`Upcoming Tour Packages`}</h2>
          <div className="flex  gap-5">
            <button
              aria-label="trek"
              onClick={() => filterTour("")}
              className={`flex gap-2 items-center cursor-pointer dm_sans hover:text-black ${
                selected == "" ? "text-black" : "text-[#4D5875]"
              }`}
            >
              <Image
                src="/homepage/upcommingicon2.svg"
                height={18}
                width={18}
                alt="upcomming trek image"
              />
              <span>{"All"}</span>
            </button>
            <div className="w-px h-[30px] bg-gray-400"></div>
            <button
              aria-label="tour"
              onClick={() => filterTour("tour")}
              className={`flex gap-2 items-center cursor-pointer dm_sans hover:text-black ${
                selected == "tour" ? "text-black" : "text-[#4D5875]"
              }`}
            >
              <Image
                src="/homepage/upcommingicon1.svg"
                height={30}
                width={30}
                alt="upcomming tour image"
              />
              <span>{"Tour"}</span>
            </button>
            <div className="w-px h-[30px] bg-gray-400"></div>
            <button
              aria-label="trek"
              onClick={() => filterTour("trek")}
              className={`flex gap-2 items-center cursor-pointer dm_sans hover:text-black ${
                selected == "trek" ? "text-black" : "text-[#4D5875]"
              }`}
            >
              <Image
                src="/homepage/upcommingicon2.svg"
                height={18}
                width={18}
                alt="upcomming trek image"
              />
              <span>{"Trek"}</span>
            </button>
          </div>
        </div>

        {loading ? (
          <div className="h-[300px] w-full col-span-2 flex justify-center items-center">
            <MiniLoader />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[50px] lg:gap-x-[110px] gap-y-15 mt-15 mb-8 pl-[20px]">
            {data?.length > 0 ? (
              data.map((val, i) => {
                return (
                  <Link
                    href={`trail/${val.slug}`}
                    key={i}
                    className="relative group bg-[white] p-5 h-[100px] sm:h-[100px] md:h-[120px] rounded-[12px] flex  shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <div className="absolute size-[120px] sm:size-[120px] md:size-[160px] top-[-10px] md:top-[-20px] left-[-20px] shrink-0">
                      <Image
                        src={val.featuredImage.url}
                        fill
                        // className="rounded-full"
                        alt="image"
                        quality={100}
                        tabIndex={0}
                        className="rounded-full object-cover transform transition-transform duration-500 group-hover:scale-102 group-focus:scale-102 group-active:scale-102"
                      />

                      {/* gradient overlay */}
                      <div
                        className=" rounded-full absolute  inset-0 bg-gradient-to-t  from-black/80  via-black/40 to-transparent opacity-0 
                         transition-opacity  duration-500 hover:opacity-80  focus:opacity-80  active:opacity-80  group-hover:opacity-80 
                              group-focus:opacity-80  group-active:opacity-80"
                      ></div>
                    </div>
                    <div className="ml-[90px] md:ml-[140px]">
                      <p className="dm_sans ms-1 text-[14px] md:text-[18px] line-clamp-1 font-medium mb-2 leading-[14px] md:leading-[18px]">
                        {val.title}
                      </p>

                      <div>
                        <div className="flex gap-2 mt-1 ms-1">
                          <div className="relative size-4 ">
                            <Image
                              src={seasonIcons[val.season]}
                              alt={`${val.season} icon`}
                              fill
                            />
                          </div>
                          <p className="dm_sans text-[12px] md:text-[14px] text-[#4D5875]  whitespace-wrap">
                            {seasonName[val.season]}
                            {/* {val.season} */}
                          </p>
                        </div>
                        <p className="dm_sans text-[12px] md:text-[14px]  text-[#4D5875] mt-1 line-clamp-1">
                          <PinDropIcon className="text-blue-600" /> {val.state}
                        </p>
                      </div>
                      {/* <div
                      className="text-[#4D5875] manrope text-[14px] line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: val?.description }}
                    /> */}
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="h-[300px] w-full col-span-2 flex justify-center items-center">
                <p className="text-red-600 dm_sans">
                  {
                    "No trail/tours/treks available here right now! We’ll be adding exciting tours soon — meanwhile, explore our upcoming trips."
                  }
                </p>
              </div>
            )}
          </div>
        )}
        {upcommingTrips?.length == 4 && !loading && (
          <div className="flex justify-center col-span-2">
            <Link href="/upcoming-trips">
              <LinkButton text="View More" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcommingTrips;
