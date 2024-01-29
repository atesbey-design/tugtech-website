'use client'
import Image from 'next/image'
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Content = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])
  return (
    <>
      <div
        data-aos='fade-up'
        className='flex flex-col justify-center space-y-8 lg-px-0 px-8'
      >
        <div className='lg:text-5xl text-3xl ' >
          Great <span className='text-fuchsia-800 font-bold'>Product</span> is{' '}
          <br /> <span className='font-bold'>built by great</span>{' '}
          <span className='text-purple-800 font-bold'> teams</span>
        </div>
        <div className='text-m lg:text-2zl'>
          We help build and manage a team of world-class developers <br /> to
          bring your vision to life
        </div>
        <div>
          <button className='h-14 bg-gradient-to-r bg-blue-700 rounded text-white p-2 px-4 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500'>
            Lets get started!
          </button>
        </div>
      </div>
      <Image
        data-aos='fade-down'
        className='hidden lg:flex xl:flex'
        src='/images/Hero.png'
        alt='Next.js Logo'
        width={500}
        height={500}
        priority
      />
    </>
  )
}

export default Content
