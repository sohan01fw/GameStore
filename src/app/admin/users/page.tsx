/* import { Udata } from "@/types/global";
import { getAllUsers } from "@/utils/Actions/User.Action";
import Image from "next/image";
import React from "react";

export default async function page() {
  //get and display all users
  const getUsers = await getAllUsers();

  return (
    <div className="">
      <div className="head">
        <h1>Manage Users</h1>
      </div>
      <div className="flex justify-center">
        <div className=" mt-20 w-[64rem] ">
          <div className="overflow-x-auto h-[80vh] ">
            <table className="table">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Name</th>
                  <th>role</th>
                </tr>
              </thead>
              {getUsers.map((data: Udata, index) => {
                return (
                  <tbody key={index}>
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-circle w-12 h-12">
                              <Image
                                src={data?.profile_pic}
                                alt="Avatar Tailwind CSS Component"
                                height={120}
                                width={100}
                                priority
                              />
                            </div>
                          </div>
                          <div>
                            <h2 className="font-bold textarea-md">
                              {data?.email}
                            </h2>
                          </div>
                        </div>
                      </td>
                      <td className="text-lg text-gray-400">
                        {data?.name}
                        <br />
                      </td>
                      <td>
                        <summary className=" btn">{data?.role}</summary>
                      </td>
                      <th>
                        <button className="btn btn-ghost btn-xs">
                          details
                        </button>
                      </th>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
 */
import React from 'react'

export default function page() {
  return (
    <div>user page</div>
  )
}
