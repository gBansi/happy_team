import React from "react";
import logo from "../assets/img/logo.png";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <footer className="items-center rounded-xl  h-fit overflow-hidden mx-auto my-4 text-white py-11 bg-[#72697F]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 text-center md:text-left">
          {/* Brand Logo and Description */}
          <div>
            <img className="h-28 w-28" src={logo} alt="Logo" />

            <h2 className="font-bold text-xl mb-4">Happy Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus.
            </p>
            <div className="flex justify-center md:justify-start mt-4">
              <a href="#" className="text-black hover:text-blue-600 mx-2">
                <FaFacebookF />
              </a>
              <a href="#" className="text-black hover:text-blue-400 mx-2">
                <FaTwitter />
              </a>
              <a href="#" className="text-black hover:text-red-600 mx-2">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col justify-center col-start-1 md:col-start-2 lg:col-start-3">
            <h3 className="font-semibold mb-3">Quick Link</h3>
            <ul>
              <li>
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* Services and Social Links */}
          <div className="flex flex-col justify-center">
            <h3 className="font-semibold mb-3">Services</h3>
            <ul>
              <li>
                <a href="/service/1" className="hover:text-gray-400">
                  Sports
                </a>
              </li>
              <li>
                <a href="/service/2" className="hover:text-gray-400">
                  Corporate Events
                </a>
              </li>
              <li>
                <a href="/service/3" className="hover:text-gray-400">
                  Government Project
                </a>
              </li>
              <li>
                <a href="/service/4" className="hover:text-gray-400">
                  Social Activities
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 text-center pt-5 mt-5">
          © 2023 Blue Soltech • All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
