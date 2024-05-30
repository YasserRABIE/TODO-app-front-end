import React, { useEffect, useRef } from "react";

function Filter({ setFilter, title, bgColor }: { setFilter: Function; title: string; bgColor: string }) {
   const filter = useRef<HTMLButtonElement>(null);

   useEffect(() => {
      const handleClick = () => {
         if (filter.current) {
            setFilter(filter.current.innerText);
         }
      };

      const buttonElement = filter.current;

      if (buttonElement) {
         buttonElement.addEventListener("click", handleClick);
      }

      return () => {
         if (buttonElement) {
            buttonElement.removeEventListener("click", handleClick);
         }
      };
   });

   return (
      <button className="flex items-center mb-[20px] text-unactiveGrey hover:text-black transition-colors" ref={filter}>
         <span className="w-[10px] h-[10px] rounded-full flex mr-[20px]" style={{ backgroundColor: bgColor }}></span>
         {title}
      </button>
   );
}

export default Filter;
