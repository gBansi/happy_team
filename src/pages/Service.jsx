import React from 'react'
import { useParams } from 'react-router';
import slide1 from '../assets/img/slide1.jpg'
import Hero from '../components/Hero';

const cardData = [
  {
    id: 1,
    imgSrc: slide1, // Replace with actual image path or URL
    title: 'Climbing Wall',
    description: 'A vertical challenge that tests strength, endurance, and strategy, simulating the thrill of rock climbing in a controlled environment.',
    readMoreLink: '/service'
  },
  {
    id: 2,
    imgSrc: slide1,
    title: 'Zipline',
    description: 'An exhilarating aerial ride that propels adventurers across landscapes, offering breathtaking views and a rush of adrenaline.',
    readMoreLink: '/service'
  },
  {
    id: 3,
    imgSrc: slide1,
    title: 'Ladder Climing',
    description: 'A test of agility and strength, where participants ascend to new heights, challenging their limits and perseverance.',
    readMoreLink: '/service'
  }
];

const title = "About Us";
const description = "Creating Extraordinary Event Is Our Specialty. Innovative Designs, Entertainment And Customized Theme Decor, Glamorous, Event Plan Delivers Resonance To The WOW Factor While Saving Our Clients Valuable Time And Money";

const Service = () => {
  const { id } = useParams()
  const data = cardData.find((item) => {
    return id == item.id
  })


  return (
    <>
      <Hero title={title} description={description} />

      <div>
        <div key={data.id} className="px-4 ">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700 mx-auto justify-center  ">
            <a href="#">
              <img className="rounded-t-lg" src={data.imgSrc} alt={data.alt} />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{data.title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service