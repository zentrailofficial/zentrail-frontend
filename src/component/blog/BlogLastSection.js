import ConnectUsModal from "@/comman-component/connectUsModal/ConnectUsModal";
import CustomButton from "@/comman-component/customButton";
import buttonStyle from "@/comman-component/customButton/buttonStyle";
import CustomButton2 from "@/comman-component/customButton2";
import LinkButton from "@/comman-component/LinkButtton/LinkButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";


const defaultContent = {
  heading: "Ready to Take the First Step?",
  paragraph:
    "Our blog is just the beginning. Head over to the Tours Page and find your next adventure with a batch that fits your vibe.",
};
const BlogLastSection = ({content = defaultContent }) => {
  const router = useRouter()
  const [open, setOpen] = useState(false);
   const handleTripPlanning = () => {
    setOpen(true);
   }

   
  return (
    <div className="custom-container py-2 sm:py-10  ">
        <ConnectUsModal open={open} setOpen={setOpen}/>
      <div className="grid grid-cols-12  gap-5 justify-between md:gap-8 lg:gap-[47px] items-center mb-4 sm:mb-4">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2 className="responsiveheading2 text-[#1A2E33] mb-1 sm:mb-2 md:mb-4">
            {content.heading}
          </h2>
          <p className="responsive-text text-[#4D5D60]">{content.paragraph}</p>
        </div>
        <div className=" col-span-12 sm:col-span-6 lg:col-span-4 inline-block">
           <div className="mb-3">
            <Link href="/upcoming-trips">
                <LinkButton text=" Explore Upcoming Treks" />
              </Link>
             {/* <CustomButton type="submit" sx={buttonStyle.bloglastsection1} onClick={()=>router.push("/upcoming-trips")}>
               Explore Upcoming Treks
            </CustomButton> */}
          </div> 
          {/* <CustomButton2 onClick={handleTripPlanning} type="submit" sx={buttonStyle.bloglastsection2}>
           {` View Packages by Month`}
          </CustomButton2> */}
        </div>
      </div>
    </div>
  );
};

export default BlogLastSection;
