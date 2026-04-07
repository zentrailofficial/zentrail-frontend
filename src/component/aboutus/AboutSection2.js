import classess from "./about.module.css";
import Image from "next/image";

const AboutSection2 = () => {
  return (
    <div className={classess.aboutbg}>
      <div className="custom-container py-6 sm:pb-6  md:pb-10">
        <h2 className="dm_sans  responsiveheading2  font-medium text-center">{`What Is ZenTrail?`}</h2>
        <p className="text-[#1A2E33] dm_sans responsive-text text-center font-medium leading-[24px] mt-1 mb-8">{`ZenTrail isn’t your regular travel agency.`}</p>
        <div className="grid  sm:grid-col-1 md:grid-cols-2  gap-[30px]">
          <div className="bg-white  p-[16px] rounded-[6px]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="size-[60px] lg:size-[80px] flex items-center justify-center">
                  <Image
                    src="/about/about3.png"
                    alt="about image 1"
                    height={100}
                    width={100}
                    quality={100}
                  />
                </div>
              </div>
              <div>
                <h3 className="dm_sans text-[#000000] responsive-text">
                  {`Mood-Based Travel`}
                </h3>
                <p className="text-[#697f83] responsive-text font-medium  mt-1">
                  {`Whether you’re feeling tired, curious, heartbroken, or free — ZenTrail has a trail that matches your state of mind.`}
                </p>
              </div>
            </div>
          </div>
 
          <div className="bg-white  p-[16px] rounded-[6px]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="size-[60px] lg:size-[80px] flex items-center justify-center">
                  <Image
                    src="/about/about4.png"
                    alt="about image"
                    height={100}
                    width={100}
                    quality={100}
                  />
                </div>
              </div>
              <div>
                <h3 className="dm_sans text-[#000000] responsive-text font-medium">
                  {`Soulful Getaways`}
                </h3>
                <p className="text-[#697f83] responsive-text font-medium mt-1">
                  {`From hidden Himalayan villages to forest retreats, from spiritual walks to eco-conscious slow travel, we take you places that make you feel found.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection2;
