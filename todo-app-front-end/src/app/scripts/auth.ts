import Cookies from "universal-cookie";

const cookies = new Cookies();

export function SetToken(token: string) {
   cookies.set("Authorization", token, {
      path: "/",
      maxAge: 30 * 24 * 60 * 60,
   });
}

export function HasToken() {
   const token = document.cookie.split("Authorization=")[1];
   if (!token) {
      return false;
   }
   return true;
}

export function GetToken() {
   return cookies.get("Authorization");
}

export function RemoveToken() {
   return cookies.remove("Authorization");
}
