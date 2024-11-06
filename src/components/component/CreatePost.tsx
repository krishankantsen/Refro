
import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import MultipleSelector, { Option } from "@/components/component/MultiSelect";
import { X } from "lucide-react";
import { imageToBase64 } from "@/lib/imageTObase64";
import gql from "graphql-tag";
import client from "@/lib/apolloClient";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { useAppSelector } from "@/lib/store/hooks";
import {OPTIONS} from "../utils/skills"

const CreatePost_Mutation = gql`
  mutation CreatePost($input: CreatePost) {
    CreatePost(input: $input) {
      error
      success
    }
  }
`;

export default function CreatePost(props: any) {
  const [formState, setFormState] = useState({
    userId: 0,
    jobTitle: "",
    jobDescription: "",
    jobSalary: "",
    skills: [""],
    link: "",
    companyName: "",
    companyLogo: "",
  });
  const [companyLogoFile, setCompanyLogoFile] = useState<File | null>(null);
  const userId = useAppSelector((state) => state.auth.user?.id);

  const handleChange = (event: any) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setFormState({
      ...formState,
      [fieldName]: fieldValue,
    });
  };

  const handleSkillsChange = (selectedOptions: Option[]) => {
    formState.skills = selectedOptions.map((option) => option.value);
  };

  const handleCreatePost = async () => {
    if (companyLogoFile) {
      const str = await imageToBase64(companyLogoFile);
      formState.companyLogo = str;
    }
    const uid = userId ? userId : 0; // or const uid = +userId || 0;
    formState.userId = uid;
    try {
      const { data } = await client.mutate({
        mutation: CreatePost_Mutation,
        variables: {
          input: formState,
        },
      });
      if (data.CreatePost.success) {
        toast.success("Post Created Successfully");
        window.location.href = "/dashboard";
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card className="bg-card w-full md:w-3/5 lg:w-3/5 gap-2 flex flex-col p-4">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold">Enter Job Title</h1>
        <X onClick={props.toggle} className="cursor-pointer" />
      </div>

      <Input
        type="text"
        placeholder="Enter the job title ......."
        className="w-3/5"
        value={formState.jobTitle}
        onChange={handleChange}
        name="jobTitle"
      />

      <h1 className="font-bold">Enter Company Name</h1>

      <Input
        type="text"
        placeholder="Enter Company name......."
        value={formState.companyName}
        onChange={handleChange}
        name="companyName"
      />
      <h1 className="font-bold">Enter the description</h1>
      <Input
        type="text"
        className="h-16"
        placeholder="Enter the details of job......"
        value={formState.jobDescription}
        onChange={handleChange}
        name="jobDescription"
      />
      <h1 className="font-bold">Select Frameworks</h1>
      <MultipleSelector
        defaultOptions={OPTIONS}
        onChange={handleSkillsChange}
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
        placeholder="Enter the salary details ......."
        className="w-3/5"
        value={formState.jobSalary}
        onChange={handleChange}
        name="jobSalary"
      />
      <h1 className="font-bold">Enter Link to Apply</h1>
      <Input
        type="text"
        placeholder="Enter the link to apply"
        className="w-3/5"
        onChange={handleChange}
        value={formState.link}
        name="link"
      />
      <h1 className="font-bold">Company Logo</h1>

      <Input
        id="picture"
        type="file"
        className="w-2/5"
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            setCompanyLogoFile(e.target.files[0]);
          }
        }}
      />

      <Button className="w-max self-end" onClick={handleCreatePost}>
        Create Post
      </Button>
    </Card>
  );
}
