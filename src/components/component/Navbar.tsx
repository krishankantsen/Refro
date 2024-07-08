"use client";
import { Button } from "../ui/button";
import { Moon, Router, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setTokenState,  setUserState,setLogout } from "@/lib/store/authSlice";

import { useRouter } from "next/navigation";



export default function Navbar() {
  const { setTheme } = useTheme();
  const dispatch=useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);
  const router=useRouter()
  const style = {
    width: "-webkit-fill-available",
  };
  const logo = "</R>";
  return (
    <main
      className="navbar h-12 absolute flex justify-between align-middle pl-866 pr-6 "
      style={style}
    >
      <div className="logo w-1/2 h-full flex items-center gap-1">
        <h1 className="text-center self-center font-bold text-xl ">
          <Link href="/">{logo} REFRO</Link>
        </h1>
      </div>
      <div className="w-1/2 h-full justify-end flex items-center gap-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <p className="sr-only">Toggle theme</p>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        {token ?<><Link href={"/dashboard"}><Button>Dashboard</Button></Link>
        <Button onClick={()=>{
         dispatch(setLogout())
         router.push("/signin")
        }}>Logout</Button></>:<Link href={"/signin"}><Button>Login</Button></Link>}
        
      </div>
    </main>
  );
}
