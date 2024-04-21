"use client"
import React, { ReactNode } from 'react'
import { SessionProvider } from "next-auth/react"
import { Session } from 'next-auth'
const AuthProvider = ({children}:{children:ReactNode}) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default AuthProvider