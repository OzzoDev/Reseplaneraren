import { useEffect, useRef } from "react";

interface Props {
  sortItems: string[];
  sortOrder: number;
  onChange: (value: number) => void;
}

export default function Sort({ sortItems, sortOrder, onChange }: Props) {
  const selectRef = useRef<HTMLSelectElement | null>(null);

  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.value = String(sortOrder);
    }
  }, [sortOrder]);

  return (
    <div className="flex items-center space-x-4 px-4 bg-sky-700 shadow-lg rounded-full text-white">
      <p className="text-[1rem] font-semibold m-0">Sort Activities</p>
      <select
        ref={selectRef}
        onChange={(event) => onChange(Number(event.target.value))}
        className="p-2 border-0 bg-sky-700 focus:outline-none focus:ring-0">
        {sortItems.map((item, index) => (
          <option key={index} value={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
