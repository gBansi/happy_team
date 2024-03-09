import React from 'react'
import slide1 from '../assets/img/logo.png'


const Logo = () => {
    return (
        <div className='my-[70px]'>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mx-auto">
                <div className='mx-auto'>
                    <img src={slide1} alt="no_img" className='w-[300px] h-[300px]' />
                </div>
                <div className='mx-auto'>
                    <img src={slide1} alt="no_img" className='w-[300px] h-[300px]' />
                </div>
                <div className='mx-auto'>
                    <img src={slide1} alt="no_img" className='w-[300px] h-[300px]' />
                </div>
                <div className='flex flex-col items-center justify-center px-4 py-8'>
                    <h1 className='text-[#26173F] text-lg xl:text-5xl font-bold text-center'>Our <span className='text-[#27BDEE]'>Clients</span></h1>
                    <p className='text-xl xl:w-[60%] text-start mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus.</p>
                </div>
            </div>
        </div>
    )
}

export default Logo