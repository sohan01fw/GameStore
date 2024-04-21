import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { saveUserToDb } from "../Actions/User.Action";
import { User } from "@/Backend/Models/User.model";

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
    const {name,email,image} = user ;
    const result = await saveUserToDb({name:name||"",email: email || "",image:image ||""})
    //console.log(result)
    return true; // Return true to allow the sign-in
  },
  async session({ session, token }) {
    // Customize the session object here if needed
   //query from db to get user role
   
   return session;
},


  async jwt({ token, account, profile }) {
    // Persist the OAuth access_token and or the user id to the token right after signin
   /*  if (account) {
      console.log("account",account);
      console.log("token",token)
    } */
    return token
  }
 }
 
}

