import React from "react";

import Hero from "../components/Landing_page/Hero";
import Objectives from "../components/Landing_page/Objectives";
import Value from "../components/Landing_page/Value";
import Vision from "../components/Landing_page/Vision";
import CallToAction from "../components/Landing_page/CallToAction";


export default function Landing() {
  return (
    <div className="bg-[#f3f3f3] ">
      <Hero />
      <div className="max-w-[85rem] mx-auto">
        <Objectives />
        <Value />
        <Vision />
        <CallToAction/>
      </div>
    </div>
  );
}
