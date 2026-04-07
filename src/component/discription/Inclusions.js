import React, { useState } from "react";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// ✅ helper function to safely parse inclusions/exclusions
const safeParse = (data) => {
  if (!data) return [];
  try {
    if (typeof data[0] === "string") {
      return JSON.parse(data[0]);
    }
    if (Array.isArray(data)) {
      return data;
    }
    return [];
  } catch (e) {
    console.error("Parse error:", e.message);
    return [];
  }
};

export const Inclusions = ({ inclusions, exclusions }) => {
  const [activeTab, setActiveTab] = useState("inclusions");
  const [visibleCount, setVisibleCount] = useState(3);

  const inclusionsData = safeParse(inclusions);
  const exclusionsData = safeParse(exclusions);

  const currentData =
    activeTab === "inclusions" ? inclusionsData : exclusionsData;

  return (
    <div className="bg-[#DEF2FC]">
      <div className="custom-container py-6 md:py-10">
        {/* Tabs */}
        <div className="flex flex-row justify-center gap-5 sm:gap-10 mb-10 items-center">
          <div>
            <button
              onClick={() => {
                setActiveTab("inclusions");
                setVisibleCount(3);
              }}
              className={`responsiveheading2 cursor-pointer hover:shadow-sm px-6 py-1.5 md:px-12 md:py-3 rounded-xl font-semibold transition-all duration-300 bg-[#FFFFFF66]
                ${activeTab === "inclusions"
                  ? "bg-white shadow-md text-[#37863F]"
                  : "text-[#37863F] hover:bg-[#FFFFFF66]"
                }`}
            >
              Inclusions
            </button>
          </div>
          <div className="h-8 border-l border-gray-400" />
          <div>
            <button
              onClick={() => {
                setActiveTab("exclusions");
                setVisibleCount(3);
              }}
              className={`responsiveheading2 cursor-pointer hover:shadow-sm px-6 py-1.5 md:px-12 md:py-3 rounded-xl font-semibold transition-all duration-300 bg-[#FFFFFF66]
                ${activeTab === "exclusions"
                  ? "bg-white shadow-md text-red-600"
                  : "text-red-600 hover:bg-[#FFFFFF66]"
                }`}
            >
              Exclusions
            </button>
          </div>
        </div>

        {/* List */}
        <div className="space-y-2">
          {currentData.slice(0, visibleCount).map((val, i) => (
            <div
              key={i}
              className="flex w-full items-center border-b border-gray-300 pb-2"
            >
              <div className="relative shrink-0 size-[37px] justify-self-center">
                <Image
                  src={
                    activeTab === "inclusions"
                      ? "/discription/thumbs-up.svg"
                      : "/discription/thumbs-down.svg" // optional different icon
                  }
                  fill
                  alt={`${activeTab} image`}
                />
              </div>
              <p className="ml-2 text-[16px]">{val}</p>
            </div>
          ))}
        </div>

        {/* Show more / Show less */}
        {visibleCount < currentData.length && (
          <div className="mt-4 flex justify-end">
            <button
              aria-label="prev slide"
              onClick={() => setVisibleCount((prev) => prev + 100)}
              className="w-10 h-10 flex items-center justify-center rounded-full 
                        border border-green-600 text-green-600 hover:bg-green-100 transition-all"
            >
              <FiChevronDown size={22} aria-hidden="true"/>
            </button>
          </div>
        )}

        {visibleCount >= currentData.length && currentData.length > 3 && (
          <div className="mt-4 flex justify-end">
            <button
              aria-label="next slide"
              onClick={() => setVisibleCount(3)}
              className="w-10 h-10 flex items-center justify-center rounded-full 
                        border border-green-600 text-green-600 hover:bg-green-100 transition-all"
            >
              <FiChevronUp size={22} aria-hidden="true"/>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
