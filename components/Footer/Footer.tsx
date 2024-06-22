import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className='bg-white '>
      <div className='mx-auto w-full max-w-screen-xl p-4 lg:py-6 lg:py-8'>
        <div className='flex lg:flex-row flex-col lg:justify-between justify-center  w-full '>
          <div className='mb-6 md:mb-0'>
            <Link href='/'>
        <Image src='/images/logo.png' width={200} alt='logo' height={200} />
        </Link>
         <p className='text-gray-500 text-sm font-medium p-2'>
          Elekronik Ticaret ve Yazılım Hizmetleri
        </p>

          </div>
          <div className='flex lg:flex-row flex-col gap-4 sm:gap-8 sm:grid-cols-3'>
           
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
                <a href="https://api.whatsapp.com/send?phone=+905102232313&text={current webpage url}"
                  style={
                    {
                      color: "black",
                      textDecoration: "none",
              
                    }
                  }
                >
                    +90 539 612 4256
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
          <footer className="footer">
        <div className="footer-content">
          <a
            href="https://www.linkedin.com/company/omtun/"
            target="_blank"
            rel="noopener noreferrer"
            className="omtun-logo"
          >
            <img
              src="/omtunLabs.png"
              alt="OmTun Labs Logo"
              className="omtun-logo-img"
            />
          </a>
          <p>
            <a
              href="https://www.linkedin.com/company/omtun/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OmTun Labs
            </a>{" "}
            - Teknolojide Güven ve Yenilik.
          </p>
        </div>
      </footer>
        </div>
      </div>
    </footer>
  )
}

export default Footer
