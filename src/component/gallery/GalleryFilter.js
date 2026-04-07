import formStyle from "@/comman-component/TextInput/inputStyle";
import SearchInput from "@/comman-component/TextInput/SearchInput";
import { apiClient } from "@/lib/api-client";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Chip, Pagination } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";

const traveldata = [
  { id: 1, label: "Hampta Pass, Himachal", image: "/gallery/gallery1.png" },
  { id: 2, label: "Hampta Pass, Himachal", image: "/gallery/gallery1.png" },
  { id: 3, label: "Hampta Pass, Himachal", image: "/gallery/gallery1.png" },
  { id: 4, label: "Hampta Pass, Himachal", image: "/gallery/gallery1.png" },
  { id: 5, label: "Hampta Pass, Himachal", image: "/gallery/gallery1.png" },
  { id: 6, label: "Hampta Pass, Himachal", image: "/gallery/gallery1.png" },
  { id: 7, label: "Hampta Pass, Himachal", image: "/gallery/gallery1.png" },
];
const GalleryFilter = ({ Gallery, Moodbasejourney, allState }) => {
  const scrollRef = useRef(null);
  const [stateSelected, setstateSelected] = useState("All");
  const [moodselected, setMoodSelected] = useState("");
  const [showButtons, setShowButtons] = useState(false);
  const [filteredGallery, setFilteredGallery] = useState({});
  const [isExpanded, setIsExpanded] = useState(true);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollWidth, clientWidth } = scrollRef.current;
    setShowButtons(scrollWidth > clientWidth);
  };

  React.useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const cardWidth = scrollRef.current.firstChild.offsetWidth + 24;
    const scrollAmount = cardWidth;

    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const getfilterbyState = async (val) => {
    setstateSelected(val);
    setMoodSelected("");
    setPage(1);
    try {
      setLoading(true);
      const res = await apiClient.get(
        `travel-packages/travel/gallery/${val.replace(
          /\s+/g,
          "-"
        )}?page=${page}&limit=10`
      );
      setFilteredGallery(res.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  const getfilterbyMood = async (val) => {
    setMoodSelected(val);
    setstateSelected("");
    setPage(1);
    try {
      setLoading(true);
      const res = await apiClient.get(
        `travel-packages/travel/gallery/${val
          .replace(/\s+/g, "-") // replace spaces with "-"
          .replace(/&/g, "and") // replace "&" with "and"
          .toLowerCase()
        }?page = ${page}& limit=10`
      );
      setFilteredGallery(res.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  const resetFilter = async (val) => {
    setMoodSelected("");
    setstateSelected("All");
    setPage(1);
    try {
      setLoading(true);
      const res = await apiClient.get(
        `travel-packages/travel/gallery?page=${page}&limit=10`
      );
      setFilteredGallery(res.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };


  const handleChange = async (event, value) => {
    setPage(value);
    try {
      setLoading(true);
      const res = await apiClient.get(
        `travel-packages/travel/gallery?page=${value}&limit=10`
      );
      setFilteredGallery(res.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setFilteredGallery(Gallery);
  }, [Gallery]);

  const images = filteredGallery?.data || [];
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenModal = (idx) => {
    setCurrentIndex(idx);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className=" py-6 md:py-10">
      <div className="custom-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10">
          <h2 className="dm_sans responsiveheading2 ">{`Trail Views`}</h2>

          {/* 
          <SearchInput
            sx={formStyle.galleryfilter}
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by tour title..."
          /> */}
        </div>

        <div>
          <div className="mt-5 gap-x-1 flex items-center">
            {showButtons && (
              <button
                onClick={() => scroll("left")}
                className="p-1 rounded-full border-1 text-[#37863F] border-[#37863F] cursor-pointer hover:bg-gray-100"
              >
                <MdOutlineArrowBackIos size={15} />
              </button>
            )}
            <div className=" gap-5 flex scrollbutunvisible" ref={scrollRef}>
              <Chip
                variant={stateSelected == "All" ? "outlined" : "filled"}
                label={"All"}
                onClick={() => resetFilter("All")}
                sx={{
                  paddingX: "20px",
                  fontSize: "16px",
                  borderRadius: "6px",
                  backgroundColor:
                    stateSelected !== "All" ? "#35C0F02e" : "transparent",
                  boxShadow:
                    stateSelected === "All"
                      ? "0px 0px 4px 2px rgba(26, 46, 51, 0.13)"
                      : "none",
                  transition:
                    "box-shadow 0.3s ease, background-color 0.3s ease",
                }}
              />
              {allState?.map((val, i) => (
                <Chip
                  variant={stateSelected == val ? "outlined" : "filled"}
                  key={i}
                  label={val}
                  onClick={() => getfilterbyState(val)}
                  sx={{
                    paddingX: "20px",
                    fontSize: "16px",
                    borderRadius: "6px",
                    backgroundColor:
                      stateSelected !== val ? "#35C0F02e" : "transparent",
                    boxShadow:
                      stateSelected === val
                        ? "0px 0px 4px 2px rgba(26, 46, 51, 0.13)"
                        : "none",
                    transition:
                      "box-shadow 0.3s ease, background-color 0.3s ease",
                  }}
                />
              ))}
            </div>

            {showButtons && (
              <button
                onClick={() => scroll("right")}
                className="p-1 rounded-full border-1 text-[#37863F]  border-[#37863F]  cursor-pointer hover:bg-gray-100"
              >
                <MdOutlineArrowForwardIos size={15} color="green" />
              </button>
            )}
          </div>
        </div>
        <div className="mt-4">
          {isExpanded ? (
            <div className="w-full flex items-center bg-white  rounded-xl shadow-md px-4 py-2">
              <h3 className="responsiveheading5 font-semibold mr-4 dm_sans">{`Tours`}</h3>
              <div className="border-l border-gray-300 mx-2 h-6"></div>
              <div className=" w-full responsive-text overflow-auto flex gap-4 md:gap-7 text-[#4D5D60] dm_sans  whitespace-nowrap">
                {Moodbasejourney.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => getfilterbyMood(item?.title)}
                    className={`transition cursor-pointer ${moodselected == item?.title
                        ? "text-black font-medium"
                        : "hover:text-black responsive-text"
                      }`}
                  >
                    {item?.title}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="ml-auto hover:text-gray-500 text-[#37863F] "
              >
                <ChevronRight className="ml-2 hover:text-gray-500 text-[#37863F] " size={20} />
              </button>
            </div>
          ) : (
            <div
              className="flex items-center bg-white rounded-xl shadow-md px-4 py-2 cursor-pointer w-fit"
              onClick={() => setIsExpanded(true)}
            >
              <h3 className="responsiveheading5 font-semibold mr-4 dm_sans">{`Tours`}</h3>
              <ChevronRight className="ml-2 hover:text-gray-500 text-[#37863F] " size={18} />
            </div>
          )}
        </div>

        {images.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5 mt-5 md:mt-10  ">
            {images.map((val, idx) => (
              <div
                key={val._id}
                className=" relative w-[100%] h-[150px] sm:h-[230px]  md:h-[370px] flex justify-center overflow-hidden
                group rounded-[8px] p-2 shadow cursor-pointer hover:shadow focus:shadow active:shadow
       hover:scale-102 focus:scale-102 active:scale-102 transition"
                onClick={() => handleOpenModal(idx)}
              >
                <Image
                  src={val.url}
                  alt={val.alt}
                  fill
                  className="object-cover rounded-[12px]"
                />
                <div className="absolute bottom-0 w-full h-[20%]  md:h-[10%]  bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.80)_100%)]">
                  <p className="text-center dm_sans text-white">{val.title}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center responsive-text mt-5 ">data not found</p>
        )}

        {open && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={handleCloseModal}
          >
            <div
              className="relative flex h-screen w-full items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                aria-label="close"
                onClick={handleCloseModal}
                className="absolute top-22 right-8 z-10 p-1 rounded-full border-1 text-gray-100 bg-[#37863F] border-[#37863F] cursor-pointer hover:bg-gray-100 hover:text-[#37863F]"
              >
                <IoClose className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px]" />
              </button>
              <button
                aria-label="previous"
                onClick={handlePrev}
                className="absolute left-8 z-10 p-1 rounded-full border-1 text-gray-100 bg-[#37863F] border-[#37863F] cursor-pointer hover:bg-gray-100 hover:text-[#37863F]"
              >
                <IoChevronBack className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px]" />
              </button>
              <div className=" relative   rounded-2xl! overflow-hidden 
                        h-[50vh] sm:h-[55vh] xl:h-[60vh]
                        w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] ">
                <Image
                  src={images[currentIndex].url}
                  alt={images[currentIndex].alt}
                  fill
                  className="object-contain  rounded-2xl "
                />
              </div>
              <button
                aria-label="next"
                onClick={handleNext}
                className="absolute right-8 z-10 p-1 rounded-full border-1 text-gray-100 bg-[#37863F] border-[#37863F] cursor-pointer hover:bg-gray-100 hover:text-[#37863F]"
              >
                <IoChevronForward className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px]" />
              </button>
              {/*bottom pictures*/}

              <div
                className="absolute  bottom-17 sm:bottom-5 flex gap-3 justify-center  overflow-x-auto  max-w-[80%] p-2
                      bg-black/40 rounded-md scrollbar-hide  " >
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`relative w-16 h-8 sm:w-20 sm:h-20 cursor-pointer rounded-md overflow-hidden border-2 transition
              ${index === currentIndex
                        ? "border-[#35c0f0]"
                        : "border-transparent hover:border-white/50"
                      }`}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <Image
                      src={img.url}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        )}

        {filteredGallery?.totalPages > 1 && (
          <div className="flex justify-center mt-5">
            <Pagination
              count={filteredGallery?.totalPages}
              page={page}
              onChange={handleChange}
              color="success"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryFilter;
