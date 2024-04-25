import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import women_health from "../assets/women_health.svg";
import skin_care from "../assets/skin_care.svg";
import immune from "../assets/immune.svg";
import hair_care from "../assets/hair_care.svg";
import "../styles/Specitialise.css";

const Specitialise = () => {
    // State variables to track scroll position and show shadows for icons
  const [scrollPosition, setScrollPosition] = useState(false);
  const [showWomenHealthShadow, setShowWomenHealthShadow] = useState(false);
  const [showSkinCareShadow, setShowSkinCareShadow] = useState(false);
  const [showImmuneShadow, setShowImmuneShadow] = useState(false);
  const [showHairCareShadow, setShowHairCareShadow] = useState(false);


    // Effect to update scroll position and show shadows
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      updateShadowStates(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  
  // Function to update shadow states based on scroll position
  const updateShadowStates = (position) => {
    setScrollPosition(position >=280);

    setShowWomenHealthShadow(position >= 300 && position <= 400);
    setShowSkinCareShadow(position >= 400 && position <= 500);
    setShowImmuneShadow(position >= 500 && position <= 600);
    setShowHairCareShadow(position >= 600 && position <= 700);
  };

  return (
      // Render component only when scroll position is reached
    scrollPosition && (
      <motion.div
      initial={{ x: -40 }}
      animate={{  x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-[100%] border-[#DCDCDC] border rounded-xl relative">
         {/* Header */}
        <div className="w-[100%] h-10 bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-t-xl flex items-center justify-between px-8 py-2">
        <p className="font-semibold text-xl">I Specialize In</p>
      </div>
       {/* Icon section */}
      <div className="pl-8 flex items-center my-6">
        <motion.img
        
          className={`h-24 w-24 ${showWomenHealthShadow ? "scroll-card" : ""}`}
          src={women_health}
          alt="women_health_logo"
        />
        <motion.img
          className={`h-24 w-24 ${showSkinCareShadow ? "scroll-card" : ""}`}
          src={skin_care}
          alt="skin_care_logo"
        />
        <motion.img
          className={`h-24 w-24 ${showImmuneShadow ? "scroll-card" : ""}`}
          src={immune}
          alt="immune_logo"
        />
        <motion.img
          className={`h-24 w-24 ${showHairCareShadow ? "scroll-card" : ""}`}
          src={hair_care}
          alt="hair_care_logo"
        />
      </div>
    </motion.div>
    )
  );
}; 

export default Specitialise;
