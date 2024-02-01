import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-white '>
      <div className='mx-auto w-full max-w-screen-xl p-4 lg:py-6 lg:py-8'>
        <div className='flex lg:flex-row flex-col lg:justify-between justify-center  w-full '>
          <div className='mb-6 md:mb-0'>
            <Image src='/images/logo.png' width={200} alt='logo' height={200} />
         <p className='text-gray-500 text-sm font-medium'>
          Elekronik Ticaret ve Yazılım Hizmetleri
        </p>

          </div>
          <div className='flex lg:flex-row flex-col gap-4 sm:gap-8 sm:grid-cols-3'>
            <div>
              <h2 className='mb-4 text-sm font-bold text-gray-900 uppercase '>
                Bağlantılar
              </h2>
              <ul className='text-gray-500  font-medium'>
                <li>
                  <a
                    href='https://github.com/themesberg/flowbite'
                    className='hover:underline '
                  >
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a
                    href=''
                    className='hover:underline'
                  >
                    Hizmetler
                  </a>
                </li>
                <li>
                  <a
                    href=''
                    className='hover:underline'
                  >
                    İş Çözümleri
                  </a>
                </li>
                <li>
                  <a
                    href=''
                    className='hover:underline'
                  >
                    Projeler
                  </a>
                </li>
                <li>
                  <a
                    href=''
                    className='hover:underline'
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-4 text-sm font-bold text-gray-900 uppercase '>
                İletişim
              </h2>
              <ul className='text-gray-500  font-medium'>
                <li>
                  <a href='#' className='hover:underline '>
                    Konya / Türkiye
                    Elektronik Ticaret ve Yazılım Hizmetleri
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline '>
                    +923183561921
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' />
        <div className='sm:flex items-center justify-between'>
          <span className='text-sm text-black font-bold text-center cursor-pointer'>
            © 2024{' '}
              Powered by ❤️  
            <a href='https://www.linkedin.com/in/ebrar-tamer/' className='hover:underline text-sm'>  Ebrar Tamer
            </a>
           
          </span>
          <div className='flex mt-4 sm:justify-center sm:mt-0'>
            <a href='#' className='text-gray-500 hover:text-gray-900 '>
              <svg
                className='w-4 h-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 8 19'
              >
                <path
                  fill-rule='evenodd'
                  d='M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z'
                  clip-rule='evenodd'
                />
              </svg>
              <span className='sr-only'>Facebook Sayfası</span>
            </a>
  
           
            <a href='#' className='text-gray-500 hover:text-gray-900  ms-5'>
              <svg
                className='w-4 h-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fill-rule='evenodd'
                  d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z'
                  clip-rule='evenodd'
                />
              </svg>
              <span className='sr-only'>GitHub</span>
            </a>
        
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
