import React from "react";
import UserProfile from "./components/UserProfile";
import Filters from "./components/Filters";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { RemoveToken } from "@/app/scripts/auth";

function Index({ name, setFilter }: { name: string | undefined; setFilter: Function }) {
   const router = useRouter();

   const handleLogout = () => {
      RemoveToken();
      router.push("/login");
   };
   return (
      <div className="fixed flex flex-col top-0 bottom-0 bg-white p-[1.2rem]">
         <UserProfile name={name} />
         <Filters setFilter={setFilter} />
         <div className="flex-1 flex items-end">
            <button
               onClick={handleLogout}
               className="felx w-full items-center justify-center p-[0.5em] rounded-xl text-white bg-secondary focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
            >
               <span className="pr-[10px] text-[1.2rem]">Logout</span>
               <FontAwesomeIcon icon={faArrowRightFromBracket} style={{ fontSize: 20 }} />
            </button>
         </div>
      </div>
   );
}

export default Index;
