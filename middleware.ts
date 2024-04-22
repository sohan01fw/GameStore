import { authOptions } from "@/utils/NextAuthConfig/AuthOptions";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  console.log("Middleware called");
  const session = "";
  console.log("Session:", session);
  // Other code
}
