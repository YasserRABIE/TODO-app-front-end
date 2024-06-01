import TaskFilter from "@/app/reusable/TaskFilter";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { TaskType } from "../interfaces/Task";
import { MakeRequest } from "@/app/scripts/makeRequest";
import { GetToken } from "@/app/scripts/auth";

function MainInput({ setTasks, tasks }: { setTasks: Function; tasks: TaskType[] }) {
   const [taskFilter, setTaskFilter] = useState({ color: "#3fd4f4", filter: "personal" });
   const [taskTitle, setTaskTitle] = useState("");

   const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
      setTaskTitle(e.target.value);
   };

   const handleNewTask = async () => {
      if (taskTitle === "") {
         return;
      }

      const task = {
         title: taskTitle,
         filter: taskFilter["filter"],
         color: taskFilter["color"],
      };

      const result = await MakeRequest<{ message: string }>(
         "tasks/add",
         "POST",
         {
            ...task,
         },
         {
            Authorization: `Bearer ${GetToken()}`,
         }
      );

      if (!result.response?.success) return result.error;

      setTasks([...tasks, task]);
      setTaskTitle("");
   };

   const handleEnter = async (e: KeyboardEvent) => {
      if (taskTitle === "") {
         return;
      }
      if (e.key === "Enter") {
         const task = {
            title: taskTitle,
            filter: taskFilter["filter"],
            color: taskFilter["color"],
         };

         const result = await MakeRequest<{ message: string }>(
            "tasks/add",
            "POST",
            {
               ...task,
            },
            {
               Authorization: `Bearer ${GetToken()}`,
            }
         );

         if (!result.response?.success) return result.error;

         setTasks([...tasks, task]);
         setTaskTitle("");
      }
   };

   return (
      <div className="rounded-[15px] px-[1em] py-[5px] flex bg-white w-full overflow-hidden">
         <div className="flex items-center border-r-2 border-[#e5e3e3]">
            <TaskFilter color="#3fd4f4" title="personal" setFilter={setTaskFilter} tasks={tasks} />
            <TaskFilter color="#fd99af" title="freelance" setFilter={setTaskFilter} tasks={tasks} />
            <TaskFilter color="#fac608" title="work" setFilter={setTaskFilter} tasks={tasks} />
         </div>
         <input
            value={taskTitle}
            onKeyDown={handleEnter}
            onChange={handleInput}
            className="w-full text-[1.6rem] p-[0.5em] outline-none text-unactiveGrey"
            placeholder="Add your new target..."
         />
         <i
            onClick={handleNewTask}
            className="flex items-center text-[30px] pr-[10px] text-unactiveGrey hover:text-black transition-colors cursor-pointer"
         >
            <FontAwesomeIcon icon={faPlus} />
         </i>
      </div>
   );
}

export default MainInput;
