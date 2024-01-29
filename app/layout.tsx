import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <link rel='icon' href='logo.png' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#000000' />
        <title>TugTek Elektronik </title>
        <meta
          name='description'
          content='Elektronik dünyasında lider olan TugTek, en son teknoloji ürünleri ve çözümleriyle müşterilerine benzersiz deneyimler sunuyor. Elektronik projeleriniz için güvenilir partneriniz olan TugTek ile tanışın. '
        />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@tugtek' />
        <meta name='twitter:creator' content='@tugtek' />
        <meta name='twitter:title' content='TugTek' />
        <meta
          name='twitter:description'
          content='Elektronik dünyasında lider olan TugTek, en son teknoloji ürünleri ve çözümleriyle müşterilerine benzersiz deneyimler sunuyor. Elektronik projeleriniz için güvenilir partneriniz olan TugTek ile tanışın. '
        />
        <meta name='twitter:image' content='logo.png' />
        <meta property='og:title' content='TugTek' />
        <meta
          property='og:description'
          content='Elektronik dünyasında lider olan TugTek, en son teknoloji ürünleri ve çözümleriyle müşterilerine benzersiz deneyimler sunuyor. Elektronik projeleriniz için güvenilir partneriniz olan TugTek ile tanışın. '
        />
        <meta property='og:image' content='logo.png' />
        <meta property='og:url' content='https://tugtek.com' />
        <meta
          property='og:site_name'
          content='TugTek Elektronik Danışmanlık Ajansı'
        />

        <meta
          property='og:description'
          content='Elektronik dünyasında lider olan TugTek, en son teknoloji ürünleri ve çözümleriyle müşterilerine benzersiz deneyimler sunuyor. Elektronik projeleriniz için güvenilir partneriniz olan TugTek ile tanışın. '
        />
        <meta
          property='og:locale'
          content='tr_TR
        '
        />
        <meta property='og:type' content='website' />
        <link rel='apple-touch-icon' href='logo.png' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
      </head>

      <body className='w-screen h-full bg-white dark:bg-white overflow-x-hidden'>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-P4BSM87L'
            height='0'
            width='0'
            className='hidden'
          ></iframe>
        </noscript>
        <div>
          <Navbar />
        </div>
        <div className=''>
          {children}
          <GoogleTagManager gtmId='G-G0KR9Y068Y' />
          <SpeedInsights />
          <Analytics />
        </div>
        <div className='mt-32'>
          <Footer />
        </div>
      </body>
    </html>
  )
}
