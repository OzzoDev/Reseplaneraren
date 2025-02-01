import { useNavigate } from "react-router";
import { Activity, Priority, Trip } from "../../types/types";
import useTripManager from "../../hooks/useTripManager";
import { useState } from "react";
import EditablePriority from "./EditablePriority";
import PrimaryBtn from "../btn/PrimaryBtn";
import { FaRegEdit } from "react-icons/fa";
import { IoCheckmarkOutline, IoTrashOutline } from "react-icons/io5";
import { PiGear } from "react-icons/pi";
import DangerBtn from "../btn/DangerBtn";
import EditableDate from "./EditableDate";
import EditableText from "./EditableText";
import React from "react";

interface Props {
  trip: Trip;
  activity: Activity;
  isEditable?: boolean;
}

function ActivityItem({ trip, activity, isEditable }: Props) {
  const navigate = useNavigate();
  const { editActivity, deleteActivity } = useTripManager();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [localActivity, setLocalActivity] = useState<Activity>(activity);

  const navigateToActivityDetails = () => {
    navigate(`/trips/trip/${trip.id}/activity/${activity.id}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const editedActivity = { ...localActivity, [name]: value };
    setLocalActivity(editedActivity);
  };

  const handleDelete = () => {
    navigate(`/trips/trip/${trip.id}`);
    deleteActivity(trip, activity);
  };

  const handleEdit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditing) {
      editActivity(trip, localActivity);
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
    <li className="relative flex justify-between items-center p-4 py-10 bg-gray-950 bg-opacity-40 mb-8 h-[120px]">
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
            labelText="Activity"
            isEditing={isEditing}
            onChange={handleChange}
          />
          <EditableText
            tag="p"
            name="place"
            value={localActivity.place}
            text={activity.place}
            labelText="Where"
            isEditing={isEditing}
            onChange={handleChange}
          />
          <EditableDate
            tag="p"
            name="date"
            text={activity.date}
            labelText="When"
            isEditing={isEditing}
            onChange={handleChange}
          />
        </div>
        <div className=" flex space-x-2">
          {!isEditable ? (
            <PrimaryBtn
              btnText="Mange activity"
              onClick={navigateToActivityDetails}
              children={<PiGear size={24} />}
            />
          ) : (
            <>
              <PrimaryBtn
                type="submit"
                btnText="Edit"
                children={isEditing ? <IoCheckmarkOutline size={20} /> : <FaRegEdit size={20} />}
              />
              <DangerBtn
                btnText="Delete"
                onClick={handleDelete}
                icon={<IoTrashOutline size={20} />}
              />
            </>
          )}
        </div>
      </form>
    </li>
  );
}

export default React.memo(ActivityItem);
