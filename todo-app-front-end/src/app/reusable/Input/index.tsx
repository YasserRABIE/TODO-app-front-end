import { ChangeEvent } from "react";

function index({ type, label, setData }: { type: string; label: string; setData: Function }): JSX.Element {
   function handleChange(e: ChangeEvent<HTMLInputElement>) {
      setData(e.target.value);
   }

   return (
      <div className="mb-4">
         <label htmlFor={type} className="block text-sm font-medium text-[1rem] pb-2 text-black">
            {label}
         </label>
         <input
            type={type}
            id={type}
            name={type}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-md border-2 border-unactiveGrey outline-none"
         />
      </div>
   );
}

export default index;
