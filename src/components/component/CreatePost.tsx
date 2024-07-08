import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";


export default function CreatePost() {
  return ( 
    <Card className="bg-card w-full md:w-4/5  lg:w-3/5  gap-2 flex flex-col p-4 ">
      <h1 className="font-bold">Enter Job Title</h1>
      <Input type="text" placeholder="Enter the job title ......." className=" w-3/5"/>
      <h1 className="font-bold">Enter the details</h1> 
      <Input type="text" className="h-16" placeholder="Enter the details of job......"/>
      <Button className="w-max self-end">Create Post</Button>
    </Card>
  )
}
