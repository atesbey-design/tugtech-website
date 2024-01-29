'use client'
import Image from 'next/image'
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

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
        <div className='lg:text-6xl text-3xl leading-loose tracking-widest'>
        Solution  <span className='text-fuchsia-800 font-bold'>Your</span> is{' '}
          <br /> <span className='font-bold'> Leading</span>{' '}
          <span className='text-purple-800 font-bold'> Technology</span>
        </div>
        <h1 className='text-m lg:text-xl text-gray-500 '>
        At Tugtek, we help you move your business into the <br />
         future with our expertise in electronic consulting, software <br />
         development and hardware solutions. Our team leading the digital <br /> transformation is here to achieve your goals with you.
        </h1>
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
