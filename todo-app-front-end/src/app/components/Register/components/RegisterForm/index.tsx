"use client";
import Input from "@/app/reusable/Input";
import { makeRequest } from "@/app/scripts/makeRequest";
import React, { FormEvent, useState } from "react";

function Index() {
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const createAccount = async (e: FormEvent) => {
      e.preventDefault();

      try {
         const result = await makeRequest<{ message: string }>("register", "POST", {
            username: username,
            email: email,
            password: password,
         });

         if (result.error) {
            console.log("Error:", result.error);
         }

         if (result.response) {
            console.log("Response:", result.response.data);
         }

         console.log("Request completed successfully.");
      } catch (error) {
         console.error("Error:", error);
      }
   };

   return (
      <form onSubmit={createAccount} className="felx flex-col w-96 p-4 bg-white rounded-md shadow-md">
         <Input setData={setUsername} type="usernamw" label="Username:" />
         <Input setData={setEmail} type="email" label="Email:" />
         <Input setData={setPassword} type="password" label="Password:" />
         <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-all"
         >
            Sign up
         </button>
      </form>
   );
}
export default Index;
