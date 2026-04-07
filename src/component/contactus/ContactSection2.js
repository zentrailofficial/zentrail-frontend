import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactSection2 = () => {
  return (
    <div className="custom-container py-6 md:py-10">
      <h2 className="responsiveheading3">{`Reach Us Anytime`}</h2>
      <p className="responsive-text text-[#1A2E33]">{`Feel free to connect with us!`}</p>
      <div className="grid grid-cols-12 gap-2 mt-4 md:mt-6 lg:mt-10">
        <div className=" col-span-12 md:col-span-12 lg:col-span-5 xl:col-span-6">
          <div className="flex gap-4 my-2 items-center">
            <div className="shrink-0 relative w-[60px] h-[60px] md:w-[60px] md:h-[60px] rounded-full overflow-hidden lg:w-[70px] xl:w-[70px]  lg:h-[70px] xl:h-[70px] ">
              <Image
                src="/contact/contact2.svg"
                width={100}
                height={100}
                quality={100}
                alt="contact image"
              />
            </div>
            <div>
              <p
                style={{ fontWeight: 600 }}
                className="responsive-text font-bold text-[#000000]"
              >{`Address`}</p>
              <p className="responsive-text text-[#4D5D60]">{`Plot No. 500, Kakrola Housing Complex, Dwarka Mor, Delhi – 110079`}</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
          <div className="flex gap-4 my-2 items-center">
            <div className="shrink-0 relative w-[60px] h-[60px] md:w-[60px] md:h-[60px] rounded-full overflow-hidden lg:w-[70px] xl:w-[70px]  lg:h-[70px] xl:h-[70px] ">
              <Link
                href={`https://wa.me/${"+91 8287316546".replace(/\s/g, "")} `}
                target="_blank"
                rel="noopener noreferrer"
                className=" cursor-pointer responsive-text text-[#4D5D60]"
              >
                <Image
                  src="/contact/contact3.svg"
                  width={100}
                  height={100}
                  quality={100}
                  alt="contact image"
                />
              </Link>
            </div>
            <div>
              <p
                style={{ fontWeight: 600 }}
                className="responsive-text font-bold text-[#000000] whitespace-nowrap"
              >{`Call / WhatsApp`}</p>
              <Link
                href={`https://wa.me/${"+91 8287316546".replace(/\s/g, "")} `}
                target="_blank"
                rel="noopener noreferrer"
                className=" cursor-pointer responsive-text text-[#4D5D60]"
              >
                {"+91 8287316546"}
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
          <div className="flex gap-4 my-2 items-center">
            <div className="shrink-0 relative w-[60px] h-[60px] md:w-[60px] md:h-[60px] rounded-full overflow-hidden lg:w-[70px] xl:w-[70px]  lg:h-[70px] xl:h-[70px] ">
             <Link
                href={`mailto:${"info@zentrail.in"}`}
                className=" responsive-text text-[#4D5D60] cursor-pointer text-sm md:text-sm lg:text-md "
              >
              <Image
                src="/contact/contact4.svg"
                width={100}
                height={100}
                quality={100}
                alt="contact image"
              />
              </Link>
            </div>
            <div>
              <p
                style={{ fontWeight: 600 }}
                className="responsive-text  text-[#000000]"
              >{`Email`}</p>
              <Link
                href={`mailto:${"info@zentrail.in"}`}
             
                className=" responsive-text text-[#4D5D60] cursor-pointer text-sm md:text-sm lg:text-md "
              >
                {"info@zentrail.in"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection2;
