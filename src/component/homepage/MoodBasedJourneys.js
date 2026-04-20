import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  {
    id: 1,
    title: "For Peace & Calm",
    description: "Serene valleys, quiet forests, digital detox escapes.",
    image: "/homepage/moodbased.png",
    alt: "Image For Peace & Calm",
  },
  {
    id: 2,
    title: "For Love & Romance",
    description: "Serene trails, quiet valleys, slow travel.",
    image: "/homepage/moodbased1.png",
    alt: "Image For Love & Romance",
  },
  {
    id: 3,
    title: "For Adventure",
    description: "High-altitude treks, mountain circuits, road trips.",
    image: "/homepage/moodbased3.webp",
    alt: "Image For Curiosity",
  },
  {
    id: 4,
    title: "For Healing",
    description: "Wellness retreats, yoga escapes, soulful breaks.",
    image: "/homepage/moodbased4.webp",
    alt: "Image For Exploration",
  },
  {
    id: 5,
    title: "For Curiosity",
    description: "Offbeat villages, cultural trails, unexplored India.",
    image: "/homepage/moodbased5.webp",
    alt: "Image For Digital Detox",
  },
  {
    id: 6,
    title: "For Curiosity",
    description: "Offbeat villages, cultural trails, unexplored India.",
    image: "/zantraillogo.png",
    alt: "Image For Curiosity",
  },
];

const slug = (val) => {
  const slug = val
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug;
};

const MoodBasedJourneys = ({ Moodbasejourney }) => {
  return (
    <div className="custom-container py-6 md:py-10">
      <h2 className="responsiveheading2 dm_sans">{`Find Trips by Travel Style `}</h2>
      <p className="responsive-text mt-1 dm_sans text-[#4D5D60]">{`Not sure where to go? Pick your travel style and discover trips that match.`}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-4">
        {Moodbasejourney?.map((val, i) => (
          <Link
            // prefetch
            href={`travel-by-mood/${slug(val.title)}`}
            key={i}
            className="cursor-pointer group relative p-5 w-full h-[200px] sm:h-[300px] md:h-[300px] rounded-[8px] overflow-hidden flex flex-col justify-end text-white text-center"
          >
            {/* background image */}
            <div className="absolute inset-0 group overflow-hidden">
              <Image
                // src={val.image}
                src={data[i]?.image}
                alt={data[i]?.alt}
                sizes="250px"
                quality={75}
                fill
                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110 group-focus:scale-110 group-active:scale-110"
              />
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* content */}
            <div className="relative z-10">
              <p className="responsiveheading5 dn_sans">{val.title}</p>
              <p className="dm_sans line-clamp-1">{val.description}</p>
              <div className="flex items-center justify-center w-full mt-2">
                <div className="w-[30%] h-[1px] bg-white rounded-full group-hover:h-[3px] transition-all duration-300"></div>

                <div className="mx-4">
                  <Image
                    src="/footerlogo.png"
                    width={30}
                    height={30}
                    alt="image"
                  />
                </div>
                <div className="w-[30%] h-[1px] bg-white rounded-full group-hover:h-[3px] transition-all duration-300"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoodBasedJourneys;
