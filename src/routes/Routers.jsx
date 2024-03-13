import React from 'react'
import Home from '../pages/Home'
import { Routes, Route } from "react-router-dom";
import About from '../pages/About';
import Service from '../pages/Service';
import Services from '../components/Services';
import Contact from '../pages/Contact';
import ServicePage from '../components/ServicePage';

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/services" element={<ServicePage />}/>
        <Route path="/service/:id" element={<Service />}/>
        <Route path="/contact"element={<Contact/>}/>

    </Routes>
  )
}

export default Routers