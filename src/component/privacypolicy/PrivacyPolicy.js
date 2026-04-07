import React from 'react'
import Image from 'next/image';
import { TfiEmail } from "react-icons/tfi";
import { MdCall } from "react-icons/md";
import Link from 'next/link';

const PrivacyPolicy = () => {
    return (

        <div className="custom-container bg-white">
            <p className="dm_sans responsive-text text-[#1A2E33] font-medium  mt-10  mb-2 sm:mb-8 ">{`Welcome to Zentrail. Your privacy is critically important to us, and we are committed to protecting the information you share with us. This Privacy Policy outlines what data we collect, how we use it, how we protect it, and your rights regarding your personal information.`}</p>
            <h2 className="dm_sans dm_sans responsiveheading2 text-[#1A2E33] font-medium  mb-2">{`1. Information We Collect`}</h2>
            <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-2   ">{`We may collect the following information when you use our website or services:`}</p>
            <h3 className="dm_sans responsiveheading5 text-[#1A2E33] font-medium  mb-2 ">{`Personal Information`}</h3>
            <ul className="dm_san responsive-text list-disc px-6 font-medium text-[#1A2E33]   mb-5 ">
                <li>{`Phone number`}</li>
                <li>{`Gender`}</li>
                <li>{`Date of birth`}</li>
                <li>{`ID proof details (if required for bookings)`}</li>
                <li>{`Emergency contact`}</li>
                <li>{`Address`}</li>
            </ul>
            <h3 className=" dm_sans responsiveheading5 text-[#1A2E33] font-medium mb-2   ">{`Technical Data`}</h3>
            <ul className=" dm_san responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-2  ">
                <li>{`IP address`}</li>
                <li>{`Browser type`}</li>
                <li>{`Device type`}</li>
                <li>{`Location (via browser or app if consented)`}</li>
                <li>{`Access logs, cookies, and usage behavior`}</li>

            </ul>

            <h3 className="dm_sans responsiveheading5 text-[#1A2E33] font-medium mb-2   ">{`Payment Information`}</h3>
            <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium mb-7 sm:mb-10 ">{`We do not store any payment or card details. Payments are securely handled by trusted third-party payment gateways like Razorpay, PayU, etc.`}</p>
            <h2 className=" dm_sans  responsiveheading2 text-[#1A2E33] font-medium  mb-2  ">{`2. How We Use Your Data `}</h2>
            <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium mb-2  ">{`We use your data to:`}</p>
            <ul className="dm_san responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-7 sm:mb-10">
                <li>{`Confirm and manage bookings`}</li>
                <li>{`Send you booking-related communications (email/WhatsApp/SMS)`}</li>
                <li>{`Personalize your experience`}</li>
                <li>{`Offer customer support`}</li>
                <li>{`Improve our website and offerings`}</li>
                <li>{`Send promotional content (only with your consent)`}</li>
                <li>{`Comply with legal obligations`}</li>
            </ul>
            <h2 className="dm_sans dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`3. Data Sharing & Disclosure `}</h2>
            <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium mb-2  ">{`We do not sell or rent your personal data. We may share information with:`}</p>
            <ul className="dm_san responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-7 sm:mb-10 ">
                <li>{`Trek partners or local guides (for logistic planning)`}</li>
                <li>{`Verified third-party tools for communication and analytics`}</li>
                <li>{`Law enforcement or regulators (only if legally required)`}</li>
            </ul>
            <h2 className="dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`4. Data Storage & Security`}</h2>
            <ul className=" dm_san responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-7 sm:mb-10">
                <li>{`We use SSL encryption to protect data in transit.`}</li>
                <li>{`Your data is stored on secure servers.`}</li>
                <li>{`Access is strictly controlled internally.`}</li>
                <li>{`We regularly audit and monitor systems for vulnerabilities.`}</li>
            </ul>
            <h2 className="dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`5. Cookies & Tracking Technologies `}</h2>
            <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium mb-2   ">{`We use cookies to:`}</p>
            <ul className="dm_san responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-2  ">
                <li>{`Track user preferences`}</li>
                <li>{`Improve performance and navigation`}</li>
                <li>{`Serve relevant ads (with consent)`}</li>
            </ul>
            <p className="dm_sans responsive-text text-[#1A2E33]  font-medium  mb-8 ">{`Users can disable cookies via browser settings. View our full Cookies & Consent Policy for details.`}</p>
            <h2 className="dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`6. Your Rights `}</h2>
            <p className="dm_sans responsive-text text-[#1A2E33]  font-medium  mb-2 ">{`You have the right to:`}</p>
            <ul className="dm_san responsive-text list-disc px-6  text-[#1A2E33]  font-medium mb-2">
                <li>{`Access your data`}</li>
                <li>{`Update or correct your data`} </li>
                <li>{`Request data deletion`}</li>
                <li>{`Withdraw consent at any time`}</li>
                <li>{`Lodge a complaint with a data authority (if applicable)`}</li>
            </ul>
            <p className="dm_sans responsive-text text-[#1A2E33]  font-medium  mb-7 sm:mb-10  ">{`You can manage your privacy preferences anytime through your profile or by contacting us.`}</p>
            <h2 className="dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`7. Children’s Privacy `}</h2>
            <p className="dm_sans responsive-text text-[#1A2E33]  font-medium mb-7 sm:mb-10  ">{`Zentrail does not knowingly collect personal data from individuals under 13 years without verified parental consent.`}</p>
            <h2 className="dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`8. Changes to This Policy `}</h2>
            <p className="dm_sans responsive-text text-[#1A2E33]  font-medium mb-7 sm:mb-10   ">{`We may update this Privacy Policy from time to time. The “Last Updated” date will reflect any changes. We recommend reviewing it periodically.`}</p>

            <h2 className="dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`9. Contact Us `}</h2>
            <p className="dm_sans responsive-text text-[#1A2E33]  font-medium mb-4   ">{`If you have questions about this Privacy Policy, feel free to reach out at:`}</p>
            <p className="dm_sans responsive-text text-[#1A2E33]  font-medium mb-2  ">
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

export default PrivacyPolicy;