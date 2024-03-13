import React from 'react'
import Hero from '../components/Hero'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import Contact_page from '../components/Contact_page';

const title = "CONTACT US";
const description = "How can I assist you today? If you have any questions or need help, feel free to ask!";

const Contact = () => {
    return (
        <div>
            <Hero title={title} description={description} />
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4  mt-10 mx-auto">
                <div className='flex flex-col items-center justify-center bg-[#332645] rounded-lg p-4'>
                    <FaPhoneAlt className='text-white text-3xl' size={70} />
                    <h1 className="text-white text-xl xl:text-3xl  text-center my-4">+91 96626 95956</h1>
                </div>
                <div className='flex flex-col items-center justify-center bg-[#332645] rounded-lg p-4'>
                    <IoIosMail className='text-white text-3xl' size={70} />
                    <h1 className="text-xl text-white xl:text-3xl text-center my-4">infro@happyteam.in</h1>
                </div>
                <div className='flex flex-col items-center justify-center bg-[#332645] rounded-lg p-4'>
                    <CiLocationOn className='text-white text-3xl' size={70} />
                    <h1 className="text-white text-xl xl:text-3xl  text-center my-4">Ahmedabad, Gujarat ,India  </h1>
                </div>
            </div>
            <Contact_page />
        </div>
    )
}

export default Contact