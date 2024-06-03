import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ShowSuccessMessage(message: string) {
   toast.success(message, {
      position: "top-right",
      autoClose: 3000,
   });
}

export function ShowErrorMessage(message: string) {
   toast.error(message, {
      position: "top-right",
      autoClose: 3000,
   });
}
