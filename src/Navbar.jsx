import React from 'react'
import './nav.css'

const Navbar = () => {
  return (
    <div className='bgimg w-full flex flex-row bg-black'>
      <div className='2xl:h-32 w-1/2 ml-[5vh] mt-4'>
        <img src='nexus.png'></img>
      </div>
      <div className='flex flex-row text-white gap-32 mt-20 text-xl '>
        <span><a href=''>Home</a></span>
        <span><a href=''>Projects</a></span>
        <span><a href=''>Events</a></span>
        <span><a href=''>About</a></span>
      </div>
    </div>
  )
}

export default Navbar
