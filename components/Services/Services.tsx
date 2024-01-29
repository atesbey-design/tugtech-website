import Image from 'next/image'
import React from 'react'
import Card from '../Card/Card'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {

  const CardData = [
    {
      title: "Web & Desktop Application",
      description: "Professional web and desktop application development to meet your business needs.",
    },
    
 
    {
      title: "Server Setup & Consultancy",
      description: "Reliable server setup and expert consultancy services for seamless operations.",
    },
    {
      title: "E-Commerce Sales Analysis Consultancy",
      description: "Strategic guidance for e-commerce businesses through detailed sales analysis consultancy.",
    },
  ];
  
    

  return (
    <div className='bg-[#F9F9FF] flex-col flex justify-center items-center py-4  '>
      <text className='font-bold text-2xl lg:text-4xl bg---Gray-900 my-12'>
        Services we offer
      </text>

      <div className='flex lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-y-4  w-[80%]'>
        {
          CardData.map((card, index) => (
          
            <Card
              key={index}
              title={card.title}
              description={card.description}      
              
            />
          )
          ) }
        
      </div>


   
    </div>
  )
}

export default Services
