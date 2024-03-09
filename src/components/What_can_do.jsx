import React from "react";
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
      "we bring the right people together to challenge established thinking.",
  },
  {
    Icon: FaMedal,
    title: "experienced",
    description:
      "we bring the right people together to challenge established thinking.",
  },
  {
    Icon: FaDollarSign,
    title: "affordable price",
    description:
      "we bring the right people together to challenge established thinking.",
  },
  {
    Icon: FaCalendarAlt,
    title: "flexible scheduling",
    description:
      "we bring the right people together to challenge established thinking.",
  },
];

const What_can_do = () => {
  return (
    <div className="my-[70px]">
      <div className="flex flex-col xl:flex-row items-center justify-between gap-2 py-10">
        <h1 className="text-[#26173F] text-lg xl:text-5xl font-bold text-center">
          What Can We <span className="text-[#27BDEE]">Do?</span>
        </h1>
        <p className="text-xl xl:w-[60%]">
          Creating Extraordinary Event Is Our Specialty. Innovative Designs,
          Entertainment And Customized Theme Decor, Glamorous, Event Plan
          Delivers Resonance To The WOW Factor While Saving Our Clients Valuable
          Time And Money
        </p>
      </div>
      <div className="flex flex-col xl:flex-row items-start justify-center gap-2 py-10">
        {/* Image container to control the space around the image */}
        <div className="flex flex-col justify-start items-start xl:w-[40%]">
          <img
            src={slide1}
            alt="Description"
            className="rounded-full sm:h-[400px] sm:w-[400px] w-[300px] h-[300px]"
          />
        </div>

        {/* Content */}
        <div className="xl:w-[60%] text-xl text-start xl:text-left">
          <div className="bg-white text-gray-800 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center xl:items-start text-center xl:text-start"
                >
                  <div className="h-fit w-fit p-2 bg-[#27BDEE]">
                    <feature.Icon className="text-white text-2xl hover:text-[#26173F]" />
                  </div>
                  <h2 className="text-xl font-bold mb-2 text-start">
                    {feature.title}
                  </h2>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
            <hr className="my-4 h-[1px] bg-[#26173F] border-none" />
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-5">
                <img
                  src={slide1}
                  className="h-[100px] w-[100px] rounded-full overflow-hidden mx-auto"
                ></img>
                <div className="mx-auto">
                  <h1 className="text-[#26173F] text-lg xl:text-2xl font-bold text-start">
                    vishnu kamaliya
                  </h1>
                  <p className="text-xl">ceo happy tame</p>
                </div>
              </div>
              <Link to="https://vishnukamaliya.com">
                <button className="flex items-center justify-center bg-[#26173F] h-fit w-fit text-white rounded-full p-2 space-x-2 mx-auto">
                  <FaArrowCircleRight />
                  <span>About Us</span>
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
