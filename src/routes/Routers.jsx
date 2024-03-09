import React from 'react'
import Home from '../pages/Home'
import { Routes, Route } from "react-router-dom";
import About from '../pages/About';

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about"element={<About/>}/>
    </Routes>
  )
}

export default Routers