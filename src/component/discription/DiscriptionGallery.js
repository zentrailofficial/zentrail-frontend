import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "/discription/gallery.jpg",
  "/discription/gallery1.jpg",
  "/discription/gallery2.jpg",
  "/discription/gallery3.jpg",
];

const DiscriptionGallery = ({ images}) => {
  // const images = gallery?.map((val)=>val.url)

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const handleNext = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images?.length);
  };

  const handlePrev = () => {
    setIsPaused(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images?.length) % images?.length
    );
  };
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, images?.length]);

  const getIndex = (offset) => {
    return (currentIndex + offset + images?.length) % images?.length;
  };

  if (images?.length < 3) {
    return
  }

  return (
    <div className="py-6 md:py-10">
      <div className="custom-container flex flex-col items-center justify-center">
        <div className=" mb-10">
          <h2 className="responsiveheading2 dm_sans font-bold">{`Gallery`}</h2>
        </div>

        <div className="flex items-center justify-center gap-6">
          {[-1, 0, 1].map((offset) => {
            const index = getIndex(offset);
            const isActive = offset === 0;

            return (
              <div
                key={index}
                className={`w-[100px] h-[140px] sm:w-[180px] sm:h-[300px] lg:w-[350px] lg:h-[420px]  rounded-xl relative transition-all duration-300 shadow-lg ${isActive
                    ? "scale-110 border-4  border-[#35C0F0]"
                    : "opacity-70"
                  }`}
              >
                <div>
                  <Image
                    src={images && images[index]?.url}
                    // alt="gallery image" 
                    alt={images &&images[index]?.alt}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                {isActive && (
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center">
                    <div>
                      <Image
                        src="/discription/discrptiongallery.png"
                        alt="active"
                        fill
                        className="object-cover "
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex gap-5  mt-6  sm:mt-10 ">
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="p-3 rounded-full border-1 text-[#37863F] border-[#37863F] cursor-pointer hover:bg-gray-100 disabled:opacity-50"
          >
            <FaChevronLeft aria-hidden="true" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="p-3 rounded-full border-1 text-[#37863F] border-[#37863F] cursor-pointer hover:bg-gray-100 disabled:opacity-50"
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscriptionGallery;
