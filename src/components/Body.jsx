import React from "react";
import { motion } from "framer-motion";
import About from "./About";
import Specitialise from "./Specitialise";
import Treatment from "./Treatment";
import Experience from "./Experience";
import Reviews from "./Reviews";
import Appointment from "./Appointment";

const Body = () => {
  return (
     // Container for the body content
    <div className="mt-[8rem] flex w-[90%] gap-16 mx-auto">
        {/* Left side content */}
      <div className="w-[50%] flex flex-col justify-center gap-8">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <About />
        </motion.div>
        <motion.div  className="h-[190px]" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Specitialise />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Treatment />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Experience />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Reviews />
        </motion.div>
      </div>
        {/* Right side content */}
      <div className="w-[50%]">
        <Appointment />
      </div>
    </div>
  );
};

export default Body;
