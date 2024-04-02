import SideBar from "@/components/admin/SideBar";
import type { Metadata } from "next";
import "../globals.css";
import NavBar from "@/components/admin/NavBar";
export const metadata: Metadata = {
  title: "admin",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="grid h-screen grid-flow-col grid-cols-12 grid-rows-3 ">
          <div className=" col-span-2 row-span-3 h-screen">
            <SideBar />
          </div>
          <div className="div col-span-10">
            <div className=" col-span-3  h-12 ">
              <NavBar />
            </div>
            <div className=" col-span-3 row-span-2 h-[93.7vh]">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
