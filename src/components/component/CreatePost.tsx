import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/component/MultiSelect";

export default function CreatePost() {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <Card className="bg-card w-full md:w-3/5 lg:w-3/5 gap-2 flex flex-col p-4">
      <h1 className="font-bold">Enter Job Title</h1>
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
      <MultiSelector
        values={selected}
        onValuesChange={(values) => setSelected(values)}
        loop
        className="max-w-xs"
      >
        <MultiSelectorTrigger>
          <MultiSelectorInput placeholder="Select your framework" />
        </MultiSelectorTrigger>
        <MultiSelectorContent>
          <MultiSelectorList>
            <MultiSelectorItem value="React">React</MultiSelectorItem>
            <MultiSelectorItem value="Vue">Vue</MultiSelectorItem>
            <MultiSelectorItem value="Svelte">Svelte</MultiSelectorItem>
          </MultiSelectorList>
        </MultiSelectorContent>
      </MultiSelector>
      <Button className="w-max self-end">Create Post</Button>
    </Card>
  );
}
