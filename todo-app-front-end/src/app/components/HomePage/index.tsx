import Navbar from "./components/Navbar";
import { useRouter } from "next/navigation";
import { MakeRequest } from "@/app/scripts/makeRequest";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import MainContent from "./components/MainContent";

interface UserData {
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
            Authorization: `Bearer ${Cookies.get("Authorization")}`,
         });

         if (!result.response?.success) {
            router.push("/login");
            return result.error;
         }

         setUser(result.response.data);
      };

      getUser();
   }, [router]);

   return (
      <div className="flex">
         <Navbar setFilter={setFilter} name={user.name} />
         <MainContent />
      </div>
   );
}

export default Index;
