import SideBar from "@/components/admin/SideBar";
import type { Metadata } from "next";
import NavBar from "@/components/admin/NavBar";
import { redirect } from "next/navigation";
import AuthSession from "@/lib/AuthSession";

export const metadata: Metadata = {
  title: "admin",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {session}= await AuthSession();
  if(session && session?.role != "admin"){
    return redirect("/")
  }
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <div className="shadow-md">
            <SideBar />
          </div>
          <div className="w-full  ">
            <div className=" w-auto absolute right-0">
              <NavBar />
            </div>
            <div className="mt-[1rem] ">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
