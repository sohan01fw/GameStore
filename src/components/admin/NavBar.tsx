import React from "react";
import { BiNotification } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";

const NavBar = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Dashboard</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end mr-2">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-ghost"
            >
              <div className="indicator">
                <div className="not-div h-5 w-5 ">
                  <IoNotifications fontSize={21} />
                </div>

                <span className="badge indicator-item badge-sm border-none bg-pink-500">
                  8
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card dropdown-content card-compact z-[1]  w-80 bg-base-100 shadow-md"
            >
              <div className="card-body">
                <span className="text-lg font-bold">Notifications</span>

                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    Wellcome,sohan to this brand new GameStore....
                  </button>
                </div>
              </div>
            </div>
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
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li className="rounded-md hover:bg-slate-300">
                <a className="justify-between ">Profile</a>
              </li>
              <li className="rounded-md hover:bg-slate-300">
                <a>Settings</a>
              </li>
              <li className="rounded-md hover:bg-slate-300">
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
