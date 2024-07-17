import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import MultipleSelector, { Option } from '@/components/component/MultiSelect';
import { Label } from "../ui/label";
import { X } from "lucide-react";
const OPTIONS: Option[] = [
  { label: 'nextjs', value: 'Nextjs' },
  { label: 'Vite', value: 'vite' },
  { label: 'Nuxt', value: 'nuxt' },
  { label: 'Vue', value: 'vue',  },
  { label: 'Remix', value: 'remix' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Angular', value: 'angular', },
  { label: 'Ember', value: 'ember' },
  { label: 'React', value: 'react' },
  { label: 'Gatsby', value: 'gatsby' },
  { label: 'Astro', value: 'astro' },
];
export default function CreatePost(props:any) {
  const [value, setValue] = useState<Option[]>([]);
const handleCreatePost=()=>{
  console.log(value)
}
  return (
    <Card className="bg-card w-full md:w-3/5 lg:w-3/5 gap-2 flex flex-col p-4">
      <div className="flex flex-row justify-between"><h1 className="font-bold">Enter Job Title</h1>
      <X onClick={props.toggle} className="cursor-pointer  " />
      </div>
      <Input
        type="text"
        placeholder="Enter the job title ......."
        className="w-3/5"
      />
      <h1 className="font-bold">Enter Company Name</h1>
      <Input type="text" placeholder="Enter Company name......." />
      <h1 className="font-bold">Enter the description</h1>
      <Input
        type="text"
        className="h-16"
        placeholder="Enter the details of job......"
      />
      <h1 className="font-bold">Select Frameworks</h1>
      <MultipleSelector
      value={value}
     onChange={(e)=>setValue(e)}
        defaultOptions={OPTIONS}
        placeholder="Select frameworks you like..."
        emptyIndicator={
          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
            no results found.
          </p>
        }
      />
      <h1 className="font-bold">Enter Salary Details</h1>
      <Input
        type="text"
        placeholder="Enter the dalary details ......."
        className="w-3/5"
      />
      <h1 className="font-bold" >Company Logo</h1>
      <Input id="picture" type="file" className="w-2/5"/>
      <Button className="w-max self-end" onClick={handleCreatePost}>Create Post</Button>
    </Card>
  );
}
