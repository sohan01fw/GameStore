import React from "react";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
const SideBar = () => {
  return (
    <div className="bborder ">
      <div className="   p-2    sm:p-3 ">
        <h1 className="text-gradient text-xl font-bold sm:text-2xl">
          GameStore
        </h1>
      </div>
      <div className=" flex  flex-col  gap-4   pt-10 ">
        <div className="  ml-5 mr-5 flex  justify-center rounded-xl p-3 hover:cursor-pointer hover:text-gray-500 dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-300">
          <div className="p-icon">
            <MdProductionQuantityLimits fontSize={24} />
          </div>

          <h3 className=" mt-[-3px] hidden px-[4px] text-left text-lg font-semibold sm:block">
            Products
          </h3>
        </div>
        <div className=" ml-5 mr-5 flex    justify-center  rounded-xl p-3 hover:cursor-pointer  hover:text-gray-500 dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-300">
          <h2 className=" ml-[-2px] sm:ml-[-18px]">
            <FaUsersGear fontSize={24} />
          </h2>

          <h3 className=" mt-[-3px] hidden  px-[8px] text-left text-lg font-semibold sm:block">
            Users
          </h3>
        </div>
        <div className=" ml-5 mr-5 flex    justify-center rounded-xl  p-3 hover:cursor-pointer   hover:text-gray-500 dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-300">
          <div className="s-icon">
            <IoSettingsSharp fontSize={24} />
          </div>

          <h3 className="mt-[-2px] hidden  px-[5px] text-left text-lg font-semibold sm:block">
            Settings
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
