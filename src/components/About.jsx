import React, { useState, useEffect } from 'react';
import slide1 from '../assets/img/slide1.jpg'
import slide2 from '../assets/img/slide2.jpg'
import slide3 from '../assets/img/slide3.jpg'

const images = [
    { imgSrc: slide1, alt: 'Description of slide 8' },
    { imgSrc: slide2, alt: 'Description of slide 9' },
    { imgSrc: slide3, alt: 'Description of slide 9' },
];
const About = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((currentImageIndex) => (currentImageIndex + 1) % images.length);
        }, 2000); // Change image every 3 seconds

        return () => clearInterval(timer); // Clear the interval on component unmount
    }, []);
    return (

        <div className="flex flex-col lg:flex-row items-center !justify-between">
            <div className="w-full xl:w-[50%]">
                <h1 className='text-[#26173F] text-lg xl:text-5xl font-bold text-start'>About <span className='text-[#27BDEE] text-lg xl:text-5xl font-bold'>Us</span></h1>
                <p className="text-gray-700 mt-4 xl:mt-10 text-xl">
                    happy taem is a fast-growing event company located in ahmadabad - gujarat. we specialize in domestic events. till date, we have successfully organized events in many sectors, be it sports, wedding, corporate and have provided management services.
                </p>
                <div className="space-y-4 mt-4 xl:mt-28">
                    <div className="space-y-2">
                        <div class="flex justify-between mb-1">
                            <span class="text-base font-medium text-black dark:text-white">Sport Event</span>
                            <span class="text-sm font-medium text-black dark:text-white">75%</span>
                        </div>
                        <div class="w-full rounded-full h-2 bg-black">
                            <div class="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div class="flex justify-between mb-1">
                            <span class="text-base font-medium text-black dark:text-white">Corporate Event</span>
                            <span class="text-sm font-medium text-black dark:text-white">50%</span>
                        </div>
                        <div class="w-full rounded-full h-2 bg-black">
                            <div class="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div class="flex justify-between mb-1">
                            <span class="text-base font-medium text-black dark:text-white">Up Coming Event</span>
                            <span class="text-sm font-medium text-black dark:text-white">25%</span>
                        </div>
                        <div class="w-full rounded-full h-2 bg-black">
                            <div class="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex w-full xl:w-[50%] items-center justify-end xl:mt-0 mt-4">
                <div className="flex h-[600px] w-[500px] rounded-lg items-center justify-center">
                    <img src={images[currentImageIndex].imgSrc} alt={images[currentImageIndex].alt} className="rounded-lg h-[600px]" />
                </div>
            </div>
        </div>
    )
}

export default About