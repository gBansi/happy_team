import React from 'react'
import slide1 from '../assets/img/slide1.jpg'
import { FaUserTie, FaMedal, FaDollarSign, FaCalendarAlt } from 'react-icons/fa';

const features = [
    {
        Icon: FaUserTie,
        title: 'professional coach',
        description: 'we bring the right people together to challenge established thinking.'
    },
    {
        Icon: FaMedal,
        title: 'experienced',
        description: 'we bring the right people together to challenge established thinking.'
    },
    {
        Icon: FaDollarSign,
        title: 'affordable price',
        description: 'we bring the right people together to challenge established thinking.'
    },
    {
        Icon: FaCalendarAlt,
        title: 'flexible scheduling',
        description: 'we bring the right people together to challenge established thinking.'
    }
];

const What_can_do = () => {
    return (
        <div className='my-[70px]'>
            <div className='flex flex-col xl:flex-row items-center justify-between gap-2 py-10'>
                <h1 className='text-[#26173F] text-lg xl:text-5xl font-bold text-center'>What Can We <span className='text-[#27BDEE]'>Do?</span></h1>
                <p className='text-xl xl:w-1/2'>Creating Extraordinary Event Is Our Specialty. Innovative Designs, Entertainment And Customized Theme Decor, Glamorous, Event Plan Delivers Resonance To The WOW Factor While Saving Our Clients Valuable Time And Money</p>
            </div>
            <div className='flex flex-col xl:flex-row items-center justify-center gap-2 py-10'>
                {/* Image container to control the space around the image */}
                <div className="flex flex-col justify-start items-start xl:w-1/2">
                    <img src={slide1} alt="Description" className='rounded-full sm:h-[400px] sm:w-[400px] w-[200px] h-[200px]' />
                </div>

                {/* Content */}
                <div className='xl:w-[100%] text-xl text-start xl:text-left'>
                    <div className="bg-white text-gray-800 p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <div className='h-fit w-fit p-2 bg-[#27BDEE]'>
                                    <feature.Icon className="text-white text-5xl hover:text-[#26173F]" />
                                    </div>
                                    <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                        <hr className='my-4 h-1 bg-[#26173F] border-none' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default What_can_do