import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { saveUserToDb } from "../Actions/User.Action";
import { User } from "@/Backend/Models/User.model";
import { connectToDB } from "@/Backend/lib/connectToDb";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // ...add more providers here
  ],
  session:{
    strategy:"jwt"
  },
  pages: {
    signIn: "/auth",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      // Here you can insert the user information into your database.
      // Example: await saveUserToDatabase(user);
      const { name, email, image } = user;
       await saveUserToDb({
        name: name || "",
        email: email || "",
        image: image || "",
      });
      //console.log(result)
      return true; // Return true to allow the sign-in
    },
    async session({ session, token,user }) {
      // Customize the session object here if needed
        if(token){
          session.user.email = token.email,
          session.user.name  = token.name
          session.user.role = token.role
        }
      return session;
    },

    async jwt({ token, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      // Query from db to get user role
      if(token){
        await connectToDB()
        try {
          const getUser = await User.findOne({
          email: token?.email,
          });
          if (!getUser) {
            // If user not found, simply return the token
            return token;
          }
        
          // Modify the token payload to include additional user data
          token.name = getUser.name;
          token.email = getUser.email;
          token.picture = String(getUser.profile_pic);
          token.role = getUser.role;
          
        } catch (error) {
            console.log(error)
        }
      
    
      }
      // Return the modified token
      return token;
    }
    
  },
};
