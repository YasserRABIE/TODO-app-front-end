import Filter from "@/app/reusable/Filter";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Filters({ setFilter }: { setFilter: Function }) {
   return (
      <div className="mt-20 flex gap-[30px]">
         <i className="text-secondary text-[20px]">
            <FontAwesomeIcon icon={faCalendar} />
         </i>
         <div className="flex flex-col text-left">
            <h1 className="mb-[2.2rem]">Today Tasks</h1>
            <Filter setFilter={setFilter} title="All" bgColor="#000" />
            <Filter setFilter={setFilter} title="Personal" bgColor="#3fd4f4" />
            <Filter setFilter={setFilter} title="Freelance" bgColor="#fd99af" />
            <Filter setFilter={setFilter} title="Work" bgColor="#fac608" />
         </div>
      </div>
   );
}

export default Filters;
