import React from 'react'
import Image from 'next/image';
import { TfiEmail } from "react-icons/tfi";
import { MdCall } from "react-icons/md";
import { FaMapPin } from "react-icons/fa6";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { FcSettings } from "react-icons/fc";
import { BiSolidPhoneCall } from "react-icons/bi";
import Link from 'next/link';

const Cookies = () => {
    return (
        <div className="custom-container bg-white">
            <p className="responsive-text text-[#1A2E33]  font-medium  mt-10   mb-2 sm:mb-5  ">{`At `}<strong>{`Zentrail`}</strong>{`, we value your privacy. This Cookies Policy explains how and why cookies and similar technologies are used when you visit our website.`}</p>
            <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2 flex gap-1.5  "><PiMagnifyingGlassDuotone />{` What Are Cookies?`}</h2>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">{`Cookies are small text files stored on your browser or device when you visit a website. They help websites function properly, enhance user experience, and collect data for analytics and personalization.`}</p>
            <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2 flex gap-1.5 "><FcSettings />{` Types of Cookies We Use`}</h2>
            <div className="overflow-x-auto responsive-text">
                <table className="min-w-full border border-gray-300  mb-5 sm:mb-7">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-6 py-3 text-left  font-medium text-gray-700">
                                <strong>{`Cookie Type`}</strong>
                            </th>
                            <th className="border border-gray-300 px-6 py-3 text-left  font-medium text-gray-700">
                                <strong>{`Purpose`}</strong>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-6 py-3"><strong>{`Essential Cookies`}</strong> </td>
                            <td className="border border-gray-300 px-6 py-3">{`Enable basic site functions like navigation and security.`}</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-6 py-3"><strong>{`Analytics Cookies`}</strong></td>
                            <td className="border border-gray-300 px-6 py-3">{`Track visitor behavior (e.g., Google Analytics) to improve performance.`}</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-6 py-3"><strong>{`Functionality Cookies`}</strong></td>
                            <td className="border border-gray-300 px-6 py-3">{`Remember preferences such as language and location.`}</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-6 py-3"><strong>{`Marketing Cookies`}</strong></td>
                            <td className="border border-gray-300 px-6 py-3">{`Deliver relevant ads on platforms like Facebook or Google Ads.`}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`Why We Use Cookies`}</h2>
            <ul className="responsive-text list-disc px-6  text-[#1A2E33]  font-medium mb-5 sm:mb-7">
                <li>{`To improve our website’s functionality and user experience.`}</li>
                <li>{`To remember your batch preferences and past bookings. `}</li>
                <li>{`To show relevant offers or retarget you with social media ads.`}</li>
                <li>{`To collect anonymized visitor statistics.`}</li>
            </ul>
            <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`Your Consent`}</h2>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-1 ">{`When you first visit `}<a
                href={`https://${"www.zentrail.in".replace(
                    /\s/g,
                    ""
                )} `}
                target="_blank"
                rel="noopener noreferrer"
                className=" cursor-pointer responsive-text   text-[#35C0F0]  gap-1.5 "
            >
                {"www.zentrail.in"}
            </a> {`, a cookie consent banner will appear asking for your permission. By continuing to use the website, you consent to our use of cookies as outlined in this policy.`}</p>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">{`You may`} <strong>{`accept`}</strong>{`,`} <strong>{`reject`}</strong>{`, or`}  <strong>{`customize`}</strong> {` your cookie settings.`}</p>
            <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`Managing Cookies`}</h2>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-3 ">{`You can control cookies through your browser settings. Here's how:`}</p>
            <ul className="responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-2 sm:mb-3 ">
                <li><strong>{`Chrome: `}</strong>{` Settings > Privacy and Security > Cookies`}</li>
                <li> <strong>{`Firefox:`}</strong>{` Preferences > Privacy & Security > Cookies and Site Data `}</li>
                <li> <strong>{`Safari: `}</strong> {`Preferences > Privacy > Manage Website Data`}</li>
            </ul>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7 "><strong>{`Note:`}</strong> {`Disabling cookies may affect how our website functions.`}</p>
            <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`Third-Party Cookies`}</h2>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-2 sm:mb-3 ">{`We use trusted partners for services like:`}</p>
            <ul className="responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-2 sm:mb-3 ">
                <li><strong>{`Google Analytics `}</strong></li>
                <li> <strong>{`Meta Pixel (Facebook)`}</strong></li>
                <li> <strong>{`YouTube Embed Tracking `}</strong> </li>
            </ul>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7 "> {`Disabling cookies may affect how our website functions.These third parties may set their own cookies governed by their respective privacy policies.`}</p>
            <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`Changes to This Policy`}</h2>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">{`Zentrail may update this policy from time to time. When we do, we’ll update the “Last Updated” date at the bottom of this page.`}</p>
            <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2 flex gap-1.5 "><BiSolidPhoneCall />{` Contact Us`}</h2>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-4 sm:mb-4 ">{`For queries about cookies or privacy:`}</p>
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

export default Cookies