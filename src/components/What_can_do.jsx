import React from "react";
import VKPhoto from "../assets/img/VKPhotos03.webp";
import slide1 from "../assets/img/slide1.jpg";

import {
  FaUserTie,
  FaMedal,
  FaDollarSign,
  FaCalendarAlt,
} from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const features = [
  {
    Icon: FaUserTie,
    title: "professional coach",
    description:
      "Empowering you to achieve your goals with expert coaching and personalized guidance.",
  },
  {
    Icon: FaMedal,
    title: "Experienced",
    description: "Harnessing expertise to foster growth and drive success.",
  },
  {
    Icon: FaDollarSign,
    title: "Affordable price",
    description: "Quality service that fits your budget.",
  },
  {
    Icon: FaCalendarAlt,
    title: "Flexible scheduling",
    description: "Adapting to your timetable for maximum convenience.",
  },
];

const What_can_do = () => {
  return (
    <div className="my-[70px]">
      <div className="flex flex-col xl:flex-row items-center justify-between gap-2 md:py-10">
        <h1 className="text-[#26173F] text-2xl md:text-3xl xl:text-5xl font-bold text-center mb-5 md:mb-0">
          What Can We <span className="text-[#27BDEE]">Do?</span>
        </h1>
        <p className="text-md xl:w-[60%] text-justify">
          Creating Extraordinary Event Is Our Specialty. Innovative Designs,
          Entertainment And Customized Theme Decor, Glamorous, Event Plan
          Delivers Resonance To The WOW Factor While Saving Our Clients Valuable
          Time And Money
        </p>
      </div>
      <div className="flex flex-col xl:flex-row items-start justify-center gap-2 md:py-10">
        {/* Image container to control the space around the image */}
        <div className="flex flex-col  justify-center items-center object-center w-full  xl:w-[40%]">
          <img
            src={VKPhoto}
            alt="Description"
            className="rounded-full !sm:h-[400px] !sm:w-[400px] w-[300px] h-[300px] object-cover object-[-70px]"
          />
        </div>

        {/* Content */}
        <div className="xl:w-[60%] text-xl text-start xl:text-left">
          <div className="bg-white text-gray-800 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start md:items-center xl:items-start text-start md:text-center xl:text-start"
                >
                  <div className="flex gap-3">
                    <div className="h-fit w-fit p-2 bg-[#27BDEE]">
                      <feature.Icon className="text-white text-2xl hover:text-[#26173F]" />
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-start uppercase">
                      {feature.title}
                    </h2>
                  </div>
                  <p className="text-[15px]">{feature.description}</p>
                </div>
              ))}
            </div>
            <hr className="my-4 h-[1px] bg-[#26173F] border-none" />
            <div className="flex justify-center items-center gap-4 md:gap-10">
              <div className="flex items-center gap-5 justify-center">
                <div className="mx-auto">
                  <h1 className="text-[#26173F] text-2xl xl:text-2xl font-bold text-start">
                    Vishnu Kamaliya
                  </h1>
                  <p className="text-sm">CEO of Happy Team</p>
                </div>
              </div>
              <Link to="https://vishnukamaliya.com">
                <button className="flex items-center justify-center bg-[#26173F] h-fit w-fit text-white rounded-full p-2 space-x-2 mx-auto">
                  <FaArrowCircleRight />
                  <span className="text-sm">About Us</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What_can_do;
