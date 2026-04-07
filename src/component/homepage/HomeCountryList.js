import CustomButton from "@/comman-component/customButton";
import LinkButton from "@/comman-component/LinkButtton/LinkButton";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const HomeCountryList = ({ allState }) => {
  const router = useRouter()
  // Example: ["Delhi", "Madhya Pradesh", "Himachal Pradesh", "Rajasthan"]
  // if (!allState || allState.length === 0) return null;

  const statess = allState?.slice(0, 4);

  // Predefine positions for each state button (you can expand as needed)
  const positions = [
    "bottom-[150px] sm:bottom-[40px] left-[10px] sm:left-[50px] lg:left-[90px]",
    "bottom-[150px] sm:bottom-[40px] right-[10px] sm:right-[60px] lg:right-[100px]",
    "bottom-[220px] sm:bottom-[140px] left-[10px] sm:left-[60px] md:left-[180px] lg:left-[300px]",
    "bottom-[220px] sm:bottom-[140px] right-[10px] sm:right-[60px] md:right-[180px] lg:right-[300px]",
  ];

  return (
    <div className='bg-[url("/discription/discriptionVector.svg")] bg-no-repeat bg-cover'>
      <div className="custom-container">
        <div className="relative h-[280px]">
          {statess?.map((state, i) => (
            <Link
              href={`travel-by-region/${state?.toLowerCase()?.replace(/\s+/g, "-")}`}
              key={i}
              tabIndex={0}
              className={`transition-transform duration-300 ease-in-out absolute ${positions[i] || ""
                } 
                border-[#C6C6C6] bg-white  cursor-pointer 
                 shadow-sm px-4 py-2 rounded-[10px]  transition-all  duration-300 ease-in-out hover:bg-[#35C0F0] 
                hover:text-white  hover:-translate-y-2 focus:bg-[#35C0F0]  focus:text-white 
                 focus:-translate-y-2  active:bg-[#35C0F0]  active:text-white  active:-translate-y-2`}
               >
              <Image
                src="/homepage/location.png"
                alt="location"
                width={40}
                height={40}
                className="absolute top-[-25px] left-1/2 -translate-x-1/2 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="dm_sans">{state}</span>
            </Link>
          ))}

          <h2 className="responsiveheading2  w-[200px] md:w-[260px] dm_sans text-center absolute bottom-[80px] left-1/2 -translate-x-1/2">
            {`Explore India's Regions`}
          </h2>
          <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2">
          <Link href="/travel-by-region">
            <LinkButton text="View More State" />
          </Link>
            {/* <CustomButton ariaLabel={"view more states"} onClick={() => router.push("travel-by-region")} borderRadius="12px">View More State</CustomButton> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCountryList;
