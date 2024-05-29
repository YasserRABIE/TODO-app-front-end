"use client";
import Cookies from "js-cookie";
import HomePage from "./components/HomePage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
   const router = useRouter();
   useEffect(() => {
      if (Cookies.get("Authorization") === "") {
         router.push("/register");
      }
   });

   return (
      <main className="bg-primary h-screen">
         <HomePage />
      </main>
   );
}
