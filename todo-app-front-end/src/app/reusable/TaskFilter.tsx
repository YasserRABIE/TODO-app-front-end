import { useEffect, useRef, useState } from "react";
import { TaskType } from "../components/HomePage/components/MainContent/interfaces/Task";
interface Props {
   color: string;
   title: string;
   setFilter: Function;
   tasks: TaskType[];
}
function TaskFilter({ color, title, setFilter, tasks }: Props) {
   const filter = useRef<HTMLButtonElement>(null);
   const [clicked, setCliked] = useState(false);

   const handleClick = () => {
      setFilter({
         color: color,
         filter: title,
      });

      if (!filter.current) {
         return;
      }

      if (!clicked) {
         handleClasses("add");

         setCliked(true);
         return;
      }

      handleClasses("remove");
      setCliked(false);
   };
   

   useEffect(() => {
      if (!filter.current) {
         return;
      }

      setFilter({ color: "#3fd4f4", filter: "personal" });
      handleClasses("remove");
      setCliked(false);
   }, [setFilter, tasks]);

   const handleClasses = (operation: "add" | "remove") => {
      if (!filter.current) {
         return;
      }

      if (operation === "add") {
         filter.current.classList.add("ring-2");
         filter.current.classList.add("ring-offset-2");
         filter.current.classList.add("ring-secondary");
      }

      if (operation === "remove") {
         filter.current.classList.remove("ring-2");
         filter.current.classList.remove("ring-offset-2");
         filter.current.classList.remove("ring-secondary");
      }
   };

   return (
      <button
         onClick={handleClick}
         ref={filter}
         className="w-[17px] h-[17px] rounded-full flex mr-[20px] transition-all"
         style={{ backgroundColor: color }}
      ></button>
   );
}

export default TaskFilter;
