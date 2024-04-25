import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import { TREATMENT } from "../utils/constants";


// Component to display treatments with animated buttons
const Treatment = () => {
    // State variable to track visibility of the component
  const [isVisible, setIsVisible] = useState(false);

  
  // Effect to update visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 550) { 
        setIsVisible(true);
      }else{
        setIsVisible(false);

      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }); // No dependency array, effect runs on every render

  return (
    <motion.div // Wrap the entire component inside motion.div
      initial={{ opacity: 0, y: 10 }} // Set initial opacity to 0 and y-axis position
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }} // Animate opacity and y-axis position based on isVisible state
      transition={{ duration: 1.5 }} // Set transition duration
      className={`w-[100%] border-[#DCDCDC] border rounded-xl`}
    >
      {/* Header */}
      <div className="w-[100%] h-10 bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-t-xl flex items-center justify-between px-8 py-2">
        <p className="font-semibold text-xl">The Concerns I Treat</p>
      </div>
       {/* Treatment buttons */}
      <div className="px-8 flex items-center flex-wrap gap-4 py-6">
          {/* Map through treatment list and animate each button */}
        {TREATMENT.map((item, index) => (
          <motion.button 
            key={index} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: isVisible ? 1 : 0 }} 
            transition={{ delay: index * 0.3 }} 
            className="bg-[#F7F7FC] text-[#3A643B] px-[.7rem] py-1 text-sm font-medium rounded-lg"
          >
            {item}
          </motion.button>
        ))}
        {/* Animate the "5 More" button */}
        <motion.button // Wrap the "5 More" button inside motion.button
          initial={{ opacity: 0 }} // Set initial opacity to 0
          animate={{ opacity: isVisible ? 1 : 0 }} // Animate opacity based on isVisible state
          transition={{ delay: TREATMENT.length * 0.3 }} // Add delay for staggered animation
          className="text-[#3A643B] px-[.7rem] py-1 text-sm font-medium rounded-lg border"
        >
          + 5 More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Treatment;
