import type { Metadata } from "next";
import { redirect } from "next/navigation";
import AuthSession from "@/lib/AuthSession";
import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("@/components/admin/NavBar"), {
  loading: () => (
    <div className="flex flex-col gap-4 w-52 ">
     <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
     <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
    </div>
  ),
});

const SideBar = dynamic(() => import("@/components/admin/SideBar"), {
  loading: () => (
    <div className="flex flex-col gap-4 w-52">
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  ),
});

export const metadata: Metadata = {
  title: "admin",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <section className="">
        <SideBar />
      </section>
      <div className="w-full max-w-full bborder">
        <section className="absolute  right-4">
          <NavBar />
        </section>
        <main className="mt-[1rem]">{children}</main>
      </div>
    </div>
  );
}
