import React, { useState, useEffect } from 'react';
import slide1 from '../assets/img/slide1.jpg'
import slide2 from '../assets/img/slide2.jpg'
import slide3 from '../assets/img/slide3.jpg'

const images = [
    { imgSrc: slide1, alt: 'Description of slide 8' },
    { imgSrc: slide2, alt: 'Description of slide 9' },
    { imgSrc: slide3, alt: 'Description of slide 9' },
];
const Past_event = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((currentImageIndex) => (currentImageIndex + 1) % images.length);
        }, 2000); // Change image every 3 seconds

        return () => clearInterval(timer); // Clear the interval on component unmount
    }, []);
    return (
        <div className=' items-center rounded-xl xl:h-[700px] h-fit overflow-hidden mx-auto my-4 text-white py-11 bg-[#332645] px-5'>
            <div className='flex flex-col xl:flex-row items-center justify-between gap-2 py-10 px-7'>
                <h1 className='text-white text-lg xl:text-5xl font-bold text-center'>Past <span className='text-[#27BDEE]'>Event</span></h1>
                <p className='text-xl xl:w-[60%]'>Creating Extraordinary Event Is Our Specialty. Innovative Designs, Entertainment And Customized Theme Decor, Glamorous, Event Plan Delivers Resonance To The WOW Factor While Saving Our Clients Valuable Time And Money</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mx-auto mt-10">
                {[...Array(3)].map((_, index) => (
                    <div key={index} className="flex items-center justify-center overflow-hidden">
                        <img src={images[currentImageIndex].imgSrc} alt={images[currentImageIndex].alt} className="object-cover w-full h-auto rounded-lg" />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Past_event