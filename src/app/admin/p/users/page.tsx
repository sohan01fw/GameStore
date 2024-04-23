import { getAllUsers } from "@/utils/Actions/User.Action";
import Image from "next/image";
import React from "react";

type datas={
  name:string;
  email:string;
  profile_pic:string;
  role:"user"| "admin"

}
export default async function page() {
  //get and display all users
  const getUsers = await getAllUsers();

  return (
    <>
      {getUsers.map((data:datas,index) => {
        return (
          <div key={index}>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>role</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
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
                          <div className="font-bold">{data?.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {data?.name}
                      <br />
                     
                    </td>
                    <td>{data?.role}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </>
  );
}
