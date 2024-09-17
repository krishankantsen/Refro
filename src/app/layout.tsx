import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/component/Navbar";
import { ThemeProvider } from "@/components/component/theme-provider";
import {Toaster } from "sonner"
import StoreProvider from "./StoreProvider";
import { GeistSans } from 'geist/font/sans';
import { SpeedInsights } from "@vercel/speed-insights/next"




export const metadata: Metadata = {
  title: "Refro",
  description: "",
};

const  RootLayout=({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)=> {
  return (
    <html lang="en" >
      <body className={GeistSans.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
       <StoreProvider>
       <Navbar/>
       {children}
       <SpeedInsights/>
       </StoreProvider>
        <Toaster  position="top-center" richColors	 />
        </ThemeProvider></body>
    </html>
  );
}
export default RootLayout;