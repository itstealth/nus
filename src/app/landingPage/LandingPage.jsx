import React from "react";
import Hero from "./Hero";
import WhoShouldAttend from "./WhoShouldAttend";
import MTechProgram from "./MTechProgram";
import ProgramSpecializations from "./ProgramSpecializations";
import WhoShouldApply from "./WhoShouldApply";
import WhyChooseNus from "./WhyChooseNus";
import Testimonials from "./Testimonials";
import About from "./About";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <ProgramSpecializations />
      <WhoShouldAttend />
      {/* <About /> */}
      <MTechProgram />
      <WhoShouldApply />
      <WhyChooseNus />
      <Testimonials />
    </>
  );
};

export default LandingPage;
