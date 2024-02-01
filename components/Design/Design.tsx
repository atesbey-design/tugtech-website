import React, { useEffect } from 'react'
import Image from 'next/image'



const CardData = [
  {
    color: 'bg-gray-300',
    title: 'Akıllı Ev Otomasyonu ve Enerji Yönetimi',
    text: 'Kendi geliştirdiğimiz akıllı ev sistemleri, ev otomasyonu ve enerji yönetimi konularında uzmanlık sağlar. Arduino tabanlı projelerimizde, sensörler ve uzaktan kontrol teknolojileri ile entegre çözümler sunuyoruz. Ev otomasyonunu zirveye taşıyoruz!',
    image: '/images/Rocket.png',
    imageAlt : 'Akıllı Ev Otomasyonu ve Enerji Yönetimi',
  },
  {
    color: 'bg-pink-200',
    title: 'Güneş Enerjisi Şarj Cihazları ve Projeleri',
    text: 'Kendi projelerimiz arasında yer alan güneş enerjisi şarj cihazları, güneş panelleri, enerji depolama çözümleri ve güneş takip sistemleri ile ilgili projeleri içerir. Yenilenebilir enerji kullanımına odaklanarak çevre dostu çözümler sunuyoruz.',
    image: '/images/Heart.png',
    imageAlt : 'Güneş Enerjisi Şarj Cihazları ve Projeleri',
  },
  {
    color: 'bg-yellow-200',
    title: 'Mikrodenetleyici Tabanlı Elektronik Devre Tasarımı',
    text: 'Elektronik devre tasarımı konusundaki deneyimimizle, PCB tasarımı, mikrodenetleyici tabanlı projeler ve endüstriyel elektronik çözümleri gibi konularda başarıyla geliştirilmiş projeleri içeririz. Elektronik dünyasında sınırları zorluyoruz!',
    image: '/images/Success.png',
    imageAlt : 'Mikrodenetleyici Tabanlı Elektronik Devre Tasarımı',
  },
  {
    color: 'bg-blue-200',
    title: 'Endüstriyel Otomasyon Çözümleri',
    text: 'Endüstriyel otomasyon projelerimizde, PLC programlama, fabrika otomasyonu, sensör entegrasyonu ve veri toplama sistemleri gibi endüstriyel elektronik konularında uzmanlık sunuyoruz. Endüstri 4.0 a entegre çözümlerle iş süreçlerini optimize ediyoruz.',
    image: '/images/Code.png',
    imageAlt : 'Endüstriyel Otomasyon Çözümleri',
  },
  {
    color: 'bg-green-200',
    title: 'Elektrik Güvenliği ve Enerji Verimliliği',
    text: 'Elektrik güvenliği projelerimizde, izolasyon sistemleri, aşırı akım koruması, yangın önleme sistemleri ve enerji verimliliği odaklı güvenlik çözümleri içerir. Projelerimizde güvenlik standartlarını en üst seviyede tutarak elektrik güvenliğini sağlıyoruz.',
    image: '/images/Shield.png',
    imageAlt : 'Elektrik Güvenliği ve Enerji Verimliliği',
  },
  {
    color: 'bg-fuchsia-200',
    title: 'IoT Uygulamaları ve Projeleri',
    text: 'Nesnelerin İnterneti (IoT) projelerimiz, sensör ağları, uzaktan izleme ve kontrol sistemleri, veri analizi ve bulut tabanlı IoT çözümleri ile ilgili konularda geliştirilmiş projeleri içerir. Veri odaklı IoT uygulamalarıyla geleceği bugünden inşa ediyoruz.',
    image: '/images/Padlock.png',
    imageAlt : 'IoT Uygulamaları ve Projeleri',
  },
];

  

const Design = () => {



  return (
    <div className='grid lg:grid-rows-3 lg:grid-flow-col  gap-4 lg:px-32 px-8'>
        {CardData.map((card, index) => (
        <div
          key={index}
          className={` flex lg:flex-row flex-col justify-around rounded-lg items-center border border-gray-200  shadow  hover:bg-gray-100 px-2`}
        >
          <Image
            className={
             `${card.color} rounded-lg  mt-2 lg:mt-0   p-1`
            }
            src={card.image}
            width={60}
            height={60}
            alt={card.imageAlt}

          />
          <div className='flex flex-col justify-between p-4 leading-normal w-full'>
            <h1 className='mb-2  font-bold tracking-tight text-gray-900 '>
              {card.title}
            </h1>
            <p className='mb-3 font-normal text-balancetext-gray-400'>
              {card.text} <br /> <br />
             
            </p>
          </div>
        </div>
      ))} 
    </div>
  )
}

export default Design