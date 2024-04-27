import type { Metadata } from "next";
import UNavBar from "@/components/user/UNavBar";
import AuthSession from "@/lib/AuthSession";

export const metadata: Metadata = {
  title: "Create Next App",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { session } = await AuthSession();
  return (
    <html lang="en">
      <body>
        <div className="main-container">
          <div className="navbar" >
            <UNavBar user={session} />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
