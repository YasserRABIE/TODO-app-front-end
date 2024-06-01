import React from "react";
import UserProfile from "./components/UserProfile";
import Filters from "./components/Filters";

function index({ name, setFilter }: { name: string | undefined; setFilter: Function }) {
   return (
      <div className="fixed top-0 bottom-0 bg-white p-[1.2rem]">
         <UserProfile name={name} />
         <Filters setFilter={setFilter} />
      </div>
   );
}

export default index;
