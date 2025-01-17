import { Activity } from "../types/types";
import ActivityItem from "./ActivityItem";

interface Props {
  activities: Activity[];
  setActivities: (activities: Activity[]) => void;
}

/**
 * A component that displays a list of activities.
 * Allows for deleting and editing activities.
 *
 * @param {Props} props - The properties for the component.
 * @param {Activity[]} props.activities - The array of activities to display.
 * @param {(activities: Activity[]) => void} props.setActivities - Function to update the activities.
 *
 * @returns {JSX.Element} The rendered list of activities.
 *
 * @example
 * <ActivityList
 *   activities={activities}
 *   setActivities={setActivities}
 * />
 */

export default function ActivityList({ activities, setActivities }: Props) {
  const handleDeleteActivity = (activity: Activity) => {
    const updatedActivities = activities
      .filter((act) => {
        return act.id !== activity.id;
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    console.log("On del: ", updatedActivities);

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

  return (
    <ul className="flex flex-col p-8 bg-white rounded-lg shadow-md mx-auto max-w-lg w-full space-y-4">
      {activities.map((activity) => {
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
