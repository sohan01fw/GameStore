import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions:NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
      })
    // ...add more providers here
  ],
 pages:{
    signIn:"/auth"
 },
 callbacks:{
  async signIn({ user, account, profile }) {
    // Here you can insert the user information into your database.
    // Example: await saveUserToDatabase(user);
    const {name,email,image} = user;
    console.log(user)
    return true; // Return true to allow the sign-in
  },
  async session({ session, token }) {
    // Customize the session object here if needed
   console.log("session",{session,token})
    return session;
  },
 }
 
}

