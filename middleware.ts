import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    const token = (req.nextauth.token)
    if(!token){
      return NextResponse.redirect("/auth")
    }
    return NextResponse.next()
  },
)

export const config = { matcher: ["/"] }