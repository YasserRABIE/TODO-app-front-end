"use client";
import { useEffect } from "react";
import HomePage from "./components/HomePage";
import { useRouter } from "next/navigation";
import { HasToken } from "./scripts/auth";

export default function Home() {
   const router = useRouter();

   useEffect(() => {
      if (!HasToken()) {
         router.push("/login");
      }
   }, [router]);

   return (
      <main className="bg-primary h-full">
         <HomePage />
      </main>
   );
}
