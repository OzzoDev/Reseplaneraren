import { useState } from "react";
import { Activity } from "../types/types";
import { IoCheckmarkOutline, IoTrashOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import EditableText from "./EditableText";

interface Props {
  activity: Activity;
  deleteActivity: (activity: Activity) => void;
  editActivity: (activity: Activity) => void;
}

export default function ActivityItem({
  activity,
  deleteActivity,
  editActivity,
}: Props) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [localActivity, setLocalActivity] = useState<Activity>(activity);

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
      <form onSubmit={handleEdit}>
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
