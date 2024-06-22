"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const buttonOptions = [
  {
    id: 1,
    name: "IoT",
    values: [
      "https://www.vectorlogo.zone/logos/arduino/arduino-ar21.svg",
      "https://www.vectorlogo.zone/logos/raspberrypi/raspberrypi-ar21.svg",
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*g8hBprCvOwavnugB.png",
      "https://gettobyte.com/wp-content/uploads/2024/04/NXP_logo-2048x819.png",
      "https://cdn.xingosoftware.com/elektor/images/fetch/dpr_2,w_442,h_79,c_fit/https%3A%2F%2Fwww.elektormagazine.com%2Fassets%2Fupload%2Fimages%2F42%2F20240425105656_Espressif-Standard-Logo-EN-Horizontal.png",
    ],
    valuesAlt: ["Arduino", "Raspberry Pi", "ESP32", "NXP", "Espressif"],
  },
  {
    id: 2,
    name: "Frontend",
    values: [
      "https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg",
      "https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.svg",
      "https://www.vectorlogo.zone/logos/angular/angular-ar21.svg",
    ],
    valuesAlt: ["React", "Vue", "Angular"],
  },

  {
    id: 3,
    name: "Backend",
    values: [
      "https://www.vectorlogo.zone/logos/oracle/oracle-ar21.svg",
      "https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg",
    ],
    valuesAlt: ["Oracle", "Node.js"],
  },

  {
    id: 4,
    name: "Database",
    values: [
      "https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg",
      "https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg",
      "https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21.svg",
      "https://www.vectorlogo.zone/logos/sqlite/sqlite-ar21.svg",
    ],
    valuesAlt: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
  },
];

const TechStack = () => {
  const [isButtonActive, setIsButtonActive] = useState(true); // isButtonActive'u true yaparak başlangıçta seçili olmasını sağla
  const [selectedButton, setSelectedButton] = useState(1);

  const clickHandler = (buttonName: any) => {
    setIsButtonActive(true);
    setSelectedButton(buttonName);
  };

  return (
    <div>
      <div className="flex flex-row lg:text-xl lg:space-x-8 space-x-2 justify-center items-center">
        {buttonOptions.map((buttonOption) => (
          <button
            key={buttonOption.id}
            className={`${
              isButtonActive && selectedButton === buttonOption.id
                ? "border-b-2 border-fuchsia-800 text-fuchsia-800 "
                : ""
            } font-medium  hover:text-fuchsia-800
            transition duration-500 ease-in-out
            `}
            onClick={() => clickHandler(buttonOption.id)}
          >
            {buttonOption.name}
          </button>
        ))}
      </div>
      <section className="bg-white ">
        <div className="py-8 lg:py-16 mx-auto  max-w-screen-xl px-4">
          <div
            className="flex justify-center items-center text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6  "
            style={{
              height: "200px",
            }}
          >
            {buttonOptions.map(
              (buttonOption) =>
                isButtonActive &&
                selectedButton === buttonOption.id &&
                buttonOption.values?.map((value) => (
                  <Link key={value} href="#" className="">
                    <Image
                      src={value}
                      alt={
                        buttonOption.valuesAlt[
                          buttonOption.values.indexOf(value)
                        ]
                      }
                      width={200}
                      height={200}
                    />
                  </Link>
                ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechStack;
