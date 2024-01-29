import Image from 'next/image'
import React from 'react'
import Card from '../Card/Card'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
  return (
    <div className='bg-[#F9F9FF] flex-col flex justify-center items-center py-4  '>
      <text className='font-bold text-2xl lg:text-4xl bg---Gray-900 my-12'>
        Services we offer
      </text>

      <div className='flex lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-y-4 '>
        <Card />
        <Card />
        <Card />
      </div>

      <div />
    </div>
  )
}

export default Services
