import type { Metadata } from "next";
import { redirect } from "next/navigation";
import AuthSession from "@/lib/AuthSession";
import dynamic from "next/dynamic";

const NavBar = dynamic(()=>
  import("@/components/admin/NavBar"),{
    loading: () => <p>Loading....</p>
  })

  const SideBar = dynamic(()=>
    import("@/components/admin/SideBar"),{
      loading: () => <p>Loading....</p>
    })

export const metadata: Metadata = {
  title: "admin",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { session } = await AuthSession();
  if (session && session?.role != "admin") {
    return redirect("/");
  }
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
