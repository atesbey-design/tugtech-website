import Link from 'next/link'
import React, { useEffect } from 'react'
import Image from 'next/image'

const CardData = [
    {
      color: `bg-black`,
      title: 'UX Driven Engineering',
      text: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
      image: '/images/Rocket.png',
     
    },
    {
      color: 'bg-pink-400',
      title: 'Developing Shared Understanding',
      text: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
      image: '/images/Heart.png'
    },
    {
      color: 'bg-yellow-400',
      title: 'Proven Experience and Expertise',
      text: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
      image: '/images/Success.png'
    },
    {
        color: 'bg-blue-400',
        title: 'Security & Intellectual Property (IP)',
        text: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
        image: '/images/Code.png'
      },
      {
        color: 'bg-green-400',
        title: 'Code Reviews',
        text: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
        image: '/images/Shield.png'
      },
      {
        color: 'bg-fuchsia-400',
        title: 'Quality Assurance & Testing',
        text: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
        image: '/images/Padlock.png'
      },
  ]

const Design = () => {



  return (
    <div className='grid lg:grid-rows-3 lg:grid-flow-col  gap-4 lg:px-32 px-8'>
        {CardData.map((card, index) => (
        <div
          key={index}
          className={` flex lg:flex-row flex-col justify-around  items-center border border-gray-200 rounded-lg shadow  hover:bg-gray-100 px-2`}
        >
          <Image
            className={
             `${card.color} rounded-lg  mt-2 lg:mt-0 md:rounded-none md:rounded-lg p-1`
               
              
            }
            src={card.image}
            width={60}
            height={60}
            alt='Card Image Alt Text'
          />
          <div className='flex flex-col justify-between p-4 leading-normal w-full'>
            <h5 className='mb-2  font-bold tracking-tight text-gray-900 '>
              {card.title}
            </h5>
            <p className='mb-3 font-normal text-balancetext-gray-400'>
              {card.text} <br /> <br />
             
            </p>
          </div>
        </div>
      ))} 
    </div>
  )
}

export default Design