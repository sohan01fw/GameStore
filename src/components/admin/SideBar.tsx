import React from "react";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
const SideBar = () => {
  return (
    <div className="">
      <div className=" text-gradient  p-3 text-center text-2xl font-bold">
        GameStore
      </div>
      <div className=" flex  flex-col   gap-4 pt-10">
        <div className="  ml-5 mr-5 flex w-52 justify-center rounded-xl p-3 hover:cursor-pointer hover:text-gray-500 dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-300">
          <MdProductionQuantityLimits fontSize={24} />
          <h3 className="  mt-[-3px] px-[4px] text-left text-lg font-semibold">
            Products
          </h3>
        </div>
        <div className=" ml-5 mr-5 flex  w-52  justify-center  rounded-xl p-3 hover:cursor-pointer  hover:text-gray-500 dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-300">
          <h2 className=" ml-[-18px]">
            <FaUsersGear fontSize={24} />
          </h2>

          <h3 className="   mt-[-3px] px-[8px] text-left text-lg font-semibold">
            Users
          </h3>
        </div>
        <div className=" ml-5 mr-5 flex  w-52  justify-center rounded-xl  p-3 hover:cursor-pointer   hover:text-gray-500 dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-300">
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
