"use client";
import useScreen from "@/libs/useScreen";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const ProjectData = [
  {
    color: "bg-blue-50",
    title: "Akıllı Ev Otomasyonu Projesi",
    description:
      "Ev otomasyonu sistemi, farklı odalardaki cihazları uzaktan kontrol etme imkanı sunar. Bluetooth modülü, hareket sensörleri ve röleler kullanılarak tasarlandı.",
    image: "/images/akilli-ev.jpeg",
    imageAlt: "Smart Home Automation",
    technologies: ["Arduino", "Bluetooth", "Hareket Sensörleri", "Röleler"],
    benefits: ["Enerji tasarrufu", "Uzaktan erişim", "Konfor artışı"],
    animation: "fade-right",
  },
  {
    color: "bg-green-50",
    title: "Güneş Enerjili Şarj Cihazı",

    description:
      "Taşınabilir cihazlar için güneş enerjili şarj cihazı, güneş panelleri, Li-ion pil ve güneş takip sistemi kullanılarak geliştirildi. Yenilenebilir enerji kaynaklarından faydalanarak çevre dostu bir çözüm sunar.",
    image: "/images/günes-enerjili.jpeg",
    imageAlt: "Solar Charger",
    technologies: [
      "Güneş Panelleri",
      "Li-ion Pil",
      "Güneş Takip Sistemi",
      "Mikrodenetleyici",
    ],
    benefits: [
      "Yenilenebilir enerji kullanımı",
      "Taşınabilir cihazların şarj edilebilirliği",
      "Çevre dostu",
    ],
    animation: "fade-left",
  },
  {
    color: "bg-pink-50",
    title: "Akıllı Tarım Sistemi",
    description:
      "Tarım alanında kullanılan sensörler ve IoT teknolojisi ile entegre bir akıllı tarım sistemini içeren proje. Toprak nemini, sıcaklığı ve bitki büyümesini izleyerek çiftçilere verimlilik sağlar.",
    image: "/images/akilli-tarim.jpeg",
    technologies: ["IoT", "Tarım Sensörleri", "Veri Analizi", "Mobil Uygulama"],
    benefits: [
      "Verimli su kullanımı",
      "Bitki sağlığının izlenmesi",
      "Verimli ürün yetiştirme",
    ],
    animation: "fade-right",
  },
  {
    color: "bg-yellow-50",
    title: "Medikal Cihaz Tasarımı",
    description:
      "Medikal cihaz tasarımı, hasta takip sistemleri ve sağlık verilerinin toplanması için kullanılan bir projedir.",
    image: "/images/medical.webp",
    technologies: [
      "Bluetooth",
      "Sağlık Sensörleri",
      "Mobil Uygulama",
      "Veri Analizi",
    ],
  },

  {
    color: "bg-purple-50",
    title: "PDKS Sistemi",
    description:
      "Personel devam kontrol sistemi, personel takibi ve devam durumlarının izlenmesi için kullanılan bir projedir.",
    image: "/images/pdks.webp",
  },
  {
    color: "bg-red-50",
    title: "Güvenli Kapı Sistemi",
    description:
      "Güvenli kapı sistemi, kartlı geçiş sistemleri ve güvenlik kameraları ile entegre bir projedir.",

    image: "/images/kapi.jpg",
  },
];

const CaseStudies = () => {
  return (
    <div
      className="lg:w-11/12  grid grid-flow-row gap-8
    
          
    "
    >
      {ProjectData.map((card, index) => (
        <div
          key={index}
          data-aos="fade-right"
          data-aos-offset="10"
          data-aos-easing="ease-in-sine"
          className={`flex lg:flex-row flex-col w-full justify-around  items-center ${card.color} border border-gray-200 rounded-lg shadow min-h-[300px]
           `}
        >
          <Image
            src={card.image}
            alt={card.imageAlt?.toString()? card.imageAlt : "TugTek"}
            className={`rounded-lg shadow-lg ${card.animation}`}
            style={{ width: "30%", height: "100%", objectFit: "cover" }}
          />
          <div className="flex flex-col justify-between p-4 leading-normal w-full">
            <div className="dynamic-div"></div>

            <h4 className="mb-2 lg:text-2xl text-md font-bold tracking-tight text-gray-900 ">
              {card.title}
            </h4>
            <p className="mb-3 font-normal   lg:text-xl text:sm text-gray-700 dark:text-gray-400 w-full">
              {card.description}
            </p>
            <Link
              className="text-fuchsia-800 flex flex-row justify-end items-center pr-4 hover:underline"
              href="https://api.whatsapp.com/send?phone=+905102232313&text={current webpage url}"
            >
              {" "}
              Proje İçin İletişime Geçin
              <svg
                className="pt-1"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_1_604)">
                  <path
                    d="M8.78132 7.99999L5.48132 4.69999L6.42399 3.75732L10.6667 7.99999L6.42399 12.2427L5.48132 11.3L8.78132 7.99999Z"
                    fill="url(#paint0_linear_1_604)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_1_604"
                    x1="10.6667"
                    y1="3.75732"
                    x2="3.11576"
                    y2="8.37163"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F76680" />
                    <stop offset="1" stop-color="#57007B" />
                  </linearGradient>
                  <clipPath id="clip0_1_604">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>{" "}
            </Link>
          </div>
        </div>
      ))}
      {/* <Link href={"<3"} className='flex justify-end  text-fuchsia-800 font-bold hover:underline pt-1'>
          
                  Tüm projeleri gör
           <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='25'
                  viewBox='0 0 16 16'
                  fill='none'
                  
                >
                  <g clip-path='url(#clip0_1_604)'>
                    <path
                      d='M8.78132 7.99999L5.48132 4.69999L6.42399 3.75732L10.6667 7.99999L6.42399 12.2427L5.48132 11.3L8.78132 7.99999Z'
                      fill='url(#paint0_linear_1_604)'
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id='paint0_linear_1_604'
                      x1='10.6667'
                      y1='3.75732'
                      x2='3.11576'
                      y2='8.37163'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#F76680' />
                      <stop offset='1' stop-color='#57007B' />
                    </linearGradient>
                    <clipPath id='clip0_1_604'>
                      <rect width='16' height='16' fill='white' />
                    </clipPath>
                  </defs>
                </svg>{' '}</Link> */}
    </div>
  );
};

export default CaseStudies;
