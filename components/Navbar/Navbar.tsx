'use client'
import Image from 'next/image'
import React, { use, useEffect, useState } from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
  const [isButtonActive, setIsButtonActive] = useState(false)
  console.log(isButtonActive)

  const openMenu = () => {
    setIsButtonActive(!isButtonActive)
  }

  useEffect(() => {
    console.log(isButtonActive)
  }, [isButtonActive])

  return (
    <nav className='bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200 '>
      <div
      className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
         <ScrollLink
                to='content'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
               <Image src='/images/logo.png' width={120} alt='logo' height={120} />
              </ScrollLink>
        

        <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
          <button className='md:flex sm:flex md:justify-end sm:justify-end rounded h-1/2  bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 text-white'>
            Contact us
          </button>
          <button
            onClick={openMenu}
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 '
            aria-controls='navbar-sticky'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isButtonActive ? 'flex' : 'hidden'
          } md:flex md:items-center w-full md:w-auto`}
          id='navbar-sticky'
        >
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100  w-full rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white '>
            <li className='hover:bg-blue-700 rounded hover:text-white p-1 lg:px-4 '>
              <ScrollLink
                to='content'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </ScrollLink>
            </li>
            <li className='hover:bg-blue-700 rounded hover:text-white p-1 lg:px-4 '>
              <ScrollLink
                to='services'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Services
              </ScrollLink>
            </li>
            <li className='hover:bg-blue-700 rounded hover:text-white p-1 lg:px-4 '>
              <ScrollLink
                to='about'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About us
              </ScrollLink>
            </li>
            <li className='hover:bg-blue-700 rounded hover:text-white p-1 lg:px-4 '>
              <ScrollLink
                to='project'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
