import { authOptions } from "@/utils/NextAuthConfig/AuthOptions";
import { getServerSession } from "next-auth";
import React from "react";

export default async function page() {
  const session = await getServerSession(authOptions)
   //console.log(session)
  return <div>home page </div>;
}
