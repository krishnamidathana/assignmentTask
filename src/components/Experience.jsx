import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import home_icon from "../assets/home_icon.svg";

const Experience = () => {
   // State variables to track scroll events and animation triggers
  const [scrollTriggered, setScrollTriggered] = useState(false);
  const [experienceBar, setExperienceBar] = useState(false);

  // Effect hook to add scroll event listener and update state accordingly
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = 800; 
      const barTriggerPoint = 750
// Check if scroll position exceeds trigger point
      if (scrollPosition > triggerPoint ) {
        setScrollTriggered(true);

      }else{setScrollTriggered(false)}

        // Check if scroll position exceeds trigger point for experience bar animation
      if (scrollPosition > barTriggerPoint ) {
        setExperienceBar(true);

      }else{setExperienceBar(false)}

    };
   // Add scroll event listener
    window.addEventListener("scroll", handleScroll);


      // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTriggered]);

  return (
    <div className="w-[100%] border-[#DCDCDC] border rounded-xl">
       {/* Header */}
      <div className="w-[100%] h-10 bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-t-xl flex items-center justify-between px-8 py-2">
        <p className="font-semibold text-xl">My Work Experience</p>
      </div>
         {/* Work experience details */}
      <div className="pl-8 my-4">
        {scrollTriggered ? (
          <p className="text-[#3A643B] text-lg font-bold">
            I have been in practice for :{" "}
            <CountUp start={0} end={7} duration={4} suffix="+"/> Years
          </p>
        ) : (
          <p className="text-[#3A643B] text-lg font-bold">
            I have been in practice for : 7+ Years
          </p>
        )}
      </div>
        {/* Animated experience bars */}
      <motion.div  
       initial={{ opacity: 0, x: 100 }} // Set initial opacity to 0 and y-axis position
       animate={{ opacity: experienceBar  ? 1 : 0, x: experienceBar ? 0 : 100 }} // Animate opacity and y-axis position based on isVisible state
       transition={{ duration: 1.5 }} // Set transition duration
      className="pl-8 my-6 flex gap-8">
         {/* Icon */}
        <img src={home_icon} alt="home_icon" />
        <div>
          <p className="font-semibold">Midtown Medical Clinic</p>
          <p className="text-[#999AA3] font-medium ">Senior doctor</p>
        </div>
           {/* Years */}
        <p className="text-[#6E707D] pl-4 text-lg">2016-present</p>
      </motion.div>
      <motion.div 
       initial={{ opacity: 0, x: 100 }} // Set initial opacity to 0 and y-axis position
       animate={{ opacity: experienceBar  ? 1 : 0, x: experienceBar ? 0 : 100 }} // Animate opacity and y-axis position based on isVisible state
       transition={{ duration: 1.5, delay:1 }} // Set transition duration
       
      className="pl-8 my-6 flex gap-8">
         {/* Icon */}
        <img src={home_icon} alt="home_icon" />
          {/* Details */}
        <div>
          <p className="font-semibold">Midtown Medical Clinic</p>
          <p className="text-[#999AA3] font-medium ">Senior doctor</p>
        </div>
         {/* Years */}
        <p className="text-[#6E707D] pl-4 text-lg">2010-2015</p>
      </motion.div>
    </div>
  );
};

export default Experience;
