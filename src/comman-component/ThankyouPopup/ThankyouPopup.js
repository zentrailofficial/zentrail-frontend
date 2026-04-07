import Image from 'next/image'
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";


const ThankyouPopup = ({ handleClosee }) => {
    const [loading, setloading] = useState(null);
    const [open, setOpen] = useState(false);
    return (
        <div>
            <button
                onClick={handleClosee}
                aria-label="close"
                className="absolute top-3 right-5 rounded-full p-1 text-[#000] bg-[#ffffff] hover:bg-[#F7F3FF] hover:cursor-pointer"
            >
                <CloseIcon />
            </button>
            <div className=" rounded-md  items-center bg-[#DEF2FC]">
                <h2 className="dm_sans responsiveheading2 font-medium mb-2 pr-10" >
                    {`Thank You for Booking with ZenTrail!`} </h2>
                <div className='grid grid-cols-12  '>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-6 gap-2  justify-items-center sm:justify-items-start">
                        <div className='flex flex-row sm:flex-col gap-2 items-center sm:items-start'>
                            <div className="relative size-[50px]">
                                <Image
                                    src="/thankyou/flight.svg"
                                    alt="Flight Icon"
                                    fill
                                    className="object-fit "
                                />

                            </div>
                            <p className="responsive-text items-start  text-[#00000080]">
                                {`Your adventure is confirmed, and we’re thrilled to have you onboard.`}</p>
                        </div>
                        <div className='flex flex-row sm:flex-col gap-2 items-center sm:items-start'>
                            <div className="relative size-[50px]">
                                <Image
                                    src="/thankyou/map.svg"
                                    alt="Map Icon"
                                    fill
                                    className="object-fit "
                                />

                            </div>


                            <p className="responsive-text items-start  text-[#00000080]">
                                {`Your adventure is confirmed, and we’re thrilled to have you onboard.`}</p>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-6 gap-2 self-baseline-last">
                        <div className="relative size-[200px] sm:size-[300px] items-center m-auto ">
                            <Image
                                src="/thankyou/thankyou.svg"
                                alt="Thankyou Image"
                                fill
                                className="object-contain "
                            />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ThankyouPopup