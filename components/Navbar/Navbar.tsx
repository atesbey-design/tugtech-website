'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
  const [isButtonActive, setIsButtonActive] = useState(false)

  const openMenu = () => {
    setIsButtonActive(!isButtonActive)
  }

  return (
    <nav className='bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 '>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link href='/'>
          <Image src='/images/logo.png' width={120} alt='logo' height={120} />
        </Link>

        <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
          <Link href='/contact ' className='w-full h-full'>
            <button
              className='md:flex sm:flex md:justify-end sm:justify-end rounded h-1/2 hover:bg-gradient-to-r bg-gradient-to-r  hover:from-fuchsia-500 hover:to-violet-500 from-violet-500 to-fuchsia-500 p-4 text-white
            
            transition:all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 p-4
            '
            >
              İletişime geç
            </button>
          </Link>
          <button
            onClick={openMenu}
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex items-center p-4 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 '
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
            <li className='hover:bg-blue-700 rounded hover:text-white cursor-pointer p-4 lg:px-4 '>
              <ScrollLink
                to='content'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Anasayfa
              </ScrollLink>
            </li>
            <li className='hover:bg-blue-700 rounded hover:text-white cursor-pointer p-4 lg:px-4 '>
              <Link
                href='/services'>
                Hizmetler
              </Link>
            </li>
            <li className='hover:bg-blue-700 rounded hover:text-white p-4 cursor-pointer lg:px-4 '>
              <ScrollLink
                to='about'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Hakkımızda
              </ScrollLink>
            </li>
            <li className='hover:bg-blue-700 rounded hover:text-white cursor-pointer p-4 lg:px-4 '>
              <ScrollLink
                to='project'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projeler
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
