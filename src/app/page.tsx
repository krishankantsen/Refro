import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen z-0 relative h-screen flex justify-center items-center ">
      <div className="w-3/5 h-3/5 flex flex-col justify-center items-center gap-4" ><h1 className=" text-3xl font-bold  text-center sm:text-5xl "> Take and Give Help to Your Bro </h1>
      <p className="w-full sm:w-3/5 md:w-4/5 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. sunt maxime tempore ipsum saepe sapiente aliquid quas?</p>
      <Link href="/signup"><Button>Join Now -{">"} </Button></Link>
      </div>
    </div>
  );
}
