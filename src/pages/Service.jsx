import React from "react";
import { useParams } from "react-router";
import slide1 from "../assets/img/sh-3.jpg";
import slide2 from "../assets/img/sh-1.jpg";
import slide3 from "../assets/img/sh-2.jpg";
import slide4 from "../assets/img/sh-4.jpg";
import slide5 from "../assets/img/sh-1.jpg";
import slide6 from "../assets/img/sh-2.jpg";
import slide7 from "../assets/img/sh-3.jpg";
import Hero from "../components/Hero";

const cardData = [
  {
    id: 1,
    imgSrc: slide1,
    imgphone: slide7, // Replace with actual image path or URL
    title: "Sports events",
    description:
      "Happy Team brings communities together through engaging sports events, fostering teamwork and healthy competition across all age groups.",
    points: [
      "Marathon",
      "Cyclathon",
      "Walkathon",
      "Race Director",
      "Event Management",
      "All Types of sports Events",
    ],
  },
  {
    id: 2,
    imgSrc: slide4,
    imgphone: slide4,
    title: "Corporate Events",
    description:
      "We specialize in crafting memorable corporate events that enhance team cohesion and celebrate company milestones, delivering experiences that resonate with your corporate identity.",
    points: [
      "CSR Activites",
      "Inaugration/Exhibition",
      "Door to Door Activity/ Product Promotion",
      "School Activities",
      "Annual Function",
      "All Types Events",
    ],
  },
  {
    id: 3,
    imgSrc: slide2,
    imgphone: slide5,
    title: "Government Projects",
    description:
      "Happy Team collaborates with government entities to execute impactful projects, focusing on community development and public engagement initiatives.",
    points: [
      "CM/PM Function",
      "School Activities",
      "Inaugration",
      "Road Show",
      "Promotion Activities",
      "All Types Events",
    ],
  },
  {
    id: 4,
    imgSrc: slide3,
    imgphone: slide6,
    title: "Social Activities",
    description:
      "Our expertise in organizing social activities aims at strengthening community bonds, promoting social responsibility, and encouraging active participation in meaningful causes.",
    points: [
      "Wedding/Haldi/Sangeet/ Mhendi",
      "Get Together",
      "Catering/Sound System/Lighting Decor",
      "Birthday Party/Balloon Decor",
      "Hospitality Management/Live concert",
      "All Types Events",
    ],
  },
];

const Service = () => {
  const { id } = useParams();
  const data = cardData.find((item) => {
    return id == item.id;
  });

  return (
    <>
      <Hero title={data.title} description={data.description} />
      <div className="grid gap-2 md:gap-0 md:grid-cols-4 md:grid-rows-3 grid-cols-1">
        <div className="grid items-center md:justify-end font-bold text-xl">
          <p className="bg-[#332645] text-center text-white p-5 rounded-xl text-sm font-light">
            {data.points[0]}
          </p>
        </div>
        <div className="grid items-center  md:justify-start font-bold text-xl">
          <p className="bg-[#332645] text-center text-white p-5 rounded-xl text-sm font-light">
            {data.points[1]}
          </p>
        </div>
        <div className="grid items-center  md:justify-center font-bold text-xl">
          <p className="bg-[#332645] text-center text-white p-5 rounded-xl text-sm font-light">
            {data.points[2]}
          </p>
        </div>
        <div className="grid items-center justify-center row-start-1 md:justify-center md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-4">
          <img
            src={data.imgSrc}
            alt="no"
            className="rounded-xl hidden md:block w-[300px] h-[500px]"
          />
          <img
            src={data.imgphone}
            alt="no"
            className="rounded-xl block md:hidden w-full h-auto "
          />
        </div>
        <div className="grid items-center md:justify-center font-bold text-xl">
          <p className="bg-[#332645] text-center text-white p-5 rounded-xl text-sm font-light">
            {data.points[3]}
          </p>
        </div>
        <div className="grid items-center  md:justify-end font-bold text-xl">
          <p className="bg-[#332645] text-center text-white p-5 rounded-xl text-sm font-light">
            {data.points[4]}
          </p>
        </div>
        <div className="grid items-center  md:justify-start font-bold text-xl">
          <p className="bg-[#332645] text-center text-white p-5 rounded-xl text-sm font-light">
            {data.points[5]}
          </p>
        </div>
      </div>
    </>
  );
};

export default Service;
