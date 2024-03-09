import React, { useState, useEffect } from 'react';
import slide1 from '../assets/img/slide1.jpg'
import slide2 from '../assets/img/slide2.jpg'
import slide3 from '../assets/img/slide3.jpg'
import What_can_do from '../components/What_can_do';
import About from '../components/About';
import Logo from '../components/Logo';
import Past_event from '../components/Past_event';
import Services from '../components/Services';

const images = [
    { imgSrc: slide1, alt: 'First Image Description', title: 'First Image Title', description: 'This is the first image description.' },
    { imgSrc: slide2, alt: 'Second Image Description', title: 'Second Image Title', description: 'This is the second image description.' },
    { imgSrc: slide1, alt: 'First Image Description', title: 'First Image Title', description: 'This is the first image description.' },

    // Add more images and content as needed
];
const imageData = [
    {
        src: slide1,
        alt: 'First Image',
        title: 'Title 1',
    },
    {
        src: slide2,
        alt: 'Second Image',
        title: 'Title 2',
    },
    {
        src: slide3,
        alt: 'Third Image',
        title: 'Title 3',
    },
    // Add more images as needed
];
const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Change the background image and content every 5 seconds
        const interval = setInterval(() => {
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [currentImageIndex]);

    return (
        <div className=''>
            <div
                className=" flex items-center rounded-3xl h-[500px] xl:h-[700px] overflow-hidden mx-auto my-4 text-white py-11"
                style={{
                    backgroundImage: `url(${images[currentImageIndex].imgSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="p-4 bg-black bg-transparent rounded ml-4 md:ml-10 lg:ml-16">
                    <h1 className="text-3xl font-bold">{images[currentImageIndex].title}</h1>
                    <p>{images[currentImageIndex].description}</p>
                </div>
            </div>
            <div className=''>
                <h1 className='text-[#26173F] text-lg xl:text-5xl font-bold text-center my-[70px]'>Up Coming <span className='text-[#27BDEE] text-lg xl:text-5xl font-bold'>Event</span></h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-between mx-auto">
                    {imageData.map((item, index) => (
                        <div key={index} className="relative group w-[250px] xl:w-[400px] h-[250px] xl:h-[400px] mx-auto">
                            {/* Image */}
                            <img src={item.src} alt={item.alt} className="w-full h-full rounded-lg object-cover" />

                            {/* Blue Overlay */}
                            <div className="absolute inset-0 bg-gray-50 opacity-75 group-hover:opacity-0 transition duration-300 ease-in-out"></div>

                            {/* Overlay Content */}
                            <div className="absolute inset-0 flex items-center justify-center flex-col px-4 text-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                                <h3 className="text-3xl font-bold text-white">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <What_can_do />
            <About />
            <Logo />
            <Past_event />
            <Services />
        </div>
    )
}

export default Home