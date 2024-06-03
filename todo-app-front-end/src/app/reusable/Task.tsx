import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TaskType } from "../components/HomePage/components/MainContent/interfaces/Task";
import { MakeRequest } from "../scripts/makeRequest";
import { GetToken } from "../scripts/auth";
import { ShowErrorMessage } from "../scripts/toast";

interface props {
   title: string;
   color: string;
   tasks: TaskType[];
   setTasks: Function;
   idx: number;
}

function Task({ title, color, tasks, setTasks, idx }: props) {
   const handleRemoveTask = async () => {
      const result = await MakeRequest<{ message: string }>(
         "tasks/remove",
         "POST",
         {
            title: title,
            filter: tasks[idx].filter,
         },
         {
            Authorization: `Bearer ${GetToken()}`,
         }
      );

      if (!result.response?.success) {
         return result.error;
      }

      const newTasks = [...tasks];
      newTasks.splice(idx, 1);
      setTasks(newTasks);

      ShowErrorMessage(result.response.data.message);
   };

   return (
      <div className="rounded-[15px] p-[1em]  flex items-center bg-white w-full overflow-hidden">
         <span className="w-[10px] h-[10px] rounded-full mr-[20px]" style={{ backgroundColor: color }}></span>
         <div className="flex-1 text-[1.3rem] text-unactiveGrey">{title}</div>
         <i
            onClick={handleRemoveTask}
            className="text-unactiveGrey text-[20px] hover:text-red-400 transition-colors cursor-pointer"
         >
            <FontAwesomeIcon icon={faTrashCan} />
         </i>
      </div>
   );
}

export default Task;
