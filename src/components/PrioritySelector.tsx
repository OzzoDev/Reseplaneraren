import { Priority } from "../types/types";

interface Props {
  priorities: Priority[];
  currentPriority: Priority;
  setPriority: (priority: Priority) => void;
}

export default function PrioritySelector({ priorities, currentPriority, setPriority }: Props) {
  return (
    <div className="flex flex-col items-start space-y-1">
      <p className="text-inherit font-medium">Select priority</p>
      <div className="flex justify-center space-x-4 m-auto w-full">
        <span>Low</span>
        <ul className="flex justify-center items-center space-x-4">
          {priorities.map((priority, index) => {
            const markSelected = currentPriority.prio === priority.prio ? true : false;
            return (
              <li
                key={index}
                onClick={() => setPriority(priority)}
                className={`w-[16px] h-[16px] bg-${priority.color}-500 hover:bg-${
                  priority.color
                }-300 transition duration-300 rounded-full cursor-pointer ${
                  markSelected ? "outline-offset" : ""
                }`}
              />
            );
          })}
        </ul>
        <span>High</span>
      </div>
    </div>
  );
}
