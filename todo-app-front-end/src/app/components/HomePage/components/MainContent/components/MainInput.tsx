import TaskFilter from "@/app/reusable/TaskFilter";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainInput() {
   return (
      <div className="rounded-[15px] px-[1em] py-[5px] flex bg-white w-full overflow-hidden">
         <div className="flex items-center border-r-2 border-[#e5e3e3] ">
            <TaskFilter color="#3fd4f4" />
            <TaskFilter color="#fd99af" />
            <TaskFilter color="#fac608" />
         </div>
         <input className="w-full text-[1.6rem] p-[0.5em] outline-none text-unactiveGrey" />
         <i className="flex items-center text-[30px] pr-[10px] text-unactiveGrey hover:text-black transition-colors cursor-pointer">
            <FontAwesomeIcon icon={faPlus} />
         </i>
      </div>
   );
}

export default MainInput;
