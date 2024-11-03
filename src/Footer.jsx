import React from 'react'
import './nav.css'
const Footer = () => {
  return (
    <div className='low:h-full lg:h-[30vh] bgimg flex low:flex-col lg:flex-row justify-between items-center text-white p-16 bg-black'>
        <div>
            <p className='low:h-16 xl:h-24 low:mb-4 lg:mb-16 text-5xl'>Nexus</p>
            <p className='low:text-lg max-lg:hidden'>© Nexus all rights reserved</p>
        </div>
        <div>
            <h2 className='low:hidden lg:flex lg:text-2xl'>Quick Links</h2>
            <div className='low:hidden lg:flex flex-row gap-10 lg:text-lg pt-4 cursor:pointer'>
                <p className='cursor-pointer'>Home</p>
                <p className='cursor-pointer'>Events</p>
                <p className='cursor-pointer'>Clubs</p>
                <p className='cursor-pointer'>Timeline</p>
            </div>
            <h2 className='low:text-2xl pt-10 max-lg:text-center'>Contact Us</h2>
            <div className='text-center flex low:flex-col lg:flex-row low:gap-4 lg:gap-10 lg:text-lg pt-4 low:pb-12 lg:pb-0'>
                <p>pesevents@gmail.com</p>
                <p>+91 9632109324</p>
                <p>+91 9632109324</p>
            </div>
        </div>
        <div className='flex low:flex-row lg:flex-col items-center justify-center gap-4'>
            <img src='Github.png' alt='Github' className='low:h-8 lg:h-11 cursor-pointer'/>
            <img src='Instagram.png' alt='Instagram' className='low:h-6 lg:h-8 cursor-pointer'/>
            <img src='Discord.png' alt='Discord' className='low:h-6 lg:h-8 cursor-pointer' />
        </div>
        <p className='low:text-sm lg:hidden pt-10 text-center'>© PESEvents all rights reserved</p>
    </div>
  )
}

export default Footer