import React from "react";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { MdDashboard, MdProductionQuantityLimits, FaUsersGear, MdShoppingCartCheckout } from "../../lib/Icons";

const customFont = Roboto({
  weight: '700',
  subsets: ['latin'],
});

const SideBar = () => {
  const menuItems = [
    { href: "/admin/dashboard", Icon: MdDashboard, text: "Dashboard" },
    { href: "/admin/products", Icon: MdProductionQuantityLimits, text: "Products" },
    { href: "/admin/users", Icon: FaUsersGear, text: "Users" },
    { href: "/admin/orders", Icon: MdShoppingCartCheckout, text: "Orders" },
  ];

  return (
    <div className="h-screen">
      {/* Use Link for top-level navigation */}
      <Link href="/">
        <div className="flex items-center p-2 sm:p-3 cursor-pointer">
          <h1 className={`text-gradient text-sm font-bold sm:text-2xl ${customFont.className}`}>GameStore</h1>
        </div>
      </Link>

      <nav className=" mt-[-35px] flex flex-col gap-4 pt-10 mt-[-15px]">
        <ul>
          {menuItems.map(({ href, Icon, text }) => (
            <li key={href}>
                <Link href={href} className=" flex sm:p-3 justify-center sm:justify-normal rounded-xl cursor-pointer hover:text-gray-500">
                  <div className="p-icon px-[4px] pb-5">
                    <Icon fontSize={24} />
                  </div>
                  <div>
                  <h3 className="mt-[-3px] text-left hidden  text-lg font-semibold sm:block">{text}</h3>
                  </div>
                </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
