"use client";
import Input from "@/app/reusable/Input";
import { makeRequest } from "@/app/scripts/makeRequest";
import React, { FormEvent, useState } from "react";
import Lottie from "lottie-react";
import data from "../../../../assets/lottie/Animation_loading.json";
import Cookies from "js-cookie";

function Index() {
   const [loading, setLoading] = useState(false);
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const createAccount = async (e: FormEvent) => {
      e.preventDefault();
      setLoading(true);

      const result = await makeRequest<{ token: string }>("register", "POST", {
         name: name,
         email: email,
         password: password,
      });

      if (!result.response?.success) {
         setLoading(false);

         return result.error;
      }

      Cookies.set("Authorization", result.response.data.token);

      setName("");
      setEmail("");
      setPassword("");

      setLoading(false);
   };

   return (
      <form onSubmit={createAccount} className="felx flex-col w-96 p-4 bg-white rounded-md shadow-md">
         <Input dataState={name} setData={setName} type="usernamw" label="name:" />
         <Input dataState={email} setData={setEmail} type="email" label="Email:" />
         <Input dataState={password} setData={setPassword} type="password" label="Password:" />
         <button
            type="submit"
            className="w-full py-3 px-4 h-[4rem] border border-transparent rounded-md shadow-sm text-[1.2rem] text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-all"
         >
            {loading && (
               <span className="relative flex items-center justify-center h-full">
                  <Lottie animationData={data} style={{ width: 80, position: "absolute" }} />
               </span>
            )}
            {!loading && "Sign up"}
         </button>
      </form>
   );
}
export default Index;
