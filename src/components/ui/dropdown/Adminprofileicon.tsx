"use client"
export default function Adminprofileicon() {
  return (
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
  )
}
