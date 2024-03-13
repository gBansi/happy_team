import React, { useState, useEffect } from "react";
import slide1 from "../assets/img/slide1.jpg";
import slide2 from "../assets/img/up-1.jpg";
import slide88 from "../assets/img/up-3.jpg";
import slide3 from "../assets/img/slide3.jpg";
import What_can_do from "../components/What_can_do";
import Logo from "../components/Logo";
import Past_event from "../components/Past_event";
import Services from "../components/Services";
import AboutComp from "../components/AboutComp";
import slider from "../assets/img/s-1.jpg"
import slider2 from '../assets/img/s-2.jpg'
import slider3 from '../assets/img/s-3.jpg'
import slider4 from '../assets/img/s-4.jpg'
import slider5 from '../assets/img/s-5.jpg'
import slider6 from '../assets/img/s-6.jpg'
import slider7 from '../assets/img/sh-5.jpg'
import slider8 from '../assets/img/s-7.jpg'
import slider9 from '../assets/img/s-8.jpg'
import slider10 from '../assets/img/s-9.jpg'
const images = [
  {
    imgSrc: slider,
    alt: "First Image Description",
  },
  {
    imgSrc: slider2,
    alt: "Second Image Description",
  },
  {
    imgSrc: slider3,
    alt: "First Image Description",
  },
  {
    imgSrc: slider4,
    alt: "First Image Description",
  },
  {
    imgSrc: slider10,
    alt: "First Image Description",
  },
];
const imagesmobile = [
  {
    imgSrc: slider5,
    alt: "First Image Description",
  },
  {
    imgSrc: slider6,
    alt: "Second Image Description",
  },
  {
    imgSrc: slider7,
    alt: "First Image Description",
  },
  {
    imgSrc: slider8,
    alt: "First Image Description",
  },
  {
    imgSrc: slider9,
    alt: "First Image Description",
  },
];
const imageData = [
  {
    src: slide1,
    alt: "First Image",
    title: "Green plant Run",
  },
  {
    src: slide2,
    alt: "",
    title: "Sport Carnival",
  },
  {
    src: slide88,
    alt: "Third Image",
    title: "Upcoming mega 5 big  event",
  },
  // Add more images as needed
];
const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Change the background image and content every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="">
      <div
        className=" hidden md:block items-center rounded-3xl w-full h-[700px] overflow-hidden mx-auto my-4 text-white object-cover"
        style={{
          backgroundImage: `url(${images[currentImageIndex].imgSrc})`,
          backgroundSize: "cover",
        }}
      >
      </div>
      <div
        className="block md:hidden items-center rounded-3xl w-full h-[400px] p-2overflow-hidden mx-auto my-4 text-white object-fit"
        style={{
          backgroundImage: `url(${imagesmobile[currentImageIndex].imgSrc})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="">
        <h1 className="text-[#26173F] text-lg xl:text-5xl font-bold text-center my-[70px]">
          Up Coming{" "}
          <span className="text-[#27BDEE] text-lg xl:text-5xl font-bold">
            Event
          </span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 justify-between mx-auto">
          {imageData.map((item, index) => (
            <div
              key={index}
              className="relative group w-full xl:w-[350px] h-[250px] xl:h-[350px] mx-auto"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-gray-50 opacity-75 group-hover:opacity-0 transition duration-300 ease-in-out"></div>
              <div className="absolute inset-0 flex items-center justify-center flex-col px-4 h-fit w-full p-2 text-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <h3 className="text-3xl font-bold text-black bg-white">{item.title}</h3>
              </div>
            </div>

          ))}

        </div>
      </div>
      <What_can_do />
      <AboutComp />
      <Logo />
      <Past_event />
      <Services />
    </div>
  );
};

export default Home;
