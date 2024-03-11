import React from 'react'
import Hero from '../components/Hero'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import Contact_page from '../components/Contact_page';

const title = "CONTACT US";
const description = "Creating Extraordinary Event Is Our Specialty. Innovative Designs, Entertainment And Customized Theme Decor, Glamorous, Event Plan Delivers Resonance To The WOW Factor While Saving Our Clients Valuable Time And Money";

const Contact = () => {
    return (
        <div>
            <Hero title={title} description={description} />
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4  mt-10 mx-auto">
                <div className='flex flex-col items-center justify-center bg-[#332645] rounded-lg p-4'>
                    <FaPhoneAlt className='text-white text-3xl' size={70} />
                    <h1 className="text-white text-lg xl:text-3xl font-bold text-center my-4">(+654) 6543 643</h1>
                    <p className="text-xl text-white text-center mx-auto px-4 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.</p>
                </div>
                <div className='flex flex-col items-center justify-center bg-[#332645] rounded-lg p-4'>
                    <IoIosMail className='text-white text-3xl' size={70} />
                    <h1 className="text-white text-lg xl:text-3xl font-bold text-center my-4">(+654) 6543 643</h1>
                    <p className="text-xl text-white text-center mx-auto px-4 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.</p>
                </div>
                <div className='flex flex-col items-center justify-center bg-[#332645] rounded-lg p-4'>
                    <CiLocationOn className='text-white text-3xl' size={70} />
                    <h1 className="text-white text-lg xl:text-3xl font-bold text-center my-4">(+654) 6543 643</h1>
                    <p className="text-xl text-white text-center mx-auto px-4 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.</p>
                </div>
            </div>
            <Contact_page />
        </div>
    )
}

export default Contact