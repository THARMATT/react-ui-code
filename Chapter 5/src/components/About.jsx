import React, { useState } from "react";
import Accordium from "./Accordium";

const About = () => {
  const [visibleSection,setIsVisibleSection]=useState("about2")
  return (
    <div className="  h-full w-fil ">
      <h1 className="text-2xl text-black flex justify-center bg-red-400 items-center">
        This is Accordium
      </h1>
      <Accordium
        title={"Accordium1"}
        description={"lets try to hind and show this"}
        isVisible={visibleSection==="about"}
        setIsVisible={(value) => {
            setIsVisibleSection(value ? "about" : false);
            return value ? true : false; // Return true if value is truthy, false otherwise
        }}
      />
      <Accordium
        title={"Accordium2"}
        description={"lets try to hind and show this"}
        isVisible={visibleSection==="about2"}
        setIsVisible={(value) => {
            setIsVisibleSection(value ? "about2" : false);
            return value ? true : false; // Return true if value is truthy, false otherwise
        }}
       
      />
    </div>
  );
};

export default About;
