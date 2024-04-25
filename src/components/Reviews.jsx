import React ,{useState,useEffect} from "react";
import { motion } from "framer-motion";

import user_pic from "../assets/user_pic.svg";
import star from "../assets/star.svg";


const Reviews = () => {
   // State to track if the component is triggered by scroll
  const [scrollTriggered, setScrollTriggered] = useState(false); 
const triggerPoint = 1000   // Adjust the scroll position threshold as needed

  // Effect to listen to scroll events and update scrollTriggered state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > triggerPoint) { // Adjust the scroll position threshold as needed
        setScrollTriggered(true);
      }else{
        setScrollTriggered(false);

      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });


  return (
    <div  className="w-[100%] border-[#DCDCDC] border rounded-xl">
      {/* Section title */}
      <div className="w-[100%] h-10 bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-t-xl flex items-center justify-between px-8 py-2">
        <p className="font-semibold text-xl">My Featured Reviews (120)</p>
      </div>
       {/* First review */}
      <motion.div
       initial={{ opacity: 0, y: -100 }} // Set initial opacity to 0 and y-axis position
       animate={{ opacity: scrollTriggered  ? 1 : 0, y: scrollTriggered ? 0 : -100 }} // Animate opacity and y-axis position based on isVisible state
       transition={{ duration: 1.5 }} // Set transition duration
      className="mx-8 my-6 bg-[#F7F7FC] rounded-xl">
         {/* Review content */}
        <div className="py-4 px-4 flex items-center">
          <div className=" flex items-center gap-4">
            <img className="h-16" src={user_pic} alt="user_pic" />
            <div>
              <p className="font-medium text-xl">Alicent Hightower</p>
              <p className="font-medium  text-[#939393]">
                Consulted for Skin care
              </p>
            </div>
            <p className="font-medium text-sm text-[#8A8A8A] ml-24">
              20 January 2023
            </p>
          </div>
        </div>
        <div className="px-4  py-2 flex items-center gap-1">
         {/* Display star rating */}

          <img className="h-4" src={star} alt="star" />
          <img className="h-4" src={star} alt="star" />
          <img className="h-4" src={star} alt="star" />
          <img className="h-4" src={star} alt="star" />
          <img className="h-4" src={star} alt="star" />
        </div>
         {/* Review text */}

        <p className="px-4  pb-4 text-[.92rem] font-normal">
          Might be bit early to confirm but yes I can see noticeable difference
          in my hairfall. will write again after using it for longer periods
        </p>
          {/* Second review */}
      </motion.div>
      <motion.div 
       initial={{ opacity: 0, y: -100 }} // Set initial opacity to 0 and y-axis position
       animate={{ opacity: scrollTriggered  ? 1 : 0, y: scrollTriggered ? 0 : -100 }} // Animate opacity and y-axis position based on isVisible state
       transition={{ duration: 1.5, delay:1 }} // Set transition duration
      className="mx-8 my-6 bg-[#F7F7FC] rounded-xl">
        {/* Review content */}
        <div className="py-4 px-4 flex items-center">
          <div className=" flex items-center gap-4">
            <img className="h-16" src={user_pic} alt="user_pic" />
            <div>
              <p className="font-medium text-xl">Alicent Hightower</p>
              <p className="font-medium  text-[#939393]">
                Consulted for Pregnancy
              </p>
            </div>
            <p className="font-medium text-sm text-[#8A8A8A] ml-24">
              20 January 2023
            </p>
          </div>
        </div>
        <div className="px-4  py-2 flex items-center gap-1">
         {/* Display star rating */}
          <img className="h-4" src={star} alt="star" />
          <img className="h-4" src={star} alt="star" />
          <img className="h-4" src={star} alt="star" />
          <img className="h-4" src={star} alt="star" />
          <img className="h-4" src={star} alt="star" />
        </div>
         {/* Review text */}
        <p className="px-4  pb-4 text-[.92rem] font-normal">
          Might be bit early to confirm but yes I can see noticeable difference.
          will write again after using it for longer periods
        </p>
      </motion.div>
    </div>
  );
};

export default Reviews;
