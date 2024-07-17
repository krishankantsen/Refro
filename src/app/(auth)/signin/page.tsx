"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { useAppDispatch } from "@/lib/store/hooks";
import { setTokenState, setUserState } from "@/lib/store/authSlice";
import { useRouter } from "next/navigation";
import gql from "graphql-tag";
import client from "@/lib/apolloClient";
const Signin_Query = gql`
    query Query($input: SigninUser) {
      Signin(input: $input) {
        success
        token
        user {
          id
          email
          name
          companyName
          role
          jobRole
          expYear
          profilePic
        }
      }
    }
  `;
export default function Signin() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const dispatch = useAppDispatch();
  const router = useRouter();
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
    const { data } = await client.query({
      query: Signin_Query,
      variables: {
        input: formState,
      },
    });
    console.log(data.Signin)
      if (data.Signin.success) {
        dispatch(setTokenState(data.Signin.token))
        dispatch(setUserState(data.Signin.user))
       router.push("/dashboard")
      } else {
        toast.error(data.error)
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
        <Button className="self-center" onClick={handleSignIn}>
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
