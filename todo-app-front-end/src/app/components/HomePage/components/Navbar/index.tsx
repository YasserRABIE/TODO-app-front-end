import React from "react";
import UserProfile from "./components/UserProfile";
import Filters from "./components/Filters";

function index({ name, setFilter }: { name: string | undefined; setFilter: Function }) {
   return (
      <div className="h-screen bg-white min-w-[250px] p-[20px]">
         <UserProfile name={name} />
         <Filters setFilter={setFilter} />
      </div>
   );
}

export default index;
