import { useState } from "react";
import { Activity } from "../types/types";
import ActivityDateInput from "./ActivityDateInput";
import ActivityInput from "./ActivityInput";
import { generateID } from "../utils/utils";

interface Props {
  activities: Activity[];
  setActivities: (activities: Activity[]) => void;
}

export default function ActivityForm({ activities, setActivities }: Props) {
  const [localActivities, setLocalActivites] = useState<Activity>({
    activity: "",
    place: "",
    date: "",
    id: -1,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedActivities: Activity[] = [
      ...activities,
      { ...localActivities, id: generateID(activities) },
    ];

    setActivities(updatedActivities);
    setLocalActivites({ activity: "", place: "", date: "", id: -1 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <ActivityInput
        labelText="Activity"
        name="activity"
        value={localActivities.activity}
        localActivities={localActivities}
        setLocalActivites={setLocalActivites}
      />
      <ActivityInput
        labelText="Where"
        name="place"
        value={localActivities.place}
        localActivities={localActivities}
        setLocalActivites={setLocalActivites}
      />
      <ActivityDateInput
        labelText="When"
        value={localActivities.date}
        localActivities={localActivities}
        setLocalActivites={setLocalActivites}
      />
      <button>Add</button>
    </form>
  );
}
