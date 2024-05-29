import { useRouter } from "next/navigation";
import { makeRequest } from "@/app/scripts/makeRequest";
import Image from "next/image";
import Cookies from "js-cookie";
import { useState } from "react";

interface UserData {
   name: string;
   email: string;
}

function UserProfile() {
   const router = useRouter();

   const [user, setUser] = useState<UserData>();

   const getUser = async () => {
      const result = await makeRequest<UserData>("account", "GET", undefined, {
         Authorization: `Bearer ${Cookies.get("Authorization")}`,
      });

      if (!result.response?.success) {
         router.push("/register");
         return result.error;
      }

      setUser(result.response.data);
   };

   getUser();

   if (!user) {
      router.push("/register");
      return;
   }

   console.log(user);

   return (
      <div className="flex gap-2 items-center">
         <Image src="/site-icon.jpeg" alt="user photo" width={70} height={70} style={{ borderRadius: "50%" }} />
         <h1>
            <h2 className="block">Do-it</h2>
            {user.name}
         </h1>
      </div>
   );
}

export default UserProfile;
