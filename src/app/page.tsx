'use client'
import { Button } from "@/components/ui/button";
import client from "@/lib/apolloClient";
import { gql, useQuery } from '@apollo/client';
import Link from "next/link";

export default function Home() {
  const HELLO_QUERY = gql`
  query Hello {
    hello {
      name
    }
  }
`;

  const { data, loading, error } = useQuery(HELLO_QUERY,{
    client
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="w-3/5 h-3/5 flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold text-center sm:text-5xl">
          Take and Give Help to Your Bro
        </h1>
        <p className="w-full sm:w-3/5 md:w-4/5 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. sunt maxime
          tempore ipsum saepe sapiente aliquid quas?
        </p>
        <Link href="/signup">
          <Button>Join Now -&gt;</Button>
        </Link>
      </div>
    </main>
  );
}