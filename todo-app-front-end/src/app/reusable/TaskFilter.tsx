function TaskFilter({ color }: { color: string }) {
   return (
      <button className="w-[17px] h-[17px] rounded-full flex mr-[20px]" style={{ backgroundColor: color }}></button>
   );
}

export default TaskFilter;
