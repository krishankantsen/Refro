"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import gql from "graphql-tag";
import client from "@/lib/apolloClient";
import { toast } from "sonner";
import { imageToBase64 } from "@/lib/imageTObase64";

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
    profilePic: "",
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

  async function handleSignUp(role: string, event: any) {
    event.preventDefault();
    formState.role = role;
    if (profilePicFile) {
      formState.profilePic = await imageToBase64(profilePicFile);
    } else {
      formState.profilePic =
        "data:image/png;base64,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";
    }
    try {
      console.log(formState);
      const { data } = await client.mutate({
        mutation: SignUp_Mutation,
        variables: {
          input: formState,
        },
      });
      console.log("hello");
      if (data.SignUp.success) {
        toast.success("Signed Up, You can Login now !!");
        window.location.href = "/signin";
      }
    } catch (error) {
      console.log(error);
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
                  onChange={(event: any) =>
                    setProfilePicFile(event.target.files[0])
                  }
                  required
                />
                <br />
              </>
            )}
            {companyDetail == false ? (
              <Button
                className="self-center"
                onClick={() => setCompanyDetail(true)}
                disabled={
                  !formState.name || !formState.email || !formState.password
                }
              >
                Next
              </Button>
            ) : (
              <Button
                className="self-center"
                onClick={(e) => handleSignUp("Placed", e)}
              >
                SignUp
              </Button>
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
            <Input
              type="file"
              name="profilePic"
              onChange={(event: any) =>
                setProfilePicFile(event.target.files[0])
              }
              required
            />

            <br />
            <Button
              className="self-center"
              onClick={(e) => handleSignUp("Seeker", e)}
            >
              SignUp
            </Button>
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
