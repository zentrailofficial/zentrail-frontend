import Banner from "@/comman-component/banner";
import FAQ from "@/comman-component/commonFaq";
import SEO from "@/comman-component/Seo";
import TripCards from "@/comman-component/TripCards";
import { apiClient } from "@/lib/api-client";
import { CircularProgress } from "@mui/material";
import React, { useEffect, useState, useRef, useCallback } from "react";

const UpcommingWiseList = ({ categoryDetails, upcoming }) => {
  const [loading, setLoading] = useState(false);
  const [dataa, setDataa] = useState([]);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // Ref for infinite scroll observer
  const observerTarget = useRef(null);

  const ITEMS_PER_LOAD = 8;

  useEffect(() => {
    if (upcoming?.data) {
      // Show ALL initial data, not just first 4
      setDataa(upcoming?.data);

      // Check if there's more data available from server
      setHasMoreData(upcoming?.data?.length < upcoming?.total);
    }
  }, [upcoming?.data, upcoming?.total]);

  // Fetch more data from API
  const fetchMoreData = useCallback(async () => {
    if (loading || !hasMoreData) return;

    setLoading(true);
    try {
      const nextPage = currentPage + 1;
      const response = await apiClient.get(
        `travel-packages/travel/getalltravelpackage?page=${nextPage}&limit=${ITEMS_PER_LOAD}`,
      );

      if (response?.data?.data?.length > 0) {
        // Append new data to existing data
        const newData = [...dataa, ...response.data.data];
        setDataa(newData);
        setCurrentPage(nextPage);

        // Check if there's still more data
        setHasMoreData(newData.length < upcoming?.total);
      } else {
        setHasMoreData(false);
      }
    } catch (error) {
      console.error("Error fetching more data:", error);
      setHasMoreData(false);
    }
    setLoading(false);
  }, [loading, hasMoreData, dataa, currentPage, upcoming?.total]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMoreData && !loading) {
          fetchMoreData();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "200px", // Trigger earlier
      },
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [fetchMoreData, hasMoreData, loading]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: document.querySelector(".bg-\\[\\#DEF2FC\\]")?.offsetTop - 100 || 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <SEO
        metaTitle={categoryDetails[0]?.metaTitle}
        metaDescription={categoryDetails[0]?.metaDescription}
        keywords={categoryDetails[0]?.metaKeyword}
        ogTitle={categoryDetails[0]?.metaTitle}
        ogDescription={categoryDetails[0]?.metaDescription}
        twitterTitle={categoryDetails[0]?.metaTitle}
        twitterDescription={categoryDetails[0]?.metaDescription}
        robots="index, follow"
        breadcrumbItems={[
          {
            name: categoryDetails[0]?.name || "Upcoming Trips",
            url: `/${categoryDetails[0]?.uid}`,
          },
        ]}
      />
      <Banner
        bgImage={categoryDetails[0]?.image}
        title={`${categoryDetails[0]?.name}`}
        breadcom={[{ title: categoryDetails[0]?.uid }]}
        description={categoryDetails[0]?.bannertitle}
      />
      <div className="custom-container">
        <div
          className="responsive-text quillistEditor dm_sans my-6"
          dangerouslySetInnerHTML={{ __html: categoryDetails[0]?.description }}
        />
      </div>
      <div className="bg-[#DEF2FC] py-6 md:py-10">
        {loading && dataa?.length === 0 ? (
          <div className="h-[400px] flex justify-center items-center">
            <div className="flex gap-3 items-center">
              <CircularProgress size={20} />
            </div>
          </div>
        ) : (
          <>
            {dataa?.length > 0 && (
              <div className="custom-container">
                <div className="flex justify-between items-center">
                  <h3 className="dm_sans responsiveheading2 mb-4">{`Upcoming Trips`}</h3>
                  {/* Debug Info - Remove in production */}
                  <span className="text-sm text-gray-500">
                    Showing {dataa.length} of {upcoming?.total || "?"}
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5">
                  {dataa?.map((val, i) => (
                    <TripCards val={val} key={val?.id || i} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Infinite Scroll Trigger */}
        <div
          ref={observerTarget}
          className="w-full py-8"
          style={{ minHeight: "100px" }} // Ensure element has height
        >
          {hasMoreData ? (
            <div className="flex flex-col items-center justify-center gap-4">
              {loading ? (
                <div className="flex flex-col items-center gap-3">
                  <CircularProgress size={24} />
                  <p className="text-gray-600 text-sm font-medium">
                    Loading more trips...
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  {/* Animated Scroll Down Icon */}
                  <div className="animate-bounce text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm font-medium">
                    Scroll for more trips
                  </p>
                </div>
              )}
            </div>
          ) : (
            dataa.length > 0 && (
              <div className="flex flex-col items-center gap-4 py-4">
                <div className="h-px w-32 bg-gray-300"></div>
                <p className="text-gray-500 text-sm font-medium">
                  That's all! You've seen all {dataa.length} trips
                </p>
                <button
                  onClick={scrollToTop}
                  className="px-4 py-2 cursor-pointer bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Back to Top
                </button>
              </div>
            )
          )}
        </div>
      </div>

      <div className="custom-container pt-2 md:pt-3">
        <FAQ faqData={categoryDetails[0]?.faq} />
      </div>
    </div>
  );
};

export default UpcommingWiseList;
