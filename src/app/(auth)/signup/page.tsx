"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from 'axios';

export default function SignUp() {
  const [companyDetail, setCompanyDetail] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    companyName: "",
    jobRole: "",
    expYear: 0,
    role: ""

  });
  const [showPass, setShowPass] = useState(false);
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

    try {
      const response = await axios.post("/api/signup", {
        email: formState.email,
        name: formState.name,
        password: formState.password,
        companyName: formState.companyName,
        role: formState.role,
        jobRole: formState.jobRole,
        expYear: formState.expYear,
        profilePic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABqQIdskCD9BK0I81EbVfV9tTz320XvJ35A&s"
      });
      const data = response.data;
      if(data.success){
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
