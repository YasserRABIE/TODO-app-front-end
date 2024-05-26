function index({ type, label }: { type: string; label: string }): JSX.Element {
   return (
      <div className="mb-4">
         <label htmlFor={type} className="block text-sm font-medium text-[1rem] pb-2 text-black">
            {label}
         </label>
         <input
            type={type}
            id={type}
            name={type}
            required
            className="w-full p-2 rounded-md border-2 border-unactiveGrey outline-none"
         />
      </div>
   );
}

export default index;
