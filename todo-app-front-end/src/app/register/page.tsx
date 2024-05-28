import React from "react";
import RegisterForm from "../components/Register/components/RegisterForm";
import "../style.css";

function Register() {
   return (
      <section className="bg-primary h-screen">
         <div className="h-full flex items-center justify-center">
            <RegisterForm />
         </div>
      </section>
   );
}

export default Register;
