import React from "react";
import { useParams } from "react-router";
import slide1 from "../assets/img/slide1.jpg";
import Hero from "../components/Hero";

const cardData = [
  {
    id: 1,
    imgSrc: slide1, // Replace with actual image path or URL
    title: "Sports events",
    description:
      "A vertical challenge that tests strength, endurance, and strategy, simulating the thrill of rock climbing in a controlled environment.",
    points: [
      "Marathon",
      "Cyclathon",
      "Walkathon",
      "Race Director",
      "Event Management",
      "All Types Events",
    ],
  },
  {
    id: 2,
    imgSrc: slide1,
    title: "Corporate Events",
    description:
      "An exhilarating aerial ride that propels adventurers across landscapes, offering breathtaking views and a rush of adrenaline.",
    points: [
      "CSR Activites",
      "Inaugration/Exhibition",
      "School Activities",
      "Annual Function",
      "Door to Door Activity/ Product Promotion",
      "All Types Events",
    ],
  },
  {
    id: 3,
    imgSrc: slide1,
    title: "Government Projects",
    description:
      "A test of agility and strength, where participants ascend to new heights, challenging their limits and perseverance.",
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
    imgSrc: slide1,
    title: "Social Activities",
    description:
      "A test of agility and strength, where participants ascend to new heights, challenging their limits and perseverance.",
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

      <div className="grid gap-10 md:gap-0 md:grid-cols-4 md:grid-rows-3 grid-cols-1">
        <div className="grid items-center justify-center md:justify-end font-bold text-xl">
          {data.points[0]}
        </div>
        <div className="grid items-center justify-center md:justify-start font-bold text-xl">
          {data.points[1]}
        </div>
        <div className="grid items-center justify-center md:justify-center font-bold text-xl">
          {data.points[2]}
        </div>
        <div className="grid items-center justify-center row-start-1 md:justify-center md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-4">
          <img
            src={data.imgSrc}
            alt="no"
            className="rounded-xl w-[300px] h-[500px]"
          />
        </div>
        <div className="grid items-center justify-center md:justify-center font-bold text-xl">
          {data.points[3]}
        </div>
        <div className="grid items-center justify-center md:justify-end font-bold text-xl">
          {data.points[4]}
        </div>
        <div className="grid items-center justify-center md:justify-start font-bold text-xl">
          {data.points[5]}
        </div>
      </div>
    </>
  );
};

export default Service;
