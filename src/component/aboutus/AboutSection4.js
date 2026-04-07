import { useState } from "react";
import classes from "./about.module.css";
import Image from "next/image";
import CustomButton from "@/comman-component/customButton";
import ConnectUsModal from "@/comman-component/connectUsModal/ConnectUsModal";

const data = [
  {
    id: 1,
    image: "/about/about10.png",
    title: "Mood-Based Journeys",
    description: "Tell us how you feel. We’ll suggest where to go",
  },
  {
    id: 2,
    image: "/about/about11.png",
    title: "Curated, Soulful Trails",
    description: "Offbeat, calm, eco-friendly.",
  },
  {
    id: 3,
    image: "/about/about12.png",
    title: "Local First",
    description: "Support communities, not corporations.",
  },
  {
    id: 4,
    image: "/about/about13.png",
    title: "No Rush Travel",
    description: "Slow down, breathe, stay longer.",
  },
  {
    id: 5,
    image: "/about/about14.png",
    title: "Conversations Over Confirmations",
    description: "We connect before we book.",
  },
];

 
const AboutSection4 = () => {
  const [open, setOpen] = useState(false);
 const handleTripPlanning = () => {
  setOpen(true);
 }
  return (
    <>
     <ConnectUsModal open={open} setOpen={setOpen}/>
    <div className={classes.aboutsection3bg}>
     
      <div className="custom-container py-6 md:py-10">
        <h3 className="responsiveheading2 text-center text-white mb-10">
          {`What Makes ZenTrail Different?`}
        </h3>
        <div className="grid gap-[50px]  grid-cols-1 sm:grid-cols-2">
          {data?.map((val,i) => (
            <div key={i} className="flex sm:flex-col md:flex-row sm:text-center md:text-left items-center gap-[20px]">
            <div className="shrink-0 w-[60px] h-[60px] md:w-[95px] md:h-[95px] relative">
              <Image
                src={val.image}
                alt={`${val?.title} icons`}
                fill
                quality={100}
              />
              </div>
              <div>
                <p className="responsive-text text-[#eeeeee]">
                  {val?.title}
                </p>
                <p className="responsive-text text-[#e4e4e4] mt-1">
                  {val?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="custom-container py-6 md:py-10">
        <div className="text-center  sm:flex sm:text-left  gap-[50px]">
            <Image src="/about/owner2.png" width={145} height={180} quality={100} alt="owner image" className="mx-auto sm:m-0"/>
            <div>
                <p className="responsiveheading2 mt-4 sm:mt-1">{`Girdhar Sharma`}</p>
                <p className="responsive-text mb-4 mt-2 text-[#232323]">{`Founder of ZenTrail `}<span className="text-green-600">{`~ `}</span>{`A Dreamer who found his passion in peaceful journeys.`}</p>
                <CustomButton ariaLabel={"Connect with Us"} onClick={handleTripPlanning} width={211} height={52}>{`Connect with Us`}</CustomButton>
            </div>
        </div>
    </div>
    </>
  );
};

export default AboutSection4;
