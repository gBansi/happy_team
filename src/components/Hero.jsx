import React from "react";

const Hero = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center rounded-xl h-fit overflow-hidden mx-auto my-4 text-white py-11 bg-[#332645] px-10">
      <div className="flex flex-col items-center justify-between gap-10">
        <h1 className="text-white text-lg xl:text-5xl font-bold text-center md:my-10">
          <span className="text-[#27BDEE]">{title.toUpperCase()}</span>
        </h1>
        <p className="md:text-xl xl:w-[60%] text-justify mx-auto md:mb-10 text-white/80">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Hero;
