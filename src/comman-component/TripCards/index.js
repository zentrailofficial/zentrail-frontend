"use client"
import Image from "next/image";
import Link from "next/link";

const TripCards = (props) => {
  const { duration, price, title, featuredImage, slug, discount, seo } = props.val;

  return (
    <Link href={`/trail/${slug}`} prefetch={false}>
      <div className="group rounded-[8px] p-2 shadow cursor-pointer hover:shadow focus:shadow active:shadow
       hover:scale-102 focus:scale-102 active:scale-102 transition bg-white">
        <div className="flex flex-col w-full">
          <div
            className="relative w-full aspect-[1/1.05] bg-cover rounded-[8px] bg-no-repeat"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.1),rgba(0,0,0,0.1),rgba(0,0,0,0.1),rgba(0,0,0,0.8))` }}
          >
            <div className="bg-[#00000045] rounded-[8px] invisible group-hover:visible group-focus:visible group-active:visible inset-0 absolute z-4" />
            <div className="bg-[#00000045] rounded-[8px]  inset-0 absolute z-5" />
            <div className="size-[100%]  relative">
              <Image src={featuredImage?.url} alt={featuredImage?.alt || title} className="inset-0 absolute object-cover rounded-[8px] " fill sizes="(max-width: 768px) 100vw, 
           (max-width: 1200px) 50vw, 
           33vw"/>
            </div>
            {/* /////////////////  day nightt /////////// */}
            <div className="absolute flex items-center gap-2 top-2 right-4 z-10">
              <div className="size-6 relative">
                <Image src={"/discription/daynigntcardlogo.png"} fill alt="icons day and night" sizes="24px" />
              </div>
              <span className="whitespace-nowrap text-[#ffffff] font-light text-[14px] dm_sans">
                {duration.toUpperCase()}
              </span>
            </div>
            {/* /////////////////  proice /////////// */}
            <div className="absolute  gap-2 bottom-2 left-3  z-10">
              <p className="dm_sans responsive-text font-medium text-[#ffffff]">
                {`Price: ₹`}
                {(price - (
                  discount?.amount
                    ? discount.amount
                    : discount?.percentage > 0
                      ? (price * discount.percentage) / 100
                      : 0
                )).toLocaleString()}
              </p>
              {/* <p className="dm_sans text-[12px] font-normal text-[#fff]">
                ({(discount?.amount > 0 || discount?.percentage > 0) ? <del>{`₹`}{price}</del> : <span>{`₹`}{price}</span>}{discount?.amount > 0 ? <><span className="delay-900 text-[lightgreen] ms-3">{`₹`} {discount?.amount}{" Off"}</span> </> : discount?.percentage > 0 ? <><span className="delay-900 text-[lightgreen] ms-3">{discount?.percentage}{`%`} {" Off"}</span></> : ""})
              </p> */}
              <p className="dm_sans text-[12px] font-normal text-[#fff]">
                {(discount?.amount > 0 || discount?.percentage > 0) ? (
                  <span className="relative inline-block">
                    <del className="relative">
                      <span className="inline-block relative z-10">{`₹${price.toLocaleString()}`}</span>
                      {/* Custom strike line */}
                      <span className="absolute left-0 top-1/2 w-full h-[1px] z-30 bg-red-400 rotate-[-6deg] origin-left"></span>
                    </del>
                  </span>
                ) : (
                  <span>{`₹${price.toLocaleString()}`}</span>
                )}

                {discount?.amount > 0 ? (
                  <span className="delay-900 text-[lightgreen] ms-3">{`₹${discount.amount} Off`}</span>
                ) : discount?.percentage > 0 ? (
                  <span className="delay-900 text-[lightgreen] ms-3">{discount.percentage}% Off</span>
                ) : ""}
              </p>

            </div>
          </div>

          {/* ////////////////// titile /////////////// */}
          <div className="m-2 ms-3">
            <p className="responsive-text line-clamp-1" style={{ fontWeight: 500 }}>
              {title}
            </p>
            <p className="dm_sans text-[15px] leading-[18px] mt-1 text-slate-500 line-clamp-1">{seo?.metaDescription}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TripCards;
