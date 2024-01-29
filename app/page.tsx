import Navbar from '@/components/Navbar/Navbar'
import Content from '@/components/Content/Content'
import Services from '@/components/Services/Services'
import Stats from '@/components/Stats/Stats'
import PartnerShip from '@/components/PartnerShip/PartnerShip'
import CaseStudies from '@/components/CaseStudies/CaseStudies'
import Building from '@/components/Building/Building'
import Design from '@/components/Design/Design'
import TechStack from '@/components/TechStack/TechStack'

export default function Home () {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between '>
      <div id="content"  className=' w-full h-full  flex justify-around py-40 '>
        <Content />
      </div>

      <div id="services" className='mb-32 grid w-full h-full bg---Shade-light border border-fuchsia-100 '>
        <Services />
      </div>

      <div id="about" className='w-full lg:px-32 px-8'>
        <Stats />
      </div>

      <div className='w-full py-24 '>
        <PartnerShip />
      </div>
      
      <div id="project" className='border w-full  border-gray-100 bg-gray-50 py-24'>
      <h2 className='text-center mb-8 lg:mb-16 text-2xl lg:leading-loose tracking-wide lg:text-4xl'>
        Our recent
        <span className='font-bold'>
          <br /> Case Studies
        </span>
      </h2>
        <div className='flex justify-center items-center lg:px-32 px-8'><CaseStudies /></div>
      </div>

      <div className='w-full py-24'>
      <h2 className='text-center mb-8 lg:mb-16 text-3xl leading-loose tracking-wide md:text-4xl'>
        Why of building
        <span className='font-bold'>
          <br /> Great Software
        </span>
      </h2>
        <Building />
      </div>

      <div className='w-full bg---Shade-light border border-fuchsia-100  py-24'>
      <h2 className='text-center mb-8 lg:mb-16 lg:text-3xl text-2xl leading-loose tracking-wide md:text-4xl'>
        Our Design and
        <span className='font-bold'>
          <br /> Devolopment approach
        </span>
      </h2>
        <Design />
      </div>

      <div className='w-full bg---Shade-light border border-fuchsia-100  py-24'>
      <h2 className='text-center mb-8 lg:mb-16 lg:text-3xl text-2xl leading-loose tracking-wide md:text-4xl'>
        Our 
        <span className='font-bold'>
          <br /> Tech Stack
        </span>
      </h2>
        <TechStack />
      </div> 
    </main>
  )
}
