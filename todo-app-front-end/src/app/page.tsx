"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Home() {
   const router = useRouter();

   if (!Cookies.get("Authorization")) {
      router.push("/register");
   }

   return (
      <main className="bg-primary h-screen">
         <div className="h-full flex items-center justify-center"></div>
      </main>
   );
}
