import Task from "@/app/reusable/Task";
import { TaskType } from "../interfaces/Task";

function TasksContainer({ tasks, setTasks }: { tasks: TaskType[]; setTasks: Function }) {
   return (
      <div className="flex flex-col gap-[10px] w-full">
         {tasks.map((task, index, tasks) => (
            <Task 
            tasks={tasks} 
            title={task.title} 
            color={task.color} 
            key={index} 
            idx={index} 
            setTasks={setTasks} 
            />
         ))}
      </div>
   );
}

export default TasksContainer;
