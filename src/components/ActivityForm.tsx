import { useEffect, useState } from "react";
import { Activity, Priority } from "../types/types";
import ActivityDateInput from "./ActivityDateInput";
import ActivityInput from "./ActivityInput";
import { generateID, isNewActivity, sortActivities } from "../utils/utils";
import FormButton from "./FormButton";
import ErrorMessage from "./ErrorMessage";
import { defaultActivity, priorityMap } from "../constants/constants";
import PrioritySelector from "./PrioritySelector";

interface Props {
  activities: Activity[];
  setActivities: (activities: Activity[]) => void;
}

/**
 * A form component for adding new activities.
 *
 * @param {Props} props - The properties for the component.
 * @param {Activity[]} props.activities - The current array of activities.
 * @param {(activities: Activity[]) => void} props.setActivities - Function to update the activities.
 *
 * @returns {JSX.Element} The rendered form for adding activities.
 *
 * @example
 * <ActivityForm
 *   activities={activities}
 *   setActivities={setActivities}
 * />
 */

export default function ActivityForm({ activities, setActivities }: Props) {
  const [error, setError] = useState<string>("");
  const [localActivity, setLocalActivity] = useState<Activity>(defaultActivity);

  useEffect(() => {
    if (localActivity === defaultActivity) {
      sortActivities(0, activities, setActivities);
    }
  }, [localActivity]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isNewActivity(localActivity, activities)) {
      const updatedActivities: Activity[] = [
        ...activities,
        { ...localActivity, id: generateID(activities) },
      ];
      setActivities(updatedActivities);
      setLocalActivity(defaultActivity);
    } else {
      setError("Activity already exists");
    }
  };

  const handleSetPriority = (priority: Priority) => {
    setLocalActivity((prevActivity) => ({
      ...prevActivity,
      priority,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-8 bg-white rounded-lg shadow-md m-auto max-w-lg w-full space-y-4">
      <h2 className="text-2xl font-semibold text-center">Add New Activity</h2>
      <ActivityInput
        labelText="Activity"
        name="activity"
        value={localActivity.activity}
        localActivities={localActivity}
        setLocalActivites={setLocalActivity}
        setError={setError}
      />
      <ActivityInput
        labelText="Where"
        name="place"
        value={localActivity.place}
        localActivities={localActivity}
        setLocalActivites={setLocalActivity}
        setError={setError}
      />
      <ActivityDateInput
        labelText="When"
        localActivities={localActivity}
        setLocalActivites={setLocalActivity}
        setError={setError}
      />
      <PrioritySelector
        priorities={priorityMap}
        currentPriority={localActivity.priority}
        setPriority={handleSetPriority}
      />
      <ErrorMessage error={error} />
      <FormButton btnText="Add" />
    </form>
  );
}
