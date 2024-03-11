import React from 'react'
import Home from '../pages/Home'
import { Routes, Route } from "react-router-dom";
import About from '../pages/About';
import Service from '../pages/Service';
import Services from '../components/Services';

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/service/:id" element={<Service />}/>
    </Routes>
  )
}

export default Routers