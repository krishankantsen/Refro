'use client'
/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/jJCBDje6Ee7
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Card, CardHeader, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useAppSelector } from "@/lib/store/hooks"
import { useState } from "react"
import ProfilePage from "./ProfilePage"

export function ProfileCard() {
const [isProfile,setIsProfile]=useState(false);
  const user=useAppSelector((state)=>state.auth.user)
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="flex flex-col items-center gap-4 py-8">
        <Avatar className="h-24 w-24 border">
          <AvatarImage src={user?.profilePic} alt="Profile picture" width={"auto"} height={"auto"}/>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="grid gap-1 text-center">
          <div className="text-lg font-semibold">{user?.name}</div>
          <div className="text-sm text-muted-foreground">{user?.role=="Placed"? user?.companyName: "Seek"}</div>
        </div>
      </CardHeader>
      <CardFooter className="flex justify-center p-4 ">
        <Button onClick={()=>setIsProfile(!isProfile)} >View Profile</Button>
      </CardFooter>
      {isProfile?<ProfilePage isProfile={isProfile} setIsProfile={setIsProfile} />:""}
    </Card>
  )
}
