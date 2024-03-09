import React from 'react'
import slide1 from '../assets/img/slide1.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const cardData = [
    {
        imgSrc: slide1, // Replace with actual image path or URL
        title: 'Climbing Wall',
        description: 'A vertical challenge that tests strength, endurance, and strategy, simulating the thrill of rock climbing in a controlled environment.',
        readMoreLink: '#'
    },
    {
        imgSrc: slide1,
        title: 'Zipline',
        description: 'An exhilarating aerial ride that propels adventurers across landscapes, offering breathtaking views and a rush of adrenaline.',
        readMoreLink: '#'
    },
    {
        imgSrc: slide1,
        title: 'Ladder Climing',
        description: 'A test of agility and strength, where participants ascend to new heights, challenging their limits and perseverance.',
        readMoreLink: '#'
    },
    {
        imgSrc: slide1,
        title: 'Ladder Climing',
        description: 'A test of agility and strength, where participants ascend to new heights, challenging their limits and perseverance.',
        readMoreLink: '#'
    },
    {
        imgSrc: slide1,
        title: 'Ladder Climing',
        description: 'A test of agility and strength, where participants ascend to new heights, challenging their limits and perseverance.',
        readMoreLink: '#'
    },

];
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust number of slides to show
    slidesToScroll: 3, // Adjust number of slides to scroll
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};
const Services = () => {
    return (
        <div className='my-[70px]'>
            <h1 className='text-[#26173F] text-lg xl:text-5xl font-bold text-center'>All <span className='text-[#27BDEE] text-lg xl:text-5xl font-bold'>Services</span></h1>
            <p className="text-gray-700 mt-4 xl:mt-10 text-xl text-center">
                happy taem is a fast-growing event company located in ahmadabad - gujarat. we specialize in domestic events. till date, we have successfully organized events in many sectors, be it sports, wedding, corporate and have provided management services.
            </p>
            <div className="container mx-auto py-6">
                <Slider {...settings}>
                    {cardData.map((item, index) => (
                        <div key={index} className="px-4 ">
                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
                                <a href="#">
                                    <img className="rounded-t-lg" src={item.imgSrc} alt={item.alt} />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                                    <a href={item.readMoreLink} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        {/* Include your svg or icon here */}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Services