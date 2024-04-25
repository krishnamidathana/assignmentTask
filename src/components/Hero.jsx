import React, { useRef, useEffect } from "react";
import CountUp from "react-countup";
import design from "../assets/design.svg";
import star from "../assets/star.svg";
import blue_tick from "../assets/blue_tick.svg";
import profile_picture from "../assets/profile_picture.svg";
import '../styles/ButtonShining.css';
const Hero = () => {
  //  refs for CountUp components
  const followersRef = useRef(null);
  const followingRef = useRef(null);
  const postRef = useRef(null);

  // data for followers, following, and posts
  const followers = 850;
  const following = 18.5;
  const posts = 250;

  //  CountUp values on component mount
  useEffect(() => {
    if (followersRef.current && followingRef.current && postRef.current) {
      followersRef.current.start();
      followingRef.current.start();
      postRef.current.start();
    }
  }, []);

  return (
    <div className="w-[90%] h-[12rem] mx-auto my-8">
       {/* Design image */}
      <div className=" h-[6rem] rounded-t-sm w-[100%]">
        <img className="  object-cover rounded-t-lg  " src={design} alt="design" />
      </div>
           {/* Profile information */}
      <div className="w-[100%] h-[11rem] bg-[#FFFBF2] flex">
         {/* Profile picture */}
        <img className=" h-[10rem] m-4 object-cover" src={profile_picture} alt="profile_picture" />
               {/* Profile details */}

        <div className="flex items-center justify-between mt-16 px-4 gap-[9rem] text-sm">
        {/* Name, profession, and star rating */}
          <div>
            <p className="font-medium">
              Dr. Bruce Willis{" "}
              <img
                className="h-[.9rem] inline-block self-center"
                src={blue_tick}
                alt="blue_tick"
              />
            </p>
            <p className="text-[#3A643B]">Genologist</p>
            <div className="py-1 flex items-center gap-1">
              <p className="text-[.8rem]">
              {/* CountUp for followers */}
                <CountUp ref={followersRef} end={followers}   duration={5} />
              </p>
                 {/* Star ratings */}
              <img className="h-[.8rem]"  src={star} alt="star" />
              <img className="h-[.8rem]" src={star} alt="star" />
              <img className="h-[.8rem]" src={star} alt="star" />
              <img className="h-[.8rem]" src={star} alt="star" />
            </div>
          </div>
            {/* Followers, Following, and Post counts */}
          <div className="flex  items-center gap-20 justify-between">
             {/* Followers count */}
            <div className="flex flex-col items-center ">
              <p>Followers</p>
              <p className="font-medium">
                 {/* CountUp for followers */}
                <CountUp ref={followersRef} end={followers}   duration={5}  />
              </p>
            </div>
              {/* Following count */}
            <div className="flex flex-col items-center ">
              <p>Following</p>
              <p className="font-medium">
                    {/* CountUp for following */}
                <CountUp ref={followingRef} end={following}   duration={5} suffix="k"  decimals={1}
      decimal="."/>
              </p>
            </div>
            
            {/* Post count */}
            <div className="flex flex-col items-center ">
              <p>Post</p>
              <p className="font-medium">
                  {/* CountUp for posts */}
                <CountUp ref={postRef} end={posts}  duration={5}  />
              </p>
            </div>
          </div>
           {/* Button for booking appointment */}
          <button className=" shining-button bg-[#3A643B] text-white rounded-lg px-5 py-2 ">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
