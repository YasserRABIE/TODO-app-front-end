import Navbar from "./components/Navbar";
import { useRouter } from "next/navigation";
import { MakeRequest } from "@/app/scripts/makeRequest";
import { useEffect, useState } from "react";
import MainContent from "./components/MainContent";
import { GetToken } from "@/app/scripts/auth";
import { ShowSuccessMessage } from "@/app/scripts/toast";

export interface UserData {
   name: string;
   email: string;
}

function Index() {
   const router = useRouter();

   const [filter, setFilter] = useState("");
   const [user, setUser] = useState<UserData>({ name: "", email: "" });

   useEffect(() => {
      const getUser = async () => {
         const result = await MakeRequest<UserData>("account", "GET", undefined, {
            Authorization: `Bearer ${GetToken()}`,
         });

         if (!result.response?.success) {
            router.push("/login");
            return;
         }

         ShowSuccessMessage("Welcome back " + result.response.data.name);
         setUser(result.response.data);
      };

      getUser();
   }, [router]);

   return (
      <div className="flex">
         <div className="min-w-[250px]">
            <Navbar setFilter={setFilter} name={user.name} />
         </div>
         <MainContent filter={filter} />
      </div>
   );
}

export default Index;
