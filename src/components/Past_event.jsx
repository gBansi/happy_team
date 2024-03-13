import React, { useState, useEffect } from "react";
import p1 from "../assets/img/p-1.jpg";
import p2 from "../assets/img/p-2.jpg";

import p4 from "../assets/img/p-4.jpg";
import p5 from "../assets/img/p-5.jpg";
import p6 from "../assets/img/p-6.jpg";
import p7 from "../assets/img/p-7.jpg";
import p8 from "../assets/img/p-8.jpg";
import p9 from "../assets/img/p-9.jpg";
import p10 from "../assets/img/p-10.jpg";
import p11 from "../assets/img/p-11.jpg";
import p12 from "../assets/img/p-12.jpg";
import p13 from "../assets/img/p-13.jpg";
import p14 from "../assets/img/p-14.jpg";
import p15 from "../assets/img/p-15.jpg";
import p16 from "../assets/img/p-16.jpg";
import p17 from "../assets/img/p-17.jpg";
import p18 from "../assets/img/p-18.jpg";
import p19 from "../assets/img/p-19.jpg";

const images = [
  { imgSrc: p1 },
  { imgSrc: p2 },
  { imgSrc: p4 },
  { imgSrc: p5 },
  { imgSrc: p6 },
  { imgSrc: p7 },
  { imgSrc: p8 },
  { imgSrc: p9 },
  { imgSrc: p10 },
  { imgSrc: p11 },
  { imgSrc: p12 },
  { imgSrc: p13 },
  { imgSrc: p14 },
  { imgSrc: p15 },
  { imgSrc: p16 },
  { imgSrc: p17 },
  { imgSrc: p18 },
  { imgSrc: p19 },
];
const Past_event = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(
        (currentImageIndex) => (currentImageIndex + 1) % images.length
      );
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(timer); // Clear the interval on component unmount
  }, []);
  return (
    <div className=" items-center rounded-xl xl:h-[600px] h-fit overflow-hidden mx-auto my-4 text-white py-11 bg-[#332645] px-5">
      <div className="flex flex-col xl:flex-row items-center justify-between gap-2 py-10 px-7">
        <h1 className="text-white text-2xl md:text-3xl xl:text-5xl font-bold text-center">
          Past <span className="text-[#27BDEE]">Event</span>
        </h1>
        <p className="text-md text-justify xl:w-[60%]">
          Creating Extraordinary Event Is Our Specialty. Innovative Designs,
          Entertainment And Customized Theme Decor, Glamorous, Event Plan
          Delivers Resonance To The WOW Factor While Saving Our Clients Valuable
          Time And Money
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-4 mx-auto mt-10">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-center overflow-hidden h-[300px] xl:max-w-[400px] w-fit mx-auto rounded-lg"
          >
            {/* Ensure the index is within the array bounds */}
            <img
              src={images[(currentImageIndex + index) % images.length].imgSrc}
              alt={images[(currentImageIndex + index) % images.length].alt}
              className="object-cover w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Past_event;
