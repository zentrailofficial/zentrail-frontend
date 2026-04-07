"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getForecast } from "@/lib/weatherApi";
import { FaArrowRightArrowLeft } from "react-icons/fa6";



const seasonMonthsMap = {
  "summer-trips": "March – June",
  "monsoon-trips": "June – October",
  "autumn-trips": "October – November",
  "winter-trips": "November – February",
};

const Discription = ({ apiData }) => {
  const price = apiData?.price;
  const discount = apiData?.discount;
  const inputRef = useRef();
  const [weather, setWeather] = useState(null);
  const [location, setlocation] = useState(null);


  function formatdate(isoString) {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("en-GB", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  }


  const fetchWeather = async (city, date) => {
    try {
      const data = await getForecast(city);
      const filtered = data?.weather?.list.filter((item) =>
        item.dt_txt.startsWith(date)
      );
      setWeather(filtered[0]);
      setlocation(data?.location);
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };
  useEffect(() => {
    if (apiData?.city) {
      const today = new Date().toISOString().split("T")[0];
      fetchWeather(apiData?.city, today);
    }
  }, [apiData?.city]);

  const data = [
    {
      id: 1,
      image: "/discription/icon1.svg",
      label: "Difficulty Level",
      status: apiData?.difficultyLevel,
      show: apiData?.type == "trek",
    },

    {
      id: 2,
      image: "/discription/icon2.svg",
      label: "Duration",
      status: apiData?.duration,
      show: true,
    },
    {
      id: 3,
      image: "/discription/icon3.svg",
      label: "Highest Altitude",
      status: apiData?.altitude
        ? `${apiData.altitude} ${apiData.altitudeunit || ""}`
        : "",

      show: apiData?.type == "trek",
    },
    {
      id: 4,
      image: "/discription/icon4.svg",
      label: "Best Season",
      status: seasonMonthsMap[apiData?.season],
      show: true,
    },
    {
      id: 5,
      image: "/discription/icon5.svg",
      label: "Group Size",
      status: `${apiData?.groupMembers[0]?.minMembers} - ${apiData?.groupMembers[0]?.maxMembers} People`,
      show: true,
    },
    // {
    //   id: 6,
    //   image: "/discription/icon6.svg",
    //   label: "Route",
    //   status: `${apiData?.startLocation} ${<FaArrowRightArrowLeft/>} ${apiData?.endLocation}`,
    //   show: true,
    // },
    {
      id: 6,
      image: "/discription/icon6.svg",
      label: "Route",
      startLocation: apiData?.startLocation,
      endLocation: apiData?.endLocation,
      show: true,
    },

  ];
  return (
    <div className="custom-container items-center py-8 md:py-10 ">
      <div className="grid grid-cols-12 gap-6 md:gap-10 lg:gap-20  items-center ">
        <div className="col-span-12 md:col-span-6 lg:col-span-7 ">
          <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 ">
            {data?.map((val) => (
              <div
                key={val?.id}
                style={{ display: val.show ? "" : "none" }}
                className="flex flex-col justify-center items-center"
              >
                <div className="relative size-[60px] justify-self-center">
                  <Image src={val?.image} className="bg-[#fff]" fill alt="Profile image" />
                </div>
                <p className="text-[16px]">{val.label}</p>
                <p className="text-[14px] mb-3 flex items-center gap-1">
                  {val?.startLocation && val?.endLocation ? (
                    <>
                      <span>{val?.startLocation}</span>
                      <FaArrowRightArrowLeft size={10} className="text-slate-700"/>
                      <span>{val?.endLocation}</span>
                    </>
                  ) : (
                    val?.status
                  )}
                </p>
              </div>
            ))}

          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center align-middle border-t-5 border-[#e8f8e1]">

            <div className="flex items-center  bg-[#DEF2FC] border border-[#35C0F0] rounded-xl p-4 w-fit h-[70px] relative group
             shadow-sm  mt-8 ">
              <div className="flex flex-col">
                <p className="text-[20px] font-semibold text-gray-900">
                  {`Price: ₹`}{" "}
                  {discount?.amount ? price - discount.amount : discount?.percentage ? price - (price * discount.percentage) / 100
                    : price}
                </p>

                {discount && (
                  <p className="text-[16px] text-gray-700">
                    (
                    <del className="original-price text-red-500">{`₹${price}`}</del>
                    {discount.amount ? `, ₹${discount.amount} Off` : discount.percentage ? `, ${discount.percentage}% Off` : ""}
                    )
                  </p>
                )}
              </div>
              <div className=" relative size-[90px] top-[-1px] right-[-75px] shrink-0   flex items-center justify-center rounded-full border 
           border-[#35C0F0] bg-white object-cover hover ">
                <div className=" size-[60px] relative items-center justify-center  " >
                  <Image
                    src="/icons/priceTag.svg"
                    alt="discount icon"
                    fill

                  />
                </div>
              </div>
            </div>
            {/* {apiData?.batches?.some((val) => val?.fromDate && val?.toDate) && (
              <div className="w-full md:w-fit mt-5 text-center h-[125px] overflow-auto descriptionscroll">
                <div className="text-center dm_sans font-medium">Available Batches</div>
                {apiData?.batches
                  ?.filter((val) => val?.fromDate && val?.toDate)
                  .map((val, i) => (
                    <div key={i} className="hover:bg-slate-200 px-5 py-1 cursor-pointer">
                      <span className="font-medium text-[13px] dm_sans">{formatdate(val.fromDate)}</span>
                      <span className="font-medium text-[13px] dm_sans mx-3">{`to`}</span>
                      <span className="font-medium text-[13px] dm_sans">{formatdate(val.toDate)}</span>
                    </div>
                  ))}
              </div>
               )}*/}
          </div> 
          
        </div>
       

        <div className=" col-span-12  md:col-span-6 lg:col-span-5 bg-[#E8F8E1] rounded-xl p-3 sm:p-5 md:p-6 ">
          <h2 className="responsiveheading5 font-medium mt-2.5">{`Weather In ${location?.name || apiData?.city}`}</h2>
          <p className="">{`Location`}</p>
          <div className="flex gap-2 items-center">
            <div className="relative shrink-0 size-[35px] sm:size-[50px] justify-self-center  ">
              <Image src="/discription/icon7.svg" fill alt="Profile image" />
            </div>
            <div className="bg-white  p-1 sm:p-2 rounded-lg">
              <p>{location?.name}</p>
            </div>
            <div className="bg-white p-1 sm:p-2 rounded-lg">
              <p>{location?.state}</p>
            </div>
          </div>
          <p>{`Temperature`}</p>
          <div className="flex gap-2  p-1 sm:p-2 items-center">
            <div className="relative shrink-0 size-[35px] sm:size-[50px] justify-self-center   ">
              <Image src="/discription/icon8.svg" fill alt="Profile image" />
            </div>
            <div className="bg-white p-2 rounded-lg">
              <p>
                {weather
                  ? `${Math.round(
                    weather.main.temp
                  )}°C (Feels like ${Math.round(weather?.main?.feels_like)}°C)`
                  : `Loading...`}
              </p>
            </div>
          </div>
          <div className="flex  gap-2 ">
            <div className="w-1/2">
              {" "}
              <p>{`Your Travel Date`}</p>
              <div className="flex gap-3 items-center">
                <div className="relative shrink-0 size-[35px] sm:size-[50px]  justify-self-center  ">
                  <Image
                    src="/discription/icon9.svg"
                    fill
                    alt="Profile image"
                  />
                </div>
                {/* <div className="bg-white  p-1 sm:p-2 rounded-lg hover:shadow-sm cursor-pointer">
                  <p>{`15th May 2025 `}</p>
                </div> */}
                <label htmlFor="travel-date" className="sr-only">
                  Select Travel Date
                </label>
                <input
                  id="travel-date"
                  ref={inputRef}
                  type="date"
                  aria-label="Select travel date"
                  defaultValue={new Date().toISOString().split("T")[0]}
                  min={new Date().toISOString().split("T")[0]}
                  onClick={() => inputRef.current.showPicker()}
                  onChange={
                    (e) =>
                      fetchWeather(apiData?.city, e.target.value) // 👈 call API again
                  }
                  max={
                    new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
                      .toISOString()
                      .split("T")[0]
                  }
                  className="custom-date bg-white  p-1 sm:p-2 rounded-lg hover:shadow-sm cursor-pointer outline-0"
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "textfield",
                  }}
                />
              </div>
            </div>
            <div className="w-1/2">
              {" "}
              <p>{`Wind`}</p>
              <div className="flex gap-2 items-center">
                <div className="relative shrink-0 size-[35px] sm:size-[50px] justify-self-center  ">
                  <Image
                    src="/discription/icon10.svg"
                    fill
                    alt="Profile image"
                  />
                </div>
                <div className="bg-white  p-1 sm:p-2 rounded-lg">
                  <p>{weather ? `${weather?.wind?.speed} km/h` : "Loading..."}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2">
              {" "}
              <p>{` Forecast`}</p>
              <div className="flex gap-2 items-center">
                <div className="relative shrink-0 size-[35px] sm:size-[50px] justify-self-center  ">
                  <Image
                    src="/discription/icon11.svg"
                    fill
                    alt="Profile image"
                  />
                </div>
                <div className="bg-white  p-1 sm:p-2 rounded-lg">
                  <p>
                    {weather ? weather?.weather[0]?.description : "Loading..."}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              {" "}
              <p>{`Rain Probability`}</p>
              <div className="flex gap-2 items-center ">
                <div className="relative shrink-0 size-[35px] sm:size-[50px] justify-self-center  ">
                  <Image
                    src="/discription/icon12.svg"
                    fill
                    alt="Profile image"
                  />
                </div>
                <div className="bg-white  p-1 sm:p-2 rounded-lg ">
                  <p>
                    {typeof weather?.pop !== "undefined"
                      ? `${Math.round(weather.pop * 100)}%`
                      : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discription;
