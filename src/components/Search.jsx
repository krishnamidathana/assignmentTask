import { BsArrowRightShort } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi";
import location from "../assets/location.png"

// Component for some purpose, maybe a landing page section

const Idk = () => {
    return (
        <>
        {/* Background with overlapping circles */}
            <div className="relative flex justify-center bg-[#EAF2EA] bg-cover pt-20 pb-10 overflow-hidden">
        {/* Overlapping circles */}
        <div className="absolute bg-[#DCEEDC] rounded-full w-[184px] h-[184px] top-[-100px] left-[1076px] "></div>

        <div className="absolute bg-[#DCEEDC] rounded-full w-[184px] h-[184px] top-[-100px] left-[95px]"></div>

        <div className="absolute bg-[#DCEEDC] rounded-full w-[184px] h-[184px] top-[145px] left-[200px] "></div>
        <div className="absolute bg-[#DCEEDC] rounded-full w-[184px] h-[184px] top-[130px] left-[996px]  "></div>

                   {/* Content */}
                <span>
                     {/* Title */}
                    <div className="text-4xl font-medium tracking-wider ">Find Expert Doctors For An In-Clinic Session Here</div>
                 {/* Inputs for location and search */}
                    <div className="flex mt-8 text-lg z-50 ">
                       {/* Location input */}
                        <div className="flex ml-24  z-20" >
                            <span className="-mr-[8.5rem] mt-4 text-2xl z-50">
                              {/* Location icon */}
                                <img src={location} alt="location
                                " />
                            </span>
                              {/* Location input field */}
                            <input placeholder="Select Location" className="w-54 pl-12  py-3 border-2 rounded-lg ml-24 focus:outline-none" />
                         {/* Dropdown icon */}
                            <span className="-ml-9 mt-4 text-2xl">
                                <HiOutlineChevronDown />
                            </span>
                        </div>
                         {/* Search input */}
                        <div className="flex -ml-10 z-20">
                           {/* Search input field */}
                            <input placeholder="eg. Doctor, specialisation, clinic name" className="w-[30rem] pl-5 pr-12 py-3 border-2 rounded-lg ml-20 focus:outline-none" />
                           {/* Search icon */}
                            <span className="-ml-10 mt-3 text-3xl">
                                <BsArrowRightShort />
                            </span>
                        </div>
                    </div>
                </span>
            </div>
        </>
    )
}

export default Idk