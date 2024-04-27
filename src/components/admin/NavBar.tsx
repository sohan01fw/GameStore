"use client";
import React from "react";
import { IoNotifications } from "react-icons/io5";
import dynamic from "next/dynamic";

const Adminprofileicon = dynamic(
  () => import("../ui/dropdown/Adminprofileicon"),
);
const Adminprofilenotify = dynamic(
  () => import("../ui/dropdown/Adminprofilenotify"),
);
const NavBar = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <div className="dropdown dropdown-end mr-2">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-ghost"
            >
              <div className="indicator">
                <div className="not-div h-5 w-5 ">
                  <IoNotifications fontSize={21} color="white" />
                </div>

                <span className="badge indicator-item badge-sm border-none text-white bg-pink-500">
                  8
                </span>
              </div>
            </div>
            <Adminprofilenotify />
          </div>
          {/* profile */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="avatar btn btn-circle btn-ghost w-8 sm:w-10  "
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <Adminprofileicon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
