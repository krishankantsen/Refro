import { Button } from "../ui/button";
import { Input } from "../ui/input";


export default function CreatePost() {
  return ( 
    <div className="bg-card w-full h-max gap-2 flex flex-col border rounded p-3 ">
      <h1 className="font-bold">Enter Job Title</h1>
      <Input type="text" placeholder="Enter the job title ......." />
      <h1 className="font-bold">Enter the details</h1> 
      <Input type="text" className="h-20" placeholder="Enter the details of job......"/>
      <Button className="w-max self-end">Create Post</Button>
    </div>
  )
}
