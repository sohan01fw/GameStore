import { authOptions } from "@/utils/NextAuthConfig/AuthOptions";
import { getServerSession } from "next-auth";

export default async function AuthSession() {
  const session = await getServerSession(authOptions);
  return {
    session:session?.user,
   
  };
}
