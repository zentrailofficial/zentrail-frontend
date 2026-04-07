import Image from "next/image";

const data = [
  {
    id: 1,
    image: "/about/about6.webp",
    title: "Nature is not a luxury, it’s a necessity.",
  },
  {
    id: 2,
    image: "/about/about7.webp",
    title: "Your mind matters more than your itinerary.",
  },
  {
    id: 3,
    image: "/about/about8.webp",
    title: "Small groups and quiet spots beat noisy crowds.",
  },
  {
    id: 4,
    image: "/about/about9.webp",
    title: "Real stories, local cultures, and authentic experiences.",
  },
];

const AboutSection3 = () => {
  return (
    <div className="custom-container items-center py-6 md:py-10">
      <div className="grid  md:grid-col-1 lg:grid-cols-2 gap-[30px] lg:gap-[100px]">
        <div className="flex flex-col  ">
          <h3 className="responsiveheading2 text-center ">
            {`Why We Do What We Do`}
          </h3>
          <div className="flex justify-center">
            <div className="flex-shrink-0 mt-1">
              <div className="w-[320px] md:w-[450px] h-[120px] md:h-[180px] relative mt-[20px] lg:mt-[70px]  ">
                <Image
                  src="/about/about5.webp"
                  alt="about image"
                  fill
                  className="object-center"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <div className="grid grid-cols-2 gap-[40px]">
          {data?.map((val,i)=> <div key={i}>
              <div key={val.id} className="w-[60px] h-[60px] md:w-[75px] md:h-[75px] relative  mx-auto">
                <Image
                  src={val.image}
                  alt="about image"
                  fill
                  className="object-center"
                  quality={100}
                />
              </div>
              <p className="text-[#4D5D60] responsive-text text-center">
                {val.title}
              </p>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;
