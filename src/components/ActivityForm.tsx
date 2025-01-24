import { useState } from "react";
import { Activity } from "../types/types";
import ActivityDateInput from "./ActivityDateInput";
import ActivityInput from "./ActivityInput";
import { generateID, isNewActivity } from "../utils/utils";
import FormButton from "./FormButton";
import ErrorMessage from "./ErrorMessage";

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
  const [localActivity, setLocalActivity] = useState<Activity>({
    activity: "",
    place: "",
    date: "",
    id: -1,
    isVisible: true,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isNewActivity(localActivity, activities)) {
      const updatedActivities: Activity[] = [
        ...activities,
        { ...localActivity, id: generateID(activities) },
      ].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

      setActivities(updatedActivities);
      setLocalActivity({ activity: "", place: "", date: "", id: -1, isVisible: true });
    } else {
      setError("Activity already exists");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-8 bg-white rounded-lg shadow-md mx-auto max-w-lg w-full space-y-4">
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
        inputValue={localActivity.date}
        localActivities={localActivity}
        setLocalActivites={setLocalActivity}
        setError={setError}
      />
      <ErrorMessage error={error} />
      <FormButton btnText="Add" />
    </form>
  );
}
