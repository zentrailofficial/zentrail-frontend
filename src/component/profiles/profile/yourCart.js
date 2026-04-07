import React from 'react'
import CustomButton from '@/comman-component/customButton'
import Link from 'next/link'

export const YourCart = () => {
    return (
        <div className="custom-container items-center py-8 md:py-10">
            <div className="grid grid-cols-1  sm:grid-cols-2  gap-[20px] lg:gap-[100px] justify-self-center sm:justify-self-start items-center">
                <div className="flex flex-col items-center sm:items-start">
                    <h2 className="responsiveheading2 text-center sm:text-start">
                        {`Your Cart`}
                    </h2>
                    <p className="responsive-text text-center sm:text-start mt-2 mb-6 text-[#4D5D60]">{`Your previous adventures are waiting to be revisited.`}</p>
                    <CustomButton  >
                        <Link href="/" passHref legacyBehavior>
                            {`Proceed to Checkout`}
                        </Link>
                    </CustomButton>
                </div>
                <div className="items-center sm:items-start">
                    <p className="responsive-text text-center sm:text-start ">{`Tropical Escape`}</p>
                    <p className="text-[16px] text-center sm:text-start ">{`Price per person: ₹499`}</p>
                    <h3 className="responsiveheading3 text-center sm:text-start mt-6">{`No. of Travelers: 2, Total Amount: ₹998`}</h3>

                </div>
            </div>
        </div>
    )
}
