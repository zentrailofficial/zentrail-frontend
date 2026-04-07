import Link from 'next/link'
import React from 'react'

const LastSection = () => {
  return (
  <div className="py-4 md:py-5">
  <div className="custom-container">
    <div className="flex flex-col justify-center items-center gap-2 sm:gap-3">
      <Link href={"/cancellation-policy"}>
        <div className="py-3 px-6 text-center rounded-[200px] bg-[#DEF2FC] group hover:bg-[#39BEEF] transition duration-300 w-[200px] sm:w-[350px]">
          <h2 className="text-[16px]  dm_sans font-medium text-[#1A2E33] group-hover:text-white">
            {`Cancellation Policy`}
          </h2>
        </div>
      </Link>
      <Link href={"/terms-and-conditions"}>
        <div className="py-3 px-6 text-center rounded-[200px] bg-[#DEF2FC] group hover:bg-[#39BEEF] transition duration-300 w-[200px] sm:w-[350px]">
          <h2 className="text-[16px]  dm_sans font-medium text-[#1A2E33] group-hover:text-white">
            {`Terms & Conditions`}
          </h2>
        </div>
      </Link>

    </div>
  </div>
</div>

  )
}

export default LastSection