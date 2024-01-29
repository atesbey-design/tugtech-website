'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'


const buttonOptions = [
    { id: 1, name: 'Frontend' },
    { id: 2, name: 'Backend' },
    { id: 3, name: 'Database' },
    { id: 4, name: 'CMS' },
    { id: 5, name: 'DevOps' }
    ]



const TechStack = () => {
    const [isButtonActive, setIsButtonActive] = useState(false);
    const [selectedButton, setSelectedButton] = useState('Frontend');

  const clickHandler = (buttonName : any) => {
    setIsButtonActive(true);
    setSelectedButton(buttonName);
  };
  return (
    <div>
      <div className='flex flex-row lg:text-xl lg:space-x-8 space-x-2 justify-center items-center'>
        {buttonOptions.map((buttonOption) => (
            <button
                key={buttonOption.id}
                className={`${
                isButtonActive && selectedButton === buttonOption.name
                    ? 'border-b-2 border-fuchsia-800 text-fuchsia-800 '
                    : ''
                } font-medium  hover:text-fuchsia-800`}
                onClick={() => clickHandler(buttonOption.name)}
            >
                {buttonOption.name}
            </button>
            ))
        }
      </div>
      <section className='bg-white '>
        <div className='py-8 lg:py-16 mx-auto  max-w-screen-xl px-4'>
          <div className='flex justify-center items-center text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 '>
            <Link href='#' className=''>
              <Image src='/images/NodeJS.png' alt='' width={200} height={200} />
            </Link>
            <Link href='#' className=''>
              <Image src='/images/PHP.png' alt='' width={200} height={200} />
            </Link>
            <Link href='#' className=''>
              <Image
                src={'/images/mon.png'}
                alt='/iamges/mon.png'
                width={200}
                height={200}
              />
            </Link>
            <Link href='#' className=''>
              <Image
                src={'/images/Mysql.png'}
                alt='/images/Mysql.png'
                width={200}
                height={200}
              />
            </Link>
          </div>
          <div className='flex justify-center items-center'>
            <Link href='#' className=''>
              <Image
                src={'/images/NETCore.png'}
                alt=''
                width={200}
                height={200}
              />
            </Link>
            <Link href='#' className='flex justify-center items-center'>
              <Image
                src={'/images/Python.png'}
                alt=''
                width={200}
                height={200}
              />
            </Link>
            <Link href='#' className='flex justify-center items-center'>
              <Image src={'/images/Java.png'} alt='' width={200} height={200} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TechStack
