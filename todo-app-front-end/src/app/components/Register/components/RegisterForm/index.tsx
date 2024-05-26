import Input from "@/app/reusable/Input";
import React from "react";

function index() {
   return (
      <form className="felx flex-col w-96 p-4 bg-white rounded-md shadow-md">
         <Input type="usernamw" label="Username:" />
         <Input type="email" label="Email:" />
         <Input type="password" label="Password:" />
         <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-all"
         >
            Register
         </button>
      </form>
   );
}
export default index;
