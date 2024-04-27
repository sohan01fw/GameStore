"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import CartUi from "../ui/CartUi";

const Useruidetails = dynamic(() => import("../user/Useruidetails"));

export default function UNavBar({ user }: any) {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" >
          <h3 className="btn btn-ghost text-xl text-gradient ">GameStore</h3>
        </Link>
      </div>
      <div className="flex-none">
          <CartUi />
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  alt="Tailwind CSS Navbar component"
                  src={`${user?.image}`}
                  height={120}
                  width={100}
                  loading="lazy"
                />
              </div>
            </div>
            <Useruidetails user={user} />
          </div>
        ) : (
          <div>
            <Link href="/auth">
              <button className="btn  btn-ghost">login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
