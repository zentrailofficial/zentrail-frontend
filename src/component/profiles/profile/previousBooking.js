import React from 'react'
import Image from 'next/image';

export const PreviousBooking = () => {
    const data = [
        {
            id: 1,
            image: "/profilePage/earth.png",
            label: "Manali",
            date: " Jan 10 - Jan 15",
            bookingid: "123456",
            status: " Completed",
        },

        {
            id: 2,
            image: "/profilePage/bali.png",
            label: "Bali",
            date: " Aug 20 - Aug 30 ",
            bookingid: " 789101 ",
            status: " Completed ",
        },
    ];
    return (
        <div className="bg-[#E8F8E1]">
            <div className="custom-container items-center py-8 md:py-10 ">
                <div className="grid grid-cols-1  lg:grid-cols-2 gap-[20px] lg:gap-[70px]">
                    <div>
                        <h2 className="responsiveheading2 text-center lg:text-start mt-4 lg:mt-10">
                            {`Previous Bookings`}
                        </h2>
                        <p className="responsive-text text-center lg:text-start mt-2">{`Your previous adventures are waiting to be revisited.`}</p>

                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1  flex-col justify-items-center   lg:items-start gap-[18px]">
                        
                            {data?.map((val) => (
                                <div key={val.id} className=" flex flex-col  sm:flex-row  items-center sm:items-start  lg:items-start text-center sm:text-start gap-5 p-2">
                                    <div className='relative shrink-0 size-[60px]  '>
                                        <Image src={val.image} className="bg-[#fff] rounded-full  p-2" fill alt="Profile image" />
                                    </div>
                                    <div className='flex flex-col sm:flex-row  '>
                                        <div className="flex-initial w-50 "> 
                                         <p className=" responsive-text  font-normal text-[#1A2E33] whitespace-nowrap">{val.label}</p>
                                        <p className="text-[16px]    mt-0.5 font-normal text-[#000000c4] whitespace-nowrap  ">{`Dates:`}{val.date}</p>
                                    </div>
                                    <div className=' flex-initial w-50 flex-col  sm:flex-row  '> 
                                         <p className=" responsive-text  font-medium text-[#1A2E33] whitespace-nowrap" >{`Booking ID : `}{val.bookingid}</p>
                                        <p className="text-[16px]   font-medium  text-[#1A2E33] mt-1 whitespace-nowrap ">{`Status :`}{val.status}</p>
                                    </div>
                                    </div>

                                </div>
                            ))}
                      

                    </div>
                </div>
            </div>
        </div>

    )
}
