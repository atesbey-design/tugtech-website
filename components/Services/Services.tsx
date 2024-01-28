import Image from 'next/image'
import React from 'react'
import Card from '../Card/Card'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
  return (
    <div className='bg-[#F9F9FF] flex-col flex justify-center items-center py-4 w-full'>
      <h1 className='font-bold text-4xl bg---Gray-900 my-12'>Services we offer</h1>

      <div
      className='flex flex-row space-x-4'>
      <Card />
      <Card />
      <Card />
      </div>

      <div />
    </div>
  )
}

export default Services
