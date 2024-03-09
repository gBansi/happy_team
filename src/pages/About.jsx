import React from "react";
import Hero from "../components/Hero";
import What_can_do from "../components/What_can_do";
import Logo from "../components/Logo";
import AboutComp from "../components/AboutComp";

const title = "About Us";
const description =
  "Creating Extraordinary Event Is Our Specialty. Innovative Designs, Entertainment And Customized Theme Decor, Glamorous, Event Plan Delivers Resonance To The WOW Factor While Saving Our Clients Valuable Time And Money";

const About = () => {
  return (
    <div>
      <Hero title={title} description={description} />
      <What_can_do />
      <AboutComp />
      <Logo />
    </div>
  );
};

export default About;
