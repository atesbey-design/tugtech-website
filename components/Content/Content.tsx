'use client'
import Image from 'next/image'
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Content = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])
  return (
    <>
      <div
        data-aos='fade-up'
        className='flex flex-col justify-center space-y-8 '
      >
        <div className='text-5xl'>
          Great <span className='text-fuchsia-800 font-bold'>Product</span> is{' '}
          <br /> <span className='font-bold'>built by great</span>{' '}
          <span className='text-purple-800 font-bold'> teams</span>
        </div>
        <div>
          We help build and manage a team of world-class developers <br /> to
          bring your vision to life
        </div>
        <div>
          <button className='h-14 bg-gradient-to-r bg-blue-700 rounded text-white p-2 px-4'>
            Let's get started
          </button>
        </div>
      </div>
      <Image
        data-aos='fade-down'
        className='  '
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
