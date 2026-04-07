import Image from 'next/image'
import React from 'react'

const ContactSection1 = () => {
  return (
    <div className='custom-container py-6 md:py-10'>
        <div className='block sm:grid grid-cols-12 items-center '>
            <div className='col-span-7 pr-0 md:pr-4 lg:pr-10  sm:py-0'>
                <h2 className='responsiveheading2'>{`We’re Just a Message Away-  Let’s Make Your Journey Real`}</h2>
                <p className='responsive-text text-[#4D5D60] mt-2 mb-3 md:mb-6'>{`Planning your next escape? Got questions about a trail? Or just dreaming of mountains, forests, or silent sunrises?`}</p>
                <p className='responsive-text text-[#4D5D60]'>{`At `}<span className='text-green-600'>{`ZenTrail`}</span>{`, we’re not just here to take you `}<span className='whitespace-nowrap'>{`places —`}</span></p>
                <p className='responsive-text text-[#4D5D60] mb-5'>{`We’re here to guide your mood-based, offbeat journey through India. No bots. No noise. Just real people who love nature as much as you do.`}</p>
            </div>
            <div className='col-span-5 flex justify-center'>
                <Image src="/contact/contact1.webp" height={310} width={200} quality={100} alt="contact image"/>
            </div>
        </div>
    </div>
  )
}

export default ContactSection1