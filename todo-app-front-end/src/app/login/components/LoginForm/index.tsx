"use client";
import Input from "@/app/reusable/Input";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import data from "../../../assets/lottie/Animation_loading.json";
import { MakeRequest } from "@/app/scripts/makeRequest";
import Link from "next/link";
import { SetToken } from "@/app/scripts/auth";
import { ShowErrorMessage, ShowSuccessMessage } from "@/app/scripts/toast";
import { ToastContainer } from "react-toastify";

function Index() {
   const router = useRouter();

   const [loading, setLoading] = useState(false);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const login = async (e: FormEvent) => {
      e.preventDefault();
      setLoading(true);

      const result = await MakeRequest<{ token: string; error: string }>("login", "POST", {
         email: email,
         password: password,
      });

      if (!result.response?.success) {
         setLoading(false);

         if (result.response?.data.error) ShowErrorMessage(result.response?.data.error);

         return;
      }

      if (!result.response.data) return;
      if (!result.response.data.token) return;
      SetToken(result.response.data.token);

      router.push("/");

      setEmail("");
      setPassword("");

      setLoading(false);
   };

   return (
      <>
         <ToastContainer />
         <form onSubmit={login} className="felx flex-col w-96 p-4 gap-5 bg-white rounded-md shadow-md">
            <Input dataState={email} setData={setEmail} type="email" label="Email:" />
            <Input dataState={password} setData={setPassword} type="password" label="Password:" />
            <div className="hover:text-secondary transition-colors w-fit">
               <Link href="/register">Don&apos;t have an account yet?</Link>
            </div>
            <button
               type="submit"
               className="w-full py-2 mt-1 px-3 h-[4rem] border border-transparent rounded-md shadow-sm text-[1.2rem] text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-all"
            >
               {loading && (
                  <span className="relative flex items-center justify-center h-full">
                     <Lottie animationData={data} style={{ width: 80, position: "absolute" }} />
                  </span>
               )}
               {!loading && "Log in"}
            </button>
         </form>
      </>
   );
}

export default Index;
