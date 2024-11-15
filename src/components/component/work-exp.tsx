/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/3fMjDWcdiZB
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
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export function WorkExp() {
  return (
    <Card className="w-full ">
      <ScrollArea className="p-6 flex gap-12">
        <div className="flex items-center gap-4">
          <div className="bg-primary rounded-md p-3 flex items-center justify-center">
            <BriefcaseIcon className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="grid gap-1 flex-1">
            <div className="flex justify-between">
              <h1 className=" font-semibold">Software Engineer</h1>
              <div className="text-muted-foreground">3 years</div>
            </div>
            <div className="text-muted-foreground">Acme Inc.</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-primary rounded-md p-3 flex items-center justify-center">
            <BriefcaseIcon className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="grid gap-1 flex-1">
            <div className="flex justify-between">
              <h1 className=" font-semibold">Software Engineer</h1>
              <div className="text-muted-foreground">3 years</div>
            </div>
            <div className="text-muted-foreground">Acme Inc.</div>
          </div>
        </div>
      </ScrollArea>
    </Card>
  )
}

function BriefcaseIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}
