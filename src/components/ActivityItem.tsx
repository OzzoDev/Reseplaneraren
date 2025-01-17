import { useRef, useState } from "react";
import { Activity } from "../types/types";
import { IoCheckmarkOutline, IoTrashOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import EditableText from "./EditableText";
import useOutsideClick from "../hooks/useOutsideClick";

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

export default function ActivityItem({
  activity,
  deleteActivity,
  editActivity,
}: Props) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [localActivity, setLocalActivity] = useState<Activity>(activity);
  const editFormRef = useRef<HTMLFormElement | null>(null);

  useOutsideClick(editFormRef, () => {
    setIsEditing(false);
    setLocalActivity(activity);
  });

  const handleDelete = () => {
    deleteActivity(activity);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const editedActivity = { ...localActivity, [name]: value };
    setLocalActivity(editedActivity);
  };

  const handleEdit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    editActivity(localActivity);
    setIsEditing((prevState) => !prevState);
  };

  return (
    <li className="activity-item">
      <form onSubmit={handleEdit} ref={editFormRef}>
        <EditableText
          tag="h3"
          name="activity"
          value={localActivity.activity}
          isEditing={isEditing}
          onChange={handleChange}
        />
        <EditableText
          tag="p"
          name="place"
          value={localActivity.place}
          isEditing={isEditing}
          onChange={handleChange}
        />
        <EditableText
          tag="p"
          name="date"
          value={localActivity.date}
          isEditing={isEditing}
          inputType="date"
          onChange={handleChange}
        />
        <button type="submit">
          {isEditing ? <IoCheckmarkOutline /> : <FaRegEdit />}
        </button>
      </form>
      <button onClick={handleDelete}>
        <IoTrashOutline />
      </button>
    </li>
  );
}
