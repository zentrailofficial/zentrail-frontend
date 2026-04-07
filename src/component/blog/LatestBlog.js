import BlogCard from "@/comman-component/blog/BlogCard";
import React, { useRef } from "react";
// import {
//   MdOutlineArrowBackIos,
//   MdOutlineArrowForwardIos,
// } from "react-icons/md";

const defaultline = {
  line: "No blogs found",
}
const LatestBlog = ({ posts = [], path, content = defaultline }) => {
  const blogData = posts?.blogs;
  // const scrollRef = useRef(null);

  // const scroll = (direction) => {
  //   if (!scrollRef.current) return;

  //   const cardWidth = scrollRef.current.firstChild.offsetHeight + 25; // card width + gap (24px = gap-6)
  //   const scrollAmount = cardWidth; // move 2 cards at once

  //   if (direction === "left") {
  //     scrollRef.current.scrollBy({ top: -scrollAmount, behavior: "smooth" });
  //   } else {
  //     scrollRef.current.scrollBy({ top: scrollAmount, behavior: "smooth" });
  //   }
  // };

  

  return (

      <>
        {blogData?.length > 0 ? (
          <div
            // ref={scrollRef}
            // h-[405px] sm:h-[800px] md:h-[800px]
            className=" overflow-hidden scroll-smooth pt-5 grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {blogData?.map((val, i) => (
              <BlogCard key={i} path={path} blogData={val} border={true} />
            ))}
             {/* {blogData?.map((val, i) => (
              <BlogCard key={i} blogData={val} border={true} />
            ))}
             {blogData?.map((val, i) => (
              <BlogCard key={i} blogData={val} border={true} />
            ))}
             {blogData?.map((val, i) => (
              <BlogCard key={i} blogData={val} border={true} />
            ))} */}
          </div>
        ) : (
          <p className="h-[400px] flex items-center justify-center">
           {content.line}
          </p>
        )}
       {/* {posts?.blogs?.length>0&& <div className="flex gap-3 justify-center mt-5">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full border-1 text-[#37863F] border-[#37863F] cursor-pointer hover:bg-gray-100"
          >
            <MdOutlineArrowBackIos size={20} color="green"/>
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full border-1 text-[#37863F] border-[#37863F] cursor-pointer hover:bg-gray-100"
          >
            <MdOutlineArrowForwardIos size={20} color="green" />
          </button>
        </div>} */}
      </>
  );
};

export default LatestBlog;
