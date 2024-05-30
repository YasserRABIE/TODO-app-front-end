import React from "react";
import MainInput from "./components/MainInput";

function index() {
   return (
      <section className="w-full p-[2.4rem]">
         <h1 className="block text-[2rem] text-white mb-[5rem]">
            They don&apos;t know me son
            <span className="block text-[2.3rem] font-bold">
               stay <strong className="underline">STRONG</strong>...
            </span>
         </h1>
         <div className="w-full flex justify-center">
            <MainInput />
         </div>
      </section>
   );
}

export default index;
