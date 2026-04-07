import Image from "next/image";

const HeroSectionAbout = () => {
  return (
    <div className="custom-container pt-8 md:mt-5">
      <div className="grid grid-cols-12 gap-[20px] items-start">
        <div className="item-center col-span-12 md:col-span-7 ">
          <div className="mb-4 lg:mb-8">
            <h2 className="dm_sans responsiveheading2  font-medium lg:leading-[58px]">
              {`Meet the Mind Behind the Mood -`}
              <span className="text-[#37863F]">{` Girdhar Sharma`}</span>
            </h2>
            <p className="text-[#4D5D60] dm_sans responsive-text mt-2 lg:mt-4 md:pr-10">
              {`Some people start a travel company for profit. Girdhar Sharma
              started ZenTrail because he once got lost in the right direction.`}
            </p>
          </div>

          <div className="mb-4 lg:mb-8 border-1 border-[#DEF2FC] p-[16px] lg:mr-[100px] rounded-[6px]">
            <div className="flex items-start justify-between gap-4">
             
              <div>
                <h3 className="dm_sans responsiveheading6 font-medium leading-[32px]">
                  {`A Mission Founded in Peace`}
                </h3>
                <p className="text-[#4D5D60] responsive-text  font-bold leading-[24px] mt-3">
                  {`To help people discover places where nature heals, and silence
                  speaks.`}
                </p>
              </div>
               <div className="flex-shrink-0 mt-1">
                <div className="size-[70px] flex items-center justify-center">
                  <Image src="/about/about2.svg" alt="about2 image" height={100} width={100} quality={100}/>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4 lg:mb-8 border-1 border-[#DEF2FC] p-[16px] lg:mr-[100px] rounded-[6px]">
            <div className="flex items-start gap-4">
             
              <div>
                <h3 className="dm_sans text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-[32px]">
                  {`The Journey Begins`}
                </h3>
                <p className="text-[#4D5D60] responsive-text  font-medium  mt-3">
                  {`It began with a quiet trek in the Himalayas. No cell signals. No checklists. Just stillness. That’s when Girdhar felt it, the world was too noisy, and people needed a different way to travel.`}
                </p>
              </div>
               <div className="flex-shrink-0 mt-1">
                <div className="size-[60px] flex items-center justify-center">
                  <Image src="/about/about1.svg" alt="about1 image" height={100} width={100} quality={100}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 flex justify-center">
          <div className="rounded-[30px] overflow-hidden w-[300px] md:w-[100%] shadow-lg h-[400px]  md:h-[500px] lg:h-[500px]">
            <Image
            width={400}
            height={500}
            quality={100}
            objectPosition="end"
              src="/about/owner.webp"
              alt="Motorcycle rider in mountain landscape with adventure bike"
             className="w-full h-full object-cover object-bottom"

            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionAbout;
