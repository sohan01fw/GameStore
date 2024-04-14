"use client";
import React from "react";
import { MdDashboard, MdProductionQuantityLimits } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";
const SideBar = () => {
  return (
    <div className="h-screen ">
      <Link href="/">
        <div className=" p-2 sm:p-3 ">
          <h1 className="text-gradient text-sm font-bold sm:text-2xl">
            GameStore
          </h1>
        </div>
      </Link>
      <div className=" mt-[-35px] flex  flex-col  gap-2 pt-10 sm:mt-[-15px] sm:gap-4 ">
        <Link href="/admin/p/dashboard">
          <div className="  ml-5 mr-5 flex justify-center  rounded-xl p-3 hover:cursor-pointer hover:text-gray-500 dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-300 sm:ml-4">
            <div className="p-icon px-[4px]">
              <MdDashboard fontSize={24} />
            </div>

            <h3 className=" mt-[-3px] hidden  text-left text-lg font-semibold sm:block">
              Dashboard
            </h3>
          </div>
        </Link>
        <Link href="/admin/p/products">
          <div className="  ml-5 mr-5 flex  justify-center rounded-xl p-3 hover:cursor-pointer hover:text-gray-500 dark:text-red-500 dark:hover:bg-gray-900 dark:hover:text-gray-300 sm:ml-0">
            <div className="p-icon px-[4px]">
              <MdProductionQuantityLimits fontSize={24} />
            </div>
            <h3 className=" mt-[-3px] hidden  text-left text-lg font-semibold sm:block">
              Products
            </h3>
          </div>
        </Link>
        <Link href="/admin/p/users">
          <div className=" ml-5 mr-5 flex    justify-center  rounded-xl p-3 hover:cursor-pointer  hover:text-gray-500 dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-300 sm:ml-[-0.4rem]">
            <h2 className=" ml-[-2px] px-[4px]  sm:ml-[-18px] ">
              <FaUsersGear fontSize={24} />
            </h2>

            <h3 className=" mt-[-3px] hidden text-left text-lg font-semibold sm:block">
              Users
            </h3>
          </div>
        </Link>
        <Link href="/admin/p/settings">
          <div className=" ml-5 mr-5 flex justify-center    rounded-xl p-3  hover:cursor-pointer hover:text-gray-500   dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-300 sm:ml-[-0.4rem]">
            <div className="s-icon  px-[4px]">
              <IoSettingsSharp fontSize={24} />
            </div>

            <h3 className="mt-[-1.5px] hidden  text-left text-lg font-semibold sm:block">
              Settings
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
