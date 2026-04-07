import { Chip, CircularProgress } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { styles } from "./tourlistStyle";
import Image from "next/image";
import { IoFilterOutline } from "react-icons/io5";
import TripCards from "@/comman-component/TripCards";
import { MdClose } from "react-icons/md";
import Pagination from "@/comman-component/pagination";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import { BASE_URL_API } from "@/lib/common";
import MiniLoader from "@/comman-component/MiniLoader";

const pricelist = [
  {
    id: 1,
    title: "Below ₹5,000",
    maxPrice: 5000,
    minPrice: 0,
  },
  {
    id: 2,
    title: "₹5,000 – ₹10,000",
    minPrice: 5000,
    maxPrice: 10000,
  },
  {
    id: 3,
    title: "₹10,000 – ₹20,000",
    minPrice: 10000,
    maxPrice: 20000,
  },
  {
    id: 4,
    title: "Above ₹20,000",
    minPrice: 20000,
    maxPrice: 3000000,
  },
];

const durationlist = [
  {
    id: 1,
    title: "1–3 Days (Weekend Trips)",
    filter: "1-3",
  },
  {
    id: 2,
    title: "4–6 Days (Short Getaways)",
    filter: "4-6",
  },
  {
    id: 3,
    title: "7–10 Days (Extended Journeys)",
    filter: "7-10",
  },
  {
    id: 4,
    title: "10+ Days (Long Expeditions)",
    filter: "10-100000",
  },
];

const togglrbtn = [
  {
    id: 1,
    image: "/discription/icons8-path.svg",
    title: "Trails",
    filter: "",
  },
  {
    id: 2,
    image: "/discription/icons8-bus.svg",
    title: "Tours",
    filter: "tour",
  },
  {
    id: 3,
    image: "/discription/icons8-trekking.svg",
    title: "Treks",
    filter: "trek",
  },
];

const TourListFilter = ({ tourlist }) => {
  const path = usePathname();
  const slug = path.split("/")[2] == undefined ? "" : path.split("/")[2] == "all" ? "" : path.split("/")[2] == undefined ? "" : path.split("/")[2]
  const [tourlistdata, settourlistdata] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState({ minPrice: "", maxPrice: "" });
  const [duration, setDuration] = useState("");
  const [tourtype, settourtype] = useState("");
  const [Showfilter, setShowfilter] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    settourlistdata(tourlist);
  }, [tourlist]);

  const fetchFilteredTours = async (type) => {
    setLoading(true);
    setCurrentPage(1)
    setShowfilter(false);
    settourtype(type);
    try {
      const res = await axios.get(
        `${BASE_URL_API}travel-packages/travel/getalltravelpackage/${slug}?type=${type}&minprice=${price.minPrice
        }&maxprice=${price.maxPrice
        }&duration=${duration}&page=${currentPage}&limit=${6}`
      );
      settourlistdata(res.data || []);
    } catch (err) {
      console.error("Error fetching filtered tours", err);
    }
    setLoading(false);
  };

  const fetchFilteredPrice = async () => {
    setLoading(true);
    setCurrentPage(1)
    setShowfilter(false);
    try {
      const res = await axios.get(
        `${BASE_URL_API}travel-packages/travel/getalltravelpackage/${slug}?type=${tourtype}&minprice=${price?.minPrice
        }&maxprice=${price?.maxPrice
        }&duration=${duration}&page=${currentPage}&limit=${6}`
      );
      settourlistdata(res.data || []);
    } catch (err) {
      console.error("Error fetching filtered tours", err);
    }
    setLoading(false);
  };

  const fetchFilterduration = async () => {
    setLoading(true);
    setShowfilter(false);
    try {
      const res = await axios.get(
        `${BASE_URL_API}travel-packages/travel/getalltravelpackage/${slug}?type=${tourtype}&minprice=${price?.minPrice
        }&maxprice=${price?.maxPrice
        }&duration=${duration}&page=${currentPage}&limit=${6}`
      );
      settourlistdata(res.data || []);
    } catch (err) {
      console.error("Error fetching filtered tours", err);
    }
    setLoading(false);
  };

  const clearFilteredPrice = async () => {
    setPrice({ minPrice: "", maxPrice: "" });
    setLoading(true);
    setShowfilter(false);
    try {
      const res = await axios.get(
        `${BASE_URL_API}travel-packages/travel/getalltravelpackage/${slug}?type=${tourtype}&minprice=&maxprice=&duration=${duration}&page=${currentPage}&limit=${6}`
      );
      settourlistdata(res.data || []);
    } catch (err) {
      console.error("Error fetching filtered tours", err);
    }
    setLoading(false);
  };

  const clearFilteredDuration = async () => {
    setDuration("");
    setLoading(true);
    setShowfilter(false);
    try {
      const res = await axios.get(
        `${BASE_URL_API}travel-packages/travel/getalltravelpackage/${slug}?type=${tourtype}&minprice=${price.minPrice
        }&maxprice=${price.maxPrice}&duration=&page=${currentPage}&limit=${6}`
      );
      settourlistdata(res.data || []);
    } catch (err) {
      console.error("Error fetching filtered tours", err);
    }
    setLoading(false);
  };

  const fetchwhenpagechange = async () => {
    setLoading(true);
    setShowfilter(false);
    try {
      const res = await axios.get(
        `${BASE_URL_API}travel-packages/travel/getalltravelpackage/${slug}?type=${tourtype}&minprice=${price.minPrice
        }&maxprice=${price.maxPrice}&duration=&page=${currentPage}&limit=${6}`
      );
      settourlistdata(res.data || []);
    } catch (err) {
      console.error("Error fetching filtered tours", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchwhenpagechange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
  if (Showfilter) {
    document.body.style.overflow = "hidden"; // disable scroll
  } else {
    document.body.style.overflow = "auto"; // enable scroll
  }

  return () => {
    document.body.style.overflow = "auto"; // cleanup on unmount
  };
}, [Showfilter]);



  return (
    <div className="relative">
      <div className="h-[370px] bg-[#DEF2FC]  py-5 md:py-10" />
      <div className="custom-container ">
        <div className="flex gap-10 mt-[-330px] top-0 bg-[tranparent]">
          {/* ////////////////// filter box ///////////////// */}
          <div
            className={`z-50 ${Showfilter ? "visible " : "hidden md:visible"
              } h-[550px] sm:h-fit overflow-auto z-5 lg:w-[410px] fixed md:sticky bottom-[0px] md:top-0 left-0 lg:block  bg-white border px-4 py-6 shadow-md rounded-[12px] flex-initial`}
          >
            <div className="flex justify-between">
              <h3 className="responsiveheading5">{`Budget`}</h3>
              <button
                className="lg:hidden rounded-full bg-[#ccc] p-2"
                onClick={() => setShowfilter(false)}
              >
                <MdClose size={20} />
              </button>
            </div>
            <p className="text-[16px] font-normal text-[#4D5D60]">{`Select your budget range to find suitable options.`}</p>
            <div className="flex gap-2 flex-wrap mt-10 items-center">
              <div className="flex flex-col">
                <label className="text-[#4D5D60] text-[12px]">{"Min"}</label>
                <input
                  value={price.minPrice}
                  onChange={(e) =>
                    setPrice((prev) => ({ ...prev, minPrice: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
                      e.preventDefault();
                    }
                  }}
                  className="bg-[#e4f6ff] text-[12px] p-1 outline-0 border-0 rounded-[5px] px-2 w-[100px]"
                // placeholder="0"
                />
                <p className="text-[12px]  text-[#4D5D60]">{`Unit: ₹`}</p>
              </div>
              <span className="mb-1">-</span>
              <div className="flex flex-col">
                <label className="text-[#4D5D60] text-[12px]">{"Max"}</label>
                <input
                  value={price.maxPrice}
                  onChange={(e) =>
                    setPrice((prev) => ({ ...prev, maxPrice: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
                      e.preventDefault();
                    }
                  }}
                  className="bg-[#e4f6ff] text-[12px] p-1 outline-0 border-0 rounded-[5px] px-2 w-[100px]"
                // placeholder="10000"
                />
                <p className="text-[12px]  text-[#4D5D60]">{`Unit: ₹`}</p>
              </div>
              {price.maxPrice && Number(price.maxPrice) < Number(price.minPrice) && (
                <span className="text-[12px] text-red-500 mt-1">
                  Max value should be greater than Min
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-2 mt-7">
              {pricelist?.map((val, i) => (
                <Chip
                  key={i}
                  label={val.title}
                  className=""
                  sx={
                    price.maxPrice == val.maxPrice
                      ? styles.chipsSeected
                      : styles.chips
                  }
                  // onClick={() =>
                  //   setPrice({ minPrice: val.minPrice, maxPrice: val.maxPrice })
                  // }
                  onClick={() => {
                    setPrice((prev) => {
                      if (
                        prev.minPrice === val.minPrice &&
                        prev.maxPrice === val.maxPrice
                      ) {
                        return { minPrice: "", maxPrice: "" }; // reset (or null if you prefer)
                      }
                      return { minPrice: val.minPrice, maxPrice: val.maxPrice };
                    });
                  }}

                />
              ))}
            </div>
            <div className="flex gap-3 mt-4">
              <button
                onClick={clearFilteredPrice}
                className="manrope border-[1.4px] border-[#4D5D60] cursor-pointer px-4 py-1 rounded-[6px] hover:bg-[#f1f1f1] text-[14px]"
              >{`Clear Filters`}</button>
              <button
              disabled={price.maxPrice && Number(price.maxPrice) < Number(price.minPrice)}
                // disabled={!price.minPrice&&!price.maxPrice}
                onClick={fetchFilteredPrice}
                className={`manrope border-[1.4px] border-[#35C0F0] bg-[#35C0F0] cursor-pointer px-2 py-1 rounded-[6px] hover:bg-[#23aad7] text-[14px] text-[#fff]`}
              >{`Apply Budget Filter`}</button>
            </div>
            <div className="h-[2px] w-full bg-[#DEF2FC] mt-7" />
            <h3 className="responsiveheading5 my-5">{`Trip Duration Filter`}</h3>
            <p className="text-[16px] font-normal text-[#4D5D60]">{`Trip Duration Options`}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {durationlist?.map((val, i) => (
                <Chip
                  key={i}
                  label={val.title}
                  className=""
                  // sx={styles.chips}
                  sx={
                    duration == val.filter ? styles.chipsSeected : styles.chips
                  }
                  // onClick={() => setDuration(val.filter)}
                  onClick={() => {
                    setDuration((prev) => (prev === val.filter ? "" : val.filter));
                  }}

                />
              ))}
            </div>
            <div className="flex gap-3 mt-4">
              <button
                onClick={clearFilteredDuration}
                className="manrope border-[1.4px] border-[#4D5D60] cursor-pointer px-4 py-1 rounded-[6px] hover:bg-[#f1f1f1] text-[14px]"
              >{`Clear Filters`}</button>
              <button
                onClick={fetchFilterduration}
                className="manrope border-[1.4px] border-[#35C0F0] bg-[#35C0F0] cursor-pointer px-2 py-1 rounded-[6px] hover:bg-[#23aad7] text-[14px] text-[#fff]"
              >{`Apply Duration Filter`}</button>
            </div>
          </div>
          {/* ////////////////// select toggle box ///////////////// */}
          <div
            className="flex-1 scroll-target"
          //  ref={sectionRef}
          >
            <div className="flex justify-end sm:justify-between md:justify-end gap-2 sm:gap-5">
              <button
                onClick={() => setShowfilter(true)}
                className="visible lg:hidden absolute left-2  sm:static mt-[-20px] mb-4 sm:mt-[2px] sm:mb-0 rounded-full px-2 sm:px-4 h-[40px] border-1 flex gap-2 items-center"
              >
                <IoFilterOutline size={20} />
              </button>
              <div className="flex justify-end gap-2 sm:gap-5">
                {togglrbtn?.map((val, i) => (
                  <button
                    onClick={() => fetchFilteredTours(val.filter)}
                    key={i}
                    className={`flex items-center gap-1 sm:gap-3 py-2 px-2 sm:px-4 text-[20px] sm:text-[25px] dm_sans font-medium text-[#37863F] bg-[#FFFFFF4D] rounded-[10px] cursor-pointer transition-all  hover:scale-106 ${tourtype == val?.filter ? "bg-[#fff] shadow-md" : ""
                      }`}
                  >
                    <div className="relative shrink-0 size-5 sm:size-8">
                      <Image src={val.image} fill quality={100} alt="icons" />
                    </div>
                    {val.title}
                  </button>
                ))}
              </div>
            </div>

            {loading ? (
              <div className="h-[300px] flex justify-center items-center">
                {/* <p className="dm_sans text-[green]">
                  <CircularProgress size={20} />
                  {" Loading..."}
                </p> */}
                <MiniLoader/>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                {tourlistdata?.data?.length > 0 ? (
                  <>
                    {tourlistdata?.data?.map((val, i) => (
                      <TripCards key={i} val={val} />
                    ))}
                  </>
                ) : (
                  <div className="col-span-2 h-[300px] flex justify-center items-center">
                    <p className="dm_sans text-[red] text-center">{"No trail/tours/treks available here right now! We’ll be adding exciting tours soon — meanwhile, explore our upcoming trips."}</p>
                  </div>
                )}
              </div>
            )}
            <Pagination
              currentPage={tourlistdata?.currentPage}
              totalPages={tourlistdata?.totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourListFilter;
