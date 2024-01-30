import React from 'react'

const page = () => {
  return (
    <>
      <div className='container my-24  mx-auto md:px-6'>
        <section className='mb-32  text-center'>
          <div className='py-12  md:px-12'>
            <div className='container  mx-auto xl:px-32'>
              <div className='grid items-center lg:grid-cols-2'>
                <div className='mb-12 md:mt-12 lg:mt-0 lg:mb-0'>
                  <div className='relative z-[1] bg-blue-600 block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px]  md:px-12 lg:-mr-14'>
                    <h2 className='mb-12 text-3xl text-white font-bold'>
                      İletişim
                    </h2>
                    <form>
                      <div className='relative mb-6' data-te-input-wrapper-init>
                        <input
                          type='text'
                          className='peer block min-h-[auto] w-full rounded border-0 bg-white py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
                          id='exampleInput90'
                          placeholder='Name'
                        />
                        <label
                          className='pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none '
                          htmlFor='exampleInput90'
                        >
                          İsim
                        </label>
                      </div>
                      <div className='relative mb-6' data-te-input-wrapper-init>
                        <input
                          type='email'
                          className='peer block min-h-[auto] w-full rounded border-0 bg-white py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
                          id='exampleInput91'
                          placeholder='Email address'
                        />
                        <label
                          className='pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none '
                          htmlFor='exampleInput91'
                        >
                          Email adresi
                        </label>
                      </div>
                      <div className='relative mb-6' data-te-input-wrapper-init>
                        <textarea
                          className='peer block min-h-[auto] w-full rounded border-0 bg-white py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
                          id='exampleFormControlTextarea1'
                          placeholder='Your message'
                        ></textarea>
                        <label
                          htmlFor='exampleFormControlTextarea1'
                          className='pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none '
                        >
                          Mesaj
                        </label>
                      </div>
                      <div className='mb-6 inline-block min-h-[1.5rem] justify-start pl-[1.5rem] md:flex'>
                        <input
                          className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-white before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-white checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-gray-100"
                          type='checkbox'
                          value=''
                          id='exampleCheck96'
                          checked
                        />
                        <label
                          className='inline-block  text-green-300 pl-[0.15rem] hover:cursor-pointer'
                          htmlFor='exampleCheck96'
                        >
                          Bana bu mesajın kopyasını gönder
                        </label>
                      </div>
                      <button
                        type='button'
                        data-te-ripple-init
                        data-te-ripple-color='light'
                        className='inline-block w-full rounded hover:bg-green-400 hover:text-white transform-cpu bg-white px-6 pt-2.5 pb-2 text-base font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]  lg:mb-0'
                      >
                        Gönder
                      </button>
                    </form>
                    <div>
                      <ul className=' flex flex-row my-12 md:mb-0'>
                        <li className='flex items-center'>
                          <div className='flex h-40 w-40 items-center justify-center rounded  text-white'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              className='h-6 w-6'
                            >
                              <path d='M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0'></path>
                              <path d='M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z'></path>
                            </svg>
                          </div>
                          <div className='flex flex-col items-start text-start  '>
                            <h3 className='mb-2 text-base font-medium leading-6 text-gray-200 '>
                              Adres
                            </h3>
                            <p className='text-white text-sm '>
                              Ferhuniye, Alaaddin Blv. No:23, 42060 Selçuklu
                            </p>
                            <p className='text-white text-sm '>
                              Konya, Türkiye
                            </p>
                          </div>
                        </li>
                        <li className='flex items-center'>
                          <div className='flex h-40 w-40 items-center justify-center rounded  text-white'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              className='h-6 w-6'
                            >
                              <path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2'></path>
                              <path d='M15 7a2 2 0 0 1 2 2'></path>
                              <path d='M15 3a6 6 0 0 1 6 6'></path>
                            </svg>
                          </div>
                          <div className='flex flex-col items-start text-start'>
                            <h3 className='mb-2 text-base font-medium leading-6 text-gray-200 '>
                              İletişim
                            </h3>
                            <p className='text-white text-sm '>
                              Mobil: +1 (123) 456-7890
                            </p>
                            <p className='text-white text-sm '>
                              Mail: benengintugrul@gmail.com
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='md:mb-24 lg:mb-0'>
                  <div className='relative h-[700px] rounded-lg shadow-lg '>
                    <iframe
                      src='https://maps.google.com/maps?q=konya&t=&z=13&ie=UTF8&iwloc=&output=embed'
                      className='absolute left-0 top-0 h-full w-full rounded-lg'
                      frameBorder='0'
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default page
