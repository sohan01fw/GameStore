"use client";

import Link from "next/link";
import { LogoutBtn } from "../ui/btn/AuthBtn";

export default function Useruidetails({ user }: any) {
  return (
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    >
      {user?.role === "admin" ? (
        <Link href="/admin/dashboard" >
          <li>
            <div className="justify-between">
              Dashboard
              <span className="badge text-gray-400 text-sm">(Admin)</span>
            </div>
          </li>
        </Link>
      ) : (
        ""
      )}
      <li>
        <div className="justify-between">Profile</div>
      </li>
      <li>
        <div className="div">Settings</div>
      </li>
      <li>
        <LogoutBtn />
      </li>
    </ul>
  );
}
