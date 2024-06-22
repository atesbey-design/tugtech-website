import Image from 'next/image'
import React from 'react'
import Card from '../Card/Card'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
  const CardData = [
    {
      title: 'Yazılım Uygulamaları Geliştirme',
      description:
        ' İş ihtiyaçlarınızı karşılamak için profesyonel yazılım geliştirme hizmetleri sunuyoruz. İhtiyaçlarınıza uygun özelleştirilmiş yazılım çözümleri ile iş süreçlerinizi optimize ediyoruz.'
    },
    {
      title: 'Ar-Ge Hizmetleri',
      description:
        'Donanım, gömülü yazılım, mekanik tasarım alanlarında Ar-Ge hizmetleri sunuyoruz. Ürünlerinizin geliştirilmesi ve iyileştirilmesi için en son teknolojileri kullanıyoruz.'
    },
        {
      title: 'IoT Çözümleri',
      description:
        "Nesnelerin interneti (IoT) teknolojileri ile cihazlarınızı birbirine bağlayarak verimliliği artırın. IoT çözümleri ile iş süreçlerinizi optimize edin."
    }
  ]

  return (
    <div className='bg-[#F9F9FF] flex-col flex justify-center items-center py-4  '>
      <text className='font-bold text-2xl lg:text-4xl bg---Gray-900 my-12'>
        Sunduğumuz Hizmetler
      </text>

      <div className='flex lg:flex-row flex-col lg:space-x-8 lg:space-y-0 space-y-8  w-[80%]'>
        {CardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Services
