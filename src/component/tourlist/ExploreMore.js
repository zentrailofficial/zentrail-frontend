import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  {
    id: 1,
    title: "Place",
    subtitle: "place discription",
  },
  {
    id: 1,
    title: "Place",
    subtitle: "place discription",
  },
  {
    id: 1,
    title: "Place",
    subtitle: "place discription",
  },
  {
    id: 1,
    title: "Place",
    subtitle: "place discription",
  },
];

const ExploreMore = ({ latestTreaks }) => {
  return (
    <>
      <div className='bg-none sm:bg-[url("/discription/discriptionVector.svg")] h-[300px] bg-no-repeat bg-cover md:mt-10 py-5 md:py-10' />
      <div className="custom-container mt-[-250px]">
        <h3 className="responsiveheading3 md:my-7">{`Explore More`}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {latestTreaks?.data?.map((val, i) => (
            <Link
              href={`/trail/${val.slug}`}
              key={i}
              className="group cursor-pointer"
            >
              <div
                className={`relative h-[200px] md:h-[220px] lg:h-[300px] w-full bg-[#ddd]  rounded-[12px] ${
                  i % 2 === 0 && "lg:mt-4"
                }`}
              >
                <Image
                  src={val?.featuredImage?.url}
                  fill
                  quality={100}
                  className="object-cover rounded-[12px]"
                  alt="iages"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 rounded-[12px] transform transition-all duration-500"></div>
              </div>

              <p
                className="responsive-text ms-4 mt-2 mb-0  text-[#1A2E33] font-medium line-clamp-1"
                style={{ fontWeight: 500 }}
              >
                {val?.title}
              </p>
            <p className="text-[14px] dm_sans ms-4 mt-1 mb-0 leading-[15px] text-[#4D5D60] line-clamp-1">{val?.seo?.metaDescription}</p>
              
              {/* <div
                className="text-[14px] dm_sans ms-4 mt-1 mb-0 leading-[15px] text-[#4D5D60] line-clamp-1"
                dangerouslySetInnerHTML={{ __html: val?.description }}
              /> */}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExploreMore;
