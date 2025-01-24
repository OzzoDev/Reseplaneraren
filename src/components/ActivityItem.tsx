import { useRef, useState } from "react";
import { Activity, Priority } from "../types/types";
import { IoCheckmarkOutline, IoTrashOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import EditableText from "./EditableText";
import useOutsideClick from "../hooks/useOutsideClick";
import EditableDate from "./EditableDate";
import EditablePriority from "./EditablePriority";

interface Props {
  activity: Activity;
  deleteActivity: (activity: Activity) => void;
  editActivity: (activity: Activity) => void;
}

/**
 * A component that displays an individual activity item.
 * Allows for editing and deleting the activity.
 *
 * @param {Props} props - The properties for the component.
 * @param {Activity} props.activity - The activity object to display.
 * @param {(activity: Activity) => void} props.deleteActivity - Function to delete the activity.
 * @param {(activity: Activity) => void} props.editActivity - Function to edit the activity.
 *
 * @returns {JSX.Element} The rendered activity item.
 *
 * @example
 * <ActivityItem
 *   activity={activity}
 *   deleteActivity={handleDeleteActivity}
 *   editActivity={handleEditActivity}
 * />
 */

export default function ActivityItem({ activity, deleteActivity, editActivity }: Props) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [localActivity, setLocalActivity] = useState<Activity>(activity);
  const itemRef = useRef<HTMLLIElement | null>(null);

  const today = new Date();

  useOutsideClick(itemRef, () => {
    setIsEditing(false);
    setLocalActivity(activity);
  });

  const handleDelete = () => {
    deleteActivity(activity);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "date") {
      const inputDate = new Date(value);
      const isValidDate = inputDate.toString() !== "Invalid Date" && inputDate >= today;

      if (isValidDate) {
        const editedActivity = { ...localActivity, [name]: value };
        setLocalActivity(editedActivity);
      }
    } else {
      const editedActivity = { ...localActivity, [name]: value };
      setLocalActivity(editedActivity);
    }
  };

  const handleEdit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditing) {
      editActivity(localActivity);
    }

    setIsEditing((prevState) => !prevState);
  };

  const handleSetPriority = (priority: Priority) => {
    setLocalActivity((prevActivity) => ({
      ...prevActivity,
      priority,
    }));
  };

  return (
    <li
      ref={itemRef}
      className="relative flex justify-between items-center p-4 py-10 border-b-[1px]">
      <form onSubmit={handleEdit} className="flex items-center justify-between space-y-2 w-full">
        <EditablePriority
          isEditing={isEditing}
          priority={localActivity.priority}
          renderedPriority={activity.priority}
          setPriority={handleSetPriority}
        />
        <div className="grid grid-cols-[repeat(3,1fr)] items-center gap-x-[150px]">
          <EditableText
            tag="h3"
            name="activity"
            value={localActivity.activity}
            text={activity.activity}
            labelText="Activity:"
            isEditing={isEditing}
            onChange={handleChange}
          />
          <EditableText
            tag="p"
            name="place"
            value={localActivity.place}
            text={activity.place}
            labelText="Where:"
            isEditing={isEditing}
            onChange={handleChange}
          />
          <EditableDate
            tag="p"
            name="date"
            text={activity.date}
            labelText="When: "
            isEditing={isEditing}
            onChange={handleChange}
          />
        </div>
        <div className=" flex space-x-2">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-10 rounded hover:bg-blue-600 transition duration-200">
            {isEditing ? <IoCheckmarkOutline /> : <FaRegEdit />}
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-500 text-white font-bold py-2 px-10 rounded hover:bg-red-600 transition duration-200">
            <IoTrashOutline />
          </button>
        </div>
      </form>
    </li>
  );
}
