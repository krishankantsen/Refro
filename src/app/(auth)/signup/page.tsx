"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from 'axios';
import gql from "graphql-tag";
import client from "@/lib/apolloClient";
import { toast } from "sonner";
import { imageToBase64 } from "@/lib/imageTObase64";
import {CldUploadWidget} from "next-cloudinary"


const SignUp_Mutation = gql`
    mutation Mutation($input: CreateUser) {
  SignUp(input: $input) {
    error
    success
  }
}

  `;
export default function SignUp() {
  const [companyDetail, setCompanyDetail] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    companyName: "",
    jobRole: "",
    expYear: 0,
    role: "",
    profilePic:""
  });
  const [showPass, setShowPass] = useState(false);
  const [profilePicFile, setProfilePicFile] = useState<File | null>(null);
  const handleChange = (event: any) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setFormState({
      ...formState,
      [fieldName]: fieldValue,
    });
  };

  async function handleSignUp(role: string,event:any) {
    event.preventDefault();
    formState.role = role;
    if (profilePicFile) {
      formState.profilePic = await imageToBase64(profilePicFile);
    } else {
      formState.profilePic="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"
    }
    try {
      const { data } = await client.mutate({
        mutation: SignUp_Mutation,
        variables: {
          input: formState,
        },
      });
      if(data.SignUp.success){
        toast.success("Signed Up, You can Login now !!")
        window.location.href="/signin"
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-center">Sign Up</h1>
      <br />
      <Tabs
        defaultValue="placed"
        className="sm:w-2/5 lg:w-[30%] xl:w-1/5 flex flex-col"
      >
        <TabsList>
          <TabsTrigger value="placed">Placed</TabsTrigger>
          <TabsTrigger value="seeker">Seeker</TabsTrigger>
        </TabsList>
        <TabsContent value="placed">
          <form className="flex flex-col">
            {companyDetail == false ? (
              <>
                {" "}
                <label>Full Name:</label>
                <Input
                  value={formState.name}
                  type="text"
                  name="name"
                  placeholder="Enter your fullname...."
                  onChange={handleChange}
                  required
                  pattern="^(?=.*[A-Z])(?=.*[a-z])[^ ]*(?: [^ ]*){0,2}$"
                />
                <br />
                <label>Email:</label>
                <Input
                  value={formState.email}
                  type="email"
                  name="email"
                  placeholder="Enter your email...."
                  onChange={handleChange}
                  required
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
"
                />
                <br />
                <label>Password:</label>
                <Input
                  value={formState.password}
                  type={showPass == true ? "password" : "text"}
                  name="password"
                  placeholder="Enter your password...."
                  onChange={handleChange}
                  required
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$"
                />
                {showPass == true ? (
          <Eye
            onClick={() => setShowPass(!showPass)}
            className="cursor-pointer self-end mt-[-30px] mr-2"
          />
        ) : (
          <EyeOff
            onClick={() => setShowPass(!showPass)}
            className="cursor-pointer self-end mt-[-30px] mr-2"
          />
        )}
                <br />
              </>
            ) : (
              <>
                <label>Company Name:</label>
                <Input
                  value={formState.companyName}
                  type="text"
                  name="companyName"
                  placeholder="Enter your company name...."
                  onChange={handleChange}
                  required
                  pattern="^(?=.*[A-Z])(?=.*[a-z])[^ ]*(?: [^ ]*){0,2}$"
                />
                <br />
                <label>Job Role:</label>
                <Input
                  value={formState.jobRole}
                  type="text"
                  name="jobRole"
                  placeholder="Enter your job role...."
                  onChange={handleChange}
                  required
                  pattern="^(?=.*[A-Z])(?=.*[a-z])[^ ]*(?: [^ ]*){0,2}$"
                />
                <br />
                <label>Experience:</label>
                <Input
                  value={formState.expYear}
                  type="number"
                  name="expYear"
                  placeholder="Enter your years of experience...."
                  onChange={handleChange}
                  required
                />
                <br />
                <Input
    type="file"
    name="profilePic"
    onChange={(event:any)=>setProfilePicFile(event.target.files[0])}
    required
  />
  <br />
              </>
            )}
            {companyDetail == false ? (
              <Button
                className="self-center"
                onClick={() => setCompanyDetail(true)}
                disabled={!formState.name || !formState.email || !formState.password}
              >
                Next
              </Button>
            ) : (
              <Button className="self-center" onClick={(e) => handleSignUp("Placed",e)}>SignUp</Button>
            )}
            <br />
            <p className="text-center">
              Have an account ?{" "}
              <span className="font-bold">
                <Link href="/signin">SignIn</Link>
              </span>
            </p>
          </form>
        </TabsContent>
        <TabsContent value="seeker">
          {" "}
          <form className="flex flex-col">
            <label>Full Name:</label>
            <Input
              value={formState.name}
              type="text"
              name="name"
              placeholder="Enter your fullname...."
              onChange={handleChange}
              required
              // pattern="^(?=.*[A-Z])(?=.*[a-z])[^ ]*(?: [^ ]*){0,2}$"
            />
            <br />
            <label>Email:</label>
            <Input
              value={formState.email}
              type="email"
              name="email"
              placeholder="Enter your email...."
              onChange={handleChange}
              required
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
"
            />
            <br />
            <label>Password:</label>
            <Input
              value={formState.password}
              type={showPass == true ? "password" : "text"}
              name="password"
              placeholder="Enter your password...."
              onChange={handleChange}
              required
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$"
            />
            {showPass == true ? (
          <Eye
            onClick={() => setShowPass(!showPass)}
            className="cursor-pointer self-end mt-[-30px] mr-2"
          />
        ) : (
          <EyeOff
            onClick={() => setShowPass(!showPass)}
            className="cursor-pointer self-end mt-[-30px] mr-2"
          />
        )}
            <br />
            {/* <Input
    type="file"
    name="profilePic"
    onChange={(event:any)=>setProfilePicFile(event.target.files[0])}
    required
  /> */}
  <CldUploadWidget
      uploadPreset="refroPreset"
      onSuccess={(result, { widget }) => {
      if(result.info.url){
        formState.profilePic=result?.info.url
        widget.close();
      }
      }}
    >
      {({ open }) => (
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            open();
          }}
        >
          Upload an Image
        </button>
      )}
    </CldUploadWidget>
  <br />
            <Button className="self-center" onClick={(e)=>handleSignUp("Seeker",e)}>SignUp</Button>
            <br />
            <p className="text-center">
              Have an account ?{" "}
              <span className="font-bold">
                <Link href="/signin">SignIn</Link>
              </span>
            </p>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
}
