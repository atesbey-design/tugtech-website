import Image from 'next/image'
import React from 'react'

const Blog = () => {
  return (
    <div className=' flex flex-row w-full bg-gradient-to-tr px-32'>
      <div className='w-1/2  overflow-hidden pt-10'>
        <Image
          width={500}
          height={500}
          className='w-full'
          src='/images/article-big.png'
          alt='Sunset in the mountains'
        />
        <h6 className='text-gray-500 pl-6'>Jul 20, 2023</h6>
        <div className='px-6 py-4'>
          <div className='font-bold leading-loose text-gray-700 leading-relaxed text-xl mb-2'>
            The Coldest Sunset
          </div>
          <p className='text-gray-700 text-base'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className='px-6 pt-4 pb-2'>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            #photography
          </span>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            #travel
          </span>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            #winter
          </span>
        </div>
      </div>

      <div className='w-1/2 pt-8'>
        <div className=' '>
          <div
            className='flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
            title='Woman holding a mug'
          ></div>
          <div className='flex flex-row w-full rounded-b lg:rounded-b-none lg:rounded-r p-2 justify-end  leading-normal'>
            <div className=' w-1/4'>
              <Image
                width={500}
                height={500}
                className='w-full'
                src='/images/blog2.png'
                alt='Sunset in the mountains'
              />
            </div>
            <div className='mb-8 pl-12 '>
              <p className='text-sm text-gray-600 flex items-center'>
                <svg
                  className='fill-current text-gray-500 w-3 h-3 mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z' />
                </svg>
                Members only
              </p>
              <div className='text-gray-900 leading-loose font-bold text-xl mb-2'>
                Can coffee make you a better developer?
              </div>
            </div>
          </div>
        </div>
        <div className=' '>
          <div
            className='flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
            title='Woman holding a mug'
          ></div>
          <div className='flex flex-row w-full rounded-b lg:rounded-b-none lg:rounded-r p-2 justify-end  leading-normal'>
            <div className=' w-1/4'>
              <Image
                width={500}
                height={500}
                className='w-full'
                src='/images/blog1.png'
                alt='Sunset in the mountains'
              />
            </div>
            <div className='mb-8 pl-12 '>
              <p className='text-sm text-gray-600 flex items-center'>
                <svg
                  className='fill-current text-gray-500 w-3 h-3 mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z' />
                </svg>
                Members only
              </p>
              <div className='text-gray-900 leading-loose font-bold text-xl mb-2'>
                Can coffee make you a better developer?
              </div>
            </div>
          </div>
        </div>
        <div className=' '>
          <div
            className='flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
            title='Woman holding a mug'
          ></div>
          <div className='flex flex-row w-full rounded-b lg:rounded-b-none lg:rounded-r p-2 justify-end  leading-normal'>
            <div className=' w-1/4'>
              <Image
                width={500}
                height={500}
                className='w-full'
                src='/images/blog3.png'
                alt='Sunset in the mountains'
              />
            </div>
            <div className='mb-8 pl-12 '>
              <p className='text-sm text-gray-600 flex items-center'>
                <svg
                  className='fill-current text-gray-500 w-3 h-3 mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z' />
                </svg>
                Members only
              </p>
              <div className='text-gray-900 leading-loose font-bold text-xl mb-2'>
                Can coffee make you a better developer?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
