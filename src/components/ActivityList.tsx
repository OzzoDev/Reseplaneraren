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
    const updatedActivities = activities.filter((act) => {
      return act.id !== activity.id;
    });

    setActivities(updatedActivities);
  };

  const handleEditActivity = (activity: Activity) => {
    const updatedActivities = activities.map((act) => {
      if (act.id === activity.id) {
        return activity;
      }
      return act;
    });

    setActivities(updatedActivities);
  };

  return (
    <ul className="activity-list">
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
