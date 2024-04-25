import React ,{useState ,useEffect} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link ,useLocation} from  'react-router-dom';
import logo from "../assets/logo.svg";

const Navbar = () => {
// Get current location

  const location = useLocation();

    // State to track active tab and active button
  const [activeTab, setActiveTab] = useState(location.pathname );
  const [activeButton, setActiveButton] = useState("signup");

  // Updates active tab when location changes
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);
 // Function to handle tab click
  const handleTabClick = (currentPage) => {
    setActiveTab(currentPage);
  };
// Function to handle button click
  const handleButtonClick = (button) => {
    setActiveButton(button === activeButton ? activeButton : button);
  };


  

  return (
    <div className="bg-[#FFF7E2] h-[94px] ">
        {/* Desktop navbar */}
      <div className="max-sm:hidden flex items-center justify-between px-20 py-2 h-[100%]">
               {/* Logo */}
       <img className="h-[49px] w-[259px]" src={logo} alt="logo" />
         {/* Navigation links */}
        <div className="flex items-center gap-6 ml-[-120px] font-semibold ">
        {/* Home link */}
        <Link to="/">
              <p
            className={`cursor-pointer ${
              activeTab === '/'   ? "font-bold text-[#3A643B]" : ""
            }`}
            onClick={() => handleTabClick('/')}
          >
            Home
          </p>
          </Link>
          {/* Find Doctors link */}
          <Link to="/findDoctors">
          <p
            className={`cursor-pointer ${
              activeTab === '/findDoctors' ? "font-bold text-[#3A643B]" : ""
            }`}
            onClick={() => handleTabClick('/findDoctors')}
          >
            Find Doctors
          </p>
          </Link>
            {/* About Us link */}
          <p
            className={`cursor-pointer ${
              activeTab === 2 ? "font-bold text-[#3A643B]" : ""
            }`}
            onClick={() => handleTabClick(2)}
          >
            About Us
          </p>
        </div>
        {/* Login and Sign-up buttons */}
        <div className="flex items-center gap-4  " >
               {/* Login button */}
          <button
            className={`font-medium  text-lg px-5 py-1 rounded-lg border h-[56px] w-[118px]  ${
              activeButton === "login"
                ? "bg-[#3A643B] text-white"
                : "text-[#3A643B] border-[#3A643B]"
            }`}
            onClick={() => handleButtonClick("login")}
          >
            Login
          </button>
            {/* Sign-up button */}
          <button
            className={`font-medium text-lg px-5 py-1 rounded-md border h-[56px] w-[163px] ${
              activeButton === "signup"
                ? "bg-[#3A643B] text-white"
                : "text-[#3A643B] border-[#3A643B]"
            }`}
            onClick={() => handleButtonClick("signup")}
          >
            Sign-up
          </button>
        </div>
      </div>
       {/* Mobile hamburger menu */}
      <div className="sm:hidden flex px-4 py-2   items-center">
        <div className="self-end  justify-start pb-[.18rem]">
          <GiHamburgerMenu className="w-12" color="#3A643B" />
        </div>
           {/* Logo */}
        <img className=" h-6 mx-auto" src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;
