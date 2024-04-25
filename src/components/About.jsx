import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ABOUT, LANG } from "../utils/constants";
import facebook from "../assets/facebook.svg";
import insta from "../assets/insta.svg";
import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.svg";
import "../styles/AboutStyles.css";

const About = () => {
   // State to hold typed text
  const [typedText, setTypedText] = useState("");
   // State to control typing animation
  const [startTyping, setStartTyping] = useState(false);

 // Effect to trigger typing animation
  useEffect(() => {
    setStartTyping(true);
    let index = 0;
     // Check if typing animation should start
    if (startTyping) {
      const interval = setInterval(() => {
         // Update typed text with each character
        setTypedText((prev) => prev + ABOUT[index]);
        index++;
         // Stop animation when all text is typed
        if (index === ABOUT.length) clearInterval(interval);
      }, 20);

      return () => clearInterval(interval);
    }
  }, [startTyping]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-[100%] border-[#DCDCDC] border rounded-xl"
    >
        {/* Header section */}
      <div className="w-[100%] h-10 bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-t-xl flex items-center justify-between px-8 py-2">
        <p className="font-semibold text-xl">A Little About me</p>
        <button className="border border-black rounded-lg px-4 text-xs font-medium py-0 text-center">
          Follow <span className="font-bold text-base">+</span>{" "}
        </button>
      </div>
       {/* Typed text section */}
      <div className="pl-8 pr-16 py-4">
        <p
          className="text-[#999AA3] text-sm font-medium"
          style={{ height: "80px" }}
        >
          {typedText}
        </p>
      </div>
       {/* Read more section */}
      <div className="pl-8 pr-16 pb-4 flex items-center  w-[100%]">
        <div className="border-b border-[#DCDCDC] w-[90%]"></div>
        <p className="underline text-right text-xs font-medium w-[15%]">
          Read More
        </p>
      </div>
        {/* Language spoken section */}
      <div className="pl-8 pr-16 py-4 flex items-center gap-12">
        <p className="text-xs font-medium">Language Spoken </p>
        {LANG.map((item, index) => (
          <p key={index} className="text-xs bg-[#F7F7FC] px-4 py-1 rounded-lg">
            {item}{" "}
          </p>
        ))}
      </div>
         {/* Social media icons section */}
      <div className="pl-8 pr-16 py-4 flex items-center gap-2 justify-start">
        <img className="h-7 neon-hover" src={facebook} alt="facebook_logo" />
        <img className="h-7 neon-hover" src={insta} alt="insta_logo" />
        <img className="h-7 neon-hover" src={youtube} alt="youtube_logo" />
        <img className="h-7 neon-hover" src={twitter} alt="twitter_logo" />
      </div>
    </motion.div>
  );
};

export default About;
