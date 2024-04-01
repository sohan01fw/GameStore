import React from "react";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
const SideBar = () => {
  return (
    <div className=" ">
      <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text p-3 text-center text-2xl font-bold text-transparent ">
        GameStore
      </div>
      <div className=" flex  flex-col gap-4 pt-10">
        <div className=" flex  w-full justify-center   p-3 text-gray-500 hover:cursor-pointer hover:bg-gray-900 hover:text-gray-400">
          <MdProductionQuantityLimits fontSize={24} />
          <h3 className="  mt-[-3px] px-[4px] text-left text-lg font-semibold">
            Products
          </h3>
        </div>
        <div className="  flex  w-full justify-center  p-3 text-gray-600  hover:cursor-pointer hover:bg-gray-900 hover:text-gray-400">
          <h2 className=" ml-[-18px]">
            <FaUsersGear fontSize={24} />
          </h2>

          <h3 className="   mt-[-3px] px-[8px] text-left text-lg font-semibold">
            Users
          </h3>
        </div>
        <div className="   flex  w-full justify-center  p-3 text-gray-600   hover:cursor-pointer hover:bg-gray-900 hover:text-gray-400">
          <IoSettingsSharp fontSize={24} />
          <h3 className="   mt-[-2px] px-[5px] text-left text-lg font-semibold">
            Settings
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
