import React from 'react'
import CustomBanner1 from '@/comman-component/customBanner1'
import SEO from "@/comman-component/Seo";
import { MdCall } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';
import { FaMapPin } from 'react-icons/fa';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { HiOutlineRefresh } from "react-icons/hi";
import { FcRefresh } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import { FaCreditCard } from "react-icons/fa6";
import { FiAlertTriangle } from "react-icons/fi";

import Link from 'next/link';
import Image from 'next/image';
import CustomButton from '@/comman-component/customButton';
import { useRouter } from 'next/router';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const CancellationPolicy = () => {
    const router = useRouter();
    return (
        <>
            <SEO
                url="http://www.zentrail.in/cancellation-policy"
                metaTitle="Cancellation & Refund Policy | Zentrail adventure in India |   "
                metaDescription=" Read Zentrail cancellation and refund policy to understand our rules on cancellations, refunds, and rescheduling of travel batches and trips."
                keywords=" Cancellation Refund Policy, zentrail in India, best travel services near me, Trekking in india, explore india with us "
                canonical="http://www.zentrail.in/cancellation-policy"
                ogTitle="Cancellation & Refund Policy | Zentrail adventure in India |"
                ogDescription="Read Zentrail cancellation and refund policy to understand our rules on cancellations, refunds, and rescheduling of travel batches and trips."
                ogImage={`${SITE_URL}/og-image.jpg`}
                twitterTitle="Cancellation & Refund Policy | Zentrail adventure in India |"
                twitterDescription="Read Zentrail cancellation and refund policy to understand our rules on cancellations, refunds, and rescheduling of travel batches and trips."
                twitterImage={`${SITE_URL}/logoo.jpg`}
                robots="index, follow"
                breadcrumbItems={[
                  { name: "Cancellation & Refund Policy", url: "/cancellation-policy" }
                ]}
            />
            <CustomBanner1 title={"Cancellation & Refund Policy"} breadcom="cancellation-policy"
            />
            <div className="custom-container bg-white">
                <p className="responsive-text text-[#1A2E33]  font-medium  mt-10   mb-2 sm:mb-5  ">{`We understand that plans change. Zentrail has created a fair and transparent cancellation policy for all batch travelers. Please read it carefully before making a booking.`}</p>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2 flex gap-1.5 items-center ">
                    <HiOutlineRefresh />  {` Cancellation by Traveler`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">{`You may cancel your batch booking by emailing us at info@zentrail.in or contacting our support team.`}</p>
                <div className="overflow-x-auto responsive-text">
                    <table className="min-w-full border border-gray-300  mb-5 sm:mb-7">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-6 py-3 text-left  font-medium text-gray-700">
                                    <strong>{`Cancellation Timeline`}</strong>
                                </th>
                                <th className="border border-gray-300 px-6 py-3 text-left  font-medium text-gray-700">
                                    <strong>{`Refund Eligibility`}</strong>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-6 py-3"><strong>{`15 days or more before departure`}</strong> </td>
                                <td className="border border-gray-300 px-6 py-3">{`80% refund of total package amount`}</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-6 py-3"><strong>{`8–14 days before departure`}</strong></td>
                                <td className="border border-gray-300 px-6 py-3">{`50% refund`}</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-6 py-3"><strong>{`7 days or less before departure`}</strong></td>
                                <td className="border border-gray-300 px-6 py-3"><strong>{`No refund`}</strong></td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-6 py-3"><strong>{`No-show on departure day`}</strong></td>
                                <td className="border border-gray-300 px-6 py-3">{`No refund, booking forfeited`}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7 "><strong>{`Note:`}</strong> {` The cancellation date is counted from the day we receive your written/email request.`}</p>
                </div>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2 flex items-center ">
                    <FcRefresh />{` Batch Rescheduling (By Traveler)`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-2 sm:mb-3 ">{`You can request a shift to another available batch `}<strong>{` at least 10 days `}</strong>{` before your trip.`}</p>
                <ul className="responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-2 sm:mb-3 ">
                    <li>{`Subject to seat availability in the next batch. `}</li>
                    <li> {`₹500 rescheduling fee applies.`}</li>
                    <li>{`Only`} <strong>{`one-time `}</strong>{`rescheduling allowed per booking.`} </li>
                </ul>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2 flex items-center  "><FcCancel />{`  Cancellation by Zentrail`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-2 sm:mb-3 ">{`In rare cases where Zentrail cancels a batch due to low bookings, weather issues, or safety concerns: `}<strong>{`  at least 10 days `}</strong>{`before your trip.`}</p>
                <ul className="responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-2 sm:mb-3 ">
                    <li>{`You will receive a `} <strong>{` 100% refund `}</strong>{`of the package amount.`} </li>
                    <li>{`Or, you may opt to shift to another batch`} <strong>{`without any fee. `}</strong> </li>
                </ul>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2 gap-2 flex items-center "><FaCreditCard />{`Refund Process`}</h2>
                <ul className="responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-2 sm:mb-3 ">
                    <li>{`Approved refunds are initiated within`} <strong>{` 7–14 working days `}</strong>{` to the original payment method.`} </li>
                    <li>{`Processing time depends on your bank/payment gateway.`} </li>
                </ul>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2 gap-2 flex items-center "><FaMapPin />{` Non-Refundable Charges`}</h2>
                <ul className="responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-2 sm:mb-3 ">
                    <li>{` Any third-party fees (e.g., train/flight tickets, special permits) already paid are non-refundable.`} </li>
                    <li>{`Add-ons, customizations, or last-minute hotel upgrades are also non-refundable.`} </li>
                </ul>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  gap-2 flex items-center "><FiAlertTriangle />{` Important Notes`}</h2>
                <ul className="responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-2 sm:mb-3 ">
                    <li>{`Zentrail is not responsible for delays or losses due to missed transport, incorrect documents, or personal emergencies.`} </li>
                    <li>{`Refunds are not provided for unused services during the trip (early departure, skipped meals, etc.).`} </li>
                    <li>{`Travel insurance (if any) claims must be settled directly with the insurer.`} </li>
                </ul>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2 flex gap-1.5 "><BiSolidPhoneCall />{` Contact for Cancellations`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium mb-2  "><strong>{`Zentrail`}</strong></p>
                <p className="responsive-text text-[#1A2E33]  font-medium mb-1  items-center flex gap-1.5"><FaMapPin />{` Plot No 500, Kakrola Housing Complex, Dwarka Mor, Delhi – 110079`}</p>
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
               
                <CustomButton 
                    onClick={() => {router.push("/upcoming-trips")}}
                    className="dm_sans font-medium text-[14px] leading-[15px]"
                    type="submit"
                >
                    {`View Upcoming Batches`}
                </CustomButton>
              
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
        </>
    )
}

export default CancellationPolicy