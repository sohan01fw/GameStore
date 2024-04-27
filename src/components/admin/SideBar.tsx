"use client"
import React from "react";
import Link from "next/link";
import { MdDashboard, MdProductionQuantityLimits } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className="h-screen">
      <Link href="/" prefetch={true}>
        <div className="btn p-2 sm:p-3 cursor-pointer">
          <h1 className="text-gradient text-sm font-bold sm:text-2xl">GameStore</h1>
        </div>
      </Link>
      <div className="mt-[-35px] flex flex-col gap-4 pt-10 sm:mt-[-15px] sm:gap-4">
        {[
          { href: "/admin/p/dashboard", Icon: MdDashboard, text: "Dashboard" },
          { href: "/admin/p/products", Icon: MdProductionQuantityLimits, text: "Products" },
          { href: "/admin/p/users", Icon: FaUsersGear, text: "Users" },
          { href: "/admin/p/settings", Icon: IoSettingsSharp, text: "Settings" },
        ].map(({ href, Icon, text }) => (
          <Link key={href} href={href} prefetch={true}>
            <div className="ml-5 mr-5 flex justify-center rounded-xl p-3 cursor-pointer hover:text-gray-500">
              <div className="p-icon px-[4px]">
                <Icon fontSize={24} />
              </div>
              <h3 className="mt-[-3px] hidden text-left text-lg font-semibold sm:block">{text}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
