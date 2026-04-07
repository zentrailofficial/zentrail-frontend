import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const images = [
  { name: "Jyothsna Pathak", image: "/homepage/jyothsna.webp", msg: "Traveled with Zentrail for Dev Diwali, and it was truly a heartwarming experience. Everything was beautifully planned, and the team made us feel so connected and comfortable throughout. Watching the ghats light up with the group felt magical — memories I’ll cherish for a long time." },
  { name: "Aravind Mohan", image: "/homepage/arvind.webp", msg: "Dev Deepavali with Zen Trails ✨Had an amazing experience celebrating Dev Deepavali with Zen Trails! Girdhar and Mahek led the group with great warmth and care — from the seamless VIP darshan and cozy stay to the magical Ganga boating night, everything was perfectly curated. The smooth travel and wonderful group made it truly unforgettable. Can’t wait for more soulful journeys with Zen Trails! ❤️" },
  { name: "Sanjana Dhami ", image: "/homepage/sanjana.webp", msg: "Some trips leave memories — this one gave me meaning. Everything was beautifully planned, but the personal touch from Girdhar and Mehak made it truly special. It never felt like a tour, but a heartfelt journey filled with amazing people and unforgettable moments. Grateful to Zen Trails for turning a trip into a story I’ll always cherish. ❤️" },
  { name: "Lipakshi Das", image: "/homepage/lipakshi.webp", msg: "Loved the overall planning by Zentrail. The trip felt stress-free and magical amidst the chaos of Dev Deepawali.Special shoutout to our trip captain Girdhar for making the experience seamless and filling it with doses of continuous laughter. 👏🏻😁" },
  { name: "Taha Lotia", image: "/homepage/taha.webp", msg: "Had such a wonderful experience with Zentrail on our Dev Diwali trip this year! From start to finish, everything was so thoughtfully planned, the stays were cozy, the food was amazing, and every destination felt special. Girdhar and Mahek led the group with so much care and energy, making sure we all had the best time. It honestly felt less like a trip and more like a beautiful journey with friends!Would 100% recommend Zentrail to anyone who loves effortless, fun, & meaningful travel!" },
  { name: "Prreeti Saroha ", image: "/homepage/preeti.webp", msg: "I did a Banaras trip with them to attend Dev Dipawali and I am super impressed with the team (Girdhar and Mehak). The team ensured our comfort during the trip and made the bookings tastefully like a gud Traveller bus, nice hotel with meals and VIP pass for the darshan at Kashi Vishwanath temple. Everything was well planned and nicely executed. Plus they try to include everyone in the group activities and ensure no one feels left out which is great. I would recommend this travel group. 10/10 . 🙂🙂" },
];


const Feedback = ({ msg }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const contentRef = useRef(null);

  const handleNext = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setIsPaused(true);
    setExpanded(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const checkClamped = () => {
      const lineHeight = parseFloat(getComputedStyle(el).lineHeight || "20");
      const maxHeight = lineHeight * 2; // for 2 lines
      setIsClamped(el.scrollHeight > maxHeight);
    };

    checkClamped();

    const resizeObserver = new ResizeObserver(checkClamped);
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, [currentIndex]);

  const getIndex = (offset) => {
    return (currentIndex + offset + images.length) % images.length;
  };
  return (
    <div className="py-6 md:py-10 bg-[#DEF2FC]">
      <div className="custom-container flex flex-col items-center justify-center  gap-7 sm:gap-11">
        <div className=" text-center">
          <h2 className="responsiveheading2 font-bold mb-2">{` What Our Travelers Say`}</h2>
          <p
            ref={contentRef}
            className={`responsive-text text-[#4D5D60] transition-all duration-300 ease-in-out ${expanded ? "" : "line-clamp-2"
              }`}
          >
            {images[currentIndex]?.msg} 
          
          </p>
            {isClamped && (
              <button
                onClick={() => setExpanded((prev) => !prev)}
                className="text-blue-600 mt-2 text-sm hover:underline focus:outline-none cursor-pointer"
              >
                {expanded ? "Show Less" : "Show More"}
              </button>
            )}
        </div>
        <div
          className="flex items-center justify-center gap-4 sm:gap-6">
          {[-1, 0, 1].map((offset) => {
            const index = getIndex(offset);
            const isActive = offset === 0;

            return (
              <div
                key={index}
                className={`w-[100px] h-[110px] sm:w-[200px] sm:h-[180px] lg:w-[218px] lg:h-[200px]  rounded-[12px] relative transition-all duration-300 shadow-lg ${isActive && "scale-110 "
                  }`}
              >
                <div>
                  <Image
                    src={images[index]?.image}
                    alt={`Gallery ${index}`}
                    fill
                    className="object-fit rounded-[12px]"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 ">
                    <p className="text-[#fff] text-center line-clamp-1">{images[index]?.name}</p>
                  </div>
                </div>
                {isActive && (
                  <div className="w-full h-full cursor-pointer relative bg-[#cce5ed] opacity-65 rounded-[12px]">
                    <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   w-14 h-14 sm:w-20 sm:h-20 rounded-[12px]  flex items-center justify-center  ">
                      {/* <Image
                        src="/homepage/feedback.png"
                        alt="active"
                        fill
                        className="object-cover rounded-[12px]"
                      /> */}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

        </div>
        <div className="flex gap-5 md:gap-8 mt-0.5 sm:mt-1 ">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full border text-[#37863F] border-[#37863F] cursor-pointer hover:bg-gray-100"
          >
            <MdOutlineArrowBackIos size={18} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full border text-[#37863F] border-[#37863F] cursor-pointer hover:bg-gray-100"
          >
            <MdOutlineArrowForwardIos size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
