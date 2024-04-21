"use client"
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function AuthBtn() {
  const router = useRouter();

  const handleSignIn = async () => {
    await signIn("google", {redirect:false, callbackUrl: "/" });
    // If you need to do anything after sign-in, you can add it here
  };

  return (
    <button
      className="btn btn-ghost"
      onClick={handleSignIn}
    >
      Sign with Google
    </button>
  );
}

export function LogoutBtn() {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({  callbackUrl: "http://localhost:3000/" });
    // If you need to do anything after sign-out, you can add it here
    router.push("/"); // Redirect to home page
  };

  return (
    <button
      className="btn btn-ghost"
      onClick={handleSignOut}
    >
      Sign Out
    </button>
  );
}
