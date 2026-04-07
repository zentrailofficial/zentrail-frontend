import CustomButton from "@/comman-component/customButton";
import LinkButton from "@/comman-component/LinkButtton/LinkButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const LastSection = () => {
  const router = useRouter()
  return (
    <div className="pb-4 mt-[-30px] sm:mt-0 md:py-6 bg-[url('/homepage/lastsection.png')] bg-cover bg-center ">
      <div className="custom-container">
        <div className="grid grid-cols-12 gap-5  sm:gap-11 items-center pt-11">
          <div className="col-span-12 sm:col-span-6 md:col-span-7 dm_sans pr-0 md:pr-28 lg:pr-48">
            <div>
              <h2 className="responsiveheading2 font-medium text-[#1A2E33] mb-3  ">
                {`Your Mood Knows the Way.`}{" "}
                <span className="text-[#37863F]">{` Let’s Find Your Trail.`}</span>
              </h2>
            </div>
            <p className="responsive-text  text-[#4D5D60]">{`Reconnect with yourself, rediscover India, and travel the way you feel.`}</p>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-5">
             <Link href="/upcoming-trips">
                <LinkButton text="Start My Mood Journey" />
              </Link>
            {/* <CustomButton
              ariaLabel={"Start My Mood Journey"}
              onClick={() => router.push("/upcoming-trips")}
              borderRadius="12px"
              width={{ sm: "290px", md: "340px", lg: "380px" }}
            >
              {` Start My Mood Journey`}
            </CustomButton> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
