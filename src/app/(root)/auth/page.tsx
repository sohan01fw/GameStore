import dynamic from 'next/dynamic'
import React from 'react'
const AuthBtn = dynamic(() =>
    import("@/components/ui/btn/AuthBtn").then((module)=> module.AuthBtn)

)
export default function page() {
  return (
    <div><AuthBtn /></div>
  )
}
