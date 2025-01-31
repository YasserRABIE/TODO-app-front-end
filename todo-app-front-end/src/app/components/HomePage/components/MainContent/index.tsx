import { useEffect, useState } from "react";
import React from "react";
import MainInput from "./components/MainInput";
import TasksContainer from "./components/TasksContainer";
import { TaskType } from "./interfaces/Task";
import { MakeRequest } from "@/app/scripts/makeRequest";
import { GetToken } from "@/app/scripts/auth";

interface Req {
   method: string;
   body: undefined | object;
}

function Index({ filter }: { filter: string }) {
   const [tasks, setTasks] = useState<TaskType[]>([]);

   useEffect(() => {
      const getTasks = async () => {
         let request: Req = { method: "GET", body: undefined };
         if (filter) {
            request = { method: "POST", body: { filter: filter } };
         }

         const result = await MakeRequest<{ tasks: TaskType[] }>("tasks", request.method, request.body, {
            Authorization: `Bearer ${GetToken()}`,
         });

         if (!result.response?.success) return;

         setTasks(result.response.data.tasks);
      };

      getTasks();
   }, [filter]);

   return (
      <section className="w-full p-[2.4rem]">
         <h1 className="block text-[2rem] text-white mb-[5rem]">
            They don&apos;t know me son
            <span className="block text-[2.3rem] font-bold">
               stay <strong>STRONG</strong>...
            </span>
         </h1>
         <div className="w-full flex flex-col items-center gap-[40px]">
            <MainInput setTasks={setTasks} tasks={tasks} />
            <div className="p-[1em] w-full">
               <TasksContainer tasks={tasks} setTasks={setTasks} />
            </div>
         </div>
      </section>
   );
}

export default Index;
