import React from 'react'
import Image from 'next/image';
import { TfiEmail } from "react-icons/tfi";
import { MdCall } from "react-icons/md";
import { FaMapPin } from "react-icons/fa6";
import Link from 'next/link';

export const Disclaimer = () => {
    return (
        <div className="custom-container bg-white">
            <p className=" responsive-text text-[#1A2E33] font-medium  mt-10     mb-7  ">{`This Disclaimer governs your use of our website `} 
                <a href={`https://${"www.zentrail.in".replace(
                /\s/g,
                ""
            )} `}
                target="_blank"
                rel="noopener noreferrer"
                className=" cursor-pointer responsive-text   text-[#35C0F0]  gap-1.5 "
            >
                {"www.zentrail.in"}
            </a> {` and the information provided here. By accessing or using the site, you agree to the following:`}</p>
            <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`1. General Information`}</h2>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-4 sm:mb-7 ">{`Zentrail provides this website as a service to the public. While we make every effort to keep information such as itineraries, descriptions, and prices accurate and up to date, we do not make any guarantees regarding completeness, reliability, or suitability. Use of the content is entirely at your own risk.`}</p>
            <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`2. Liability`}</h2>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-4 sm:mb-7 ">{`Zentrail will not be held responsible for any loss, injury, or damage—direct or indirect—that may arise from the use of our website, reliance on its content, or inability to access the site.`}</p>
            <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`3. External Links`}</h2>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-4 sm:mb-7 ">{`Our website may include links to third-party websites for reference and convenience. Zentrail does not control or endorse these sites and cannot be held liable for their content, accuracy, or practices.`}</p>
            <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`4. No Endorsement`}</h2>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-4 sm:mb-7 ">{`Any promotions, advertisements, or references to third-party services displayed on our website do not constitute endorsement or recommendation by Zentrail`}</p>
            <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`5. Travel Information`}</h2>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-4 sm:mb-7 ">{`All itineraries, schedules, pricing, availability, and guidelines are subject to change without prior notice. Images are used for illustrative purposes only and may not reflect the actual experience.`}</p>
            <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`6. Unforeseen Circumstances & Insurance`}</h2>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-4 sm:mb-4 ">{`Zentrail is not liable for any unforeseen circumstances, including natural disasters, strikes, or third-party defaults, that may affect travel plans.`}</p>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-4 sm:mb-7 ">{`If insurance is included, it is basic and may not cover all situations. We strongly recommend that participants arrange personal travel insurance to safeguard against risks beyond Zentrail’s control.`}</p>
            <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`7. Contact Us`}</h2>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-4 sm:mb-4 ">{`For further assistance, get in touch with us at:`}</p>
            <p className="responsive-text text-[#1A2E33]  font-medium mb-2  "><strong>{`Zentrail`}</strong></p>
            <p className="responsive-text text-[#1A2E33]  font-medium mb-1  items-center flex gap-1.5"><FaMapPin />{`Plot No 500, Kakrola Housing Complex, Dwarka Mor, Delhi – 17079`}</p>
            <p className="dm_sans responsive-text text-[#1A2E33]  font-medium mb-1  ">
                <a
                    href={`mailto:${"info@zentrail.in"}`}
                    className=" responsive-text text-[#1A2E33] cursor-pointer items-center text-sm md:text-sm lg:text-md flex gap-1.5"
                >
                    <TfiEmail />{`Email: `}<strong>{"info@zentrail.in"}</strong>
                </a></p>
            <p className="dm_sans responsive-text text-[#1A2E33]  font-medium mb-2  ">
                <a
                    href="tel:8287316546"

                    target="_blank"
                    rel="noopener noreferrer"
                    className=" cursor-pointer responsive-text items-center  text-[#1A2E33] flex gap-1.5 "
                >
                    <MdCall />{"Phone: "} <strong>{"+91 8287316546"}</strong>
                </a>
            </p>

            <div className="justify-items-center sm:justify-items-end   sm:w-full mt-5 mb-14">
                <p className="text-[20px]  pr-12 mb-2 text-[#4D5D60]">{`Powered by-`}</p>
                <div  >
                    <Link href="/" >
                        <Image
                            src="/privacyLogo.png"
                            alt="logo"
                            width={155}
                            height={180}
                        />
                    </Link>
                </div>

            </div>
        </div>
    )
}
