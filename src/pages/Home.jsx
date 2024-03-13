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
import slider from "../assets/img/s-1.jpg";
import slider2 from "../assets/img/s-2.jpg";
import slider3 from "../assets/img/s-3.jpg";
import slider4 from "../assets/img/s-4.jpg";
import slider5 from "../assets/img/s-5.jpg";
import slider6 from "../assets/img/s-6.jpg";
import slider7 from "../assets/img/sh-5.jpg";
import slider8 from "../assets/img/s-7.jpg";
import slider9 from "../assets/img/s-8.jpg";
import slider10 from "../assets/img/s-9.jpg";
import { Link } from "react-router-dom";
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
    visit: "https://www.greenplanetrun.com",
  },
  {
    src: slide2,
    alt: "",
    title: "Sport Carnival",
    visit: "https://www.sportcarnival.co.in",
  },
  {
    src: slide88,
    alt: "Third Image",
    title: "Upcoming Mega Events",
    visit: "/",
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
      <img
        src={images[currentImageIndex].imgSrc}
        className="hidden md:block items-center rounded-3xl w-auto max-h-[600px] overflow-hidden mx-auto my-4 text-white"
        alt=""
      />
      <img
        src={imagesmobile[currentImageIndex].imgSrc}
        className="block md:hidden items-center rounded-3xl w-auto max-h-[400px] p-2overflow-hidden mx-auto my-4 text-white object-fit"
        alt=""
      />
      <div className="">
        <h1 className="text-[#26173F] text-xl md:text-3xl xl:text-5xl font-bold text-center my-[20px] md:my-[70px]">
          Upcoming{" "}
          <span className="text-[#27BDEE] text-xl md:text-3xl xl:text-5xl font-bold">
            Events
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between mx-auto">
          {imageData.map((item, index) => (
            <div key={index} className="relative group w-full h-auto mx-auto">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-transparent opacity-75 group-hover:opacity-0 transition duration-300 ease-in-out"></div>
              <div className="absolute w-full h-full inset-0 flex gap-5 rounded-lg bg-black/70 backdrop-blur-sm items-center justify-center flex-col px-4  p-2 text-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <h3 className="text-3xl font-light text-white uppercase">
                  {item.title}
                </h3>
                <Link to={item.visit}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded-xl">
                    Visit Site
                  </button>
                </Link>
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
