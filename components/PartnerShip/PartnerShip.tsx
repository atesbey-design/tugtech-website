import Image from 'next/image'
import React from 'react'

const partnerships = [
  {
    name: 'Temm Yazılım',
    imageUrl: '/images/temm.png'
  },

  {
    name: 'Kar Bilişim',
    imageUrl: '/images/logo-dark.png'
  },
  {
    name: 'OMTUN Labs',
    imageUrl: '/images/OMTUNBANNER.png'
  },
  {
    name: 'Elit Tur',
    imageUrl: '/images/big-elit-tur.png'
  },
  {
    name: "Turocas",
    imageUrl: '/images/turocas.png'
  },
  {
    name: 'SkynoTech',
    imageUrl: '/images/skynotech.png'
  },
  {
    name: 'Uplus',
    imageUrl: '/images/uplus.png'
  },{
    name: 'SBS Reklam',
    imageUrl: '/images/sbs.png'
  },
]

const PartnerShip = () => {
  return (
    <>
      <section className='bg-white grid grid-flow-row gap-36'>
        <div className='relative flex overflow-x-hidden'>
          <div className='py-12 animate-marquee whitespace-nowrap flex flex-row gap-2'>
            {partnerships.map((partner, index) => (
              <div className='mx-4 flex justify-center items-center' key={index}>
                <a href='#' className='flex justify-center items-center'>
                  <Image 
                    src={partner.imageUrl}
                    alt={partner.name}
                    width={100}
                    height={100}
                    objectFit='contain'
                  />
                </a>
              </div>
            ))}
          </div>

          <div className='absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex flex-row'>
            {partnerships.map((partner, index) => (
              <div className='mx-4 flex justify-center items-center' key={index}>
                <a href='#' className='flex justify-center items-center'>
                  <Image 
                    src={partner.imageUrl}
                    alt={partner.name}
                    width={100}
                    height={100}
                    objectFit='contain'
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default PartnerShip
