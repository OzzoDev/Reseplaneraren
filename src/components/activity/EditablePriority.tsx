import { priorityMap } from "../../constants/constants";
import { Priority } from "../../types/types";
import PrioritySelector from "./PrioritySelector";

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
        className={`w-[16px] h-[16px] bg-${renderedPriority.color}-500 hover:bg-${renderedPriority.color}-300 transition duration-300 rounded-full`}
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
