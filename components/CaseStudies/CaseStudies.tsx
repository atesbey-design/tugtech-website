import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardData = [
  {
    color: `light-blue`,
    title: 'Website Design for SCFC Canada',
    text: 'Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.',
    image: '/images/Case-study1.png',
    animation : 'fade-right'
  },
  {
    color: 'light-green',
    title: 'Website Design for SCFC Canada',
    text: 'Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.',
    image: '/images/Case-study2.png',
    animation : 'fade-left'
  },
  {
    color: 'light-pink',
    title: 'Website Design for SCFC Canada',
    text: 'Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.',
    image: '/images/Case-study3.png',
    animation : 'fade-right'
  }
]

const CaseStudies = () => {
  return (
    
    <div
    
    className='w-11/12 grid grid-flow-row gap-8'>
      {CardData.map((card, index) => (
        <div


        
          key={index}
          data-aos={card.animation}
     data-aos-offset="100"
     data-aos-easing="ease-in-sine" 
          className={`flex flex-row w-full justify-around  items-center bg-${card.color} border border-gray-200 rounded-lg shadow  hover:bg-gray-100 `}
        >
          <Image
            className='  rounded-t-lg   md:rounded-none md:rounded-s-lg'
            src={card.image}
            width={500}
            height={500}
            alt='Card Image Alt Text'
          />
          <div className='flex flex-col justify-between p-4 leading-normal w-full'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
              {card.title}
            </h5>
            <p className='mb-3 font-normal text-balance  text-gray-700 dark:text-gray-400'>
              {card.text} <br /> <br />
              <Link className='text-fuchsia-800 flex flex-row justify-end items-center pr-4' href='#'>
                {' '}
                Read more{' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 16 16'
                  fill='none'
                >
                  <g clip-path='url(#clip0_1_604)'>
                    <path
                      d='M8.78132 7.99999L5.48132 4.69999L6.42399 3.75732L10.6667 7.99999L6.42399 12.2427L5.48132 11.3L8.78132 7.99999Z'
                      fill='url(#paint0_linear_1_604)'
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id='paint0_linear_1_604'
                      x1='10.6667'
                      y1='3.75732'
                      x2='3.11576'
                      y2='8.37163'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#F76680' />
                      <stop offset='1' stop-color='#57007B' />
                    </linearGradient>
                    <clipPath id='clip0_1_604'>
                      <rect width='16' height='16' fill='white' />
                    </clipPath>
                  </defs>
                </svg>{' '}
              </Link>
            </p>
          </div>
        </div>
      ))}
      <Link href={"<3"} className='flex justify-end text-fuchsia-800 font-bold'>Read more case studies  <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 16 16'
                  fill='none'
                  
                >
                  <g clip-path='url(#clip0_1_604)'>
                    <path
                      d='M8.78132 7.99999L5.48132 4.69999L6.42399 3.75732L10.6667 7.99999L6.42399 12.2427L5.48132 11.3L8.78132 7.99999Z'
                      fill='url(#paint0_linear_1_604)'
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id='paint0_linear_1_604'
                      x1='10.6667'
                      y1='3.75732'
                      x2='3.11576'
                      y2='8.37163'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#F76680' />
                      <stop offset='1' stop-color='#57007B' />
                    </linearGradient>
                    <clipPath id='clip0_1_604'>
                      <rect width='16' height='16' fill='white' />
                    </clipPath>
                  </defs>
                </svg>{' '}</Link>
    </div>
  )
}

export default CaseStudies
