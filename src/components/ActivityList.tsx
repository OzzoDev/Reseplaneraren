import { Activity } from "../types/types";
import ActivityItem from "./ActivityItem";

interface Props {
  activities: Activity[];
  filteredActivities: Activity[];
  setActivities: (activities: Activity[]) => void;
}

/**
 * A component that displays a list of activities.
 * Allows for deleting and editing activities.
 *
 * @param {Props} props - The properties for the component.
 * @param {Activity[]} props.activities - The array of original activities.
 * @param {Activity[]} props.filteredActivities - The array of activities to display.
 * @param {(activities: Activity[]) => void} props.setActivities - Function to update the activities.
 *
 * @returns {JSX.Element} The rendered list of activities.
 *
 * @example
 * <ActivityList
 *   activities={activities}
 *   filteredActivities={filteredActivities}
 *   setActivities={setActivities}
 * />
 */

export default function ActivityList({
  activities,
  filteredActivities,
  setActivities,
}: Props) {
  const handleDeleteActivity = (activity: Activity) => {
    const updatedActivities = activities
      .filter((act) => {
        return act.id !== activity.id;
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    setActivities(updatedActivities);
  };

  const handleEditActivity = (activity: Activity) => {
    const updatedActivities = activities
      .map((act) => {
        if (act.id === activity.id) {
          return activity;
        }
        return act;
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    setActivities(updatedActivities);
  };

  const noActivities = activities.length === 0;

  if (noActivities) {
    return <h2 className="text-5xl text-white">No activites!</h2>;
  }

  const noMatchActivities = filteredActivities.length === 0;

  if (noMatchActivities) {
    return <h2 className="text-5xl text-white">No matching activites!</h2>;
  }

  return (
    <ul className="flex flex-col p-8 mx-auto max-w-lg w-full space-y-4">
      {filteredActivities.map((activity) => {
        return (
          <ActivityItem
            key={activity.id}
            activity={activity}
            deleteActivity={handleDeleteActivity}
            editActivity={handleEditActivity}
          />
        );
      })}
    </ul>
  );
}
