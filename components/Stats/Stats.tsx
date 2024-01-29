'use client'
import Image from 'next/image'
import React, { use, useEffect, useState } from 'react'
import useScreen from '../../libs/useScreen'



const Stats = () => {
  const screenSize = useScreen()



  return (
    <div className='flex flex-col justify-between lg:flex-row '>
      <div
        data-aos='fade-right'
        data-aos-offset='300'
        data-aos-easing='ease-in-sine'
        className='space-y-12'
      >
        <h1 className='lg:text-3xl text-xl tracking-wider lg:leading-relaxed'>
          Leading companies trust us{' '}
          <span className='font-bold '>
            <br /> to develop software
          </span>
        </h1>
        <a href='#'>
          <h5 className='lg:mb-2 text-2xl font-semibold tracking-tight text-gray-900 '>
            Need a help in Claim?
          </h5>
        </a>
        <p className='lg:mb-3 font-normal text-gray-500 lg:text-lg text-m lg:leading-9 leading-6'>
          We <span className='text-fuchsia-700'>add development capacity</span>{' '}
          to tech teams. Our value isn’t <br />
          limited to building teams but is equally distributed across the <br />
          project lifecycle. We are a custom software development company <br />{' '}
          that guarantees the successful delivery of your project.
        </p>
        <a
          href='#'
          className='inline-flex items-center text-fuchsia-800 font-bold hover:underline '
        >
          See more Informations
          <svg
            className=' ms-2.5 rtl:rotate-[270deg]'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='25'
            viewBox='0 0 24 25'
            fill='none'
          >
            <g clip-path='url(#clip0_116_10)'>
              <path
                d='M16.172 11.4999L10.808 6.13592L12.222 4.72192L20 12.4999L12.222 20.2779L10.808 18.8639L16.172 13.4999H4V11.4999H16.172Z'
                fill='#57007B'
              />
            </g>
            <defs>
              <clipPath id='clip0_116_10'>
                <rect
                  width='24'
                  height='24'
                  fill='white'
                  transform='translate(0 0.5)'
                />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
      <div
        data-aos={`screenSize < 768 ? '' : 'fade-left` }
        data-aos-offset='300'
        data-aos-easing='ease-in-sine'
      >
        <Image
          className='lg:mt-0 mt-10'
          src='/images/Rectangle.png'
          alt='Picture of the author'
          width={500}
          height={500}
        ></Image>
      </div>
    </div>
  )
}

export default Stats
