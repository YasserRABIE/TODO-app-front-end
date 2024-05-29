export function HasToken() {
   const token = document.cookie.split("Authorization=")[1];
   if (!token) {
      return false;
   }
   return true;
}
