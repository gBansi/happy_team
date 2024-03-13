import React from "react";
import slide1 from "../assets/img/h-11.jpg";
import slide2 from "../assets/img/h-2.png";
import slide3 from "../assets/img/h-3.png";
import slide4 from "../assets/img/h-4.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "../components/Hero";
import { useParams } from "react-router";

const title = "services";
const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const cardData = [
  {
    id: 1,
    imgSrc: slide2,
    title: "Sports events",
    description:
      "A vertical challenge that tests strength, endurance, and strategy, simulating the thrill of rock climbing in a controlled environment.",
  },
  {
    id: 2,
    imgSrc: slide4,
    title: "Corporate Event",
    description:
      "An exhilarating aerial ride that propels adventurers across landscapes, offering breathtaking views and a rush of adrenaline.",
  },
  {
    id: 3,
    imgSrc: slide3,
    title: "Government Projects",
    description:
      "Partnering with public entities to deliver impactful and sustainable solutions.",
  },
  {
    id: 4,
    imgSrc: slide1,
    title: "Social Activities",
    description:
      " Engaging communities with meaningful initiatives for social enrichment and connection.",
  },
];

const Services = () => {
  return (
    <div className="my-[70px]">
      <h1 className="text-[#26173F] text-lg xl:text-5xl font-bold text-center">
        All{" "}
        <span className="text-[#27BDEE] text-lg xl:text-5xl font-bold">
          Services
        </span>
      </h1>
      <p className="text-gray-700 mt-4 xl:mt-10 text-xl text-center mb-10">
        happy taem is a fast-growing event company located in ahmadabad -
        gujarat. we specialize in domestic events. till date, we have
        successfully organized events in many sectors, be it sports, wedding,
        corporate and have provided management services.
      </p>
      <div className="container grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4 mx-auto  py-2 auto-rows-min">
        {cardData.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700 mx-auto flex flex-col justify-between h-full">
              <a href="#">
                <img className="rounded-t-lg" src={item.imgSrc} alt={item.alt} />
              </a>
              <div className="p-5 flex flex-col justify-between flex-grow">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                    {item.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">
                  {item.description}
                </p>
                <a
                  href={"/service/" + item.id}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4 w-fit "
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Services;
