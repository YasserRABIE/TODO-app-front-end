"use client";
import { useEffect } from "react";
import HomePage from "./components/HomePage";
import { useRouter } from "next/navigation";
import { HasToken } from "./scripts/auth";
import { ToastContainer } from "react-toastify";
import { ShowErrorMessage } from "./scripts/toast";

export default function Home() {
   const router = useRouter();

   useEffect(() => {
      if (!HasToken()) {
         ShowErrorMessage("Please login first!");
         router.push("/login");
      }
   }, [router]);

   return (
      <>
         <ToastContainer limit={3} />
         <main className="bg-primary">
            <HomePage />
         </main>
      </>
   );
}
