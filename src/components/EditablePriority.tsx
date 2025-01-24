import { Priority } from "../types/types";
import PrioritySelector from "./PrioritySelector";
import { priorityMap } from "../constants/constants";

interface Props {
  isEditing: boolean;
  priority: Priority;
  renderedPriority: Priority;
  setPriority: (priority: Priority) => void;
}

export default function EditablePriority({
  isEditing,
  priority,
  renderedPriority,
  setPriority,
}: Props) {
  if (!isEditing) {
    return (
      <div
        className={`w-[16px] h-[16px] absolute top-1 right-2 bg-${renderedPriority.color}-500 hover:bg-${renderedPriority.color}-300 transition duration-300 rounded-full`}
      />
    );
  }

  return (
    <PrioritySelector
      priorities={priorityMap}
      currentPriority={priority}
      setPriority={setPriority}
    />
  );
}
