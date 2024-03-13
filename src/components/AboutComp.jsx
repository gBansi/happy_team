import React, { useState, useEffect } from "react";
import slide1 from "../assets/img/a-1.jpg";
import slide2 from "../assets/img/a-2.jpg";
import slide3 from "../assets/img/a-3.jpg";

const images = [
  { imgSrc: slide1, alt: "Description of slide 8" },
  { imgSrc: slide2, alt: "Description of slide 9" },
  { imgSrc: slide3, alt: "Description of slide 9" },
];
const AboutComp = () => {
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
    <div className="flex flex-col md:flex-row gap-5 items-center !justify-between">
      <div className="w-full md:w-[50%]">
        <h1 className="text-[#26173F] text-2xl md:text-3xl xl:text-5xl font-bold text-center">
          About{" "}
          <span className="text-[#27BDEE] text-2xl md:text-3xl xl:text-5xl font-bold">
            Us
          </span>
        </h1>
        <p className="text-gray-700 mt-4 xl:mt-10 text-xl text-justify">
          Happy Team is a fast-growing event company located in ahmadabad -
          gujarat. We specialize in domestic events. till date, we have
          successfully organized events in many sectors, be it sports, wedding,
          corporate and have provided management services.
        </p>
        <div className="space-y-4 mt-4 xl:mt-28">
          <div className="space-y-2">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-black ">
                Sport Event
              </span>
              <span className="text-sm font-medium text-black ">26 +</span>
            </div>
            <div className="w-full rounded-full h-2 bg-black">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium !text-black ">
                Corporate Event
              </span>
              <span className="text-sm font-medium !text-black ">20 +</span>
            </div>
            <div className="w-full rounded-full h-2 bg-black">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-black ">
                Up Coming big sports Event
              </span>
              <span className="text-sm font-medium text-black ">5 +</span>
            </div>
            <div className="w-full rounded-full h-2 bg-black">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "5%" }}
              ></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-black ">
                Social Events
              </span>
              <span className="text-sm font-medium text-black ">30 +</span>
            </div>
            <div className="w-full rounded-full h-2 bg-black">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "30%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-[50%] items-end justify-center xl:justify-end xl:mt-0 mt-4">
        <div className="flex xl:h-[600px] w-[500px] rounded-lg items-center justify-center md:justify-end">
          <img
            src={images[currentImageIndex].imgSrc}
            alt={images[currentImageIndex].alt}
            className="rounded-lg h-[400px] xl:h-[600px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
