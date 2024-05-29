import Navbar from "./components/Navbar";
import { useRouter } from "next/navigation";
import { MakeRequest } from "@/app/scripts/makeRequest";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

interface UserData {
   name: string;
   email: string;
}

function Index() {
   const router = useRouter();

   const [user, setUser] = useState<UserData>({ name: "", email: "" });

   useEffect(() => {
      const getUser = async () => {
         const result = await MakeRequest<UserData>("account", "GET", undefined, {
            Authorization: `Bearer ${Cookies.get("Authorization")}`,
         });

         if (!result.response?.success) {
            router.push("/register");
            return result.error;
         }

         setUser(result.response.data);
      };

      getUser();
   }, [router]);

   useEffect(() => {
      if (!user) {
         router.push("/register");
      }
   }, [user, router]);

   return (
      <div>
         <Navbar name={user.name} />
      </div>
   );
}

export default Index;
