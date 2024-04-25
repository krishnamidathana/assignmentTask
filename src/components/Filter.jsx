import { RxCross2 } from "react-icons/rx";

const Filter = () => {
  return (
    <>
      {/* Filter options */}
      <div className="flex justify-end space-x-5 mr-56 pt-10">
        {/* Hair care filter */}
        <div className="flex justify-between text-center w-36 bg-[#EAF2EA] font-medium rounded-3xl py-3 px-5">
          Hair care
          {/* Close icon */}
          <span className="text-gray-500 text-2xl hover:cursor-pointer">
            <RxCross2 />
          </span>
        </div>
        {/* Female filter */}
        <div className="flex justify-between text-center w-36 bg-[#EAF2EA] font-medium rounded-3xl py-3 px-6 ">
          Female
          {/* Close icon */}
          <span className="text-gray-500 text-2xl hover:cursor-pointer">
            <RxCross2 />
          </span>
        </div>
        {/* Price range filter */}
        <div className="flex justify-between text-center w-40 bg-[#EAF2EA] font-medium rounded-3xl py-3 px-4">
          Rs.0-Rs.500
          {/* Close icon */}
          <span className="text-gray-500 text-2xl hover:cursor-pointer">
            <RxCross2 />
          </span>
        </div>
        {/* Language filter */}
        <div className="flex justify-between text-center w-28 bg-[#EAF2EA] font-medium rounded-3xl py-3 px-5">
          Hindi
          {/* Close icon */}
          <span className="text-gray-500 text-2xl hover:cursor-pointer">
            <RxCross2 />
          </span>
        </div>
      </div>
    </>
  );
};

export default Filter;
