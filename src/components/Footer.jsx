import React from 'react';
import logo from '../assets/img/logo.png'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=''>
    <footer className="items-center rounded-xl  h-fit overflow-hidden mx-auto my-4 text-white py-11 bg-[#332645]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 text-center md:text-left">
        {/* Brand Logo and Description */}
        <div>
        <img className='h-28 w-28' src={logo} alt="Logo" />

          <h2 className="font-bold text-xl mb-4">Happy Team</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
        </div>
        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold mb-3">Navigation</h3>
          <ul>
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">Pages</a></li>
            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Services</a></li>
          </ul>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Link</h3>
          <ul>
            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
            <li><a href="#" className="hover:text-gray-400">Booking</a></li>
            <li><a href="#" className="hover:text-gray-400">Pages</a></li>
          </ul>
        </div>
        {/* Services and Social Links */}
        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul>
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            <li><a href="#" className="hover:text-gray-400">Blog</a></li>
            <li><a href="#" className="hover:text-gray-400">404</a></li>
          </ul>
          <div className="flex justify-center md:justify-start mt-4">
            <a href="#" className="text-blue-600 mx-2"><FaFacebookF /></a>
            <a href="#" className="text-blue-400 mx-2"><FaTwitter /></a>
            <a href="#" className="text-red-600 mx-2"><FaYoutube /></a>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="border-t border-gray-700 text-center pt-5 mt-5">
        © 2023 Bazeball Template • All Rights Reserved
      </div>
    </footer>
    </div>
  );
};

export default Footer;
