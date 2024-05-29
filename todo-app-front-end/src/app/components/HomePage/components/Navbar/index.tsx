import React from "react";
import UserProfile from "./components/UserProfile";

function index({ name }: { name: string }) {
   return (
      <div className="h-screen bg-white w-fit p-[20px]">
         <UserProfile name={name} />
      </div>
   );
}

export default index;
