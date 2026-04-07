import { HiArrowLongRight } from "react-icons/hi2";
import { useState } from "react";
import Image from "next/image";

const itineraryData = [
  {
    id: "Day 1",
    tittle: " Arrival & Acclimatization",
    image: "/discription/itinerary.svg",
    points: [
      "Arrive at the base camp (scenic mountain village).",
      "Welcome briefing with the trek leader and fellow trekkers.",
    ],
    points1: [
      "  Evening walk around the campsite to acclimatize.",
      "Overnight stay in tents/guesthouse under starlit skies.",
    ],
  },
  {
    id: "Day 2",
    tittle: "Trek Begins - Into the Forest Trails",
    image: "/discription/itinerary.svg",
    points: [
      "Morning warm-up and breakfast.",
      "Start trek through pine & oak forests.",
      "Evening campsite with bonfire & storytelling.",
    ],
    points1: [
      "  Cross bubbling streams and local hamlets.",
      "Packed lunch on the trail.",
    ],
  },
  {
    id: "Day 3",
    tittle: " Climb to Higher Meadows",
    image: "/discription/itinerary.svg",
    points: [
      "Trek to alpine meadows with panoramic mountain views.",
      "Spot wildflowers, grazing sheep, and Himalayan birds.",
      "Photography stop at a viewpoint.",
    ],
    points1: [
      " Camping at a high-altitude meadow.",
      "Dinner under clear skies, ideal for stargazing.",
    ],
  },
  {
    id: "Day 4",
    tittle: " Summit Day – The Big Adventure",
    image: "/discription/itinerary.svg",
    points: [
      "Early morning push towards the summit point.",
      "Reach the peak with breathtaking 360° mountain vistas.",
      "Celebrate with group photos & packed breakfast.",
    ],
    points1: [
      " Begin descent back to meadow camp.",
      "Evening rest, reflection & farewell gathering.",
    ],
  },
  {
    id: "Day 5",
    tittle: " Descent & Departure",
    image: "/discription/itinerary.svg",
    points: [
      "Morning descent through forest trails.",
      "Reach base camp by noon.",
    ],
    points1: [
      " Group farewell & certificate distribution.",
      "Depart with lifetime memories.",
    ],
  },
];
const Itinerary = ({ apiData }) => {
  const [expanded, setExpanded] = useState(null);
  const handleChange = (index) => {
    setExpanded(expanded === index ? null : index);
  };
  return (
    <div className="custom-container py-4 md:py-6">
      <h2 className=" responsiveheading2 dm_sans  text-center font-medium mb-5">{`Itinerary`}</h2>
      {apiData?.map((item, index) => (
        <div key={index} className="mb-2.5">
          {expanded !== index && (
            <div
              className={`px-[15px] sm:px-[23px]
                              py-[14px] sm:py-[15px] md:py-[17px] 
                              rounded-[12px] sm:rounded-[30px] border border-[#35C0F0] cursor-pointer transition-all 
                            bg-[#FAFAFA] 
                              
            `}
              onClick={() => handleChange(index)}
            >
              <div className="flex  justify-between items-center ">
                <div className=" flex flex-col sm:flex-row  gap-1 sm:gap-2 display-inline-block">
                  {expanded !== index && (
                    <h3
                      className={`responsiveheading6 dm_sans font-bold text-[#1A2E33]`}
                    >
                      <span className="text-[#35C0F0]   whitespace-nowrap">{`Day `}
                        {index + 1}{" "}</span>
                      {item.title}{" "}
                    </h3>
                  )}
                  {/* {expanded !== index && (
                    <h6
                      className={`responsiveheading6 dm_sans font-bold text-[#1A2E33]  }`}
                    >
                      
                    </h6>
                  )} */}
                </div>

                {expanded === index ? (
                  ""
                ) : (
                  <div className="shrink-0">
                  <HiArrowLongRight className="transform transition-all duration-200 text-[40px] scale-x-150 text-[#37863F]" />
                  </div>
                )}
              </div>
            </div>
          )}

          {expanded === index && (
            <div
              className="  className={`px-[15px] sm:px-[23px]   py-[16px] sm:py-[18px] md:py-[22px] 
                         bg-[#FAFAFA] border border-[#35C0F0] rounded-[12px] sm:rounded-[30px] justify-center justify-items-center items-center  "
              onClick={() => handleChange(index)}
            >
              <div
                className={`  flex flex-row w-fit  gap-1 sm:gap-2 md:mb-4 py-2 px-4 sm:px-10
                             items-center rounded-[12px] sm:rounded-[220px] bg-[#E8F8E1] mx-4 md:margin-[auto]}`}
              >
                <h3 className="responsiveheading6 dm_sans font-medium text-[#1A2E33] ">
                  <span className="text-[#35C0F0] whitespace-nowrap">{`Day `}{index + 1}{" "}</span>
                  {item.title}
                </h3>
              </div>

              {/* <div className="flex flex-col lg:flex-row gap-4 items-center justify-between  px-[16px] sm:px-[0px] "> */}
              {/* <ul className="text-[16px] list-disc list-inside space-y-1 text-[#4D5D60]">
                  {item.points.map((points, index) => (
                    <li key={index}>{points}</li>
                  ))}
                </ul> */}

              <div className="flex  items-center justify-self-start">
                <div className="relative shrink-0 size-[60px]  items-center hidden sm:block ">
                  <Image
                    src={"/discription/itinerary.svg"}
                    className=" "
                    fill
                    alt=" Itinerary Image"
                  />
                </div>
                <div className="quillistEditor p-4 sm:p-2" dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
              {/* <ul className="text-[16px] list-disc list-inside space-y-1 text-[#4D5D60]">
                  {item.points1.map((points1, index) => (
                    <li key={index}>{points1}</li>
                  ))}
                </ul> */}
              {/* </div> */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Itinerary;
