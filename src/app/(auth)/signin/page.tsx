"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { toast } from 'sonner';
export default function Signin() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
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
  async function handleSignIn(event: any) {
    event.preventDefault();
    try {
      const response = await axios.post("/api/login", {
        email: formState.email,
        password: formState.password,
      });
      const data=response.data
      toast.success(data.error)
      // if (response.data.success) {
      //   window.location.href = "/dashboard";
      // } else {
      //   toast.error(response.data.error)
      // }
    } catch (error:any) {
      toast.error(error.error)
    }
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form className="sm:w-2/5 lg:w-[30%] xl:w-1/5 flex flex-col">
        <h1 className="text-3xl font-bold text-center">Sign In</h1>
        <br />

        <label>Email:</label>
        <Input
          value={formState.email}
          name="email"
          type="email"
          placeholder="Enter your email...."
          onChange={handleChange}
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
"
          required
        />
        <br />
        <label>Password:</label>
        <Input
          type={showPass == true ? "password" : "text"}
          name="password"
          value={formState.password}
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
        <Button className="self-center" onClick={
          handleSignIn}>
          SignIn
        </Button>
        <br />
        <p className="text-center">
          Do not have an account ?{" "}
          <span className="font-bold">
            <Link href="/signup">SignUp</Link>
          </span>
        </p>
      </form>
    </div>
  );
}
