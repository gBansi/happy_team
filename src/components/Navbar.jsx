import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/img/logo.png";
import { FaPhoneVolume } from "react-icons/fa6";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "HOME", path: "/" },
    { id: 2, text: "ABOUT US", path: "/about" },
    { id: 3, text: "SERVICES", path: "/services" },
    { id: 4, text: "CONTACT US", path: "/contact" },
    // { id: 5, text: '' },
  ];
  return (
    <div className="flex justify-between items-center h-18 bg-white  max-w-full mx-auto px-4 sticky top-0 z-[999]">
      {/* Logo */}
      <Link to="/">
        <img className="h-30 w-28" src={logo} alt="Logo" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-2 font-bold rounded-xl m-2 cursor-pointer duration-300 hover:text-[#27BDEE]"
          >
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>
      {/* <button className="hidden md:flex items-center justify-center bg-[#26173F] text-white rounded-full p-2 space-x-2">
        <FaPhoneVolume />
        <span>Call Us</span>
      </button> */}
      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-fit bg-slate-50  shadow-lg h-full border- border-gray-900 bg-blue ease-in-out duration-500 p-4"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <img className="h-28 w-28 mt-2 ml-5" src={logo} alt="Logo" />

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4  hover:text-[#27BDEE] duration-300 cursor-pointer border-gray-600"
          >
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
        {/* <button className="md:hidden flex items-center justify-center h-fit w-fit p-2 bg-[#26173F] text-white rounded-full  space-x-2">
          <FaPhoneVolume />
          <span>Call Us</span>
        </button> */}
      </ul>
    </div>
  );
};

export default Navbar;
