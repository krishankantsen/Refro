import { Card } from "@/components/ui/card";

export function WorkExp() {
  return (
    <Card className="w-full h-44 overflow-y-scroll max-w-2xl mx-auto p-4 gap-2 flex flex-col">
      {Array(10).fill(0).map((_, index) => (
       <Card key={index} className="flex items-center gap-4 p-2">
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
     </Card>
        
      ))}

      
    </Card>
  );
}
function BriefcaseIcon(props: any) {
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
  );
}
