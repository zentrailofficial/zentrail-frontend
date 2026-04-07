import React from 'react'
import Image from 'next/image';
import { TfiEmail } from "react-icons/tfi";
import { MdCall } from "react-icons/md";
import { FaMapPin } from "react-icons/fa6";
import Link from 'next/link';

export const TermsAndConditons = () => {
    return (
        <div className="custom-container bg-white">
            <h2 className="responsiveheading2 text-[#1A2E33] font-medium mt-10   mb-7 ">{`Welcome to Zentrail!`}</h2>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-5   ">{`These Terms & Conditions ("Agreement") govern your access to and use of the Zentrail website ( `}   <a
                href={`https://${"www.zentrail.in".replace(
                    /\s/g,
                    ""
                )} `}
                target="_blank"
                rel="noopener noreferrer"
                className=" cursor-pointer responsive-text   text-[#35C0F0]  gap-1.5 "
            >
                {"www.zentrail.in"}
            </a>
                {` ) and services. By booking a travel batch or using our website, you agree to the following terms.`}</p>
            <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`1. Eligibility`}</h2>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-2   ">{`To book or register on Zentrail, you must:`}</p>
            <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33]   mb-5 sm:mb-7  ">
                <li>{`Be at least 18 years old or have parental/guardian consent if below.`}</li>
                <li>{`Provide accurate personal information for identification and booking purposes.`}</li>
            </ul>
            <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`2. Booking Terms`}</h2>
            <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33]    mb-5 sm:mb-7  ">
                <li>{`All bookings are `}<strong>{`batch-based`}</strong> {` and subject to availability.`}</li>
                <li>{`Each tour batch includes specific inclusions, exclusions, dates, and prices – detailed on the respective `} <strong>{`Package Details`}</strong> {` page.`}</li>
                <li>{`By clicking `} <strong>{`"Book Now"`}</strong>{`, you accept the terms listed on the corresponding tour detail page.`}</li>
                <li>{`A confirmation email will be sent once the payment is processed.`}</li>
            </ul>
            <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`3. Payment & Pricing`}</h2>
            <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33]  mb-5 sm:mb-7  ">
                <li>{`Full or partial payment must be completed during booking.`}</li>
                <li>{`All prices are in INR and include applicable taxes (unless stated otherwise).`} </li>
                <li>{`Pricing may vary depending on demand, availability, or vendor adjustments.`}</li>
            </ul>

            <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`4. Itinerary and Accommodation`}</h2>
            <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33]   mb-5 sm:mb-7  ">
                <li>{`Zentrail acts as a `} <strong>{`curator`}</strong> {`of travel experiences, collaborating with verified partners.`}</li>
                <li>{`Hotel and transport details may change per batch but will always meet or exceed the promised standard.`} </li>
                <li>{`The final itinerary and inclusions will be shared 7 days before departure.`}</li>
            </ul>
            <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`5. Cancellation & Refund`}</h2>
            <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33]   mb-5 sm:mb-7  ">
                <li>{`Refer to our Cancellation Policy for detailed rules.`}</li>
                <li>{`Cancellations after a certain window may be non-refundable.`} </li>
                <li>{`Refunds, if applicable, will be processed within 7–14 business days.`}</li>
            </ul>
            <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`6. Conduct & Responsibilities`}</h2>
            <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33]  mb-5 sm:mb-7  ">
                <li>{`Travelers must maintain respectful behavior throughout the trip`}</li>
                <li>{`Zentrail holds the right to remove any traveler from a batch if their actions harm the group experience.`} </li>
                <li>{`Any damage to property or misconduct will be the participant’s responsibility.`}</li>
            </ul>
            <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`7. Limitations & Disclaimers`}</h2>
            <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33]   mb-5 sm:mb-7  ">
                <li>{`Zentrail is not liable for any unforeseen circumstances (natural disasters, strikes, or third-party defaults).`}</li>
                <li>{`Insurance (if included) is basic and may not cover all cases. Participants are advised to obtain personal travel insurance.`} </li>
            </ul>
            <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`8. Changes to Terms`}</h2>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`Zentrail reserves the right to change these Terms at any time. Changes will be reflected on this page with updated effective dates.`}</p>
            <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`9. Contact Us`}</h2>
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
