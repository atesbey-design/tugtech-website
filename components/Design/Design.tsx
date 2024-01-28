import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const CardData = [
    {
      color: `black`,
      title: 'UX Driven Engineering',
      text: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
      image: '/images/Rocket.png',
     
    },
    {
      color: 'pink-400',
      title: 'Developing Shared Understanding',
      text: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
      image: '/images/Heart.png'
    },
    {
      color: 'yellow-400',
      title: 'Proven Experience and Expertise',
      text: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
      image: '/images/Success.png'
    },
    {
        color: 'blue-400',
        title: 'Security & Intellectual Property (IP)',
        text: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
        image: '/images/Code.png'
      },
      {
        color: 'green-400',
        title: 'Code Reviews',
        text: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
        image: '/images/Shield.png'
      },
      {
        color: 'fuchsia-400',
        title: 'Quality Assurance & Testing',
        text: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
        image: '/images/Padlock.png'
      },
  ]

const Design = () => {
  return (
    <div className='grid grid-rows-3 grid-flow-col  gap-4 px-32'>
        {CardData.map((card, index) => (
        <div
          key={index}
          className={` flex flex-row justify-around  items-center border border-gray-200 rounded-lg shadow  hover:bg-gray-100 px-2`}
        >
          <Image
            className={`bg-${card.color} rounded-lg p-2`}
            src={card.image}
            width={50}
            height={50}
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